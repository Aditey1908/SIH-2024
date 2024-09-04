import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HelloWorld from './components/Helloworld';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/hello-world" element={<HelloWorld />} />
            </Routes>
        </Router>
    );
}

export default App;
