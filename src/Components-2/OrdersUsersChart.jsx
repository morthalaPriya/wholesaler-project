import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", orders: 320, users: 90 },
  { month: "Feb", orders: 380, users: 95 },
  { month: "Mar", orders: 350, users: 92 },
  { month: "Apr", orders: 420, users: 110 },
  { month: "May", orders: 390, users: 100 },
  { month: "Jun", orders: 450, users: 115 },
];

export default function OrdersUsersChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 15, left: -15, bottom: 10, }} barGap={8} barCategoryGap="28%">
        <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical horizontal />
        <XAxis dataKey="month" tick={{ fill: "#717182", fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#717182" }} />
        <YAxis domain={[0, 600]} ticks={[0, 150, 300, 450, 600]} tick={{ fill: "#717182", fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#717182" }} />
        <Bar dataKey="orders" fill="#000000" radius={[0, 0, 0, 0]} barSize={18} isAnimationActive={false} />
        <Bar dataKey="users" fill="#000000" radius={[0, 0, 0, 0]} barSize={18} isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}