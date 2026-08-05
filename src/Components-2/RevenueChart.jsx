import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 55000 },
  { month: "Jun", revenue: 68000 },
];

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 15, left: -15, bottom: 10, }}>
        <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={true} horizontal={true} />
        <XAxis dataKey="month" tick={{ fill: "#717182", fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#717182" }} />
        <YAxis domain={[0, 80000]} ticks={[0, 20000, 40000, 60000, 80000]} tick={{ fill: "#717182", fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#717182" }} />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#000000"
          strokeWidth={2}
          dot={{
            r: 3.5,
            fill: "#FFFFFF",
            stroke: "#000000",
            strokeWidth: 2,
          }}
          activeDot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}