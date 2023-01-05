import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
const DetailsPage = () => {
  const [dataById, setDataById] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/products/${id}`)
      .then((response) => {
        setDataById(response.data);
      });
  }, []);

  return (
    <div id="details-page">
      <div>
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
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
