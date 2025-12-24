import { useState, useRef } from 'react';
import type { JSX, ReactNode } from 'react';
import { FaGraduationCap, FaBriefcase, FaAward, FaCode, FaTools, FaLanguage } from 'react-icons/fa';

type TabType = 'education' | 'projects' | 'skills' | 'achievements' | 'languages';

interface TabItem {
  id: TabType;
  label: string;
  icon: ReactNode;
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  children: ReactNode;
}

interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  details: string[];
  tags: string[];
  color: string;
}

interface TimelineItemProps {
  item: EducationItem;
  index: number;
}

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface ProjectItem {
  name: string;
  type: string;
  period: string;
  description: string[];
  technologies: string[];
  status: string;
}

interface AchievementItem {
  icon: string;
  title: string;
  description: string;
}

interface LanguageItem {
  language: string;
  proficiency: string;
  level: number;
}

function Resume() {
  const [activeTab, setActiveTab] = useState<TabType>('education');
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="resume" className="relative mx-auto max-w-6xl px-5 py-28">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ff2d55]/10 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#ff2d55]" />
          <p className="text-[#ff2d55] text-sm tracking-widest">MY JOURNEY</p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#ff2d55]" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold">
          My <span className="bg-gradient-to-r from-[#ff2d55] to-purple-600 bg-clip-text text-transparent">Resume</span>
        </h2>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          Education, projects, and skills that shape my development journey
        </p>
      </div>

      {/* Animated tabs */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-px -bottom-4" />
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              icon={tab.icon}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>
      </div>

      {/* Content with smooth transitions */}
      <div ref={containerRef} className="animate-fade-up">
        {activeTab === 'education' && <EducationTimeline />}
        {activeTab === 'projects' && <ProjectsShowcase />}
        {activeTab === 'skills' && <SkillsGrid />}
        {activeTab === 'achievements' && <AchievementsShowcase />}
        {activeTab === 'languages' && <LanguagesSection />}
      </div>
    </section>
  );
}

const tabs: TabItem[] = [
  { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
  { id: 'projects', label: 'Projects', icon: <FaBriefcase /> },
  { id: 'skills', label: 'Skills', icon: <FaCode /> },
  { id: 'languages', label: 'Languages', icon: <FaLanguage /> },
  { id: 'achievements', label: 'Achievements', icon: <FaAward /> },
];

function TabButton({ active, onClick, icon, children }: TabButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-all duration-300 ${
        active
          ? 'bg-gradient-to-r from-[#ff2d55]/20 to-purple-600/20 border border-[#ff2d55]/30 text-white shadow-[0_10px_30px_rgba(255,45,85,0.15)]'
          : 'bg-white/5 border border-white/10 text-white/70 hover:border-white/20 hover:text-white'
      }`}
    >
      <span className={`text-lg transition-transform group-hover:scale-110 ${active ? 'text-[#ff2d55]' : ''}`}>
        {icon}
      </span>
      <span className="text-sm">{children}</span>
      {active && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#ff2d55] to-purple-600 rounded-full" />
      )}
    </button>
  );
}

function EducationTimeline(): JSX.Element {
  const educationData: EducationItem[] = [
    {
      year: "Feb 2023 – Present",
      title: "B.Sc. Engineering (Hons.) in Computer Engineering",
      institution: "University of Sri Jayewardenepura, Nugegoda",
      description: "Third-year Computer Engineering student focused on software development, algorithms, and AI integration",
      details: ["GPA: 3.35/4.0", "Minoring in Data Management", "Focus on Full Stack Development and Data Science"],
      tags: ["Software Engineering", "Data Structures", "OOP", "AI Integration"],
      color: "from-[#ff2d55] to-pink-600",
    },
    {
      year: "Sep 2019 – Feb 2022",
      title: "GCE Advanced Level - Physical Science Stream",
      institution: "J/Victoria College, Chulipuram, Jaffna",
      description: "Specialized in Mathematics and Sciences with excellent academic performance",
      details: ["Combined Mathematics: A", "Physics: B", "Chemistry: A"],
      tags: ["Mathematics", "Physics", "Chemistry", "Analytical Skills"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      year: "2013 – 2018",
      title: "GCE Ordinary Level",
      institution: "J/Victoria College, Chulipuram, Jaffna",
      description: "Foundation in core subjects with distinction in key areas",
      details: ["Distinction in Mathematics and ICT", "Commerce & Drama"],
      tags: ["ICT", "Commerce", "Drama", "Foundation"],
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff2d55] via-purple-600 to-transparent md:left-1/2 md:-translate-x-1/2" />
      
      <div className="space-y-12">
        {educationData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: TimelineItemProps): JSX.Element {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
      {/* Timeline dot */}
      <div className="relative z-10">
        <div className={`h-6 w-6 rounded-full bg-gradient-to-r ${item.color}`} />
        <div className="absolute inset-0 h-6 w-6 rounded-full bg-gradient-to-r animate-ping opacity-20" />
      </div>
      
      {/* Content card */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : ''}`}>
        <div className="group relative rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
          <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
          
          <div className="relative">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} bg-opacity-10 border border-white/20 mb-4`}>
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-white to-white/80" />
              <span className="text-sm font-medium text-white">{item.year}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-[#ff2d55] font-medium mb-3">{item.institution}</p>
            <p className="text-white/70 mb-3">{item.description}</p>
            
            <div className="space-y-2 mb-4">
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-white/80 text-sm">• {detail}</p>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-black/30 border border-white/10 text-sm text-white/70 hover:border-[#ff2d55] hover:text-[#ff2d55] transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsGrid(): JSX.Element {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 85, color: "from-red-500 to-orange-500" },
        { name: "C++", level: 80, color: "from-blue-500 to-indigo-600" },
        { name: "Python", level: 75, color: "from-blue-400 to-cyan-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "SQL", level: 80, color: "from-blue-300 to-cyan-400" },
        { name: "Dart", level: 80, color: "from-blue-400 to-cyan-300" },
      ],
    },
    {
      title: "Web & Mobile Development",
      skills: [
        { name: "React.js", level: 85, color: "from-cyan-300 to-blue-400" },
        { name: "Flutter", level: 85, color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", level: 75, color: "from-green-500 to-emerald-400" },
        { name: "Next.js", level: 70, color: "from-gray-400 to-gray-600" },
        { name: "HTML5/CSS3", level: 90, color: "from-orange-500 to-pink-500" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-cyan-500" },
      ],
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Firebase", level: 85, color: "from-yellow-500 to-orange-500" },
        { name: "MySQL", level: 85, color: "from-blue-400 to-cyan-300" },
        { name: "MongoDB", level: 70, color: "from-green-400 to-emerald-500" },
        { name: "PostgreSQL", level: 65, color: "from-blue-500 to-indigo-500" },
        { name: "VS Code", level: 95, color: "from-blue-400 to-indigo-500" },
        { name: "Figma", level: 75, color: "from-purple-500 to-pink-500" },
      ],
    },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {skillCategories.map((category, catIdx) => (
        <div
          key={catIdx}
          className="group rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#ff2d55] to-purple-600 flex items-center justify-center">
              <FaTools className="text-white text-lg" />
            </div>
            <h3 className="text-xl font-bold text-white">{category.title}</h3>
          </div>
          <div className="space-y-6">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium">{skill.name}</span>
                  <span className="text-[#ff2d55] font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsShowcase(): JSX.Element {
  const projects: ProjectItem[] = [
    {
      name: "Cookify",
      type: "Software Engineering Project - Semester 4",
      period: "Feb 2024 – Sept 2024",
      description: [
        "Mobile application that helps users find recipes based on available ingredients",
        "Assists individuals in exploring new dishes and busy professionals in preparing quick meals",
        "Reduces food waste by suggesting recipes dynamically based on selected or leftover ingredients",
        "Helps students manage groceries efficiently"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Git & GitHub"],
      status: "Completed"
    },
    {
      name: "Grocery Store E-commerce Platform",
      type: "Individual Project",
      period: "Oct 2025 – Dec 2025",
      description: [
        "Full-stack grocery shopping web application with product browsing, cart management, and order placement",
        "Implemented secure user authentication, shopping cart functionality, and order management",
        "Designed responsive interface with product search, category filtering, and real-time updates",
        "Built scalable backend with RESTful APIs and database relationships"
      ],
      technologies: ["Next.js", "React.js", "Strapi CMS", "PostgreSQL", "Tailwind CSS", "Git & GitHub"],
      status: "Completed"
    },
    {
      name: "Moodify",
      type: "Computer Engineering Project - Semester 5",
      period: "June 2025 – Nov 2025",
      description: [
        "Mobile mental wellness application detecting user emotions using image-based facial analysis and voice emotion recognition",
        "Engineered modular meditation systems (Stress, Focus, Sleep) with clean UI separation",
        "Developed feature-rich offline audio playback system with real-time progress tracking",
        "Implemented locally stored media assets and smooth navigation flows"
      ],
      technologies: ["React Native", "Expo", "Expo AV", "Expo Router", "React Hooks", "Animated API"],
      status: "Completed"
    },
    {
      name: "Trip Planner",
      type: "Individual Project",
      period: "Feb 2025 – May 2025",
      description: [
        "Web application for efficient trip planning with destination, accommodation, and activity organization",
        "Provides real-time suggestions for routes, attractions, and travel options",
        "Features interactive maps, itinerary management, and AI-based recommendations",
        "Enhances user travel experience with personalized trip planning"
      ],
      technologies: ["React.js", "Firebase", "Git & GitHub", "Maps API"],
      status: "Completed"
    }
  ];

  return (
    <div className="space-y-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="group rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                <span className="px-3 py-1 rounded-full bg-[#ff2d55]/10 border border-[#ff2d55]/20 text-sm text-[#ff2d55] font-medium">
                  {project.status}
                </span>
              </div>
              <p className="text-[#ff2d55] font-medium mb-1">{project.type}</p>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span className="px-2 py-1 rounded bg-white/5">{project.period}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">Project Details:</h4>
            <ul className="space-y-2">
              {project.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2 text-white/70">
                  <span className="text-[#ff2d55] mt-1">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white/70 hover:border-[#ff2d55] hover:text-[#ff2d55] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LanguagesSection(): JSX.Element {
  const languages: LanguageItem[] = [
    {
      language: "Tamil",
      proficiency: "Native Speaker",
      level: 100,
    },
    {
      language: "English",
      proficiency: "Advanced",
      level: 85,
    },
    {
      language: "Sinhala",
      proficiency: "Conversational",
      level: 50,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {languages.map((lang, idx) => (
        <div
          key={idx}
          className="group rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{lang.language}</h3>
            <span className="px-3 py-1 rounded-full bg-[#ff2d55]/10 border border-[#ff2d55]/20 text-sm text-[#ff2d55] font-medium">
              {lang.proficiency}
            </span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Proficiency Level</span>
              <span className="text-[#ff2d55] font-medium">{lang.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ff2d55] to-purple-600 transition-all duration-1000 ease-out"
                style={{ width: `${lang.level}%` }}
              />
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-2 text-white/60 text-sm">
            <FaLanguage className="text-[#ff2d55]" />
            <span>Professional working proficiency</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AchievementsShowcase(): JSX.Element {
  const achievementsData: AchievementItem[] = [
    {
      icon: "🎓",
      title: "High Academic Achievement",
      description: "GPA: 3.41/4.0 in Computer Engineering at University of Sri Jayewardenepura",
    },
    {
      icon: "📚",
      title: "Certifications",
      description: "HackerRank SQL (Basic & Intermediate), JavaScript, Coursera Git/GitHub, HTML/CSS/JavaScript",
    },
    {
      icon: "💼",
      title: "Leadership Experience",
      description: "Assistant Senior Prefect at J/Victoria College, demonstrating leadership skills",
    },
    {
      icon: "🎭",
      title: "Cultural Activities",
      description: "Active dancer in school and university cultural performances",
    },
    {
      icon: "🤝",
      title: "University Clubs",
      description: "Member of Adventure Club and Career Guidance Society at university",
    },
    {
      icon: "🚀",
      title: "Project Portfolio",
      description: "4+ completed software projects across web, mobile, and full-stack development",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {achievementsData.map((achievement, idx) => (
        <div
          key={idx}
          className="group rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#ff2d55] to-purple-600 flex items-center justify-center text-2xl text-white mb-4">
              {achievement.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
            <p className="text-white/70 text-sm">{achievement.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Resume;