import { Navigate } from 'react-router-dom'

const Auth = ({ component }) => {
	const user = {
		name: 'Srija Adhya',
		email: 'srija@gmail.com',
	}

	return user ? <Navigate to="/posts" /> : component
}

export default Auth
