import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
    AttachMoneyOutlined, 
    BarChartOutlined, 
    ChatBubbleOutlineOutlined, 
    Home, 
    MailOutlined, 
    ManageAccountsOutlined, 
    PersonOutline, 
    RecyclingOutlined, 
    Settings, 
    Storefront, 
    Timeline, 
    TrendingUp 
} from "@mui/icons-material";

export default function Sidebar() {
    const location = useLocation();

    // Helper function to handle active link styling
    const activeClass = (path) => 
        location.pathname === path ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-blue-50";

    return (
        <div className="flex-1 h-[calc(100vh-50px)] bg-slate-50 sticky top-[50px] overflow-y-auto border-r border-gray-100">
            <div className="p-5">
                
                {/* Dashboard Section */}
                <div className="mb-5">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">
                        Dashboard
                    </h3>
                    <ul className="list-none p-0 m-0">
                        <Link to="/" className="text-inherit no-underline">
                            <li className={`flex items-center p-2 rounded-lg cursor-pointer font-semibold transition-all mb-1 ${activeClass("/")}`}>
                                <Home className="!text-[20px] mr-2" /> Home
                            </li>
                        </Link>
                        <li className={`flex items-center p-2 rounded-lg cursor-pointer font-semibold transition-all mb-1 ${activeClass("/analytics")}`}>
                            <Timeline className="!text-[20px] mr-2" /> Analytics
                        </li>
                        <li className={`flex items-center p-2 rounded-lg cursor-pointer font-semibold transition-all mb-1 ${activeClass("/sales")}`}>
                            <TrendingUp className="!text-[20px] mr-2" /> Sales
                        </li>
                    </ul>
                </div>

                {/* Quick Menu Section */}
                <div className="mb-5">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">
                        Quick Menu
                    </h3>
                    <ul className="list-none p-0 m-0">
                        <Link to="/users" className="text-inherit no-underline">
                            <li className={`flex items-center p-2 rounded-lg cursor-pointer font-semibold transition-all mb-1 ${activeClass("/users")}`}>
                                <PersonOutline className="!text-[20px] mr-2" /> Users
                            </li>
                        </Link>
                        <Link to="/products" className="text-inherit no-underline">
                            <li className={`flex items-center p-2 rounded-lg cursor-pointer font-semibold transition-all mb-1 ${activeClass("/products")}`}>
                                <Storefront className="!text-[20px] mr-2" /> Products
                            </li>
                        </Link>
                        <li className="flex items-center p-2 rounded-lg cursor-pointer font-semibold text-gray-700 hover:bg-blue-50 transition-all mb-1">
                            <AttachMoneyOutlined className="!text-[20px] mr-2" /> Transactions
                        </li>
                        <li className="flex items-center p-2 rounded-lg cursor-pointer font-semibold text-gray-700 hover:bg-blue-50 transition-all mb-1">
                            <BarChartOutlined className="!text-[20px] mr-2" /> Reports
                        </li>
                    </ul>
                </div>

                {/* Notifications Section */}
                <div className="mb-5">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">
                        Notifications
                    </h3>
                    <ul className="list-none p-0 m-0">
                        <li className="flex items-center p-2 rounded-lg cursor-pointer font-semibold text-gray-700 hover:bg-blue-50 transition-all mb-1">
                            <MailOutlined className="!text-[20px] mr-2" /> Mail
                        </li>
                        <li className="flex items-center p-2 rounded-lg cursor-pointer font-semibold text-gray-700 hover:bg-blue-50 transition-all mb-1">
                            <RecyclingOutlined className="!text-[20px] mr-2" /> Feedback
                        </li>
                        <li className="flex items-center p-2 rounded-lg cursor-pointer font-semibold text-gray-700 hover:bg-blue-50 transition-all mb-1">
                            <ChatBubbleOutlineOutlined className="!text-[20px] mr-2" /> Messages
                        </li>
                    </ul>
                </div>

                {/* Staff Section */}
                <div className="mb-5">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">
                        Staff
                    </h3>
                    <ul className="list-none p-0 m-0">
                        <li className="flex items-center p-2 rounded-lg cursor-pointer font-semibold text-gray-700 hover:bg-blue-50 transition-all mb-1">
                            <ManageAccountsOutlined className="!text-[20px] mr-2" /> Manage
                        </li>
                        <li className="flex items-center p-2 rounded-lg cursor-pointer font-semibold text-gray-700 hover:bg-blue-50 transition-all mb-1">
                            <Settings className="!text-[20px] mr-2" /> Settings
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
