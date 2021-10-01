import React from "react";
import { RadarData, RadarOptions } from "./RadarConfig";
import { Radar } from "react-chartjs-2";

//const chartRef = React.createRef();

export const RadarChart = () => (
    <Radar ref={React.createRef()} data={RadarData} options={RadarOptions} />
);