import { Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Login, AdminLoginForm, TeacherLoginForm, ParentLoginForm, StudentLoginForm } from '../pages/index'

export const AllRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="" element= {<div>  <Header /> <Login /> </div>} />
				<Route path="/adminLoginForm" element= {<div> < AdminLoginForm />  </div>} />
				<Route path="/teacherLoginForm" element= {<div> < TeacherLoginForm />  </div>} />
				<Route path="/studentLoginForm" element= {<div> < StudentLoginForm />  </div>} />
				<Route path="/parentsLoginForm" element= {<div> < ParentLoginForm />  </div>} />
			</Routes>
		</>
		)
}