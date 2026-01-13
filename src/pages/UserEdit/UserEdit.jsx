import React from "react";
import { 
    CalendarToday, 
    FmdGoodOutlined, 
    MailOutline, 
    PermIdentity, 
    PhoneAndroid, 
    PhotoCameraOutlined 
} from "@mui/icons-material";

export default function UserEdit() {
    return (
        <div className="flex flex-col lg:flex-row p-5 gap-5">
            {/* LEFT SIDE: User Display Card */}
            <div className="flex-1 bg-white p-5 rounded-lg shadow-[0px_0px_10px_rgba(220,220,220,1)]">
                {/* Profile Top */}
                <div className="flex items-center gap-5">
                    <img 
                        className="w-10 h-10 rounded-full object-cover" 
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="User" 
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold text-xl text-gray-800">Anna Backer</span>
                        <span className="font-light text-gray-500">Software Engineer</span>
                    </div>
                </div>

                {/* Account Details Section */}
                <div className="mt-8">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Account Details
                    </h3>
                    <div className="flex items-center my-4 text-gray-600">
                        <PermIdentity className="!text-[18px] mr-4" />
                        <span className="text-sm font-medium">annabacker59</span>
                    </div>
                    <div className="flex items-center my-4 text-gray-600">
                        <CalendarToday className="!text-[18px] mr-4" />
                        <span className="text-sm font-medium">10.12.1995</span>
                    </div>

                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-3">
                        Contact Details
                    </h3>
                    <div className="flex items-center my-4 text-gray-600">
                        <PhoneAndroid className="!text-[18px] mr-4" />
                        <span className="text-sm font-medium">+1 123 456 67</span>
                    </div>
                    <div className="flex items-center my-4 text-gray-600">
                        <MailOutline className="!text-[18px] mr-4" />
                        <span className="text-sm font-medium">annabacker@gmail.com</span>
                    </div>
                    <div className="flex items-center my-4 text-gray-600">
                        <FmdGoodOutlined className="!text-[18px] mr-4" />
                        <span className="text-sm font-medium">New York, USA</span>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: User Edit Form */}
            <div className="flex-[2] bg-white p-5 rounded-lg shadow-[0px_0px_10px_rgba(220,220,220,1)]">
                <h3 className="text-2xl font-bold text-gray-700 mb-6">Edit User</h3>
                
                <form className="flex flex-col justify-between h-full">
                    {/* Avatar Upload Section */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative group cursor-pointer">
                            <img 
                                className="w-24 h-24 rounded-xl object-cover border-2 border-gray-100 shadow-sm" 
                                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                alt="Avatar Preview" 
                            />
                            {/* Hover Mask */}
                            <label 
                                htmlFor="avatar" 
                                className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer text-white"
                            >
                                <PhotoCameraOutlined />
                            </label>
                            <input type="file" id="avatar" className="hidden" />
                        </div>
                        <span className="text-xs text-gray-400 mt-2 italic">Click image to upload new avatar</span>
                    </div>

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-600">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Anna Backer" 
                                className="border-b border-gray-300 focus:border-teal-600 outline-none p-2 transition-colors text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-600">Username</label>
                            <input 
                                type="text" 
                                placeholder="annabacker59" 
                                className="border-b border-gray-300 focus:border-teal-600 outline-none p-2 transition-colors text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-600">Email</label>
                            <input 
                                type="email" 
                                placeholder="annabacker@gmail.com" 
                                className="border-b border-gray-300 focus:border-teal-600 outline-none p-2 transition-colors text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-600">Phone</label>
                            <input 
                                type="text" 
                                placeholder="+1 123 456 67" 
                                className="border-b border-gray-300 focus:border-teal-600 outline-none p-2 transition-colors text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-sm font-semibold text-gray-600">Address</label>
                            <input 
                                type="text" 
                                placeholder="New York, USA" 
                                className="border-b border-gray-300 focus:border-teal-600 outline-none p-2 transition-colors text-sm"
                            />
                        </div>
                    </div>

                    {/* Submit Button Container */}
                    <div className="mt-10 text-center md:text-right">
                        <button 
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-md transition-all shadow-md active:scale-95"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
