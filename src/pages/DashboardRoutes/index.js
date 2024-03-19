import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Products";
import RegisterProduct from "../RegisterProduct";

function DashboardRoutes() {
    return (
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/register-product" element={<RegisterProduct />} />
        </Routes>
    );
}

export default DashboardRoutes;
