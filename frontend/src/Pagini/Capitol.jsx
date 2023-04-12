import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classService from '../Features/class/classService'

function Clasa() {
  const { user } = useSelector((state) => state.auth)
  const { id, idCapitol } = useParams()
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

  const filteredChapter =
    filteredClass && filteredClass.chapters.find((c) => c.id === idCapitol)

  console.log(id, idCapitol)

  return (
    <>
      {user ? (
        <>
          <section className='heading'>
            <h1>{filteredChapter?.name}</h1>
          </section>
          {filteredChapter && (
            <section className='chapters'>
              <h2>Lectii</h2>
              <ul>
                {filteredChapter.lessons.map((lesson) => (
                  <li key={lesson.name}>
                    <h3>
                      <Link to={`/clasa/${id}/${idCapitol}/${lesson.id}`}>
                        {lesson.name}
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

export default Clasa
