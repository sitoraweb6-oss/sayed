import React from 'react';
import StoryQuote from './StoryQuote';

export default function ClientCaseNarrative() {
  const narrativeFlow = [
    { step: '01', title: 'PROBLEM', desc: 'Fashion business struggling with campaign inventory conversion' },
    { step: '02', title: 'UNDERSTANDING', desc: 'Direct late-night dialogue to isolate the exact offer bottleneck' },
    { step: '03', title: 'SOLUTION', desc: 'Bespoke campaign landing page built and launched in 48 hours' },
    { step: '04', title: 'OPPORTUNITY', desc: 'Immediate stock clearance, trust established, network-wide referrals' },
  ];

  return (
    <div className="my-10 sm:my-14 p-6 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm">
      {/* Visual Workflow Marker */}
      <div className="mb-8 pb-6 border-b border-stone-200">
        <div className="text-[10.5px] sm:text-xs font-mono tracking-[0.2em] uppercase text-[#8C701B] font-semibold mb-4">
          NARRATIVE BREAKDOWN
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {narrativeFlow.map((item) => (
            <div key={item.step} className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/80">
              <span className="text-[10px] font-mono font-bold tracking-wider text-stone-400 block mb-1">
                PHASE {item.step}
              </span>
              <h5 className="text-xs sm:text-[13px] font-display font-bold text-stone-900 tracking-wider uppercase mb-1">
                {item.title}
              </h5>
              <p className="text-xs text-stone-600 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Case Details Narrative */}
      <div className="space-y-5 text-stone-600 leading-relaxed text-base sm:text-[17px]">
        <p>
          I never entered this field with the goal of competing for the cheapest marketplace jobs. From the beginning, my goal was to build a professional brand of my own and create a service that businesses could genuinely trust.
        </p>
        <p>
          My initial opportunities came through people in my existing network and businesses I had previously worked with through marketing. As those businesses grew, many of them eventually needed websites, eCommerce platforms, landing pages, and more structured digital systems. Those relationships gradually introduced me to new clients through word-of-mouth referrals.
        </p>
        <p>
          One experience that remains especially memorable happened during a difficult period when I was reaching out to fashion businesses through personalized direct messages. After contacting a small number of businesses over several days, I received a reply late at night from a founder asking where my office was located.
        </p>
        <p>
          That conversation led to an in-person meeting, where the business owner explained a specific problem with their current product line and promotional campaign. Rather than pitching a generic template service, I focused strictly on understanding their problem and architecting a practical solution. Within two days, I designed and developed a dedicated, campaign-focused landing page for the business.
        </p>
        <p>
          Following the campaign launch, the client reported a significant increase in sales from the targeted product inventory. That initial 48-hour turnaround developed into a much larger relationship, eventually unlocking work connected to numerous fashion brands across his professional network.
        </p>
      </div>

      <StoryQuote
        quote="A well-planned website is not just a deliverable. It can become the beginning of a long-term business relationship."
        attribution="Sayed Ahmad"
      />
    </div>
  );
}
