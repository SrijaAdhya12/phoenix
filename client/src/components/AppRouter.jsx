import { Routes, Route} from 'react-router-dom'
import { Home, Posts } from '../pages'


const AppRouter = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          
    </Routes>
  )
}

export default AppRouter