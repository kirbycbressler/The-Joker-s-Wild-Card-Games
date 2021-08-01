import React, { Component } from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'
import storeContext from '../context/storeContext'
//imrc
//cc
class NavBar extends Component {
  static contextType = storeContext

  state = {}
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='navbar-page'>
          <h1>Hello There! Welcome to my online game store!</h1>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-links' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li>
              <Link to='/Catalog' className='nav-links'>
                Catalog
              </Link>
            </li>
            <li>
              <Link to='/About' className='nav-links'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/Admin' className='nav-links'>
                Admin
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-links' aria-current='page' to='/cart'>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
