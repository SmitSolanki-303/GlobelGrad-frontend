import React, { useState } from 'react';
import { Search, Briefcase, CheckCircle, XCircle, Sparkles } from 'lucide-react';

const JobMatcher = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [userSkills, setUserSkills] = useState([
    'React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'TypeScript'
  ]);
  const [matchResults, setMatchResults] = useState({
    matchPercentage: "85.5",
    matchedSkills: ['React', 'JavaScript', 'HTML', 'CSS'],
    missingSkills: ['Python', 'AWS'],
    totalKeywords: 15
  });
  const [newSkill, setNewSkill] = useState('');

  const analyzeMatch = () => {
    const keywords = jobDescription.toLowerCase().split(/[\s,]+/);
    const matches = userSkills.filter(skill => 
      keywords.includes(skill.toLowerCase())
    );
    const matchPercentage = (matches.length / userSkills.length) * 100;
    const commonTechSkills = ['javascript', 'python', 'react', 'node.js', 'sql', 'java', 'html', 'css'];
    const missingSkills = commonTechSkills.filter(skill => 
      !userSkills.map(s => s.toLowerCase()).includes(skill) && 
      keywords.includes(skill)
    );

    setMatchResults({
      matchPercentage: matchPercentage.toFixed(1),
      matchedSkills: matches,
      missingSkills,
      totalKeywords: keywords.length
    });
  };

  const addSkill = () => {
    if (newSkill && !userSkills.includes(newSkill)) {
      setUserSkills([...userSkills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setUserSkills(userSkills.filter(skill => skill !== skillToRemove));
  };

  return (
    <>
    <div className=" max-w-screen-2xl pt-40 mx-auto p-6  min-h-screen ">
      <div className="dark:bg-black dark:text-white space-y-8 ">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 ">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Job Description Matcher
            </h2>
            <p className="text-pink-100">Find out how well your skills match the job requirements</p>
          </div>
          <div className="p-6 dark:bg-black dark:text-white">
            <div className="space-y-6">
              <div className="dark:bg-black  bg-pink-50 p-4 rounded-lg border border-pink-200 ">
                <label className="block text-lg font-medium mb-2 text-pink-500 ">
                  Your Skills
                </label>
                <div className="flex gap-2 mb-2 ">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill (e.g., React, Python)"
                    className="dark:bg-black dark:text-white flex-1 px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <button 
                    onClick={addSkill}
                    className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {userSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white dark:bg-black  text-pink-500 px-3 py-1 rounded-full text-sm flex items-center gap-1 border border-pink-200 shadow-sm"
                    >
                      {skill}
                      <XCircle
                        className="h-4 w-4 cursor-pointer hover:text-pink-800"
                        onClick={() => removeSkill(skill)}
                      />
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium mb-2 text-pink-700 dark:text-pink-500">
                  Job Description
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the job description here..."
                  className=" dark:bg-black dark:text-white w-full h-48 px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button
                onClick={analyzeMatch}
                className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors flex items-center justify-center gap-2"
                disabled={!jobDescription || userSkills.length === 0}
              >
                <Search className="h-4 w-4" />
                Analyze Match
              </button>
            </div>
          </div>
        </div>

        {matchResults && (
          <div className="dark:bg-black dark:text-white bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Match Results
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600">
                  {matchResults.matchPercentage}%
                </div>
                <div className="text-gray-600 dark:text-white">Match Score</div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-pink-700 mb-2">
                    Matched Skills ({matchResults.matchedSkills.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {matchResults.matchedSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        <CheckCircle className="h-4 w-4" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {matchResults.missingSkills.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium text-pink-700 mb-2">
                      Missing Skills ({matchResults.missingSkills.length})
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {matchResults.missingSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                        >
                          <XCircle className="h-4 w-4" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="text-sm text-gray-600 border-t pt-4">
                Analyzed {matchResults.totalKeywords} keywords from the job description
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default JobMatcher;