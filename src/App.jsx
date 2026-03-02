import {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Plan from './pages/Plan';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>

  )
}

export default App
