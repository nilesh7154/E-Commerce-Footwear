import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDesc.css";

const ProductDesc = () => {
  const [count, setCount] = useState(1);
  const param = useParams();
  const id = param.id;
  const [singleData, setSingleData] = useState([]);
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/men/${id}`)
      .then((resp) => {
        setSingleData([resp.data]);
        setImage(resp.data.img[0]);
      })
      .catch((err) => {
        setError("Failed to load product data");
      });
  }, [id]);

  const addToCart = (val) => {
    let newData = { ...val, addToCart: true };
    updateData(val.id, newData);
  };

  const updateData = (id, newData) => {
    axios.put(`http://localhost:5555/men/${id}`, newData).then(() => {
      console.log("Product added to cart");
    });
  };

  const handleBackClick = () => {
    navigate("/product");
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      {singleData.map((val) => (
        <div className="mainContainer" key={val.id}>
          <div className="imgContainer">
            <div className="mainImg">
              <img src={image} alt={val.brand} />
            </div>
            <div className="domimg">
              {Array.isArray(val.img) &&
                val.img.map((img, index) => (
                  <div
                    key={index}
                    className="sImg"
                    onMouseOver={() => setImage(img)}
                  >
                    <img src={img} alt={`Product image ${index + 1}`} />
                  </div>
                ))}
            </div>
          </div>

          <div className="descContainer">
            <h1 className="productname">{val.brand}</h1>
            <h2>{val.desc}</h2>
            <h3>{`₹${(val.price * count).toFixed(2)}`}</h3>
            <h4>Available Size: {val.size}</h4>

            <div className="quantity-controls">
              <button onClick={() => setCount(count + 1)}>+</button>
              <span>{count}</span>
              <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                -
              </button>
            </div>

            <button className="addToCart" onClick={() => addToCart(val)}>
              Add to Cart
            </button>
            <button className="back" onClick={handleBackClick}>
              Show More Shoes
            </button>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default ProductDesc;
