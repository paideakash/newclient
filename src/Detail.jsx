import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, updatePost } from "./service/api";

const initialvalue = {
    title:"",
    cost:"",
    picture:"",
    createDate:new Date()
};


const Detail = () => {
    
    const url = "https://images.pexels.com/photos/7938382/pexels-photo-7938382.jpeg";
    
    const[x,setX] = useState(false);
    const [post,setPost] = useState({initialvalue});

        const {id} = useParams();
        console.log(id);

    useEffect(()=>{
         const func = async()=>{
            let res = await getPost(id);
            console.log(res);
            setPost(res);
         }
         func();
    },[])

    const handleChange = (e) => {
        setPost({...post, [e.target.name] : e.target.value});
        console.log(e.target.value);
    }
    
    const onSubmits = async(e)=>{
        // e.preventDefault();
        setX(true);
        alert("post updated!!");
        await updatePost(id, post);
    }

 
    return(
        <>
            <div style={{width:"100vw", height:"90vh"}}>
                <div className="detailCont" style={{ margin:"auto", marginTop:"10vh", backgroundColor:"#F4F4F6", borderRadius: "3%"}}>
                   <img style={{ width:"100%",height:"65%", objectFit:"cover",  borderRadius: "3%" ,marginBottom:"3%"}} src= {post.picture || url}></img> 
                   <div style={{ marginTop:"3%",backgroundColor:"#F4F4F6" ,display:"flex", flexDirection:"column", justifyContent:"space-evenly", height:"35%", alignContent:"center"}}>
                     <input onChange={(e) => handleChange(e)}   name="title"  style={{borderStyle:"none", margin:"2%",height:"10%", borderRadius:"4px", padding:"12px 20px" ,border:"none"}} placeholder="title" value={post.title}></input>
                     <input onChange={(e) => handleChange(e)}  name="cost"  style={{borderStyle:"none", margin:"2%",height:"10%", borderRadius:"4px", padding:"12px 20px" ,border:"none"}} placeholder="rnum" value={post.cost}></input>
                     <input onChange={(e) => handleChange(e)}  name="picture" style={{borderStyle:"none", margin:"2%",height:"10%", borderRadius:"4px", padding:"12px 20px" ,border:"none"}}  placeholder="image url" value={post.picture}></input>

                        {x ? <a href="/" style={{textAlign:"center" ,padding:"10px",alignItems:"center", width:"30%" ,margin:"0px auto", borderRadius:"10px", border:"none", backgroundColor:"#6b705c",textDecoration:"none",color:"white"}} type="submit">Go to Home</a> : <button style={{border:"2px solid black"}} type="submit" onClick={(e)=>onSubmits(e)} style={{padding:"12px", width:"30%" ,margin:"0px auto", borderRadius:"10px", border:"none", backgroundColor:"grey"}} type="submit">Update</button>
                        }
                   </div>
                </div>    
            </div>
        </>
    )
}

export default Detail;