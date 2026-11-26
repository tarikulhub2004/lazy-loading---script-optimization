'use client'
import dynamic from "next/dynamic";
import { useState } from "react";

// import HeavyChart from "@/components/HeavyChart";
const HeavyChart = dynamic((() => import('@/components/HeavyChart')),
    {
        loading: () => <p>Loading...</p>,
    })

const LineChart = dynamic(() => import('@/components/Charts').then((mod) => mod.LineChart))
const BarChart = dynamic(() => import('@/components/Charts').then((mod) => mod.BarChart))
const PieChart = dynamic(() => import('@/components/Charts').then((mod) => mod.PieChart))



const DashboardPage = () => {

    const [showChart, setShowChart] = useState(false);

    return (
        <div className="p-20">
            <h1>Dashboard</h1>
            <button onClick={() => setShowChart(true)} className="mb-10 border border-none bg-cyan-400 p-2 rounded-full text-sm">Show Chart</button>
            {showChart && <HeavyChart />}

            <LineChart></LineChart>
            <BarChart></BarChart>
            <PieChart></PieChart>

        </div>
    );
};

export default DashboardPage;