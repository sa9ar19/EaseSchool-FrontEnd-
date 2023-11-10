import React from 'react'

export const AddTeacher = () => {
  return (
    <div>
      <div className="path-info">
        <h1>Teachers</h1>
        <span className='path-info-home'>Home {'>'} </span> <span className='path-info-rest'> Add new Teacher </span> 
      </div>

        <div className="add_teacher_container">
            <h1>Add new Teacher</h1>
            <form action="">
              <div className="form-field">
                <label htmlFor="teacher-first-name">
                  First Name  <br/>
                  <input type='text' id='teacher-first-name' name='teacher-first-name'></input>
                </label>
              </div>
                
              <div className="form-field">
                <label htmlFor="teacher-last-name">Last Name</label> <br />
                <input type='text' id='teacher-last-name' name='teacher-last-name'></input>
              </div>

              <div className="form-field">
                <label htmlFor="teacher-class">Class</label> <br />
                <input type='number' id='teacher-class' name='teacher-class'></input>
              </div>

              <div className="form-field">
                <label htmlFor="teacher-subject">Subject</label> <br />
                <input type='text' id='teacher-subject' name='teacher-subject'></input>
              </div>

              <div className="form-field">
                <label htmlFor="teacher-email">Email</label> <br />
                <input type="email" id='teacher-email' name='teacher-email' />
              </div>

              <div className="form-field">
                <label htmlFor="teacher-contact">Contact</label> <br />
                <input type="number" id='teacher-contact' name='teacher-contact' />
              </div>

              <div className="form-field">
                <label htmlFor="teacher-address">Address</label> <br />
                <input type="text" id='teacher-address' name='teacher-address' />
              </div>

              <div className="form-field">
                <label htmlFor="teacher-dob">Date Of Birth</label> <br />
                <input type="date" id='teacher-dob' name='teacher-dob' />
              </div>

              <div className="form-field">
              <label htmlFor="teacher-gender">Gender</label> <br />
                <select name="teacher-gender" id="teacher-gender">
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="teacher-bio">Short Bio</label> <br />
                <textarea type="textarea" id='teacher-bio' name='teacher-bio' />
              </div>

              <div className="form-field">
                <label htmlFor="teacher-photo">Upload Teachers Photo</label> <br />
                <input type="file" id='teacher-photo' name='teacher-photo' />
              </div>

              <div className="form-field">
                <label htmlFor="teacher-resume">Upload Teachers Resume</label> <br />
                <input type="file" id='teacher-resume' name='teacher-resume' />
              </div>

              <div className="form-field">
                <button type='submit'>Save</button>
              </div>

            </form>
        </div>
    </div>
  )
}
