'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Users, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'volunteer'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For now, just simulate form submission
    // In production, you can connect this to:
    // 1. Formspree: https://formspree.io/
    // 2. EmailJS: https://www.emailjs.com/
    // 3. Netlify Forms: https://www.netlify.com/products/forms/
    // 4. Your own backend API
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mailto link as fallback
    const subject = `Contact Form: ${formData.interest}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AInterest: ${formData.interest}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:contact@westsideecowarriors.org?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open email client as fallback
    window.open(mailtoLink, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        interest: 'volunteer'
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
      details: "contact@westsideecowarriors.org",
      action: "mailto:contact@westsideecowarriors.org",
      description: "For general inquiries and partnerships"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+254 700 000 000",
      action: "tel:+254700000000",
      description: "Available Monday to Friday, 9AM - 5PM"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "West Side, Nairobi, Kenya",
      action: "#locations",
      description: "Based in Kangemi, serving West Side communities"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Join Us",
      details: "Volunteer Application",
      action: "#join-form",
      description: "Become an Eco Warrior today"
    }
  ];

  const interestOptions = [
    { value: 'volunteer', label: 'Volunteer with us' },
    { value: 'partner', label: 'Partnership Opportunity' },
    { value: 'media', label: 'Media Inquiry' },
    { value: 'donation', label: 'Donation/Support' },
    { value: 'other', label: 'Other' }
  ];

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
              <MessageSquare className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ready to join our movement or partner with us? Reach out—we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">How to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <a 
                    href={method.action}
                    className="text-primary font-medium hover:text-primary-dark transition-colors block mb-2"
                  >
                    {method.details}
                  </a>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
              id="join-form"
            >
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you soon.</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                >
                  <div className="text-green-600 text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold mb-2 text-green-800">Message Prepared!</h3>
                  <p className="text-green-700 mb-4">Your message has been prepared. Please check your email client to send it.</p>
                  <p className="text-sm text-gray-600">
                    If your email client didn't open automatically, please send your message to:<br />
                    <strong>contact@westsideecowarriors.org</strong>
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      What are you interested in? *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                    >
                      {interestOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tell us about your interest in West Side Eco Warriors..."
                    />
                  </div>

                  <div className="space-y-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Preparing Email...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Continue to Email
                        </>
                      )}
                    </motion.button>

                    <p className="text-gray-500 text-sm text-center">
                      This will open your email client with a pre-filled message.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-green rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Join West Side Eco Warriors?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Make tangible impact in your community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Gain leadership and environmental skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Connect with like-minded youth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Be part of Kenya's environmental movement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8" id="locations">
                <h3 className="text-2xl font-bold mb-4">Our Focus Areas</h3>
                <div className="space-y-4">
                  {[
                    { location: "Kangemi", focus: "Nairobi River clean-up & school programs" },
                    { location: "Watiti", focus: "Community waste management & green spaces" },
                    { location: "Keroka", focus: "Market waste systems & river protection" }
                  ].map((area, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-bold">{area.location}</div>
                        <div className="text-gray-600 text-sm">{area.focus}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Response Time</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">General Inquiries:</span>
                    <span className="font-bold">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Volunteer Applications:</span>
                    <span className="font-bold">Within 48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Partnership Requests:</span>
                    <span className="font-bold">Within 72 hours</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  We're a youth-led initiative, so response times may vary during major clean-up operations.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Where We Operate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based in West Side, Nairobi, with active projects across multiple communities
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">West Side, Nairobi, Kenya</h3>
                <p className="text-gray-700">Primary operations in Kangemi, Watiti, and Keroka areas</p>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    area: "Kangemi Operations",
                    contact: "kangemi@westsideecowarriors.org",
                    hours: "Sat-Sun, 8AM-4PM"
                  },
                  {
                    area: "Watiti Operations",
                    contact: "watiti@westsideecowarriors.org",
                    hours: "Sat-Sun, 8AM-4PM"
                  },
                  {
                    area: "Keroka Operations",
                    contact: "keroka@westsideecowarriors.org",
                    hours: "Sat-Sun, 8AM-4PM"
                  }
                ].map((location, index) => (
                  <div key={index} className="text-center p-4">
                    <h4 className="font-bold mb-2">{location.area}</h4>
                    <div className="text-primary mb-1">{location.contact}</div>
                    <div className="text-sm text-gray-600">{location.hours}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
