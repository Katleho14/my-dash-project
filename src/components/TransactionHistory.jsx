// src/components/TransactionHistory.js
import React from 'react';

const transactionsData = [
  {
    id: 1,
    description: "Payment from #0199",
    date: "Dec 23, 04:00 PM",
    amount: "$421.00",
    status: "success",
  },
  {
    id: 2,
    description: "Payment from #0200",
    date: "Dec 24, 01:00 PM",
    amount: "$320.00",
    status: "success",
  },
  {
    id: 3,
    description: "Payment from #0201",
    date: "Dec 25, 10:00 AM",
    amount: "$150.00",
    status: "failed",
  },
];

const TransactionHistory = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <ul>
        {transactionsData.map((transaction) => (
          <li key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
            <div className="flex items-center">
              <i className={`fas ${transaction.status === 'success' ? 'fa-check-circle text-green-500' : 'fa-times-circle text-red-500'} mr-2`}></i>
              <div>
                <p className="text-gray-600">{transaction.description}</p>
                <p className="text-sm text-gray-400">{transaction.date}</p>
              </div>
            </div>
            <span className={`${transaction.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
