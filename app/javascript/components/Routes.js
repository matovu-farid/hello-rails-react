import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Route, Routes } from "react-router-dom";
import Greeting from "./Greeting"
import { useDispatch } from "react-redux";
import { fetchRandomMessage } from "./redux/message";
const MyRoutes =()=> {
     const  dispatch= useDispatch()
  useEffect(()=>{
    dispatch(fetchRandomMessage())
  },[])
  
    return (
      
        <Routes>
        <Route path="/" element={<Greeting />} />
       
      </Routes>
    );
  
}

export default MyRoutes
