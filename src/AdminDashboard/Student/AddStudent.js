import React from 'react'

export const AddStudent = () => {
  return (
    <div>
      <div className="path-info">
        <h1>Students</h1>
        <span className='path-info-home'>Home {'>'} </span> <span className='path-info-rest'> Add new Student </span> 
      </div>

        <div className="add_student_container">
            <h1>Add new Student</h1>
            <form action="">
              <div className="form-field">
                <label htmlFor="student-first-name">
                  First Name  <br/>
                  <input type='text' id='student-first-name' name='student-first-name'></input>
                </label>
              </div>
                
              <div className="form-field">
                <label htmlFor="student-last-name">Last Name</label> <br />
                <input type='text' id='student-last-name' name='student-last-name'></input>
              </div>

              <div className="form-field">
                <label htmlFor="student-class">Class</label> <br />
                <input type='number' id='student-class' name='student-class'></input>
              </div>

              <div className="form-field">
                <label htmlFor="student-parents-name">Parents Name</label> <br />
                <input type='text' id='student-parents-name' name='student-parents-name'></input>
              </div>

              <div className="form-field">
                <label htmlFor="student-email"> Parents Email</label> <br />
                <input type="email" id='student-email' name='student-email' />
              </div>

              <div className="form-field">
                <label htmlFor="student-contact">Contact</label> <br />
                <input type="number" id='student-contact' name='student-contact' />
              </div>

              <div className="form-field">
                <label htmlFor="student-address">Address</label> <br />
                <input type="text" id='student-address' name='student-address' />
              </div>

              <div className="form-field">
                <label htmlFor="student-dob">Date Of Birth</label> <br />
                <input type="date" id='student-dob' name='student-dob' />
              </div>

              <div className="form-field">
              <label htmlFor="student-gender">Gender</label> <br />
                <select name="student-gender" id="student-gender">
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="student-bio">Short Bio</label> <br />
                <textarea type="textarea" id='student-bio' name='student-bio' />
              </div>

              <div>
              <div className="form-field">
                <label htmlFor="student-photo">Upload students Photo</label> <br />
                <input type="file" id='student-photo' name='student-photo' />
              </div>

              <div className="form-field">
                <button type='submit'>Save</button>
              </div>
              </div>

            </form>
        </div>
    </div>
  )
}
