import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ActivityLog from './pages/ActivityLog';
import Customer from './pages/Customer';
import Product from './pages/Product';
import Purchase from './pages/Purchase';
import Return from './pages/Return';
import Sale from './pages/Sale';
import Supplier from './pages/Supplier';
import User from './pages/User';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity-logs" element={<ActivityLog />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/products" element={<Product />} />
          <Route path="/purchases" element={<Purchase />} />
          <Route path="/returns" element={<Return />} />
          <Route path="/sales" element={<Sale />} />
          <Route path="/suppliers" element={<Supplier />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;