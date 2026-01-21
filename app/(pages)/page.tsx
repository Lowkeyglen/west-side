'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Flame, Users, ArrowRight, Shield, Globe, Sparkles, Zap, Orbit, Wind, Mail, Phone, Instagram } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Deterministic random function using seed
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHolographic, setIsHolographic] = useState(false);
  const [energyLevel, setEnergyLevel] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  const images = [
    '/images/heroes/cleanup1.jpg',
    '/images/heroes/cleanup2.jpg',
    '/images/heroes/cleanup3.jpg',
  ];

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // SIMPLE BACKGROUND CANVAS (Removed mouse tracking for performance)
  useEffect(() => {
    if (!isClient || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    // Simple starfield (removed complex animations)
    const stars = Array.from({ length: 150 }).map((_, i) => ({
      x: seededRandom(i) * canvas.width,
      y: seededRandom(i * 2) * canvas.height,
      size: seededRandom(i * 3) * 2 + 0.5,
      brightness: seededRandom(i * 4) * 0.5 + 0.5,
    }));
    
    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw deep space gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5
      );
      gradient.addColorStop(0, 'rgba(12, 53, 31, 0.95)');
      gradient.addColorStop(0.3, 'rgba(26, 71, 42, 0.8)');
      gradient.addColorStop(0.6, 'rgba(45, 90, 61, 0.6)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness * 0.1})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [isClient]);

  // HERO IMAGE SLIDER
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isClient, images]);

  // SCROLL ENERGY SYSTEM (simplified)
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setEnergyLevel(Math.min(scrollTop / 2000, 0.5));
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  // Generate deterministic particle positions
  const generateParticlePositions = (count: number) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push({
        x: `${seededRandom(i) * 100}vw`,
        y: `${seededRandom(i * 2) * 100}vh`,
        scale: seededRandom(i * 3) * 0.5 + 0.5,
      });
    }
    return positions;
  };

  const particlePositions = generateParticlePositions(15);

  // INTERACTIVE FEATURES
  const features = [
    {
      icon: <Flame className="h-10 w-10" />,
      title: "Waste Disposal",
      description: "Safe burning and disposal of unattended litter in our communities.",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Youth Leadership",
      description: "Empowering young Kenyans to take climate action in their neighborhoods.",
      color: "from-teal-500 to-emerald-600",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Community Protection",
      description: "Creating cleaner, safer environments for families and children.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Climate Advocacy",
      description: "Raising awareness about environmental conservation across Kenya.",
      color: "from-cyan-500 to-teal-600",
    }
  ];

  const stats = [
    { value: "50+", label: "Clean-up Projects", icon: "🚀", color: "from-emerald-400 to-green-500" },
    { value: "100+", label: "Youth Members", icon: "🌟", color: "from-teal-400 to-emerald-500" },
    { value: "3", label: "Communities Served", icon: "🏘️", color: "from-green-400 to-emerald-500" },
    { value: "10T+", label: "Waste Disposed", icon: "♻️", color: "from-emerald-400 to-teal-500" }
  ];

  // Contact Information
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "ecowarriors.254@gmail.com",
      href: "mailto:ecowarriors.254@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: "0117574570",
      href: "tel:+254117574570"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      text: "@whywainaina",
      href: "https://instagram.com/whywainaina"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-hidden"
      style={{
        '--energy-level': `${energyLevel}`,
      } as React.CSSProperties}
    >
      {/* SIMPLE BACKGROUND CANVAS */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />
      
      {/* SIMPLE ENERGY ORB */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none z-10"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl" />
      </motion.div>

      {/* FLOATING PARTICLES */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full"
              initial={{
                x: pos.x,
                y: pos.y,
                scale: pos.scale,
              }}
              animate={{
                y: `calc(${seededRandom(i * 2) * 100}vh + ${Math.cos(i + Date.now() * 0.0005) * 50}px)`,
                scale: [pos.scale, pos.scale * 1.1, pos.scale],
              }}
              transition={{
                duration: seededRandom(i * 4) * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="relative z-30">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* DYNAMIC BACKGROUND LAYERS */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${images[currentImage]}')` }}
                initial={{ 
                  opacity: 0,
                  scale: 1.1,
                }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                }}
                exit={{ 
                  opacity: 0,
                }}
                transition={{ 
                  duration: 1,
                }}
              />
            </AnimatePresence>
            
            {/* GRADIENT OVERLAYS */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-teal-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-40 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* ANIMATED LOGO */}
              <motion.div
                className="inline-block"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30">
                  <Leaf className="h-16 w-16 text-emerald-300" />
                  <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-300" />
                </div>
              </motion.div>

              {/* MAIN HEADLINE - WHITE TEXT FOR BETTER VISIBILITY */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              >
                <span className="text-white">
                  West Side
                </span>
                <br />
                <motion.span
                  className="inline-block mt-4 text-white"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(255, 255, 255, 0)',
                      '0 0 10px rgba(52, 211, 153, 0.5)',
                      '0 0 10px rgba(255, 255, 255, 0)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  Eco Warriors
                </motion.span>
              </motion.h1>

              {/* SUBTITLE */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-light leading-relaxed"
              >
                Youth-led environmental revolution. Transforming communities through 
                innovative clean-up initiatives and climate advocacy in Kenya.
              </motion.p>

              {/* CONTACT INFO IN HERO */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6 pt-6"
              >
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-400/50 transition-colors"
                  >
                    {contact.icon}
                    <span className="text-emerald-100 font-medium">{contact.text}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-all duration-300 flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    Join The Revolution
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group bg-transparent backdrop-blur-sm border-2 border-emerald-500/30 hover:border-emerald-400/50 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    <Users className="h-5 w-5" />
                    Our Projects
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* SCROLL INDICATOR */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="flex flex-col items-center gap-2">
              <motion.div
                className="w-1 h-12 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full"
                animate={{
                  scaleY: [1, 0.5, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 text-white"
              >
                Our Impact
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-emerald-200 max-w-2xl mx-auto"
              >
                Transforming communities through direct action
              </motion.p>
            </motion.div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.1 
                  }}
                  className="relative group"
                >
                  <div className="relative bg-gradient-to-b from-gray-900/60 to-black/60 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <motion.div
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-emerald-200/80 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="relative py-20">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.h2
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 text-white"
              >
                Our Focus Areas
              </motion.h2>
            </motion.div>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="relative h-full bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 group-hover:border-emerald-400/30 transition-all duration-300">
                    {/* ICON */}
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    
                    <p className="text-emerald-100/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-teal-900/5 to-emerald-900/10" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-10 text-center max-w-3xl mx-auto px-4"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="inline-block p-6 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/20 mb-6"
            >
              <Orbit className="h-16 w-16 text-emerald-300" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Join Our Mission
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-emerald-200/80 mb-8"
            >
              Be part of the change. Together we can create cleaner, greener communities.
            </motion.p>

            {/* SIMPLE CTA BUTTON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 px-12 rounded-2xl text-lg transition-all duration-300 flex items-center gap-3">
                  <Wind className="h-6 w-6" />
                  Get Involved Today
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.button>
            </motion.div>

            {/* CONTACT INFO IN FOOTER */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-emerald-500/20"
            >
              <div className="flex flex-wrap justify-center gap-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-900/20 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/30 transition-colors"
                  >
                    {contact.icon}
                    <span className="text-emerald-100 font-medium">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Selection styling */
        ::selection {
          background: rgba(16, 185, 129, 0.5);
          color: white;
        }
      `}</style>
    </div>
  );
}
