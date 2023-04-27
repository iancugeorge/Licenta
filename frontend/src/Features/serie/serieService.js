export const checkExercises = (exercises) => {
  let correctCount = 0
  for (const exercise of exercises) {
    if (exercise.isCorrect) {
      correctCount++
    }
  }
  return correctCount
}
