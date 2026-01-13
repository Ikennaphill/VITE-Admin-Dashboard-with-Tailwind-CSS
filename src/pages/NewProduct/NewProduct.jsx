import React from "react";

export default function NewProduct() {
    return (
        <div className="m-5 p-5 bg-white rounded-lg shadow-[0px_0px_10px_rgba(220,220,220,1)]">
            <h3 className="text-2xl font-bold text-gray-700 mb-8">New Product</h3>
            
            <form className="flex flex-col items-center">
                {/* Image Upload */}
                <div className="flex flex-col w-full md:w-[60%] mb-5">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Product Image</label>
                    <input 
                        className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 cursor-pointer" 
                        type="file" 
                        id="file" 
                    />
                </div>

                {/* Name */}
                <div className="flex flex-col w-full md:w-[60%] mb-5">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Product Name</label>
                    <input 
                        className="border-b border-gray-400 outline-none p-2 focus:border-teal-600 transition-colors text-gray-700" 
                        type="text" 
                        placeholder="Apple Airpods" 
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col w-full md:w-[60%] mb-5">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Description</label>
                    <input 
                        className="border-b border-gray-400 outline-none p-2 focus:border-teal-600 transition-colors text-gray-700" 
                        type="text" 
                        placeholder="High-quality wireless earbuds..." 
                    />
                </div>

                {/* Stock */}
                <div className="flex flex-col w-full md:w-[60%] mb-5">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Stock Quantity</label>
                    <input 
                        className="border-b border-gray-400 outline-none p-2 focus:border-teal-600 transition-colors text-gray-700" 
                        type="number" 
                        placeholder="123" 
                    />
                </div>

                {/* Active Status */}
                <div className="flex flex-col w-full md:w-[60%] mb-5">
                    <label className="text-sm font-semibold text-gray-500 mb-2">Active Status</label>
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
                <div className="w-full text-center mt-8">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-16 rounded-md transition-all active:scale-95 shadow-md">
                        Create Product
                    </button>
                </div>
            </form>
        </div>
    );
}
