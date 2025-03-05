import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import createStore from "../../Context/createStore";
import Home from "../Home";

const Men = () => {
  const [apiData, setApidata] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const { data } = useContext(createStore);

  useEffect(() => {
    axios
      .get("http://localhost:5555/men")
      .then((resp) => {
        setApidata(resp.data);
        setFilterData(resp.data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  useEffect(() => {
    const filteredData = apiData.filter((val) =>
     (val.brand && val.brand.toLowerCase().includes(data.toLowerCase()))
    );
    setFilterData(filteredData);
  }, [data, apiData]);

  return (
    <div>
      <Home />
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
    </div>
  );
};

export default Men;
