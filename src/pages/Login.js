import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaChalkboardUser } from 'react-icons/fa6'
import { FaUserTie } from 'react-icons/fa6'
import { FaUserGraduate  } from 'react-icons/fa6'
import { FaUserGroup } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
        <div className="login_container">

        <Link to="/adminLoginForm">
          <div className="login_category">
            <div className="category_icon">
              < FaUserTie />
            </div>
            <div className="category_title">
              <h2>Admin</h2>
            </div>
          </div>
        </Link>

        <Link to="/teacherLoginForm">
          <div className="login_category">
            <div className="category_icon">
              <FaChalkboardUser />
            </div>
            <div className="category_title">
              <h2>Teacher</h2>
            </div>
          </div>
        </Link>

        <Link to="/studentLoginForm">
          <div className="login_category">
            <div className="category_icon">
              <FaUserGraduate />
            </div>
            <div className="category_title">
              <h2>Student</h2>
            </div>
          </div>
        </Link>

        <Link to="/parentsLoginForm">
          <div className="login_category">
            <div className="category_icon">
              <FaUserGroup />
            </div>
            <div className="category_title">
              <h2>Parents</h2>
            </div>
          </div> 
        </Link>

        </div>
    </div>
    
  )
}
