import React, { useState } from 'react';
import PortfolioWebsitePreview from './PortfolioWebsitePreview';

const PortfolioForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    school10: '',
    percentage10: '',
    percentile10: '',
    passingYear10: '',
    achievements10: '',
    certificates10: '',
    school12: '',
    percentage12: '',
    percentile12: '',
    passingYear12: '',
    achievements12: '',
    certificates12: '',
    collegeName: '',
    collegeDegree: '',
    cgpa: '',
    skills: '',
    softSkills: '',
    achievementsCollege: '',
    certificatesCollege: '',
    projectName: '',
    projectDescription: '',
    experience: '',
    companyName: '',
    companyDescription: ''
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

  const InputField = ({ label, name, type = "text", placeholder }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 min-h-[100px]"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8  mt-10 md:mt-40">
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

            {/* Form Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {step === 1 && "10th Standard Details"}
                {step === 2 && "12th Standard Details"}
                {step === 3 && "College Details"}
                {step === 4 && "Projects & Experience"}
              </h2>
            </div>

            {/* Form Steps */}
            <div className="space-y-6">
              {step === 1 && (
                <div>
                  <InputField label="School Name" name="school10" placeholder="Enter your school name" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Percentage" name="percentage10" placeholder="Enter percentage" />
                    <InputField label="Percentile" name="percentile10" placeholder="Enter percentile" />
                  </div>
                  <InputField label="Year of Passing" name="passingYear10" placeholder="Enter passing year" />
                  <InputField label="Achievements" name="achievements10" type="textarea" placeholder="List your achievements" />
                  <InputField label="Certificates" name="certificates10" type="textarea" placeholder="List your certificates" />
                </div>
              )}

              {step === 2 && (
                <div>
                  <InputField label="School Name" name="school12" placeholder="Enter your school name" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="Percentage" name="percentage12" placeholder="Enter percentage" />
                    <InputField label="Percentile" name="percentile12" placeholder="Enter percentile" />
                  </div>
                  <InputField label="Year of Passing" name="passingYear12" placeholder="Enter passing year" />
                  <InputField label="Achievements" name="achievements12" type="textarea" placeholder="List your achievements" />
                  <InputField label="Certificates" name="certificates12" type="textarea" placeholder="List your certificates" />
                </div>
              )}

              {step === 3 && (
                <div>
                  <InputField label="College Name" name="collegeName" placeholder="Enter your college name" />
                  <InputField label="Degree" name="collegeDegree" placeholder="Enter your degree" />
                  <InputField label="CGPA" name="cgpa" placeholder="Enter your CGPA" />
                  <InputField label="Technical Skills" name="skills" type="textarea" placeholder="List your technical skills" />
                  <InputField label="Soft Skills" name="softSkills" type="textarea" placeholder="List your soft skills" />
                  <InputField label="Achievements" name="achievementsCollege" type="textarea" placeholder="List your achievements" />
                  <InputField label="Certificates" name="certificatesCollege" type="textarea" placeholder="List your certificates" />
                </div>
              )}

              {step === 4 && (
                <div>
                  <InputField label="Project Name" name="projectName" placeholder="Enter project name" />
                  <InputField label="Project Description" name="projectDescription" type="textarea" placeholder="Describe your project" />
                  <InputField label="Experience (Years)" name="experience" placeholder="Enter years of experience" />
                  <InputField label="Company Name" name="companyName" placeholder="Enter company name" />
                  <InputField label="Company Description" name="companyDescription" type="textarea" placeholder="Describe your role and responsibilities" />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4 mt-8">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200"
                  >
                    Previous
                  </button>
                )}
                {step < 4 ? (
                  <button
                    onClick={nextStep}
                    className="flex-1 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="flex-1 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
                  >
                    Submit Portfolio
                  </button>
                )}
              </div>
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