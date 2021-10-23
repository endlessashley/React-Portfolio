import React from 'react';
import {Link} from 'react-router-dom'
    
    function NavTabs() {
      
      return (
        <ul className= "row nav nav-tabs" id="navbar" fixed="top">
        {/* <div className="col-xs-12 col-md-3 nav-item">
          <li className="nav-item">
            <Link to = "/">Home</Link>
          </li>
        </div> */}
        <div className="col-xs-12 col-sm-2">
          <li className = "nav-item">
            <Link to = "/about">About</Link>
          </li>
        </div>
        <div className="col-xs-12 col-sm-2">
          <li className="nav-item">
            <Link to = "/contact">Contact</Link>
          </li>
        </div>
        <div className="col-xs-12 col-sm-2">
          <li className="nav-item">
            <Link to = "/resume">Resume</Link>
          </li>
        </div>
        <div className="col-xs-12 col-sm-2">
          <li className = "nav-item">
            <Link to = "/Portfolio">Portfolio</Link>
          </li>
        </div>
        </ul>
      );
    }

    
    
    export default NavTabs;
