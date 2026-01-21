'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowLeft, Instagram, Globe, Code, Shield, Camera, Book, Music, Goal, Trophy, Users, Zap, Sparkles, Calendar, Award, Target, BarChart } from 'lucide-react';
import Link from 'next/link';
import ProfileImage from '@/app/components/ProfileImage';

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
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-emerald-500 to-teal-600",
    quote: "Technology isn't just about code—it's about connecting people to causes that matter.",
    focusAreas: ["Tech Innovation", "Strategic Planning", "Digital Outreach"],
    stats: { projects: 15, hours: 200, communities: 3 },
    isLeader: true,
    achievements: ["Founded West Side Eco Warriors", "Developed community platform", "Led 15+ clean-up projects"]
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
    achievements: ["Led 25+ field operations", "Trained 50+ volunteers", "Established safety protocols"]
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
    achievements: ["Built 10+ community partnerships", "Organized outreach programs", "Increased community participation"]
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
    achievements: ["Managed equipment for 20+ projects", "Zero safety incidents", "Optimized resource allocation"]
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
    achievements: ["Recruited 30+ youth members", "Started mentorship program", "Organized youth workshops"]
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
    achievements: ["Most active volunteer", "Participated in 30+ projects", "Trained new volunteers"]
  }
];

export default function ProfileDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const member = teamMembers.find(m => m.id === id);
  
  if (!member) notFound();

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
            {/* Hero Section */}
            <div className={`relative h-64 bg-gradient-to-br ${member.color}`}>
              {/* Energy Waves */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border border-emerald-400/30"
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

              {/* Profile Image */}
              <div className="absolute -bottom-16 left-8">
                <ProfileImage 
                  name={member.name}
                  color={member.color}
                  size="lg"
                  isLeader={member.isLeader}
                />
              </div>

              {/* Leader Badge */}
              {member.isLeader && (
                <div className="absolute top-6 right-6">
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
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center text-emerald-200 hover:text-emerald-300 transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-3 text-emerald-400" />
                      <span>{member.email}</span>
                    </a>
                  )}
                  
                  <div className="flex items-center text-emerald-200">
                    <MapPin className="h-5 w-5 mr-3 text-emerald-400" />
                    <span>{member.location}</span>
                  </div>
                  
                  {member.instagram && (
                    <a 
                      href={member.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-emerald-200 hover:text-pink-300 transition-colors"
                    >
                      <Instagram className="h-5 w-5 mr-3 text-emerald-400" />
                      <span>{member.instagram}</span>
                    </a>
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
                      <a
                        href={member.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300"
                      >
                        <Instagram className="mr-2 h-5 w-5" />
                        Follow on Instagram
                      </a>
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
