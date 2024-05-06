import {useNavigate } from "react-router-dom";

function Product() {
  const navigate=useNavigate()
  const logout=()=>{
    window.localStorage.removeItem("user")
    navigate("/")
  }
  return(
    <>
    this is Product page

    <button onClick={logout}>logout</button>
    </>
  )
}

export default Product;
