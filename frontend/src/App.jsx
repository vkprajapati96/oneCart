import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'
import Nav from './components/Nav'
import { useContext } from 'react'
import { userDataContext } from './context/UserContext'

function App() {
  const { userData } = useContext(userDataContext)
  const location = useLocation()

  // jinke pages par navbar hide karna hai:
  const hideNavOn = ['/login', '/signup']

  return (
    <>
      {/* Navbar tabhi dikhana hai jab current route hideNavOn me NA ho */}
      {!hideNavOn.includes(location.pathname) && <Nav />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Registration />} />
      </Routes>
    </>
  )
}

export default App
