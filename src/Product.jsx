import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { userLoginReducer } from "./reducers/userReducer";
import { likefunc } from "./actions/userActions";
import EditIcon from '@mui/icons-material/Edit';

const Product = ({item}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const {loading, error, userInfo} = userLogin;
    // console.log(`userinfo ${userInfo}`);

    const [likes, setLikes] = useState(item.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [ x, setX] = useState("#DFDFDE");

    
    var isTrue = 0;
    const arr = item.likes;

    if(userInfo){
        for(var i=0; i<arr.length ;i++){
            if(arr[i] === userInfo._id){
                isTrue = 1;
            }
        }
    }

    useEffect(()=>{
        if(isTrue === 1){
            setIsLiked(true);
            setX("#F7E9D7");
        }    
    },[])


    const id = item._id;
    // useEffect(()=>{
    //    console.log('useeffect');
    // },[])
 
    const likeHandler = async () => {
        if(userInfo){   
            isLiked ? setLikes(likes-1) : setLikes(likes+1);
            isLiked ? setX( "#DFDFDE") : setX("#F7E9D7");
            setIsLiked(!isLiked);   
            await likefunc(id ,userInfo);
        }else{
            window.alert("Login to like and post :)");
        }
    }

    

    const url = item.picture || "https://images.pexels.com/photos/7938382/pexels-photo-7938382.jpeg";
    return(
        <>
                <div className="detaildiv">
                          <a style={{height:"80%",width:"100%"}} href={url}>
                                <img src={url} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"4%"}} ></img>                              
                          </a>
                      <div className="content" style={{width:"100%", height:"4vmax"}}>
                         <div style={{display:"flex", justifyContent:"space-between", alignItems:"center" ,width:"100%", height:"100%" ,padding:"2%", marginTop:"0%"}}>
            
                             <button onClick={likeHandler} style={{fontSize:"2vmin", borderRadius:"7px", padding:"2%", borderColor:"grey", backgroundColor: x}}>{likes} like</button>
                             
                             { item.username== userInfo.username ? <p style={{color:"grey", fontStyle:"italic", fontSize:"2.4vmin"}}>{`by you`}</p>:<p style={{color:"grey", fontStyle:"italic", fontSize:"2.4vmin"}}>{`by ${item.username}`}</p>}                            
                             { item.username== userInfo.username ? <Link to={`details/${item._id}` ||url}><EditIcon style={{color:"#433e3e"}}/></Link>:null}
                         </div>
                       </div>    
                </div>
               
        </>
    )
}

export default Product;