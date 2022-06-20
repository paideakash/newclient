import axios from "axios";

// const URL = "http://localhost:8000";
const URL = "https://nserverr.herokuapp.com";

export const createPost = async (post) => {
   try{
      // res.send(ok);
      return await axios.post(`${URL}/create`, post) ;
      console.log(`create post successful`);
   }catch(err){
       console.log(`error in create post ${err}`)
   }
}

export const getAllPosts = async()=>{
   try{
       let res =  await axios.get(`${URL}/posts`);

      //  const data = await axios.get("https://assessment.api.vweb.app/rides");
      //  console.log(data);
      //  console.log(res.data);
       return res.data;
   }catch(err){
      console.log(`error on get all posts ${err}`);
   }
}


export const getPost = async(id)=>{
   try{
       let res = await axios.get(`${URL}/post/${id}`);;
       return res.data;
   }catch(err){
      console.log(`erre on getpsot api`);
   }
}

export const updatePost = async (id, dt)=>{
   try{
       await axios.post(`${URL}/update/${id}`, dt);
   }catch(err){
      console.log(`erre on update api`);
   }
}

export const loginFunc = async (post)=>{
   try{
      const res =  await axios.post(`${URL}/login`, post);
      return res;
   }catch(err){
      console.log(`login`);
   }
}

export const getFunc = async ()=>{
   try{
      const res =  await axios.get(`${URL}/about`);
      return res;
   }catch(err){
      console.log(`login`);
   }
}

