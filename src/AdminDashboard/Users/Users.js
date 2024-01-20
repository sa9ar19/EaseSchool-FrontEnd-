import React, { useEffect, useState } from "react";
import {EditUserForm} from "./EditUserForm" 
import axios from "axios";
import { Navbar } from "../Dashboard/Navbar";

export const Users = () => {
  const [data, setData] = useState([]);

  const [edituser, setEdituser] = useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:8080/getUsers")
      .then((response) => setData(response.data));
  }, [data]);

  const handleDelete =async (name)=> {
    const userId = name
    const response =await axios.post("http://localhost:8080/deleteUser", {userId})
    
    const data = response.data
    console.log(data)
    setData(data)
  }

  const handleEdit = async (name)=> {
    setEdituser(name)
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <Navbar />
      </div>

      <div className="path-info p-2 h-24 text-xl font-medium">
        <h1>Teachers</h1>
        <span className="path-info-home">Home {">"} </span>{" "}
        <span className="path-info-rest"> Users </span>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-row w-full gap-5 rounded-md">
          <table className="min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Name
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  User Name
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Email Address
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Password
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Role
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (

              
              <tr key={item._id} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Name
                  </span>
                  {item.fullname}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    User Name
                  </span>
                  {item.username}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Email Address
                  </span>
                  {item.fullname}@gmail.com
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Mobile
                  </span>
                  {item.password}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Mobile
                  </span>
                  {item.role}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button onClick={()=>handleEdit(item)} className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    Edit
                  </button>
                  <button onClick={()=>handleDelete(item.fullname)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        {edituser && <EditUserForm selecteduser={edituser} />}
      </div>
    </div>
  );
};
