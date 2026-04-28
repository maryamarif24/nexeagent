'use client';

import { Button } from '@/components/ui/button';
import { Zap, Shield, Cpu, Rocket, ArrowRight, Brain, Code, Bot, Sparkles, Terminal, Activity, Scan, BarChart3, Target, TrendingUp, CheckCircle, Mail, MapPin, Clock, User, Briefcase, Send, ShieldCheck, Layers } from 'lucide-react';
import Layout from '@/components/Layout';
import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";
import Team from "@/components/Team";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';
import Link from 'next/link';


const valueProps = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Every solution we build incorporates cutting-edge AI to automate decisions and enhance user experiences.',
  },
  {
    icon: Rocket,
    title: 'Lightning Fast Delivery',
    description: 'From concept to deployment in record time without compromising quality or functionality.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level security protocols protect your data and your customers at every touchpoint.',
  },
  {
    icon: Zap,
    title: 'Infinitely Scalable',
    description: 'Architecture designed to grow with your business, from startup to enterprise scale.',
  },
];

function FloatingVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / innerHeight - 0.5) * 40);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const rotateX = useTransform(mouseY, [-40, 40], [10, -10]);
  const rotateY = useTransform(mouseX, [-40, 40], [-10, 10]);

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-0 bg-cyan-400/10 blur-[120px] rounded-full" />

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative aspect-square rounded-[4rem] 
        bg-white backdrop-blur-2xl 
        border border-white/40 
        shadow-[0_30px_80px_rgba(0,0,0,0.1)] 
        flex items-center justify-center overflow-hidden"
      >
        {/* Gradient animation */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-primary/5"
        />

        {/* Image */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-full h-full flex items-center justify-center p-8"
        >
          <Image
            src="/images/ai-visual.png" 
            alt="AI Visual"
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Glass shine */}
        <div className="absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
} 

const services = [
  {
    icon: Brain,
    title: 'AI-Powered Websites',
    id: 'MOD_01',
    description: 'Websites that think and adapt to your users, making decisions in real-time to optimize conversions and engagement.',
  },
  {
    icon: Code,
    title: 'Custom Software',
    id: 'MOD_02',
    description: 'Tailored solutions built specifically for your business needs, integrating seamlessly with your existing workflows.',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    id: 'MOD_03',
    description: 'Intelligent conversational agents that handle customer inquiries, bookings, and support 24/7.',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    id: 'MOD_04',
    description: 'Streamline operations by automating repetitive tasks and connecting your tools for maximum efficiency.',
  },
  {
    icon: Shield,
    title: 'API Integration',
    id: 'MOD_05',
    description: 'Connect your systems and enable seamless data flow between applications with secure API solutions.',
  },
  {
    icon: Cpu,
    title: 'Data Analytics',
    id: 'MOD_06',
    description: 'Transform raw data into actionable insights with custom dashboards and reporting tools.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Completed', code: 'EXEC_050' },
  { value: '98%', label: 'Client Satisfaction', code: 'SAT_V98' },
  { value: '5+', label: 'Years Experience', code: 'EXP_Y05' },
  { value: '24/7', label: 'Support Available', code: 'UP_TIME' },
];

const values = [
  {
    icon: Brain,
    title: "Intelligent Design",
    description: "Every system we build incorporates smart logic that adapts, learns, and improves over time.",
  },
  {
    icon: Code,
    title: "Innovation First",
    description: "We pursue emerging technologies and creative solutions that give our clients a competitive edge.",
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

const auditSteps = [
  {
    icon: Scan,
    title: "Comprehensive Analysis",
    description: "Our AI scans your current systems, processes, and digital infrastructure."
  },
  {
    icon: BarChart3,
    title: "Performance Metrics",
    description: "We analyze traffic, conversion rates, user behavior, and operational efficiency."
  },
  {
    icon: Target,
    title: "Opportunity Identification",
    description: "Identify bottlenecks, redundancies, and areas for automation and improvement."
  },
  {
    icon: TrendingUp,
    title: "Actionable Recommendations",
    description: "Receive a detailed report with prioritized recommendations for growth."
  }
];



export default function HomePage() {
    
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0.3, 1], ["0%", "-80%"]);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [auditFormData, setAuditFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    businessType: "",
    message: "",
  });

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the data for Web3Forms
      const submissionData = new FormData();
      submissionData.append("access_key", "96b000b2-60cb-4607-8699-72a7e547c7da");
      submissionData.append("name", auditFormData.name);
      submissionData.append("email", auditFormData.email);
      submissionData.append("company", auditFormData.company);
      submissionData.append("website", auditFormData.website);
      submissionData.append("businessType", auditFormData.businessType);
      submissionData.append("message", auditFormData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Audit Request Submitted",
          description: "Your audit request has been received. Our team will analyze your business and contact you within 24 hours.",
        });
        setAuditFormData({
          name: "",
          email: "",
          company: "",
          website: "",
          businessType: "",
          message: ""
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Request Failed",
        description: "There was an issue submitting your audit request. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAuditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAuditFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the data for Web3Forms
      const submissionData = new FormData();
      submissionData.append("access_key", "96b000b2-60cb-4607-8699-72a7e547c7da");
      submissionData.append("name", contactFormData.name);
      submissionData.append("email", contactFormData.email);
      submissionData.append("company", contactFormData.company);
      submissionData.append("message", contactFormData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Transmission Received",
          description: "Data packet successfully sent. Response scheduled within 24 hours.",
        });
        setContactFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Link Interrupted",
        description: "Communication failed. Please check your connection or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      
      {/* Hero Section - Office Background with Light Overlay */}
      <section id="home" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-40">
        {/* Office Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Office.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Light Translucent Overlay */}
        <div className="absolute inset-0 bg-white/30 z-1" />

        {/* Subtle gradient for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-white/30 via-transparent to-white/20 z-2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
    >
      <span
        className="text-[#1a1c2e]"
        style={{
          textShadow: `
            1px 1px 0 #2a2c3e,
            2px 2px 0 #3a3c4e,
            3px 3px 0 #4a4c5e,
            4px 4px 0 #5a5c6e,
            5px 5px 0 #6a6c7e,
            6px 6px 0 #7a7c8e,
            7px 7px 10px rgba(0, 0, 0, 0.5),
            8px 8px 20px rgba(0, 0, 0, 0.3)
          `
        }}
      >
        WE BUILD WEBSITES
      </span>
      <br />
      {/* Updated to solid cyan with a drop shadow for visibility */}
      <span
        className="text-[#00bcd4]"
        style={{
          textShadow: `
            1px 1px 0 #008b9e,
            2px 2px 0 #007a8a,
            3px 3px 0 #006976,
            4px 4px 0 #005862,
            5px 5px 0 #00474e,
            6px 6px 0 #00363a,
            7px 7px 10px rgba(0, 0, 0, 0.8),
            8px 8px 20px rgba(0, 0, 0, 0.6)
          `
        }}
      >
        THAT THINK.
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
      style={{
        textShadow: `
          1px 1px 0 #fff,
          -1px -1px 0 #fff,
          1px -1px 0 #fff,
          -1px 1px 0 #fff,
          0 4px 10px rgba(255, 255, 255, 0.6)
        `
      }}
    >
      Transform your business with AI-powered automation, intelligent systems,
      and digital products that work smarter so you can scale faster.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row items-center gap-4"
    >
      <Button 
        variant="default" 
        size="xl" 
        asChild 
        className="text-white rounded-2xl px-10 h-16 text-lg font-bold bg-[#00bcd4] hover:bg-[#00acc1] shadow-lg shadow-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/40 hover:scale-105 transition-all"
      >
        <Link href="#audit" className="flex items-center gap-3">
          Get a Free Audit <ArrowRight size={20} />
        </Link>
      </Button>
      
      <Button 
        variant="outline" 
        size="xl" 
        asChild 
        className="rounded-2xl px-10 h-16 text-lg border-2 border-gray-100 bg-white hover:bg-gray-50 text-gray-900 shadow-sm"
      >
        <Link href="#contact">Contact Us</Link>
      </Button>
    </motion.div>
  </div>
        </div>
      </section>



      {/* Value Props - Modern Glass Cards */}
      <section className="py-32 relative bg-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center gap-2"
            >
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Core Infrastructure</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Built for the <span className="italic text-cyan-400">Future</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
              Standard protocols applied for next-gen scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-8 rounded-[2.5rem] bg-linear-to-br from-gray-50/80 to-white border border-gray-100 hover:border-cyan-400/30 hover:bg-white hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] transition-all duration-500"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-cyan-400/10 transition-all duration-500" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-500"
                  >
                    <prop.icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors duration-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {prop.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexe-Agent - Modern Animated Split View */}
      <section className="py-32 bg-gray-50/50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-tight"
                >
                  Why <span className="text-cyan-400 italic">Nexe-Agent</span>?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-500 text-lg leading-relaxed"
                >
                  We are not just developers. We are strategic partners who understand that
                  technology should serve your business goals.
                </motion.p>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: Code, text: "Custom solutions tailored to your exact needs" },
                  { icon: Bot, text: "AI integration that actually adds value" },
                  { icon: Cpu, text: "Scalable architecture from day one" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      x: 8,
                      transition: { duration: 0.3 }
                    }}
                    className="group flex items-center gap-5 p-5 rounded-2xl bg-white shadow-sm border border-gray-100 hover:border-cyan-400/30 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                    >
                      <item.icon size={20} />
                    </motion.div>
                    <span className="text-gray-700 font-semibold text-sm group-hover:text-cyan-400 transition-colors duration-300">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button variant="glow" size="lg" asChild className="rounded-2xl px-8 h-14 font-bold">
                  <Link href="/about" className="gap-2">
                    Learn More About Us <ArrowRight size={18} />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Organic Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FloatingVisual/>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Final CTA - Clean & Focused */}
      <section className="py-40 relative bg-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter"
            >
              READY TO BUILD <br />
              <span className="text-cyan-400 italic underline decoration-cyan-400/20 underline-offset-8">INTELLIGENT?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto font-medium"
            >
              Let us analyze your business and show you exactly how AI and automation
              can transform your operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <Button variant="glow" size="xl" asChild className="rounded-full px-12 h-20 text-xl font-bold">
                <Link href="/audit" className="gap-3">
                  Get Your Free Audit <ArrowRight size={24} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>


        {/* Services Section */}
      <div id="services" className="h-full min-h-screen bg-transparent text-gray-700 selection:bg-cyan-400/30 pb-10">

        {/* HERO */}
        <section className="relative pt-10 pb-10 overflow-hidden border-b border-gray-200">
          {/* Subtle background decoration */}
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter mb-8"
              >
                OUR <span className="text-cyan-400 italic">SERVICES</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Comprehensive digital solutions designed to accelerate your business growth through
                <span className="text-cyan-400 font-medium"> intelligence and automation.</span>
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* 🔥 HORIZONTAL SCROLL SECTION */}
        <section ref={containerRef} className="relative">

          <div className="h-[300vh] relative">

            <div className="sticky -top-10 h-screen flex items-center overflow-hidden">

              <motion.div
                style={{ x }}
                className="flex gap-8 px-12 md:px-24"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative w-87.5 md:w-112.5 shrink-0 p-10 bg-white border border-gray-200 rounded-3xl hover:border-cyan-400/30 hover:bg-gray-50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] transition-all duration-500"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-cyan-400/10 transition-all duration-500" />

                    <div className="absolute top-0 right-0 p-6 text-[10px] font-mono text-gray-400 group-hover:text-cyan-400/60 transition-colors duration-300">
                      {service.id}
                    </div>

                    <div className="space-y-3 relative z-10">

                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300"
                      >
                        <service.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                      </motion.div>

                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-500 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-background relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />

        {/* --- HERO: SYSTEM BRIEFING --- */}
        <div className="relative pt-40 pb-24 overflow-hidden border-b border-foreground/5">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-3 text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-6"
                >
                  <Terminal size={14} />
                  Origin_Story.log
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-none mb-8"
                >
                  Building the Future of <br />
                  <span className="text-cyan-400 italic">
                    Intelligent Business
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-muted-foreground leading-relaxed max-w-2xl border-l-2 border-cyan-400/20 pl-8"
                >
                  Nexe-Agent was founded on a simple belief: technology should amplify human potential,
                  not complicate it. We make artificial intelligence accessible, practical, and transformative
                  for businesses of every size.
                </motion.p>
              </div>

              {/* Technical Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:block lg:col-span-4 border-l border-foreground/5 pl-12"
              >
                <div className="space-y-8 py-4 opacity-40">
                   <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">System_Parameters</div>
                   <div className="flex flex-col gap-1 text-xs font-mono">
                      <span>{'>'} AGENT_TYPE: HUMAN_AUGMENTATION</span>
                      <span>{'>'} STATUS: OPERATIONAL_V.2.4</span>
                      <span>{'>'} ENCRYPTION: AES_256_ACTIVE</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* --- STATS: DATA METRICS --- */}
        <div className="py-20 bg-cyan-400/[0.02] border-b border-foreground/5 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-foreground/5 hover:border-cyan-400/30 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] transition-all"
                >
                  <div className="text-[10px] font-mono text-muted-foreground mb-2 group-hover:text-cyan-400/60 transition-colors">{stat.code}</div>
                  <div className="text-4xl font-black text-cyan-400 mb-1 group-hover:text-cyan-500 transition-colors">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- MISSION: CORE DIRECTIVE --- */}
        <div className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full opacity-20" />
                <div className="relative aspect-video rounded-3xl bg-background/60 backdrop-blur-md border border-foreground/10 hover:border-cyan-400/30 p-12 overflow-hidden transition-all duration-500">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-muted-foreground">MISSION_CONTROL</div>
                  <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center animate-pulse"
                    >
                      <Target className="w-10 h-10 text-cyan-400" />
                    </motion.div>
                    <div className="text-center space-y-2">
                       <h3 className="text-2xl font-bold text-foreground uppercase tracking-tighter">Our Vision</h3>
                       <p className="text-muted-foreground text-sm max-w-xs mx-auto italic">
                        "A world where intelligent systems eliminate manual work and unlock exponential growth for every business."
                       </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter leading-none">
                  Reducing Manual Work, <br />
                  <span className="text-cyan-400">Increasing Efficiency</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We saw too many businesses drowning in repetitive tasks. Every hour spent on manual work is an hour not spent on innovation.
                </p>
                <div className="grid gap-4">
                  {[
                    { icon: Brain, text: 'Cutting-edge AI integration' },
                    { icon: Code, text: 'Clean, maintainable architecture' },
                    { icon: Zap, text: 'Reclaiming time for what truly matters' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 8, transition: { duration: 0.3 } }}
                      className="flex items-center gap-4 group"
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 rounded-lg bg-foreground/[0.05] border border-foreground/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all"
                      >
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </motion.div>
                      <span className="text-foreground font-medium tracking-tight group-hover:text-cyan-400 transition-colors">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* --- TEAM SECTION --- */}
        <Team />

        {/* --- VALUES: SYSTEM GUIDELINES --- */}
        <div className="py-32 relative border-y border-foreground/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mb-20 space-y-4 text-center lg:text-left"
            >
              <h2 className="text-4xl font-bold text-foreground tracking-tight uppercase">
                Core <span className="text-cyan-400">Values</span>
              </h2>
              <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                The principles that guide every decision and every line of code we write.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative p-8 rounded-2xl bg-foreground/[0.02] backdrop-blur-sm border border-foreground/5 hover:border-cyan-400/40 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] transition-all duration-500"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-xl bg-cyan-400/5 border border-cyan-400/20 flex items-center justify-center mb-8 group-hover:bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all"
                  >
                    <value.icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- FINAL CALL TO ACTION --- */}
        <div className="py-40 relative overflow-hidden text-center">
          {/* Subtle background decoration */}
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto space-y-10"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-12 h-12 text-cyan-400 mx-auto" />
              </motion.div>
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-none"
                >
                  Ready to <br /> Work With Us?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-muted-foreground font-mono uppercase tracking-widest"
                >
                  {"//"} Join the growing list of businesses transforming operations.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button variant="glow" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full px-12 h-16 text-lg font-bold">
                  <span className="flex items-center gap-3">
                    Start a Conversation
                    <ArrowRight size={20} />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section id="audit" className="py-20 bg-background relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />

        {/* --- HERO: AUDIT INTRODUCTION --- */}
        <div className="relative pt-40 pb-20 overflow-hidden border-b border-foreground/5">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-6"
              >
                <Activity size={14} />
                AI_AUDIT_PROTOCOL_INITIATED
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-none mb-8 uppercase"
              >
                Free <span className="text-cyan-400 italic">AI Audit</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed font-light border-l-2 border-cyan-400/20 pl-8"
              >
                Discover hidden opportunities for growth, efficiency, and automation in your business.
                Our AI-powered audit identifies bottlenecks and provides actionable recommendations.
              </motion.p>
            </div>
          </div>
        </div>

        {/* --- AUDIT BENEFITS SECTION --- */}
        <div className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {auditSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:border-cyan-400/30 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-4 group-hover:bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all"
                  >
                    <step.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- MAIN AUDIT FORM --- */}
        <div className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                  Request Your <span className="text-cyan-400">Free AI Audit</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Fill out this form to receive a comprehensive analysis of your business operations,
                  digital infrastructure, and AI integration opportunities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000" />

                <div className="relative p-8 md:p-12 rounded-2xl bg-background/60 backdrop-blur-md border border-foreground/10 hover:border-cyan-400/30 shadow-2xl transition-all duration-500">
                  <div className="flex justify-between items-center mb-10 border-b border-foreground/5 pb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground tracking-tight">Audit Information</h2>
                      <p className="text-muted-foreground text-xs font-mono uppercase mt-1">Status: Ready_For_Analysis</p>
                    </div>
                    <ShieldCheck className="text-cyan-400/40 w-8 h-8" />
                  </div>

                  <form onSubmit={handleAuditSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Full_Name</label>
                        <div className="relative">
                          <input
                            id="name"
                            name="name"
                            value={auditFormData.name}
                            onChange={handleAuditChange}
                            placeholder="John Doe"
                            className="w-full h-14 pl-12 bg-foreground/[0.02] border border-foreground/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-foreground placeholder:text-muted-foreground rounded-xl transition-all"
                            required
                          />
                          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Email_Address</label>
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={auditFormData.email}
                            onChange={handleAuditChange}
                            placeholder="john@company.com"
                            className="w-full h-14 pl-12 bg-foreground/[0.02] border border-foreground/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-foreground placeholder:text-muted-foreground rounded-xl transition-all"
                            required
                          />
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/40" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Company_Name</label>
                        <div className="relative">
                          <input
                            id="company"
                            name="company"
                            value={auditFormData.company}
                            onChange={handleAuditChange}
                            placeholder="Your Company Name"
                            className="w-full h-14 pl-12 bg-foreground/[0.02] border border-foreground/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-foreground placeholder:text-muted-foreground rounded-xl transition-all"
                            required
                          />
                          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Website_URL</label>
                        <div className="relative">
                          <input
                            id="website"
                            name="website"
                            value={auditFormData.website}
                            onChange={handleAuditChange}
                            placeholder="https://yourwebsite.com"
                            className="w-full h-14 pl-12 bg-foreground/[0.02] border border-foreground/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-foreground placeholder:text-muted-foreground rounded-xl transition-all"
                            required
                          />
                          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Business_Type</label>
                      <div className="relative">
                        <select
                          id="businessType"
                          name="businessType"
                          value={auditFormData.businessType}
                          onChange={(e) => setAuditFormData({...auditFormData, businessType: e.target.value})}
                          className="w-full h-14 pl-12 bg-foreground/[0.02] border border-foreground/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-foreground rounded-xl appearance-none cursor-pointer transition-all"
                          required
                        >
                          <option value="" className="bg-background">Select your business type</option>
                          <option value="e-commerce" className="bg-background">E-commerce</option>
                          <option value="saas" className="bg-background">SaaS</option>
                          <option value="agency" className="bg-background">Agency</option>
                          <option value="consulting" className="bg-background">Consulting</option>
                          <option value="healthcare" className="bg-background">Healthcare</option>
                          <option value="finance" className="bg-background">Finance</option>
                          <option value="education" className="bg-background">Education</option>
                          <option value="other" className="bg-background">Other</option>
                        </select>
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Specific_Areas_for_Audit</label>
                      <textarea
                        id="message"
                        name="message"
                        value={auditFormData.message}
                        onChange={handleAuditChange}
                        placeholder="Which areas of your business would you like us to focus on during the audit? (e.g., website performance, customer journey, automation opportunities, etc.)"
                        rows={5}
                        className="w-full bg-foreground/[0.02] border border-foreground/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-foreground placeholder:text-muted-foreground rounded-xl resize-none p-6 transition-all"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="glow"
                      size="xl"
                      className="w-full h-16 gap-3 font-black uppercase tracking-widest rounded-xl transition-all active:scale-[0.98]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing Request..." : "Request Free Audit"}
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* --- AUDIT OUTCOME SECTION --- */}
        <div className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-12"
              >
                What You'll Receive in Your <span className="text-cyan-400">Free AI Audit</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Performance Report",
                    description: "Detailed analysis of your current systems and processes"
                  },
                  {
                    icon: TrendingUp,
                    title: "Growth Opportunities",
                    description: "Identification of untapped potential in your business"
                  },
                  {
                    icon: Target,
                    title: "Action Plan",
                    description: "Step-by-step roadmap to implement improvements"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="group p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:border-cyan-400/30 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all"
                    >
                      <item.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px]" />

        {/* --- HERO: UPLINK STATUS --- */}
        <div className="relative pt-40 pb-20 overflow-hidden border-b border-foreground/5">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-6"
              >
                <Terminal size={14} />
                Communication_Channel_Secure
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-none mb-8 uppercase"
              >
                Let's Build Something <br />
                <span className="text-cyan-400 italic">Brilliant</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed font-light border-l-2 border-cyan-400/20 pl-8"
              >
                Whether you have a specific project in mind or just want to explore
                what is possible, we are here to listen. Every great partnership starts
                with a conversation.
              </motion.p>
            </div>
          </div>
        </div>

        {/* --- MAIN INTERFACE --- */}
        <div className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* --- TRANSMISSION FORM --- */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 order-2 lg:order-1"
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000" />
                  <div className="relative p-8 md:p-12 rounded-2xl bg-background/60 backdrop-blur-md border border-foreground/10 hover:border-cyan-400/30 shadow-2xl transition-all duration-500">
                    <div className="flex justify-between items-center mb-10 border-b border-foreground/5 pb-6">
                       <div>
                          <h2 className="text-2xl font-bold text-foreground tracking-tight">Send Us a Message</h2>
                          <p className="text-muted-foreground text-xs font-mono uppercase mt-1">Status: Ready_For_Input</p>
                       </div>
                       <ShieldCheck className="text-cyan-400/40 w-8 h-8" />
                    </div>

                    <form onSubmit={handleContactSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Subject_Name</label>
                          <div className="relative">
                            <input
                              id="name"
                              name="name"
                              value={contactFormData.name}
                              onChange={handleContactChange}
                              placeholder="John Doe"
                              className="w-full h-14 pl-12 bg-foreground/[0.02] border border-foreground/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-foreground placeholder:text-muted-foreground rounded-xl transition-all"
                              required
                            />
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/40" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Email_Address</label>
                          <div className="relative">
                            <input
                              id="email"
                              name="name"
                              type="email"
                              value={contactFormData.email}
                              onChange={handleContactChange}
                              placeholder="john@company.com"
                              className="w-full h-14 pl-12 bg-foreground/[0.02] border border-foreground/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-foreground placeholder:text-muted-foreground rounded-xl transition-all"
                              required
                            />
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/40" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Organization (Optional)</label>
                        <div className="relative">
                          <input
                            id="company"
                            name="company"
                            value={contactFormData.company}
                            onChange={handleContactChange}
                            placeholder="Your Company Name"
                            className="w-full h-14 pl-12 bg-foreground/[0.02] border border-foreground/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-foreground placeholder:text-muted-foreground rounded-xl transition-all"
                          />
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/40" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Message_Body</label>
                        <textarea
                          id="message"
                          name="message"
                          value={contactFormData.message}
                          onChange={handleContactChange}
                          placeholder="Tell us about your project, goals, or questions..."
                          rows={5}
                          className="w-full bg-foreground/[0.02] border border-foreground/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 text-foreground placeholder:text-muted-foreground rounded-xl resize-none p-6 transition-all"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="glow"
                        size="xl"
                        className="w-full h-16 gap-3 font-black uppercase tracking-widest rounded-xl transition-all active:scale-[0.98]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Transmitting..." : "Initialize Transfer"}
                        <Send className="w-5 h-5" />
                      </Button>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* --- SIDEBAR --- */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 order-1 lg:order-2 space-y-8"
              >
                <div className="space-y-10">
                  <h2 className="text-3xl font-bold text-foreground tracking-tight">
                    Connection <span className="text-cyan-400">Points</span>
                  </h2>

                  <div className="space-y-8">
                    {[
                      { icon: Mail, title: "Email Us Directly", detail: "nexeagent@gmail.com", isLink: true },
                      { icon: Clock, title: "Response Time", detail: "Latency: < 24 Hours", isLink: false },
                      { icon: MapPin, title: "Global Reach", detail: "Distributed Network", isLink: false }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                        whileHover={{ x: 8, transition: { duration: 0.3 } }}
                        className="flex gap-6 group"
                      >
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-14 h-14 rounded-2xl bg-foreground/[0.03] border border-foreground/5 flex items-center justify-center shrink-0 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 transition-all duration-500"
                        >
                          <item.icon className="w-6 h-6 text-cyan-400" />
                        </motion.div>
                        <div className="space-y-1">
                          <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">{item.title}</h3>
                          {item.isLink ? (
                            <a href={`mailto:${item.detail}`} className="text-xl font-bold text-foreground hover:text-cyan-400 transition-colors block">
                              {item.detail}
                            </a>
                          ) : (
                            <p className="text-xl font-bold text-foreground">{item.detail}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-transparent border border-cyan-400/20 overflow-hidden group hover:border-cyan-400/40 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="text-cyan-400"><Sparkles size={60} /></span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-3 italic">Get a Free AI Audit</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
                      Request a complimentary analysis of your business operations.
                    </p>
                    <Button variant="outline" onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })} className="w-full h-12 border-cyan-400/40 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold uppercase tracking-tighter transition-all">
                      <span className="flex items-center gap-2">
                        Request Free Audit
                        <ArrowRight size={18} />
                      </span>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* --- FOOTER BANNER --- */}
        <div className="py-24 border-t border-foreground/5">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase">
                The Future Starts With a <span className="text-cyan-400 italic">Single Message</span>
              </h2>
              <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.3em]">
                {"//"} Break the cycle of manual operations. Update your system today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}