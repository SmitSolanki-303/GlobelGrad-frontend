import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const PortfolioWebsitePreview = ({ formData = {} }) => {
  const [activePage, setActivePage] = useState('home');
  
  // Default values for all form fields
  const defaultData = {
    name: 'Your Name',
    email: 'your.email@example.com',
    phone: '+1234567890',
    school10: '10th School Name',
    percentage10: '95%',
    school12: '12th School Name',
    percentage12: '92%',
    collegeName: 'College Name',
    collegeDegree: 'Bachelor of Technology',
    cgpa: '8.5',
    skills: 'React, Node.js, Python',
    softSkills: 'Leadership, Communication',
    projectName: 'Project Title',
    projectDescription: 'Project description will appear here',
    companyName: 'Company Name',
    companyDescription: 'Experience details will appear here'
  };

  // Merge default data with provided formData
  const data = { ...defaultData, ...formData };

  const NavBar = () => (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-xl font-bold">{data.name}</span>
        <div className="space-x-4">
          <button onClick={() => setActivePage('home')} className={`text-white ${activePage === 'home' ? 'font-bold' : ''}`}>Home</button>
          <button onClick={() => setActivePage('education')} className={`text-white ${activePage === 'education' ? 'font-bold' : ''}`}>Education</button>
          <button onClick={() => setActivePage('skills')} className={`text-white ${activePage === 'skills' ? 'font-bold' : ''}`}>Skills</button>
          <button onClick={() => setActivePage('projects')} className={`text-white ${activePage === 'projects' ? 'font-bold' : ''}`}>Projects</button>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
      <p className="text-xl mb-6">{data.collegeDegree}</p>
      <div className="flex justify-center gap-4">
        <Github className="w-6 h-6" />
        <Linkedin className="w-6 h-6" />
        <Mail className="w-6 h-6" />
        <Phone className="w-6 h-6" />
      </div>
    </div>
  );

  const EducationPage = () => (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Education Journey</h2>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">College Education</h3>
          <p className="text-gray-600">{data.collegeName}</p>
          <p>CGPA: {data.cgpa}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">12th Standard</h3>
          <p className="text-gray-600">{data.school12}</p>
          <p>Percentage: {data.percentage12}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">10th Standard</h3>
          <p className="text-gray-600">{data.school10}</p>
          <p>Percentage: {data.percentage10}</p>
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
          <p className="text-gray-600">{data.skills}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
          <p className="text-gray-600">{data.softSkills}</p>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects & Experience</h2>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{data.projectName}</h3>
          <p className="text-gray-600">{data.projectDescription}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{data.companyName}</h3>
          <p className="text-gray-600">{data.companyDescription}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 h-[80vh] overflow-y-auto shadow-lg rounded-lg">
      <NavBar />
      {activePage === 'home' && <HomePage />}
      {activePage === 'education' && <EducationPage />}
      {activePage === 'skills' && <SkillsPage />}
      {activePage === 'projects' && <ProjectsPage />}
    </div>
  );
};

export default PortfolioWebsitePreview;