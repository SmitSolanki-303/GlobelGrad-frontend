import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Final/Home'
import Login from './components/Login'
import RegisterPage from './Final/RegisterPage'
import PrivacyPolicy from './components/PrivacyPolicy';
import Protfolio from './Final/Protfolio'
import PortfolioWebsitePreview from './components/PortfolioWebsitePreview'
import BlogMain from './Final/BlogMain'
import MainJob from './Final/MainJob'


function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<Home />}></Route>
      <Route path ='/login' element={<Login/>} />
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/protfolio-form" element={<Protfolio />} ></Route>
      <Route path='/templet' element={<PortfolioWebsitePreview />}></Route>
      <Route path='/blog' element={<BlogMain />}></Route>
      <Route path='/jd' element={<MainJob />}></Route>

    </Routes>
    </>
  )
}

export default App
