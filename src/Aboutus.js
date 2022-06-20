import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { userLoginReducer } from "./reducers/userReducer";

const Aboutus =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const {loading, error, userInfo} = userLogin;
    // console.log(userInfo);
    console.log(userInfo)

    useEffect(()=>{  
            console.log(`hello`);
            if(!userInfo){
                navigate("/")
            }
    },[]);
    

    return(
       <>
           <h2>{`hi ${userInfo.username}`}</h2>
           <h2>{`email : ${userInfo.email}`}</h2>
       </>
    )
}

export default Aboutus;