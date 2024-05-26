"use client";

import React from 'react'
import Link from 'next/link';

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="login-form">
        <h2>Login</h2>

        <form>
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

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkme"
                />
                <label className="form-check-label" htmlFor="checkme">
                  Remember me
                </label>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
              <Link href="#" className="lost-your-password">
                Forgot your password?
              </Link>
            </div>
          </div>

          <button type="submit" className="default-btn">
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default LoginForm
