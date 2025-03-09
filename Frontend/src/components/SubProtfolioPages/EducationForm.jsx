// EducationForm.jsx
import React from 'react';

const EducationForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div >
      <h2 className="text-3xl font-bold mb-6">Education Details</h2>
      
      {/* 10th Education */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">10th Standard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="school10"
            placeholder="School Name"
            onChange={handleChange}
            value={formData.school10}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="percentage10"
            placeholder="Percentage"
            onChange={handleChange}
            value={formData.percentage10}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="board10"
            placeholder="Board"
            onChange={handleChange}
            value={formData.board10}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="passingYear10"
            placeholder="Passing Year"
            onChange={handleChange}
            value={formData.passingYear10}
            className="p-2 border rounded"
          />
        </div>
      </div>

      {/* 12th Education */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">12th Standard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="school12"
            placeholder="School Name"
            onChange={handleChange}
            value={formData.school12}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="percentage12"
            placeholder="Percentage"
            onChange={handleChange}
            value={formData.percentage12}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="board12"
            placeholder="Board"
            onChange={handleChange}
            value={formData.board12}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="passingYear12"
            placeholder="Passing Year"
            onChange={handleChange}
            value={formData.passingYear12}
            className="p-2 border rounded"
          />
        </div>
      </div>

      {/* College Education */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">College Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="collegeName"
            placeholder="College Name"
            onChange={handleChange}
            value={formData.collegeName}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            onChange={handleChange}
            value={formData.degree}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="cgpa"
            placeholder="CGPA"
            onChange={handleChange}
            value={formData.cgpa}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="graduationYear"
            placeholder="Graduation Year"
            onChange={handleChange}
            value={formData.graduationYear}
            className="p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationForm;