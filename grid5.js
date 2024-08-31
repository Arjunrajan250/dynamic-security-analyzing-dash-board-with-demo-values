/** @format */

const chartInit = (dataObj, id) => {
  am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new(id);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    var chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        innerRadius: am5.percent(50),
        startAngle: -90,
        endAngle: 270,
      })
    );

    // Data
    var data = [
      {
        category: dataObj.category1,
        value: dataObj.value1,
        full: 100,
        columnSettings: {
          fill: am5.color(0xf0bb32),
        },
      },
      {
        category: 66,
        value: dataObj.value2,
        full: 100,
        columnSettings: {
          fill: am5.color(0x9b9b9b),
        },
      },
    ];

    // function generateRandomValues(dataArray) {
    //   dataArray.forEach(item => {
    //     item.category = Math.floor(Math.random() * 101);
    //     item.value = Math.floor(Math.random() * 101);
    //   });
    // }

    // Call the function to update the data array with random values
    // generateRandomValues(data);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
    var cursor = chart.set(
      "cursor",
      am5radar.RadarCursor.new(root, {
        behavior: "zoomX",
      })
    );

    cursor.lineY.set("visible", false);

    // Create axes and their renderers
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
    var xRenderer = am5radar.AxisRendererCircular.new(root, {
      //minGridDistance: 50
    });

    xRenderer.labels.template.setAll({
      forceHidden: true,
    });

    xRenderer.grid.template.setAll({
      forceHidden: false,
      radius: -10,
    });

    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: xRenderer,
        min: 0,
        max: 100,
        strictMinMax: true,
        numberFormat: "#'%'",
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    var yRenderer = am5radar.AxisRendererRadial.new(root, {
      minGridDistance: 20,
    });

    yRenderer.labels.template.setAll({
      centerX: am5.p50,
      fontWeight: "bold",
      fontSize: 18,
      radius: -18,
      fill: am5.color(0xb21127),
    });

    yRenderer.grid.template.setAll({
      forceHidden: true,
    });

    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: yRenderer,
      })
    );

    yAxis.data.setAll(data);

    var legend = chart.children.push(
      am5.Legend.new(root, {
        nameField: "name",
        centerX: am5.percent(20),
        y: am5.percent(80),
      })
    );

    legend.data.setAll([
      {
        name: dataObj.name,
      },
    ]);

    legend.labels.template.setAll({
      fill: am5.color(0xffffff),
    });

    // Create series
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
    var series1 = chart.series.push(
      am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        clustered: false,
        valueXField: "full",
        categoryYField: "category",
        // fill: root.interfaceColors.get("alternativeBackground"),
      })
    );

    series1.columns.template.setAll({
      width: am5.p100,
      fillOpacity: 0.3,
      strokeOpacity: 0,
      cornerRadius: 20,
      templateField: "columnSettings",
    });

    series1.data.setAll(data);

    var series2 = chart.series.push(
      am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        clustered: false,
        valueXField: "value",
        categoryYField: "category",
      })
    );

    series2.columns.template.setAll({
      width: am5.p100,
      strokeOpacity: 0,
      tooltipText: "{category}: {valueX}%",
      cornerRadius: 20,
      templateField: "columnSettings",
    });

    series2.data.setAll(data);

    // Animate chart and series in
    // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
    series1.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);
  }); // end am5.ready()
};

const dataValues = [
  {
    // id: "chartdiv51",
    name: "ACCF-WC",
    category1: "30",
    value1: "30",
    value2: "60",
  },
  {
    // id: "chartdiv52",
    name: "CISAI-Test",
    category1: "35",
    value1: "50",
    value2: "70",
  },
  {
    // id: "chartdiv53",
    name: "ICTS-Test",
    category1: "40",
    value1: "20",
    value2: "80",
  },
  {
    // id: "chartdiv54",
    name: "Test",
    category1: "45",
    value1: "30",
    value2: "90",
  },
  {
    // id: "chartdiv55",
    name: "Test-Windows",
    category1: "40",
    value1: "40",
    value2: "50",
  },
  {
    // id: "chartdiv56",
    name: "Test",
    category1: "50",
    value1: "50",
    value2: "70",
  },
  {
    // id: "chartdiv57",
    name: "Test",
    category1: "55",
    value1: "60",
    value2: "60",
  },
  {
    // id: "chartdiv58",
    name: "Test",
    category1: "60",
    value1: "20",
    value2: "70",
  },
  {
    // id: "chartdiv59",
    name: "Test-Windows",
    category1: "65",
    value1: "20",
    value2: "80",
  },
  {
    // id: "chartdiv10",
    name: "Test",
    category1: "70",
    value1: "20",
    value2: "80",
  },
  {
    // id: "chartdiv59",
    name: "Test-Windows",
    category1: "65",
    value1: "20",
    value2: "80",
  },
  {
    // id: "chartdiv10",
    name: "Testt",
    category1: "70",
    value1: "20",
    value2: "80",
  },
];


// chartInit("chartdiv52","CISAI-Test")

for(let i=0;i<dataValues.length;i++){
  chartInit(dataValues[i], `chartdiv5${i+1}`)
}
