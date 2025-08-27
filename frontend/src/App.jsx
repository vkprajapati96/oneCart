import { Route, Routes } from 'react-router-dom'
import './App.css'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'
import Nav from './components/Nav'
import { useContext } from 'react'
import { userDataContext } from './context/UserContext'

function App() {
  const { userData} = useContext(userDataContext)

  return (
 
 <>

  {userData && <  Nav/>}

  {/* <Nav/> */}

 <Routes> 

  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Registration/>}/>
  
 </Routes>

  </>
  )
}

export default App
