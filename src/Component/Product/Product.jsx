import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import createStore from "../Context/createStore";
import FetchApi from "../CustomHook/useFetchApi";

const Product = () => {
  let [apiData, setApidata] = useState([]);
  let [filterData, setFilterData] = useState([]);
  let { data } = useContext(createStore);
  console.log(data, "data inside product");

  let returnData = FetchApi("http://localhost:5555/men");

  useEffect(() => {
    if (returnData && Array.isArray(returnData)) {
      setApidata(returnData);
      setFilterData(returnData);
    }
  }, [returnData]);

  useEffect(() => {
    if (apiData.length > 0 && data) {
      let filtered = apiData.filter((val) => {
        return (
          val.brand && val.brand.toLowerCase().includes(data.toLowerCase())
        );
      });
      setFilterData(filtered);
    }
  }, [data, apiData]);

  return (
    <div className="productPage">
      <h1>Men's Shoes</h1>
      <div className="boxContainer">
        {filterData.map((val) => {
          const image = val.img && val.img[0] ? val.img[0] : null;
          const productDescPath = `/product/productdesc/${val.id}`;

          const price =
            !isNaN(val.price) && val.price !== null && val.price !== ""
              ? Number(val.price)
              : 0;

          return (
            <div className="box" key={val.id}>
              <Link to={productDescPath}>
                {image ? (
                  <img src={image} alt={val.brand} />
                ) : (
                  <div className="no-image">No Image Available</div>
                )}
                <h2>{val.brand}</h2>
                <h3>{`₹${price.toFixed(2)}`}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
