import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function TopBar() {
    return (
        <div className="w-full h-[50px] bg-white sticky top-0 z-50 shadow-[0px_2px_10px_rgba(220,220,220,1)] px-3">
            <div className="h-full flex items-center justify-between">
                
                {/* LOGO SECTION */}
                <div className="flex items-center">
                    <h2 className="text-3xl font-bold text-teal-700 cursor-pointer tracking-tight">
                        Dashboard
                    </h2>
                </div>

                {/* RIGHT ICONS & AVATAR */}
                <div className="flex items-center gap-4">
                    
                    {/* Notification Icon with Badge */}
                    <div className="relative cursor-pointer text-gray-600 hover:text-gray-800 transition-colors">
                        <NotificationsNone className="!text-[26px]" />
                        <span className="absolute -top-1 -right-1 w-[16px] h-[16px] bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                            2
                        </span>
                    </div>

                    {/* Language Icon */}
                    <div className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors">
                        <Language className="!text-[24px]" />
                    </div>

                    {/* Settings Icon */}
                    <div className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors">
                        <Settings className="!text-[24px]" />
                    </div>

                    {/* User Avatar */}
                    <img 
                        src="https://media.istockphoto.com/id/1320653933/photo/handsome-middle-aged-man-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=zxgREH3D9siF9lgH3_s2LUsRYxFDv68TCVds4sv20Gc=" 
                        alt="User Profile" 
                        className="w-[35px] h-[35px] rounded-full object-cover cursor-pointer border border-gray-100 hover:opacity-90 transition-opacity" 
                    />
                </div>
            </div>
        </div>
    );
}
