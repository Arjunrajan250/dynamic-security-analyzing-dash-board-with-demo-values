am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdivgrid4");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panY",
      // wheelY: "zoomY",
      pinchZoomY: true,
      paddingLeft: 0
    }));
    
    chart.get("colors").set("step", 3);
    
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 20,
      minorGridEnabled: true,
      strokeOpacity: 1,
      strokeWidth: 2,
      stroke: am5.color(0xffffff)
    });
    
    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "category",
      renderer: yRenderer,
      tooltip: am5.Tooltip.new(root, {}),
    }));
    
    yRenderer.labels.template.setAll({
      multiLocation: 0.5
    })
    
    yRenderer.grid.template.setAll({
      location: 1
    })
    
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererX.new(root, {
        strokeOpacity: 0.1,
        minGridDistance: 60
      })
    }));
    xAxis.get("renderer").labels.template.setAll({
      // fill: root.interfaceColors.get("alternativeText"),
      forceHidden: true
    });
    
    yAxis.get("renderer").labels.template.setAll({
      fill: root.interfaceColors.get("alternativeText")
    });
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      baseAxis: yAxis,
      valueXField: "close",
      openValueXField: "open",
      categoryYField: "category",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{openValueX} - {valueX}"
      })
    }));
    
    series.columns.template.setAll({
      height: 0.5
    });
    
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationX: 0,
        sprite: am5.Circle.new(root, {
          radius: 0,
          fill: series.get("fill")
        })
      })
    })
    
    var nextColor = chart.get("colors").getIndex(1);
    
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationX: 1,
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: nextColor
        })
      })
    })
    
    // Set data
    var data = [];
    var open = 100;
    var close = 120;
    
    var names = ["FW3-CS Amritalabs.net",
     "fdsds",
      "Shellie", 
      "EWF DNS", 
      "gitlab.accs.edu", 
      "acrd", "windows 10 Desktop", 
      "gitlab 3", "gitlab-server-2", 
      "ICTS-SWI-CISAI-2", 
      "web-2", 
      "cvs-innspark", 
      "innspark dns"
      
    
    ];
    
    for (var i = 0; i < names.length; i++) {
      open = 0;
      close = open + Math.round(Math.random() * 10) + 3;
      data.push({
        category: names[i],
        open: open,
        close: close
      });
    }
    
    yAxis.data.setAll(data);
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()