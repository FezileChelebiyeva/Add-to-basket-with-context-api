import React, { useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [basket, setBasket] = useState([]);

  const data = {
    productsData,
    setProductsData,
    basket,
    setBasket,
  };
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
