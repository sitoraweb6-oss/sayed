import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LocalImage from '../founder-story/LocalImage';

export default function AboutPreview() {
  return (
    <section id="founder-story" className="py-20 sm:py-24 bg-stone-100 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-stone-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-5">
            <LocalImage
              src="/images/founder-story/founder.webp"
              alt="Sayed Ahmad — Founder of Sitora Web and Web Development Partner"
              aspectRatio="aspect-[4/5]"
              fallbackTitle="SAYED AHMAD"
              fallbackSubtitle="Founder & Web Development Partner"
              className="shadow-sm border border-stone-200"
            />

            {/* Founder / Business Identity Info directly below image */}
            <div className="mt-4 sm:mt-5 text-left">
              <span className="block text-[11px] sm:text-[11.5px] font-mono font-bold tracking-wider uppercase text-stone-900 leading-tight">
                FOUNDER, SITORA WEB
              </span>
              <span className="block text-[10px] sm:text-[10.5px] font-mono font-medium tracking-wide uppercase text-stone-500 mt-1 leading-tight">
                DIGITAL SOLUTIONS FOR GROWING BUSINESSES
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#8C701B]">
                THE PERSON BEHIND THE WORK
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-stone-900 uppercase mb-5">
              I Started by Understanding Businesses.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-stone-600 mb-8">
              <p>
                My journey into web development began with marketing and digital promotion—learning early on that getting attention means very little without a strong, reliable digital foundation.
              </p>
              <p>
                Whether partnering with agencies on white-label builds or engineering direct solutions for growing businesses, I approach every project by understanding the commercial outcome first and executing purposeful architecture second.
              </p>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 text-xs sm:text-[13px] font-mono font-semibold tracking-wider uppercase text-stone-900 bg-transparent border-2 border-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-all group"
            >
              <span>READ MY STORY</span>
              <ArrowRight className="ml-2.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
