import { useEffect, useState } from "react";
import Chart from "chart.js/auto";

const getChartData = hourlyArray => {
    console.log('the array is', hourlyArray);
    return [
        hourlyArray.map(entry => entry?.temp ?? 0),
        hourlyArray.map(entry => entry?.feels_like ?? 0),
    ];
}

const generateConfigObject = (labels, temp, feelsLike) => {
    return {
        type: "line",
        data: {
            labels,
            datasets: [{
                label: "6 Hour Forecast",
                backgroundColor: "rgb(6, 73, 82)",
                borderColor: "rgb(35, 213, 236)",
                data: temp,
            }, {
                label: "6 Hour Feels Like Forecast",
                backgroundColor: "#125e12",
                borderColor: "#33f333",
                data: feelsLike,
            }]
        },
        options: {}
    }
}

function HourlyChart(props) {

    const [chartObj, setChartObj] = useState(null);

    useEffect(function setChart() {

        const chartLabels = [1, 2, 3, 4, 5, 6];
        const [chartTemp, chartFeelsLike] = getChartData(props?.oneData?.hourly?.slice(0, 6) ?? []);
        const configObject = generateConfigObject(chartLabels, chartTemp, chartFeelsLike);

        if (chartObj)
            chartObj.destroy();

        // create chart
        let myChart = new Chart(
            document.getElementById('hourlyChart'),
            configObject,
        );
        setChartObj(myChart);

    }, [props?.oneData]);

    return <div>
        <div style={{
            fontSize: "25px",
            fontWeight: "500",
            color: "#4d5202",
        }}>Next 6 hour forecast</div>
        <div>
            <canvas id="hourlyChart" style={{ backgroundColor: "#e8e8b3" }}></canvas>
        </div>
    </div>
}

export default HourlyChart;