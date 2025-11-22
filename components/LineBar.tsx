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
            text: "Stock Price Movement",
            align: "left"
        },
        fill: {
            type: "gradient",
            gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
            }
        },
        yaxis: {
            labels: {
            formatter: function (val: number) {
                return val.toFixed(0);
            }
            },
            title: {
            text: "Score"
            }
        },
        xaxis: {
            type: "datetime"
        },
        tooltip: {
            shared: false,
            y: {
            formatter: function (val: number) {
                return val.toFixed(0);
            }
            }
        }
        }
    });

    
    return (
            <Chart
                options={chartData.options as ApexOptions}
                series={chartData.series}
                type="area"
                height={350}
                width={600}
            />
    );
}

export default LineBar;