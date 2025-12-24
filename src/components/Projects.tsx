import { useState, type JSX } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import groceryStoreImage from "../assets/grocery-store.png";
import youtubeTrendsImage from "../assets/youtube-trends-analyzer.png";
import tripPlannerImage from "../assets/trip-planner.png";
import cookifyImage from "../assets/cookify.png";
import moodifyImage from "../assets/moodify.jpeg";


interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  github?: string;
  features?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Moodify - Wellness Tracker",
      description: "A Flutter-based mobile application that tracks mood patterns and suggests personalized wellness activities. Features mood logging, activity recommendations, and progress visualization.",
      image: moodifyImage,
      tags: ["Flutter", "React Native", "Firebase", "Mobile App"],
      features: ["Mood tracking", "Personalized recommendations", "Progress analytics", "User authentication"],
      github: "https://github.com/Remi2121/Project"
    },
    {
         title: "Cookify - Recipe Finder",
    description: "Flutter mobile app that helps users find recipes based on available ingredients. Features ingredient-based search, recipe saving, and meal planning for efficient cooking.",
    image: cookifyImage,
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Mobile App"],
    features: [
      "Ingredient-based recipe search",
      "User authentication with Firebase",
      "Recipe saving & favorites",
      "Shopping list generation",
      "Step-by-step cooking guide"
    ],
      github: "https://github.com/MathurakshiMahendrarajah/MobileApp"
    },
    {
      title: "Trip Planner AI",
    description: "Full-stack web application for AI-powered trip planning with itinerary management, Google Maps integration, and Gemini AI suggestions for personalized travel experiences.",
    image: tripPlannerImage,
    tags: ["React.js", "Firebase", "Google Places API", "Gemini AI", "Tailwind CSS"],
    features: [
      "AI-powered travel suggestions",
      "Interactive itinerary management",
      "Google Maps integration",
      "User profiles & authentication",
      "Real-time data with Firestore"
    ],
      github: "https://github.com/Suveh/Trip-Planner-AI"
    },
    {
      title: "Grocery Store E-commerce",
    description: "Complete e-commerce platform with Next.js frontend, Strapi headless CMS backend, JWT authentication, shopping cart, and admin dashboard for product management.",
    image: groceryStoreImage,
    tags: ["Next.js", "Strapi CMS", "JWT Authentication", "Tailwind CSS", "E-commerce"],
    features: [
      "Full-stack e-commerce platform",
      "JWT-based user authentication",
      "Dynamic product catalog with filters",
      "Admin dashboard for management",
      "Responsive mobile-first design"
    ],
      github: "hhttps://github.com/Suveh/Grocery_Store"
    },
    {
      title: "YouTube Trends Analyzer",
    description: "Streamlit web application that analyzes YouTube trending videos using YouTube Data API. Provides insights, data visualizations, and category analysis for content creators.",
    image: youtubeTrendsImage,
    tags: ["Python", "Streamlit", "YouTube Data API", "MySQL", "Plotly", "Data Analysis"],
    features: [
      "YouTube Data API integration",
      "Interactive data visualizations",
      "Trending video analysis",
      "Category insights dashboard",
      "MySQL database for storage"
    ],
      github: "https://github.com/Suveh/Youtube_Trend_Analyzer"
    }
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5">
      <div className="mb-20 text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#ff2d55]" />
          <p className="text-[#ff2d55] text-sm tracking-widest">MY PROJECTS</p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#ff2d55]" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold">
          Featured <span className="bg-gradient-to-r from-[#ff2d55] to-purple-600 bg-clip-text text-transparent">Work</span>
        </h2>
        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          Real-world applications built with modern technologies and best practices
        </p>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* View more projects link */}
      <div className="text-center mt-16">
        <a
          href="https://github.com/Suveh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff2d55] to-purple-600 text-white font-semibold hover:shadow-[0_10px_30px_rgba(255,45,85,0.3)] transition-all"
        >
          <FaGithub />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: ProjectCardProps): JSX.Element {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 overflow-hidden h-full transition-all duration-500 group-hover:border-[#ff2d55]/40">
        {/* Project image - FIXED */}
        <div className="relative h-56 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
          
          {/* Actual image - This is what you need to add */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Live preview button */}
          <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-[#ff2d55] hover:border-[#ff2d55] transition z-20">
            <FaExternalLinkAlt />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-lg bg-[#ff2d55]/10 flex items-center justify-center text-[#ff2d55] hover:bg-[#ff2d55] hover:text-white transition"
                >
                  <FaExternalLinkAlt size={12} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition"
                >
                  <FaGithub size={12} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-3 text-white/70 leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-black/30 border border-white/10 text-xs text-white/70 hover:border-[#ff2d55] hover:text-[#ff2d55] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hidden features on hover */}
          {hovered && project.features && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm font-medium text-white/80 mb-2">Key Features:</p>
              <ul className="space-y-1">
                {project.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#ff2d55]" />
                    <span className="text-xs text-white/60">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;