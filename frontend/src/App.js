import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './Components/Header'
import Dashboard from './Pagini/Dashboard'
import Login from './Pagini/Login'
import Register from './Pagini/Register'
import Materie from './Pagini/Materie'
import Clasa from './Pagini/Clasa'
import Capitol from './Pagini/Capitol'
import Lectie from './Pagini/Lectie'
import Exercitiu from './Pagini/Exercitiu'

const App = () => {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/materie' element={<Materie />} />
            <Route path='/clasa/:id' element={<Clasa />} />
            <Route path='/clasa/:id/:idCapitol' element={<Capitol />} />
            <Route
              path='/clasa/:id/:idCapitol/:idLectie'
              element={<Lectie />}
            />
            <Route
              path='/clasa/:id/:idCapitol/:idLectie/:idExercitiu'
              element={<Exercitiu />}
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
