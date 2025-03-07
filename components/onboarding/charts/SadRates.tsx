"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";

// Vibrant color palette that works in both light and dark modes
const COLORS = [
  "hsl(340, 82%, 52%)", // Pink/Red
  "hsl(262, 83%, 58%)", // Purple
  "hsl(190, 95%, 39%)", // Teal
  "hsl(43, 96%, 56%)", // Yellow
  "hsl(142, 71%, 45%)", // Green
];

// Custom renderer for the labels to ensure visibility in both modes
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
  value,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      className="text-xs font-medium text-foreground"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${value}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-background p-3 shadow-md rounded-md border border-border">
        <p className="text-sm font-medium">
          {data.name}: {data.value}%
        </p>
      </div>
    );
  }
  return null;
};

export function SadRates({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  const { theme } = useTheme();

  return (
    <Card className="p-6 h-[500px] w-full">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Mental Health Assessment
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke={
                  theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                }
                strokeWidth={1}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            formatter={(value) => (
              <span className="text-sm text-foreground">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
