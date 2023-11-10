import React from 'react'
import image from '../../assets/adminprofile.jpg'

export const TeacherProfile = () => {

  const teachers = [
    {
    name: "Sagar Khadka",
    subject: "Computer",
    age: 22,
    email: "khadkasagar2058@gmail.com",
    image: "../../assets/adminprofile.jpg"
  },
  {
    name: "Sagar Khadka",
    subject: "Computer",
    age: 22,
    email: "khadkasagar2058@gmail.com",
    image: "../../assets/adminprofile.jpg"
  },
  {
    name: "Sagar Khadka",
    subject: "Computer",
    age: 22,
    email: "khadkasagar2058@gmail.com",
    image: "../assets/adminprofile.jpg"
  },
  {
    name: "Anshu Subedi",
    subject: "Account",
    age: 20,
    email: "AnshuSubediii@gmail.com"
  },
  {
    name: "Anshu Subedi",
    subject: "Account",
    age: 20,
    email: "AnshuSubediii@gmail.com"
  },
  {
    name: "Anshu Subedi",
    subject: "Account",
    age: 20,
    email: "AnshuSubediii@gmail.com"
  },
  {
    name: "Anshu Subedi",
    subject: "Account",
    age: 20,
    email: "AnshuSubediii@gmail.com"
  },
  {
    name: "Anshu Subedi",
    subject: "Account",
    age: 20,
    email: "AnshuSubediii@gmail.com"
  },
  {
    name: "Anshu Subedi",
    subject: "Account",
    age: 20,
    email: "AnshuSubediii@gmail.com"
  }
]

  return (
    <div>
      <div className="path-info">
        <h1>Teachers</h1>
        <span className='path-info-home'>Home {'>'} </span> <span className='path-info-rest'> AllTeachers </span> 
      </div>

      <div className="teacher-profile-container">
        
        {teachers.map((item) => (
          <div className='teacher-profile-card'>
            <image/>
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>
            <h2>{item.subject}</h2>
          </div>
        ))}
      </div>
      
    </div>
  )
}
