'use client';

import { motion } from 'framer-motion';
import { Target, Users, Globe, Shield, Calendar, MapPin, Users as UsersIcon, Leaf, Flame, Zap, Sparkles, ArrowRight, Wind, Award, Trophy, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const missions = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description: "To eradicate unattended litter through safe disposal methods and transform West Side communities into clean, sustainable environments.",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Our Vision",
      description: "A Kenya where every community takes ownership of their environment, fostering a culture of cleanliness and climate responsibility.",
      color: "from-teal-500 to-emerald-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Our Values",
      description: "Youth empowerment, community collaboration, environmental stewardship, and sustainable development.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Our Promise",
      description: "To lead by example, inspire change, and create measurable impact in the fight against environmental degradation.",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  const aboutDetails = [
    {
      icon: <Calendar className="h-5 w-5" />,
      text: "Founded in 2026"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Based in West Side, Kenya"
    },
    {
      icon: <UsersIcon className="h-5 w-5" />,
      text: "100+ Youth Members"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-teal-950/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Animated Logo */}
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

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              About <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">West Side Eco Warriors</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-emerald-100/80 max-w-3xl mx-auto"
            >
              A youth-led environmental initiative dedicated to transforming communities through 
              action, advocacy, and sustainable change.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              {aboutDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-emerald-900/30 backdrop-blur-sm rounded-full border border-emerald-500/30">
                  {detail.icon}
                  <span className="text-emerald-200 font-medium">{detail.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Journey</h2>
              <div className="space-y-4 text-emerald-100/80">
                <p>
                  In early 2026, a group of passionate young Kenyans from West Side recognized 
                  a critical issue in their communities: unattended litter was becoming a serious 
                  health hazard and environmental threat.
                </p>
                <p>
                  Instead of waiting for solutions, we decided to become the solution. 
                  What started as a small neighborhood clean-up initiative has grown into 
                  a full-fledged environmental movement driven by youth passion and commitment.
                </p>
                <p>
                  Today, West Side Eco Warriors brings together over 100 young environmental 
                  champions who are actively transforming their communities through systematic 
                  waste disposal, environmental education, and climate advocacy.
                </p>
                <p className="font-semibold text-emerald-300">
                  We believe that real change starts at the grassroots level, and we're 
                  proving that youth can lead the way in environmental conservation.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20 overflow-hidden">
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5" />
                
                <h3 className="text-2xl font-bold mb-6 text-emerald-300 flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Why We Do It
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Clean Communities",
                      desc: "Every child deserves to play in a clean, safe environment"
                    },
                    {
                      title: "Health Protection",
                      desc: "Reducing disease vectors from accumulated waste"
                    },
                    {
                      title: "Youth Leadership",
                      desc: "Empowering young people to lead environmental solutions"
                    },
                    {
                      title: "Sustainable Future",
                      desc: "Building habits today for a cleaner tomorrow"
                    }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2.5"></div>
                      <div>
                        <span className="font-semibold text-emerald-200">{item.title}:</span>
                        <p className="text-emerald-100/70">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 group-hover:border-emerald-400/30 transition-all duration-300 h-full">
                  {/* Background Energy Orb */}
                  <motion.div
                    className="absolute -inset-4 opacity-30"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                    }}
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${mission.color} blur-xl`} />
                  </motion.div>

                  <div className="relative z-10">
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${mission.color} mb-4`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white">
                        {mission.icon}
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 text-white">
                      {mission.title}
                    </h3>
                    
                    <p className="text-emerald-100/70">
                      {mission.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              How We Create Change
            </motion.h2>
            <p className="text-emerald-200/60 max-w-2xl mx-auto">
              Our systematic approach to community transformation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Identify", desc: "Locate unattended litter hotspots in West Side communities", icon: <Target className="h-5 w-5" /> },
              { step: "02", title: "Organize", desc: "Mobilize our youth team and plan safe disposal operations", icon: <Users className="h-5 w-5" /> },
              { step: "03", title: "Execute", desc: "Conduct clean-up using proper safety and environmental protocols", icon: <Flame className="h-5 w-5" /> },
              { step: "04", title: "Educate", desc: "Engage community members on proper waste management practices", icon: <Globe className="h-5 w-5" /> },
              { step: "05", title: "Monitor", desc: "Track cleaned areas to prevent waste re-accumulation", icon: <Shield className="h-5 w-5" /> },
              { step: "06", title: "Advocate", desc: "Push for long-term solutions to community waste challenges", icon: <Award className="h-5 w-5" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 group-hover:border-emerald-400/30 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-emerald-900/30 border border-emerald-500/30">
                      {item.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-white text-center">{item.title}</h4>
                  <p className="text-emerald-100/70 text-center">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative text-center max-w-3xl mx-auto px-4"
        >
          <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10" />
            </div>
            
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
              <Trophy className="h-16 w-16 text-emerald-300" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
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

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300" />
                <Link
                  href="/contact"
                  className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 px-12 rounded-2xl text-lg transition-all duration-300 flex items-center gap-3"
                >
                  <Wind className="h-6 w-6" />
                  Get Involved Today
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
