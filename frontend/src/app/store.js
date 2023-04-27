import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/auth/authSlice'
import classReducer from '../Features/class/classSlice'
import serieReducer from '../Features/serie/serieSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    class: classReducer,
    serie: serieReducer,
  },
})
