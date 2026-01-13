import React from "react";
import { 
    XAxis, 
    ResponsiveContainer, 
    LineChart, 
    Line, 
    Tooltip, 
    CartesianGrid 
} from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className="m-5 p-5 bg-white rounded-lg shadow-[0px_2px_10px_rgba(220,220,220,1)]">
            <h3 className="text-xl font-bold text-gray-700 mb-5">{title}</h3>
            
            {/* 
                ResponsiveContainer needs an aspect ratio or a fixed height. 
                Aspect 4/1 means it is 4 times as wide as it is tall.
            */}
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                    
                    <XAxis 
                        dataKey="name" 
                        stroke="#4b5563" // Gray-600
                        fontSize={12}
                        tickMargin={10}
                    />
                    
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: "#fff", 
                            borderRadius: "8px", 
                            border: "none", 
                            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" 
                        }} 
                    />
                    
                    <Line 
                        type="monotone" 
                        dataKey={dataKey} 
                        stroke="#0f766e" // Teal-700 (Matches the Create button)
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
