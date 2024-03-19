import React from "react";

import { useEffect } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

import isAuthenticated from "../services/isAuthenticated";

function DashboardRoute() {
    const navigate = useNavigate();
  
    useEffect(() => {
        async function checkLogin() {
            const isLogged = await isAuthenticated();
            
            if (!isLogged) {
                navigate("/signin");
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
    );
}