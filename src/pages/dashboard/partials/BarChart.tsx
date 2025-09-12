import { barGraphData } from "@/data/dashboard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={barGraphData.map((item) => ({
          ...item,
          name: item.name.split(/[\s\/-]/).join("\n"),
        }))}
        margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5,
        }}
        barCategoryGap={90}
        barSize={50}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 10, right: 10 }}
          axisLine={false}
          tickLine={false}
          tick={({ x, y, payload }) => {
            const lines = payload.value.split("\n");
            return (
              <g transform={`translate(${x},${y + 10})`}>
                {lines.map((line: string, i: number) => (
                  <text
                    key={i}
                    x={0}
                    y={i * 16}
                    textAnchor="middle"
                    fill="#666"
                    fontSize={12}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          }}
        />
        <YAxis
          tickMargin={16}
          axisLine={false}
          tickLine={false}
          tick={{ dx: -8 }}
        />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="#536493"
          background={{ fill: "#eee" }}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DashboardBarChart;
