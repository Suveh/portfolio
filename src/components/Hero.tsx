import type { JSX } from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/profile.jpeg';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,45,85,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative mx-auto max-w-6xl px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
  <p className="text-sm text-blue-400">Currently available for projects</p>
</div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white">Hello, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-[#ff2d55] to-purple-600 bg-clip-text text-transparent">
              Suventhini
            </span>
          </h1>
          
          <div className="mt-6 text-2xl md:text-3xl font-semibold h-12">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'UI/UX Designer',
                2000,
                'Problem Solver',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white/80"
            />
          </div>
          
          <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-2xl">
            I craft <span className="text-[#ff2d55]">digital experiences</span> that blend beautiful design with robust engineering. Specializing in modern web technologies to build scalable, user-focused applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff2d55] to-purple-600 font-semibold text-white transition-all hover:shadow-[0_10px_40px_rgba(255,45,85,0.3)] hover:scale-105"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-[#ff2d55] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-black/30 border border-white/10 font-semibold text-white hover:border-[#ff2d55] hover:text-[#ff2d55] transition-all"
            >
              Let's Connect
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6">
            <Stat number="4+" label="Projects" />
            <Stat number="2+" label="Years Exp" />
            <Stat number="100%" label="Satisfaction" />
          </div>
        </div>
        
        {/* Right - Profile image with 3D effect */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff2d55] to-purple-600 rounded-2xl blur-3xl opacity-20 animate-pulse" />
            
            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 w-[380px] h-[500px] group">
              <img 
                src={profileImage} 
                alt="Suventhini Sivalingam" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Tech stack floating badges */}
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-gradient-to-br from-[#ff2d55] to-purple-600 flex items-center justify-center animate-float">
                <FaReact className="text-2xl text-white" />
              </div>
              
              <div 
                className="absolute -bottom-4 -left-4 h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <FaNodeJs className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/60">Scroll down</span>
          <div className="h-8 w-px bg-gradient-to-b from-[#ff2d55] to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
}

interface StatProps {
  number: string;
  label: string;
}

function Stat({ number, label }: StatProps): JSX.Element {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white">{number}</div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </div>
  );
}

export default Hero;