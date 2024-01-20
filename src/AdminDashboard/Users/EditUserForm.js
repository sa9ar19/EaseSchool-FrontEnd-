import React, { useEffect, useState } from "react";
import { AdminDashHeader } from "../Dashboard/AdminDashHeader";
import axios from "axios";

export const EditUserForm = ({selecteduser}) => {
  const [visible, setVisible] = useState(true);

  const[selectedusers, setSelectedusers ] = useState({})

  useEffect(()=>{
    setSelectedusers(selecteduser)
  },[selecteduser])

  useEffect(()=>{
    console.log(selecteduser)
    console.log(selectedusers.fullname)
  },[selectedusers])

  const [user, setUser] = useState({
    username: selectedusers.username,
    password: selectedusers.password,
    role: selectedusers.roll,
    fullname: selectedusers.fullname,
  });

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submited");

    if (password === confirmPassword) {
      setUser({
        fullname: fullname,
        username: username,
        password: password,
        role: role,
      });

    

      const response = await axios.post("http://localhost:8080/updateUser", user);
      console.log(user)
    //   const data = await response.data;

    //   if (data.status === "ok") {
    //     alert("User Added Successfully");
    //   }
    //   else if(data.status === "userExists"){
    //     alert("User Already Exists")
    //   }
    // } else {
    //   alert("Passwords do not match.");
    // }
  };}

  return (
      <div className="bg-gray-900 max-w-xl rounded-lg">
        <form
          action=""
          onSubmit={handleSubmit}
          className="max-w-sm mx-auto p-10">
          <div className="mb-5">
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              value={selectedusers.fullname}
              name="fullname"
              onChange={(e) => setFullname(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              
              required></input>
          </div>

          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={selectedusers.username}
              required></input>
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type={visible ? "text" : "password"}
              id="password"
              name="password"
              value={selectedusers.password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required></input>
          </div>

          <div className="mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Repeat password
            </label>
            <input
              type={visible ? "text" : "password"}
              id="repeat-password"
              name="password"
              value={selectedusers.password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required></input>
          </div>

          <div className="max-w-sm mx-auto">
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Role
            </label>
            <select
              id="role"
              name="role"
              value={selectedusers.role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>SuperAdmin</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button
            type="submit"
            className="my-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Update
          </button>
        </form>
      </div>
  );
};
