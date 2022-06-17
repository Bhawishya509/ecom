import React,{useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { uncheck ,reset } from "../../app/counterSlice"
import swal from 'sweetalert';
import axios from "axios";
const Logout=()=>
{
const navigate=useNavigate();
 
    const checking = useSelector((state) => state.counter.value1)
    const checkingarray = useSelector((state) => state.counter.array)
    const dispatch = useDispatch()
    useEffect(()=>
    {
        
      if (checking) {
        swal("Logout success", {
          icon: "success",
        });

        axios.post("http://localhost:8000/update", {
              
                email: "lollysingh509@gmail.com",
                array: checkingarray,
               
              })
              console.log(checkingarray)
        dispatch(uncheck())
        dispatch(reset())
        navigate("/")
      } else {
        swal({
          title:"Please Login first",
          icon: "warning",
        });
        setTimeout(()=>
        {
          navigate("/login")
          },2000)
      }
      console.log("hii")
    })

    return(

    <>
  
    </>
    )
}
export default Logout;