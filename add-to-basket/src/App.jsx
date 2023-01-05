import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductsListPage from "./pages/products-list";
import ProductsInBasketPage from "./pages/products-in-basket";
import HomePage from "./pages/home-page";
import Header from "./layout/header";
import Footer from "./layout/footer";
import DetailsPage from "./pages/deatils-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products-list" element={<ProductsListPage />} />
        <Route path="/details-page/:id" element={<DetailsPage />} />
        <Route path="/products-in-basket" element={<ProductsInBasketPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
