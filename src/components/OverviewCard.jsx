// src/components/OverviewCard.js
import React from 'react';

const OverviewCard = ({ title, value, percentage, icon, iconBg, iconColor }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}>
                    <i className={`${icon} ${iconColor} text-xl`}></i>
                </div>
                <div className="ml-4">
                    <p className="text-gray-600">{title}</p>
                    <p className="text-2xl font-bold">{value}</p>
                    <p className={`text-sm ${percentage.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{percentage}</p>
                </div>
            </div>
        </div>
    );
};

export default OverviewCard;
