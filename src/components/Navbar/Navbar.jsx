import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class Navbar extends Component {

    render() {
        return (
            <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Noxe</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tv">Tv Show</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">People</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">networks</NavLink>
              </li>
            </ul>
            </div>
            <form className="d-flex me-auto ">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <div className='px-3'>
            <i className="fab fa-facebook pe-3"></i>
            <i className="fab fa-spotify pe-3"></i>
            <i className="fab fa-instagram pe-3"></i>
            <i className="fab fa-youtube pe-1"></i>
            </div>
            <ul className="navbar-nav">
            <li className="nav-item">
            <button type="button" className="btn btn-outline-primary navBtn"><NavLink className="nav-link navBtn" to="#">Logout</NavLink></button> 
              </li>
              </ul>
        </div>
</nav>
            </>
        )
    }
}
