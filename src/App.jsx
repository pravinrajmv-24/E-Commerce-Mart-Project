import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { toast } from 'react-toastify';
import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from './routes/Routes';

export const AppContext = createContext();

function AppTask() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1);

  const addtocart = (id) => {
    setCart((cart) => ({ ...cart, [id]: cart[id] ? cart[id] + qty : qty }));
    toast.success("Your item has been added!");
  };

  const handleQty = (e) => {
    setQty(Number(e.target.value));
  };

  const inc = (product) => {
    setCart((cart) => ({ ...cart, [product.id]: (cart[product.id] ? cart[product.id] : 0) + 1 }));
  };

  const dec = (product) => {
    setCart((cart) => ({ ...cart, [product.id]: (cart[product.id] ? cart[product.id] : 0) - 1 }));
  };

  return (
    <div>
      <AppContext.Provider value={{ cart, setCart, products, setProducts, inc, dec, addtocart, qty, setQty, handleQty }}>
        <Navbar />
        <AppRoutes />
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default AppTask;
