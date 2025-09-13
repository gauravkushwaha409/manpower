import { useState } from "react";
import { barGraphData } from "@/data/dashboard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DashboardBarChart = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  // const filteredData = barGraphData
  //   .filter((item) => dayjs(item.date).isSame(currentMonth, "month"))
  //   .map((item) => ({
  //     ...item,
  //     name: item.name.split(/[\s\/-]/).join("\n"),
  //   }));

  const monthData = barGraphData.find(
    (item) =>
      dayjs(item.month, "YYYY-MM").format("YYYY-MM") ===
      currentMonth.format("YYYY-MM")
  );

  const chartData = monthData ? monthData.stages : [];

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => prev.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => prev.add(1, "month"));
  };

  const barSize = window.innerWidth < 768 ? 30 : 50;

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-full">
      <div className="flex items-center mb-4">
        <button onClick={handlePrevMonth} className="cursor-pointer">
          <ChevronLeft />
        </button>
        <span className="flex-1 text-center">
          {currentMonth.format("MMMM YYYY")}
        </span>
        <button onClick={handleNextMonth} className="cursor-pointer">
          <ChevronRight />
        </button>
      </div>
      {chartData.length === 0 ? (
        <div className="flex items-center justify-center h-80 text-gray-500 font-medium">
          No data available for this month
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 10,
              bottom: 5,
            }}
            barCategoryGap={90}
            barSize={barSize}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 5, right: 10 }}
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
      )}
    </div>
  );
};

export default DashboardBarChart;
