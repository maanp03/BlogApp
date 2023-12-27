import React from 'react'
import {getAuth} from 'firebase/auth'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const auth = getAuth();
  const location = useLocation();
  return (
   <>

   <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
    <div className="container-fluid">
    <img src={auth.currentUser.photoURL} alt="" className='user'/>
    <h3 className='name'>{auth.currentUser.displayName}</h3>
     
    <h3 className='email'>{auth.currentUser.email}</h3>

    
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample01">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          </li>
        
          <li className="nav-item">
          {(location.pathname === '/blogs') && <Link to={"/addBlogs"} className="nav-link active" aria-current="page">Add Blog</Link>}
          </li>

          <li className="nav-item">
            <Link to="/blogs" className="nav-link active" aria-current="page">Blog</Link>
          </li>

          
          <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Log Out</Link>
          </li>
        </ul>
     
      </div>
    </div>
  </nav>
   </>
  )
}

export default Navbar
