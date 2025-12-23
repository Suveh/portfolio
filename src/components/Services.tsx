import { FaMobileAlt, FaGlobe, FaServer, FaPalette, FaCode, FaRocket } from 'react-icons/fa';
import { useState, type JSX } from 'react';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  technologies?: string[];
  projects?: string[];
}

function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-28">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#ff2d55]" />
          <p className="text-[#ff2d55] text-sm tracking-widest">MY EXPERTISE</p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#ff2d55]" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold">
          Services I <span className="bg-gradient-to-r from-[#ff2d55] to-purple-600 bg-clip-text text-transparent">Provide</span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            isExpanded={expandedService === index}
            onToggle={() => toggleService(index)}
          />
        ))}
      </div>
    </section>
  );
}

const servicesData: Service[] = [
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Building responsive mobile applications for Android with Flutter",
    features: [
      "Cross-platform development with Flutter",
      "Responsive UI design for all screen sizes",
      "State management with Provider/Riverpod",
      "Native Android feature integration",
      "App performance optimization"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Provider", "Android Studio"],
    projects: ["Moodify - Wellness Tracker", "Cookify - Recipe Finder", "Student Attendance System"]
  },
  {
    icon: <FaGlobe />,
    title: "Full-Stack Web Development",
    description: "Creating responsive web applications with modern frameworks",
    features: [
      "Frontend development with React.js",
      "Responsive design with Tailwind CSS",
      "Backend integration with Firebase/Strapi",
      "REST API consumption and implementation",
      "Database design and management"
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Firebase", "Strapi"],
    projects: ["Trip Planning System", "Grocery Store Management", "Restaurant Website"]
  },
  {
    icon: <FaServer />,
    title: "Backend & Database Development",
    description: "Designing and implementing server-side logic and databases",
    features: [
      "Database design with MySQL & MongoDB",
      "API development with Node.js/Express",
      "Data modeling and optimization",
      "Authentication and authorization",
      "Server deployment and maintenance"
    ],
    technologies: ["Node.js", "Express.js", "MySQL", "MongoDB", "Firebase"],
    projects: ["YouTube Trends Analyzer", "Orphanage Management System", "E-commerce Backend"]
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design & Frontend Development",
    description: "Designing user-friendly interfaces and implementing them with code",
    features: [
      "Wireframing and prototyping",
      "User-centered design principles",
      "Responsive layout implementation",
      "Component-based architecture",
      "Performance optimization"
    ],
    technologies: ["Figma", "React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    projects: ["Portfolio Websites", "Admin Dashboards", "E-commerce Interfaces"]
  }
];

interface ServiceCardProps {
  service: Service;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ServiceCard({ service, isExpanded, onToggle }: ServiceCardProps): JSX.Element {
  return (
    <div 
      className="group rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-8 hover:border-[#ff2d55]/40 transition-all duration-300 cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#ff2d55] to-purple-600 p-0.5">
          <div className="h-full w-full rounded-2xl bg-[#1a1a1a] flex items-center justify-center">
            <span className="text-2xl text-white">{service.icon}</span>
          </div>
        </div>
        
        <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-white/70 mb-6">{service.description}</p>

      {/* Always visible features */}
      <div className="space-y-2 mb-6">
        {service.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff2d55] mt-2 flex-shrink-0" />
            <span className="text-sm text-white/60">{feature}</span>
          </div>
        ))}
      </div>

      {/* Expandable content */}
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-6 border-t border-white/10">
          {/* Additional features */}
          <div className="space-y-2 mb-6">
            {service.features.slice(3).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#ff2d55] mt-2 flex-shrink-0" />
                <span className="text-sm text-white/60">{feature}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          {service.technologies && (
            <div className="mb-6">
              <p className="text-sm font-medium text-white/80 mb-3">Technologies I use:</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-black/30 border border-white/10 text-sm text-white/60 hover:text-[#ff2d55] transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project examples */}
          {service.projects && (
            <div>
              <p className="text-sm font-medium text-white/80 mb-3">Project examples:</p>
              <div className="space-y-2">
                {service.projects.map((project, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FaCode className="text-[#ff2d55] text-sm" />
                    <span className="text-sm text-white/60">{project}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff2d55] to-purple-600 text-white font-semibold text-sm hover:shadow-[0_10px_30px_rgba(255,45,85,0.3)] transition-all"
          >
            <FaRocket />
            Start a Project
          </a>
        </div>
      </div>

      {/* View details button */}
      {!isExpanded && (
        <div className="flex items-center gap-2 text-sm text-[#ff2d55] font-medium mt-4">
          <span>View details</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Services;