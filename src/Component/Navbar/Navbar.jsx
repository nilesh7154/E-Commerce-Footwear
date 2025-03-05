import React, { useContext, useEffect, useState, useRef } from "react";
import createStore from "../Context/createStore";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Navbar() {
  let [nav, setNav] = useState([]);
  let { setData, data } = useContext(createStore);
  let { pathname } = useLocation();

  const searchBoxRef = useRef(null);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5555/men").then((resp) => {
      console.log(resp.data, "resp");
      setNav(resp.data);
    });
  }, []);

  useEffect(() => {
    if (pathname.includes("/product") || pathname.includes("/product/productdesc/")) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  }, [pathname]);

  function showSearchBoxHandler(e) {
    const inputValue = e.target.value;
    setData(inputValue);

    if (inputValue !== "" && showSearchBar) {
      if (searchBoxRef.current) {
        searchBoxRef.current.style.display = "block";
        const itemsCount = nav.filter(
          (val) =>
            val.brand &&
            val.brand.toLowerCase().includes(inputValue.toLowerCase())
        ).length;
        searchBoxRef.current.style.height = itemsCount > 5 ? "250px" : "auto";
      }
    } else {
      if (searchBoxRef.current) {
        searchBoxRef.current.style.display = "none";
      }
    }
  }

  return (
    <nav className="navbar">
      <div className="logo">
        {showSearchBar && (
          <div className="search-bar">
            <input
              type="search"
              placeholder="Search it...🔍"
              onChange={(e) => showSearchBoxHandler(e)}
            />

            <div
              className="searchBox"
              ref={searchBoxRef}
              style={{ display: "none" }}
            >
              {nav
                .filter(
                  (val) =>
                    val.brand &&
                    val.brand.toLowerCase().includes(data.toLowerCase())
                )
                .map((val) => (
                  <div key={val.id}>
                    <Link to={`/product/productdesc/${val.id}`}>
                      <h1>{val.brand}</h1>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/addcart">Add-Cart</Link>
        </li>
        <li>
          <Link to="/contact">Help & Customer Services</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
