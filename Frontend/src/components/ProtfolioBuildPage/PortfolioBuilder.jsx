import React, { useState } from 'react';
import { CheckCircle, Circle, ArrowRight, ArrowLeft, Save, Eye, Book, Trophy, Code, User, Briefcase, Layout } from 'lucide-react';
import PortfolioWebsitePreview from '../TempletPage/PortfolioWebsitePreview';
import SkillsForm from "../SubProtfolioPages/SkillsForm";
import AchievementsForm from "../SubProtfolioPages/AchievementsForm";
import EducationForm from "../SubProtfolioPages/EducationForm";
import ExperienceForm from "../SubProtfolioPages/ExperienceForm";

const PortfolioBuilder = () => {
  const [step, setStep] = useState(1);
  const [previewMode, setPreviewMode] = useState(false);
  const [formData, setFormData] = useState({
    // Keeping your original structure
    school10: '',
    percentage10: '',
    board10: '',
    passingYear10: '',
    school12: '',
    percentage12: '',
    board12: '',
    passingYear12: '',
    collegeName: '',
    collegeDegree: '',
    cgpa: '',
    graduationYear: '',
    skills: '',
    softSkills: '',
    academicAchievements: '',
    certifications: '',
    projects: '',
    extraCurricular: '',
    experiences: [],
    // Adding personal info section
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    about: '',
    linkedin: '',
    github: '',
    website: ''
  });

  const steps = [
    { id: 1, title: 'Profile', icon: User, description: 'Basic information about you.' },
    { id: 2, title: 'Education', icon: Book, description: 'Your academic background' },
    { id: 3, title: 'Skills', icon: Code, description: 'Technical & soft skills' },
    { id: 4, title: 'Achievements', icon: Trophy, description: 'Projects & certifications' },
    { id: 5, title: 'Experience', icon: Briefcase, description: 'Work history & roles' }
  ];

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return <PersonalInfoForm formData={formData} setFormData={setFormData} />;
      case 2:
        return <EducationForm formData={formData} setFormData={setFormData} />;
      case 3:
        return <SkillsForm formData={formData} setFormData={setFormData} />;
      case 4:
        return <AchievementsForm formData={formData} setFormData={setFormData} />;
      case 5:
        return <ExperienceForm formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  const togglePreview = () => {
    setPreviewMode(!previewMode);
  };

  const handleSave = () => {
    // Functionality to save the portfolio data
    alert("Portfolio saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 py-8 mt-10 md:mt-40">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Portfolio Builder</h1>
              <p className="text-gray-600">Create a standout portfolio in minutes</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={togglePreview}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  previewMode 
                    ? "bg-blue-50 text-blue-700 border-blue-200" 
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
              >
                <Eye className="w-4 h-4" />
                {previewMode ? "Edit Mode" : "Preview"}
              </button>
              <button 
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Portfolio
              </button>
              <button 
                className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Layout className="w-4 h-4" />
                Publish
              </button>
            </div>
          </div>
        </div>

        {previewMode ? (
          // Preview mode
          <div className="bg-white rounded-xl shadow-md p-6">
            <PortfolioWebsitePreview formData={formData} />
          </div>
        ) : (
          // Edit mode
          <div className="flex flex-col lg:flex-row gap-4 ">
            {/* Sidebar Steps */}
            <div className="w-full lg:w-64 bg-white rounded-xl shadow-md p-6 h-fit order-2 lg:order-1">
              <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
                {steps.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setStep(s.id)}
                      className={`flex-shrink-0 w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        step === s.id 
                          ? 'bg-blue-50 text-blue-700 border border-blue-100' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className={`p-2 rounded-full w-8 h-8 flex items-center justify-center ${
                        step === s.id ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col items-start flex-grow">
                        <span className="font-medium text-sm">{s.title}</span>
                        <span className="text-xs text-gray-500 hidden lg:inline">{s.description}</span>
                      </div>
                      <div className="ml-auto flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        {step > s.id ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : step === s.id ? (
                          <Circle className="w-5 h-5 text-blue-500 fill-current opacity-20" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Completion Status</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full transition-all duration-300" 
                      style={{ width: `${(step / steps.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Step {step} of {steps.length} • {Math.round((step / steps.length) * 100)}% complete
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
                {renderStepContent()}

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex items-center gap-2 px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </button>
                  )}
                  {step < steps.length ? (
                    <button
                      onClick={() => setStep(step + 1)}
                      className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={togglePreview}
                      className="flex items-center gap-2 px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors ml-auto"
                    >
                      Preview Portfolio
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

// Personal Info Form Component (new component since it's not in your separate files)
const PersonalInfoForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Profile</h2>
      <p className="text-gray-600 mb-8">Start with some basic information about yourself</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Full Stack Developer"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="New York, NY"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">About Me</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write a short bio about yourself..."
          ></textarea>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4">Social & Professional Links</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://github.com/johndoe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Personal Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://johndoe.com"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBuilder;