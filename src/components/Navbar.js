import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand fs-1 " to="/">EatNow</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/">Home</Link>
      <Link className="nav-item nav-link" to="/login">Login</Link>
      <Link className="nav-item nav-link" to="/signup">Signup</Link>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar