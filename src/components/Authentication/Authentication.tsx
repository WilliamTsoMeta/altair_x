"use client";

import React from 'react'
import LoginForm from '@/components/Authentication/LoginForm'
import RegisterForm from '@/components/Authentication/RegisterForm'

const Authentication: React.FC = () => {
  return (
    <>
      <div className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <LoginForm />
            </div>

            <div className="col-lg-6 col-md-12">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authentication
