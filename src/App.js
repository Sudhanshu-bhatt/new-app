import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/Dashboard'
import {Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    
     <Routes>
      <Route path='/' element={<Home/>}>  </Route>
      <Route path='/Login' element={<Login/>} >  </Route> 
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App