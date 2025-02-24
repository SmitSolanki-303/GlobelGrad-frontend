import React, { useState } from 'react';
import PortfolioWebsitePreview from './PortfolioWebsitePreview';
import SkillsForm from "./SkillsForm";
import AchievementsForm from "./AchievementsForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

const PortfolioForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
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
    experiences: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row  mt-10 md:mt-40">
        <div className="w-full md:w-1/2 my-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm text-gray-500">
                Step {step} of 4
              </div>
            </div>

            {/* Form Header
            <h2 className="text-2xl font-bold text-gray-800">
              {step === 1 && "Education Details"}
              {step === 2 && "Skills"}
              {step === 3 && "Achievements"}
              {step === 4 && "Experience"}
            </h2> */}

            {/* Form Steps */}
            {step === 1 && <EducationForm formData={formData} setFormData={setFormData} />}
            {step === 2 && <SkillsForm formData={formData} setFormData={setFormData} />}
            {step === 3 && <AchievementsForm formData={formData} setFormData={setFormData} />}
            {step === 4 && <ExperienceForm formData={formData} setFormData={setFormData} />}

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 mt-8">
              {step > 1 && (
                <button onClick={prevStep} className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200">
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button onClick={nextStep} className="flex-1 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200">
                  Next
                </button>
              ) : (
                <button className="flex-1 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200">
                  Submit Portfolio
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 my-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <PortfolioWebsitePreview formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioForm;