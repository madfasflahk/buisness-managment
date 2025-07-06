import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Business Tracker</Link>
        <ul className="flex space-x-4">
          <li><Link to="/activity-logs" className="text-gray-300 hover:text-white">Activity Logs</Link></li>
          <li><Link to="/customers" className="text-gray-300 hover:text-white">Customers</Link></li>
          <li><Link to="/products" className="text-gray-300 hover:text-white">Products</Link></li>
          <li><Link to="/purchases" className="text-gray-300 hover:text-white">Purchases</Link></li>
          <li><Link to="/returns" className="text-gray-300 hover:text-white">Returns</Link></li>
          <li><Link to="/sales" className="text-gray-300 hover:text-white">Sales</Link></li>
          <li><Link to="/suppliers" className="text-gray-300 hover:text-white">Suppliers</Link></li>
          <li><Link to="/users" className="text-gray-300 hover:text-white">Users</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;