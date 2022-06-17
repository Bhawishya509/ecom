import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import Contact from "./contact/Contact";
import About from "./common/about/About"
import Login from "./common/login/Login";
import Logout from "./common/logout/Logout"
import Form2 from "./common/register/Form2";
import Products from "./pages/products/Products";
import { useSelector} from 'react-redux'
function App() {
  const checking = useSelector((state) => state.counter.value1)
  console.log(checking)
  const { productItems } = Data;
  const { shopItems } = Sdata;

  //Step 2 :
  const [CartItem, setCartItem] = useState([]);

  //Step 4 :

  const addToCart = (product) => {
   
    
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit && checking === true) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      if (checking === true) setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id);

    
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  console.log()
  useEffect(() => {}, []);
  return (
    <>
      <BrowserRouter>
        <Header CartItem={CartItem} />
        <Routes>
          <Route path="/" element={<Pages productItems={productItems} />} />
          <Route
            path="/product"
            element={
              <Products
                productItems={productItems}
                addToCart={addToCart}
                shopItems={shopItems}
              />
            }
          />
          <Route path="/register" element={<Form2/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route
            path="/cart"
            element={
                checking===true?
                <Cart
                  CartItem={CartItem}
                  addToCart={addToCart}
                  decreaseQty={decreaseQty}
                />
                :<Logout/>
        

            }
          />
        
          <Route
            path="/login"
            element={checking === false ? <Login   addToCart={addToCart} setdata={setCartItem} /> : <Pages/>}
          />
          <Route path="/contact" element={<Contact />} />
        
          <Route path="*" element={<h1>404 page error</h1>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
