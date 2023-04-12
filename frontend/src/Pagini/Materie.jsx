import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Materie() {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      {user ? (
        <>
          <ul>
            <li>
              <Link className='btn' to='/clasa/5'>
                Clasa a V - a
              </Link>
            </li>
            <li>
              <Link className='btn' to='/clasa/6'>
                Clasa a VI - a
              </Link>
            </li>
            <li>
              <Link className='btn' to='/clasa/7'>
                Clasa a VII - a
              </Link>
            </li>
            <li>
              <Link className='btn' to='/clasa/8'>
                Clasa a VIII - a
              </Link>
            </li>
          </ul>
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

export default Materie
