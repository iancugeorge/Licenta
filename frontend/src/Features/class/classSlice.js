import { createSlice } from '@reduxjs/toolkit'
import classService from './classService'

const classSlice = createSlice({
  name: 'class',
  initialState: {
    classes: [],
    loading: false,
    error: null,
  },
  reducers: {
    getClassesRequest: (state) => {
      state.loading = true
    },
    getClassesSuccess: (state, action) => {
      state.loading = false
      state.classes = action.payload
    },
    getClassesFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { getClassesRequest, getClassesSuccess, getClassesFail } =
  classSlice.actions

export const fetchClasses = () => async (dispatch) => {
  try {
    dispatch(getClassesRequest())
    const classes = await classService.getClasses()
    dispatch(getClassesSuccess(classes))
  } catch (error) {
    dispatch(getClassesFail(error.message))
  }
}

export default classSlice.reducer
