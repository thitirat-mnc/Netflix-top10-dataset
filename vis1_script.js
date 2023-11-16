var spec1 = {
    autosize: { type: "fit", contains: "padding" },
    config: {
        title: {
        fontSize: 18,
        font: "Lato",
        anchor: "start",
        color: "#ffffff",
        },
        style: {
        "guide-label": { fill: "#fff" },
        "guide-title": { fill: "#fff" },
        },
        axisX: {
        labelColor: "#F5F5F1",
        titleColor: "#ededed",
        domain: true,
        domainColor: "#43465e",
        domainWidth: 0.5,
        grid: false,
        labelFont: "Lato",
        labelFontSize: 12,
        labelAngle: 0,
        tickColor: "#43465e",
        tickSize: 5,
        titleFont: "Lato",
        titleFontSize: 12,
        titlePadding: 10,
        title: "X Axis Title (units)",
        },
        axisY: {
        domain: false,
        domainColor: "#e4e4e4",
        grid: true,
        gridColor: "#43465e",
        gridWidth: 1,
        labelFont: "Lato",
        labelFontSize: 12,
        labelColor: "#F5F5F1",
        labelAngle: 0,
        ticks: false,
        titleFont: "Lato",
        titleFontSize: 12,
        titlePadding: 10,
        title: "Y Axis Title (units)",
        titleAngle: 0,
        titleY: -10,
        titleX: 18,
        },
        legend: { labelColor: "#888c95", titleColor: "#dadada" },
        view: { fill: "#000", stroke: "transparent" },
        background: "transparent",
        range: {
        category: [
            "#82000463",
            "#be000a",
            "#000000",
            "#980a0a",
            "#780909",
            "#0b0000",
            "#dedede",
            "#43465e",
        ],
        diverging: [
            "#cfe8f3",
            "#a2d4ec",
            "#73bfe2",
            "#46abdb",
            "#1696d2",
            "#12719e",
        ],
        },
    },
    vconcat: [
        {
        mark: {
            type: "line",
            color: "#fdffbf",
            point: { size: 100, color: "#fdffbf" },
        },
        encoding: {
            tooltip: [
            { field: "Year", type: "nominal" },
            { field: "Market Size (billion)", type: "quantitative" },
            ],
            x: { field: "Year", type: "nominal" },
            y: {
            axis: { labelAngle: 0, offset: 10 },
            field: "Market Size (billion)",
            title: "market side in billion $",
            type: "quantitative",
            },
        },
        height: 300,
        title: {
            text: "Global Video Streaming Market Size (billion)",
            font: "Lato",
        },
        transform: [{ filter: { param: "param_79" } }],
        width: 300,
        },
        {
        mark: { type: "bar", color: "#e50914", size: 20 },
        encoding: {
            color: {
            condition: { param: "param_79", value: "#e50914" },
            value: "#f0dddd",
            },
            tooltip: [
            { field: "Year", type: "nominal" },
            { field: "Market Size (billion)", type: "quantitative" },
            ],
            x: {
            axis: { grid: false, labelAngle: 0 },
            field: "Year",
            title: "year",
            type: "nominal",
            },
            y: {
            axis: { grid: false, labelAngle: 0 },
            field: "Market Size (billion)",
            type: "quantitative",
            },
        },
        height: 100,
        name: "view_78",
        width: 300,
        },
    ],
    data: { name: "data-fe6d48886c1bad62fa18ce2b631b5b8c" },
    params: [
        {
        name: "param_79",
        select: { type: "interval", encodings: ["x"] },
        views: ["view_78"],
        },
    ],
    $schema: "https://vega.github.io/schema/vega-lite/v5.14.1.json",
    datasets: {
        "data-fe6d48886c1bad62fa18ce2b631b5b8c": [
        { Year: 2018, "Market Size (billion)": 38.56 },
        { Year: 2019, "Market Size (billion)": 42.6 },
        { Year: 2020, "Market Size (billion)": 61.0 },
        { Year: 2021, "Market Size (billion)": 375.1 },
        { Year: 2022, "Market Size (billion)": 444.3 },
        { Year: 2023, "Market Size (billion)": 526.3 },
        ],
    },
};
  
  var embedOpt = { mode: "vega-lite" };
  
  function showError(el, error) {
    el.innerHTML =
      '<div style="color:red;">' +
      "<p>JavaScript Error: " +
      error.message +
      "</p>" +
      "<p>This usually means there's a typo in your chart specification. " +
      "See the javascript console for the full traceback.</p>" +
      "</div>";
    throw error;
  }
  
  const el = document.getElementById("vis");
  vegaEmbed("#vis", spec, embedOpt).catch((error) => showError(el, error));





  