import React from "react";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiHome,HiClipboardCopy,HiLightningBolt,HiShoppingCart} from 'react-icons/hi';
import { FcShipped } from 'react-icons/fc';
import { IoIosDocument } from 'react-icons/io';
import { MdPermContactCalendar } from 'react-icons/md';
import {AiFillRocket  } from 'react-icons/ai';
import "./Navbaar.Module.css"
import { NavLink } from "react-router-dom";








const Search = ({ CartItem }) => {
  // fixed Header
  const checking = useSelector((state) => state.counter.value);
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 60);
  });
  // let navigate = useNavigate();
  return (
    <>
     
           
          <nav className="navbar navbar-expand-lg bg-light search ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <h2><span style={{color:"hotpink"}}>B</span>onik</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                 <HiHome className="icons" style={{color:"orange"}}/>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                <FcShipped className="icons"/>
                  Products
                </NavLink>
              </li>

              <li className="nav-item" >
                <NavLink className="nav-link " to="/about">
               <IoIosDocument className="icons" style={{color:"rgb(191, 53, 215)"}}/>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">
               <MdPermContactCalendar className="icons" style={{color:"hotpink"}}/>
                  Contact
                </NavLink>
              </li>
            </ul>

            <form style={{ width: "33%",marginRight:"8px" }} className="d-flex" role="search">
              <input
                className="form-control me-4 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/profile"
                  >
                  <div className="iconss"/>
                  
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/register"
                  >
                  <HiLightningBolt  className="icons" style={{color:"yellow"}}/>
                    Register
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/login"
                  >
                    <AiFillRocket  className="icons" style={{color:"hotpink"}}/>
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/logout"
                  >
                    <HiClipboardCopy className="icons"/>
                    Logout
                  </NavLink>
                </li>
               
                <li className="nav-item " style={{display:"flex"}}>
              
                  <NavLink className="nav-link " aria-current="page" to="/cart"
                  style={{postion:"realtive"}}>
            
                    <HiShoppingCart className="icons" style={{color:"green"}}/>
                  </NavLink>
                  <div  className="postion">
                    <div className="poschild">{checking}</div>
                  </div>
                </li>
              </ul>
            
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Search;
