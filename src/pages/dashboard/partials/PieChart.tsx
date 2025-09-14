import { useState } from "react";
import dayjs from "dayjs";
import { Pie, PieChart, ResponsiveContainer, Legend, Cell } from "recharts";
import { pieChartData } from "@/data/dashboard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const COLORS = ["#697bab", "#4b5a84", "#2e3751"];

const renderLabel = ({ cx, cy, midAngle, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius || 0;
  const x = (cx || 0) + radius * Math.cos(-RADIAN * (midAngle || 0));
  const y = (cy || 0) + radius * Math.sin(-RADIAN * (midAngle || 0));
  return (
    <g>
      <circle cx={x} cy={y} r={13} fill="#f0f0f0" />
      <text
        x={x}
        y={y}
        fill="#333"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={10}
        fontWeight={500}
      >
        {`${((percent || 0) * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

export default function DashboardPieChart() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const filteredData =
    pieChartData.find((item) => dayjs(item.month).isSame(currentMonth, "month"))
      ?.stages || [];

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => prev.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => prev.add(1, "month"));
  };

  return (
    <div className="w-full h-full">
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

      {filteredData.length === 0 ? (
        <div className="flex items-center justify-center h-80 text-gray-500 font-medium">
          No data available for this month
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={filteredData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={90}
              dataKey="value"
              labelLine={false}
              label={renderLabel}
              isAnimationActive={false}
            >
              {filteredData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>

            <Legend
              align="left"
              verticalAlign="bottom"
              layout="horizontal"
              iconType="circle"
              formatter={(_, __, i) => {
                if (
                  typeof i !== "number" ||
                  !filteredData[i] ||
                  typeof filteredData[i].name !== "string"
                ) {
                  return "";
                }
                const total = filteredData.reduce((sum, d) => sum + d.value, 0);
                const percent =
                  total > 0
                    ? ((filteredData[i].value / total) * 100).toFixed(0)
                    : 0;
                return `${filteredData[i].name} (${percent}%)`;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
