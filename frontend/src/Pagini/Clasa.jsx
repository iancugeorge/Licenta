import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classService from '../Features/class/classService'

function Clasa() {
  const { user } = useSelector((state) => state.auth)
  const { id } = useParams()
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

  return (
    <>
      {user ? (
        <>
          <section className='heading'>
            <h1>{filteredClass?.name}</h1>
          </section>
          {filteredClass && (
            <section className='chapters'>
              <h2>Capitole</h2>
              <ul>
                {filteredClass.chapters.map((chapter) => (
                  <li key={chapter.name}>
                    <h3>
                      <Link to={`/clasa/${id}/${chapter.id}`}>
                        {chapter.name}
                      </Link>
                    </h3>
                    <ul>
                      {chapter.lessons.map((lesson) => (
                        <li key={lesson.name}>
                          <Link to={`/clasa/${id}/${chapter.id}/${lesson.id}`}>
                            {lesson.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
