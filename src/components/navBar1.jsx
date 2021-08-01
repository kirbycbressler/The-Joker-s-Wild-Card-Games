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
      <div className='navbar-page'>
        <h1>Hello There! Welcome to my online game store!</h1>

        <ul>
          <li>
            <Link to='/' className='nav-links'>
              Home
            </Link>
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
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <Link className='btn btn-outline-primary' to='/cart'>
            <i aria-hidden='true' className='fa fa-cart-plus mr-1'></i>
            View Cart &nbsp;
            <span className='badge badge-secondary cart-badge'>
              {this.context.cart.length}
            </span>
          </Link>
        </form>
      </div>
    )
  }
}

export default NavBar
