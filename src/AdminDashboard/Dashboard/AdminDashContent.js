import React from 'react'
import { FaUserGraduate } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import StudentsChart from './StudentsChart';
import TeachersChart from './TeachersChart';
import { AdminDashboard } from '../AdminSidebar';
import { AdminDashHeader } from './AdminDashHeader';

export const AdminDashContent = () => {
  return (
    <div className='flex w-full justify-start gap-2'>
      <div className=''>
        <AdminDashboard/>
      </div>

      <div className="flex flex-col gap-5  w-full">
        <div>
          <AdminDashHeader/>
        </div>
        <div className="path-info p-2 h-24 text-xl font-medium">
          <h1 className=''>Admin Dashboard</h1>
          <span className='path-info-home'>Home {'>'} </span> <span className='path-info-rest'> Admin </span> 
        </div>

        <div className="flex bg-white justify-around">
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
