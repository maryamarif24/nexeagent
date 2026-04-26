'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Brain,
  Code,
  Zap,
  Target,
  Lightbulb,
  Layers,
  Shield,
  Terminal
} from 'lucide-react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Team from '@/components/Team';

const stats = [
  { value: '50+', label: 'Projects Completed', code: 'EXEC_050' },
  { value: '98%', label: 'Client Satisfaction', code: 'SAT_V98' },
  { value: '5+', label: 'Years Experience', code: 'EXP_Y05' },
  { value: '24/7', label: 'Support Available', code: 'UP_TIME' },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We pursue emerging technologies and creative solutions that give our clients a competitive edge.",
  },
  {
    icon: Brain,
    title: "Intelligent Design",    
    description: "Every system we build incorporates smart logic that adapts, learns, and improves over time.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "From day one, we engineer solutions that grow seamlessly with your business demands.",
  },
  {
    icon: Shield,
    title: "Uncompromising Reliability",
    description: "We build systems that businesses depend on, with uptime, security, and performance you can trust.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* FIXED: Changed bg-[#020202] to bg-transparent and min-h-screen to h-full min-h-screen to prevent cutting */}
      <div className="h-full min-h-screen bg-transparent text-gray-700 pb-20">

        {/* --- HERO: SYSTEM BRIEFING --- */}
        <section className="relative pt-40 pb-24 overflow-hidden border-b border-gray-200">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-8"
                >
                  Building the Future of <br />
                  <span className="text-primary italic">
                    Intelligent Business
                  </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-8"
                >
                  Nexe-Agent was founded on a simple belief: technology should amplify human potential,
                  not complicate it. We make artificial intelligence accessible, practical, and transformative
                  for businesses of every size.
                </motion.p>
              </div>

              {/* Technical Sidebar */}
              <div className="hidden lg:block lg:col-span-4 border-l border-gray-200 pl-12">
                <div className="space-y-8 py-4 opacity-40">
                   
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- STATS: DATA METRICS --- */}
        <section className="py-20 bg-gray-50 border-b border-gray-200 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="relative group p-6 rounded-2xl bg-white backdrop-blur-sm border border-gray-200 hover:border-primary/30 transition-all shadow-sm">
                  <div className="text-[10px] font-mono text-gray-500 mb-2">{stat.code}</div>
                  <div className="text-4xl font-black text-primary mb-1 group-hover:text-primary transition-colors">{stat.value}</div>
                  <div className="text-xs text-gray-600 uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MISSION: CORE DIRECTIVE --- */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20" />
                <div className="relative aspect-video rounded-3xl bg-gray-50 backdrop-blur-md border border-gray-200 p-12 overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-400">MISSION_CONTROL</div>
                  <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center animate-pulse">
                      <Target className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-center space-y-2">
                       <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tighter">Our Vision</h3>
                       <p className="text-gray-600 text-sm max-w-xs mx-auto italic">
                        "A world where intelligent systems eliminate manual work and unlock exponential growth for every business."
                       </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter leading-none">
                  Reducing Manual Work, <br />
                  <span className="text-primary">Increasing Efficiency</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We saw too many businesses drowning in repetitive tasks. Every hour spent on manual work is an hour not spent on innovation.
                </p>
                <div className="grid gap-4">
                  {[
                    { icon: Brain, text: 'Cutting-edge AI integration' },
                    { icon: Code, text: 'Clean, maintainable architecture' },
                    { icon: Zap, text: 'Reclaiming time for what truly matters' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-primary/50 transition-all">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-800 font-medium tracking-tight">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TEAM SECTION --- */}
        <Team />

        {/* --- VALUES: SYSTEM GUIDELINES --- */}
        <section className="py-32 relative border-y border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mb-20 space-y-4 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight uppercase">
                Core <span className="text-primary">Values</span>
              </h2>
              <p className="text-gray-600 font-mono text-sm uppercase tracking-widest">
                The principles that guide every decision and every line of code we write.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group relative p-8 rounded-2xl bg-white backdrop-blur-sm border border-gray-200 hover:border-primary/40 transition-all duration-500 shadow-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CALL TO ACTION --- */}
        <section className="py-40 relative overflow-hidden text-center">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
              className="max-w-2xl mx-auto space-y-10"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto animate-pulse" />
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                  Ready to <br /> Work With Us?
                </h2>
               
              </div>
              <Button variant="glow" size="xl" asChild className="rounded-full px-12 h-16 text-lg font-bold">
                <Link href="/contact" className="gap-3 text-black">
                  Start a Conversation
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}