import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import Footer from '../Footer/Footer';

function Home({ showImage }) {
  return (
    <div className="main" id="Home">
      <div className="home">
        <ul className="Categories">
          <li>
            <Link to="/sale">Sale</Link>
          </li>
          <li>
            <Link to="/new">New Arrival</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
        </ul>
      </div>

     
      {showImage && (
        <div className="img">
          <img src="../Images/img.jpg" alt="Banner" />
        </div>
      )}
    
    </div>
  );
}

export default Home;
