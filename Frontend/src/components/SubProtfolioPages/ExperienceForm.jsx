
// // ExperienceForm.jsx
// import React, { useState } from 'react';
// import { PlusCircle, Trash2, Building2, Calendar, Briefcase } from 'lucide-react';

// const ExperienceForm = () => {
//   // Internal state for testing
//   const [formData, setFormData] = useState({
//     experiences: [],
//   });

//   const handleChange = (e, index, field) => {
//     const updatedExperiences = [...formData.experiences];
//     updatedExperiences[index][field] = e.target.value;
//     setFormData(prev => ({
//       ...prev,
//       experiences: updatedExperiences
//     }));
//   };

//   const addExperience = () => {
//     console.log('addExperience called');
//     console.log('Current experiences:', formData.experiences);
//     setFormData(prev => {
//       const newExperiences = [
//         ...(prev.experiences || []),
//         {
//           type: '',
//           company: '',
//           position: '',
//           startDate: '',
//           endDate: '',
//           description: '',
//           responsibilities: '',
//           achievements: ''
//         }
//       ];
//       console.log('New experiences:', newExperiences);
//       return {
//         ...prev,
//         experiences: newExperiences
//       };
//     });
//   };

//   const removeExperience = (index) => {
//     setFormData(prev => ({
//       ...prev,
//       experiences: prev.experiences.filter((_, i) => i !== index)
//     }));
//   };

//   return (
//     <div>
//       <h2 className="text-3xl font-bold text-black mb-8">Professional Experience</h2>
      
//       <div className="space-y-6">
//         {formData.experiences.map((exp, index) => (
//           <div key={index} className="relative bg-pink-50 p-6 rounded-xl shadow-sm border border-pink-100">
//             <div className="absolute -left-3 -top-3 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
//               {index + 1}
//             </div>
            
//             <button
//               onClick={() => removeExperience(index)}
//               className="absolute top-4 right-4 text-pink-400 hover:text-pink-600 transition-colors"
//             >
//               <Trash2 className="w-5 h-5" />
//             </button>

//             <div className="bg-white p-6 rounded-lg shadow-sm border border-pink-200">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                 <div>
//                   <label className="block text-sm font-medium text-pink-700 mb-1">
//                     Experience Type
//                   </label>
//                   <div className="relative">
//                     <select
//                       value={exp.type}
//                       onChange={(e) => handleChange(e, index, 'type')}
//                       className="w-full p-3 pr-10 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 appearance-none bg-white"
//                     >
//                       <option value="">Select Type</option>
//                       <option value="internship">Internship</option>
//                       <option value="fulltime">Full-time Job</option>
//                       <option value="parttime">Part-time Job</option>
//                       <option value="freelance">Freelance</option>
//                       <option value="contract">Contract</option>
//                     </select>
//                     <Briefcase className="w-5 h-5 absolute right-3 top-3 text-pink-400 pointer-events-none" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-pink-700 mb-1">
//                     Company Name
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value={exp.company}
//                       onChange={(e) => handleChange(e, index, 'company')}
//                       placeholder="Enter company name"
//                       className="w-full p-3 pl-10 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
//                     />
//                     <Building2 className="w-5 h-5 absolute left-3 top-3 text-pink-400" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-pink-700 mb-1">
//                     Position/Role
//                   </label>
//                   <input
//                     type="text"
//                     value={exp.position}
//                     onChange={(e) => handleChange(e, index, 'position')}
//                     placeholder="Enter your position"
//                     className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-pink-700 mb-1">
//                       Start Date
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="date"
//                         value={exp.startDate}
//                         onChange={(e) => handleChange(e, index, 'startDate')}
//                         className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
//                       />
//                       <Calendar className="w-5 h-5 absolute right-3 top-3 text-pink-400 pointer-events-none" />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-pink-700 mb-1">
//                       End Date
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="date"
//                         value={exp.endDate}
//                         onChange={(e) => handleChange(e, index, 'endDate')}
//                         className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
//                       />
//                       <Calendar className="w-5 h-5 absolute right-3 top-3 text-pink-400 pointer-events-none" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-pink-700 mb-1">
//                     Job Description
//                   </label>
//                   <textarea
//                     value={exp.description}
//                     onChange={(e) => handleChange(e, index, 'description')}
//                     placeholder="Provide a brief description of your role"
//                     className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 min-h-[100px]"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-pink-700 mb-1">
//                     Key Responsibilities
//                   </label>
//                   <textarea
//                     value={exp.responsibilities}
//                     onChange={(e) => handleChange(e, index, 'responsibilities')}
//                     placeholder="List your key responsibilities"
//                     className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 min-h-[100px]"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-pink-700 mb-1">
//                     Key Achievements
//                   </label>
//                   <textarea
//                     value={exp.achievements}
//                     onChange={(e) => handleChange(e, index, 'achievements')}
//                     placeholder="List your notable achievements"
//                     className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 min-h-[100px]"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         <button
//           onClick={addExperience}
//           className="w-full py-3 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 font-medium"
//         >
//           <PlusCircle className="w-5 h-5" />
//           Add New Experience
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ExperienceForm;

// ExperienceForm.jsx
import React, { useState, useEffect } from 'react';
import { PlusCircle, Trash2, Building2, Calendar, Briefcase } from 'lucide-react';
import { db } from '../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';

const ExperienceForm = ({ formData = {}, setFormData, userId }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('ExperienceForm received formData:', formData);
    console.log('ExperienceForm received userId:', userId);
  }, [formData, userId]);

  const handleChange = (e, index, field) => {
    const updatedExperiences = [...(formData.experiences || [])];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: e.target.value };
    setFormData({ ...formData, experiences: updatedExperiences });
    console.log(`Updated experience at index ${index}:`, updatedExperiences);
  };

  const addExperience = () => {
    const newExperience = {
      type: '',
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      responsibilities: '',
      achievements: '',
    };
    const updatedExperiences = [...(formData.experiences || []), newExperience];
    setFormData({ ...formData, experiences: updatedExperiences });
    console.log('Added new experience:', updatedExperiences);
  };

  const removeExperience = (index) => {
    const updatedExperiences = (formData.experiences || []).filter((_, i) => i !== index);
    setFormData({ ...formData, experiences: updatedExperiences });
    console.log(`Removed experience at index ${index}:`, updatedExperiences);
  };

  const handleSubmit = async () => {
    try {
      if (!userId) {
        throw new Error('User ID is missing. Please register or log in first.');
      }

      const experiencesData = {
        experiences: formData.experiences || [],
        userId,
        updatedAt: new Date().toISOString(),
      };

      await setDoc(doc(db, 'experiences', userId), experiencesData, { merge: true });
      alert('Experiences saved successfully!');
    } catch (err) {
      console.error('Error saving experiences:', err.message);
      setError(`Failed to save experiences: ${err.message}`);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-black mb-8">Professional Experience</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {(formData.experiences || []).map((exp, index) => (
          <div key={index} className="relative bg-pink-50 p-6 rounded-xl shadow-sm border border-pink-100">
            <div className="absolute -left-3 -top-3 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>

            <button
              onClick={() => removeExperience(index)}
              className="absolute top-4 right-4 text-pink-400 hover:text-pink-600 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-pink-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-pink-700 mb-1">
                    Experience Type
                  </label>
                  <div className="relative">
                    <select
                      value={exp.type || ''}
                      onChange={(e) => handleChange(e, index, 'type')}
                      className="w-full p-3 pr-10 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 appearance-none bg-white"
                    >
                      <option value="">Select Type</option>
                      <option value="internship">Internship</option>
                      <option value="fulltime">Full-time Job</option>
                      <option value="parttime">Part-time Job</option>
                      <option value="freelance">Freelance</option>
                      <option value="contract">Contract</option>
                    </select>
                    <Briefcase className="w-5 h-5 absolute right-3 top-3 text-pink-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-pink-700 mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={exp.company || ''}
                      onChange={(e) => handleChange(e, index, 'company')}
                      placeholder="Enter company name"
                      className="w-full p-3 pl-10 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                    />
                    <Building2 className="w-5 h-5 absolute left-3 top-3 text-pink-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-pink-700 mb-1">
                    Position/Role
                  </label>
                  <input
                    type="text"
                    value={exp.position || ''}
                    onChange={(e) => handleChange(e, index, 'position')}
                    placeholder="Enter your position"
                    className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-1">
                      Start Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={exp.startDate || ''}
                        onChange={(e) => handleChange(e, index, 'startDate')}
                        className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                      />
                      <Calendar className="w-5 h-5 absolute right-3 top-3 text-pink-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-pink-700 mb-1">
                      End Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={exp.endDate || ''}
                        onChange={(e) => handleChange(e, index, 'endDate')}
                        className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                      />
                      <Calendar className="w-5 h-5 absolute right-3 top-3 text-pink-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-pink-700 mb-1">
                    Job Description
                  </label>
                  <textarea
                    value={exp.description || ''}
                    onChange={(e) => handleChange(e, index, 'description')}
                    placeholder="Provide a brief description of your role"
                    className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-pink-700 mb-1">
                    Key Responsibilities
                  </label>
                  <textarea
                    value={exp.responsibilities || ''}
                    onChange={(e) => handleChange(e, index, 'responsibilities')}
                    placeholder="List your key responsibilities"
                    className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-pink-700 mb-1">
                    Key Achievements
                  </label>
                  <textarea
                    value={exp.achievements || ''}
                    onChange={(e) => handleChange(e, index, 'achievements')}
                    placeholder="List your notable achievements"
                    className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 min-h-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addExperience}
          className="w-full py-3 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 font-medium"
        >
          <PlusCircle className="w-5 h-5" />
          Add New Experience
        </button>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Save Experiences
      </button>
    </div>
  );
};

export default ExperienceForm;