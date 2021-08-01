import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
  state = {}
  render () {
    return (
      <div className='card'>
        <a href='/contact' className='card-header'>
          Contact Us
        </a>
        <div className='card-body'>
          <blockquote className='blockquote mb-0'>
            <p>
              "The two most important days in your life are the day you are born
              and the day you find out why."
            </p>
            <footer className='blockquote-footer'>
              Kirby Bressler <cite title='Source Title'>(Mark Twain)</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    )
  }
}

export default Footer
