import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between gap-5 px-5 mt-5">
            {/* Revenue Item */}
            <div className="flex-1 p-8 bg-white rounded-lg shadow-[0px_2px_10px_rgba(220,220,220,1)] cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-700">Revenue</span>
                <div className="my-3 flex items-center">
                    <span className="text-3xl font-bold text-black">$2,415</span>
                    <span className="flex items-center ml-5 text-sm font-normal text-gray-600">
                        -11.4 <ArrowDownward className="!text-[15px] ml-1 text-red-500" />
                    </span>
                </div>
                <span className="text-sm text-gray-400">Compared to last month</span>
            </div>

            {/* Sales Item */}
            <div className="flex-1 p-8 bg-white rounded-lg shadow-[0px_2px_10px_rgba(220,220,220,1)] cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-700">Sales</span>
                <div className="my-3 flex items-center">
                    <span className="text-3xl font-bold text-black">$4,415</span>
                    <span className="flex items-center ml-5 text-sm font-normal text-gray-600">
                        -1.4 <ArrowDownward className="!text-[15px] ml-1 text-red-500" />
                    </span>
                </div>
                <span className="text-sm text-gray-400">Compared to last month</span>
            </div>

            {/* Cost Item */}
            <div className="flex-1 p-8 bg-white rounded-lg shadow-[0px_2px_10px_rgba(220,220,220,1)] cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-700">Cost</span>
                <div className="my-3 flex items-center">
                    <span className="text-3xl font-bold text-black">$2,225</span>
                    <span className="flex items-center ml-5 text-sm font-normal text-gray-600">
                        +2.4 <ArrowUpward className="!text-[15px] ml-1 text-green-500" />
                    </span>
                </div>
                <span className="text-sm text-gray-400">Compared to last month</span>
            </div>
        </div>
    );
}
