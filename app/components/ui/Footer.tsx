'use client';

import { motion } from 'framer-motion';
import { Leaf, Facebook, Twitter, Instagram, Mail, MapPin, Phone, Globe, Users, Sparkles, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-emerald-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-black to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30">
                <Leaf className="h-6 w-6 text-emerald-300" />
              </div>
              <span className="text-2xl font-bold text-white">
                West Side<br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Eco Warriors
                </span>
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-emerald-100/70"
            >
              Youth-led environmental action group transforming communities through clean-up initiatives and climate advocacy in Kenya.
            </motion.p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/profiles", label: "Our Team" },
                { href: "/contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={link.href}
                    className="text-emerald-200/80 hover:text-emerald-300 transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - UPDATED WITH CORRECT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <Mail className="h-5 w-5 text-emerald-400" />
              Contact Us
            </h3>
            <div className="space-y-4">
              {/* Email - Glen */}
              <motion.a
                href="mailto:ecowarriors.254@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-emerald-200/80 hover:text-emerald-300 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-emerald-900/30 border border-emerald-500/30 group-hover:border-emerald-400/50">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Email (Glen)</div>
                  <div className="text-sm">ecowarriors.254@gmail.com</div>
                </div>
              </motion.a>

              {/* Phone - Main */}
              <motion.a
                href="tel:+254117574570"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-emerald-200/80 hover:text-emerald-300 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-emerald-900/30 border border-emerald-500/30 group-hover:border-emerald-400/50">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm">0117574570</div>
                </div>
              </motion.a>

              {/* Location */}
              <div className="flex items-center gap-3 text-emerald-200/80">
                <div className="p-2 rounded-lg bg-emerald-900/30 border border-emerald-500/30">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm">West Side, Nairobi, Kenya</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media & Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <Globe className="h-5 w-5 text-emerald-400" />
              Connect With Us
            </h3>
            
            {/* Instagram - Wainaina */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mb-6"
            >
              <a
                href="https://instagram.com/whywainaina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-500/30 hover:border-pink-400/50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Follow Wainaina</div>
                  <div className="text-sm text-pink-200/80">@whywainaina</div>
                </div>
              </a>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                {
                  icon: <Instagram className="h-4 w-4" />,
                  href: "#",
                  color: "from-pink-500 to-rose-600",
                  bg: "bg-pink-900/20",
                  border: "border-pink-500/30"
                },
                {
                  icon: <Facebook className="h-4 w-4" />,
                  href: "#",
                  color: "from-blue-500 to-blue-700",
                  bg: "bg-blue-900/20",
                  border: "border-blue-500/30"
                },
                {
                  icon: <Twitter className="h-4 w-4" />,
                  href: "#",
                  color: "from-sky-500 to-cyan-600",
                  bg: "bg-sky-900/20",
                  border: "border-sky-500/30"
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg ${social.bg} border ${social.border} hover:opacity-100 transition-all duration-300 group`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${social.color}`}>
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Tagline */}
            <p className="mt-6 text-emerald-200/60 text-sm flex items-center gap-2">
              <Sparkles className="h-3 w-3" />
              Creating cleaner communities through youth action
            </p>
          </motion.div>
        </div>

        {/* Copyright & Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-emerald-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-emerald-200/60 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} West Side Eco Warriors. All rights reserved.</p>
            <p className="text-sm mt-1">Youth-led environmental initiative based in Nairobi, Kenya</p>
          </div>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 hover:border-emerald-400/50 text-emerald-200 hover:text-emerald-100 transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
