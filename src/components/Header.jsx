// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-2xl font-bold">Overview</h1>
                <p className="text-gray-600">Detailed information about your store</p>
            </div>
            <div className="flex items-center">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="bg-white border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
                </div>
                <div className="ml-6">
                    <i className="fas fa-bell text-gray-400"></i>
                </div>
                <div className="ml-6">
                    <img
                        src="https://placehold.co/40x40"
                        alt="User profile"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
