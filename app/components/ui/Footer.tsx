import { Leaf, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">West Side Eco Warriors</span>
            </div>
            <p className="text-white/80">
              Youth-led environmental action group transforming communities through clean-up initiatives and climate advocacy in Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white/80 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white/80 transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-white/80 transition-colors">Gallery</Link></li>
              <li><Link href="/profiles" className="hover:text-white/80 transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-white/80 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span>West Side, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>contact@westsideecowarriors.org</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-white/60 text-sm">
              Creating cleaner communities through youth action
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} West Side Eco Warriors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
