import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Category 1", value: 400 },
  { name: "Category 2", value: 300 },
  { name: "Category 3", value: 300 },
  { name: "Category 4", value: 200 },
];

const COLORS = ["#003049", "#55a630", "#087e8b", "#dd2d4a"];

const ExpensePieChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        layout="vertical"
        align="left"
        verticalAlign="middle"
        iconSize={10}
        iconType="square"
        payload={data.map((entry, index) => ({
          value: entry.name,
          type: "square",
          id: `color-${index}`,
          color: COLORS[index % COLORS.length],
        }))}
      />
    </PieChart>
  );
};

export default ExpensePieChart;
