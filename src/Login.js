import React, { useEffect, useState } from "react";
import { createPost, getFunc } from "./service/api";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { loginFunc } from "./actions/userActions";
import Register from "./Register";

const initialvalue = {
  username:"",
  email:"",
  password:"",
};

const Login =() => {
    const url = "https://wallpapercave.com/wp/wp6555330.jpg";
    
    const [post, setPost] = useState(initialvalue);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const {loading, error, userInfo} = userLogin;
    

    useEffect(()=>{     
        if(userInfo){
            navigate("/");
        }
    },[userInfo, navigate]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]:e.target.value })
    }

    const savePost = async (e) =>{
        e.preventDefault();
        const data =  await loginFunc(post);
        dispatch(data);
    }    
        // console.log(`res`);
        // console.log(res);
        // console.log(`data`);
        // console.log(res.data);
         
    //     if(res.status === 200){
    //       window.alert("login failed");
    //     }else{
    //         window.alert("login success");
    //     }
    // }

    return(
        <form onSubmit={savePost}>
        <div style={{width:"100vw", height:"90vh"}}>
            <div className="detailCont" style={{ margin:"auto", marginTop:"10vh", backgroundColor:"#F4F4F6", borderRadius: "3%"}}>
               <img style={{ width:"100%",height:"65%", objectFit:"cover",  borderRadius: "3%" ,marginBottom:"3%"}} src= {url}></img> 
               <div style={{ marginTop:"3%",backgroundColor:"#F4F4F6" ,display:"flex", flexDirection:"column", justifyContent:"space-evenly", height:"35%"}}>
                 <input onChange={(e) => handleChange(e)}  name="username"  style={{ borderStyle:"none", margin:"2%", height:"10%", borderRadius:"4px", padding:"12px 20px" ,border:"none"}} placeholder="username" value={post.username}></input>
                 <input onChange={(e) => handleChange(e)} name="email"  style={{ borderStyle:"none", margin:"2%", height:"10%", borderRadius:"4px", padding:"12px 20px" ,border:"none"}} placeholder="email" value={post.email}></input>
                 <input onChange={(e) => handleChange(e)} name="password"  style={{ borderStyle:"none", margin:"2%", height:"10%", borderRadius:"4px", padding:"12px 20px" ,border:"none"}} placeholder="password" value={post.password}></input>
                 <button type="submit" style={{padding:"12px", width:"20%" ,margin:"0px auto", borderRadius:"10px", border:"none", backgroundColor:"grey"}} type="submit">Login</button>
                 <Link to={"/register"} style={{backgroundColor:"rgb(244, 244, 246)", margin:"4px auto 0px"}}>Register</Link>
               </div>
            </div>    
        </div>
       </form>
    )
}

export default Login;