import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Mail, Calendar } from 'lucide-react';
import PersonalBrandLogo from '../common/PersonalBrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-stone-100 pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-8 sm:pb-10 border-t border-stone-200 mt-8 sm:mt-14 md:mt-20 content-visibility-auto">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-2 sm:mb-2.5 group">
              <PersonalBrandLogo variant="footer" />
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-stone-900 group-hover:text-stone-700 transition-colors">
                Sayed Ahmad
              </h3>
            </Link>
            <p className="text-[13.5px] sm:text-sm text-stone-500 max-w-sm mb-4 sm:mb-6 leading-relaxed">
              Business-focused web development for agencies, businesses, and growing brands.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-xs sm:text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors group"
            >
              Start a conversation
              <ArrowUpRight className="ml-1 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Links: 2 Columns on Mobile & Tablet, 2 distinct columns on Desktop */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-2 lg:grid-cols-2">
            <div>
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-900 mb-3 sm:mb-6">
                Explore
              </h4>
              <ul className="space-y-2.5 sm:space-y-3.5 text-[13.5px] sm:text-sm">
                <li><Link to="/#selected-work" className="text-stone-500 hover:text-stone-900 transition-colors">Work</Link></li>
                <li><Link to="/#services" className="text-stone-500 hover:text-stone-900 transition-colors">Services</Link></li>
                <li><Link to="/#how-i-work" className="text-stone-500 hover:text-stone-900 transition-colors">How I Work</Link></li>
                <li><Link to="/about" className="text-stone-500 hover:text-stone-900 transition-colors">Sayed's Story</Link></li>
                <li><Link to="/contact" className="text-stone-500 hover:text-stone-900 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-900 mb-3 sm:mb-6">
                Connect
              </h4>
              <ul className="space-y-2.5 sm:space-y-3.5 text-[13.5px] sm:text-sm">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/sayedahmad-/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-stone-500 hover:text-stone-900 transition-colors group"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-stone-400 group-hover:text-stone-700 transition-colors flex-shrink-0" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:hello@sitora.org" 
                    className="flex items-center text-stone-500 hover:text-stone-900 transition-colors group"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-stone-400 group-hover:text-stone-700 transition-colors flex-shrink-0" />
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://cal.com/sayed-ahmad/project-consultation" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-stone-500 hover:text-stone-900 transition-colors group"
                  >
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-stone-400 group-hover:text-stone-700 transition-colors flex-shrink-0" />
                    <span>Book a 1:1 Call</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-stone-400 gap-3 sm:gap-0 text-center sm:text-left">
          <p>© {currentYear} Sayed Ahmad. All rights reserved.</p>
          <div className="flex space-x-5 sm:space-x-6">
            <Link to="/privacy-policy" className="hover:text-stone-900 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
