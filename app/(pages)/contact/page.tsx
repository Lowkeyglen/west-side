'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send, Users, Clock, Instagram, Zap, Sparkles, Leaf, ArrowRight, Globe, Shield, Target, Navigation, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mailto link
    const subject = `Contact Form: ${formData.subject}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:ecowarriors.254@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'general'
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "ecowarriors.254@gmail.com",
      action: "mailto:ecowarriors.254@gmail.com",
      description: "For general inquiries and partnerships",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "0117574570",
      action: "tel:+254117574570",
      description: "Main contact number",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: "West Side, Nairobi",
      action: "#locations",
      description: "Based in West Side communities",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      details: "@whywainaina",
      action: "https://instagram.com/whywainaina",
      description: "Follow our youth engagement lead",
      color: "from-pink-500 to-purple-600"
    }
  ];

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'volunteer', label: 'Volunteer with us' },
    { value: 'partner', label: 'Partnership Opportunity' },
    { value: 'donation', label: 'Donation/Support' },
    { value: 'media', label: 'Media Inquiry' },
    { value: 'other', label: 'Other' }
  ];

  // Coordinates for each location with the provided information
  const locations = [
    {
      name: "Main Headquarters",
      area: "West Side HQ",
      coordinates: "-1.2775, 36.7597",
      plusCode: "PPJX+F8V",
      address: "Along Gichangi Road, Nairobi",
      focus: "Main operations and coordination center",
      googleMapsUrl: "https://www.google.com/maps/place/PPJX%2BF8V,+Nairobi/@-1.2775,36.7597,17z",
      directionsUrl: "https://www.google.com/maps/dir//PPJX%2BF8V,+Nairobi/@-1.2775,36.7597"
    },
    {
      name: "Kangemi",
      area: "Kangemi Operations",
      coordinates: "-1.2850, 36.7550",
      plusCode: "PPJX+Q8V",
      address: "Kangemi, Nairobi, Kenya",
      focus: "Nairobi River clean-up & school programs",
      googleMapsUrl: "https://www.google.com/maps/place/Kangemi,+Nairobi/@-1.2850,36.7550,15z"
    },
    {
      name: "Watiti",
      area: "Watiti Operations",
      coordinates: "-1.2678, 36.7489",
      plusCode: "PPJW+W5V",
      address: "Watiti, Nairobi, Kenya",
      focus: "Community waste management & green spaces",
      googleMapsUrl: "https://www.google.com/maps/place/Watiti,+Nairobi/@-1.2678,36.7489,15z"
    },
    {
      name: "Keroka",
      area: "Keroka Operations",
      coordinates: "-1.2589, 36.7382",
      plusCode: "PPJV+Q4V",
      address: "Keroka, Nairobi, Kenya",
      focus: "Market waste systems & river protection",
      googleMapsUrl: "https://www.google.com/maps/place/Keroka,+Nairobi/@-1.2589,36.7382,15z"
    }
  ];

  // Embed map for main location
  const mainMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=36.7497,-1.2875,36.7697,-1.2675&layer=mapnik&marker=-1.2775,36.7597`;

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
                <MessageSquare className="h-16 w-16 text-emerald-300" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-300" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              Get in <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-emerald-100/80 max-w-3xl mx-auto"
            >
              Ready to join our movement or partner with us? Reach out—we'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">How to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 group-hover:border-emerald-400/30 transition-all duration-300 overflow-hidden">
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
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${method.color} blur-xl`} />
                    </motion.div>

                    <div className="relative z-10 text-center">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.color} mb-4`}>
                        <div className="text-white">
                          {method.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{method.title}</h3>
                      <a 
                        href={method.action}
                        target={method.action.includes('http') ? '_blank' : '_self'}
                        rel={method.action.includes('http') ? 'noopener noreferrer' : ''}
                        className="text-emerald-300 font-medium hover:text-emerald-200 transition-colors block mb-2"
                      >
                        {method.details}
                      </a>
                      <p className="text-emerald-100/70 text-sm">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2 text-white">Send Us a Message</h2>
                  <p className="text-emerald-100/70 mb-6">Fill out the form below and we'll get back to you soon.</p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-6 text-center"
                    >
                      <div className="text-emerald-400 text-4xl mb-4">✓</div>
                      <h3 className="text-xl font-bold mb-2 text-emerald-200">Message Prepared!</h3>
                      <p className="text-emerald-300 mb-4">Your message has been prepared. Please check your email client to send it.</p>
                      <p className="text-sm text-emerald-200/60">
                        If your email client didn't open automatically, please send your message to:<br />
                        <strong>ecowarriors.254@gmail.com</strong>
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-emerald-200 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-emerald-200/50 transition-all backdrop-blur-sm"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-emerald-200 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-emerald-200/50 transition-all backdrop-blur-sm"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-emerald-200 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-emerald-200/50 transition-all backdrop-blur-sm"
                            placeholder="0712 345 678"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-emerald-200 mb-2">
                          What is this regarding? *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white transition-all backdrop-blur-sm"
                        >
                          {subjectOptions.map((option) => (
                            <option key={option.value} value={option.value} className="bg-black">
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-emerald-200 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-emerald-200/50 transition-all backdrop-blur-sm"
                          placeholder="Tell us about your interest in West Side Eco Warriors..."
                        />
                      </div>

                      <div className="space-y-4">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative group w-full"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300" />
                          <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                            {isSubmitting ? (
                              <>
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Preparing Email...
                              </>
                            ) : (
                              <>
                                <Send className="h-5 w-5" />
                                Continue to Email
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </div>
                        </motion.button>

                        <p className="text-emerald-200/50 text-sm text-center">
                          This will open your email client with a pre-filled message.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Why Join Section */}
              <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-transparent to-teal-400/10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Why Join West Side Eco Warriors?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Make tangible impact in your community",
                    "Gain leadership and environmental skills",
                    "Connect with like-minded youth",
                    "Be part of Kenya's environmental movement"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-emerald-300 rounded-full mt-2"></div>
                      <span className="text-emerald-100">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Focus Areas */}
              <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 overflow-hidden" id="locations">
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                  <Globe className="h-6 w-6 text-emerald-400" />
                  Our Focus Areas
                </h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-emerald-900/30 border border-emerald-500/30">
                        <MapPin className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-emerald-200">{location.name}</div>
                        <div className="text-emerald-100/70 text-sm">{location.focus}</div>
                        <div className="text-emerald-300/50 text-xs mt-1">{location.address}</div>
                        {location.plusCode && (
                          <a
                            href={location.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-emerald-400/70 hover:text-emerald-300 text-xs mt-1 transition-colors"
                          >
                            <Navigation className="h-3 w-3" />
                            {location.plusCode}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/20 overflow-hidden">
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                  <Clock className="h-6 w-6 text-emerald-400" />
                  Response Time
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-900/30 border border-emerald-500/30">
                      <Zap className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium text-emerald-200">General Inquiries</div>
                      <div className="text-sm text-emerald-100/70">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-900/30 border border-emerald-500/30">
                      <Users className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium text-emerald-200">Volunteer Applications</div>
                      <div className="text-sm text-emerald-100/70">Within 48 hours</div>
                    </div>
                  </div>
                  <div className="text-sm text-emerald-200/60 mt-4">
                    We're a youth-led initiative, so response times may vary during major clean-up operations.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Find Us Here</h2>
            <p className="text-emerald-200/60 max-w-2xl mx-auto">
              Visit our headquarters along Gichangi Road, West Side, Nairobi
            </p>
          </motion.div>

          <div className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl border border-emerald-500/20 overflow-hidden">
            {/* Interactive Map */}
            <div className="relative h-[400px] md:h-[500px] w-full bg-gradient-to-r from-emerald-600/20 to-teal-500/10">
              <iframe
                src={mainMapUrl}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="West Side Eco Warriors Location Map"
              />
              
              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 bg-black/80 backdrop-blur-md rounded-lg p-4 border border-emerald-500/30 max-w-md">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">West Side Eco Warriors HQ</h3>
                    <p className="text-emerald-200/80 text-sm">PPJX+F8V, Along Gichangi Road, Nairobi</p>
                    <a
                      href="https://www.google.com/maps/dir//PPJX%2BF8V,+Nairobi/@-1.2775,36.7597"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                    >
                      <Navigation className="h-4 w-4" />
                      Get Directions
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {locations.map((location, index) => (
                  <motion.a
                    key={index}
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="text-center p-4 rounded-xl bg-emerald-900/20 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <MapPin className="h-5 w-5 text-emerald-400" />
                      </div>
                      <h4 className="font-bold mb-1 text-white group-hover:text-emerald-300 transition-colors">{location.name}</h4>
                      <div className="text-sm text-emerald-300/80 mb-1">{location.focus}</div>
                      <div className="text-xs text-emerald-200/50">{location.address}</div>
                      {location.plusCode && (
                        <div className="text-xs text-emerald-400/60 mt-2 font-mono">{location.plusCode}</div>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
