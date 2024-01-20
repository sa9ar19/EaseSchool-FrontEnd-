import { Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Login, AdminLoginForm, TeacherLoginForm, ParentLoginForm, StudentLoginForm, } from '../pages/index'
import { AdminDashContent } from '../AdminDashboard/Dashboard/AdminDashContent'

import { AddStudent } from '../AdminDashboard/Student/AddStudent'
import { EditStudent } from '../AdminDashboard/Student/EditStudent'
import { AllStudent } from '../AdminDashboard/Student/AllStudent'

import { AllTeachers } from '../AdminDashboard/Teacher/AllTeachers'
import { AddTeacher } from '../AdminDashboard/Teacher/AddTeacher'
import { EditTeacher } from '../AdminDashboard/Teacher/EditTeacher'

import { AllParents } from '../AdminDashboard/Parents/AllParents'

export const AllRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="" element= {<div>  <Header /> <Login /> </div>} />

				<Route path="/adminLoginForm" element= {<div> < AdminLoginForm />  </div>} />
				<Route path="/teacherLoginForm" element= {<div> < TeacherLoginForm />  </div>} />
				<Route path="/studentLoginForm" element= {<div> < StudentLoginForm />  </div>} />
				<Route path="/parentsLoginForm" element= {<div> < ParentLoginForm />  </div>} />

				<Route path="/dashboard" element= {<div> <AdminDashContent/>  </div>} />

				<Route path="/allTeachers" element= {<div>  < AllTeachers />  </div>} />
				<Route path="/addTeachers" element= {<div>  < AddTeacher />  </div>} />
				<Route path="/editTeachers" element= {<div>  < EditTeacher />  </div>} />

				<Route path="/addStudents" element= {<div>  < AddStudent />  </div>} />
				<Route path="/allStudents" element= {<div>  < AllStudent />  </div>} />
				<Route path="/editStudents" element= {<div>  < EditStudent />  </div>} />

				<Route path="/allParents" element= {<div>  < AllParents />  </div>} />
			</Routes>
		</>
		)
}