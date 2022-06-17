import React from "react";
// import FlashDeals from "../components/flashDeals/FlashDeals";
import Wrapper from "../components/wrapper/Wrapper";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Home from "./front/home/Home"
const Pages = ({ productItems, addToCart }) => {
  return (
    <>
      {/* <FlashDeals productItems={productItems} addToCart={addToCart} /> */}
       <Home/>
      <TopCate />
      <NewArrivals />
      <Discount />
      <Wrapper />
    </>
  );
};

export default Pages;
