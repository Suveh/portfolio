import type { JSX } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaHeart } from 'react-icons/fa';

interface SocialIconProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

interface QuickLinkProps {
  href: string;
  children: React.ReactNode;
}

function Footer() {



  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#141414]">
      <div className="mx-auto max-w-6xl px-5 py-16 grid gap-10 md:grid-cols-3">
        {/* Left - Brand & Description */}
        <div>
          <h3 className="text-[#ff2d55] font-bold text-2xl mb-4">Suventhini</h3>
          <p className="text-white/60 leading-relaxed">
            Building modern, responsive web & mobile applications with clean UI and scalable backend.
            Passionate about creating digital experiences that make a difference.
          </p>
          
          <div className="flex gap-4 mt-6">
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

        {/* Middle - Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <QuickLink href="#home">Home</QuickLink>
            <QuickLink href="#services">Services</QuickLink>
            <QuickLink href="#projects">Projects</QuickLink>
            <QuickLink href="#resume">Resume</QuickLink>
            <QuickLink href="#contact">Contact</QuickLink>
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Contact Details</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/70 hover:text-white transition">
              <FaPhoneAlt className="text-[#ff2d55]" />
              <span>+94 772 153 646</span>
            </div>
            
            <a
              href="mailto:suventhinisivalingam02@gmail.com"
              className="flex items-center gap-3 text-white/70 hover:text-white transition"
            >
              <FaEnvelope className="text-[#ff2d55]" />
              <span>suventhinisivalingam02@gmail.com</span>
            </a>
          </div>

          


        </div>
      </div>

      {/* Bottom copyright */}
      <div className="py-6 text-center border-t border-white/5">
        <p className="text-white/40 text-sm">
          © {currentYear} Suventhini Sivalingam. All rights reserved.
          <span className="inline-flex items-center mx-2">
            Made with <FaHeart className="text-[#ff2d55] mx-1" size={12} /> by Suventhini
          </span>
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon, label }: SocialIconProps): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-12 w-12 rounded-xl bg-[#1b1b1b] border border-white/10
                 flex items-center justify-center text-white/70
                 hover:text-[#ff2d55] hover:border-[#ff2d55]/40
                 hover:-translate-y-0.5 transition"
    >
      <span className="text-lg">{icon}</span>
    </a>
  );
}

function QuickLink({ href, children }: QuickLinkProps): JSX.Element {
  return (
    <li>
      <a
        href={href}
        className="text-white/60 hover:text-[#ff2d55] transition"
      >
        {children}
      </a>
    </li>
  );
}

export default Footer;