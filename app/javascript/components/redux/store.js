import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './message'

export const store = configureStore({
  reducer: {
    message: messageReducer
  },

})