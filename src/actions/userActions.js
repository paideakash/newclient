import {LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, USER_LOGOUT} from "../constants/userConstants.js"
import axios from "axios";

// const URL = "http://localhost:8000";
const URL = "https://nserverr.herokuapp.com";



export const loginFunc = (post)=> async (dispatch) => {
    try{
       dispatch({type: LOGIN_REQUEST});

       const {data} =  await axios.post(`${URL}/login`, post);
       console.log(`data`);
       console.log(data);

       dispatch({type:LOGIN_SUCCESS, payload:data})

       localStorage.setItem('userInfo',JSON.stringify(data));
    //    return res; 
    //    console.log(`userinfo`)  
    //    console.log(userInfo);    

    }catch(err){
       console.log(`login fail ${err}`)
       console.log(err.response.data);
       dispatch({type:LOGIN_FAILURE,
       payload:
           err.response && err.response.data.message
           ? err.response.data.message
           : err.message,
       })
    }
 }

 export const logout = (post)=> async (dispatch) => {
       dispatch({type:USER_LOGOUT})
       localStorage.removeItem('userInfo');
    //    return res; 
    //    console.log(`userinfo`)  
    //    console.log(userInfo);    
 }

 export const likefunc = async (id, dt)=> {
    try{
      console.log(id);   
      console.log(`end`);
      console.log(dt); 
      
      await axios.put(`${URL}/like/${id}`, dt);  
    }catch(err){
       console.log(`error is in like func frontent ${err}`);
    }   
}

export const registerFunc = async (post)=> {
   try{
     await axios.post(`${URL}/register`, post);
   }catch(err){
      console.log(`error register frontent ${err}`);
   }   
}