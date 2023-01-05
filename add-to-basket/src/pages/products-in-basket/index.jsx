import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/productsContext";
import "./index.scss";

const ProductsInBasketPage = () => {
  const { basket, setBasket } = useContext(ProductsContext);

  const handleRemove = (element) => {
    setBasket(basket.filter((elem) => elem.id !== element.id));
  };
  const handleEmptycard = () => {
    setBasket([]);
  };

  return (
    <div id="basket-card">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Remove from Card</th>
            </tr>
          </thead>
          <tbody>
            {basket?.map((element) => {
              return (
                <tr>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.unitPrice}</td>
                  <td>{element.quantityPerUnit}</td>
                  <td>
                    <button onClick={() => handleRemove(element)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="btn">
        <button onClick={() => handleEmptycard()}>Empty Card</button>
      </div>
    </div>
  );
};

export default ProductsInBasketPage;
