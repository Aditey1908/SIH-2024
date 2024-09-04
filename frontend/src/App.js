import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ActionDashboard from './components/ActionDashboard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword'; // Import the ResetPassword component


function App() {
    return (
        <Router>
            <Routes> 
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/action-dashboard" element={<ActionDashboard />} />
                <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </Router>
    );
}

export default App;
