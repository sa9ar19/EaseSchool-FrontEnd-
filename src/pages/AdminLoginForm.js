import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminLoginForm = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const response = await fetch('http://localhost:8080/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      console.log(data.message);

      if (data.message == "validLogin"){
        navigate('/adminPanel');
      }
      else if(data.message == "invalidPassword"){
        alert("Invalid Password")
      }
      else {
        alert("Invalid Login")
      }
  }

  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/demo',{
      method:'GET',
    })
   const data = await response.json();
   console.log(data);
  }

  return (
    <div className="form_container">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Admin Login</h5>
              <div>
                  <label htmlFor="adminName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input  onChange={handleChange}  type="text" name="adminName" id="adminName" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required></input>
              </div>
              <div>
                  <label htmlFor="adminPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input  onChange={handleChange}  type="password" name="adminPassword" id="adminPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
              </div>
              <div className="flex items-start">
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                          <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"></input>
                      </div>
                      <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                  </div>
                  <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
              </div>
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
              </div>
          </form>
      </div>
    </div>
  )
}
