'use client';

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, Home, Cpu, 
  User, ShieldCheck, Mail 
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", id: "home", icon: Home },
  { name: "Services", href: "#services", id: "services", icon: Cpu },
  { name: "About", href: "#about", id: "about", icon: User },
  { name: "Audit", href: "#audit", id: "audit", icon: ShieldCheck },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorX, setIndicatorX] = useState(0);
  const [sectionPositions, setSectionPositions] = useState<{id: string, top: number}[]>([]);
  const [isScrollingToSection, setIsScrollingToSection] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<{[key: string]: HTMLElement | null}>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateSectionPositions = () => {
      const positions = navLinks.map(link => {
        const element = document.getElementById(link.id);
        return {
          id: link.id,
          top: element ? element.offsetTop : 0
        };
      });
      setSectionPositions(positions);
    };
    updateSectionPositions();
    window.addEventListener('resize', updateSectionPositions);
    return () => window.removeEventListener('resize', updateSectionPositions);
  }, []);

  // Initialize indicator position to home icon on mount
  useEffect(() => {
    const homeLink = linkRefs.current['home'];
    if (homeLink) {
      const center = homeLink.offsetLeft + (homeLink.offsetWidth / 2);
      setIndicatorX(center);
    }
  }, []);

  useEffect(() => {
    const handleScrollSync = () => {
      if (sectionPositions.length === 0 || !navRef.current || isScrollingToSection) return;

      const scrollY = window.scrollY + window.innerHeight * 0.4;
      let currentIndex = 0;

      for (let i = 0; i < sectionPositions.length; i++) {
        if (scrollY >= sectionPositions[i].top) currentIndex = i;
        else break;
      }

      const currentSection = sectionPositions[currentIndex];
      const currentLink = linkRefs.current[currentSection.id];

      if (currentLink) {
        const center = currentLink.offsetLeft + (currentLink.offsetWidth / 2);
        setIndicatorX(center);
      }
      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScrollSync);
    handleScrollSync();
    return () => window.removeEventListener('scroll', handleScrollSync);
  }, [sectionPositions, isScrollingToSection]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setIsScrollingToSection(true);
      setActiveSection(targetId);
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsScrollingToSection(false), 1000);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}>
      <div className="container mx-auto px-6">
        <div className={`relative flex items-center justify-between transition-all duration-500 px-6 rounded-2xl border bg-background/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] ${
          scrolled || mobileMenuOpen ? "h-16" : "h-20"
        }`}>

          {/* --- LEFT: LOGO --- */}
          <Link href="#home" onClick={() => handleNavClick("#home")} className="flex items-center gap-4 group z-50">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
              <img src="/logo.png" alt="Logo" className="relative w-full h-full object-contain" />
            </div>
            <div className="hidden lg:block border-l border-white/10 pl-4">
              <p className="text-[18px] font-sans text-cyan-400 uppercase tracking-[0.11em] font-bold">NEXE-AGENT</p>
            </div>
          </Link>

          {/* --- CENTER: DESKTOP LINKS --- */}
          <div ref={navRef} className="hidden md:flex items-center bg-white/5 p-1 rounded-2xl border border-white/5 relative h-12">
            <motion.div
              className="absolute -top-5 left-0 h-full pointer-events-none flex items-center justify-center"
              animate={{ x: indicatorX - 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <svg width="80" height="60" viewBox="0 0 80 60">
                <path d="M0 45 C15 45 15 15 40 15 C65 15 65 45 80 45" stroke="url(#nav-grad)" strokeWidth="3" fill="none" />
                <defs>
                  <linearGradient id="nav-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.href}
                  ref={(el) => { if (el) linkRefs.current[link.id] = el; }}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-8 h-full flex items-center justify-center z-10"
                >
                  <motion.div
                    animate={{
                      y: isActive ? -15 : 0,
                      scale: isActive ? 1.25 : 1,
                      color: isActive ? "#22d3ee" : "#94a3b8"
                    }}
                  >
                    <Icon size={18} />
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* --- RIGHT: ACTIONS --- */}
          <div className="flex items-center gap-2 md:gap-4 z-50">
            <Button className="hidden md:flex bg-cyan-400 hover:bg-cyan-400/90 text-white rounded-xl px-6 font-bold shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Get Started
            </Button>

            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE DRAWER --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-background/98 backdrop-blur-3xl z-[100] md:hidden flex flex-col"
          >
            {/* Mobile Drawer Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                <p className="text-sm font-bold text-cyan-400 tracking-widest uppercase">NEXE-AGENT</p>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-foreground bg-white/5 rounded-full"
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile Links - Tightened Spacing */}
            <div className="flex flex-col items-start justify-start flex-grow gap-2 px-10 pt-10">
              {navLinks.map((link, idx) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-4 w-full py-2 group"
                  >
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isActive ? "bg-cyan-400 text-white shadow-[0_0_10px_rgba(34,211,238,0.3)]" : "bg-white/5 text-slate-400"
                    }`}>
                      <Icon size={20} />
                    </div>
                    <span className={`text-xl font-bold transition-colors ${
                      isActive ? "text-cyan-400" : "text-foreground/70"
                    }`}>
                      {link.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Action Button */}
            <div className="p-8">
              <Button className="w-full bg-cyan-400 hover:bg-cyan-400/90 h-14 text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;