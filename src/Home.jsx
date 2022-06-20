import React, {useEffect} from "react";
import Body from "./Body";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { userLoginReducer } from "./reducers/userReducer";

const Home =() => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const {loading, error, userInfo} = userLogin;
    // console.log(userInfo);

    useEffect(()=>{  
        if(!userInfo){
            navigate("/");
        }
    },[userInfo]);

    return(
        <>
           <Body />
           <Products />
        </>
    )
}

export default Home;