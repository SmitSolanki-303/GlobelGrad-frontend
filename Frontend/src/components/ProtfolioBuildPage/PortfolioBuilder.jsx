
// //PortfolioBuilder.jsx

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { CheckCircle, Circle, ArrowRight, ArrowLeft, Save, Eye, Book, Trophy, Code, User, Briefcase, Layout } from 'lucide-react';
// import PortfolioWebsitePreview from '../TempletPage/PortfolioWebsitePreview';
// import SkillsForm from "../SubProtfolioPages/SkillsForm";
// import AchievementsForm from "../SubProtfolioPages/AchievementsForm";
// import EducationForm from "../SubProtfolioPages/EducationForm";
// import ExperienceForm from "../SubProtfolioPages/ExperienceForm";
// import PersonalInfoForm from "../SubProtfolioPages/PersonalInfoForm";

// const PortfolioBuilder = () => {
//   const [step, setStep] = useState(1);
//   const [previewMode, setPreviewMode] = useState(false);
//   const [formData, setFormData] = useState({});

//   const location = useLocation();
//   const userId = location.state?.userId; // UID from Register.jsx

//   const steps = [
//     { id: 1, title: 'Profile', icon: User, description: 'Additional personal details' },
//     { id: 2, title: 'Education', icon: Book, description: 'Your academic background' },
//     { id: 3, title: 'Skills', icon: Code, description: 'Technical & soft skills' },
//     { id: 4, title: 'Achievements', icon: Trophy, description: 'Projects & certifications' },
//     { id: 5, title: 'Experience', icon: Briefcase, description: 'Work history & roles' },
//   ];

//   const updateFormData = (section, data) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [section]: data,
//     }));
//   };

//   const renderStepContent = () => {
//     switch (step) {
//       case 1:
//         return (
//           <PersonalInfoForm
//             formData={formData.profile || {}}
//             setFormData={(data) => updateFormData('profile', data)}
//             userId={userId}
//           />
//         );
//       case 2:
//         return (
//           <EducationForm
//             formData={formData.education || {}}
//             setFormData={(data) => updateFormData('education', data)}
//             userId={userId}
//           />
//         );
//       case 3:
//         return (
//           <SkillsForm
//             formData={formData.skills || {}}
//             setFormData={(data) => updateFormData('skills', data)}
//             userId={userId}
//           />
//         );
//       case 4:
//         return (
//           <AchievementsForm
//             formData={formData.achievements || {}}
//             setFormData={(data) => updateFormData('achievements', data)}
//             userId={userId}
//           />
//         );
//       case 5:
//         return (
//           <ExperienceForm
//             formData={formData.experience || []}
//             setFormData={(data) => updateFormData('experience', data)}
//             userId={userId}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   const togglePreview = () => {
//     setPreviewMode(!previewMode);
//   };

//   const handleSave = () => {
//     localStorage.setItem('portfolioData', JSON.stringify(formData));
//     alert("Portfolio data saved locally! Please save each section to Firebase.");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-8xl mx-auto px-4 py-8 mt-10 md:mt-40">
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Portfolio Builder</h1>
//               <p className="text-gray-600">Create a standout portfolio in minutes</p>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               <button
//                 onClick={togglePreview}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
//                   previewMode
//                     ? "bg-blue-50 text-blue-700 border-blue-200"
//                     : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
//                 }`}
//               >
//                 <Eye className="w-4 h-4" />
//                 {previewMode ? "Edit Mode" : "Preview"}
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 <Save className="w-4 h-4" />
//                 Save Portfolio
//               </button>
//               <button
//                 className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
//               >
//                 <Layout className="w-4 h-4" />
//                 Publish
//               </button>
//             </div>
//           </div>
//         </div>

//         {previewMode ? (
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <PortfolioWebsitePreview formData={formData} />
//           </div>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-4">
//             <div className="w-full lg:w-64 bg-white rounded-xl shadow-md p-6 h-fit order-2 lg:order-1">
//               <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
//                 {steps.map((s) => {
//                   const Icon = s.icon;
//                   return (
//                     <button
//                       key={s.id}
//                       onClick={() => setStep(s.id)}
//                       className={`flex-shrink-0 w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
//                         step === s.id
//                           ? 'bg-blue-50 text-blue-700 border border-blue-100'
//                           : 'hover:bg-gray-50 text-gray-700'
//                       }`}
//                     >
//                       <div
//                         className={`p-2 rounded-full w-8 h-8 flex items-center justify-center ${
//                           step === s.id ? 'bg-blue-100' : 'bg-gray-100'
//                         }`}
//                       >
//                         <Icon className="w-4 h-4" />
//                       </div>
//                       <div className="flex flex-col items-start flex-grow">
//                         <span className="font-medium text-sm">{s.title}</span>
//                         <span className="text-xs text-gray-500 hidden lg:inline">{s.description}</span>
//                       </div>
//                       <div className="ml-auto flex-shrink-0 w-6 h-6 flex items-center justify-center">
//                         {step > s.id ? (
//                           <CheckCircle className="w-5 h-5 text-green-500" />
//                         ) : step === s.id ? (
//                           <Circle className="w-5 h-5 text-blue-500 fill-current opacity-20" />
//                         ) : (
//                           <Circle className="w-5 h-5 text-gray-300" />
//                         )}
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//               <div className="mt-8 pt-6 border-t border-gray-100">
//                 <div className="bg-gray-50 rounded-lg p-4">
//                   <h3 className="text-sm font-medium text-gray-700 mb-2">Completion Status</h3>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div
//                       className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
//                       style={{ width: `${(step / steps.length) * 100}%` }}
//                     ></div>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">
//                     Step {step} of {steps.length} • {Math.round((step / steps.length) * 100)}% complete
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex-1 order-1 lg:order-2">
//               <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
//                 {renderStepContent()}
//                 <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
//                   {step > 1 && (
//                     <button
//                       onClick={() => setStep(step - 1)}
//                       className="flex items-center gap-2 px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//                     >
//                       <ArrowLeft className="w-4 h-4" />
//                       Previous
//                     </button>
//                   )}
//                   {step < steps.length ? (
//                     <button
//                       onClick={() => setStep(step + 1)}
//                       className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
//                     >
//                       Next
//                       <ArrowRight className="w-4 h-4" />
//                     </button>
//                   ) : (
//                     <button
//                       onClick={togglePreview}
//                       className="flex items-center gap-2 px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors ml-auto"
//                     >
//                       Preview Portfolio
//                       <Eye className="w-4 h-4" />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PortfolioBuilder;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { auth } from '../../firebase/config'; // Import auth from your config
// import { onAuthStateChanged } from 'firebase/auth';
// import { CheckCircle, Circle, ArrowRight, ArrowLeft, Save, Eye, Book, Trophy, Code, User, Briefcase, Layout } from 'lucide-react';
// import PortfolioWebsitePreview from '../TempletPage/Templete';
// import SkillsForm from "../SubProtfolioPages/SkillsForm";
// import AchievementsForm from "../SubProtfolioPages/AchievementsForm";
// import EducationForm from "../SubProtfolioPages/EducationForm";
// import ExperienceForm from "../SubProtfolioPages/ExperienceForm";
// import PersonalInfoForm from "../SubProtfolioPages/PersonalInfoForm";

// const PortfolioBuilder = () => {
//   const [step, setStep] = useState(1);
//   const [previewMode, setPreviewMode] = useState(false);
//   const [formData, setFormData] = useState({});
//   const [userId, setUserId] = useState(null); // State to hold userId

//   const location = useLocation();

//   // Get userId from Firebase Auth when the user logs in
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserId(user.uid); // Set userId from Firebase Auth
//         console.log('User ID from Firebase Auth:', user.uid); // Debug log
//       } else {
//         setUserId(null); // User is logged out
//         console.log('No user logged in');
//       }
//     });
//     return () => unsubscribe(); // Cleanup subscription
//   }, []);

//   const steps = [
//     { id: 1, title: 'Profile', icon: User, description: 'Additional personal details' },
//     { id: 2, title: 'Education', icon: Book, description: 'Your academic background' },
//     { id: 3, title: 'Skills', icon: Code, description: 'Technical & soft skills' },
//     { id: 4, title: 'Achievements', icon: Trophy, description: 'Projects & certifications' },
//     { id: 5, title: 'Experience', icon: Briefcase, description: 'Work history & roles' },
//   ];


//   const updateFormData = (section, data) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [section]: data,
//     }));
//   };

//   const renderStepContent = () => {
//     switch (step) {
//       case 1:
//         return (
//           <PersonalInfoForm
//             formData={formData.profile || {}}
//             setFormData={(data) => updateFormData('profile', data)}
//             userId={userId}
//           />
//         );
//       case 2:
//         return (
//           <EducationForm
//             formData={formData.education || {}}
//             setFormData={(data) => updateFormData('education', data)}
//             userId={userId}
//           />
//         );
//       case 3:
//         return (
//           <SkillsForm
//             formData={formData.skills || {}}
//             setFormData={(data) => updateFormData('skills', data)}
//             userId={userId}
//           />
//         );
//       case 4:
//         return (
//           <AchievementsForm
//             formData={formData.achievements || {}}
//             setFormData={(data) => updateFormData('achievements', data)}
//             userId={userId}
//           />
//         );
//       case 5:
//         return (
//           <ExperienceForm
//             formData={formData.experience || []}
//             setFormData={(data) => updateFormData('experience', data)}
//             userId={userId}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   const togglePreview = () => {
//     setPreviewMode(!previewMode);
//   };

//   // const handleSave = () => {
//   //   localStorage.setItem('portfolioData', JSON.stringify(formData));
//   //   alert("Portfolio data saved locally! Please save each section to Firebase.");
//   // };

//   const handleSave = async () => {
//     if (!userId) {
//       alert('Please log in to save your portfolio.');
//       return;
//     }

//     try {
//       const collections = [
//         { name: 'personalInfo', data: formData.personalInfo || {} },
//         { name: 'education', data: formData.education || {} },
//         { name: 'skills', data: formData.skills || {} },
//         { name: 'achievements', data: formData.achievements || {} },
//         { name: 'experiences', data: formData.experiences || {} },
//       ];

//       for (const { name, data } of collections) {
//         await setDoc(doc(db, name, userId), { ...data, userId, updatedAt: new Date().toISOString() }, { merge: true });
//       }
//       localStorage.setItem('portfolioData', JSON.stringify(formData));
//       alert('Portfolio saved successfully to Firebase!');
//     } catch (error) {
//       console.error('Error saving portfolio:', error);
//       alert('Failed to save portfolio: ' + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-8xl mx-auto px-4 py-8 mt-10 md:mt-40">
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Portfolio Builder</h1>
//               <p className="text-gray-600">Create a standout portfolio in minutes</p>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               <button
//                 onClick={togglePreview}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
//                   previewMode
//                     ? "bg-blue-50 text-blue-700 border-blue-200"
//                     : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
//                 }`}
//               >
//                 <Eye className="w-4 h-4" />
//                 {previewMode ? "Edit Mode" : "Preview"}
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 <Save className="w-4 h-4" />
//                 Save Portfolio
//               </button>
//               <button
//                 className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
//               >
//                 <Layout className="w-4 h-4" />
//                 Publish
//               </button>
//             </div>
//           </div>
//         </div>

//         {previewMode ? (
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <PortfolioWebsitePreview formData={formData} />
//           </div>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-4">
//             <div className="w-full lg:w-64 bg-white rounded-xl shadow-md p-6 h-fit order-2 lg:order-1">
//               <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
//                 {steps.map((s) => {
//                   const Icon = s.icon;
//                   return (
//                     <button
//                       key={s.id}
//                       onClick={() => setStep(s.id)}
//                       className={`flex-shrink-0 w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
//                         step === s.id
//                           ? 'bg-blue-50 text-blue-700 border border-blue-100'
//                           : 'hover:bg-gray-50 text-gray-700'
//                       }`}
//                     >
//                       <div
//                         className={`p-2 rounded-full w-8 h-8 flex items-center justify-center ${
//                           step === s.id ? 'bg-blue-100' : 'bg-gray-100'
//                         }`}
//                       >
//                         <Icon className="w-4 h-4" />
//                       </div>
//                       <div className="flex flex-col items-start flex-grow">
//                         <span className="font-medium text-sm">{s.title}</span>
//                         <span className="text-xs text-gray-500 hidden lg:inline">{s.description}</span>
//                       </div>
//                       <div className="ml-auto flex-shrink-0 w-6 h-6 flex items-center justify-center">
//                         {step > s.id ? (
//                           <CheckCircle className="w-5 h-5 text-green-500" />
//                         ) : step === s.id ? (
//                           <Circle className="w-5 h-5 text-blue-500 fill-current opacity-20" />
//                         ) : (
//                           <Circle className="w-5 h-5 text-gray-300" />
//                         )}
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//               <div className="mt-8 pt-6 border-t border-gray-100">
//                 <div className="bg-gray-50 rounded-lg p-4">
//                   <h3 className="text-sm font-medium text-gray-700 mb-2">Completion Status</h3>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div
//                       className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
//                       style={{ width: `${(step / steps.length) * 100}%` }}
//                     ></div>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">
//                     Step {step} of {steps.length} • {Math.round((step / steps.length) * 100)}% complete
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex-1 order-1 lg:order-2">
//               <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
//                 {renderStepContent()}
//                 <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
//                   {step > 1 && (
//                     <button
//                       onClick={() => setStep(step - 1)}
//                       className="flex items-center gap-2 px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//                     >
//                       <ArrowLeft className="w-4 h-4" />
//                       Previous
//                     </button>
//                   )}
//                   {step < steps.length ? (
//                     <button
//                       onClick={() => setStep(step + 1)}
//                       className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
//                     >
//                       Next
//                       <ArrowRight className="w-4 h-4" />
//                     </button>
//                   ) : (
//                     <button
//                       onClick={togglePreview}
//                       className="flex items-center gap-2 px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors ml-auto"
//                     >
//                       Preview Portfolio
//                       <Eye className="w-4 h-4" />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PortfolioBuilder;


// PortfolioBuilder.jsx (partial update)
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { auth, db } from '../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { CheckCircle, Circle, ArrowRight, ArrowLeft, Save, Eye, Book, Trophy, Code, User, Briefcase, Layout } from 'lucide-react';
import PortfolioWebsitePreview from '../TempletPage/Templete'; // Updated import
import SkillsForm from "../SubProtfolioPages/SkillsForm";
import AchievementsForm from "../SubProtfolioPages/AchievementsForm";
import EducationForm from "../SubProtfolioPages/EducationForm";
import ExperienceForm from "../SubProtfolioPages/ExperienceForm";
import PersonalInfoForm from "../SubProtfolioPages/PersonalInfoForm";

const PortfolioBuilder = () => {
  const [step, setStep] = useState(1);
  const [previewMode, setPreviewMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const steps = [
    { id: 1, title: 'Profile', icon: User, description: 'Additional personal details' },
    { id: 2, title: 'Education', icon: Book, description: 'Your academic background' },
    { id: 3, title: 'Skills', icon: Code, description: 'Technical & soft skills' },
    { id: 4, title: 'Achievements', icon: Trophy, description: 'Projects & certifications' },
    { id: 5, title: 'Experience', icon: Briefcase, description: 'Work history & roles' },
  ];

  const updateFormData = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <PersonalInfoForm formData={formData.personalInfo || {}} setFormData={(data) => updateFormData('personalInfo', data)} userId={userId} />;
      case 2:
        return <EducationForm formData={formData.education || {}} setFormData={(data) => updateFormData('education', data)} userId={userId} />;
      case 3:
        return <SkillsForm formData={formData.skills || {}} setFormData={(data) => updateFormData('skills', data)} userId={userId} />;
      case 4:
        return <AchievementsForm formData={formData.achievements || {}} setFormData={(data) => updateFormData('achievements', data)} userId={userId} />;
      case 5:
        return <ExperienceForm formData={formData.experiences || {}} setFormData={(data) => updateFormData('experiences', data)} userId={userId} />;
      default:
        return null;
    }
  };

  const togglePreview = () => {
    setPreviewMode(!previewMode);
  };

  const handleSave = async () => {
    if (!userId) {
      alert('Please log in to save your portfolio.');
      return;
    }

    try {
      const collections = [
        { name: 'personalInfo', data: formData.personalInfo || {} },
        { name: 'education', data: formData.education || {} },
        { name: 'skills', data: formData.skills || {} },
        { name: 'achievements', data: formData.achievements || {} },
        { name: 'experiences', data: formData.experiences || {} },
      ];

      for (const { name, data } of collections) {
        await setDoc(doc(db, name, userId), { ...data, userId, updatedAt: new Date().toISOString() }, { merge: true });
      }
      localStorage.setItem('portfolioData', JSON.stringify(formData));
      alert('Portfolio saved successfully to Firebase!');
    } catch (error) {
      console.error('Error saving portfolio:', error);
      alert('Failed to save portfolio: ' + error.message);
    }
  };

  // Rest of the JSX remains the same, just update the preview section
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 py-8 mt-10 md:mt-40">
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
          <div className="bg-white rounded-xl shadow-md p-6">
            <PortfolioWebsitePreview formData={formData} />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-4">
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
                      <div
                        className={`p-2 rounded-full w-8 h-8 flex items-center justify-center ${
                          step === s.id ? 'bg-blue-100' : 'bg-gray-100'
                        }`}
                      >
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

            <div className="flex-1 order-1 lg:order-2">
              <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
                {renderStepContent()}
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

export default PortfolioBuilder;