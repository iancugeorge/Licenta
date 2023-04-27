import { createSlice } from '@reduxjs/toolkit'

const serieSlice = createSlice({
  name: 'serie',
  initialState: {
    exercises: [],
    correctCount: 0,
    totalCount: 0,
    isResolved: false,
  },
  reducers: {
    addExercise: (state, action) => {
      state.exercises.push(action.payload)
      if (action.payload.isCorrect) {
        state.correctCount++
      } else {
        state.correctCount = 0
      }
      if (state.correctCount === 5) {
        state.isResolved = true
      }
    },
    resetSeries: (state) => {
      state.exercises = []
      state.correctCount = 0
      state.isResolved = false
    },
  },
})

export const { addExercise, resetSeries } = serieSlice.actions
export default serieSlice.reducer
