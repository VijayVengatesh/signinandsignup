import { Link, Navigate, useNavigate } from "react-router-dom";

function Index()
{
  return(
    <>
    this is index page <br/>
    {!window.localStorage.getItem("user")&&<button><Link to="/signin" style={{textDecoration:"none"}}>Signin</Link></button>}
    {!window.localStorage.getItem("user")&&<button><Link to="/signup" style={{textDecoration:"none"}}>Signup</Link></button>}
    
    </>
  )
}
export default Index;
