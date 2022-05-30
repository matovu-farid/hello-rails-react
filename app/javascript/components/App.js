import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { BrowserRouter } from "react-router-dom"
import MyRoutes from "./Routes"
import { Provider, useDispatch } from 'react-redux'
import { store } from './redux/store'
import { fetchRandomMessage } from "./redux/message"
const App =()=> {

    return (
      <Provider store={store}>
      <BrowserRouter>
       <MyRoutes></MyRoutes>
      </BrowserRouter>
      </Provider>
    );
  
}

export default App
