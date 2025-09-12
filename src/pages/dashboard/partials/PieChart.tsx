import { Pie, PieChart, ResponsiveContainer, Legend, Cell } from "recharts";

const data = [
  { name: "Approved Candidates", value: 400 },
  { name: "Pending Candidates", value: 300 },
  { name: "Rejected Candidates", value: 300 },
];

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
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Center vertically
        padding: "24px 0",
      }}
    >
      <ResponsiveContainer width={320} height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            dataKey="value"
            labelLine={false}
            label={renderLabel}
            isAnimationActive={false}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Legend
            align="left"
            verticalAlign="bottom"
            layout="horizontal"
            iconType="circle"
            formatter={(_, __, i) => {
              const total = data.reduce((sum, d) => sum + d.value, 0);
              const percent = ((data[i].value / total) * 100).toFixed(0);
              return `${data[i].name} (${percent}%)`;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
