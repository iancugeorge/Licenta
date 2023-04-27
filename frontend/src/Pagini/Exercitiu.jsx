import Enunt from '../Enunt'
import SpatiuDeLucru from '../SpatiuDeLucru'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classService from '../Features/class/classService'
import { addExercise, resetSeries } from '../Features/serie/serieSlice'

const Exercitiu = () => {
  const { user } = useSelector((state) => state.auth)
  const { id, idCapitol, idLectie, idExercitiu } = useParams()
  const [classData, setClassData] = useState(null)
  const [enunt, setEnunt] = useState(null)
  const [raspuns, setRaspuns] = useState(null)
  const [myFunction, setMyFunction] = useState(null)
  // const dispatch = useDispatch()

  useEffect(() => {
    async function getClassData() {
      try {
        const data = await classService.getClasses()
        setClassData(data)
      } catch (err) {
        console.error(err)
      }
    }

    getClassData()
  }, [id])

  const filteredClass = classData && classData.find((c) => c.id === id)
  //console.log('filteredClass', filteredClass)

  const filteredChapter =
    filteredClass && filteredClass.chapters.find((c) => c.id === idCapitol)
  // console.log('filteredChapter', filteredChapter)

  const filteredLesson =
    filteredChapter && filteredChapter.lessons.find((c) => c.id === idLectie)
  //console.log('filteredLesson', filteredLesson)

  const filteredExercise =
    filteredLesson && filteredLesson.exercises.find((c) => c.id === idExercitiu)
  //console.log('filteredExercise', filteredExercise)

  //console.log(id, idCapitol, idLectie)

  function getEx() {
    async function loadFunction() {
      try {
        const module = await import(
          `../Exercitii/Cls${id}${idCapitol}${idLectie}${idExercitiu}.js`
        )
        const rez = module.default()
        setEnunt(rez[0])
        setRaspuns(rez[1])

        setMyFunction(module.default)
      } catch (error) {
        console.error(error)
      }
    }
    loadFunction()
  }

  useEffect(() => {
    getEx()
  }, [id])

  const dispatch = useDispatch()
  const serie = useSelector((state) => state.serie)

  const handleSubmit = (event) => {
    event.preventDefault() // prevent default form submission behavior
    const inputValue = event.target.elements.raspuns.value
    if (inputValue == raspuns) {
      console.log('Correct!')
      getEx()
      dispatch(
        addExercise({
          id: id,
          isCorrect: true,
        })
      )
    } else {
      console.log('Incorrect!')
      dispatch(
        addExercise({
          id: id,
          isCorrect: false,
        })
      )
    }
  }

  if (!raspuns) {
    return null // or return a loading indicator
  }

  return (
    <>
      {user ? (
        <>
          <section className='heading'>
            <h1>{filteredExercise?.name}</h1>
          </section>
          {filteredExercise && (
            <section className='enunt'>
              <h2>ENUNT</h2>
              {/* <Enunt enunt={enunt} /> */}
              <p>{enunt}</p>
              <p>RASPUNS:</p>
              {/* <SpatiuDeLucru raspuns={raspuns} /> */}
              <form onSubmit={handleSubmit}>
                <label htmlFor='raspuns'>Raspuns: </label>
                <input type='text' id='raspuns' name='raspuns' />
                <button type='submit'>Verifica</button>
                {/* {serie.isResolved && (
        <button onClick={() => dispatch(resetSeries())}>Reset series</button>
      )} */}
              </form>
            </section>
          )}
        </>
      ) : (
        <section className='heading'>
          <h1>CORVIN</h1>
          <p>Trebuie sa te authentifici pentru a incepe</p>
        </section>
      )}
    </>
  )
}
export default Exercitiu
