import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const HeavyChart = () => {

    const data = [
        { name: "Jan", sales: 400 },
        { name: "Feb", sales: 300 },
        { name: "Mar", sales: 500 },
        { name: "Apr", sales: 700 },
    ];

    return (
        <div>
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default HeavyChart;