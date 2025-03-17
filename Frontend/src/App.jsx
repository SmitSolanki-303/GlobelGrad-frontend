import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Final/HomeMain'
import Login from './components/SignUpPage/Login'
import RegisterPage from './Final/RegisterMain'
import PrivacyPolicy from './components/TermAndConditionPage/PrivacyPolicy';
import Protfolio from './Final/ProtfolioMain'
import PortfolioWebsitePreview from './components/TempletPage/Templete'
import BlogMain from './Final/BlogMain'
import MainJob from './Final/MainJob'
import ExperienceForm from './components/SubProtfolioPages/ExperienceForm'




function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<Home />}></Route>
      <Route path ='/login' element={<Login/>} />
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/portfolio-builder" element={<Protfolio />} ></Route>
      <Route path='/templet' element={<PortfolioWebsitePreview />}></Route>
      {/* <Route path='/ex' element={<ExperienceForm />}></Route> */}
      <Route path='/blog' element={<BlogMain />}></Route>
      <Route path='/jd' element={<MainJob />}></Route>


    </Routes>
    </>
  )
}

export default App
