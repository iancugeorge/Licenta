import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/auth/authSlice'
import classReducer from '../Features/class/classSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    class: classReducer,
  },
})
