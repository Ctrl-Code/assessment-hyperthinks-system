import { useEffect, useState } from "react";
import Chart from "chart.js/auto";

const getChartData = dailyArray => {
    return [
        dailyArray.map(entry => entry?.temp?.max ?? 0),
        dailyArray.map(entry => entry?.temp?.min ?? 0),
    ];
}

const generateConfigObject = (labels, temp, feelsLike) => {
    return {
        type: "bar",
        data: {
            labels,
            datasets: [{
                label: "7 Days Forecast Max. Temp.",
                backgroundColor: "#28af70",
                borderColor: "rgb(35, 213, 236)",
                data: temp,
            }, {
                label: "7 Days Forecast Min. Temp.",
                backgroundColor: "#aaf0cf",
                borderColor: "#33f333",
                data: feelsLike,
            }]
        },
        options: {
        }
    }
}

function DaysChart(props) {

    const [chartObj, setChartObj] = useState(null);

    useEffect(function setChart() {

        const chartLabels = [1, 2, 3, 4, 5, 6];
        const [maxTemp, minTemp] = getChartData(props?.oneData?.daily?.slice(0, 6) ?? []);
        const configObject = generateConfigObject(chartLabels, maxTemp, minTemp);

        if (chartObj)
            chartObj.destroy();

        // create chart
        let myChart = new Chart(
            document.getElementById('daysChart'),
            configObject,
        );
        setChartObj(myChart);

    }, [props?.oneData]);

    return <div>
        <div style={{
            fontSize: "25px",
            fontWeight: "500",
            color: "brown",
        }}>Next 8 days forecast</div>
        <div>
            <canvas id="daysChart" style={{ backgroundColor: "#ecc9e6" }}></canvas>
        </div>
    </div >
}

export default DaysChart;