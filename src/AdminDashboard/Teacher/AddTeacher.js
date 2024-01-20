import React from "react";
import { useState } from "react";
import { AdminDashHeader } from "../Dashboard/AdminDashHeader";
import axios from "axios";

export const AddTeacher = () => {
  const [form, setForm] = useState({});
  const [files, setFiles] = useState([]);

  //to handle form data uploads
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFiles = (e) => {
    const selectedFiles = e.target.files;
    const newFilesArray = [...files];

    for (let i = 0; i < selectedFiles.length; i++) {
      newFilesArray.push(selectedFiles[i]);
    }

    setFiles(newFilesArray);
  };

  //to handle form submit
  const handleSubmit = async (e) => {
    const fileData = new FormData();

    for (let i = 0; i < 3; i++) {
      fileData.append("files", files[i]);
    }

    for (const key in form) {
      fileData.append(key, form[key]);
    }

    console.log(fileData);
    const response = await axios.post(
      "http://localhost:8080/addTeacher",
      fileData
    );
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <AdminDashHeader />
      </div>

      <div className="path-info p-2 h-24 text-xl font-medium">
        <h1>Teachers</h1>
        <span className="path-info-home">Home {">"} </span>{" "}
        <span className="path-info-rest"> Add new Teacher </span>
      </div>

      <div className="add_teacher_container  m-2">
        <h1>Add new Teacher</h1>
        <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="teacher_first_name">
              First Name <br />
              <input
                onChange={handleChange}
                type="text"
                id="teacher_first_name"
                name="teacher_first_name"></input>
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="teacher_last_name">Last Name</label> <br />
            <input
              onChange={handleChange}
              type="text"
              id="teacher_last_name"
              name="teacher_last_name"></input>
          </div>

          <div className="form-field">
            <label htmlFor="teacher_class">Class</label> <br />
            <input
              onChange={handleChange}
              type="number"
              id="teacher_class"
              name="teacher_class"></input>
          </div>

          <div className="form-field">
            <label htmlFor="teacher_subject">Subject</label> <br />
            <input
              onChange={handleChange}
              type="text"
              id="teacher_subject"
              name="teacher_subject"></input>
          </div>

          <div className="form-field">
            <label htmlFor="teacher_email">Email</label> <br />
            <input
              onChange={handleChange}
              type="email"
              id="teacher_email"
              name="teacher_email"
            />
          </div>

          <div className="form-field">
            <label htmlFor="teacher_contact">Contact</label> <br />
            <input
              onChange={handleChange}
              type="number"
              id="teacher_contact"
              name="teacher_contact"
            />
          </div>

          <div className="form-field">
            <label htmlFor="teacher_address">Address</label> <br />
            <input
              onChange={handleChange}
              type="text"
              id="teacher_address"
              name="teacher_address"
            />
          </div>

          <div className="form-field">
            <label htmlFor="teacher_dob">Date Of Birth</label> <br />
            <input
              onChange={handleChange}
              type="date"
              id="teacher_dob"
              name="teacher_dob"
            />
          </div>

          <div className="form-field">
            <label htmlFor="teacher_gender">Gender</label> <br />
            <select
              onChange={handleChange}
              name="teacher_gender"
              id="teacher_gender">
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="teacher_bio">Short Bio</label> <br />
            <textarea
              onChange={handleChange}
              type="textarea"
              id="teacher_bio"
              name="teacher_bio"
            />
          </div>

          <div className="form-field">
            <label htmlFor="teachers_photo">Upload Teachers Photo</label> <br />
            <input
              onChange={handleFiles}
              type="file"
              id="teachers_photo"
              name="files"
              multiple
            />
          </div>

          <div className="form-field">
            <label htmlFor="teacher_resume">Upload Teachers Resume</label>{" "}
            <br />
            <input
              onChange={handleFiles}
              type="file"
              id="teachers_resume"
              name="files"
              multiple
            />
          </div>

          <div className="form-field">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
