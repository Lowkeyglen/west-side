'use client';

import { motion } from 'framer-motion';
import { Target, Users, Globe, Shield, Calendar, MapPin, Users as UsersIcon } from 'lucide-react';

export default function AboutPage() {
  const missions = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Our Mission",
      description: "To eradicate unattended litter through safe disposal methods and transform West Side communities into clean, sustainable environments."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Our Vision",
      description: "A Kenya where every community takes ownership of their environment, fostering a culture of cleanliness and climate responsibility."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Our Values",
      description: "Youth empowerment, community collaboration, environmental stewardship, and sustainable development."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Our Promise",
      description: "To lead by example, inspire change, and create measurable impact in the fight against environmental degradation."
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-green text-white py-20">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About West Side Eco Warriors
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            A youth-led environmental initiative dedicated to transforming communities through 
            action, advocacy, and sustainable change.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {aboutDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                {detail.icon}
                <span>{detail.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-4 text-gray-700">
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
                <p className="font-semibold text-primary">
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
              <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-primary">Why We Do It</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Clean Communities:</span>
                      <p className="text-gray-600">Every child deserves to play in a clean, safe environment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Health Protection:</span>
                      <p className="text-gray-600">Reducing disease vectors from accumulated waste</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Youth Leadership:</span>
                      <p className="text-gray-600">Empowering young people to lead environmental solutions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Sustainable Future:</span>
                      <p className="text-gray-600">Building habits today for a cleaner tomorrow</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-primary mb-4">{mission.icon}</div>
                <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            How We Create Change
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Identify", desc: "Locate unattended litter hotspots in West Side communities" },
              { step: "02", title: "Organize", desc: "Mobilize our youth team and plan safe disposal operations" },
              { step: "03", title: "Execute", desc: "Conduct clean-up using proper safety and environmental protocols" },
              { step: "04", title: "Educate", desc: "Engage community members on proper waste management practices" },
              { step: "05", title: "Monitor", desc: "Track cleaned areas to prevent waste re-accumulation" },
              { step: "06", title: "Advocate", desc: "Push for long-term solutions to community waste challenges" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 pt-8">
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
