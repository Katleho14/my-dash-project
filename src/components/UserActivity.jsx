// src/components/UserActivity.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

const UserActivity = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'User Activity',
        data: [120, 150, 180, 170, 200, 220, 250],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
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
      <h2 className="text-lg font-bold mb-4">User Activity</h2>
      <Bar data={data} options={options} />
    </motion.div>
  );
};

export default UserActivity;
