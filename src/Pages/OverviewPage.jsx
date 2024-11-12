

import React from 'react';
import KPICard from '../components/KPICard';
import Products from '../components/ProductList';
import TransactionHistory from '../components/TransactionHistory'; // Import TransactionHistory component

const Overview = () => {
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Overview</h1>

       {/* KPI Cards Section */}
       <KPICard/>


      {/* Products Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Products</h2>
        <Products />
      </div>

      {/* Transaction History Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Transaction History</h2>
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Overview;

