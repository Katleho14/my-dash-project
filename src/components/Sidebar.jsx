// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'; 

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 h-screen p-5">
            <div className="flex items-center mb-10">
                <img src={logo} alt="Hiphonic Logo" className="h-10 w-10 mr-2" />
                <h1 className="text-xl font-bold">Hiphonic</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/overview" 
                            className={({ isActive }) => 
                                `block py-2 px-3 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                            }
                        >
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/products" 
                            className={({ isActive }) => 
                                `block py-2 px-3 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/transactions" 
                            className={({ isActive }) => 
                                `block py-2 px-3 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                            }
                        >
                            Transactions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/settings" 
                            className={({ isActive }) => 
                                `block py-2 px-3 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                            }
                        >
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
