'use client';

import { motion } from 'framer-motion';
import { Users, Mail, Globe, Code, Shield, Camera, Book, Music, Goal, Coffee, Trophy, Phone, Instagram, Zap, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProfileImage from '@/app/components/ProfileImage';

const teamMembers = [
  {
    id: 1,
    name: "Glen",
    role: "Founder & Tech Lead",
    bio: "Coordinates operations and handles the digital presence of the initiative.",
    personal: "Web Developer / Cybersecurity Enthusiast",
    personalIcon: <Code className="h-4 w-4" />,
    hobbies: ["Coding", "Security Research", "Photography"],
    email: "glen@westsideecowarriors.org",
    phone: "0115185256",
    color: "from-emerald-500 to-teal-600",
    isLeader: true,
  },
  {
    id: 2,
    name: "Brian",
    role: "Field Operations Lead",
    bio: "Leads on-ground clean-up operations and team coordination.",
    personal: "Environmental Activist",
    personalIcon: <Globe className="h-4 w-4" />,
    hobbies: ["Community Organizing", "Sports", "Music"],
    phone: "0799567838",
    color: "from-emerald-500 to-green-600",
    isLeader: true,
  },
  {
    id: 3,
    name: "Lewis",
    role: "Community Relations",
    bio: "Builds partnerships with local communities and stakeholders.",
    personal: "Public Relations Student",
    personalIcon: <Users className="h-4 w-4" />,
    hobbies: ["Networking", "Reading"],
    phone: "0796386423",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    name: "Deno",
    role: "Logistics & Safety",
    bio: "Manages equipment and ensures safety protocols during operations.",
    personal: "Logistics Management",
    personalIcon: <Shield className="h-4 w-4" />,
    hobbies: ["Planning", "Team Management", "Fitness"],
    phone: "0712066606",
    color: "from-teal-500 to-emerald-600",
  },
  {
    id: 5,
    name: "Wainaina",
    role: "Youth Engagement",
    bio: "Recruits and mentors new members, focusing on youth participation.",
    personal: "Youth Advocate",
    personalIcon: <Trophy className="h-4 w-4" />,
    hobbies: ["Skating", "Youth Mentorship", "Outdoor Activities"],
    phone: "0117574570",
    instagram: "@whywainaina",
    instagramLink: "https://instagram.com/whywainaina",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: 6,
    name: "Esther",
    role: "Community Volunteer",
    bio: "Dedicated to hands-on environmental work and community service.",
    personal: "Community Development",
    personalIcon: <Users className="h-4 w-4" />,
    hobbies: ["Community Service", "Reading", "Music"],
    phone: "0700506908",
    color: "from-emerald-400 to-green-500",
  },
];

const hobbyIcons = {
  "Coding": <Code className="h-4 w-4" />,
  "Security Research": <Shield className="h-4 w-4" />,
  "Photography": <Camera className="h-4 w-4" />,
  "Community Organizing": <Users className="h-4 w-4" />,
  "Sports": <Goal className="h-4 w-4" />,
  "Music": <Music className="h-4 w-4" />,
  "Networking": <Users className="h-4 w-4" />,
  "Reading": <Book className="h-4 w-4" />,
  "Planning": <Book className="h-4 w-4" />,
  "Team Management": <Users className="h-4 w-4" />,
  "Fitness": <Goal className="h-4 w-4" />,
  "Skating": <Trophy className="h-4 w-4" />,
  "Youth Mentorship": <Users className="h-4 w-4" />,
  "Outdoor Activities": <Globe className="h-4 w-4" />,
  "Community Service": <Users className="h-4 w-4" />,
};

export default function ProfilesPage() {
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
                <Users className="h-16 w-16 text-emerald-300" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-300" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              Meet Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Eco Warriors</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-emerald-100/80 max-w-3xl mx-auto"
            >
              The passionate youth driving environmental change in West Side, Kenya. 
              Each member brings unique skills and energy to our mission.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Our Core Team</h2>
            <p className="text-emerald-200/60 max-w-2xl mx-auto">
              6 committed members leading environmental action in West Side
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/profiles/${member.id}`}>
                  <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 group-hover:border-emerald-400/30 transition-all duration-300 h-full overflow-hidden">
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
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.color} blur-xl`} />
                    </motion.div>

                    {/* Profile Header */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Profile Image */}
                      <div className="mb-4">
                        <ProfileImage 
                          name={member.name}
                          color={member.color}
                          size="md"
                          isLeader={member.isLeader}
                        />
                      </div>

                      {/* Name & Role */}
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${member.color} text-white text-sm font-medium mb-3`}>
                        {member.isLeader && <Sparkles className="h-3 w-3" />}
                        {member.role}
                      </div>
                      
                      {/* Bio */}
                      <p className="text-emerald-100/70 text-sm mb-4">{member.bio}</p>
                      
                      {/* Personal Info */}
                      <div className="w-full bg-emerald-900/20 rounded-lg p-3 mb-4 border border-emerald-500/20">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          {member.personalIcon}
                          <span className="font-medium text-sm text-emerald-200">Focus</span>
                        </div>
                        <p className="text-emerald-100 text-sm">{member.personal}</p>
                      </div>

                      {/* Hobbies */}
                      <div className="w-full mb-4">
                        <p className="text-sm font-medium text-emerald-200 mb-2">Interests</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.hobbies.slice(0, 3).map((hobby, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-900/40 text-emerald-100 rounded-full text-xs border border-emerald-500/30"
                            >
                              {hobbyIcons[hobby as keyof typeof hobbyIcons] || <Coffee className="h-3 w-3" />}
                              {hobby}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="w-full border-t border-emerald-500/20 pt-4 space-y-2">
                        <div className="flex items-center justify-center gap-2 text-sm text-emerald-200/80">
                          <Phone className="h-4 w-4" />
                          <span>{member.phone}</span>
                        </div>
                        
                        {/* Show Instagram for Wainaina */}
                        {member.instagram && (
                          <a 
                            href={member.instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-sm text-emerald-200/80 hover:text-pink-300 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Instagram className="h-4 w-4" />
                            {member.instagram}
                          </a>
                        )}
                        
                        {/* Show email for Glen */}
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="flex items-center justify-center gap-2 text-sm text-emerald-200/80 hover:text-emerald-300 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="h-4 w-4" />
                            {member.email}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <ArrowRight className="h-5 w-5 text-emerald-400" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10" />
              </div>
              
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-4 relative z-10"
              >
                Want to Join Our Warriors?
              </motion.h2>
              <p className="text-emerald-200/60 mb-8 max-w-2xl mx-auto relative z-10">
                We're always looking for passionate individuals who want to make a difference in their community.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group inline-block"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300" />
                <Link
                  href="/contact"
                  className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3"
                >
                  <Users className="h-5 w-5" />
                  Get Involved
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
