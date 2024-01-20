import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import {
  Login,
  AdminLoginForm,
  TeacherLoginForm,
  ParentLoginForm,
  StudentLoginForm,
} from "../pages/index";
import { AdminDashContent } from "../AdminDashboard/Dashboard/AdminDashContent";

import { AddStudent } from "../AdminDashboard/Student/AddStudent";
import { EditStudent } from "../AdminDashboard/Student/EditStudent";
import { AllStudent } from "../AdminDashboard/Student/AllStudent";

import { AllTeachers } from "../AdminDashboard/Teacher/AllTeachers";
import { AddTeacher } from "../AdminDashboard/Teacher/AddTeacher";
import { EditTeacher } from "../AdminDashboard/Teacher/EditTeacher";

import { AllParents } from "../AdminDashboard/Parents/AllParents";
import { AdminDashboard } from "../AdminDashboard/AdminSidebar";

import { AddNewBook } from "../AdminDashboard/Library/AddNewBook";
import { TeacherProfile } from "../AdminDashboard/Teacher/TeacherProfile";
import { SearchBooks } from "../AdminDashboard/Library/SearchBooks";
import { Users } from "../AdminDashboard/Users/Users";
import { AddUser } from "../AdminDashboard/Users/AddUser";
import { LoginForm } from "../pages/LoginForm";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <div>
              {" "}
              <Header /> <LoginForm />{" "}
            </div>
          }
        />

        <Route
          path="/dashboard"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <AdminDashContent />{" "}
            </div>
          }
        />

        <Route
          path="/allTeachers"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <AllTeachers />{" "}
            </div>
          }
        />
        <Route
          path="/addTeachers"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <AddTeacher />{" "}
            </div>
          }
        />
        <Route
          path="/editTeachers"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <EditTeacher />{" "}
            </div>
          }
        />
        <Route
          path="/teacherProfile"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <TeacherProfile />{" "}
            </div>
          }
        />

        <Route
          path="/addStudents"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <AddStudent />{" "}
            </div>
          }
        />
        <Route
          path="/allStudents"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <AllStudent />{" "}
            </div>
          }
        />
        <Route
          path="/editStudents"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <EditStudent />{" "}
            </div>
          }
        />

        <Route
          path="/allParents"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <AllParents />{" "}
            </div>
          }
        />

        <Route
          path="/addBook"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <AddNewBook />{" "}
            </div>
          }
        />
        <Route
          path="/searchBook"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <SearchBooks />{" "}
            </div>
          }
        />

        <Route
          path="/demo"
          element={
            <div>
              {" "}
              <EditTeacher /> <AddTeacher />{" "}
            </div>
          }
        />

        <Route
          path="/users"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <Users />{" "}
            </div>
          }
        />
        <Route
          path="/addUser"
          element={
            <div className="flex w-full justify-start gap-2">
              {" "}
              <AdminDashboard /> <AddUser />{" "}
            </div>
          }
        />
      </Routes>
    </>
  );
};
