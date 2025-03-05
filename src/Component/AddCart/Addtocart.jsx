import React, { useEffect, useState } from "react";
import "./Addtocart.css";
import FetchApi from "../CustomHook/useFetchApi";
import axios from "axios";
import { Link } from "react-router-dom";

function Addtocart() {
  let [cart, setCart] = useState([]);
  const [counts, setCounts] = useState({});
  let returnData = FetchApi("http://localhost:5555/men/");
  console.log(returnData, "returnData");

  function handleBuyNow(val) {
    if (confirm("Are you sure you want to buy this product?")) {
      alert("Thank you for purchasing! Your order will be processed soon.");
      rmData(val);
    }
  }

  function updateCount(id, action) {
    const newCounts = { ...counts };
    if (action === "increment") {
      newCounts[id] = newCounts[id] + 1;
    } else if (action === "decrement") {
      newCounts[id] = Math.max(newCounts[id] - 1, 1);
    }
    setCounts(newCounts);
  }

  useEffect(() => {
    const newCounts = {};
    cart.forEach((item) => {
      newCounts[item.id] = newCounts[item.id] || 1;
    });
    setCounts(newCounts);
  }, [cart]);

  function getFilterdata() {
    let filterData = returnData.filter((val) => {
      return val.addToCart === true;
    });
    setCart(filterData);
  }

  useEffect(() => {
    getFilterdata();
  }, [returnData]);

  console.log(cart, "cart");

  function rmData(val) {
    console.log(val, "val");
    val.addToCart = false;
    updateData(val.id, val);
  }

  function updateData(id, newVal) {
    axios.put(`http://localhost:5555/men/${id}`, newVal).then((resp) => {
      console.log(resp.data, "remove Data data");
      getFilterdata();
    });
  }

  useEffect(() => {}, [returnData]);

  return (
    <div>
      
      <div className="productGridadd">
        {cart?.map((val) => {
          return (
            <div className="mainContaineradd" key={val.id}>
              <div className="imgContaineradd">
                <div className="mainImgadd">
                  <Link to={`/product/productdesc/${val.id}`}>
                    {" "}
                    <img src={val.img[0]} alt={val.brand} />
                  </Link>
                </div>
              </div>

              <div className="descContaineradd">
                <h1>{val.brand}</h1>
                <h2>{val.desc}</h2>
                <h3>{`₹${(val.price * counts[val.id]).toFixed(2)}`}</h3>
                <h4>Available Size: {val.size}</h4>

                <div className="quantity-controlsadd">
                  <button onClick={() => updateCount(val.id, "increment")}>
                    +
                  </button>
                  <span>{counts[val.id]}</span>
                  <button onClick={() => updateCount(val.id, "decrement")}>
                    -
                  </button>
                </div>

                <div className="rm-add-cb">
                <button
                  className="rmbtnadd"
                  onClick={() => {
                    rmData(val);
                  }}
                >
                  Remove Product
                </button>
                <button
                  className="buyadd"
                  onClick={() => {
                    handleBuyNow(val);
                  }}
                >
                  Buy Now
                </button>
                <input type="checkbox"
                   id={val.id}
                   className=" checkbox"
                   />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Addtocart;
