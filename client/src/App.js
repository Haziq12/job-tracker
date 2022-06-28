import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Register, Error } from './pages'
import {  AddJob,
  AllJobs,
  Profile,  
  Stats,
  SharedLayout} from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
