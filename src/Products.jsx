import React, { useEffect, useState } from "react";
import Product from "./Product";
import { getAllPosts } from "./service/api";
import Blog from "./Blog"
import { Link } from "react-router-dom";

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
         const fetchData = async () => {
             try{
                let data = await getAllPosts();
                setItems(data); 
                // let data;
                // setItems(data);                 
                // console.log(data);     
             }catch(err){
                 console.log(`some error in fetching data`);
             }          
         }
         fetchData();        
    },[])

    return(
        <>
            <div className="prodmain">
                {items.map(item=>{
                    return(
                         <Product item={item} />
                    )
                })}  
            </div>

        </>
    )
}

export default Products;