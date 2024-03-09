import {BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

import isAuthenticated from '../services/isAuthenticated';

function DashboardRoute() {
    const navigate = useNavigate();
  
    useEffect(() => {
        async function checkLogin() {
            const isLogged = await isAuthenticated();
            
            if (!isLogged) {
                navigate('/signin');
            }
        }
        
        checkLogin();
    }, [navigate]);
  
    return isAuthenticated() ? <Dashboard /> : null;
  }

export default function Routers() {
    return (
        <>
            <Router>
                <Routes>
                    <Route index path="/" element={<Navigate to="/signin" />} />

                    <Route path="/signin" element={<Signin />} />

                    <Route path="/signup" element={<Signup />} />

                    <Route path="/dashboard/*" element={<DashboardRoute />} />

                </Routes>
            </Router>
        </>
    )
}