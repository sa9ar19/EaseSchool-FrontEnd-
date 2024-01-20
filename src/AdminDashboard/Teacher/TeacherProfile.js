import React from 'react'
import { AdminDashHeader } from '../Dashboard/AdminDashHeader'

import { useLocation } from 'react-router-dom'

export const TeacherProfile = () => {
    
  const location = useLocation()
  const teacher = location.state?.teacherDetails

  return (
    <div className='flex flex-col gap-5  w-full'>
      <div>
        <AdminDashHeader/>
      </div>

      <div className="path-info p-2 h-24 text-xl font-medium">
        <h1>Teachers</h1>
        <span className='path-info-home'>Home {'>'} </span> <span className='path-info-rest'> {teacher.teacher_first_name} {teacher.teacher_last_name}  </span> 
      </div>

      <div className="max-w-xl bg-red-600">
        <div className="bg-white shadow-xl rounded-lg py-3 max-w-xl border-black">
          <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"></img>
          </div>

          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{teacher.teacher_first_name} {teacher.teacher_last_name}</h3>
              
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2">{teacher.teacher_address}</td>
                  </tr>                
                                  
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">{teacher.teacher_contact}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{teacher.teacher_email}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Subject</td>
                    <td className="px-2 py-2">{teacher.teacher_subject}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Date Of Birth</td>
                    <td className="px-2 py-2">{teacher.teacher_dob}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Class</td>
                    <td className="px-2 py-2">{teacher.teacher_class}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Bio</td>
                    <td className="px-2 py-2">{teacher.teacher_bio}</td>
                  </tr>
                </tbody>
              </table>          
          </div>
        </div>
      </div>
      

    </div>
  )
}

