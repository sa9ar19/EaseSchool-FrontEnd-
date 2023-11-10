import { Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Login, AdminLoginForm, TeacherLoginForm, ParentLoginForm, StudentLoginForm, AdminTopMenu } from '../pages/index'
import { AdminDashboard } from '../AdminDashboard/AdminDashboard'
import { TeacherProfile } from '../AdminDashboard/Teacher/TeacherProfile'
import { AddTeacher } from '../AdminDashboard/Teacher/AddTeacher'
import { AdminDashboardContent } from '../AdminDashboard/AdminDashboardContent'
import { AddStudent } from '../AdminDashboard/Student/AddStudent'

export const AllRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="" element= {<div>  <Header /> <Login /> </div>} />
				<Route path="/adminLoginForm" element= {<div> < AdminLoginForm />  </div>} />
				<Route path="/teacherLoginForm" element= {<div> < TeacherLoginForm />  </div>} />
				<Route path="/studentLoginForm" element= {<div> < StudentLoginForm />  </div>} />
				<Route path="/parentsLoginForm" element= {<div> < ParentLoginForm />  </div>} />
				<Route path="/adminPanel" element= {<div> <AdminDashboard/> <AdminDashboardContent/> </div>} />
				<Route path="/dashboard" element= {<div> <AdminDashboard/> <AdminDashboardContent/> </div>} />
				<Route path="/allTeachers" element= {<div> <AdminDashboard/> < TeacherProfile />  </div>} />
				<Route path="/addTeachers" element= {<div> <AdminDashboard/> < AddTeacher />  </div>} />
				<Route path="/addStudents" element= {<div> <AdminDashboard/> < AddStudent />  </div>} />

			</Routes>
		</>
		)
}