import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillCartCheckFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Y@shCode</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className='nav-link' to='/'><b>Home</b></Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to='/cart'><b>Menu</b></Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/items'> <b>Item</b> <big><BsFillCartCheckFill/></big> </Link>
        </li>
      
       
      </ul>
    
    </div>
  </div>
</nav>
  )
}

export default Navbar