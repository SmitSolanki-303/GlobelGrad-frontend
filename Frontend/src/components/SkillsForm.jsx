import React, { useState } from 'react';
import { Search, Plus, X, Code, Wrench, CircuitBoard, Users } from 'lucide-react';

// Main component that demonstrates usage
const SkillsFormDemo = () => {
  const [formData, setFormData] = useState({
    programmingLanguages: '',
    tools: '',
    technicalSkills: '',
    softSkills: ''
  });

  return <SkillsForm formData={formData} setFormData={setFormData} />;
};

// Default fallback icon for skills without specific logos
const DEFAULT_ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';

const SKILL_LOGOS = {
  programminglanguages: {
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    Ruby: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
    PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    Swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    Rust: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
    Go: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
  },
  tools: {
    Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    Kubernetes: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    Vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    Node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    VSCode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    Jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    Jira: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    Slack: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg'
  },
  technicalskills: {
    Linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    Nginx: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    Redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    Bash: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    GraphQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    Apache: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg'
  }
};

// Additional common variations of skill names
const SKILL_ALIASES = {
  'JavaScript': ['JS', 'javascript', 'Javascript'],
  'Python': ['python', 'py'],
  'React': ['ReactJS', 'react', 'React.js'],
  'Node': ['NodeJS', 'node', 'Node.js'],
  'PostgreSQL': ['Postgres', 'postgres'],
  'MongoDB': ['Mongo', 'mongo']
};

const CategoryCard = ({ icon: Icon, title, inputValue, onInputChange, onAdd, skills, onRemove }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const category = title.toLowerCase().replace(/\s+/g, '');

  const getCanonicalSkillName = (skill) => {
    const upperSkill = skill.trim();
    for (const [canonical, aliases] of Object.entries(SKILL_ALIASES)) {
      if (aliases.includes(upperSkill) || canonical === upperSkill) {
        return canonical;
      }
    }
    return upperSkill;
  };

  const getLogoUrl = (skill) => {
    const canonicalName = getCanonicalSkillName(skill);
    if (SKILL_LOGOS[category]?.[canonicalName]) {
      return SKILL_LOGOS[category][canonicalName];
    }
    // Check other categories for the skill
    for (const categoryLogos of Object.values(SKILL_LOGOS)) {
      if (categoryLogos[canonicalName]) {
        return categoryLogos[canonicalName];
      }
    }
    return DEFAULT_ICON;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-200 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-pink-100 rounded-lg">
          <Icon className="w-6 h-6 text-pink-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setTimeout(() => setIsInputFocused(false), 100)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onAdd();
            }
          }}
          placeholder={`Add ${title.toLowerCase()}`}
          className="w-full pl-10 pr-4 py-2 border-2 border-gray-100 rounded-lg focus:border-pink-300 focus:outline-none transition-colors"
        />
        <button
          onClick={onAdd}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-pink-50 rounded-full transition-colors"
        >
          <Plus className="w-5 h-5 text-pink-500" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className="group flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full text-sm font-medium animate-fadeIn"
          >
            <img 
              src={getLogoUrl(skill)} 
              alt={`${skill} logo`} 
              className="w-4 h-4 bg-white rounded-full p-0.5"
              onError={(e) => {
                e.target.src = DEFAULT_ICON;
              }}
            />
            {skill}
            <button
              onClick={() => onRemove(skill)}
              className="p-0.5 rounded-full opacity-60 hover:opacity-100 hover:bg-pink-400 transition-all"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

// Rest of the component remains the same
const SkillsForm = ({ formData, setFormData }) => {
  // ... (previous SkillsForm implementation remains unchanged)
  const [inputValues, setInputValues] = useState({
    programmingLanguages: '',
    tools: '',
    technicalSkills: '',
    softSkills: ''
  });

  const handleInputChange = (category, value) => {
    setInputValues(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const addSkill = (category) => {
    const skill = inputValues[category].trim();
    if (!skill) return;

    const currentSkills = formData[category] ? formData[category].split(',').map(s => s.trim()) : [];
    if (!currentSkills.includes(skill)) {
      setFormData(prev => ({
        ...prev,
        [category]: [...currentSkills, skill].join(', ')
      }));
    }
    setInputValues(prev => ({ ...prev, [category]: '' }));
  };

  const removeSkill = (category, skillToRemove) => {
    const currentSkills = formData[category].split(',').map(s => s.trim());
    setFormData(prev => ({
      ...prev,
      [category]: currentSkills.filter(skill => skill !== skillToRemove).join(', ')
    }));
  };

  const getSkillsArray = (category) => {
    return formData[category] ? formData[category].split(',').map(s => s.trim()).filter(Boolean) : [];
  };

  return (
    <div >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Skills</h2>
          
        </div>
        
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8">
        <CategoryCard
          icon={Code}
          title="Programming Languages"
          inputValue={inputValues.programmingLanguages}
          onInputChange={(value) => handleInputChange('programmingLanguages', value)}
          onAdd={() => addSkill('programmingLanguages')}
          skills={getSkillsArray('programmingLanguages')}
          onRemove={(skill) => removeSkill('programmingLanguages', skill)}
        />

        <CategoryCard
          icon={Wrench}
          title="Tools"
          inputValue={inputValues.tools}
          onInputChange={(value) => handleInputChange('tools', value)}
          onAdd={() => addSkill('tools')}
          skills={getSkillsArray('tools')}
          onRemove={(skill) => removeSkill('tools', skill)}
        />

        <CategoryCard
          icon={CircuitBoard}
          title="Technical Skills"
          inputValue={inputValues.technicalSkills}
          onInputChange={(value) => handleInputChange('technicalSkills', value)}
          onAdd={() => addSkill('technicalSkills')}
          skills={getSkillsArray('technicalSkills')}
          onRemove={(skill) => removeSkill('technicalSkills', skill)}
        />

        <CategoryCard
          icon={Users}
          title="Soft Skills"
          inputValue={inputValues.softSkills}
          onInputChange={(value) => handleInputChange('softSkills', value)}
          onAdd={() => addSkill('softSkills')}
          skills={getSkillsArray('softSkills')}
          onRemove={(skill) => removeSkill('softSkills', skill)}
        />
      </div>

      
    </div>
  );
};

export default SkillsFormDemo;