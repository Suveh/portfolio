import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaFileAlt, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profile from "../assets/suventhini.png";

function DrawerLink({
  href,
  icon,
  children,
  onClick,
  active = false
}: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
        active 
          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white' 
          : 'text-white/70 hover:text-white hover:bg-white/5'
      }`}
    >
      {icon && <span className={`text-lg ${active ? 'text-cyan-400' : ''}`}>{icon}</span>}
      <span className="font-medium">{children}</span>
    </a>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-14 w-14 rounded-2xl bg-black/20 border border-white/10
                 flex items-center justify-center text-white/70
                 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110
                 transition-all duration-300"
    >
      <span className="text-2xl">{icon}</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll
      const sections = ['home', 'services', 'projects', 'resume', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'services', label: 'Services', icon: <FaUser /> },
    { id: 'projects', label: 'Projects', icon: <FaBriefcase /> },
    { id: 'resume', label: 'Resume', icon: <FaFileAlt /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Top bar with scroll effect */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#141414]/95 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}>
        <div className="mx-auto max-w-6xl px-5 flex items-center justify-between">
          {/* Left: avatar + name with hover effect */}
          <div 
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-cyan-500 transition-all duration-300">
                <img src={profile} alt="Suventhini" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <div>
              <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Suventhini</div>
              <div className="text-xs text-white/60">Full Stack Developer</div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`${activeSection === item.id ? 'text-cyan-400' : ''}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-full" />
                )}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:scale-105 transition-all"
            >
              Hire Me
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden h-12 w-12 rounded-xl bg-white/5 border border-white/10
                       flex items-center justify-center text-white/80
                       hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-105 transition-all"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={[
          "fixed inset-0 z-[60] md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Dark overlay */}
        <div
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Left drawer panel */}
        <aside
          className={[
            "absolute left-0 top-0 h-full w-[85%] max-w-sm",
            "bg-gradient-to-b from-[#141414] to-[#0a0a0a] border-r border-white/10",
            "transition-transform duration-500 ease-out",
            open ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          {/* Drawer header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-cyan-500">
                    <img src={profile} alt="Suventhini" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-30" />
                </div>
                <div>
                  <div className="font-bold text-white">Suventhini Sivalingam</div>
                  <div className="text-sm text-cyan-400">Full Stack Developer</div>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="h-10 w-10 rounded-xl bg-white/5 border border-white/10
                           flex items-center justify-center text-white/80 hover:text-cyan-400 hover:border-cyan-500 transition-all"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="p-6 space-y-2">
            {navItems.map((item) => (
              <DrawerLink
                key={item.id}
                href={`#${item.id}`}
                icon={item.icon}
                onClick={() => scrollToSection(item.id)}
                active={activeSection === item.id}
              >
                {item.label}
              </DrawerLink>
            ))}
          </div>

          {/* Contact Info in Drawer */}
          <div className="p-6 border-t border-white/10 mt-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <FaEnvelope className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <div className="text-white font-medium">suventhinisivalingam02@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="p-6 border-t border-white/10">
            <p className="text-sm text-white/60 mb-4">CONNECT WITH ME</p>
            <div className="flex gap-4">
              <SocialIcon
                href="https://github.com/Suveh"
                icon={<FaGithub />}
                label="GitHub"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/suveh03"
                icon={<FaLinkedinIn />}
                label="LinkedIn"
              />
            </div>
          </div>

          {/* Hire Me CTA in Drawer */}
          <div className="p-6 pt-0">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all"
            >
              Start a Project
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}