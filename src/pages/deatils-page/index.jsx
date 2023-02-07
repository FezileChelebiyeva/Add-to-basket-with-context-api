import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import { Helmet } from "react-helmet";
import { ProductsContext } from "../../context/productsContext";
import { Space, Spin } from "antd";

const DetailsPage = () => {
  const { basket, setBasket } = useContext(ProductsContext);
  const [dataById, setDataById] = useState([]);
  const [spinStatus, setSpinStatus] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/products/${id}`)
      .then((response) => {
        setDataById(response.data);
        setSpinStatus(false);
      });
  }, []);

  const handleAddToCard = (dataById) => {
    setBasket([...basket, dataById]);
  };

  return (
    <div id="details-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{dataById.name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {spinStatus ? (
        <div className="spin">
          <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <div className="deails">
          <div className="container">
            <h2>{dataById.name}</h2>
            <div>
              <p>
                <span>ID: </span>
                {dataById.id}
              </p>
              <p>
                <span>Unit Price: </span>
                {dataById.unitPrice}
              </p>
              <p>
                <span>Quantity Per Unit: </span>
                {dataById.quantityPerUnit}
              </p>
              <p>
                <span>Units in Stock: </span>
                {dataById.unitsInStock}
              </p>
              <button className="back" onClick={() => navigate(-1)}>
                Go back
              </button>
              <button
                disabled={
                  basket.find((el) => el.id === dataById.id) ? true : false
                }
                className="add"
                onClick={() => handleAddToCard(dataById)}
              >
                Add to Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
