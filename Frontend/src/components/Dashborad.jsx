import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <Link to="/edit-profile" className="p-4 bg-blue-500 text-white rounded-lg text-center shadow-md">Edit Profile</Link>
        <Link to="/preview" className="p-4 bg-green-500 text-white rounded-lg text-center shadow-md">Preview Portfolio</Link>
      </div>
    </div>
  );
};

const Preview = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Portfolio Preview</h1>
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold">Your Name</h2>
        <p className="text-gray-700">A brief introduction or bio goes here.</p>
        <div className="mt-4">
          <h3 className="text-xl font-medium">Education</h3>
          <p>Details about your 10th, 12th, and college education.</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium">Experience</h3>
          <p>List of work experience and internships.</p>
        </div>
      </div>
    </div>
  );
};

export { Dashboard, Preview };
