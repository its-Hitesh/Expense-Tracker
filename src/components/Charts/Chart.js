import React from "react";
import './Chart.css'
import ChartBars from "./ChartBars"
const Chart = (props) => {
    
    const dataArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataArray);
    
    return (<div className="chart">
        {props.dataPoints.map((dataPoint) => 
        (<ChartBars 
            key ={dataPoint.lable}
            value = {dataPoint.value} 
            maxValue={totalMax}
            lable = {dataPoint.lable}
        />))}
    </div>
    )
}


export default Chart;