// import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import { theme } from './components/Navbar.jsx';
import { useDispatch } from 'react-redux';
import { fetchJobsAsync } from './features/jobsSlice';
import { fetchProjectsAsync } from './features/projectsSlice';
import { fetchSchoolsAsync } from './features/schoolsSlice';

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
        dispatch(fetchJobsAsync());
        dispatch(fetchProjectsAsync());
        dispatch(fetchSchoolsAsync());
    }, [dispatch]);
    
  return (
    <div className="App" id={theme}>
      <NavBar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/experience"} element={<Experience/>}/>
        <Route path={"/projects"} element={<Projects/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
