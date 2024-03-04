import "../style/navbar.css"

import React from 'react'

const Navbar = () => {
  return (
  <nav>
    <div className="navfirst">
        <img className='logo' src="./assets/logo1.jpg" alt="" />
    </div>
    <div className="navsecond">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Project</a>
    </div>
    <div className="navthird">
    <i class="fa-solid fa-user"></i>
    <i class="fa-solid fa-envelope"></i>
    <i class="fa-solid fa-phone"></i>
    </div>
  </nav>
  
  )
}

export default Navbar

