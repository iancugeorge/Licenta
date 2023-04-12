import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Dashboard() {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      {user ? (
        <>
          <Link className='btn' to='/materie'>
            Materie
          </Link>
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

export default Dashboard
