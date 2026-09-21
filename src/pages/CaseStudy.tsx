import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { portfolioProjects, getPortfolioImageUrl } from '../data/portfolio';
import { mockProjects } from '../data/mockData';

function resolveAssetUrl(rawPath: string): string {
  if (!rawPath) return '';
  if (rawPath.startsWith('http://') || rawPath.startsWith('https://') || rawPath.startsWith('data:')) {
    return rawPath;
  }
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  return baseUrl ? `${baseUrl}${cleanPath}` : cleanPath;
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const [imgError, setImgError] = useState(false);
  
  // Find project in real portfolio projects first, then fallback to mockProjects
  const realProject = portfolioProjects.find(p => p.slug === slug || p.id === slug);
  const mockProject = !realProject ? mockProjects.find(p => p.slug === slug || p.id === slug) : null;

  if (!realProject && !mockProject) {
    return (
      <div className="pt-32 px-6 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-medium text-stone-900 mb-4">Project Not Found</h1>
        <p className="text-stone-600 mb-8">The project you are looking for does not exist or has been removed.</p>
        <Link to="/work" className="inline-flex items-center text-stone-900 font-medium hover:text-stone-600">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
        </Link>
      </div>
    );
  }

  // Normalize project properties
  const title = realProject ? realProject.title : mockProject!.title;
  const shortDescription = realProject ? realProject.shortDescription : mockProject!.short_description;
  const category = realProject ? realProject.category : mockProject!.category;
  const clientType = mockProject?.client_type;
  const myRole = realProject ? realProject.role : mockProject!.my_role;
  const technologies = realProject ? realProject.techStack : mockProject!.technologies;
  const liveUrl = realProject ? realProject.liveUrl : mockProject!.live_url;
  const thumbnailImage = realProject ? realProject.image : mockProject!.thumbnail_image;
  
  const challenge = realProject?.challenge || "The client needed a modern, high-performance digital presence that could effectively communicate their value proposition and support their primary business goals.";
  const solution = realProject?.solution || "I designed and developed a custom solution focused on clean architecture, optimized performance, and a user-centric interface that directly addresses the core business requirements.";
  const objective = realProject?.overview || "To create a scalable, reliable, and professional digital experience.";
  const value = realProject?.outcome || "Improved clarity, better user experience, and a stronger digital presentation that supports future growth.";

  return (
    <>
      <Helmet>
        <title>{title} | Sayed Ahmad — Web Developer & Digital Solutions Partner</title>
        <meta name="description" content={shortDescription} />
        <link rel="canonical" href={`https://www.sitora.org/work/${slug}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${title} | Sayed Ahmad`} />
        <meta property="og:description" content={shortDescription} />
        <meta property="og:url" content={`https://www.sitora.org/work/${slug}`} />
        <meta property="og:type" content="article" />
        {thumbnailImage && <meta property="og:image" content={thumbnailImage.startsWith('http') ? thumbnailImage : `https://www.sitora.org${thumbnailImage}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Sayed Ahmad`} />
        <meta name="twitter:description" content={shortDescription} />
        {thumbnailImage && <meta name="twitter:image" content={thumbnailImage.startsWith('http') ? thumbnailImage : `https://www.sitora.org${thumbnailImage}`} />}
      </Helmet>

      <article className="pt-24 pb-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <Link to="/work" className="inline-flex items-center text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">{title}</h1>
              <p className="text-xl text-stone-600 leading-relaxed">{shortDescription}</p>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-stone-200">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Category</h3>
                  <p className="text-stone-900 font-medium">{category}</p>
                </div>
                {clientType && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Business Type</h3>
                    <p className="text-stone-900 font-medium">{clientType}</p>
                  </div>
                )}
                {myRole && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">My Role</h3>
                    <p className="text-stone-900 font-medium">{myRole}</p>
                  </div>
                )}
                {technologies && technologies.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Technologies</h3>
                    <p className="text-stone-900 font-medium">{technologies.join(', ')}</p>
                  </div>
                )}
              </div>
              
              {liveUrl && liveUrl !== '#' && (
                <div className="mt-4">
                  <a 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors"
                  >
                    View Live Website <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              )}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full aspect-[16/9] md:aspect-[2/1] bg-stone-200 rounded-3xl overflow-hidden mb-24 relative isolate">
            {!imgError ? (
              <img 
                src={resolveAssetUrl(thumbnailImage)} 
                alt={`${title} Preview`} 
                width={1200}
                height={675}
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#0B132B] text-[#FAF8F5] p-8 text-center">
                <span className="text-xs font-mono tracking-[0.2em] text-[#D4AF37] uppercase mb-2">CASE STUDY ARCHIVE</span>
                <span className="text-2xl sm:text-3xl font-display font-bold">{title}</span>
                <span className="text-sm font-mono text-stone-400 mt-2">{category} • {clientType || 'Web Development'}</span>
              </div>
            )}
          </div>
          
          {/* Case Study Details */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-20">
              
              <section>
                <h2 className="text-2xl font-medium text-stone-900 mb-6">The Challenge</h2>
                <p className="text-lg text-stone-600 leading-relaxed">{challenge}</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-medium text-stone-900 mb-6">Project Objective</h2>
                <p className="text-lg text-stone-600 leading-relaxed">{objective}</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-medium text-stone-900 mb-6">The Solution</h2>
                <p className="text-lg text-stone-600 leading-relaxed">{solution}</p>
              </section>
              
              <section className="bg-white p-10 rounded-2xl border border-stone-200">
                <h2 className="text-xl font-medium text-stone-900 mb-4">Business Value Delivered</h2>
                <p className="text-stone-700 leading-relaxed">{value}</p>
              </section>
              
            </div>
          </div>
          
        </div>
      </article>
    </>
  );
}
