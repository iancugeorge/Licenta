import { useSelector, useDispatch } from 'react-redux'
import { addExercise, resetSeries } from './Features/serie/serieSlice'

const SpatiuDeLucru = (props) => {
  const dispatch = useDispatch()
  const serie = useSelector((state) => state.serie)

  const handleSubmit = (event) => {
    event.preventDefault() // prevent default form submission behavior
    const inputValue = event.target.elements.raspuns.value
    if (inputValue == props.raspuns) {
      console.log('Correct!')
      dispatch(
        addExercise({
          id: props.id,
          isCorrect: true,
        })
      )
    } else {
      console.log('Incorrect!')
      dispatch(
        addExercise({
          id: props.id,
          isCorrect: false,
        })
      )
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='raspuns'>Raspuns: </label>
      <input type='text' id='raspuns' name='raspuns' />
      <button type='submit'>Verifica</button>
      {/* {serie.isResolved && (
        <button onClick={() => dispatch(resetSeries())}>Reset series</button>
      )} */}
    </form>
  )
}
export default SpatiuDeLucru
