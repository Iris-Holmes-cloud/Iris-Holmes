import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, PenTool, Lightbulb, Target } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900 font-serif-body selection:bg-brand-accent/20 selection:text-brand-accent">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (path: string, sectionId?: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== path) {
      navigate(path);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('/')}>
            <span className="text-2xl font-serif-display tracking-wide">Iris Holmes</span>
          </div>
          
          <div className="hidden md:flex space-x-12 items-center">
            <Link to="/work" className={`text-sm font-serif-body transition-colors ${location.pathname === '/work' ? 'text-brand-accent border-b border-brand-accent pb-1' : 'text-gray-600 hover:text-brand-accent'}`}>Work</Link>
            <Link to="/about" className={`text-sm font-serif-body transition-colors ${location.pathname === '/about' ? 'text-brand-accent border-b border-brand-accent pb-1' : 'text-gray-600 hover:text-brand-accent'}`}>About Me</Link>
            <button onClick={() => handleNavClick(location.pathname, 'contact')} className="text-sm font-serif-body text-gray-600 hover:text-brand-accent transition-colors">Contact</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-6 pt-4 pb-8 space-y-4 shadow-lg">
            <button onClick={() => handleNavClick('/work')} className="block w-full text-left text-lg font-serif-display text-gray-800 hover:text-brand-accent">Work</button>
            <button onClick={() => handleNavClick('/about')} className="block w-full text-left text-lg font-serif-display text-gray-800 hover:text-brand-accent">About Me</button>
            <button onClick={() => handleNavClick(location.pathname, 'contact')} className="block w-full text-left text-lg font-serif-display text-gray-800 hover:text-brand-accent">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Home() {
  return (
    <main>
      <div className="bg-white">
        <section id="home" className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="w-full max-w-sm aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/home.png" 
                  alt="Iris Holmes Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif-display text-brand-accent leading-[1.1] mb-8">
                Iris Holmes –<br />
                Ranking tech brands on Page1<br />
              </h1>
              <p className="text-sm text-gray-700 leading-relaxed mb-10 max-w-md">
                I'm a freelance SEO writer with 12 years of experience in the tech trenches. I don’t just write articles; I build high-performance assets that convert skeptics into users. From deep-dive technical guides to high-level SaaS strategy, I bridge the gap between complex code and human desire. I offer professional, data-backed, and timely content that builds the digital moat your brand deserves.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-900 px-8 py-3 text-sm font-sans tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
              >
                Get in touch
              </button>
            </div>
          </div>
        </section>

        <section className="pt-12 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <h6 className="text-brand-accent font-sans text-xs tracking-widest uppercase mb-16">MY STRENGTHS</h6>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <h3 className="text-3xl font-serif-display mb-6 text-gray-900">Strategic</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                SEO is more than keywords. I align every sentence with your business goals and user intent.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif-display mb-6 text-gray-900">Technical</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                I speak "tech." Whether it's Cloud Infra, AI, or SaaS, I translate complexity into clarity.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif-display mb-6 text-gray-900">Sustainable</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                I build for the long term. My content is designed to rank for years, not just days.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-gray-50">
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
          {/* My Services */}
          <h6 className="text-brand-accent font-sans text-xs tracking-widest uppercase mb-16">MY SERVICES</h6>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-32">
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <PenTool className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-3xl font-serif-display mb-6 text-gray-900">Content Creation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every piece of content I craft is built on a foundation of research, clarity, and purpose, designed to engage your audience and move them to action.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-3xl font-serif-display mb-6 text-gray-900">Strategy & Planning</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Great writing starts with a plan. I help map out content strategies that align with your goals, identify the right channels, and ensure every word serves a purpose.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-3xl font-serif-display mb-6 text-gray-900">Digital Marketing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                From email campaigns to landing pages, I write copy that converts, and create digital marketing content that doesn't just get noticed—it gets results.
              </p>
            </div>
          </div>

          {/* By the Numbers */}
          <div>
            <h6 className="text-brand-accent font-sans text-xs tracking-widest uppercase mb-16 text-left">BY THE NUMBERS</h6>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="border border-brand-accent p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 bg-white shadow-sm w-full flex flex-col justify-center">
                  <div className="text-5xl font-serif-display text-gray-900 mb-4">10+</div>
                  <div className="text-sm text-gray-600">Tech niches covered</div>
                </div>
                <div className="border border-brand-accent p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 bg-white shadow-sm w-full flex flex-col justify-center">
                  <div className="text-5xl font-serif-display text-gray-900 mb-4">12+ </div>
                  <div className="text-sm text-gray-600">Years experience in SaaS & tech writing</div>
                </div>
                <div className="border border-brand-accent p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 bg-white shadow-sm w-full flex flex-col justify-center">
                  <div className="text-5xl font-serif-display text-gray-900 mb-4">30+</div>
                  <div className="text-sm text-gray-600">Brands & clients served</div>
                </div>
                <div className="border border-brand-accent p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 bg-white shadow-sm w-full flex flex-col justify-center">
                  <div className="text-5xl font-serif-display text-gray-900 mb-4">100+</div>
                  <div className="text-sm text-gray-600">In-depth articles published each year</div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <LogoRing />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white">
        <WorkSection />
        <TestimonialsSection />
      </div>

      <ContactSection />
    </main>
  );
}

function About() {
  return (
    <main className="pt-24">
      {/* Section 1: Get to know me */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h6 className="text-brand-accent font-sans text-xs tracking-widest uppercase mb-8">Get To Know Me</h6>
            <h1 className="text-5xl md:text-6xl font-serif-display text-brand-accent leading-[1.1] mb-8">
              Deep thinking,<br />
              clear writing
            </h1>
            <div className="space-y-6 text-sm text-gray-700 leading-relaxed mb-10 max-w-lg">
              <p>
                My tech writing journey began with a simple question: How do you explain complex ideas so anyone can grasp them? Growing up, I was the go to friend for clarifying instructions or rewriting resumes, my unofficial first gig as a writer.
              </p>
              <p>
                After graduation, I dove into words as my craft: starting with small tech blogs, then software documentation, and finally niche SaaS storytelling. There's real joy in distilling intricate products into engaging, readable content.
              </p>
              <p>
              Twelve years in, I've written for many brands and products, reviewing AI tools, breaking down video downloaders, and guiding beginners on noise reduction. My mantra? Keep it clear, useful, and time efficient.
              </p>
              <p> Off duty, I'm testing the latest AI gadgets or buried in a book, old habits die hard.
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-900 px-8 py-3 text-sm font-sans tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
            >
              Get in touch
            </button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-sm aspect-[2/3] bg-gray-100 flex items-center justify-center overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/about.png" 
                alt="About Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Quote */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="flex justify-center">
              <div className="w-full max-w-sm aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/about%202.png" 
                  alt="About Landscape" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h6 className="text-brand-accent font-sans text-xs tracking-widest uppercase mb-8">Joyce A. Myers</h6>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display text-brand-accent leading-[1.2]">
                A pencil,<br />
                and a dream<br />
                can take you anywhere.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

function WorkSection() {
  const navigate = useNavigate();
  return (
    <section id="work" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h6 className="text-brand-accent font-sans text-xs tracking-widest uppercase mb-16">A Bit Of My Work</h6>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="group cursor-pointer" onClick={() => navigate('/work')}>
            <div className="w-full aspect-[3/2] bg-gray-100 flex items-center justify-center mb-6 overflow-hidden transition-opacity group-hover:opacity-90">
              <img 
                src="https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/work%202.png" 
                alt="Project 1 Thumbnail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-serif-display text-gray-900 underline decoration-1 underline-offset-8 group-hover:text-brand-accent transition-colors">
              In-depth product reviews
            </h3>
          </div>
          
          <div className="group cursor-pointer" onClick={() => navigate('/work')}>
            <div className="w-full aspect-[3/2] bg-gray-100 flex items-center justify-center mb-6 overflow-hidden transition-opacity group-hover:opacity-90">
              <img 
                src="https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/work%2022.png" 
                alt="Project 2 Thumbnail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-serif-display text-gray-900 underline decoration-1 underline-offset-8 group-hover:text-brand-accent transition-colors">
             Landing pages
            </h3>
          </div>

          <div className="group cursor-pointer" onClick={() => navigate('/work')}>
            <div className="w-full aspect-[3/2] bg-gray-100 flex items-center justify-center mb-6 overflow-hidden transition-opacity group-hover:opacity-90">
              <img 
                src="https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/work%201.png" 
                alt="Project 3 Thumbnail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-serif-display text-gray-900 underline decoration-1 underline-offset-8 group-hover:text-brand-accent transition-colors">
              Tech blogs & Tutorials
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h6 className="text-brand-accent font-sans text-xs tracking-widest uppercase mb-16">Testimonials</h6>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif-display mb-3 text-gray-900">Kate Charles</h3>
            <p className="font-sans text-xs text-gray-500 tracking-wide mb-8">Marketing Director</p>
            <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
              Iris didn't just write for us; she understood our product better than we did. Our organic traffic doubled in 6 months.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif-display mb-3 text-gray-900">Regina Howdy</h3>
            <p className="font-sans text-xs text-gray-500 tracking-wide mb-8">Project Manager</p>
            <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
              Iris is the most reliable technical writer I've ever worked with. Her ability to simplify complex topics is unmatched.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif-display text-brand-accent leading-[1.1]">
              Ready to scale?<br /> Let’s get in touch.
            </h2>
          </div>
          
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://formsubmit.co/ajax/we3401682@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });
        
        if (response.ok) {
          setShowPopup(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {isSubmitted && (
          <div className="bg-green-50 text-green-800 p-4 border border-green-200 text-sm font-sans">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        
        <div>
          <label htmlFor="name" className="block text-sm font-sans text-gray-700 mb-2">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-100 border-none focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-900 font-sans ${errors.name ? 'ring-1 ring-red-500' : ''}`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs font-sans text-red-500">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-sans text-gray-700 mb-2">Your email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-100 border-none focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-900 font-sans ${errors.email ? 'ring-1 ring-red-500' : ''}`}
            placeholder="Your email address"
          />
          {errors.email && <p className="mt-1 text-xs font-sans text-red-500">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-sans text-gray-700 mb-2">Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-3 bg-gray-100 border-none focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-900 font-sans resize-none ${errors.message ? 'ring-1 ring-red-500' : ''}`}
            placeholder="Enter your message"
          />
          {errors.message && <p className="mt-1 text-xs font-sans text-red-500">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-gray-900 px-10 py-3 text-sm font-sans tracking-wide hover:bg-gray-900 hover:text-white transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 max-w-md w-full rounded-2xl shadow-xl transform transition-all">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-serif-display text-gray-900 mb-2">Thank you!</h3>
              <p className="text-gray-600 font-sans mb-8">
                Your message has been sent. I'll reply within 1-2 business days.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full bg-gray-900 text-white px-6 py-3 font-sans text-sm hover:bg-gray-800 transition-colors rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function WorkPage() {
  const works = [
    {
      category: "IN-DEPTH PRODUCT REVIEWS",
      title: "Finding the AI Writer That Delivers：Real Tools, Real Tests",
      description: (
        <>
          <p className="mb-6">
            When AI writing tools exploded onto the scene, everyone was asking the same question: which one actually works? I took ten of them and put them through real-world tests.
          </p>
          <p>
            Not just marketing claims, but actual output quality, ease of use, and whether they save time or create more work. The result was a guide that helps users cut through the noise and pick the tool that fits their actual needs.
          </p>
        </>
      ),
      image: "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/work%202.png"
    },
    {
      category: "LANDING PAGES",
      title: "Converting Visitors into Customers Through Strategic Copy",
      description: (
        <>
          <p className="mb-6">
            A landing page is your digital storefront. It needs to be inviting, clear, and persuasive. I craft landing pages that not only look good but perform exceptionally well.
          </p>
          <p>
            By understanding the target audience and the product's unique value proposition, I create compelling narratives that guide users towards the desired action, maximizing conversion rates.
          </p>
        </>
      ),
      image: "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/work%2022.png"
    },
    {
      category: "TECH BLOGS & TUTORIALS",
      title: "Demystifying Complex Technologies for Everyday Users",
      description: (
        <>
          <p className="mb-6">
            Technology can be intimidating. My goal is to break down complex concepts into digestible, easy-to-understand tutorials and blog posts.
          </p>
          <p>
            Whether it's a step-by-step guide on using a new software or an in-depth analysis of the latest tech trends, I ensure the content is accessible, engaging, and highly informative.
          </p>
        </>
      ),
      image: "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/work%201.png"
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
        {works.map((work, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h6 className="text-brand-accent font-sans text-xs tracking-widest uppercase mb-8">{work.category}</h6>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display text-brand-accent leading-[1.2] mb-10">
                {work.title}
              </h2>
              <div className="text-sm text-gray-700 leading-relaxed max-w-lg">
                {work.description}
              </div>
            </div>
            <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} flex justify-center`}>
              <div className="w-full max-w-sm aspect-[2/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ContactSection />
    </main>
  );
}

function LogoRing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  const logos = [
    "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/20260311-181827.png",
    "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/20260311-181809.png",
    "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/20260311-181815.png",
    "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/20260311-181751.png",
    "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/20260311-181804.png",
    "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/20260311-181745.png",
    "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/20260311-181755.png",
    "https://raw.githubusercontent.com/Iris-Holmes-cloud/picture-storage/refs/heads/main/20260311-181734.png"
  ];
  const radius = 140; // radius of the ring
  const center = 200; // center of the 400x400 container

  return (
    <div 
      ref={containerRef}
      className="relative w-[400px] h-[400px] max-w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {logos.map((logoUrl, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const baseX = center + radius * Math.cos(angle);
        const baseY = center + radius * Math.sin(angle);

        // Calculate distance from mouse
        const dx = mousePos.x - baseX;
        const dy = mousePos.y - baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const interactionRadius = 140;
        let factor = 0;
        if (distance < interactionRadius) {
          // Smooth easing
          const normalized = 1 - distance / interactionRadius;
          factor = normalized * normalized; // ease-in-out or ease-out
        }

        // Spiral transformation
        const maxDisplacement = 60; // pixels towards center
        const maxRotation = Math.PI / 3; // 60 degrees rotation

        const currentRadius = radius - maxDisplacement * factor;
        const currentAngle = angle + maxRotation * factor;

        const x = center + currentRadius * Math.cos(currentAngle);
        const y = center + currentRadius * Math.sin(currentAngle);

        return (
          <div
            key={i}
            className="absolute w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 ease-out overflow-hidden p-2"
            style={{
              left: x - 32, // 32 is half of w-16
              top: y - 32,
            }}
          >
            <img 
              src={logoUrl} 
              alt={`Brand Logo ${i + 1}`} 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        );
      })}
    </div>
  );
}
