import React from "react";
import  "./Home.Module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
// import Homeproduct from "../homeproduct/Homeproduct"
const Home = () => {
  return (
    <>
     <div className="photosize">
     <Carousel >
  <Carousel.Item interval={1000} >
    <img
      className="d-block w-100 lolly"
      src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
      alt="First slide"
      
    />
    <Carousel.Caption >
      <h2>Shooping with 40% off...</h2>
      <p>Awosome offer clam it as soon as possile.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000} >
    <img
      className="d-block w-100"
      src="https://images.indianexpress.com/2022/05/urfi-javed-interview.jpg"
      alt="Second slide"
    />
    <Carousel.Caption >
      <h3>Shooping 10% Off Sell</h3>
      <p>Shop with us.</p>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item interval={1000}  >
    <img
      className="d-block w-100"
      src="https://phando021.s.llnwi.net/public/upload/news/story_mul_image_1631100429_0.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Awosome Offer claim it....</h3>
      <p>very nice product.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


      </div>
      <div className="lastestproductclass">
  <h2> Products</h2>
</div>


    </>
  );
};

export default Home;
