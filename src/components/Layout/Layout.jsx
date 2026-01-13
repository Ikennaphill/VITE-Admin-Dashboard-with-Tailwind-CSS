import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TopBar is usually fixed or at the top of the stack */}
      <TopBar />
      
      {/* 
        This is the main flex container 
        items-start ensures the sidebar doesn't stretch 
      */}
      <div className="flex w-full">
        {/* Sidebar usually takes a fixed or flex-basis width */}
        <Sidebar />
        
        {/* 
          Main Content Area 
          flex-[4] ensures it takes up 4x more space than the sidebar (flex-1)
          overflow-hidden prevents the grid from breaking the layout
        */}
        <div className="flex-[4] overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
