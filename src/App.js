import {BrowserRouter, Route, Routes } from 'react-router-dom'

// Styles
import './App.css';

// Pages & components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import CreateTask from './pages/createTask/CreateTask'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'
import ProjectDashboard from './pages/projectDashboard/ProjectDashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard/>}></Route>
            <Route exact path="/create" element={<Create/>}></Route>
            <Route exact path="/createTask" element={<CreateTask/>}></Route>
            <Route exact path="/projectDashboard" element={<ProjectDashboard/>}></Route>
            <Route exact path="/projects" element={<Project/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;