import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, ShieldCheck, Layers, GitBranch } from 'lucide-react';

export default function TechLeverageBlock() {
  const equationSteps = [
    { label: 'UNDERSTANDING', desc: 'Commercial reality & client objectives', icon: Layers },
    { label: 'ARCHITECTURE', desc: 'Clean schema, git workflows & stack choices', icon: GitBranch },
    { label: 'AI-ASSISTED EXECUTION', desc: 'Accelerated syntax, scaffolding & testing', icon: Cpu },
    { label: 'HUMAN JUDGEMENT', desc: 'Quality control, security & UX refinements', icon: ShieldCheck },
  ];

  return (
    <div className="my-10 sm:my-14 rounded-3xl bg-[#0F172A] text-slate-100 p-6 sm:p-10 border border-slate-800 relative overflow-hidden">
      {/* Code Editor Header Bar */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-800 text-[11px] font-mono text-slate-400 mb-8">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-slate-500 font-semibold">methodology.ts</span>
        </div>
        <span className="text-[#D4AF37] font-semibold tracking-wider">ENGINEERING LEVERAGE</span>
      </div>

      {/* Visual Relationship Formula */}
      <div className="mb-8 sm:mb-10">
        <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-slate-400 mb-4 font-semibold">
          THE ACCELERATION EQUATION
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 relative">
          {equationSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative">
                <div className="h-full p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs sm:text-[13px] font-mono font-bold text-white tracking-wider mb-1">
                      {step.label}
                    </h5>
                    <p className="text-[12px] text-slate-400 leading-snug">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Plus connector for desktop */}
                {idx < equationSteps.length - 1 && (
                  <span className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600 font-mono text-sm z-10">
                    +
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Equals Result Box */}
        <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-lg font-mono text-[#D4AF37] font-bold">=</span>
            <span className="text-xs sm:text-sm font-mono tracking-wider font-bold text-white uppercase">
              FUNCTIONAL DIGITAL SOLUTIONS
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 tracking-wide">
            Delivered faster • Governed strictly by human technical judgement
          </span>
        </div>
      </div>

      {/* Code Snippet / Architectural Philosophy */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-950 font-mono text-[11.5px] sm:text-xs text-slate-300 leading-relaxed border border-slate-800/80 overflow-x-auto">
        <p className="text-slate-500">// My perspective on modern engineering workflows</p>
        <p className="text-[#D4AF37] mt-1">const developerRole = {'{'}</p>
        <p className="pl-4 text-slate-300">architect: <span className="text-emerald-400">"Sayed Ahmad"</span>,</p>
        <p className="pl-4 text-slate-300">toolingLeverage: <span className="text-sky-300">["Git", "WordPress/WooCommerce", "Firebase/APIs", "AI Scaffolding"]</span>,</p>
        <p className="pl-4 text-slate-300">responsibility: <span className="text-amber-300">"Architecture, Security, Business Logic & Polish"</span>,</p>
        <p className="pl-4 text-slate-300">replacementForJudgement: <span className="text-rose-400">false</span></p>
        <p className="text-[#D4AF37]">{'}'};</p>
      </div>
    </div>
  );
}
