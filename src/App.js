import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import FavoriteProducts from "./pages/FavoriteProducts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/favorite-products" element={<FavoriteProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
