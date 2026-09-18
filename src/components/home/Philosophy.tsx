import { motion } from 'motion/react';

export default function Philosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 25 } 
    }
  };

  return (
    <section id="how-i-work" className="py-16 md:py-24 bg-[#FCFBFA] overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center lg:items-stretch">
          
          {/* Left Column: Narrative */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="w-full lg:w-1/2 flex flex-col justify-center max-w-[460px] mx-auto lg:mx-0"
          >
            <motion.span variants={itemVariants} className="block text-[12px] font-bold tracking-[0.08em] uppercase text-[#0B132B]/50 mb-6">
              THE THINKING BEHIND THE BUILD
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-[28px] md:text-[34px] lg:text-[40px] font-display font-medium text-[#0B132B] mb-6 leading-[1.25]">
              A website isn't a brochure. It's a funnel — built around how your customers think.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-[15px] md:text-[16px] text-[#0B132B]/70 leading-relaxed mb-10">
              Every business has a different audience, positioning, and competitors. So every website should be built around a different strategy — not a different color scheme on the same template.
            </motion.p>
            
            {/* Flow Items */}
            <motion.div variants={itemVariants} className="flex flex-col gap-5 border-t border-[#0B132B]/10 pt-8">
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#D4AF37]">UNDERSTAND</span>
                <span className="text-[14px] md:text-[15px] text-[#0B132B]/70 leading-relaxed">The business, its audience, its competitors.</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#D4AF37]">POSITION</span>
                <span className="text-[14px] md:text-[15px] text-[#0B132B]/70 leading-relaxed">A narrative only this business could tell.</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#D4AF37]">CONVERT</span>
                <span className="text-[14px] md:text-[15px] text-[#0B132B]/70 leading-relaxed">Every layout, CTA, and detail built to move visitors to action.</span>
              </div>
            </motion.div>

            {/* Closing Line */}
            <motion.p variants={itemVariants} className="mt-10 md:mt-12 text-[16px] md:text-[17px] font-display italic text-[#0B132B] leading-relaxed">
              Sometimes that means hours spent refining one button. Because small details decide who converts.
            </motion.p>

          </motion.div>

          {/* Right Column: High-Fidelity Mockup */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="w-full lg:w-1/2 flex items-center justify-center"
          >
            {/* Neutral Container */}
            <div className="w-full max-w-[500px] bg-[#0B132B]/[0.03] p-6 sm:p-10 lg:p-12 rounded-[2rem] border border-[#0B132B]/5">
               
               {/* Browser Window */}
               <motion.div variants={itemVariants} className="relative bg-white rounded-xl shadow-xl shadow-[#0B132B]/[0.05] border border-[#0B132B]/10 flex flex-col overflow-hidden">
                 
                 {/* Browser Chrome */}
                 <div className="h-8 border-b border-[#0B132B]/10 bg-[#FCFBFA] flex items-center px-4 gap-1.5 z-10 relative">
                   <div className="w-2 h-2 rounded-full bg-[#0B132B]/15"></div>
                   <div className="w-2 h-2 rounded-full bg-[#0B132B]/15"></div>
                   <div className="w-2 h-2 rounded-full bg-[#0B132B]/15"></div>
                 </div>
                 
                 {/* Browser Body (Realistic UI) */}
                 <div className="flex flex-col relative bg-white pb-2">
                   
                   {/* Miniature Navbar */}
                   <div className="px-5 py-3.5 border-b border-[#0B132B]/5 flex justify-between items-center bg-white/80 backdrop-blur-sm z-10">
                     <div className="text-[10px] font-display font-bold text-[#0B132B] tracking-wide">AVENUE</div>
                     <div className="flex gap-3 text-[7.5px] font-medium text-[#0B132B]/50 uppercase tracking-widest">
                       <span>Work</span>
                       <span>Studio</span>
                       <span>Contact</span>
                     </div>
                   </div>
                   
                   {/* Miniature Hero */}
                   <div className="px-5 pt-8 pb-7 flex flex-col items-center text-center bg-gradient-to-b from-[#FCFBFA] to-white">
                     <h3 className="font-display text-[16px] sm:text-[18px] text-[#0B132B] leading-[1.15] mb-2.5 max-w-[240px]">
                       Strategic design for modern brands.
                     </h3>
                     <p className="text-[9px] text-[#0B132B]/60 leading-relaxed max-w-[210px] mb-5">
                       We craft digital experiences that capture attention, build trust, and drive meaningful growth.
                     </p>
                     <div className="px-4 py-2 bg-[#0B132B] text-white text-[8px] font-bold uppercase tracking-wider rounded-md shadow-md shadow-[#0B132B]/10 hover:opacity-90 transition-opacity">
                       Start a Project
                     </div>
                   </div>
                   
                   {/* 2 Content Blocks (Understand / Position) */}
                   <div className="px-5 pb-8 flex flex-col sm:grid sm:grid-cols-2 gap-8 sm:gap-4">
                     
                     {/* Left Block (Understand) */}
                     <div className="relative bg-[#FCFBFA] border border-[#0B132B]/5 p-4 rounded-xl flex flex-col gap-1.5 mt-2 sm:mt-0">
                       <motion.div variants={tagVariants} className="absolute -top-3 -left-2 z-20 bg-white border border-[#0B132B]/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                          <span className="text-[8px] font-bold tracking-widest text-[#0B132B]/80 uppercase">UNDERSTAND</span>
                       </motion.div>
                       
                       <div className="w-6 h-6 rounded-full bg-[#0B132B]/5 flex items-center justify-center mb-1">
                         <div className="w-2 h-2 border border-[#0B132B]/40 rounded-[2px]"></div>
                       </div>
                       <h4 className="text-[10px] font-bold text-[#0B132B]">Target Clarity</h4>
                       <p className="text-[8px] text-[#0B132B]/60 leading-relaxed">Built for your specific audience and their unique pain points.</p>
                     </div>
                     
                     {/* Right Block (Position) */}
                     <div className="relative bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-4 rounded-xl flex flex-col gap-1.5 mt-2 sm:mt-0">
                       <motion.div variants={tagVariants} className="absolute -top-3 -right-2 z-20 bg-white border border-[#0B132B]/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                          <span className="text-[8px] font-bold tracking-widest text-[#0B132B]/80 uppercase">POSITION</span>
                       </motion.div>
                       
                       <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-1">
                         <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                       </div>
                       <h4 className="text-[10px] font-bold text-[#0B132B]">Market Authority</h4>
                       <p className="text-[8px] text-[#0B132B]/60 leading-relaxed">Positioning your brand as the definitive choice in a crowded space.</p>
                     </div>

                   </div>
                   
                   {/* Miniature CTA (Convert) */}
                   <div className="px-5 pb-6 pt-2">
                     <div className="relative bg-[#0B132B] p-6 rounded-xl flex flex-col items-center text-center overflow-visible shadow-lg shadow-[#0B132B]/15">
                       <motion.div variants={tagVariants} className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-white border border-[#0B132B]/10 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                          <span className="text-[8px] font-bold tracking-widest text-[#0B132B]/80 uppercase">CONVERT</span>
                       </motion.div>
                       
                       <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-20 rounded-xl"></div>
                       
                       <h4 className="text-[14px] font-display text-white relative z-10 mb-2">Ready to scale?</h4>
                       <p className="text-[8px] text-white/70 relative z-10 mb-4 max-w-[150px] leading-relaxed">Book a strategy call to discuss your business goals.</p>
                       <div className="bg-white text-[#0B132B] text-[8px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-md relative z-10 shadow-sm">
                         Get Started
                       </div>
                     </div>
                   </div>
                   
                 </div>
               </motion.div>
               
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
