import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import classService from '../Features/class/classService'
import { addExercise } from '../Features/serie/serieSlice'

const Exercitiu = () => {
  const { user } = useSelector((state) => state.auth)
  const { id, idCapitol, idLectie, idExercitiu } = useParams()
  const [classData, setClassData] = useState(null)
  const [enunt, setEnunt] = useState(null)
  const [raspuns, setRaspuns] = useState(null)

  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState(0)

  const [questions, setQuestions] = useState([
    { id: 1, isCorrect: null },
    { id: 2, isCorrect: null },
    { id: 3, isCorrect: null },
    { id: 4, isCorrect: null },
    { id: 5, isCorrect: null },
  ])

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

  function getEx() {
    async function getExercise() {
      try {
        const module = await import(
          `../Exercitii/Cls${id}${idCapitol}${idLectie}${idExercitiu}.js`
        )
        const [enunt, raspuns] = module.default()
        setEnunt(enunt)
        setRaspuns(raspuns)
      } catch (error) {
        console.error(error)
      }
    }
    getExercise()
  }

  useEffect(() => {
    getEx()
  }, [id, idCapitol, idLectie, idExercitiu])

  const handleSubmit = (event) => {
    event.preventDefault()
    const inputValue = event.target.elements.raspuns.value
    if (inputValue == raspuns) {
      console.log('Correct!')
      if (questions[correctAnswers].isCorrect == null) {
        questions[correctAnswers].isCorrect = true
      }
      setCorrectAnswers(correctAnswers + 1)
      getEx()
      event.target.elements.raspuns.value = ''
    } else {
      console.log('Incorrect!')
      if (questions[correctAnswers].isCorrect == null) {
        questions[correctAnswers].isCorrect = false
      }
      setIncorrectAnswers(incorrectAnswers + 1)
    }
  }

  if (!raspuns) {
    return null // or return a loading indicator
  }

  const filteredClass = classData?.find((c) => c.id === id)
  const filteredChapter = filteredClass?.chapters.find(
    (c) => c.id === idCapitol
  )
  const filteredLesson = filteredChapter?.lessons.find((c) => c.id === idLectie)
  const filteredExercise = filteredLesson?.exercises.find(
    (c) => c.id === idExercitiu
  )

  if (incorrectAnswers > 0 && correctAnswers == 5) {
    setCorrectAnswers(0)
    setIncorrectAnswers(0)
    setQuestions([
      { id: 1, isCorrect: null },
      { id: 2, isCorrect: null },
      { id: 3, isCorrect: null },
      { id: 4, isCorrect: null },
      { id: 5, isCorrect: null },
    ])
  }

  if (correctAnswers >= 5) {
    return (
      <div>
        <p>Rezultate:</p>
        <p>Corecte: {correctAnswers}</p>
        <p>Incorecte: {incorrectAnswers}</p>
        <button
          onClick={() => {
            setCorrectAnswers(0)
            setIncorrectAnswers(0)
            setQuestions([
              { id: 1, isCorrect: null },
              { id: 2, isCorrect: null },
              { id: 3, isCorrect: null },
              { id: 4, isCorrect: null },
              { id: 5, isCorrect: null },
            ])
          }}
        >
          Reset
        </button>
      </div>
    )
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
              <p>{enunt}</p>
              <p>RASPUNS:</p>
              <form onSubmit={handleSubmit}>
                <label htmlFor='raspuns'>Raspuns: </label>
                <input type='text' id='raspuns' name='raspuns' />
                <button type='submit'>Verifica</button>
              </form>
              <div className='question-bubbles'>
                {questions.map((question) => (
                  <div
                    key={question.id}
                    className={`question-bubble ${
                      question.isCorrect === true
                        ? 'correct'
                        : question.isCorrect === false
                        ? 'incorrect'
                        : ''
                    }`}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <section className='heading'>
          <h1>CORVIN</h1>
          <p>Trebuie sa te autentifici pentru a incepe</p>
        </section>
      )}
    </>
  )
}
export default Exercitiu
