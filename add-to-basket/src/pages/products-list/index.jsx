import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/productsContext";
import "./index.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.scss";
import { Helmet } from "react-helmet";
import { Space, Spin } from "antd";

const ProductsListPage = () => {
  const { productsData, setProductsData, basket, setBasket } =
    useContext(ProductsContext);
  const [spinStatus, setSpinStatus] = useState(true);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://northwind.vercel.app/api/products"
      );
      await setProductsData(response.data);
      setSpinStatus(false);
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
    } else {
      alert("you already added this product");
    }
  };

  return (
    <div id="products-list">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product list</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
       <div className="list">
       <div>
          {spinStatus ? (
            <div className="spin">
              <Space size="middle">
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
              </Space>
            </div>
          ) : (
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
                          className="addBtn"
                          // className={
                          //   basket.find((el) => el.id === product.id)
                          //     ? "added"
                          //     : "addBtn"
                          // }
                          disabled={
                            basket.find((el) => el.id === product.id)
                              ? true
                              : false
                          }
                          onClick={() => handleAddCard(product)}
                        >
                          {basket.find((el) => el.id === product.id)
                            ? "Added"
                            : "Add to Card"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
       </div>
      </div>
    </div>
  );
};

export default ProductsListPage;
