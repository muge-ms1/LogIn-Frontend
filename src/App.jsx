import './App.css'
import LogIn from './Pages/LogIn'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/Profile';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
     
      
    </div>
  )
}

export default App
