import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classService from '../Features/class/classService'

function Lectie() {
  const { user } = useSelector((state) => state.auth)
  const { id, idCapitol, idLectie } = useParams()
  const [classData, setClassData] = useState(null)
  const dispatch = useDispatch()

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

  //console.log(id, idCapitol, idLectie)

  return (
    <>
      {user ? (
        <>
          <section className='heading'>
            <h1>{filteredLesson?.name}</h1>
          </section>
          {filteredLesson && (
            <section className='chapters'>
              <h2>Exercitii</h2>
              <ul>
                {filteredLesson.exercises.map((exercise) => (
                  <li key={exercise.name}>
                    <h3>
                      <Link
                        to={`/clasa/${id}/${idCapitol}/${idLectie}/${exercise.id}`}
                      >
                        {exercise.name}
                      </Link>
                    </h3>
                  </li>
                ))}
              </ul>
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

export default Lectie
