// src/components/Settings.js
import React from 'react';

const Settings = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <p className="text-gray-600">Manage your application settings here.</p>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">General Settings</h2>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="app-name">Application Name</label>
                    <input
                        type="text"
                        id="app-name"
                        placeholder="Enter app name"
                        className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="app-email">Support Email</label>
                    <input
                        type="email"
                        id="app-email"
                        placeholder="Enter support email"
                        className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Save Changes
                </button>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Notifications</h2>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Enable Notifications
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Settings;
