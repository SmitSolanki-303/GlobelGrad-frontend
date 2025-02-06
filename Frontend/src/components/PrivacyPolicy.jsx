import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserSecret, FaLock, FaCookie, FaExclamationCircle, FaCheck } from 'react-icons/fa';
import { FaShieldAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  const [isRead, setIsRead] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const policies = [
    {
      id: 1,
      icon: <FaUserSecret className="w-6 h-6" />,
      title: "Data Collection",
      content: "We collect personal information that you voluntarily provide when creating your portfolio. This includes your name, email, education details, and professional information. We ensure this data is stored securely and used only for portfolio generation purposes."
    },
    {
      id: 2,
      icon: <FaLock className="w-6 h-6" />,
      title: "Data Security",
      content: "Your data is protected using industry-standard encryption protocols. We implement various security measures to maintain the safety of your personal information and prevent unauthorized access or disclosure."
    },
    {
      id: 3,
      icon: <FaCookie className="w-6 h-6" />,
      title: "Cookies Usage",
      content: "We use cookies to enhance your experience on our platform. These cookies help us remember your preferences and provide personalized portfolio features. You can control cookie settings through your browser preferences."
    },
    {
      id: 4,
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Your Rights",
      content: "You have the right to access, modify, or delete your personal information at any time. You can also request a copy of your data or withdraw consent for data processing. We respect your privacy rights and will respond to your requests promptly."
    }
  ];

  const handleSectionClick = (id) => {
    setActiveSection((prev) => (prev === id ? null : id));

  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
            <FaShieldAlt className="w-12 h-12 text-blue-500" />

          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Your privacy is important to us. Please review our policies carefully.</p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-4 mb-12">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300"
              onClick={() => handleSectionClick(policy.id)}
            >
              <div className={`p-6 flex items-center gap-4 ${activeSection === policy.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                <div className={`p-3 rounded-full ${activeSection === policy.id ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'}`}>
                  {policy.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{policy.title}</h3>
                </div>
                <div className={`transform transition-transform duration-300 ${activeSection === policy.id ? 'rotate-180' : ''}`}>
                  ▼
                </div>
              </div>
              {activeSection === policy.id && (
                <div className="px-6 pb-6 text-gray-600 animate-fadeIn">
                  {policy.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Acknowledgment Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <FaExclamationCircle className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-gray-600">
              By clicking "I Understand", you acknowledge that you have read and agreed to our privacy policy terms.
            </p>
          </div>
          <label className="flex items-center gap-2 cursor-pointer mb-6">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500 rounded"
              checked={isRead}
              onChange={() => setIsRead(!isRead)}
            />
            <span className="text-gray-700">I have read and understand the privacy policy</span>
          </label>
          <Link to="/protfolio-form">
            <button
              className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 
                ${isRead 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
              disabled={!isRead}
            >
              <FaCheck className="w-5 h-5" />
              I Understand and Agree
            </button>
          </Link>
        </div>

        {/* Additional Info */}
        <p className="text-center text-gray-500 text-sm">
          Last updated: February 2025 • <a href="#" className="text-blue-500 hover:underline">Print Policy</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;