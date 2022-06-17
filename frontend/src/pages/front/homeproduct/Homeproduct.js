import React,{useState,useEffect} from "react";
import axios from "axios"
import "./Homeproduct.Module.css"
import { BsFillCartCheckFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
const Homeproduct=()=>
{
  const[pro,update]=useState([])
  function products()
  {
     axios.get('https://fakestoreapi.com/products')
     .then(function (response) {

       update((data)=>
       {
         let b=response.data;
         b.reverse();
         return [...b]
       })
     
     })
   
   
     
  }

  
    useEffect(()=>
    {
    
    products();
        
    },[]);
    
    
  return(
    <>
        {
            pro.map((data,ind)=>
            {
             
                return(
                  

                  
                  <li key={ind+1} className="card" style={{width: "16rem"}}>
                  <img src={data.image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Products</h5>
                    <p className="card-text">Some quick example text to build on the card title..</p>
                    <Button variant="warning" style={{ width: "48%" }}>
                  Detail
                </Button>{" "}
                    <Button
                  variant="success"
                  style={{ width: "50%" }}
                  
                >
                  Add
                  <BsFillCartCheckFill
                    style={{ marginLeft: "8px", fontSize: "1.2rem" }}
                  />
                </Button>
                 
                   
                  </div>
                </li>







                   
                    
                )
            })
        }
    </>
  )
}
export default Homeproduct;