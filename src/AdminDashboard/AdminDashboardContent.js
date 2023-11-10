import React from 'react'
import { FaUserGraduate } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import StudentsChart from './StudentsChart';
import TeachersChart from './TeachersChart';

export const AdminDashboardContent = () => {
  return (
    <div>
      <div className="dashboard-content-container">
        <div className="path-info">
          <h1>Admin Dashboard</h1>
          <span className='path-info-home'>Home {'>'} </span> <span className='path-info-rest'> Admin </span> 
        </div>

        <div className="total-info-container">
          <div className="total-students">
            <div className="icon-container">
              <FaUserGraduate /> 
            </div>
            <div className="info">
              <h1>Students</h1>
              <p>1200</p>
            </div>   
          </div>

          <div className="total-teachers">
            <div className="icon-container">
              <FaUserTie /> 
            </div>
            <div className="info">
              <h1>Teachers</h1>
              <p>35</p>
            </div>   
          </div>

          <div className="total-parents">
            <div className="icon-container">
              <FaUserGroup /> 
            </div>
            <div className="info">
              <h1>Parents</h1>
              <p>900</p>
            </div>   
          </div>
        </div>

        <div className="piechart-container">
          <div className="students-chart">
            <StudentsChart/>
          </div>
          <div className="students-chart">
            <TeachersChart/>
          </div>
        </div>
      </div>
    </div>
  )
}
