import React from "react";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import { userData } from "../../Utilities/userData";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

export default function Home() {
    return (
        <div className="flex-[4] p-2">
            {/* Top Stat Cards */}
            <FeaturedInfo />
            
            {/* Analytics Chart */}
            <Chart 
                title="User Analytics" 
                data={userData} 
                dataKey="Active User" 
                grid 
            />
            
            {/* Bottom Widgets Section */}
            <div className="flex flex-col xl:flex-row gap-5 m-5">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
