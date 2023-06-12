import React from "react";
import { Pie, Cell, PieChart, Label } from "recharts";

export default function PrecisionRoll({ R }) {
  R *= 100;
  const data = [{ value: R }, { value: 100 - R }, { value: 1 }];

  return (
        <PieChart width={150} height={150}>
      <Pie data={data} cx="50%" cy="50%" dataKey="value" innerRadius={25} outerRadius={32}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={index === 0 ? "green" : "#f3f6f9"} />
        ))}
        <Label
          value={data[0].value + "%"}
          position="center"
          fill="grey"
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        />
      </Pie>
    </PieChart>
  );
}

