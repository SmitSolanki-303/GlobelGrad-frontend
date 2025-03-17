//PersonalInfoForm.jsx;

import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';

const PersonalInfoForm = ({ formData, setFormData, userId }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(formData.resumeUrl || '');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      const url = URL.createObjectURL(file);
      setResumeUrl(url);
      setFormData({ ...formData, resumeUrl: url });
      setError(null);
    } else {
      setError('Please upload a valid PDF file.');
    }
  };

  const handleSubmit = async () => {
    try {
      // Log the userId and data for debugging
      console.log('Saving personal info for userId:', userId);
      console.log('Form data:', formData);  

      if (!userId) {
        throw new Error('User ID is missing. Please register or log in first.');
      }

      // Validate that userId is a non-empty string
      if (typeof userId !== 'string' || userId.trim() === '') {
        throw new Error('Invalid userId format. It must be a non-empty string.');
      }

      // Clean up formData to remove undefined/null values
      const personalInfoData = {
        nationality: formData.nationality || '',
        languagesSpoken: formData.languagesSpoken || '',
        hobbies: formData.hobbies || '',
        resumeUrl: formData.resumeUrl || '', // Temporary URL; consider Firebase Storage later
        userId,
        updatedAt: new Date().toISOString(),
      };

      // Log the data being sent to Firestore
      console.log('Data to save:', personalInfoData);

      // Save to Firestore
      await setDoc(doc(db, 'personalInfo', userId), personalInfoData, { merge: true });
      console.log('Personal info saved successfully for userId:', userId);
      alert('Personal info saved successfully!');
    } catch (err) {
      console.error('Error saving personal info:', err.message, err.code);
      setError(`Failed to save personal info: ${err.message}`);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-black mb-6">Additional Personal Details</h2>
      <p className="text-gray-600 mb-8">Provide more details to enhance your portfolio</p>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., American"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Languages Spoken</label>
            <input
              type="text"
              name="languagesSpoken"
              value={formData.languagesSpoken || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., English, Spanish"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Hobbies</label>
            <textarea
              name="hobbies"
              value={formData.hobbies || ''}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Reading, Hiking, Coding"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume (PDF)</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleResumeUpload}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Uploaded Resume
              </a>
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Personal Info
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;