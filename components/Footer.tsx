'use client';

import Link from "next/link";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = ["Home", "Services", "About", "Contact"];
  const services = [
    "AI Websites",
    "Custom Software",
    "Business Automation",
    "AI Chatbots",
    "API Integration",
  ];

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          
          {/* Brand */}
          <div className="flex flex-col max-w-sm space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                <img src="/logo.png" alt="Logo" className="w-6 h-6 invert" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Nexe<span className="text-primary">.Agent</span>
              </span>
            </Link>
            
            <p className="text-gray-500 leading-relaxed font-light">
              Designing the next generation of <span className="text-gray-900 font-medium">intelligent interfaces</span>. 
              We bridge the gap between human intent and machine execution.
            </p>

            {/* Social Icons (Images) */}
            <div className="flex items-center gap-4">
              {[
                { img: "/icons/twitter.png", link: "#" },
                { img: "/icons/github.png", link: "#" },
                { img: "/icons/linkedin.png", link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:border-primary/20 transition-all"
                >
                  <img src={social.img} alt="social" className="w-4 h-4 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Navigation</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="text-gray-600 hover:text-primary text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Expertise</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <Link href="/services" className="text-gray-600 hover:text-primary text-sm">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:max-w-xs w-full">
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles size={16} />
                <span className="text-xs font-bold uppercase tracking-tighter">Ready to evolve?</span>
              </div>
              <h5 className="text-gray-900 font-semibold">Let's talk about your project.</h5>
              <a 
                href="mailto:nexeagent@gmail.com" 
                className="flex items-center justify-between w-full p-3 bg-white border border-gray-200 rounded-xl hover:border-primary/30 transition-all group"
              >
                <span className="text-sm text-gray-600 group-hover:text-primary">Contact Us</span>
                <ArrowRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100">
          <p className="text-gray-400 text-xs">
            © {currentYear} Nexe-Agent. Built with precision for the AI era.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;