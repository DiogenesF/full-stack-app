import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import { ProductListPage } from "./ProductListPage";
import { ProductDetailsPage } from "./ProductDetailsPage";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/products" />}
                />
                <Route path="/products" element={<ProductListPage />} />
                <Route path="/product/:productIdAndBrand" element={<ProductDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

