import React, {useState} from 'react'
import './navbar.css'


const Navbar = () => {
  const[isMobile,setisMobile]=useState(false);
  return (
   
    <nav>
      <div className='logo'> Logo </div>
    <div className='navbar'>
         <ul className={isMobile ? "nav-link-mobile" : "nav-link"} onClick={()=>setisMobile(false)}>
                 <li> <a  href="./">Home</a> </li>
                 <li> <a href="./Login">Log In</a> </li> 
                   
            </ul>
            <button className='mobile-menu' onClick={()=> setisMobile(!isMobile)}>
{isMobile ?  <i className='fas fa-times'> </i> : <i className='fas fa-bars'></i>}
            </button>

    </div>

    </nav>
  )
}

export default Navbar