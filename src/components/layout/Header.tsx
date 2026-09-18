import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PersonalBrandLogo from '../common/PersonalBrandLogo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'WORK', path: '/#selected-work' },
    { name: 'SERVICES', path: '/#services' },
    { name: 'HOW I WORK', path: '/#how-i-work' },
    { name: "SAYED'S STORY", path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-900/[0.04] transition-all duration-300 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center relative">
        
        {/* Left: Logo with Personal Avatar */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group z-10">
          <PersonalBrandLogo variant="navbar" />
          <div className="flex flex-col">
            <span className="text-[1.05rem] sm:text-[1.1rem] md:text-[1.25rem] font-extrabold tracking-tight text-brand-text uppercase leading-tight group-hover:text-stone-700 transition-colors">
              Sayed Ahmad
            </span>
            <span className="text-[0.45rem] md:text-[0.55rem] text-brand-muted font-bold tracking-[0.2em] uppercase mt-0.5 group-hover:text-brand-text transition-colors">
              Digital Solutions Partner
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-[0.65rem] font-bold tracking-widest text-brand-muted hover:text-brand-text transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Right: Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6 z-10">
          <button className="text-[0.65rem] font-bold text-brand-muted hover:text-brand-text transition-colors uppercase tracking-widest flex items-center">
            EN <span className="text-black/15 mx-2 font-normal">|</span> বাং
          </button>
          <Link 
            to="/contact" 
            className="text-[0.7rem] font-bold tracking-widest uppercase bg-brand-text text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-colors shadow-sm"
          >
            Let's Work Together
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-brand-text p-2 -mr-2 z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col px-6 py-8 space-y-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold tracking-widest text-brand-text uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-black/5 flex flex-col space-y-6 items-center">
                <button className="text-[0.7rem] font-bold tracking-[0.2em] text-brand-muted hover:text-brand-text transition-colors uppercase">
                  EN <span className="mx-2 font-normal text-black/10">|</span> বাংলা
                </button>
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full max-w-xs font-bold tracking-widest text-[0.7rem] uppercase bg-brand-text text-white px-6 py-3.5 rounded-full"
                >
                  Let's Work Together
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
