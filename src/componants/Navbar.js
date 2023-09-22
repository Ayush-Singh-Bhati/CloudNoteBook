import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  let navigate = useNavigate()
  useEffect(() => {

  }, [location]);

  const handlelLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: 'transparent', color: 'black' }} data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#" style={{ color: 'black' }}>CloudNoteBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? "fw-bold" : ""}`} style={{ color: 'black' }} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? "fw-bold" : ""}`} style={{ color: 'black' }} to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              <Link className={`btn btn-outline-primary mx-1 ${location.pathname === '/login' ? "active" : ""}`} to="/login" role="button">Login</Link>
              <Link className={`btn btn-outline-primary mx-1 ${location.pathname === '/signup' ? "active" : ""}`} to="/signup" role="button">Signup</Link>
            </form> : <button className='btn btn-outline-primary mx-1' onClick={handlelLogout}>Log out</button>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar