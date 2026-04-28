'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cpu } from 'lucide-react';

const team = [
  {
    name: "Maryam Arif",
    role: "Founder & CEO",
    code: "01",
    bio: "Leads AI development, system automation, and OpenAI Agents SDK integration.",
    image: "/maryam.jpeg",
    github: "https://github.com/maryamarif24",
    linkedin: "https://www.linkedin.com/in/maryam-arif-71b0992b5/",
    instagram: "https://www.instagram.com/maryam.arif_/",
    githubIcon: "/icons/github.png",
    linkedinIcon: "/icons/linkedin.png",
    instagramIcon: "/icons/instagram.png",
  },
  {
    name: "Mehak Akram",
    role: "Co-Founder & COO",
    code: "02",
    bio: "Manages backend architecture, APIs, databases, and system reliability.",
    image: "/mehak.jpeg",
    github: "https://github.com/Mehak-Akram/",
    linkedin: "https://www.linkedin.com/in/mehak-akram-3859a830b/",
    instagram: "https://www.instagram.com/mehak_.akram5/",
    githubIcon: "/icons/github.png",
    linkedinIcon: "/icons/linkedin.png",
    instagramIcon: "/icons/instagram.png",
  },
  {
    name: "Noor-Ul-Ain Arif",
    role: "Digital Marketing Lead",
    code: "03",
    bio: "Manages backend architecture, APIs, databases, and system reliability.",
    image: "/Noor.jpeg",
    github: "https://github.com/Mehak-Akram/",
    linkedin: "https://www.linkedin.com/in/mehak-akram-3859a830b/",
    instagram: "https://www.instagram.com/mehak_.akram5/",
    githubIcon: "/icons/github.png",
    linkedinIcon: "/icons/linkedin.png",
    instagramIcon: "/icons/instagram.png",
  },
  {
    name: "Kiran Ahmed",
    role: "Frontend Developer",
    code: "04",
    bio: "Designs modern interfaces and improves user experience for the platform.",
    image: "/kiran.jpeg",
    github: "https://github.com/TahirahWebDev",
    linkedin: "https://linkedin.com/in/kiran-pervaiz-ahmed-1a952127b/",
    instagram: "https://www.instagram.com/kiranahmed37/",
    githubIcon: "/icons/github.png",
    linkedinIcon: "/icons/linkedin.png",
    instagramIcon: "/icons/instagram.png",
  }
];

function TeamCard({ member, index }: { member: typeof team[0], index: number }) {
  // Motion values for the 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative"
    >
      <div className="relative p-px rounded-[2.5rem] bg-gradient-to-b from-gray-200 to-transparent group-hover:from-primary/40 transition-colors duration-500">
        <div className="relative bg-white rounded-[calc(2.5rem-1px)] p-10 h-full overflow-hidden shadow-sm">
          
          {/* 1. Animated Tech Background Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))] z-0" />
          
          {/* 2. Background Code ID */}
          <div className="absolute -right-2 -bottom-2 font-mono text-[120px] font-black text-gray-50 select-none group-hover:text-primary/5 transition-colors duration-700 z-0">
            {member.code}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* 3. Avatar with rotating border */}
            <div className="relative w-40 h-40 mb-8 group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100" />
              <div className="absolute inset-[6px] rounded-full overflow-hidden border border-gray-100 bg-gray-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* 4. Name & Role */}
            <div className="text-center space-y-3 mb-6">
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                <Cpu size={12} className="text-primary animate-pulse" />
                <span className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                  {member.role}
                </span>
              </div>
            </div>

            {/* 5. Bio */}
            <p className="text-gray-600 text-sm leading-relaxed text-center mb-10 max-w-[280px]">
              {member.bio}
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { img: member.githubIcon, link: member.github },
                { img: member.linkedinIcon, link: member.linkedin },
                { img: member.instagramIcon, link: member.instagram }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-gray-50 rounded-xl border hover:border-primary"
                >
                  <Image src={social.img} alt="social" width={20} height={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-primary font-mono text-xs tracking-[0.5em] uppercase mb-6"
          >
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-[0.9]"
          >
            Meet Our <span className="text-cyan-400 italic relative inline-block">
              Core Team
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-4 left-0 w-full h-3 text-cyan-400/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </motion.svg>
            </span>
          </motion.h2>
        </div>

        {/* Founders Section - Highlighted */}
        <div className="max-w-6xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-transparent to-cyan-400/20 mb-6 md:mb-0"
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-[calc(1.5rem-4px)] p-8 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {team.slice(0, 2).map((member, index) => (
                  <TeamCard key={member.name} member={member} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Members Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.slice(2).map((member, index) => (
            <TeamCard key={member.name} member={member} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}