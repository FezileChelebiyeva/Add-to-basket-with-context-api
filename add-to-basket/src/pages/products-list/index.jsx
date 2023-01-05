import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/productsContext";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.scss";
const ProductsListPage = () => {
  const { productsData, setProductsData, basket, setBasket } =
    useContext(ProductsContext);

  const [colorStatus, setColorStatus] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://northwind.vercel.app/api/products"
      );
      await setProductsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddCard = (product) => {
    if (!basket.includes(product)) {
      setBasket([...basket, product]);
      // setColorStatus(true);
    } else {
      alert("var");
    }
  };

  return (
    <div id="products-list">
      <div>
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Deails</th>
              <th>Add to Card</th>
            </tr>
          </thead>
          <tbody>
            {productsData?.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>
                    <Link to={`/details-page/${product.id}`}>
                      {" "}
                      Products List
                    </Link>
                  </td>
                  <td>
                    <button
                      className={`addBtn ${colorStatus && "added"}`}
                      onClick={() => handleAddCard(product)}
                    >
                      Add to Card
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsListPage;
