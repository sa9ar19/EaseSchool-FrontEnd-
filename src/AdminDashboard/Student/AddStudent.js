import React from "react";
import { useState } from "react";
import { AdminDashHeader } from "../Dashboard/AdminDashHeader";

export const AddStudent = () => {
  const handleSubmit = async () => {
    console.log("submitted");

    const response = await fetch("http://localhost:8080/addStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log(data);
  };

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  return (
    <div className="flex flex-col gap-5  w-full">
      <div>
        <AdminDashHeader />
      </div>

      <div className="path-info p-2 h-24 text-xl font-medium">
        <h1>Students</h1>
        <span className="path-info-home">Home {">"} </span>{" "}
        <span className="path-info-rest"> Add new Student </span>
      </div>

      <div className="add_student_container">
        <h1>Add new Student</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="student_first_name">
              First Name <br />
              <input
                onChange={handleChange}
                type="text"
                id="student_first_name"
                name="student_first_name"></input>
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="student_last_name">Last Name</label> <br />
            <input
              onChange={handleChange}
              type="text"
              id="student_last_name"
              name="student_last_name"></input>
          </div>

          <div className="form-field">
            <label htmlFor="student_class">Class</label> <br />
            <input
              onChange={handleChange}
              type="number"
              id="student_class"
              name="student_class"></input>
          </div>

          <div className="form-field">
            <label htmlFor="student_parents_name">Parents Name</label> <br />
            <input
              onChange={handleChange}
              type="text"
              id="student_parents_name"
              name="student_parents_name"></input>
          </div>

          <div className="form-field">
            <label htmlFor="student_email"> Parents Email</label> <br />
            <input
              onChange={handleChange}
              type="email"
              id="student_email"
              name="student_email"
            />
          </div>

          <div className="form-field">
            <label htmlFor="student_contact">Contact</label> <br />
            <input
              onChange={handleChange}
              type="number"
              id="student_contact"
              name="student_contact"
            />
          </div>

          <div className="form-field">
            <label htmlFor="student_address">Address</label> <br />
            <input
              onChange={handleChange}
              type="text"
              id="student_address"
              name="student_address"
            />
          </div>

          <div className="form-field">
            <label htmlFor="student_dob">Date Of Birth</label> <br />
            <input
              onChange={handleChange}
              type="date"
              id="student_dob"
              name="student_dob"
            />
          </div>

          <div className="form-field">
            <label htmlFor="student_gender">Gender</label> <br />
            <select
              onChange={handleChange}
              name="student_gender"
              id="student_gender">
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="student_bio">Short Bio</label> <br />
            <textarea
              className="h-100"
              onChange={handleChange}
              type="textarea"
              id="student_bio"
              name="student_bio"
            />
          </div>

          <div>
            <div className="form-field">
              <label htmlFor="student_photo">Upload students Photo</label>{" "}
              <br />
              <input
                onChange={handleChange}
                type="file"
                id="student_photo"
                name="student_photo"
              />
            </div>

            <div className="form-field">
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
