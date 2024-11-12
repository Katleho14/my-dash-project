// src/components/RevenueChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';

const RevenueChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [3000, 2000, 4000, 5000, 4000, 6000, 7000],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold mb-4">Overall Revenue</h2>
      <Line data={data} options={options} />
    </motion.div>
  );
};

export default RevenueChart;
