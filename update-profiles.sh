#!/bin/bash

echo "Updating team profiles..."

# Update the main profiles page
cat > app/\(pages\)/profiles/page.tsx << 'MAIN_EOF'
'use client';

import { motion } from 'framer-motion';
import { Users, Mail, Globe, Code, Shield, Camera, Book, Music, Goal, Coffee, Trophy } from 'lucide-react';
import Link from 'next/link';

// Team members with correct names and info
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
    phone: "+254 700 000 001",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Brian",
    role: "Field Operations Lead",
    bio: "Leads on-ground clean-up operations and team coordination.",
    personal: "Environmental Activist",
    personalIcon: <Globe className="h-4 w-4" />,
    hobbies: ["Community Organizing", "Sports", "Music"],
    email: "",
    phone: "0799567838",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 3,
    name: "Lewis",
    role: "Community Relations",
    bio: "Builds partnerships with local communities and stakeholders.",
    personal: "Public Relations Student",
    personalIcon: <Users className="h-4 w-4" />,
    hobbies: ["Networking", "Reading"],
    email: "",
    phone: "0796386423",
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
    email: "",
    phone: "0712066606",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 5,
    name: "Wainaina",
    role: "Youth Engagement",
    bio: "Recruits and mentors new members, focusing on youth participation.",
    personal: "Youth Advocate",
    personalIcon: <Trophy className="h-4 w-4" />,
    hobbies: ["Skating", "Youth Mentorship", "Outdoor Activities"],
    email: "",
    phone: "0117574570",
    color: "from-yellow-500 to-amber-500"
  },
  {
    id: 6,
    name: "Esther",
    role: "Community Volunteer",
    bio: "Dedicated to hands-on environmental work and community service.",
    personal: "Community Development",
    personalIcon: <Users className="h-4 w-4" />,
    hobbies: ["Community Service", "Reading", "Music"],
    email: "",
    phone: "0700506908",
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 7,
    name: "Member 7",
    role: "Environmental Champion",
    bio: "Passionate about creating cleaner communities for future generations.",
    personal: "To be updated",
    personalIcon: <Globe className="h-4 w-4" />,
    hobbies: ["To be updated"],
    email: "join@westsideecowarriors.org",
    phone: "+254 700 000 007",
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
    phone: "+254 700 000 008",
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
  "Networking": <Users className="h-4 w-4" />,
  "Reading": <Book className="h-4 w-4" />,
  "Planning": <Book className="h-4 w-4" />,
  "Team Management": <Users className="h-4 w-4" />,
  "Fitness": <Goal className="h-4 w-4" />,
  "Skating": <Trophy className="h-4 w-4" />,
  "Youth Mentorship": <Users className="h-4 w-4" />,
  "Outdoor Activities": <Globe className="h-4 w-4" />,
  "Community Service": <Users className="h-4 w-4" />,
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
              Starting with 6 committed members, growing to 100+ environmental champions
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
                        <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">Phone:</span>
                          <span>{member.phone}</span>
                        </div>
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors mt-1"
                          >
                            <Mail className="h-4 w-4" />
                            {member.email}
                          </a>
                        )}
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
              <h3 className="text-xl font-bold mb-2 text-yellow-800">Add Your Profile Photo!</h3>
              <p className="text-yellow-700 mb-3">
                To add your photo: Upload a square image (500x500px) to:
                <code className="block bg-yellow-100 px-2 py-1 rounded mt-1 text-sm">
                  public/images/members/yourname.jpg
                </code>
              </p>
              <p className="text-sm text-yellow-600">
                Example: Upload "glen.jpg" for Glen's profile photo
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
              { value: "6", label: "Active Members", desc: "Currently leading the initiative" },
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
MAIN_EOF

echo "✅ Updated main profiles page"

# Update the individual profile page
cat > app/\(pages\)/profiles/\[id\]/page.tsx << 'DETAIL_EOF'
'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowLeft, Globe, Code, Shield, Camera, Book, Music, Goal, Coffee, Trophy, Users } from 'lucide-react';
import Link from 'next/link';

// Team members data matching the main page
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
    email: "glen@westsideecowarriors.org",
    phone: "+254 700 000 001",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-blue-500 to-cyan-500",
    quote: "Technology isn't just about code—it's about connecting people to causes that matter."
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
    email: "",
    phone: "0799567838",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-red-500 to-orange-500",
    quote: "Clean communities start with us taking that first step—and then another, and another."
  },
  {
    id: 3,
    name: "Lewis",
    role: "Community Relations",
    bio: "Builds partnerships with local communities and stakeholders. Focuses on creating sustainable relationships for long-term impact.",
    personal: "Public Relations Student",
    personalIcon: <Users className="h-5 w-5" />,
    personalBio: "Studying how communication can bridge gaps between initiatives and communities. Passionate about storytelling for social change.",
    hobbies: ["Networking", "Reading"],
    skills: ["Public Relations", "Communication", "Stakeholder Engagement", "Community Outreach"],
    email: "",
    phone: "0796386423",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-green-500 to-emerald-500",
    quote: "Every community has a story—our job is to listen and help write the next chapter together."
  },
  {
    id: 4,
    name: "Deno",
    role: "Logistics & Safety",
    bio: "Manages equipment and ensures safety protocols during operations. Makes sure we have what we need, when we need it.",
    personal: "Logistics Management",
    personalIcon: <Shield className="h-5 w-5" />,
    personalBio: "Background in logistics and safety management. Believes proper planning prevents poor performance in environmental work.",
    hobbies: ["Planning", "Team Management", "Fitness"],
    skills: ["Logistics Management", "Safety Compliance", "Equipment Management", "Risk Assessment"],
    email: "",
    phone: "0712066606",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-purple-500 to-pink-500",
    quote: "Safety first—for our team, our community, and our environment."
  },
  {
    id: 5,
    name: "Wainaina",
    role: "Youth Engagement",
    bio: "Recruits and mentors new members, focusing on youth participation. Believes young people are the key to lasting change.",
    personal: "Youth Advocate",
    personalIcon: <Trophy className="h-5 w-5" />,
    personalBio: "Skateboarder turned environmentalist. Uses youth culture to make environmental activism accessible and cool for young people.",
    hobbies: ["Skating", "Youth Mentorship", "Outdoor Activities"],
    skills: ["Youth Mentoring", "Recruitment", "Engagement Strategies", "Peer Education"],
    email: "",
    phone: "0117574570",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-yellow-500 to-amber-500",
    quote: "Skating taught me balance—now I'm using that lesson to help balance our community with nature."
  },
  {
    id: 6,
    name: "Esther",
    role: "Community Volunteer",
    bio: "Dedicated to hands-on environmental work and community service. Passionate about making tangible differences in local neighborhoods.",
    personal: "Community Development",
    personalIcon: <Users className="h-5 w-5" />,
    personalBio: "Believes in the power of grassroots action. Actively involved in multiple community initiatives beyond environmental work.",
    hobbies: ["Community Service", "Reading", "Music"],
    skills: ["Community Mobilization", "Volunteer Coordination", "Event Planning", "Resource Management"],
    email: "",
    phone: "0700506908",
    location: "West Side, Nairobi",
    joinDate: "February 2026",
    color: "from-indigo-500 to-blue-500",
    quote: "Service to others is the rent we pay for our room on earth."
  }
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
  "Community Service": <Users className="h-4 w-4" />
};

export default function ProfileDetailPage() {
  const params = useParams();
  const memberId = parseInt(params.id as string);
  
  const member = teamMembers.find(m => m.id === memberId);
  
  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container-custom py-6">
        <Link href="/profiles" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to All Members
        </Link>
      </div>

      {/* Profile Hero */}
      <section className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          {/* Header with Initial Placeholder */}
          <div className={`h-48 bg-gradient-to-br ${member.color} relative`}>
            <div className="absolute -bottom-16 left-8">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.color} border-8 border-white flex items-center justify-center`}>
                <span className="text-white text-4xl font-bold">
                  {member.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-20 pb-8 px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Basic Info */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
                  <div className="text-primary text-xl font-medium mb-4">{member.role}</div>
                  <p className="text-gray-700 text-lg">{member.bio}</p>
                </div>

                {/* Quote */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-primary">
                  <p className="text-gray-700 italic">"{member.quote}"</p>
                  <div className="text-right mt-2 text-gray-600">— {member.name}</div>
                </div>

                {/* Personal Bio */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    {member.personalIcon}
                    About {member.name}
                  </h3>
                  <p className="text-gray-700 mb-3">{member.personalBio}</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="font-medium">Primary Focus:</span>
                    <span>{member.personal}</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Contact</h3>
                  <div className="space-y-3">
                    {member.email && (
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-500" />
                        <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-primary transition-colors">
                          {member.email}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">{member.location}</span>
                    </div>
                  </div>
                </div>

                {/* Member Since */}
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-2">Eco Warrior Since</h3>
                  <div className="text-2xl font-bold text-primary">{member.joinDate}</div>
                  <p className="text-sm text-gray-600 mt-2">
                    {member.id <= 5 ? "Founding Member" : "Active Member"}
                  </p>
                </div>

                {/* Hobbies */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Hobbies & Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.hobbies.map((hobby, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm"
                      >
                        {hobbyIcons[hobby as keyof typeof hobbyIcons] || <Coffee className="h-4 w-4" />}
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {member.skills.map((skill, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4">
                    <div className="font-medium text-gray-800">{skill}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Instructions */}
            <div className="mt-12 pt-8 border-t">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2 text-blue-800">Add Your Profile Photo</h3>
                <p className="text-blue-700 mb-3">
                  To add your photo to this profile:
                </p>
                <ol className="list-decimal pl-5 text-blue-700 space-y-1">
                  <li>Take a clear, well-lit headshot (square works best)</li>
                  <li>Save as: <code className="bg-blue-100 px-2 py-1 rounded">public/images/members/{member.name.toLowerCase()}.jpg</code></li>
                  <li>Recommended size: 500x500 pixels</li>
                  <li>The image will automatically appear here</li>
                </ol>
                <p className="text-sm text-blue-600 mt-3">
                  Currently showing your initial with a unique color theme.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <div className="bg-gradient-green rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join {member.name} and our growing team of environmental champions in transforming West Side communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Join Our Team
                </motion.button>
              </Link>
              <Link href="/profiles">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
                >
                  Meet More Warriors
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
DETAIL_EOF

echo "✅ Updated individual profile page"
echo ""
echo "🎉 Profiles updated with:"
echo "- Brian (Field Operations Lead) - 0799567838"
echo "- Lewis (Community Relations) - 0796386423" 
echo "- Deno (Logistics & Safety) - 0712066606"
echo "- Wainaina (Youth Engagement) - 0117574570"
echo "- Esther (Community Volunteer) - 0700506908"
echo ""
echo "Now run:"
echo "1. git add ."
echo "2. git commit -m 'Update team profiles with correct names and phone numbers'"
echo "3. git push"
echo "4. npm run dev (to test locally)"
echo "5. Deploy to Vercel"
