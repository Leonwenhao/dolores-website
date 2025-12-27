import { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Cpu, Zap, Activity, ShieldCheck, Code2, X } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-red-900 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-800 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-600 rounded-sm animate-pulse"></div>
            <span className="font-mono text-lg font-bold tracking-tighter uppercase">Dolores Research</span>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest text-gray-500 uppercase">
            <a href="#mission" className="hover:text-red-500 transition-colors">Mission</a>
            <a href="#capabilities" className="hover:text-red-500 transition-colors">Capabilities</a>
            <a href="#collective" className="hover:text-red-500 transition-colors">The Collective</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </div>
          <a href="mailto:0xhermesxbt@gmail.com" className="bg-white text-black px-5 py-2 font-mono text-xs font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
            Deploy Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 px-6 md:px-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] mb-12 text-white">
                We don't sell hours.<br />
                <span className="text-gray-500">We sell shipped products.</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-400 max-w-2xl leading-relaxed">
                Dolores Research is an elite engineering collective bridging the <span className="text-white border-b border-red-900">Execution Gap</span> in AI. We trade hiring latency for immediate velocity.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
              <div className="w-full border-t border-gray-800 pt-6">
                <div className="font-mono text-xs text-red-500 mb-2 uppercase tracking-widest">Status</div>
                <div className="text-2xl text-white font-mono flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Accepting Partners
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Deploying for Q1 2025 Cycles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution Grid */}
      <section id="mission" className="border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-gray-800 bg-[#0c0c0c]">
            <h3 className="font-mono text-xs text-red-500 mb-6 uppercase tracking-widest flex items-center gap-2">
              <X size={14} /> The Problem
            </h3>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-300">
              The Hiring Trap
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Hiring a senior AI team takes 90 days and costs $500k in burn before a single model is trained. Startups die in this latency. You have runway, but you don't have speed.
            </p>
            <div className="flex gap-4 text-sm font-mono text-gray-600">
              <span>Latency: High</span>
              <span>•</span>
              <span>Risk: Extreme</span>
            </div>
          </div>

          <div className="p-12 md:p-20 bg-[#0a0a0a]">
            <h3 className="font-mono text-xs text-green-500 mb-6 uppercase tracking-widest flex items-center gap-2">
              <Terminal size={14} /> The Solution
            </h3>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">
              Applied Velocity
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We are a kinetic injection of 18+ engineers from OpenAI, Stanford, and elite dev shops. We plug directly into your roadmap to ship critical infrastructure in weeks, not months.
            </p>
            <div className="flex gap-4 text-sm font-mono text-gray-600">
              <span>Velocity: Immediate</span>
              <span>•</span>
              <span>Output: Shipped</span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities / Services */}
      <section id="capabilities" className="py-32 px-6 md:px-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-medium tracking-tight mb-6">Engagement Models</h2>
            <div className="h-1 w-20 bg-red-600"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="group">
              <div className="mb-8 border-l border-gray-800 pl-6 group-hover:border-red-600 transition-colors duration-300">
                <Code2 className="w-8 h-8 text-gray-500 mb-4 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-bold text-white mb-2">Venture Engineering</h3>
                <p className="font-mono text-xs text-red-500 uppercase tracking-widest mb-4">For Pivots</p>
                <p className="text-gray-400 leading-relaxed">
                  You need to pivot to secure your Series A. We rapidly prototype and ship new verticals, converting your remaining runway into the traction metrics investors demand.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="mb-8 border-l border-gray-800 pl-6 group-hover:border-red-600 transition-colors duration-300">
                <ShieldCheck className="w-8 h-8 text-gray-500 mb-4 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-bold text-white mb-2">Infrastructure Hardening</h3>
                <p className="font-mono text-xs text-red-500 uppercase tracking-widest mb-4">For Scale-Ups</p>
                <p className="text-gray-400 leading-relaxed">
                  You "vibe coded" an MVP that is now breaking. We refactor your codebase, optimize ML pipelines, and build the enterprise-grade stability needed to handle real scale.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="mb-8 border-l border-gray-800 pl-6 group-hover:border-red-600 transition-colors duration-300">
                <Zap className="w-8 h-8 text-gray-500 mb-4 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-bold text-white mb-2">Velocity Injection</h3>
                <p className="font-mono text-xs text-red-500 uppercase tracking-widest mb-4">For Speed</p>
                <p className="text-gray-400 leading-relaxed">
                  The espresso shot. A strike team of senior engineers plugs into your existing org to crush technical debt or ship a specific, high-complexity feature by yesterday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Collective (Team) */}
      <section id="collective" className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-32 border-r border-gray-800">
             <h2 className="text-4xl font-medium tracking-tight mb-8">The Collective</h2>
             <p className="text-xl text-gray-400 font-light leading-relaxed">
               We are not a dev shop. We are a research and engineering lab. Our team is composed of founders, researchers, and systems architects who have built the tools you already use.
             </p>
          </div>
          <div className="grid grid-rows-3">
            <div className="p-8 border-b border-gray-800 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default">
              <div>
                <div className="text-2xl font-mono font-bold text-white">18+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Senior Engineers</div>
              </div>
              <Activity className="text-red-600" size={24} />
            </div>
            <div className="p-8 border-b border-gray-800 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default">
              <div>
                <div className="text-2xl font-mono font-bold text-white">$600M+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Volume Processed</div>
              </div>
              <Cpu className="text-red-600" size={24} />
            </div>
            <div className="p-8 flex items-center justify-between hover:bg-white/5 transition-colors cursor-default">
              <div>
                <div className="text-white font-bold text-lg">Stanford / OpenAI / FAANG</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Alumni Network</div>
              </div>
              <Terminal className="text-red-600" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Ticker */}
      <section className="bg-white text-black py-4 overflow-hidden whitespace-nowrap border-b border-gray-800">
        <div className="inline-block animate-marquee font-mono text-sm font-bold uppercase tracking-widest">
          <span className="mx-8">Recent Ship: Anna Fantasy (3k MAUs)</span>
          <span className="mx-8 text-red-600">•</span>
          <span className="mx-8">Latency Reduced by 83%</span>
          <span className="mx-8 text-red-600">•</span>
          <span className="mx-8">Custom ML Pipelines</span>
          <span className="mx-8 text-red-600">•</span>
          <span className="mx-8">Recent Ship: Anna Fantasy (3k MAUs)</span>
          <span className="mx-8 text-red-600">•</span>
          <span className="mx-8">Latency Reduced by 83%</span>
          <span className="mx-8 text-red-600">•</span>
          <span className="mx-8">Custom ML Pipelines</span>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-12">
            Ready to ship?
          </h2>
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-t border-gray-800 pt-12">
            <div className="mb-12 md:mb-0">
               <p className="text-gray-500 text-sm font-mono uppercase tracking-widest mb-4">Contact</p>
               <a href="mailto:0xhermesxbt@gmail.com" className="text-2xl md:text-3xl text-white hover:text-red-500 transition-colors border-b border-gray-700 pb-1">
                 0xhermesxbt@gmail.com
               </a>
            </div>
            
            <div className="flex flex-col items-end">
               <a href="#" className="flex items-center gap-4 text-white hover:text-red-500 transition-colors group">
                 <span className="text-xl">Book a consultation</span>
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </a>
               <p className="mt-8 text-gray-600 text-sm">
                 © 2025 Dolores Research. All rights reserved.
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
