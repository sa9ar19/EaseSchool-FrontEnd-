import React, { useEffect, useState } from "react";
import axios from "axios";
import { AdminDashHeader } from "../Dashboard/AdminDashHeader";
import { useNavigate } from "react-router-dom";
import { TeacherProfile } from "./TeacherProfile";

export const AllTeachers = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allTeacher")
      .then((response) => setItems(response.data));
  }, []);

  function handleProfile(id) {
    const selectedTeacher = items.find((item) => item._id === id);

    setTeacher(selectedTeacher);

    navigate("/teacherProfile", { state: { teacherDetails: selectedTeacher } });
  }

  return (
    <div className="flex flex-col gap-5  w-full">
      <div>
        <AdminDashHeader />
      </div>

      <div className="path-info p-2 h-24 text-xl font-medium">
        <h1>Teachers</h1>
        <span className="path-info-home">Home {">"} </span>{" "}
        <span className="path-info-rest"> AllTeachers </span>
      </div>

      <div className="teacher-profile-container ">
        {items.map((item) => (
          // <div key={item._id} className='teacher-profile-card'>
          <div
            key={item._id}
            className="flex items-center h-auto w-auto justify-center m-4">
            <div className="max-w-xs">
              <div className="bg-white shadow-xl rounded-lg py-3">
                <div className="photo-wrapper p-2">
                  <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                    alt="John Doe"></img>
                </div>
                <div className="p-2">
                  <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                    {item.teacher_first_name} {item.teacher_last_name}
                  </h3>
                  <div className="text-center text-gray-400 text-xs font-semibold">
                    <p>{item.teacher_subject}</p>
                  </div>
                  <table className="text-xs my-3">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Address
                        </td>
                        <td className="px-2 py-2">{item.teacher_address}</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Phone
                        </td>
                        <td className="px-2 py-2">{item.teacher_contact}</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Email
                        </td>
                        <td className="px-2 py-2">{item.teacher_email}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="text-center my-3">
                    <button
                      className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                      onClick={() => {
                        handleProfile(item._id);
                      }}>
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
