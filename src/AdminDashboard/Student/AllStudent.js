import React, { useEffect, useState } from "react";
import { AdminDashHeader } from "../Dashboard/AdminDashHeader";
import { AdminDashboard } from "../AdminSidebar";
import axios from "axios";

export const AllStudent = () => {
  const [student, setStudent] = useState([]);
  const [items, setItems] = useState([]);
  const [classn, setClassn] = useState(0);

  const handleClass = (e) => {
    setClassn(e.target.value);
    console.log(classn);
  };

  const handleSubmit =async (e) => {

    e.preventDefault()
    const response = await fetch("http://localhost:8080/allStudent", {
        method: "POST",
        body: classn,
      });
  
      console.log(classn)
      console.log("ddk  ")
      const data = await response.json();
  
      console.log(data);
  }

  return (
    <div className="flex flex-col gap-5  w-full">
      <div>
        <AdminDashHeader />
      </div>

      <div className="path-info p-2 h-24 text-xl font-medium">
        <h1 className="">Students</h1>
        <span className="path-info-home">Home {">"} </span>{" "}
        <span className="path-info-rest"> All Students </span>
      </div>

      <div>
        <form>
          <h1 className="text-2xl">Select Class</h1>
          <select
            onChange={handleClass}
            className="rounded-lg m-3 border-2 h-12"
            name="class"
            id="class">
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
            <option value="5">Class 5</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
          </select>

          <button
            onClick={handleSubmit}
            className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600">
            Submit
          </button>
        </form>
      </div>

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student name
                </th>
                <th scope="col" className="px-6 py-3">
                  Class
                </th>
                <th scope="col" className="px-6 py-3">
                  Roll no
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.student_first_name} {item.student_last_name}
                  </th>
                  <td className="px-6 py-4">{item.student_class}</td>
                  <td className="px-6 py-4">{item.student_class}</td>
                  <td className="px-6 py-4">{item.student_contact}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
