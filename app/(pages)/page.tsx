'use client';

import { motion } from 'framer-motion';
import { Leaf, Flame, Users, Target, ArrowRight, Shield, Globe } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/heroes/cleanup1.jpg',
    '/images/heroes/cleanup2.jpg',
    '/images/heroes/cleanup3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Waste Disposal",
      description: "Safe burning and disposal of unattended litter in our communities.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Youth Leadership",
      description: "Empowering young Kenyans to take climate action in their neighborhoods.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Community Protection",
      description: "Creating cleaner, safer environments for families and children.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Climate Advocacy",
      description: "Raising awareness about environmental conservation across Kenya.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { value: "50+", label: "Clean-up Projects" },
    { value: "100+", label: "Youth Members" },
    { value: "3", label: "Communities Served" },
    { value: "10T+", label: "Waste Disposed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Slider */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${img}')` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block p-3 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            >
              <Leaf className="h-12 w-12" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              West Side <span className="text-yellow-300">Eco Warriors</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
              Youth-led environmental action. Transforming communities through clean-up initiatives 
              and climate advocacy in Kenya.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/about">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/profiles">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2"
                >
                  Meet Our Team <Users className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As part of the Kenya Government Climate Workx Project, we're taking concrete action 
              to combat environmental degradation in our communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-green text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Movement</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of the change. Together, we can create cleaner, greener communities for future generations.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                  Get Involved Today
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
