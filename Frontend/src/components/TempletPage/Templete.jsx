// import React, { useState } from 'react';
// import { Github, Linkedin, Mail, Phone } from 'lucide-react';

// const PortfolioWebsitePreview = ({ formData = {} }) => {
//   const [activePage, setActivePage] = useState('home');
  
//   // Default values for all form fields
//   const defaultData = {
//     name: 'Your Name',
//     email: 'your.email@example.com',
//     phone: '+1234567890',
//     school10: '10th School Name',
//     percentage10: '95%',
//     school12: '12th School Name',
//     percentage12: '92%',
//     collegeName: 'College Name',
//     collegeDegree: 'Bachelor of Technology',
//     cgpa: '8.5',
//     skills: 'React, Node.js, Python',
//     softSkills: 'Leadership, Communication',
//     projectName: 'Project Title',
//     projectDescription: 'Project description will appear here',
//     companyName: 'Company Name',
//     companyDescription: 'Experience details will appear here'
//   };

//   // Merge default data with provided formData
//   const data = { ...defaultData, ...formData };

//   const NavBar = () => (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <span className="text-white text-xl font-bold">{data.name}</span>
//         <div className="space-x-4">
//           <button onClick={() => setActivePage('home')} className={`text-white ${activePage === 'home' ? 'font-bold' : ''}`}>Home</button>
//           <button onClick={() => setActivePage('education')} className={`text-white ${activePage === 'education' ? 'font-bold' : ''}`}>Education</button>
//           <button onClick={() => setActivePage('skills')} className={`text-white ${activePage === 'skills' ? 'font-bold' : ''}`}>Skills</button>
//           <button onClick={() => setActivePage('projects')} className={`text-white ${activePage === 'projects' ? 'font-bold' : ''}`}>Projects</button>
//         </div>
//       </div>
//     </nav>
//   );

//   const HomePage = () => (
//     <div className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
//       <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
//       <p className="text-xl mb-6">{data.collegeDegree}</p>
//       <div className="flex justify-center gap-4">
//         <Github className="w-6 h-6" />
//         <Linkedin className="w-6 h-6" />
//         <Mail className="w-6 h-6" />
//         <Phone className="w-6 h-6" />
//       </div>
//     </div>
//   );

//   const EducationPage = () => (
//     <div className="container mx-auto py-8 px-4">
//       <h2 className="text-3xl font-bold mb-8 text-center">Education Journey</h2>
//       <div className="space-y-8">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold">College Education</h3>
//           <p className="text-gray-600">{data.collegeName}</p>
//           <p>CGPA: {data.cgpa}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold">12th Standard</h3>
//           <p className="text-gray-600">{data.school12}</p>
//           <p>Percentage: {data.percentage12}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold">10th Standard</h3>
//           <p className="text-gray-600">{data.school10}</p>
//           <p>Percentage: {data.percentage10}</p>
//         </div>
//       </div>
//     </div>
//   );

//   const SkillsPage = () => (
//     <div className="container mx-auto py-8 px-4">
//       <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
//           <p className="text-gray-600">{data.skills}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
//           <p className="text-gray-600">{data.softSkills}</p>
//         </div>
//       </div>
//     </div>
//   );

//   const ProjectsPage = () => (
//     <div className="container mx-auto py-8 px-4">
//       <h2 className="text-3xl font-bold mb-8 text-center">Projects & Experience</h2>
//       <div className="space-y-8">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold">{data.projectName}</h3>
//           <p className="text-gray-600">{data.projectDescription}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold">{data.companyName}</h3>
//           <p className="text-gray-600">{data.companyDescription}</p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-gray-100 h-[80vh] overflow-y-auto shadow-lg rounded-lg">
//       <NavBar />
//       {activePage === 'home' && <HomePage />}
//       {activePage === 'education' && <EducationPage />}
//       {activePage === 'skills' && <SkillsPage />}
//       {activePage === 'projects' && <ProjectsPage />}
//     </div>
//   );
// };

// export default PortfolioWebsitePreview;

// // Templete.jsx (or PortfolioWebsitePreview.jsx)
// import React, { useState, useEffect } from 'react';
// import { db } from '../../firebase/config'; // Assuming this is your Firebase config path
// import { doc, getDoc } from 'firebase/firestore';
// import { motion } from 'framer-motion'; // For animations
// import { User, Book, Code, Trophy, Briefcase } from 'lucide-react';

// // Custom animations for sections
// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// const Templete = ({ formData = {} }) => {
//   const [portfolioData, setPortfolioData] = useState(formData);
//   const [userId, setUserId] = useState(null); // For deployed version, replace with auth logic

//   // Fetch data from Firebase (for deployed version)
//   useEffect(() => {
//     const fetchData = async () => {
//       // Replace this with your auth logic to get userId in the deployed version
//       const currentUserId = userId || 'X5OMMMToECMDIwqHyFpadKfzF7R2'; // Placeholder for testing
//       if (currentUserId && Object.keys(formData).length === 0) { // Only fetch if no formData prop
//         try {
//           const collections = ['personalInfo', 'education', 'skills', 'achievements', 'experiences'];
//           const fetchedData = {};
//           for (const collection of collections) {
//             const docRef = doc(db, collection, currentUserId);
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//               fetchedData[collection] = docSnap.data();
//             }
//           }
//           setPortfolioData(fetchedData);
//         } catch (error) {
//           console.error('Error fetching portfolio data:', error);
//         }
//       }
//     };
//     fetchData();
//   }, [userId, formData]);

//   // Destructure data for easier access
//   const { personalInfo = {}, education = {}, skills = {}, achievements = {}, experiences = {} } = portfolioData;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white font-sans">
//       {/* Hero Section */}
//       <motion.section
//         className="relative flex flex-col items-center justify-center h-screen px-6 overflow-hidden"
//         initial="hidden"
//         animate="visible"
//         variants={sectionVariants}
//       >
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
//         <motion.div
//           className="text-center z-10"
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
//             {personalInfo.name || 'Your Name'}
//           </h1>
//           <p className="mt-4 text-xl md:text-2xl font-light text-indigo-200">
//             {personalInfo.title || 'Your Professional Title'}
//           </p>
//           <div className="mt-6 flex justify-center gap-4">
//             {personalInfo.email && (
//               <a href={`mailto:${personalInfo.email}`} className="px-4 py-2 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors">
//                 Contact Me
//               </a>
//             )}
//             {personalInfo.github && (
//               <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-500 rounded-full hover:bg-indigo-600 transition-colors">
//                 GitHub
//               </a>
//             )}
//           </div>
//         </motion.div>
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
//       </motion.section>

//       {/* About Me */}
//       {personalInfo.bio && (
//         <motion.section
//           className="py-16 px-6 md:px-12 lg:px-24 bg-opacity-10 bg-white backdrop-blur-md"
//           variants={sectionVariants}
//         >
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold flex items-center gap-2 mb-6">
//               <User className="w-8 h-8 text-pink-400" /> About Me
//             </h2>
//             <p className="text-lg leading-relaxed text-indigo-100">{personalInfo.bio}</p>
//           </div>
//         </motion.section>
//       )}

//       {/* Education */}
//       {education.degrees?.length > 0 && (
//         <motion.section
//           className="py-16 px-6 md:px-12 lg:px-24"
//           variants={sectionVariants}
//         >
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold flex items-center gap-2 mb-6">
//               <Book className="w-8 h-8 text-pink-400" /> Education
//             </h2>
//             <div className="grid gap-6">
//               {education.degrees.map((edu, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative p-6 bg-indigo-800 bg-opacity-50 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <h3 className="text-xl font-semibold">{edu.degree}</h3>
//                   <p className="text-indigo-200">{edu.institution} | {edu.year}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>
//       )}

//       {/* Skills */}
//       {(skills.programmingLanguages || skills.tools || skills.technicalSkills || skills.softSkills) && (
//         <motion.section
//           className="py-16 px-6 md:px-12 lg:px-24 bg-opacity-10 bg-white backdrop-blur-md"
//           variants={sectionVariants}
//         >
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold flex items-center gap-2 mb-6">
//               <Code className="w-8 h-8 text-pink-400" /> Skills
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {skills.programmingLanguages && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-pink-300">Programming Languages</h3>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {skills.programmingLanguages.split(', ').map((skill, index) => (
//                       <span key={index} className="px-3 py-1 bg-pink-600 rounded-full text-sm">{skill}</span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {skills.tools && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-pink-300">Tools</h3>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {skills.tools.split(', ').map((tool, index) => (
//                       <span key={index} className="px-3 py-1 bg-indigo-600 rounded-full text-sm">{tool}</span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {skills.technicalSkills && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-pink-300">Technical Skills</h3>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {skills.technicalSkills.split(', ').map((skill, index) => (
//                       <span key={index} className="px-3 py-1 bg-purple-600 rounded-full text-sm">{skill}</span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {skills.softSkills && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-pink-300">Soft Skills</h3>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {skills.softSkills.split(', ').map((skill, index) => (
//                       <span key={index} className="px-3 py-1 bg-pink-500 rounded-full text-sm">{skill}</span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </motion.section>
//       )}

//       {/* Achievements */}
//       {(achievements.academicAchievements?.length > 0 || achievements.certifications?.length > 0 || achievements.projects?.length > 0 || achievements.extraCurricular?.length > 0) && (
//         <motion.section
//           className="py-16 px-6 md:px-12 lg:px-24"
//           variants={sectionVariants}
//         >
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold flex items-center gap-2 mb-6">
//               <Trophy className="w-8 h-8 text-pink-400" /> Achievements
//             </h2>
//             <div className="space-y-8">
//               {achievements.academicAchievements?.length > 0 && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-pink-300">Academic Achievements</h3>
//                   {achievements.academicAchievements.map((item, index) => (
//                     <div key={index} className="mt-2 p-4 bg-purple-800 bg-opacity-50 rounded-lg">
//                       <p>{item.title} ({item.year})</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {achievements.certifications?.length > 0 && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-pink-300">Certifications</h3>
//                   {achievements.certifications.map((item, index) => (
//                     <div key={index} className="mt-2 p-4 bg-purple-800 bg-opacity-50 rounded-lg">
//                       <p>{item.title} - {item.issuer} ({item.year})</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {achievements.projects?.length > 0 && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-pink-300">Projects</h3>
//                   {achievements.projects.map((item, index) => (
//                     <div key={index} className="mt-2 p-4 bg-purple-800 bg-opacity-50 rounded-lg">
//                       <p className="font-semibold">{item.name} ({item.year})</p>
//                       <p className="text-sm text-indigo-200">{item.technology}</p>
//                       <p>{item.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               {achievements.extraCurricular?.length > 0 && (
//                 <div>
//                   <h3 className="text-xl font-semibold text-pink-300">Extra-curricular</h3>
//                   {achievements.extraCurricular.map((item, index) => (
//                     <div key={index} className="mt-2 p-4 bg-purple-800 bg-opacity-50 rounded-lg">
//                       <p>{item.title} - {item.role} ({item.year})</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </motion.section>
//       )}

//       {/* Experience */}
//       {experiences.experiences?.length > 0 && (
//         <motion.section
//           className="py-16 px-6 md:px-12 lg:px-24 bg-opacity-10 bg-white backdrop-blur-md"
//           variants={sectionVariants}
//         >
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold flex items-center gap-2 mb-6">
//               <Briefcase className="w-8 h-8 text-pink-400" /> Experience
//             </h2>
//             <div className="space-y-6">
//               {experiences.experiences.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative p-6 bg-indigo-800 bg-opacity-50 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <h3 className="text-xl font-semibold">{exp.position}</h3>
//                   <p className="text-indigo-200">{exp.company} | {exp.type} | {exp.startDate} - {exp.endDate || 'Present'}</p>
//                   <p className="mt-2">{exp.description}</p>
//                   <div className="mt-2">
//                     <strong className="text-pink-300">Responsibilities:</strong>
//                     <p>{exp.responsibilities}</p>
//                   </div>
//                   <div className="mt-2">
//                     <strong className="text-pink-300">Achievements:</strong>
//                     <p>{exp.achievements}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>
//       )}

//       {/* Footer */}
//       <footer className="py-6 text-center text-indigo-200">
//         <p>&copy; {new Date().getFullYear()} {personalInfo.name || 'Your Name'}. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Templete;


// // Template.jsx
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { db, auth } from "../../firebase/config";
// import { doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe, FaUser } from "react-icons/fa";

// function Template() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async (userId) => {
//       try {
//         const userDocRef = doc(db, "users", userId);
//         const userDoc = await getDoc(userDocRef);
//         if (userDoc.exists()) {
//           setUserData(userDoc.data());
//         } else {
//           setError("No portfolio data found for this user.");
//         }
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         setError("Failed to load portfolio data: " + err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const userId = location.state?.userId || user.uid;
//         if (userId) {
//           console.log("Fetching data for userId:", userId);
//           fetchUserData(userId);
//         } else {
//           setError("No user ID provided.");
//           setLoading(false);
//         }
//       } else {
//         console.log("User not authenticated, redirecting to login.");
//         navigate("/login");
//       }
//     });

//     return () => unsubscribe();
//   }, [location.state, navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-lg text-gray-600">Loading your portfolio...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-lg text-red-600">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         {/* Header Section */}
//         <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-8 text-white">
//           <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
//             <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden shadow-md">
//               {userData.profileImage ? (
//                 <img
//                   src={userData.profileImage}
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <FaUser className="w-16 h-16 text-gray-600" />
//               )}
//             </div>
//             <div className="text-center sm:text-left">
//               <h1 className="text-4xl font-bold">{userData.name}</h1>
//               <p className="text-xl font-light mt-1">{userData.title || "Professional"}</p>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="p-8">
//           {/* About Me */}
//           <section className="mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-teal-500 pb-2">About Me</h2>
//             <p className="text-gray-700 leading-relaxed">{userData.about || "No description provided."}</p>
//           </section>

//           {/* Contact Info */}
//           <section className="mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-teal-500 pb-2">Contact Information</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="flex items-center space-x-3">
//                 <FaEnvelope className="text-teal-500 text-xl" />
//                 <p className="text-gray-700"><strong>Email:</strong> {userData.email}</p>
//               </div>
//               {userData.phone && (
//                 <div className="flex items-center space-x-3">
//                   <FaPhone className="text-teal-500 text-xl" />
//                   <p className="text-gray-700"><strong>Phone:</strong> {userData.phone}</p>
//                 </div>
//               )}
//               {userData.location && (
//                 <div className="flex items-center space-x-3">
//                   <FaMapMarkerAlt className="text-teal-500 text-xl" />
//                   <p className="text-gray-700"><strong>Location:</strong> {userData.location}</p>
//                 </div>
//               )}
//               {userData.postalCode && (
//                 <div className="flex items-center space-x-3">
//                   <FaGlobe className="text-teal-500 text-xl" />
//                   <p className="text-gray-700"><strong>Postal Code:</strong> {userData.postalCode}</p>
//                 </div>
//               )}
//             </div>
//           </section>

//           {/* Social Links */}
//           {(userData.linkedin || userData.github) && (
//             <section className="mb-8">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-teal-500 pb-2">Social Profiles</h2>
//               <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
//                 {userData.linkedin && (
//                   <a
//                     href={userData.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-2 text-teal-600 hover:text-teal-800 transition-colors"
//                   >
//                     <FaLinkedin className="text-2xl" />
//                     <span>LinkedIn</span>
//                   </a>
//                 )}
//                 {userData.github && (
//                   <a
//                     href={userData.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-2 text-teal-600 hover:text-teal-800 transition-colors"
//                   >
//                     <FaGithub className="text-2xl" />
//                     <span>GitHub</span>
//                   </a>
//                 )}
//               </div>
//             </section>
//           )}

//           {/* Additional Info */}
//           {(userData.dateOfBirth || userData.preferredLanguage) && (
//             <section>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-teal-500 pb-2">Additional Details</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {userData.dateOfBirth && (
//                   <p className="text-gray-700"><strong>Date of Birth:</strong> {userData.dateOfBirth}</p>
//                 )}
//                 {userData.preferredLanguage && (
//                   <p className="text-gray-700"><strong>Preferred Language:</strong> {userData.preferredLanguage}</p>
//                 )}
//               </div>
//             </section>
//           )}
//         </div>

//         {/* Footer */}
//         <div className="bg-gray-50 p-4 text-center text-gray-600 border-t">
//           <p>Portfolio created on {new Date(userData.createdAt).toLocaleDateString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Template;



// // Templete.jsx
// import React, { useState, useEffect } from 'react';
// import { db } from '../../firebase/config';
// import { doc, getDoc } from 'firebase/firestore';
// import { motion } from 'framer-motion'; // For animations
// import { User, Book, Code, Trophy, Briefcase, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// const Templete = ({ formData = {} }) => {
//   const [portfolioData, setPortfolioData] = useState(formData);
//   const [loading, setLoading] = useState(!Object.keys(formData).length); // Loading if no formData

//   // Fetch data from Firebase (for deployed version or if no formData provided)
//   useEffect(() => {
//     const fetchData = async () => {
//       // Placeholder userId; replace with auth logic in deployed version
//       const currentUserId = portfolioData.uid || 'I9CA2jnfZOe2mDfrN143bEqtdDy1'; // Example from your data
//       if (currentUserId && Object.keys(formData).length === 0) {
//         try {
//           setLoading(true);
//           const collections = ['users', 'skills', 'achievements', 'personalInfo', 'experience', 'education'];
//           const fetchedData = {};

//           for (const collection of collections) {
//             const docRef = doc(db, collection, currentUserId);
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//               fetchedData[collection] = docSnap.data();
//             }
//           }

//           setPortfolioData(fetchedData);
//           setLoading(false);
//         } catch (error) {
//           console.error('Error fetching portfolio data:', error);
//           setLoading(false);
//         }
//       }
//     };
//     fetchData();
//   }, [formData]);

//   // Destructure data with fallbacks
//   const {
//     users = {},
//     skills = {},
//     achievements = {},
//     personalInfo = {},
//     experience = {},
//     education = {},
//   } = portfolioData;

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//           className="w-12 h-12 border-4 border-t-pink-500 border-gray-700 rounded-full"
//         ></motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans overflow-x-hidden">
//       {/* Hero Section */}
//       <motion.section
//         className="relative flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] bg-opacity-10"
//         initial="hidden"
//         animate="visible"
//         variants={fadeInUp}
//       >
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-0"></div>
//         <motion.div
//           className="text-center z-10 max-w-4xl"
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-text">
//             {users.name || 'Your Name'}
//           </h1>
//           <p className="mt-4 text-xl md:text-2xl font-light text-gray-300">{users.title || 'Your Title'}</p>
//           <div className="mt-6 flex flex-wrap justify-center gap-4">
//             {users.email && (
//               <a href={`mailto:${users.email}`} className="flex items-center gap-2 px-4 py-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors">
//                 <Mail className="w-5 h-5" /> Email
//               </a>
//             )}
//             {users.github && (
//               <a href={users.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
//                 <Github className="w-5 h-5" /> GitHub
//               </a>
//             )}
//             {users.linkedin && (
//               <a href={users.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
//                 <Linkedin className="w-5 h-5" /> LinkedIn
//               </a>
//             )}
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* About Section */}
//       {(users.about || personalInfo.hobbies) && (
//         <motion.section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900" variants={fadeInUp}>
//           <div className="max-w-5xl mx-auto">
//             <h2 className="text-4xl font-bold flex items-center gap-2 mb-8 text-pink-400">
//               <User className="w-8 h-8" /> About Me
//             </h2>
//             <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg border border-gray-700">
//               <p className="text-lg text-gray-200">{users.about || 'Tell the world about yourself!'}</p>
//               {personalInfo.hobbies && (
//                 <p className="mt-4 text-gray-300">
//                   <span className="font-semibold text-pink-300">Hobbies:</span> {personalInfo.hobbies}
//                 </p>
//               )}
//             </div>
//           </div>
//         </motion.section>
//       )}

//       {/* Education Section */}
//       {education.degrees?.length > 0 && (
//         <motion.section className="py-16 px-6 md:px-12 lg:px-24" variants={fadeInUp}>
//           <div className="max-w-5xl mx-auto">
//             <h2 className="text-4xl font-bold flex items-center gap-2 mb-8 text-pink-400">
//               <Book className="w-8 h-8" /> Education
//             </h2>
//             <div className="relative">
//               <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-indigo-500"></div>
//               {education.degrees.map((edu, index) => (
//                 <motion.div
//                   key={index}
//                   className="ml-10 mb-8 p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition-transform"
//                   whileHover={{ x: 10 }}
//                 >
//                   <div className="absolute left-2 w-4 h-4 bg-pink-500 rounded-full -translate-x-1/2"></div>
//                   <h3 className="text-xl font-semibold text-indigo-300">{edu.degree}</h3>
//                   <p className="text-gray-300">{edu.institution} | {edu.year}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>
//       )}

//       {/* Skills Section */}
//       {(skills.programmingLanguages || skills.tools || skills.technicalSkills || skills.softSkills) && (
//         <motion.section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900" variants={fadeInUp}>
//           <div className="max-w-5xl mx-auto">
//             <h2 className="text-4xl font-bold flex items-center gap-2 mb-8 text-pink-400">
//               <Code className="w-8 h-8" /> Skills
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {skills.programmingLanguages && (
//                 <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
//                   <h3 className="text-xl font-semibold text-pink-300 mb-4">Programming Languages</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {skills.programmingLanguages.split(', ').map((skill, index) => (
//                       <motion.span
//                         key={index}
//                         className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-sm shadow-md"
//                         whileHover={{ rotate: 5, scale: 1.1 }}
//                       >
//                         {skill}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {skills.tools && (
//                 <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
//                   <h3 className="text-xl font-semibold text-pink-300 mb-4">Tools</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {skills.tools.split(', ').map((tool, index) => (
//                       <motion.span
//                         key={index}
//                         className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full text-sm shadow-md"
//                         whileHover={{ rotate: -5, scale: 1.1 }}
//                       >
//                         {tool}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {skills.technicalSkills && (
//                 <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
//                   <h3 className="text-xl font-semibold text-pink-300 mb-4">Technical Skills</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {skills.technicalSkills.split(', ').map((skill, index) => (
//                       <motion.span
//                         key={index}
//                         className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-sm shadow-md"
//                         whileHover={{ rotate: 5, scale: 1.1 }}
//                       >
//                         {skill}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {skills.softSkills && (
//                 <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
//                   <h3 className="text-xl font-semibold text-pink-300 mb-4">Soft Skills</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {skills.softSkills.split(', ').map((skill, index) => (
//                       <motion.span
//                         key={index}
//                         className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full text-sm shadow-md"
//                         whileHover={{ rotate: -5, scale: 1.1 }}
//                       >
//                         {skill}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </motion.section>
//       )}

//       {/* Achievements Section */}
//       {(achievements.academicAchievements?.length > 0 || achievements.certifications?.length > 0 || achievements.projects?.length > 0 || achievements.extraCurricular?.length > 0) && (
//         <motion.section className="py-16 px-6 md:px-12 lg:px-24" variants={fadeInUp}>
//           <div className="max-w-5xl mx-auto">
//             <h2 className="text-4xl font-bold flex items-center gap-2 mb-8 text-pink-400">
//               <Trophy className="w-8 h-8" /> Achievements
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {achievements.academicAchievements?.length > 0 && (
//                 <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
//                   <h3 className="text-xl font-semibold text-pink-300 mb-4">Academic Achievements</h3>
//                   {achievements.academicAchievements.map((item, index) => (
//                     <motion.div key={index} className="mb-4" whileHover={{ scale: 1.02 }}>
//                       <p className="text-gray-200">{item.title} ({item.year})</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}
//               {achievements.certifications?.length > 0 && (
//                 <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
//                   <h3 className="text-xl font-semibold text-pink-300 mb-4">Certifications</h3>
//                   {achievements.certifications.map((item, index) => (
//                     <motion.div key={index} className="mb-4" whileHover={{ scale: 1.02 }}>
//                       <p className="text-gray-200">{item.title} - {item.issuer} ({item.year})</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}
//               {achievements.projects?.length > 0 && (
//                 <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
//                   <h3 className="text-xl font-semibold text-pink-300 mb-4">Projects</h3>
//                   {achievements.projects.map((item, index) => (
//                     <motion.div key={index} className="mb-4" whileHover={{ scale: 1.02 }}>
//                       <p className="font-semibold text-indigo-300">{item.name} ({item.year})</p>
//                       <p className="text-sm text-gray-300">{item.technology}</p>
//                       <p className="text-gray-200">{item.description}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}
//               {achievements.extraCurricular?.length > 0 && (
//                 <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
//                   <h3 className="text-xl font-semibold text-pink-300 mb-4">Extra-curricular</h3>
//                   {achievements.extraCurricular.map((item, index) => (
//                     <motion.div key={index} className="mb-4" whileHover={{ scale: 1.02 }}>
//                       <p className="text-gray-200">{item.title} - {item.role} ({item.year})</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </motion.section>
//       )}

//       {/* Experience Section */}
//       {experience.experiences?.length > 0 && (
//         <motion.section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900" variants={fadeInUp}>
//           <div className="max-w-5xl mx-auto">
//             <h2 className="text-4xl font-bold flex items-center gap-2 mb-8 text-pink-400">
//               <Briefcase className="w-8 h-8" /> Experience
//             </h2>
//             <div className="relative">
//               <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-pink-500"></div>
//               {experience.experiences.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   className="ml-10 mb-8 p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition-transform"
//                   whileHover={{ x: 10 }}
//                 >
//                   <div className="absolute left-2 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2"></div>
//                   <h3 className="text-xl font-semibold text-indigo-300">{exp.position}</h3>
//                   <p className="text-gray-300">{exp.company} | {exp.type} | {exp.startDate} - {exp.endDate || 'Present'}</p>
//                   <p className="mt-2 text-gray-200">{exp.description}</p>
//                   <div className="mt-2">
//                     <strong className="text-pink-300">Responsibilities:</strong>
//                     <p className="text-gray-200">{exp.responsibilities}</p>
//                   </div>
//                   <div className="mt-2">
//                     <strong className="text-pink-300">Achievements:</strong>
//                     <p className="text-gray-200">{exp.achievements}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>
//       )}

//       {/* Contact Info Footer */}
//       {(users.location || users.phone || personalInfo.nationality) && (
//         <motion.footer className="py-12 px-6 bg-gray-800 text-gray-300" variants={fadeInUp}>
//           <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//             <div>
//               <h3 className="text-2xl font-semibold text-pink-400">Get in Touch</h3>
//               <p className="mt-2 flex items-center gap-2"><MapPin className="w-5 h-5" /> {users.location || 'Your Location'}</p>
//               <p className="mt-2 flex items-center gap-2"><Phone className="w-5 h-5" /> {users.phone || 'Your Phone'}</p>
//               <p className="mt-2">Nationality: {personalInfo.nationality || 'Not specified'}</p>
//             </div>
//             <div className="text-center">
//               <p>© {new Date().getFullYear()} {users.name || 'Your Name'}. All rights reserved.</p>
//               <p className="text-sm mt-2">Built with passion and creativity.</p>
//             </div>
//           </div>
//         </motion.footer>
//       )}
//     </div>
//   );
// };

// export default Templete;



// Templete.jsx
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase/config'; // Import auth along with db
import { onAuthStateChanged } from 'firebase/auth'; // To get the current user
import { doc, getDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { User, Book, Code, Trophy, Briefcase, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Templete = ({ formData = {} }) => {
  const [portfolioData, setPortfolioData] = useState(formData);
  const [loading, setLoading] = useState(true); // Start with loading true until auth/data resolves
  const [userId, setUserId] = useState(null);

  // Get the current logged-in user's UID
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        console.log('Current logged-in user UID:', user.uid);
      } else {
        setUserId(null);
        console.log('No user logged in');
        setLoading(false); // Stop loading if no user
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch data from Firebase for the current user
  useEffect(() => {
    const fetchData = async () => {
      if (userId && Object.keys(formData).length === 0) { // Fetch only if no formData (deployed mode)
        try {
          setLoading(true);
          const collections = ['users', 'skills', 'achievements', 'personalInfo', 'experience', 'education'];
          const fetchedData = {};

          for (const collection of collections) {
            const docRef = doc(db, collection, userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              fetchedData[collection] = docSnap.data();
            } else {
              console.log(`No data found in ${collection} for user ${userId}`);
            }
          }

          setPortfolioData(fetchedData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching portfolio data:', error);
          setLoading(false);
        }
      } else if (Object.keys(formData).length > 0) {
        // Use formData from PortfolioBuilder.jsx for preview mode
        setPortfolioData(formData);
        setLoading(false);
      }
    };
    if (userId || Object.keys(formData).length > 0) {
      fetchData();
    }
  }, [userId, formData]);

  // Destructure data with fallbacks
  const {
    users = {},
    skills = {},
    achievements = {},
    personalInfo = {},
    experience = {},
    education = {},
  } = portfolioData;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-12 h-12 border-4 border-t-pink-500 border-gray-700 rounded-full"
        ></motion.div>
      </div>
    );
  }

  if (!userId && Object.keys(formData).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <p>Please log in to view your portfolio.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] bg-opacity-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-0"></div>
        <motion.div
          className="text-center z-10 max-w-4xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-text">
            {users.name || 'Your Name'}
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light text-gray-300">{users.title || 'Your Title'}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {users.email && (
              <a href={`mailto:${users.email}`} className="flex items-center gap-2 px-4 py-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors">
                <Mail className="w-5 h-5" /> Email
              </a>
            )}
            {users.github && (
              <a href={users.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
                <Github className="w-5 h-5" /> GitHub
              </a>
            )}
            {users.linkedin && (
              <a href={users.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            )}
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      {(users.about || personalInfo.hobbies) && (
        <motion.section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900" variants={fadeInUp}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold flex items-center gap-2 mb-8 text-pink-400">
              <User className="w-8 h-8" /> About Me
            </h2>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg border border-gray-700">
              <p className="text-lg text-gray-200">{users.about || 'Tell the world about yourself!'}</p>
              {personalInfo.hobbies && (
                <p className="mt-4 text-gray-300">
                  <span className="font-semibold text-pink-300">Hobbies:</span> {personalInfo.hobbies}
                </p>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Education Section */}
      {education.degrees?.length > 0 && (
        <motion.section className="py-16 px-6 md:px-12 lg:px-24" variants={fadeInUp}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold flex items-center gap-2 mb-8 text-pink-400">
              <Book className="w-8 h-8" /> Education
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-indigo-500"></div>
              {education.degrees.map((edu, index) => (
                <motion.div
                  key={index}
                  className="ml-10 mb-8 p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition-transform"
                  whileHover={{ x: 10 }}
                >
                  <div className="absolute left-2 w-4 h-4 bg-pink-500 rounded-full -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold text-indigo-300">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.institution} | {edu.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Skills Section */}
      {(skills.programmingLanguages || skills.tools || skills.technicalSkills || skills.softSkills) && (
        <motion.section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900" variants={fadeInUp}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold flex items-center gap-2 mb-8 text-pink-400">
              <Code className="w-8 h-8" /> Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.programmingLanguages && (
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-pink-300 mb-4">Programming Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.programmingLanguages.split(', ').map((skill, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-sm shadow-md"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
              {skills.tools && (
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-pink-300 mb-4">Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.tools.split(', ').map((tool, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full text-sm shadow-md"
                        whileHover={{ rotate: -5, scale: 1.1 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
              {skills.technicalSkills && (
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-pink-300 mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.technicalSkills.split(', ').map((skill, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-sm shadow-md"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
              {skills.softSkills && (
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-pink-300 mb-4">Soft Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.softSkills.split(', ').map((skill, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full text-sm shadow-md"
                        whileHover={{ rotate: -5, scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Achievements Section */}
      {(achievements.academicAchievements?.length > 0 || achievements.certifications?.length > 0 || achievements.projects?.length > 0 || achievements.extraCurricular?.length > 0) && (
        <motion.section className="py-16 px-6 md:px-12 lg:px-24" variants={fadeInUp}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold flex items-center gap-2 mb-8 text-pink-400">
              <Trophy className="w-8 h-8" /> Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.academicAchievements?.length > 0 && (
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-pink-300 mb-4">Academic Achievements</h3>
                  {achievements.academicAchievements.map((item, index) => (
                    <motion.div key={index} className="mb-4" whileHover={{ scale: 1.02 }}>
                      <p className="text-gray-200">{item.title} ({item.year})</p>
                    </motion.div>
                  ))}
                </div>
              )}
              {achievements.certifications?.length > 0 && (
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-pink-300 mb-4">Certifications</h3>
                  {achievements.certifications.map((item, index) => (
                    <motion.div key={index} className="mb-4" whileHover={{ scale: 1.02 }}>
                      <p className="text-gray-200">{item.title} - {item.issuer} ({item.year})</p>
                    </motion.div>
                  ))}
                </div>
              )}
              {achievements.projects?.length > 0 && (
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-pink-300 mb-4">Projects</h3>
                  {achievements.projects.map((item, index) => (
                    <motion.div key={index} className="mb-4" whileHover={{ scale: 1.02 }}>
                      <p className="font-semibold text-indigo-300">{item.name} ({item.year})</p>
                      <p className="text-sm text-gray-300">{item.technology}</p>
                      <p className="text-gray-200">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
              {achievements.extraCurricular?.length > 0 && (
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-semibold text-pink-300 mb-4">Extra-curricular</h3>
                  {achievements.extraCurricular.map((item, index) => (
                    <motion.div key={index} className="mb-4" whileHover={{ scale: 1.02 }}>
                      <p className="text-gray-200">{item.title} - {item.role} ({item.year})</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Experience Section */}
      {experience.experiences?.length > 0 && (
        <motion.section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900" variants={fadeInUp}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold flex items-center gap-2 mb-8 text-pink-400">
              <Briefcase className="w-8 h-8" /> Experience
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-pink-500"></div>
              {experience.experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="ml-10 mb-8 p-6 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition-transform"
                  whileHover={{ x: 10 }}
                >
                  <div className="absolute left-2 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold text-indigo-300">{exp.position}</h3>
                  <p className="text-gray-300">{exp.company} | {exp.type} | {exp.startDate} - {exp.endDate || 'Present'}</p>
                  <p className="mt-2 text-gray-200">{exp.description}</p>
                  <div className="mt-2">
                    <strong className="text-pink-300">Responsibilities:</strong>
                    <p className="text-gray-200">{exp.responsibilities}</p>
                  </div>
                  <div className="mt-2">
                    <strong className="text-pink-300">Achievements:</strong>
                    <p className="text-gray-200">{exp.achievements}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Contact Info Footer */}
      {(users.location || users.phone || personalInfo.nationality) && (
        <motion.footer className="py-12 px-6 bg-gray-800 text-gray-300" variants={fadeInUp}>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-pink-400">Get in Touch</h3>
              <p className="mt-2 flex items-center gap-2"><MapPin className="w-5 h-5" /> {users.location || 'Your Location'}</p>
              <p className="mt-2 flex items-center gap-2"><Phone className="w-5 h-5" /> {users.phone || 'Your Phone'}</p>
              <p className="mt-2">Nationality: {personalInfo.nationality || 'Not specified'}</p>
            </div>
            <div className="text-center">
              <p>© {new Date().getFullYear()} {users.name || 'Your Name'}. All rights reserved.</p>
              <p className="text-sm mt-2">Built with passion and creativity.</p>
            </div>
          </div>
        </motion.footer>
      )}
    </div>
  );
};

export default Templete;