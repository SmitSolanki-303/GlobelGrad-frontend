import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaGlobe, FaLock, FaCheckCircle, FaCloudUploadAlt } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [selectedStep, setSelectedStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };

  const steps = [
    { id: 1, icon: <FaUser />, title: "Personal Details", description: "Basic information to get started" },
    { id: 2, icon: <FaPhone />, title: "Contact Info", description: "How we can reach you" },
    { id: 3, icon: <FaCalendarAlt />, title: "Demographics", description: "Tell us about yourself" },
    { id: 4, icon: <FaGlobe />, title: "Location", description: "Where are you based" },
    { id: 5, icon: <FaLock />, title: "Security", description: "Keep your account safe" },
    { id: 6, icon: <FaCheckCircle />, title: "Completion", description: "Final review and submit" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8  ">
        {/* Header Section */}
        <div className="text-center mb-12 mt-12 md:mt-40 ">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 ">Create Your Portfolio</h1>
          <p className="text-lg text-gray-600">Join thousands of professionals showcasing their work</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Left Side - Steps */}
          <div className="lg:w-1/3 ">
            <div className="bg-white rounded-2xl shadow-xl p-6 ">
              <div className="space-y-6">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer
                      ${selectedStep === step.id ? 'bg-pink-50 border-l-4 border-pink-500' : 'hover:bg-gray-50'}`}
                    onClick={() => setSelectedStep(step.id)}
                  >
                    <div className={`p-3 rounded-full ${selectedStep === step.id ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${selectedStep === step.id ? 'text-pink-500' : 'text-gray-700'}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl p-8 ">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-2 bg-gray-100 rounded-full">
                  <div 
                    className="h-2 bg-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${(selectedStep / steps.length) * 100}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-sm text-gray-500 text-right">
                  Step {selectedStep} of {steps.length}
                </div>
              </div>

              {/* Profile Upload Section */}
              <div className="mb-8 text-center">
                <div className="relative inline-block">
                  {profilePic ? (
                    <img 
                      src={profilePic} 
                      alt="Profile" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-pink-200"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-pink-50 flex items-center justify-center border-4 border-pink-200">
                      <FaCloudUploadAlt className="w-12 h-12 text-pink-300" />
                    </div>
                  )}
                  <label className="absolute bottom-0 right-0 bg-pink-500 text-white p-2 rounded-full cursor-pointer hover:bg-pink-600 transition-colors">
                    <FaCloudUploadAlt />
                    <input type="file" className="hidden" onChange={handleProfileUpload} accept="image/*" />
                  </label>
                </div>
              </div>

              {/* Form Fields */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    onClick={() => selectedStep > 1 && setSelectedStep(selectedStep - 1)}
                  >
                    Back
                  </button>
                  <Link to="/privacy-policy">
                    <button
                      type="button"
                      className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      onClick={() => selectedStep < steps.length && setSelectedStep(selectedStep + 1)}
                    >
                      {selectedStep === steps.length ? 'Complete' : 'Next'}
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;