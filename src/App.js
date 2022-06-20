import React from 'react';
import './App.css';
import Body from './Body';
import Navbar from './Navbar';
import Products from './Products';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Blog from './Blog';
import Detail from './Detail';
import Login from './Login';
import { Provider } from 'react-redux';
import store from "./store";
import Aboutus from './Aboutus';
import Register from './Register';

function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
          <Navbar />
          {/* <Home/> */}
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="details/:id" element={<Detail/>} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/aboutus" element={<Aboutus />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
       </BrowserRouter>
    </Provider>      
  );
}

export default App;
