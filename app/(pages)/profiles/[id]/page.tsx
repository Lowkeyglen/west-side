'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowLeft, Instagram, Globe, Code, Shield, Camera, Book, Music, Goal, Trophy, Users, Zap, Sparkles, Calendar, Award, Target, BarChart } from 'lucide-react';
import Link from 'next/link';
import ProfileImage from '@/app/components/ProfileImage';
import { useState, useEffect } from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Glen",
    role: "Founder & Tech Lead",
    bio: "Coordinates operations and handles the digital presence of the initiative. Passionate about leveraging technology for environmental impact.",
    personal: "Web Developer / Cybersecurity Enthusiast",
    personalIcon: <Code className="h-5 w-5" />,
    personalBio: "Combining tech skills with environmental activism. Believes digital solutions can amplify grassroots movements and create scalable impact.",
    hobbies: ["Coding", "Security Research", "Photography"],
    skills: ["Web Development", "Project Management", "Community Organizing", "Digital Strategy"],
    phone: "0115185256",
    email: "glen@westsideecowarriors.org",
    github: "https://github.com/Lowkeyglen",
    githubUsername: "@Lowkeyglen",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-emerald-500 to-teal-600",
    quote: "Technology isn't just about code—it's about connecting people to causes that matter.",
    focusAreas: ["Tech Innovation", "Strategic Planning", "Digital Outreach"],
    stats: { projects: 15, hours: 200, communities: 3 },
    isLeader: true,
    achievements: ["Founded West Side Eco Warriors", "Developed community platform", "Led 15+ clean-up projects"],
    animatedTitles: [
      "Full-Stack Developer 💻",
      "Cybersecurity Enthusiast 🔒",
      "Eco Tech Innovator 🌱",
      "Community Builder 🤝",
      "Open Source Contributor 🚀"
    ]
  },
  {
    id: 2,
    name: "Brian",
    role: "Field Operations Lead",
    bio: "Leads on-ground clean-up operations and team coordination. Ensures every operation is executed safely and effectively.",
    personal: "Environmental Activist",
    personalIcon: <Globe className="h-5 w-5" />,
    personalBio: "Started organizing neighborhood clean-ups as a teenager. Believes in direct action and community-led solutions.",
    hobbies: ["Community Organizing", "Sports", "Music"],
    skills: ["Team Leadership", "Field Operations", "Safety Protocols", "Community Engagement"],
    phone: "0799567838",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-emerald-500 to-green-600",
    quote: "Every piece of trash picked up is a step toward a cleaner community.",
    focusAreas: ["Field Operations", "Team Coordination", "Safety Management"],
    stats: { projects: 25, hours: 350, communities: 4 },
    isLeader: true,
    achievements: ["Led 25+ field operations", "Trained 50+ volunteers", "Established safety protocols"],
    animatedTitles: [
      "Field Operations Expert 🌍",
      "Community Organizer 🤝",
      "Safety Champion 🛡️",
      "Team Leader 👥",
      "Environmental Warrior 🌿"
    ]
  },
  {
    id: 3,
    name: "Lewis",
    role: "Community Relations",
    bio: "Builds partnerships with local communities and stakeholders. Bridges the gap between residents and environmental initiatives.",
    personal: "Public Relations Student",
    personalIcon: <Users className="h-5 w-5" />,
    personalBio: "Believes in the power of communication to drive change. Focuses on building lasting relationships with community members.",
    hobbies: ["Networking", "Reading", "Public Speaking"],
    skills: ["Public Relations", "Community Outreach", "Stakeholder Management", "Communication"],
    phone: "0796386423",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-green-500 to-emerald-600",
    quote: "Change happens when people feel heard and valued.",
    focusAreas: ["Community Outreach", "Public Relations", "Partnership Building"],
    stats: { projects: 18, hours: 180, communities: 3 },
    achievements: ["Built 10+ community partnerships", "Organized outreach programs", "Increased community participation"],
    animatedTitles: [
      "Community Bridge Builder 🌉",
      "PR Specialist 📢",
      "Partnership Architect 🤝",
      "Communication Expert 💬",
      "Outreach Coordinator 🎯"
    ]
  },
  {
    id: 4,
    name: "Deno",
    role: "Logistics & Safety",
    bio: "Manages equipment and ensures safety protocols during operations. Focuses on efficient resource allocation and risk management.",
    personal: "Logistics Management",
    personalIcon: <Shield className="h-5 w-5" />,
    personalBio: "Ensures all operations run smoothly and safely. Believes proper planning prevents poor performance in environmental work.",
    hobbies: ["Planning", "Team Management", "Fitness"],
    skills: ["Logistics Management", "Safety Protocols", "Equipment Handling", "Risk Assessment"],
    phone: "0712066606",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-teal-500 to-emerald-600",
    quote: "Safety first, efficiency always.",
    focusAreas: ["Logistics", "Safety Management", "Equipment Coordination"],
    stats: { projects: 22, hours: 280, communities: 4 },
    achievements: ["Managed equipment for 20+ projects", "Zero safety incidents", "Optimized resource allocation"],
    animatedTitles: [
      "Logistics Master 📦",
      "Safety Expert 🛡️",
      "Efficiency Guru ⚡",
      "Risk Manager 🎯",
      "Operations Specialist 🔧"
    ]
  },
  {
    id: 5,
    name: "Wainaina",
    role: "Youth Engagement",
    bio: "Recruits and mentors new members, focusing on youth participation. Creates opportunities for young people to get involved in environmental action.",
    personal: "Youth Advocate",
    personalIcon: <Trophy className="h-5 w-5" />,
    personalBio: "Passionate about empowering youth to take action. Believes young people are the key to sustainable environmental change.",
    hobbies: ["Skating", "Youth Mentorship", "Outdoor Activities"],
    skills: ["Youth Engagement", "Mentorship", "Recruitment", "Public Speaking"],
    phone: "0117574570",
    instagram: "@whywainaina",
    instagramLink: "https://instagram.com/whywainaina",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-emerald-400 to-teal-500",
    quote: "Empower the youth today for a greener tomorrow.",
    focusAreas: ["Youth Engagement", "Recruitment", "Mentorship Programs"],
    stats: { projects: 20, hours: 250, communities: 3 },
    achievements: ["Recruited 30+ youth members", "Started mentorship program", "Organized youth workshops"],
    animatedTitles: [
      "Youth Mentor 🌟",
      "Skating Enthusiast 🛹",
      "Community Leader 👥",
      "Empowerment Advocate 💪",
      "Future Builder 🚀"
    ]
  },
  {
    id: 6,
    name: "Esther",
    role: "Community Volunteer",
    bio: "Dedicated to hands-on environmental work and community service. Actively participates in all clean-up operations and outreach programs.",
    personal: "Community Development",
    personalIcon: <Users className="h-5 w-5" />,
    personalBio: "Believes in the power of collective action. Committed to making a tangible difference in the community through environmental work.",
    hobbies: ["Community Service", "Reading", "Music"],
    skills: ["Community Engagement", "Volunteer Coordination", "Environmental Education", "Team Collaboration"],
    phone: "0700506908",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-emerald-400 to-green-500",
    quote: "Small actions, when multiplied, can transform the world.",
    focusAreas: ["Volunteering", "Community Service", "Environmental Education"],
    stats: { projects: 30, hours: 400, communities: 5 },
    achievements: ["Most active volunteer", "Participated in 30+ projects", "Trained new volunteers"],
    animatedTitles: [
      "Dedicated Volunteer 💚",
      "Community Champion 🌟",
      "Environmental Educator 📚",
      "Action Hero 🦸‍♀️",
      "Change Maker 🌈"
    ]
  }
];

// Generate fixed particle positions (consistent between server and client)
const generateParticlePositions = () => {
  // Use a deterministic seed based on the current time rounded to the hour
  // This ensures positions are the same on server and client during the same hour
  const seed = Math.floor(Date.now() / 3600000);
  const random = (min: number, max: number) => {
    const x = Math.sin(seed) * 10000;
    return min + (x - Math.floor(x)) * (max - min);
  };
  
  return Array.from({ length: 30 }, () => ({
    x: random(0, 100),
    y: random(0, 100),
    duration: random(2, 6),
    delay: random(0, 3),
  }));
};

// Animated Name Component for cover photo
function AnimatedCoverName({ name, color }: { name: string; color: string }) {
  const letters = name.split('');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center z-10"
    >
      <div className="flex flex-wrap justify-center gap-1 md:gap-2 px-4">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50, rotate: -15 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              type: "spring",
              stiffness: 100
            }}
            className={`text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider inline-block`}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(16,185,129,0.8) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(16,185,129,0.3)'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// Animated Text Component for looping titles
function AnimatedName({ titles }: { titles: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
      transition={{ duration: 0.3 }}
      className="text-emerald-300/80 text-lg mt-2 font-medium"
    >
      {titles[currentIndex]}
    </motion.div>
  );
}

export default function ProfileDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const member = teamMembers.find(m => m.id === id);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number; delay: number }>>([]);
  const [isClient, setIsClient] = useState(false);
  
  if (!member) notFound();

  useEffect(() => {
    setIsClient(true);
    // Generate particles only on client to avoid hydration mismatch
    setParticles(generateParticlePositions());
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-teal-950/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/profiles"
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Link>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl border border-emerald-500/20 overflow-hidden">
            {/* Hero Section with Animated Name */}
            <div className={`relative h-64 bg-gradient-to-br ${member.color} overflow-hidden`}>
              {/* Animated Member Name */}
              <AnimatedCoverName name={member.name} color={member.color} />
              
              {/* Floating Particles - Only render on client to avoid hydration mismatch */}
              {isClient && particles.length > 0 && (
                <div className="absolute inset-0">
                  {particles.map((particle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      initial={{
                        x: `${particle.x}%`,
                        y: `${particle.y}%`,
                      }}
                      animate={{
                        y: ["0%", "100%"],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Energy Waves */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border border-white/30"
                    style={{
                      top: `-${i * 40}px`,
                      bottom: `-${i * 40}px`,
                      left: `-${i * 40}px`,
                      right: `-${i * 40}px`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
              
              {/* Glowing Orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(16,185,129,0) 70%)`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/80 to-transparent" />

              {/* Profile Image */}
              <div className="absolute -bottom-16 left-8 z-20">
                <ProfileImage 
                  name={member.name}
                  color={member.color}
                  size="lg"
                  isLeader={member.isLeader}
                />
              </div>

              {/* Leader Badge */}
              {member.isLeader && (
                <div className="absolute top-6 right-6 z-20">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="p-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full shadow-2xl"
                  >
                    <Sparkles className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 pt-20">
              {/* Name & Role */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h1 className="text-4xl font-bold text-white">{member.name}</h1>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${member.color} text-white font-semibold mt-3`}>
                    {member.isLeader && <Sparkles className="h-4 w-4" />}
                    {member.role}
                  </div>
                  {/* Animated Text Loop */}
                  {member.animatedTitles && (
                    <AnimatedName titles={member.animatedTitles} />
                  )}
                </div>

                {/* Stats */}
                <div className="flex gap-4">
                  {Object.entries(member.stats).map(([key, value], idx) => (
                    <motion.div
                      key={key}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-emerald-300">{value}</div>
                      <div className="text-sm text-emerald-200/60 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact & Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center text-emerald-200">
                    <Phone className="h-5 w-5 mr-3 text-emerald-400" />
                    <span>{member.phone}</span>
                  </div>
                  
                  {member.email && (
                    <button
                      onClick={() => window.location.href = `mailto:${member.email}`}
                      className="flex items-center text-emerald-200 hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      <Mail className="h-5 w-5 mr-3 text-emerald-400" />
                      <span>{member.email}</span>
                    </button>
                  )}
                  
                  {member.github && (
                    <button
                      onClick={() => window.open(member.github, '_blank', 'noopener,noreferrer')}
                      className="flex items-center text-emerald-200 hover:text-purple-300 transition-colors cursor-pointer"
                    >
                      <svg className="h-5 w-5 mr-3 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>{member.githubUsername}</span>
                    </button>
                  )}
                  
                  <div className="flex items-center text-emerald-200">
                    <MapPin className="h-5 w-5 mr-3 text-emerald-400" />
                    <span>{member.location}</span>
                  </div>
                  
                  {member.instagram && (
                    <button
                      onClick={() => window.open(member.instagramLink, '_blank', 'noopener,noreferrer')}
                      className="flex items-center text-emerald-200 hover:text-pink-300 transition-colors cursor-pointer"
                    >
                      <Instagram className="h-5 w-5 mr-3 text-emerald-400" />
                      <span>{member.instagram}</span>
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-emerald-200">
                    <Calendar className="h-5 w-5 mr-3 text-emerald-400" />
                    <span>Joined: {member.joinDate}</span>
                  </div>
                  <div className="flex items-center text-emerald-200">
                    {member.personalIcon}
                    <span className="ml-3 font-medium">{member.personal}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 bg-emerald-900/20 rounded-xl border border-emerald-500/20 mb-8"
              >
                <p className="text-emerald-200/90 italic text-lg">"{member.quote}"</p>
              </motion.div>

              {/* Bio Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Target className="h-6 w-6 text-emerald-400" />
                      About {member.name}
                    </h2>
                    <p className="text-emerald-100/80 leading-relaxed">{member.bio}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-emerald-400" />
                      Personal Mission
                    </h3>
                    <p className="text-emerald-100/70 leading-relaxed">{member.personalBio}</p>
                  </div>
                </div>

                {/* Skills & Focus Areas */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-emerald-400" />
                      Skills & Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-emerald-900/40 text-emerald-100 rounded-full font-medium border border-emerald-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-emerald-400" />
                      Achievements
                    </h3>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3 text-emerald-100/80">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 pt-8 border-t border-emerald-500/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Want to work with {member.name}?
                  </h3>
                  <p className="text-emerald-200/60 mb-6">
                    Reach out to discuss collaborations, volunteer opportunities, or learn more about our initiatives.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Us
                    </Link>
                    
                    {member.instagram && (
                      <button
                        onClick={() => window.open(member.instagramLink, '_blank', 'noopener,noreferrer')}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 cursor-pointer"
                      >
                        <Instagram className="mr-2 h-5 w-5" />
                        Follow on Instagram
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
