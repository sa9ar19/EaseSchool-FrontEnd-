import React from 'react'
import { useState } from 'react'
import { AdminDashboard } from '../AdminSidebar'
import { AdminDashHeader } from '../Dashboard/AdminDashHeader'

export const AddTeacher = () => {

  const handleSubmit = async () => {
    
    console.log("submitted")

    const response = await fetch('http://localhost:8080/addTeacher', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const data = await response.json()

    console.log(data)
  }

  const [form, setForm] = useState({});

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
    console.log(form)
  }


  return (
    <div className='flex justify-start gap-2'>
        <div className=''>
          <AdminDashboard/>
        </div>
        <div className='flex flex-col gap-5 w-full'>
          <div>
            <AdminDashHeader/>
          </div>

          <div className="path-info p-2 h-24 text-xl font-medium">
            <h1>Teachers</h1>
            <span className='path-info-home'>Home {'>'} </span> <span className='path-info-rest'> Add new Teacher </span> 
          </div>

        <div className="add_teacher_container  m-2">
            <h1>Add new Teacher</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="teacher_first_name">
                  First Name  <br/>
                  <input onChange={handleChange} type='text' id='teacher_first_name' name='teacher_first_name'></input>
                </label>
              </div>
                
              <div className="form-field">
                <label htmlFor="teacher_last_name">Last Name</label> <br />
                <input onChange={handleChange} type='text' id='teacher_last_name' name='teacher_last_name'></input>
              </div>

              <div className="form-field">
                <label htmlFor="teacher_class">Class</label> <br />
                <input onChange={handleChange} type='number' id='teacher_class' name='teacher_class'></input>
              </div>

              <div className="form-field">
                <label htmlFor="teacher_subject">Subject</label> <br />
                <input onChange={handleChange} type='text' id='teacher_subject' name='teacher_subject'></input>
              </div>

              <div className="form-field">
                <label htmlFor="teacher_email">Email</label> <br />
                <input onChange={handleChange} type="email" id='teacher_email' name='teacher_email' />
              </div>

              <div className="form-field">
                <label htmlFor="teacher_contact">Contact</label> <br />
                <input onChange={handleChange} type="number" id='teacher_contact' name='teacher_contact' />
              </div>

              <div className="form-field">
                <label htmlFor="teacher_address">Address</label> <br />
                <input onChange={handleChange} type="text" id='teacher_address' name='teacher_address' />
              </div>

              <div className="form-field">
                <label htmlFor="teacher_dob">Date Of Birth</label> <br />
                <input onChange={handleChange} type="date" id='teacher_dob' name='teacher_dob' />
              </div>

              <div className="form-field">
              <label htmlFor="teacher_gender">Gender</label> <br />
                <select onChange={handleChange} name="teacher_gender" id="teacher_gender">
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="teacher_bio">Short Bio</label> <br />
                <textarea onChange={handleChange} type="textarea" id='teacher_bio' name='teacher_bio' />
              </div>

              <div className="form-field">
                <label htmlFor="teacher_photo">Upload Teachers Photo</label> <br />
                <input onChange={handleChange} type="file" id='teacher_photo' name='teacher_photo' />
              </div>

              <div className="form-field">
                <label htmlFor="teacher_resume">Upload Teachers Resume</label> <br />
                <input onChange={handleChange} type="file" id='teacher_resume' name='teacher_resume' />
              </div>

              <div className="form-field">
                <button type='submit'>Save</button>
              </div>

            </form>
        </div>
    </div>
  </div>
  )
}
