import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {  
  const navigate = useNavigate();
  return (
    <div id="not-found">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div class="text">
        <div class="text-center">
          <h1>404</h1>
          <p class="opps">
            {" "}
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
