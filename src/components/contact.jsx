import React, { Component } from 'react'

class Contact extends Component {
  state = {}
  render () {
    return (
      <React.Fragment>
        <div classNameName='contact-page'>
          <h1>Contact Us</h1>
        </div>
        <form>
          <div className='mb-3'>
            <label className='form-label'>Email address</label>
            <input type='text' className='form-control' />
            <div className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input type='text' className='form-control' />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Question/Comment</label>
            <input type='text' className='form-control' />
          </div>
          <button type='submit' className='btn btn-primary'>
            Email Me!
          </button>
        </form>
      </React.Fragment>
    )
  }
}

export default Contact
