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
    name: "Flamy",
    role: "Field Operations Lead",
    bio: "Leads on-ground clean-up operations and team coordination. Ensures every operation is executed safely and effectively.",
    personal: "Environmental Activist",
    personalIcon: <Globe className="h-5 w-5" />,
    personalBio: "Started organizing neighborhood clean-ups as a teenager. Believes in direct action and community-led solutions.",
    hobbies: ["Community Organizing", "Sports", "Music"],
    skills: ["Team Leadership", "Field Operations", "Safety Protocols", "Community Engagement"],
    email: "flamy@westsideecowarriors.org",
    phone: "+254 700 000 002",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-red-500 to-orange-500",
    quote: "Clean communities start with us taking that first step—and then another, and another."
  },
  {
    id: 3,
    name: "Lewi",
    role: "Community Relations",
    bio: "Builds partnerships with local communities and stakeholders. Focuses on creating sustainable relationships for long-term impact.",
    personal: "Public Relations Student",
    personalIcon: <Users className="h-5 w-5" />,
    personalBio: "Studying how communication can bridge gaps between initiatives and communities. Passionate about storytelling for social change.",
    hobbies: ["Public Speaking", "Networking", "Reading"],
    skills: ["Public Relations", "Communication", "Stakeholder Engagement", "Community Outreach"],
    email: "lewi@westsideecowarriors.org",
    phone: "+254 700 000 003",
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
    email: "deno@westsideecowarriors.org",
    phone: "+254 700 000 004",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-purple-500 to-pink-500",
    quote: "Safety first—for our team, our community, and our environment."
  },
  {
    id: 5,
    name: "Karaa",
    role: "Youth Engagement",
    bio: "Recruits and mentors new members, focusing on youth participation. Believes young people are the key to lasting change.",
    personal: "Youth Advocate",
    personalIcon: <Trophy className="h-5 w-5" />,
    personalBio: "Skateboarder turned environmentalist. Uses youth culture to make environmental activism accessible and cool for young people.",
    hobbies: ["Skating", "Youth Mentorship", "Outdoor Activities"],
    skills: ["Youth Mentoring", "Recruitment", "Engagement Strategies", "Peer Education"],
    email: "karaa@westsideecowarriors.org",
    phone: "+254 700 000 005",
    location: "West Side, Nairobi",
    joinDate: "January 2026",
    color: "from-yellow-500 to-amber-500",
    quote: "Skating taught me balance—now I'm using that lesson to help balance our community with nature."
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
  "Outdoor Activities": <Globe className="h-4 w-4" />
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
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>
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
                  <p className="text-sm text-gray-600 mt-2">Founding Member</p>
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

            {/* Photo Notice */}
            <div className="mt-12 pt-8 border-t">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2 text-yellow-800">Profile Photo Coming Soon!</h3>
                <p className="text-yellow-700">
                  {member.name}'s profile photo will be uploaded soon. We're collecting photos from all our members 
                  to personalize each profile. For now, we're using their initial with a unique color theme.
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
