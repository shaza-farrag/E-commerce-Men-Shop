import React from 'react'
import { BrowserRouter as Router  , Route , Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Pages/Login/Login'
import Register from './Pages/Register'

function App() {
  return (
    <div>
       <Router basename="/E-commerce-Men-Shop">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Footer /> */}
    </Router>
    </div>
  )
}

export default App