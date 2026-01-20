'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Users, Flame, MapPin, Calendar, Filter, Trash2, Trees, Droplets } from 'lucide-react';

// Gallery items with your actual locations
const galleryItems = [
  {
    id: 1,
    title: "Kangemi Nairobi River Clean-up",
    description: "Major clean-up operation along the Nairobi River in Kangemi area. Removed plastic waste and debris affecting water quality.",
    category: "environment",
    date: "March 2026",
    location: "Kangemi, Nairobi River",
    stats: "3 tons of waste removed",
    image: "/images/projects/kangemi-river.jpg",
    color: "from-blue-500 to-cyan-500",
    icon: <Droplets className="h-5 w-5" />
  },
  {
    id: 2,
    title: "Watiti Community Mobilization",
    description: "Engaging Watiti residents in waste management education and organizing local clean-up teams.",
    category: "community",
    date: "April 2026",
    location: "Watiti, Nairobi",
    stats: "150 residents trained",
    image: "/images/projects/watiti-community.jpg",
    color: "from-green-500 to-emerald-500",
    icon: <Users className="h-5 w-5" />
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
    color: "from-teal-500 to-green-500",
    icon: <Trash2 className="h-5 w-5" />
  },
  {
    id: 4,
    title: "Kangemi Youth Training",
    description: "Training Kangemi youth on safe waste burning techniques and environmental conservation.",
    category: "training",
    date: "June 2026",
    location: "Kangemi Youth Center",
    stats: "35 youth certified",
    image: "/images/projects/kangemi-training.jpg",
    color: "from-purple-500 to-pink-500",
    icon: <Flame className="h-5 w-5" />
  },
  {
    id: 5,
    title: "Watiti Green Spaces",
    description: "Creating and maintaining green spaces in Watiti while clearing illegal dumping sites.",
    category: "environment",
    date: "July 2026",
    location: "Watiti Public Spaces",
    stats: "5 green spaces established",
    image: "/images/projects/watiti-greens.jpg",
    color: "from-yellow-500 to-amber-500",
    icon: <Trees className="h-5 w-5" />
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
    color: "from-red-500 to-orange-500",
    icon: <Droplets className="h-5 w-5" />
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
    color: "from-indigo-500 to-blue-500",
    icon: <Users className="h-5 w-5" />
  },
  {
    id: 8,
    title: "Watiti-Keroka Collaboration",
    description: "Joint clean-up operation between Watiti and Keroka communities sharing best practices.",
    category: "community",
    date: "October 2026",
    location: "Watiti-Keroka Border",
    stats: "Cross-community team formed",
    image: "/images/projects/watiti-keroka.jpg",
    color: "from-pink-500 to-rose-500",
    icon: <Users className="h-5 w-5" />
  },
  {
    id: 9,
    title: "Nairobi River Monitoring",
    description: "Regular monitoring and maintenance of cleaned areas along Nairobi River in Kangemi.",
    category: "monitoring",
    date: "November 2026",
    location: "Nairobi River, Kangemi",
    stats: "Monthly monitoring established",
    image: "/images/projects/river-monitoring.jpg",
    color: "from-cyan-500 to-blue-500",
    icon: <Droplets className="h-5 w-5" />
  }
];

const categories = [
  { id: "all", name: "All Projects", icon: <Camera className="h-4 w-4" /> },
  { id: "environment", name: "Environment", icon: <Trees className="h-4 w-4" /> },
  { id: "community", name: "Community", icon: <Users className="h-4 w-4" /> },
  { id: "education", name: "Education", icon: <Filter className="h-4 w-4" /> },
  { id: "training", name: "Training", icon: <Flame className="h-4 w-4" /> },
  { id: "monitoring", name: "Monitoring", icon: <Droplets className="h-4 w-4" /> }
];

const locations = [
  { id: "all", name: "All Locations" },
  { id: "kangemi", name: "Kangemi" },
  { id: "watiti", name: "Watiti" },
  { id: "keroka", name: "Keroka" },
  { id: "nairobi-river", name: "Nairobi River" }
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-green text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Camera className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Documenting our environmental work across Kangemi, Watiti, Keroka, and the Nairobi River.
              Every clean-up tells a story of community transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-lg font-bold mb-2">Filter by Category</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2">Filter by Location</h2>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <motion.button
                    key={location.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedLocation === location.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {location.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {filteredItems.length} Project{filteredItems.length !== 1 ? 's' : ''} Documented
              </h2>
              <div className="text-gray-600">
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
              <div className="text-gray-400 mb-4">
                <Camera className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting different filters</p>
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
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full"
                    onClick={() => openLightbox(item.id)}
                  >
                    {/* Image Placeholder with Gradient */}
                    <div className={`h-48 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          {item.icon}
                          <div className="mt-2 font-bold text-lg">{item.title.split(' ')[0]}</div>
                          <div className="text-sm opacity-90">{item.location.split(',')[0]}</div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-primary font-bold">{item.stats}</div>
                        <div className="text-xs text-gray-600">Impact Measurement</div>
                      </div>

                      <div className="mt-4 text-center text-primary text-sm font-medium">
                        Click to view details →
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
            className="mt-16 bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Geographic Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  location: "Kangemi",
                  projects: "4 Projects",
                  focus: "Nairobi River & Schools",
                  color: "border-blue-500"
                },
                {
                  location: "Watiti",
                  projects: "3 Projects",
                  focus: "Community & Green Spaces",
                  color: "border-green-500"
                },
                {
                  location: "Keroka",
                  projects: "2 Projects",
                  focus: "Market & River Banks",
                  color: "border-purple-500"
                }
              ].map((area, index) => (
                <div key={index} className={`bg-white p-6 rounded-xl border-l-4 ${area.color}`}>
                  <h4 className="text-xl font-bold mb-2">{area.location}</h4>
                  <div className="text-primary font-bold text-lg mb-1">{area.projects}</div>
                  <p className="text-gray-600 text-sm">{area.focus}</p>
                </div>
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
            <div className="bg-gradient-green rounded-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Share Your Photos With Us!</h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Have photos from our clean-up operations? Help us document our impact by sharing your pictures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:media@westsideecowarriors.org">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Send Photos
                  </motion.button>
                </a>
                <a href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
                  >
                    Join a Clean-up
                  </motion.button>
                </a>
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Content */}
              <div className="h-[70vh] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="mb-4">{selectedItem.icon}</div>
                  <div className="text-4xl font-bold mb-2">{selectedItem.title}</div>
                  <div className="text-xl opacity-90">{selectedItem.location}</div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Project Details</h3>
                    <p className="text-gray-700 text-lg">{selectedItem.description}</p>
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-bold">Date</span>
                        </div>
                        <div>{selectedItem.date}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span className="font-bold">Location</span>
                        </div>
                        <div>{selectedItem.location}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-primary/10 p-6 rounded-xl">
                      <h4 className="text-xl font-bold mb-3">Impact Achieved</h4>
                      <div className="text-2xl font-bold text-primary mb-2">{selectedItem.stats}</div>
                      <p className="text-gray-600">Measurable outcome from this project</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-xl font-bold mb-3">Project Category</h4>
                      <div className="flex items-center gap-2">
                        {categories.find(c => c.id === selectedItem.category)?.icon}
                        <span className="font-medium">
                          {categories.find(c => c.id === selectedItem.category)?.name}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-600 mb-2">Photo coming soon!</p>
                      <p className="text-sm text-gray-500">
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
