// //register.jsx
// import React, { useState, useEffect } from "react";
// import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaGlobe, FaLock, FaCheckCircle, FaCloudUploadAlt } from "react-icons/fa";
// import { useNavigate, Link } from "react-router-dom";
// import { db, auth } from "../../firebase/config";
// import { doc, setDoc } from "firebase/firestore"; // Import setDoc instead of addDoc
// import { onAuthStateChanged } from "firebase/auth";

// function Register() {
//   const navigate = useNavigate();
//   const [profilePic, setProfilePic] = useState(null);
//   const [selectedStep, setSelectedStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     professionalTitle: "",
//     email: "",
//     phone: "",
//     linkedin: "",
//     github: "",
//     dateOfBirth: "",
//     preferredLanguage: "",
//     aboutMe: "",
//     country: "",
//     city: "",
//     postalCode: "",
//   });
//   const [authError, setAuthError] = useState(null);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("User is signed in:", user.uid);
//         setCurrentUser(user);
//         setFormData((prev) => ({ ...prev, email: user.email || "" }));
//       } else {
//         console.log("No user is signed in.");
//         setCurrentUser(null);
//         setAuthError("Please log in to register your portfolio details.");
//         navigate("/login");
//       }
//     }, (error) => {
//       console.error("Auth state change error:", error);
//       setAuthError("Authentication error: " + error.message);
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   const handleProfileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfilePic(URL.createObjectURL(file));
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const saveUserData = async () => {
//     if (!currentUser) {
//       setAuthError("You must be logged in to save portfolio details.");
//       return null;
//     }

//     if (formData.email !== currentUser.email) {
//       setAuthError("The email must match your logged-in email.");
//       return null;
//     }

//     try {
//       const userData = {
//         uid: currentUser.uid,
//         name: `${formData.firstName} ${formData.lastName}`,
//         title: formData.professionalTitle,
//         email: formData.email,
//         phone: formData.phone,
//         location: `${formData.city}, ${formData.country}`,
//         about: formData.aboutMe,
//         linkedin: formData.linkedin,
//         github: formData.github,
//         dateOfBirth: formData.dateOfBirth,
//         preferredLanguage: formData.preferredLanguage,
//         postalCode: formData.postalCode,
//         profileImage: profilePic, // Note: Temporary URL; consider Firebase Storage for persistence
//         createdAt: new Date().toISOString(),
//       };

//       console.log("Saving user data:", userData);
//       // Use setDoc to set the document ID to the user's UID
//       await setDoc(doc(db, "users", currentUser.uid), userData);
//       console.log("Document written with UID:", currentUser.uid);
//       alert("Portfolio data saved successfully with UID: " + currentUser.uid);
//       return currentUser.uid; // Return UID for navigation
//     } catch (error) {
//       console.error("Error saving data:", error.message, error.code);
//       setAuthError("Error saving data: " + error.message);
//       return null;
//     }
//   };

//   const handleSave = async () => {
//     await saveUserData();
//   };

//   const handleCompleteRegistration = async () => {
//     const docId = await saveUserData();
//     if (!authError && docId) {
//       navigate("/portfolio-builder", { state: { userId: docId } });
//     } else {
//       setAuthError("Failed to complete registration. Please try again.");
//     }
//   };

//   const steps = [
//     { id: 1, icon: <FaUser />, title: "Personal Details", description: "Basic information to get started" },
//     { id: 2, icon: <FaPhone />, title: "Contact Info", description: "How we can reach you" },
//     { id: 3, icon: <FaCalendarAlt />, title: "Demographics", description: "Tell us about yourself" },
//     { id: 4, icon: <FaGlobe />, title: "Location", description: "Where are you based" },
//     { id: 5, icon: <FaLock />, title: "Security", description: "Keep your account safe" },
//     { id: 6, icon: <FaCheckCircle />, title: "Completion", description: "Final review and submit" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 mt-12 md:mt-32">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Create Your Professional Portfolio</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Join our community of professionals and showcase your expertise with a customized portfolio
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-6">Registration Steps</h2>
//               <div className="space-y-3">
//                 {steps.map((step) => (
//                   <div
//                     key={step.id}
//                     className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer
//                       ${selectedStep === step.id ? "bg-blue-50 border-l-4 border-blue-600" : "hover:bg-gray-50"}`}
//                     onClick={() => setSelectedStep(step.id)}
//                   >
//                     <div
//                       className={`p-3 rounded-full ${
//                         selectedStep === step.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
//                       }`}
//                     >
//                       {step.icon}
//                     </div>
//                     <div>
//                       <h3 className={`font-medium ${selectedStep === step.id ? "text-blue-600" : "text-gray-700"}`}>
//                         {step.title}
//                       </h3>
//                       <p className="text-sm text-gray-500">{step.description}</p>
//                     </div>
//                     {selectedStep > step.id && (
//                       <div className="ml-auto">
//                         <FaCheckCircle className="text-green-500" />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-10 pt-6 border-t border-gray-100">
//                 <div className="bg-gray-50 rounded-lg p-4">
//                   <h3 className="text-sm font-medium text-gray-700 mb-2">Registration Progress</h3>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
//                       style={{ width: `${(selectedStep / steps.length) * 100}%` }}
//                     ></div>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">
//                     Step {selectedStep} of {steps.length} • {Math.round((selectedStep / steps.length) * 100)}% complete
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-2/3">
//             <div className="bg-white rounded-xl shadow-md p-8">
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   {steps.find((s) => s.id === selectedStep)?.title}
//                 </h2>
//                 <div className="text-sm text-gray-500">
//                   Step {selectedStep} of {steps.length}
//                 </div>
//               </div>

//               {authError && (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
//                   {authError}
//                 </div>
//               )}

//               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//                 {selectedStep === 1 && (
//                   <>
//                     <div className="mb-10 flex flex-col items-center">
//                       <div className="relative inline-block mb-3">
//                         {profilePic ? (
//                           <img
//                             src={profilePic}
//                             alt="Profile"
//                             className="w-28 h-28 rounded-full object-cover border-4 border-gray-100 shadow-md"
//                           />
//                         ) : (
//                           <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white shadow-md">
//                             <FaUser className="w-10 h-10 text-gray-400" />
//                           </div>
//                         )}
//                         <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors shadow-md">
//                           <FaCloudUploadAlt />
//                           <input type="file" className="hidden" onChange={handleProfileUpload} accept="image/*" />
//                         </label>
//                       </div>
//                       <p className="text-sm text-gray-500">Upload a professional profile photo</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                         <input
//                           type="text"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           placeholder="Enter your first name"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                         <input
//                           type="text"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           placeholder="Enter your last name"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
//                       <input
//                         type="text"
//                         name="professionalTitle"
//                         value={formData.professionalTitle}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="e.g. Full Stack Developer"
//                       />
//                     </div>
//                   </>
//                 )}

//                 {selectedStep === 2 && (
//                   <>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
//                         placeholder="Your logged-in email"
//                         required
//                         readOnly
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Enter your phone number"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
//                         <input
//                           type="url"
//                           name="linkedin"
//                           value={formData.linkedin}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           placeholder="linkedin.com/in/username"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
//                         <input
//                           type="url"
//                           name="github"
//                           value={formData.github}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           placeholder="github.com/username"
//                         />
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {selectedStep === 3 && (
//                   <>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
//                         <input
//                           type="date"
//                           name="dateOfBirth"
//                           value={formData.dateOfBirth}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Language</label>
//                         <select
//                           name="preferredLanguage"
//                           value={formData.preferredLanguage}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         >
//                           <option value="">Select language</option>
//                           <option value="en">English</option>
//                           <option value="es">Spanish</option>
//                           <option value="fr">French</option>
//                           <option value="de">German</option>
//                           <option value="zh">Chinese</option>
//                           <option value="ja">Japanese</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">About Me</label>
//                       <textarea
//                         name="aboutMe"
//                         value={formData.aboutMe}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Write a brief introduction about yourself"
//                         rows="4"
//                       ></textarea>
//                     </div>
//                   </>
//                 )}

//                 {selectedStep === 4 && (
//                   <>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
//                       <select
//                         name="country"
//                         value={formData.country}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       >
//                         <option value="">Select country</option>
//                         <option value="us">United States</option>
//                         <option value="ca">Canada</option>
//                         <option value="uk">United Kingdom</option>
//                         <option value="au">Australia</option>
//                         <option value="in">India</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//                         <input
//                           type="text"
//                           name="city"
//                           value={formData.city}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           placeholder="Enter your city"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Postal/Zip Code</label>
//                         <input
//                           type="text"
//                           name="postalCode"
//                           value={formData.postalCode}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           placeholder="Enter postal code"
//                         />
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {selectedStep === 5 && (
//                   <div className="space-y-6">
//                     <p className="text-gray-700">
//                       Your account is already secured with your login credentials. Proceed to the next step to complete
//                       your portfolio registration.
//                     </p>
//                   </div>
//                 )}

//                 {selectedStep === 6 && (
//                   <div className="space-y-6">
//                     <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
//                       <h3 className="text-lg font-medium text-blue-800 mb-4">Almost Done!</h3>
//                       <p className="text-blue-700 mb-4">
//                         Please review your information before finalizing your portfolio registration.
//                       </p>
//                       <div className="flex items-center mb-4">
//                         <FaCheckCircle className="text-green-500 mr-2" />
//                         <span className="text-gray-700">Personal information collected</span>
//                       </div>
//                       <div className="flex items-center mb-4">
//                         <FaCheckCircle className="text-green-500 mr-2" />
//                         <span className="text-gray-700">Contact details verified</span>
//                       </div>
//                       <div className="flex items-center">
//                         <FaCheckCircle className="text-green-500 mr-2" />
//                         <span className="text-gray-700">Account linked to your login</span>
//                       </div>
//                     </div>

//                     <div className="mt-4">
//                       <label className="flex items-start">
//                         <input
//                           type="checkbox"
//                           className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4 mt-1"
//                           required
//                         />
//                         <span className="ml-2 text-sm text-gray-600">
//                           I agree to the{" "}
//                           <Link to="/privacy-policy" className="text-blue-600 hover:underline">
//                             Privacy Policy
//                           </Link>{" "}
//                           and Terms of Service
//                         </span>
//                       </label>
//                     </div>

//                     <div className="flex justify-center gap-4 pt-6">
//                       <button
//                         type="button"
//                         onClick={handleSave}
//                         className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//                       >
//                         Save
//                       </button>
//                       <button
//                         type="button"
//                         onClick={handleCompleteRegistration}
//                         className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                       >
//                         Complete Registration
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {selectedStep < 6 && (
//                   <div className="flex justify-between pt-6 border-t border-gray-100 mt-8">
//                     <button
//                       type="button"
//                       className={`px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors ${
//                         selectedStep === 1 ? "opacity-50 cursor-not-allowed" : ""
//                       }`}
//                       onClick={() => selectedStep > 1 && setSelectedStep(selectedStep - 1)}
//                       disabled={selectedStep === 1}
//                     >
//                       Back
//                     </button>

//                     <button
//                       type="button"
//                       className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                       onClick={() => setSelectedStep(selectedStep + 1)}
//                     >
//                       Continue
//                     </button>
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


// Register.jsx
import React, { useState, useEffect } from "react";
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaGlobe, FaLock, FaCheckCircle, FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { db, auth } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function Register() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);
  const [selectedStep, setSelectedStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    professionalTitle: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    dateOfBirth: "",
    preferredLanguage: "",
    aboutMe: "",
    country: "",
    city: "",
    postalCode: "",
  });
  const [authError, setAuthError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user.uid);
        setCurrentUser(user);
        setFormData((prev) => ({ ...prev, email: user.email || "" }));
      } else {
        console.log("No user is signed in.");
        setCurrentUser(null);
        setAuthError("Please log in to register your portfolio details.");
        navigate("/login");
      }
    }, (error) => {
      console.error("Auth state change error:", error);
      setAuthError("Authentication error: " + error.message);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfilePic(URL.createObjectURL(file));
    } else {
      setAuthError("Please upload a valid image file (e.g., JPG, PNG).");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveUserData = async () => {
    if (!currentUser) {
      setAuthError("You must be logged in to save portfolio details.");
      return null;
    }

    if (formData.email !== currentUser.email) {
      setAuthError("The email must match your logged-in email.");
      return null;
    }

    try {
      const userData = {
        uid: currentUser.uid,
        name: `${formData.firstName} ${formData.lastName}`,
        title: formData.professionalTitle,
        email: formData.email,
        phone: formData.phone,
        location: `${formData.city}, ${formData.country}`,
        about: formData.aboutMe,
        linkedin: formData.linkedin,
        github: formData.github,
        dateOfBirth: formData.dateOfBirth,
        preferredLanguage: formData.preferredLanguage,
        postalCode: formData.postalCode,
        profileImage: profilePic || "",
        createdAt: new Date().toISOString(),
      };

      console.log("Saving user data:", userData);
      await setDoc(doc(db, "users", currentUser.uid), userData);
      console.log("Document written with UID:", currentUser.uid);
      alert("Portfolio data saved successfully with UID: " + currentUser.uid);
      return currentUser.uid;
    } catch (error) {
      console.error("Error saving data:", error.message, error.code);
      setAuthError(`Error saving data: ${error.message} (Code: ${error.code})`);
      return null;
    }
  };

  const handleSave = async () => {
    await saveUserData();
  };

  const handleCompleteRegistration = async () => {
    setAuthError(null); // Clear any previous errors
    console.log("Starting handleCompleteRegistration...");
    const docId = await saveUserData();
    console.log("docId returned:", docId);
    console.log("authError after save:", authError);

    if (docId) {
      console.log("Navigating to /template with userId:", docId);
      navigate("/portfolio-builder", { state: { userId: docId } }); // Updated to /template
    } else {
      console.log("Navigation failed due to no docId or error.");
      setAuthError("Failed to complete registration. Please try again.");
    }
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-12 md:mt-32">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Create Your Professional Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of professionals and showcase your expertise with a customized portfolio
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Registration Steps</h2>
              <div className="space-y-3">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer
                      ${selectedStep === step.id ? "bg-blue-50 border-l-4 border-blue-600" : "hover:bg-gray-50"}`}
                    onClick={() => setSelectedStep(step.id)}
                  >
                    <div
                      className={`p-3 rounded-full ${
                        selectedStep === step.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h3 className={`font-medium ${selectedStep === step.id ? "text-blue-600" : "text-gray-700"}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                    {selectedStep > step.id && (
                      <div className="ml-auto">
                        <FaCheckCircle className="text-green-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Registration Progress</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${(selectedStep / steps.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Step {selectedStep} of {steps.length} • {Math.round((selectedStep / steps.length) * 100)}% complete
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  {steps.find((s) => s.id === selectedStep)?.title}
                </h2>
                <div className="text-sm text-gray-500">
                  Step {selectedStep} of {steps.length}
                </div>
              </div>

              {authError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {authError}
                </div>
              )}

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {selectedStep === 1 && (
                  <>
                    <div className="mb-10 flex flex-col items-center">
                      <div className="relative inline-block mb-3">
                        {profilePic ? (
                          <img
                            src={profilePic}
                            alt="Profile"
                            className="w-28 h-28 rounded-full object-cover border-4 border-gray-100 shadow-md"
                          />
                        ) : (
                          <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white shadow-md">
                            <FaUser className="w-10 h-10 text-gray-400" />
                          </div>
                        )}
                        <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors shadow-md">
                          <FaCloudUploadAlt />
                          <input type="file" className="hidden" onChange={handleProfileUpload} accept="image/*" />
                        </label>
                      </div>
                      <p className="text-sm text-gray-500">Upload a professional profile photo</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
                      <input
                        type="text"
                        name="professionalTitle"
                        value={formData.professionalTitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g. Full Stack Developer"
                      />
                    </div>
                  </>
                )}

                {selectedStep === 2 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                        placeholder="Your logged-in email"
                        required
                        readOnly
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="linkedin.com/in/username"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
                        <input
                          type="url"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="github.com/username"
                        />
                      </div>
                    </div>
                  </>
                )}

                {selectedStep === 3 && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Language</label>
                        <select
                          name="preferredLanguage"
                          value={formData.preferredLanguage}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select language</option>
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                          <option value="zh">Chinese</option>
                          <option value="ja">Japanese</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">About Me</label>
                      <textarea
                        name="aboutMe"
                        value={formData.aboutMe}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Write a brief introduction about yourself"
                        rows="4"
                      ></textarea>
                    </div>
                  </>
                )}

                {selectedStep === 4 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select country</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                        <option value="in">India</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your city"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Postal/Zip Code</label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter postal code"
                        />
                      </div>
                    </div>
                  </>
                )}

                {selectedStep === 5 && (
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Your account is already secured with your login credentials. Proceed to the next step to complete
                      your portfolio registration.
                    </p>
                  </div>
                )}

                {selectedStep === 6 && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-blue-800 mb-4">Almost Done!</h3>
                      <p className="text-blue-700 mb-4">
                        Please review your information before finalizing your portfolio registration.
                      </p>
                      <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span className="text-gray-700">Personal information collected</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span className="text-gray-700">Contact details verified</span>
                      </div>
                      <div className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span className="text-gray-700">Account linked to your login</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4 mt-1"
                          required
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          I agree to the{" "}
                          <Link to="/privacy-policy" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </Link>{" "}
                          and Terms of Service
                        </span>
                      </label>
                    </div>

                    <div className="flex justify-center gap-4 pt-6">
                      <button
                        type="button"
                        onClick={handleSave}
                        className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={handleCompleteRegistration}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Complete Registration
                      </button>
                    </div>
                  </div>
                )}

                {selectedStep < 6 && (
                  <div className="flex justify-between pt-6 border-t border-gray-100 mt-8">
                    <button
                      type="button"
                      className={`px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors ${
                        selectedStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={() => selectedStep > 1 && setSelectedStep(selectedStep - 1)}
                      disabled={selectedStep === 1}
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={() => setSelectedStep(selectedStep + 1)}
                    >
                      Continue
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;