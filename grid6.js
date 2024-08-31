const threatchart=(chartdiv6,data)=>{
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new(chartdiv6);
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
      layout: root.verticalLayout,
      paddingRight: 30
    }));
    
    
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );
    
   
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "category",
      renderer: am5xy.AxisRendererX.new(root, {
    
      }),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var xRenderer = xAxis.get("renderer");
    
    xRenderer.grid.template.set("forceHidden", true);
    xRenderer.labels.template.set("forceHidden", true);
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      max: 400,
      strictMinMax: true,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    var yRenderer = yAxis.get("renderer");
    
    yRenderer.grid.template.set("forceHidden", true);
    yRenderer.labels.template.set("forceHidden", true);
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "category",
      maskBullets: false
    }));
    
    series.columns.template.setAll({
      //tooltipText: "{categoryX}: {valueY}",
      width: am5.p1000,
      tooltipY: 0,
      strokeOpacity: 0,
      strokeWidth:2,
      
      templateField: "columnSettings"
    });
    
    series.bullets.push(function(root, target, dataItem) {
      if (dataItem.dataContext.currentBullet) {
        var container = am5.Container.new(root, {});
        
        var pin = container.children.push(am5.Graphics.new(root, {
          fill: dataItem.dataContext.columnSettings.fill,
          dy: -5,
          centerY: am5.p100,
          centerX: am5.p50,
        //   svgPath: "M66.9 41.8c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4 0 11.3 20.4 32.4 20.4 32.4s20.4-21.1 20.4-32.4zM37 41.4c0-5.2 4.3-9.5 9.5-9.5s9.5 4.2 9.5 9.5c0 5.2-4.2 9.5-9.5 9.5-5.2 0-9.5-4.3-9.5-9.5z"
        }));
        
        var label = container.children.push(am5.Label.new(root, {
          text: dataItem.get("categoryX"),
          dy: -38,
          centerY: am5.p50,
          centerX: am5.p50,
          populateText: true,
          paddingTop: 5,
          paddingRight: 5,
          paddingBottom: 5,
          paddingLeft: 5,
         
        }));
        
        return am5.Bullet.new(root, {
          locationY: 1,
          sprite: container
        });
      }
      else if (dataItem.dataContext.targetBullet) {
        var container = am5.Container.new(root, {
          dx: 15
        });
        
        
        
       
        return am5.Bullet.new(root, {
          locationY: 0.5,
          sprite: container
        });
      }
      return false;
    });
    
    series.data.setAll(data);
    
    // Add labels
    function addAxisLabel(category, text) {
      var rangeDataItem = xAxis.makeDataItem({
        category: category
      });
      
      var range = xAxis.createAxisRange(rangeDataItem);
    
      range.get("label").setAll({
        //fill: am5.color(0xffffff),
        text: text,
        forceHidden: false
      });
    
      range.get("grid").setAll({
        //stroke: color,
        strokeOpacity: 1,
        location: 1
      });
    }
    
    addAxisLabel("15", "20+");
    addAxisLabel("10", "10");
    addAxisLabel("5", "5");
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000, 100);
    chart.appear(1000, 100);
    
    }); // end am5.ready()
  }

  var data1 = [{
    category: "24",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, 
  {
      category: "23",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "22",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "21",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "20",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "19",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "18",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "17",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "16",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "15",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },{
    category: "14",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "13",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "12",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "11",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "10",
    value: 100,
    currentBullet: true,
    columnSettings: {
      fill: am5.color(0xc6251a)
    }
  }, {
    category: "9",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "8",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "7",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "6",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "5",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "4",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "3",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "2",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "1",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "0",
    value: 100,
    targetBullet: true,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }  
  }];    



  var data2 = [{
    category: "24",
    value: 100,
    columnSettings: {
      fill: am5.color(0xc6251a)
    }
  }, 
  {
      category: "23",
      value: 100,
      columnSettings: {
        fill: am5.color(0xc6251a)
      }
    },
    {
      category: "22",
      value: 100,
      columnSettings: {
        fill: am5.color(0xc6251a)
      }
    },
    {
      category: "21",
      value: 100,
      columnSettings: {
        fill: am5.color(0xc6251a)
      }
    },
    {
      category: "20",
      value: 100,
      columnSettings: {
        fill: am5.color(0xc6251a)
      }
    },
    {
      category: "19",
      value: 100,
      columnSettings: {
        fill: am5.color(0xc6251a)
      }
    },
    {
      category: "18",
      value: 100,
      columnSettings: {
        fill: am5.color(0xc6251a)
      }
    },
    {
      category: "17",
      value: 100,
      columnSettings: {
        fill: am5.color(0xc6251a)
      }
    },
    {
      category: "16",
      value: 100,
      columnSettings: {
        fill: am5.color(0xc6251a)
      }
    },
    {
      category: "15",
      value: 100,
      columnSettings: {
        fill: am5.color(0xc6251a)
      }
    },{
    category: "14",
    value: 100,
    columnSettings: {
      fill: am5.color(0xc6251a)
    }
  }, {
    category: "13",
    value: 100,
    columnSettings: {
      fill: am5.color(0xc6251a)
    }
  }, {
    category: "12",
    value: 100,
    columnSettings: {
      fill: am5.color(0xc6251a)
    }
  }, {
    category: "11",
    value: 100,
    columnSettings: {
      fill: am5.color(0xc6251a)
    }
  }, {
    category: "10",
    value: 100,
    currentBullet: true,
    columnSettings: {
      fill: am5.color(0xc6251a)
    }
  }, {
    category: "9",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "8",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "7",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "6",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "5",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "4",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "3",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "2",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "1",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "0",
    value: 100,
    targetBullet: true,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }  
  }];


  var data3 = [{
    category: "24",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, 
  {
      category: "23",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "22",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "21",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "20",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "19",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "18",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "17",
      value: 100,
      columnSettings: {
        fill: am5.color(0xc6251a)
      }
    },
    {
      category: "16",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },
    {
      category: "15",
      value: 100,
      columnSettings: {
        fill: am5.color(0xA5A5A5)
      }
    },{
    category: "14",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "13",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "12",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "11",
    value: 100,
    columnSettings: {
      fill: am5.color(0xc6251a)
    }
  }, {
    category: "10",
    value: 100,
    currentBullet: true,
    columnSettings: {
      fill: am5.color(0xc6251a)
    }
  }, {
    category: "9",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "8",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "7",
    value: 100,
    columnSettings: {
      fill: am5.color(0xc6251a)
    }
  }, {
    category: "6",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "5",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "4",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "3",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "2",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "1",
    value: 100,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }
  }, {
    category: "0",
    value: 100,
    targetBullet: true,
    columnSettings: {
      fill: am5.color(0xA5A5A5)
    }  
  }];

  threatchart("chartdiv6",data1)
 
  threatchart("chartdiv62",data2)
  threatchart("chartdiv63",data3)
