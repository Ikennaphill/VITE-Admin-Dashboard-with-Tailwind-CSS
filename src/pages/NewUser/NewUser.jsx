import React from "react";

export default function NewUser() {
    return (
        <div className="m-5 p-5 bg-white rounded-lg shadow-[0px_0px_10px_rgba(220,220,220,1)]">
            <h3 className="text-2xl font-bold text-gray-700 mb-8">New User</h3>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {/* Username */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Username</label>
                    <input 
                        className="border-b border-gray-400 outline-none p-2 focus:border-teal-600 transition-colors text-gray-700" 
                        type="text" 
                        placeholder="john_doe" 
                    />
                </div>

                {/* Full Name */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Full Name</label>
                    <input 
                        className="border-b border-gray-400 outline-none p-2 focus:border-teal-600 transition-colors text-gray-700" 
                        type="text" 
                        placeholder="John Doe" 
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Email</label>
                    <input 
                        className="border-b border-gray-400 outline-none p-2 focus:border-teal-600 transition-colors text-gray-700" 
                        type="email" 
                        placeholder="john@gmail.com" 
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Password</label>
                    <input 
                        className="border-b border-gray-400 outline-none p-2 focus:border-teal-600 transition-colors text-gray-700" 
                        type="password" 
                        placeholder="password" 
                    />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Phone</label>
                    <input 
                        className="border-b border-gray-400 outline-none p-2 focus:border-teal-600 transition-colors text-gray-700" 
                        type="text" 
                        placeholder="+1 123 456 78" 
                    />
                </div>

                {/* Address */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Address</label>
                    <input 
                        className="border-b border-gray-400 outline-none p-2 focus:border-teal-600 transition-colors text-gray-700" 
                        type="text" 
                        placeholder="New York | USA" 
                    />
                </div>

                {/* Gender */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Gender</label>
                    <div className="flex items-center gap-6 py-2 text-gray-600">
                        <div className="flex items-center gap-2">
                            <input type="radio" name="gender" id="male" value="male" className="accent-teal-600" />
                            <label htmlFor="male" className="text-sm cursor-pointer">Male</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" name="gender" id="female" value="female" className="accent-teal-600" />
                            <label htmlFor="female" className="text-sm cursor-pointer">Female</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="radio" name="gender" id="other" value="other" className="accent-teal-600" />
                            <label htmlFor="other" className="text-sm cursor-pointer">Other</label>
                        </div>
                    </div>
                </div>

                {/* Active Status */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Active</label>
                    <select 
                        className="border-b border-gray-400 outline-none p-2 bg-transparent text-gray-700 focus:border-teal-600" 
                        name="active" 
                        id="active"
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 text-center mt-6">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-12 rounded-md transition-all active:scale-95 shadow-md">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}
