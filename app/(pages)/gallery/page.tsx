'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Users, Flame, MapPin, Calendar, Filter, Trash2, Trees, Droplets, Sparkles, Zap, Leaf, Globe, Target, Award, ArrowRight, Image as ImageIcon } from 'lucide-react';

// Gallery items with your actual locations - Nairobi River, Watiti, Keroka, Gishagi
const galleryItems = [
  {
    id: 1,
    title: "Nairobi River Kangemi Clean-up",
    description: "Major clean-up operation along the Nairobi River in Kangemi area. Removed plastic waste and debris affecting water quality.",
    category: "environment",
    date: "March 2026",
    location: "Nairobi River, Kangemi",
    stats: "3 tons of waste removed",
    image: "/images/projects/nairobi-river-kangemi.jpg",
    color: "from-emerald-500 to-teal-600",
    icon: <Droplets className="h-5 w-5" />,
    impact: "Improved water quality for local communities"
  },
  {
    id: 2,
    title: "Watiti Community Mobilization",
    description: "Engaging Watiti residents in waste management education and organizing local clean-up teams.",
    category: "community",
    date: "April 2026",
    location: "Watiti, Nairobi River",
    stats: "150 residents trained",
    image: "/images/projects/watiti-community.jpg",
    color: "from-emerald-500 to-green-600",
    icon: <Users className="h-5 w-5" />,
    impact: "Active community clean-up teams established"
  },
  {
    id: 3,
    title: "Keroka Market Waste Management",
    description: "Establishing proper waste disposal systems at Keroka market to prevent litter accumulation.",
    category: "community",
    date: "May 2026",
    location: "Keroka Market",
    stats: "2 disposal points created",
    image: "/images/projects/keroka-market.jpg",
    color: "from-teal-500 to-emerald-600",
    icon: <Trash2 className="h-5 w-5" />,
    impact: "Reduced market waste by 70%"
  },
  {
    id: 4,
    title: "Gishagi Youth Training",
    description: "Training Gishagi youth on safe waste burning techniques and environmental conservation.",
    category: "training",
    date: "June 2026",
    location: "Gishagi Youth Center",
    stats: "35 youth certified",
    image: "/images/projects/gishagi-training.jpg",
    color: "from-green-500 to-emerald-600",
    icon: <Flame className="h-5 w-5" />,
    impact: "Youth-led waste management initiatives"
  },
  {
    id: 5,
    title: "Nairobi River Watiti Section",
    description: "Creating and maintaining green spaces along Nairobi River in Watiti while clearing illegal dumping sites.",
    category: "environment",
    date: "July 2026",
    location: "Nairobi River, Watiti",
    stats: "5 green spaces established",
    image: "/images/projects/nairobi-river-watiti.jpg",
    color: "from-emerald-400 to-teal-500",
    icon: <Trees className="h-5 w-5" />,
    impact: "River banks protected from erosion"
  },
  {
    id: 6,
    title: "Keroka River Bank Protection",
    description: "Protecting river banks in Keroka from erosion caused by improper waste disposal.",
    category: "environment",
    date: "August 2026",
    location: "Keroka River Banks",
    stats: "1km river bank secured",
    image: "/images/projects/keroka-riverbank.jpg",
    color: "from-emerald-400 to-green-500",
    icon: <Droplets className="h-5 w-5" />,
    impact: "Prevented soil erosion in critical areas"
  },
  {
    id: 7,
    title: "Kangemi School Program",
    description: "Launching environmental clubs in Kangemi schools to educate children on waste management.",
    category: "education",
    date: "September 2026",
    location: "Kangemi Schools",
    stats: "4 schools participating",
    image: "/images/projects/kangemi-schools.jpg",
    color: "from-teal-500 to-green-600",
    icon: <Users className="h-5 w-5" />,
    impact: "1,200+ students educated"
  },
  {
    id: 8,
    title: "Gishagi Community Clean-up",
    description: "Joint clean-up operation in Gishagi area involving youth and community leaders.",
    category: "community",
    date: "October 2026",
    location: "Gishagi",
    stats: "Cross-community team formed",
    image: "/images/projects/gishagi-cleanup.jpg",
    color: "from-green-500 to-teal-600",
    icon: <Users className="h-5 w-5" />,
    impact: "Cleaner residential areas"
  },
  {
    id: 9,
    title: "Nairobi River Monitoring",
    description: "Regular monitoring and maintenance of cleaned areas along Nairobi River.",
    category: "monitoring",
    date: "November 2026",
    location: "Nairobi River",
    stats: "Monthly monitoring established",
    image: "/images/projects/nairobi-river-monitoring.jpg",
    color: "from-emerald-500 to-cyan-500",
    icon: <Droplets className="h-5 w-5" />,
    impact: "Sustainable waste management system"
  }
];

const categories = [
  { id: "all", name: "All Projects", icon: <Camera className="h-4 w-4" />, color: "from-emerald-500 to-teal-600" },
  { id: "environment", name: "Environment", icon: <Trees className="h-4 w-4" />, color: "from-emerald-500 to-green-600" },
  { id: "community", name: "Community", icon: <Users className="h-4 w-4" />, color: "from-teal-500 to-emerald-600" },
  { id: "education", name: "Education", icon: <Globe className="h-4 w-4" />, color: "from-green-500 to-emerald-600" },
  { id: "training", name: "Training", icon: <Flame className="h-4 w-4" />, color: "from-emerald-400 to-teal-500" },
  { id: "monitoring", name: "Monitoring", icon: <Target className="h-4 w-4" />, color: "from-teal-500 to-green-600" }
];

const locations = [
  { id: "all", name: "All Locations", icon: <MapPin className="h-4 w-4" /> },
  { id: "nairobi-river", name: "Nairobi River", icon: <Droplets className="h-4 w-4" /> },
  { id: "watiti", name: "Watiti", icon: <Trees className="h-4 w-4" /> },
  { id: "keroka", name: "Keroka", icon: <Trash2 className="h-4 w-4" /> },
  { id: "gishagi", name: "Gishagi", icon: <Users className="h-4 w-4" /> }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = galleryItems.filter(item => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
    const locationMatch = selectedLocation === "all" || 
      item.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return categoryMatch && locationMatch;
  });

  const openLightbox = (id: number) => {
    const index = galleryItems.findIndex(item => item.id === id);
    setSelectedImage(id);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % galleryItems.length;
    } else {
      newIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryItems[newIndex].id);
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

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
                <Camera className="h-16 w-16 text-emerald-300" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-300" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Impact Gallery</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-emerald-100/80 max-w-3xl mx-auto"
            >
              Documenting our environmental work across Nairobi River, Watiti, Keroka, and Gishagi.
              Every clean-up tells a story of community transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-black/80 backdrop-blur-lg border-b border-emerald-500/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-lg font-bold mb-3 text-white">Filter by Category</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all backdrop-blur-sm border ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                        : 'bg-emerald-900/30 text-emerald-200 border-emerald-500/30 hover:bg-emerald-800/40'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-3 text-white">Filter by Location</h2>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <motion.button
                    key={location.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all backdrop-blur-sm border ${
                      selectedLocation === location.id
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-transparent'
                        : 'bg-emerald-900/30 text-emerald-200 border-emerald-500/30 hover:bg-emerald-800/40'
                    }`}
                  >
                    {location.icon}
                    <span>{location.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-2xl font-bold text-white">
                {filteredItems.length} Project{filteredItems.length !== 1 ? 's' : ''} Documented
              </h2>
              <div className="text-emerald-200/70">
                Showing: {selectedCategory === 'all' ? 'All Categories' : 
                  categories.find(c => c.id === selectedCategory)?.name} • 
                {selectedLocation === 'all' ? ' All Locations' : 
                  ` ${locations.find(l => l.id === selectedLocation)?.name}`}
              </div>
            </div>
          </motion.div>

          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-emerald-500/40 mb-4">
                <Camera className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">No projects found</h3>
              <p className="text-emerald-200/60">Try selecting different filters</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div 
                    className="relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl border border-emerald-500/20 overflow-hidden hover:border-emerald-400/30 transition-all duration-300 cursor-pointer h-full"
                    onClick={() => openLightbox(item.id)}
                  >
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
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} blur-xl`} />
                    </motion.div>

                    {/* Image Placeholder with Gradient */}
                    <div className={`h-48 relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <div className="text-white text-center p-4">
                          <div className="mb-2">{item.icon}</div>
                          <div className="font-bold text-lg">{item.title.split(' ')[0]}</div>
                          <div className="text-sm opacity-90">{item.location.split(',')[0]}</div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-emerald-200 text-sm border border-emerald-500/30">
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-emerald-100/70 text-sm mb-4">{item.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-emerald-200">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-emerald-200">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      <div className="bg-emerald-900/30 rounded-lg p-3 border border-emerald-500/30">
                        <div className="text-emerald-300 font-bold">{item.stats}</div>
                        <div className="text-xs text-emerald-200/60">Impact Measurement</div>
                      </div>

                      <div className="mt-4 text-center text-emerald-300 text-sm font-medium flex items-center justify-center gap-2">
                        Click to view details
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 relative bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10" />
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center text-white">Our Geographic Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  location: "Nairobi River",
                  projects: "3 Projects",
                  focus: "Water Quality & Clean-up",
                  color: "border-emerald-500",
                  icon: <Droplets className="h-6 w-6" />
                },
                {
                  location: "Watiti",
                  projects: "2 Projects",
                  focus: "Community Engagement",
                  color: "border-teal-500",
                  icon: <Trees className="h-6 w-6" />
                },
                {
                  location: "Keroka",
                  projects: "2 Projects",
                  focus: "Market & River Banks",
                  color: "border-green-500",
                  icon: <Trash2 className="h-6 w-6" />
                },
                {
                  location: "Gishagi",
                  projects: "2 Projects",
                  focus: "Youth Training",
                  color: "border-emerald-400",
                  icon: <Users className="h-6 w-6" />
                }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-b from-gray-900/40 to-black/40 p-6 rounded-xl border-l-4 ${area.color} backdrop-blur-sm border border-emerald-500/20`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-emerald-900/30 border border-emerald-500/30">
                      {area.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white">{area.location}</h4>
                  </div>
                  <div className="text-emerald-300 font-bold text-lg mb-1">{area.projects}</div>
                  <p className="text-emerald-100/70 text-sm">{area.focus}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-12 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-transparent to-teal-400/10" />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-white">Share Your Photos With Us!</h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
                Have photos from our clean-up operations? Help us document our impact by sharing your pictures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:ecowarriors.254@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group inline-block"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-200 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-white text-emerald-800 px-8 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2">
                    <ImageIcon className="h-5 w-5" />
                    Send Photos
                  </div>
                </motion.a>
                
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group inline-block"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-transparent border-2 border-white text-white px-8 py-3 rounded-2xl font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Join a Clean-up
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border border-emerald-500/30 backdrop-blur-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/60 transition-colors border border-emerald-500/30"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/40 backdrop-blur-sm p-3 rounded-full text-white hover:bg-black/60 transition-colors border border-emerald-500/30"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/40 backdrop-blur-sm p-3 rounded-full text-white hover:bg-black/60 transition-colors border border-emerald-500/30"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Content */}
              <div className={`h-[60vh] bg-gradient-to-br ${selectedItem.color} flex items-center justify-center relative overflow-hidden`}>
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-30">
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

                <div className="text-white text-center p-8 relative z-10">
                  <div className="mb-4 transform scale-125">{selectedItem.icon}</div>
                  <div className="text-4xl font-bold mb-2">{selectedItem.title}</div>
                  <div className="text-xl opacity-90">{selectedItem.location}</div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-4 text-white">Project Details</h3>
                    <p className="text-emerald-100/80 text-lg">{selectedItem.description}</p>
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-5 w-5 text-emerald-400" />
                          <span className="font-bold text-emerald-200">Date</span>
                        </div>
                        <div className="text-emerald-100">{selectedItem.date}</div>
                      </div>
                      <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-5 w-5 text-emerald-400" />
                          <span className="font-bold text-emerald-200">Location</span>
                        </div>
                        <div className="text-emerald-100">{selectedItem.location}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 p-6 rounded-xl border border-emerald-500/30">
                      <h4 className="text-xl font-bold mb-3 text-white">Impact Achieved</h4>
                      <div className="text-2xl font-bold text-emerald-300 mb-2">{selectedItem.stats}</div>
                      <p className="text-emerald-200/70">{selectedItem.impact}</p>
                    </div>

                    <div className="bg-emerald-900/20 p-6 rounded-xl border border-emerald-500/20">
                      <h4 className="text-xl font-bold mb-3 text-white">Project Category</h4>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-900/30 border border-emerald-500/30">
                          {categories.find(c => c.id === selectedItem.category)?.icon}
                        </div>
                        <span className="font-medium text-emerald-200">
                          {categories.find(c => c.id === selectedItem.category)?.name}
                        </span>
                      </div>
                    </div>

                    <div className="text-center bg-black/30 p-4 rounded-xl border border-emerald-500/20">
                      <p className="text-emerald-300 mb-2 flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Photo coming soon!
                      </p>
                      <p className="text-sm text-emerald-200/60">
                        We're collecting photos from all our operations. Real images will be uploaded as we document our work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
