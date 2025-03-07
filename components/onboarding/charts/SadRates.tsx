"use client"
import {Cell, LabelList, Pie, PieChart, Tooltip} from "recharts";
const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const percent = payload[0].value
        return (
            <div className="bg-white p-2 shadow-md rounded-md border border-gray-300">
                <p className="text-sm font-medium text-gray-700">{percent}%</p>
            </div>
        );
    }
    return null;
};

export function SadRates(props: { data: ({ name: string; value: number } | { value: number; name: string })[] }) {
    return <PieChart width={400} height={400}>
        <Pie
            data={props.data}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
        >
            <LabelList data={props.data} dataKey="name"/>
        </Pie>
            {props.data.map((entry, index) => (
                <Cell key={`cell-${index}`} />
            ))}
        <Tooltip content={<CustomTooltip />} />
    </PieChart>;
}