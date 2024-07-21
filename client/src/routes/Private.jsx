import { Navigate } from 'react-router-dom'

const Private = ({ component }) => {
	const user = {
		name: 'Srija Adhya',
		email: 'srija@gmail.com',
	}
	return user ? component : <Navigate to="/login" />
}

export default Private
