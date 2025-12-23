import { useState, type ChangeEvent, type FormEvent, type JSX } from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FloatingFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}

interface SocialBtnProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted! In production, connect to EmailJS/Formspree.");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-28">
      {/* Heading */}
      <div className="mb-20 text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#ff2d55]" />
          <p className="text-[#ff2d55] text-sm tracking-widest">GET IN TOUCH</p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#ff2d55]" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Let's Build Something
          <span className="block text-[#ff2d55]">Amazing Together</span>
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left card */}
        <div className="group relative">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Suventhini Sivalingam
            </h3>
<div className="inline-flex items-center gap-2 mt-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
  <p className="text-cyan-300 text-sm font-medium">Available for work</p>
</div>

            <p className="mt-6 text-white/70 leading-relaxed">
              I'm passionate about creating exceptional digital experiences. Whether you need a complete application or technical consultation, I'm here to help.
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-[#ff2d55]/20 transition group">
                <div className="h-12 w-12 rounded-lg bg-[#ff2d55]/10 flex items-center justify-center group-hover:scale-110 transition">
                  <FaPhoneAlt className="text-[#ff2d55]" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Phone</p>
                  <p className="font-semibold">+94 772 153 646</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-[#ff2d55]/20 transition group">
                <div className="h-12 w-12 rounded-lg bg-[#ff2d55]/10 flex items-center justify-center group-hover:scale-110 transition">
                  <FaEnvelope className="text-[#ff2d55]" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Email</p>
                  <p className="font-semibold">suventhinisivalingam02@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="text-sm tracking-widest text-white/60 mb-4">CONNECT WITH ME</p>
              <div className="flex gap-3">
                <SocialBtn 
                  href="https://github.com/Suveh" 
                  icon={<FaGithub />} 
                  label="GitHub" 
                />
                <SocialBtn 
                  href="https://www.linkedin.com/in/suveh03" 
                  icon={<FaLinkedinIn />} 
                  label="LinkedIn" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="relative">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FloatingField 
                  label="Your Name" 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FloatingField 
                  label="Phone Number" 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <FloatingField 
                label="Email Address" 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <FloatingField 
                label="Subject" 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full rounded-xl bg-black/20 border border-white/10 px-4 py-4 text-white/90 outline-none focus:border-[#ff2d55] transition pt-6 min-h-[180px] resize-none"
                  placeholder=" "
                  required
                />
                <label className="absolute left-4 top-4 text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#ff2d55] pointer-events-none bg-[#1a1a1a] px-2">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="group relative w-full rounded-xl bg-gradient-to-r from-[#ff2d55] to-purple-600 py-4 font-semibold tracking-widest text-white transition-all hover:shadow-[0_10px_40px_rgba(255,45,85,0.3)]"
              >
                <span className="relative z-10">SEND MESSAGE</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingField({ label, type, name, value, onChange, required = false }: FloatingFieldProps) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="peer w-full rounded-xl bg-black/20 border border-white/10 px-4 py-4 text-white/90 outline-none focus:border-[#ff2d55] transition pt-6"
        placeholder=" "
        required={required}
      />
      <label className="absolute left-4 top-4 text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#ff2d55] pointer-events-none bg-[#1a1a1a] px-2">
        {label}
        {required && <span className="text-[#ff2d55] ml-1">*</span>}
      </label>
    </div>
  );
}

function SocialBtn({ href, icon, label }: SocialBtnProps): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-14 w-14 rounded-xl bg-black/20 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all hover:border-[#ff2d55] hover:scale-110"
      aria-label={label}
    >
      <span className="text-xl transition-transform group-hover:scale-110">
        {icon}
      </span>
    </a>
  );
}

export default Contact;