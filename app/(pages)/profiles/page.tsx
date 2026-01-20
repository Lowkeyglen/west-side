'use client';

import { motion } from 'framer-motion';
import { Users, Mail, Globe, Code, Shield, Camera, Book, Music, Goal, Coffee, Trophy } from 'lucide-react';
import Link from 'next/link';

// Confirmed team members with basic info
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
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Flamy",
    role: "Field Operations Lead",
    bio: "Leads on-ground clean-up operations and team coordination.",
    personal: "Environmental Activist",
    personalIcon: <Globe className="h-4 w-4" />,
    hobbies: ["Community Organizing", "Sports", "Music"],
    email: "flamy@westsideecowarriors.org",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 3,
    name: "Lewi",
    role: "Community Relations",
    bio: "Builds partnerships with local communities and stakeholders.",
    personal: "Public Relations Student",
    personalIcon: <Users className="h-4 w-4" />,
    hobbies: ["Public Speaking", "Networking", "Reading"],
    email: "lewi@westsideecowarriors.org",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    name: "Deno",
    role: "Logistics & Safety",
    bio: "Manages equipment and ensures safety protocols during operations.",
    personal: "Logistics Management",
    personalIcon: <Shield className="h-4 w-4" />,
    hobbies: ["Planning", "Team Management", "Fitness"],
    email: "deno@westsideecowarriors.org",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 5,
    name: "Karaa",
    role: "Youth Engagement",
    bio: "Recruits and mentors new members, focusing on youth participation.",
    personal: "Youth Advocate",
    personalIcon: <Trophy className="h-4 w-4" />,
    hobbies: ["Skating", "Youth Mentorship", "Outdoor Activities"],
    email: "karaa@westsideecowarriors.org",
    color: "from-yellow-500 to-amber-500"
  },
  // Placeholder for more members
  {
    id: 6,
    name: "Member 6",
    role: "Environmental Champion",
    bio: "Passionate about creating cleaner communities for future generations.",
    personal: "To be updated",
    personalIcon: <Globe className="h-4 w-4" />,
    hobbies: ["To be updated"],
    email: "join@westsideecowarriors.org",
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 7,
    name: "Member 7",
    role: "Community Volunteer",
    bio: "Dedicated to hands-on environmental work and community service.",
    personal: "To be updated",
    personalIcon: <Users className="h-4 w-4" />,
    hobbies: ["To be updated"],
    email: "join@westsideecowarriors.org",
    color: "from-teal-500 to-green-500"
  },
  {
    id: 8,
    name: "Member 8",
    role: "Climate Advocate",
    bio: "Spreads awareness about environmental conservation and sustainability.",
    personal: "To be updated",
    personalIcon: <Globe className="h-4 w-4" />,
    hobbies: ["To be updated"],
    email: "join@westsideecowarriors.org",
    color: "from-pink-500 to-rose-500"
  }
];

const hobbyIcons = {
  "Coding": <Code className="h-4 w-4" />,
  "Security Research": <Shield className="h-4 w-4" />,
  "Photography": <Camera className="h-4 w-4" />,
  "Community Organizing": <Users className="h-4 w-4" />,
  "Sports": <Goal className="h-4 w-4" />,
  "Music": <Music className="h-4 w-4" />,
  "Public Speaking": <Users className="h-4 w-4" />,
  "Networking": <Users className="h-4 w-4" />,
  "Reading": <Book className="h-4 w-4" />,
  "Planning": <Book className="h-4 w-4" />,
  "Team Management": <Users className="h-4 w-4" />,
  "Fitness": <Goal className="h-4 w-4" />,
  "Skating": <Trophy className="h-4 w-4" />,
  "Youth Mentorship": <Users className="h-4 w-4" />,
  "Outdoor Activities": <Globe className="h-4 w-4" />,
  "To be updated": <Coffee className="h-4 w-4" />
};

export default function ProfilesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-green text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Users className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Warriors</h1>
            <p className="text-xl max-w-3xl mx-auto">
              The passionate youth driving environmental change in West Side, Kenya. 
              Each member brings unique skills and energy to our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Starting with 5 committed founders, growing to 100+ environmental champions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                    {/* Profile Header - Gradient Placeholder (will be replaced with photo) */}
                    <div className={`h-32 bg-gradient-to-br ${member.color} relative`}>
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} border-4 border-white flex items-center justify-center`}>
                          <span className="text-white text-2xl font-bold">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Profile Content */}
                    <div className="pt-16 pb-6 px-6 text-center">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                      
                      {/* Personal Info */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          {member.personalIcon}
                          <span className="font-medium text-sm">Personal Interest</span>
                        </div>
                        <p className="text-gray-700 text-sm">{member.personal}</p>
                      </div>

                      {/* Hobbies */}
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Hobbies & Interests</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.hobbies.map((hobby, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                            >
                              {hobbyIcons[hobby as keyof typeof hobbyIcons] || <Coffee className="h-4 w-4" />}
                              {hobby}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="border-t pt-4">
                        <a 
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Update Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-2 text-yellow-800">Profile Photos Coming Soon!</h3>
              <p className="text-yellow-700">
                We're collecting photos from all our members. Real profile pictures will be uploaded soon!
                For now, we're using initial-based placeholders.
              </p>
            </div>
          </motion.div>

          {/* Join CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for passionate young people who want to make a difference 
                in their community. No experience necessary—just bring your energy and commitment!
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Become an Eco Warrior
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5", label: "Founding Members", desc: "Currently leading the initiative" },
              { value: "50+", label: "Target Members", desc: "Goal for 2026" },
              { value: "100%", label: "Youth Led", desc: "Ages 18-30" },
              { value: "West Side", label: "Community Base", desc: "Our primary focus area" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
