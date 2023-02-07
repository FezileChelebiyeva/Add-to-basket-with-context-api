import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import productImg from "../../assets/images/product.png";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <div className="text">
          <h2>Welcome to home page</h2>
          <p className="about">
            Products can be differentiated based on their reliability and
            durability. Some batteries, for example, are reputed to have a
            longer life than other batteries, and consumers will buy them based
            on this factor.
          </p>
          <p className="question">Do you want to see products listings?</p>
          <button onClick={() => navigate("/products-list")}>
            Go Products List
          </button>
        </div>
        <div className="img">
          <img src={productImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
