import React, { useContext, useEffect, useState, useRef } from "react";
import createStore from "../Context/createStore";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBox, faShoppingCart, faHeadset, faSearch } from "@fortawesome/free-solid-svg-icons"; // Add faSearch icon
import axios from "axios";

function Navbar() {
  let [nav, setNav] = useState([]);
  let { setData, data } = useContext(createStore);
  let { pathname } = useLocation();

  const searchBoxRef = useRef(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5555/men").then((resp) => {
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

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        {showSearchBar && (
          <div className="search-bar">
            <input
              type="search"
              placeholder="       Search"
              onChange={(e) => showSearchBoxHandler(e)}
            />
            {/* Search Icon */}
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
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

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-link">
            Home
            <FontAwesomeIcon icon={faHome} className="fa" />
          </Link>
        </li>
        <li>
          <Link to="/account" className="nav-link">
            Account
            <FontAwesomeIcon icon={faUser} className="fa" />
          </Link>
        </li>
        <li>
          <Link to="/product" className="nav-link">
            Product
            <FontAwesomeIcon icon={faBox} className="fa"/>
          </Link>
        </li>
        <li>
          <Link to="/addcart" className="nav-link">
            Add-Cart
            <FontAwesomeIcon icon={faShoppingCart} className="fa"/>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Help & Customer Services 
            <FontAwesomeIcon icon={faHeadset}className="fa" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
