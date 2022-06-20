import React, {useEffect} from "react";
import {Link} from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { userLoginReducer } from "./reducers/userReducer";
import { logout } from "./actions/userActions";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const {loading, error, userInfo} = userLogin;
    // console.log(userInfo);
    console.log(userInfo)
    
    const logoutFunc = () => {
        dispatch(logout());
        navigate("/login");
    }

    const loginFunc = () => {
        navigate("/login");
    }

    const addFunc=()=>{
        window.alert("Login to post");
    }
    
    return(
        <>
            <div className="nav">
                <div className="navchild divone">DEW</div>
                <div className="navchild divtwo">
                <a style={{textDecoration:"none"}} href="/">Home</a>
                   <a style={{textDecoration:"none"}} href="https://www.instagram.com/akashp_18/">About us</a>
                   <a style={{textDecoration:"none"}} href="https://www.instagram.com/akashp_18/">Contact us</a>
                   {userInfo ? <Link to={"/profile"} style={{textDecoration:"none"}} >Profile</Link> : null}
                   {userInfo ? <Link className="navlink"  to={"/blog"}><a className="navadd">Post</a></Link>: <Link className="navlink" onClick={addFunc} to={"/"}><a className="navadd">Post</a></Link>}
                   
                </div>

                <div className="navchild divthree">
                    {/* <a>F</a>
                    <a>I</a> */}
                     {userInfo ? <button onClick={logoutFunc} style={{border:"none", marginRight:"10px", fontWeight:"550", fontSize:"110%", color:"#9D9D9D"}}>LOGOUT</button> 
                     :<button onClick={loginFunc} style={{border:"none", marginRight:"10px", fontWeight:"600", fontSize:"120%", color:"#9D9D9D"}}>LOGIN</button>
                     }
                </div>
            </div>
        </>
    )
}

export default Navbar;