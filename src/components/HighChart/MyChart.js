import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useState, useEffect } from "react";

const MyChart = () => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions(
      fetch(
        "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v10.3.3/samples/data/usdeur.json"
      ).then((data) =>
        data.json().then((response) => {
          var lastDate = response[response.length - 1][0],
            days = 24 * 36e5;

          // Create the chart
          Highcharts.stockChart("dashboardContainer", {
            chart: {
              zoomType: "xy",
              height: 340,
            },

            accessibility: {
              enabled: false,
            },

            xAxis: {
              crosshair: false,
              tickLength: 0,
              labels: {
                enabled: false,
              },
              lineWidth: 0,
              lineColor: "transparent",
            },

            yAxis: {
              crosshair: false,
              tickLength: 0,
              labels: {
                enabled: false,
              },
              lineWidth: 0,
              lineColor: "transparent",
              gridLineWidth: 0,
              gridLineColor: "transparent",
            },

            credits: {
              enabled: false,
            },

            rangeSelector: {
              verticalAlign: "bottom",
              selected: 1,
              inputEnabled: false,
              buttonTheme: {
                visibility: "hidden",
              },
              labelStyle: {
                visibility: "hidden",
              },
              buttons: [
                {
                  type: "week",
                  count: 1,
                  text: "1w",
                },
                {
                  type: "week",
                  count: 3,
                  text: "3w",
                },
                {
                  type: "month",
                  count: 6,
                  text: "6m",
                },
                {
                  type: "month",
                  count: 9,
                  text: "9m",
                },
                {
                  type: "year",
                  count: 1,
                  text: "1y",
                },
                {
                  type: "all",
                  text: "All",
                },
              ],
            },

            navigator: {
              enabled: false,
            },

            scrollbar: {
              enabled: false,
            },

            plotOptions: {
              flags: {
                accessibility: {
                  exposeAsGroupOnly: true,
                  description: "Flagged events.",
                },
              },
            },

            series: [
              {
                name: "USD to EUR",
                data: response,
                color: "#8ff129",
                id: "dataseries",
                tooltip: {
                  valueDecimals: 1,
                },
              },
              {
                type: "flags",
                name: "Flags on series",
                data: [
                  {
                    x: lastDate - 11 * days,
                    title: "$ 17,643",
                  },
                ],
                onSeries: "dataseries",
                shape: "squarepin",
                color: "#8ff129",
                fillColor: "#8ff129",
                style: {
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#000000",
                },
              },
            ],
          });
        })
      )
    );
  }, []);

  return (
    <div id="dashboardContainer">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MyChart;
