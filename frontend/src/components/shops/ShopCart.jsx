
import React, { useState,useEffect } from "react"
import {  useDispatch,useSelector } from 'react-redux'
import { increments,setdata } from '../../app/counterSlice'
import { useNavigate } from "react-router-dom"
const ShopCart = ({ shopItems, addToCart }) => {
  const checking = useSelector((state) => state.counter.value1)
  // const checking1 = useSelector((state) => state.counter.array)
  const navigate=useNavigate();
  const dispath=useDispatch();
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  useEffect(()=>
  {

  },[])

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box' key={index}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() =>{
                     checking===true?dispath(increments(1)):navigate("/logout")
                     console.log("hii",shopItems)
                     dispath(setdata(shopItems))
                     addToCart(shopItems)
                    }

                     }>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
