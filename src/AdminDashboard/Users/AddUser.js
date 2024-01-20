import React, { useState } from "react";
import { AdminDashHeader } from "../Dashboard/AdminDashHeader";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const AddUser = () => {
  const [visible, setVisible] = useState(true);

  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
    fullname: "",
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

      const response = await axios.post("http://localhost:8080/addUser", user);

      const data = await response.data;

      if (data.status === "ok") {
        alert("User Added Successfully");
      }
      else if(data.status === "userExists"){
        alert("User Already Exists")
      }
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <AdminDashHeader />
      </div>

      <div className="path-info p-2 h-24 text-xl font-medium">
        <h1>Teachers</h1>
        <span className="path-info-home">Home {">"} </span>{" "}
        <span className="path-info-rest"> Add User </span>
      </div>

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
              name="fullname"
              onChange={(e) => setFullname(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Full name"
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
              placeholder="username"
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
            Register new user
          </button>
        </form>
      </div>
    </div>
  );
};
