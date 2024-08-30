import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  HomePage  from './Pages/HomePage'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Events from './Pages/Events'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import { Box } from '@chakra-ui/react'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Box pt= '6.875rem'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
