// src/components/KPICards.js
import React from 'react';

// KPI Card Component
const KPICard= ({ title, value, percentage, icon, iconBg, iconColor }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}>
                    <i className={`${icon} ${iconColor} text-xl`}></i>
                </div>
                <div className="ml-4">
                    <p className="text-gray-600">{title}</p>
                    <p className="text-2xl font-bold">{value}</p>
                    <p className={`text-sm ${percentage.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {percentage}
                    </p>
                </div>
            </div>
        </div>
    );
};

// Main KPI Cards Component
const KPICards = () => {
    const kpiData = [
        { title: "Sales", value: "$1,234.00", percentage: "+12%", icon: "fas fa-shopping-cart", iconBg: "bg-yellow-100", iconColor: "text-yellow-500" },
        { title: "Total Revenue", value: "$10,566.01", percentage: "+35%", icon: "fas fa-dollar-sign", iconBg: "bg-blue-100", iconColor: "text-blue-500" },
        { title: "Return", value: "$956.00", percentage: "-5%", icon: "fas fa-undo", iconBg: "bg-pink-100", iconColor: "text-pink-500" },
        { title: "Marketing", value: "5,566.01", percentage: "+15%", icon: "fas fa-bullhorn", iconBg: "bg-green-100", iconColor: "text-green-500" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => (
                <KPICard key={index} {...kpi} />
            ))}
        </div>
    );
};

export default KPICards;
