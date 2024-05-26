"use client";

import React from 'react'

const RegisterForm: React.FC = () => {
  return (
    <>
      <div className="register-form">
        <h2>Register</h2>

        <form>
          <div className='row'>
            <div className='col-md-6'>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>

          <p className="description">
            The password should be at least eight characters long. To make it
            stronger, use upper and lower case letters, numbers, and symbols
            like ! ? $ % ^ & )
          </p>

          <button type="submit" className="default-btn">
            Register Now
          </button>
        </form>
      </div>
    </>
  )
}

export default RegisterForm
