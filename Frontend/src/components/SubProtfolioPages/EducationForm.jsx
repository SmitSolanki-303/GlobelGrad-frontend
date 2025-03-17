// // EducationForm.jsx
// import React from 'react';

// const EducationForm = ({ formData, setFormData }) => {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div >
//       <h2 className="text-3xl font-bold mb-6">Education Details</h2>
      
//       {/* 10th Education */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-4">10th Standard</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="school10"
//             placeholder="School Name"
//             onChange={handleChange}
//             value={formData.school10}
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="percentage10"
//             placeholder="Percentage"
//             onChange={handleChange}
//             value={formData.percentage10}
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="board10"
//             placeholder="Board"
//             onChange={handleChange}
//             value={formData.board10}
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="passingYear10"
//             placeholder="Passing Year"
//             onChange={handleChange}
//             value={formData.passingYear10}
//             className="p-2 border rounded"
//           />
//         </div>
//       </div>

//       {/* 12th Education */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-4">12th Standard</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="school12"
//             placeholder="School Name"
//             onChange={handleChange}
//             value={formData.school12}
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="percentage12"
//             placeholder="Percentage"
//             onChange={handleChange}
//             value={formData.percentage12}
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="board12"
//             placeholder="Board"
//             onChange={handleChange}
//             value={formData.board12}
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="passingYear12"
//             placeholder="Passing Year"
//             onChange={handleChange}
//             value={formData.passingYear12}
//             className="p-2 border rounded"
//           />
//         </div>
//       </div>

//       {/* College Education */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-4">College Details</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="collegeName"
//             placeholder="College Name"
//             onChange={handleChange}
//             value={formData.collegeName}
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="degree"
//             placeholder="Degree"
//             onChange={handleChange}
//             value={formData.degree}
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="cgpa"
//             placeholder="CGPA"
//             onChange={handleChange}
//             value={formData.cgpa}
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="graduationYear"
//             placeholder="Graduation Year"
//             onChange={handleChange}
//             value={formData.graduationYear}
//             className="p-2 border rounded"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationForm;



// EducationForm.jsx
import React, { useState } from 'react';
import { db } from '../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';

const EducationForm = ({ formData = {}, setFormData, userId }) => { // Default to empty object
  const [error, setError] = useState(null);

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData((prev) => ({
    //     ...prev,
    //     [name]: value,
    //   }));
    // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async () => {
    try {
      if (!userId) {
        throw new Error('User ID is missing. Please register or log in first.');
      }

      const educationData = {
        school10: formData.school10 || '',
        percentage10: formData.percentage10 || '',
        board10: formData.board10 || '',
        passingYear10: formData.passingYear10 || '',
        school12: formData.school12 || '',
        percentage12: formData.percentage12 || '',
        board12: formData.board12 || '',
        passingYear12: formData.passingYear12 || '',
        collegeName: formData.collegeName || '',
        degree: formData.degree || '',
        cgpa: formData.cgpa || '',
        graduationYear: formData.graduationYear || '',
        userId,
        updatedAt: new Date().toISOString(),
      };

      await setDoc(doc(db, 'education', userId), educationData, { merge: true });
      alert('Education details saved successfully!');
    } catch (err) {
      console.error('Error saving education:', err.message);
      setError(`Failed to save education details: ${err.message}`);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Education Details</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* 10th Education */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">10th Standard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
            <input
              type="text"
              name="school10"
              placeholder="School Name"
              onChange={handleChange}
              value={formData.school10 || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Percentage</label>
            <input
              type="number"
              name="percentage10"
              placeholder="Percentage"
              onChange={handleChange}
              value={formData.percentage10 || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Board</label>
            <input
              type="text"
              name="board10"
              placeholder="Board"
              onChange={handleChange}
              value={formData.board10 || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Passing Year</label>
            <input
              type="number"
              name="passingYear10"
              placeholder="Passing Year"
              onChange={handleChange}
              value={formData.passingYear10 || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
        </div>
      </div>

      {/* 12th Education */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">12th Standard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
            <input
              type="text"
              name="school12"
              placeholder="School Name"
              onChange={handleChange}
              value={formData.school12 || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Percentage</label>
            <input
              type="number"
              name="percentage12"
              placeholder="Percentage"
              onChange={handleChange}
              value={formData.percentage12 || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Board</label>
            <input
              type="text"
              name="board12"
              placeholder="Board"
              onChange={handleChange}
              value={formData.board12 || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Passing Year</label>
            <input
              type="number"
              name="passingYear12"
              placeholder="Passing Year"
              onChange={handleChange}
              value={formData.passingYear12 || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
        </div>
      </div>

      {/* College Education */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">College Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">College Name</label>
            <input
              type="text"
              name="collegeName"
              placeholder="College Name"
              onChange={handleChange}
              value={formData.collegeName || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              onChange={handleChange}
              value={formData.degree || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CGPA</label>
            <input
              type="number"
              name="cgpa"
              placeholder="CGPA"
              onChange={handleChange}
              value={formData.cgpa || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
            <input
              type="number"
              name="graduationYear"
              placeholder="Graduation Year"
              onChange={handleChange}
              value={formData.graduationYear || ''} // Ensure controlled input
              className="p-2 border rounded w-full"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Save Education
      </button>
    </div>
  );
};

export default EducationForm;