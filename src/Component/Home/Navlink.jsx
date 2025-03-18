import React from 'react'
import { Link } from 'react-router-dom'
import "./Navlink.css"

function Navlink() {
  return (
    <div>
      <div className="navbar-h">
        <ul className="navbar-h-links">
          <li>
            <Link to="/sale" className="navbar-h-link">Sale</Link>
          </li>
          <li>
            <Link to="/new" className="navbar-h-link">New Arrival</Link>
          </li>
          <li>
            <Link to="/men" className="navbar-h-link">Men</Link>
          </li>
          <li>
            <Link to="/women" className="navbar-h-link">Women</Link>
          </li>
          <li>
            <Link to="/kids" className="navbar-h-link">Kids</Link>
          </li>
          <li>
            <Link to="/trending" className="navbar-h-link">Trending</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navlink
