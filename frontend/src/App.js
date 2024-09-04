import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ActionDashboard from './components/ActionDashboard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/action-dashboard" element={<ActionDashboard />} />
                <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
