"use client";

import { useState } from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const LineBar = ({data} : {data: { x: number, y: number}[]}) => {    
      const [chartData] = useState({
        series: [
        {
            name: "XYZ MOTORS",
            data
        }
        ],
        options: {
        colors: ["#84B179"],
        chart: {
            type: "area",
            stacked: false,
            height: 350,
            zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true
            },
            toolbar: {
            autoSelected: "zoom"
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0
        },
        title: {
            text: "Life graph",
            align: "left",
            style: {
              color: "#2f4a2a",
            },
        },
        fill: {
            type: "gradient",
            gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.6,
            opacityTo: 0,
            stops: [0, 90, 100]
            }
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        yaxis: {
            labels: {
            style: {
                colors: "#2f4a2a",
            },
            formatter: function (val: number) {
                return val.toFixed(0);
            }
            },
            title: {
            text: "Score",
            style: {
                color: "#2f4a2a",
            },
            }
        },
        xaxis: {
            type: "datetime",
            labels: {
              style: {
                colors: "#2f4a2a",
              },
            },
        },
        grid: {
            borderColor: "#C7EABB",
        },
        tooltip: {
            shared: false,
            theme: "light",
            y: {
            formatter: function (val: number) {
                return val.toFixed(0);
            }
            }
        }
        }
    });

    
    return (
            <div className="bg-white rounded-4xl p-4 max-w-min border-2 border-slate-200">
                <Chart
                    options={chartData.options as ApexOptions}
                    series={chartData.series}
                    type="area"
                    height={350}
                    width={600}
                    className="bg-white rounded-lg p-4 max-w-min"
                />
            </div>
    );
}

export default LineBar;