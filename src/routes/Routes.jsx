// src/routes/Routes.js
import { Routes, Route } from "react-router-dom";
import Productpage from "../components/Product";
import Cartpage from "../components/Cart";
import Shop from "../components/Shop";
import ProductDetail from "../components/ProductDetail";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Productpage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/shop/detail" element={<ProductDetail />} />
        </Routes>
    );
}
