import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux";
const Greeting =()=> {
   const text = useSelector(state => state.message.message.text)

    return (
      <h1>{text}</h1>
    );
  
}

export default Greeting
