import React from "react";
import Chart from "react-google-charts";

const HistogramChart = ({ data }) => {
  return (
    <Chart
      width={"100%"}
      height={"300px"}
      chartType="BarChart"
      loader={<div>Loading Chart...</div>}
      data={[
        ["Hospital", "Total Claims"],
        ...data.map(({ hospital, totalClaims }) => [hospital, totalClaims]),
      ]}
      options={{
        title: "Hospital Claims Overview",
        legend: { position: "top" },
        colors: ["#3366CC"], // Customize bar colors if needed
      }}
    />
  );
};

export default HistogramChart;
