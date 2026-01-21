'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Leaf } from 'lucide-react';

interface ProfileImageProps {
  name: string;
  color: string;
  size?: 'md' | 'lg';
  isLeader?: boolean;
  isActive?: boolean;
}

export default function ProfileImage({ name, color, size = 'md', isLeader = false, isActive = true }: ProfileImageProps) {
  const [imgError, setImgError] = useState(false);
  const initial = name.charAt(0);
  
  const sizes = size === 'md' ? 'w-24 h-24' : 'w-32 h-32';
  const textSize = size === 'md' ? 'text-2xl' : 'text-4xl';
  
  // Use lowercase name for the image filename
  const baseName = name.toLowerCase();
  
  // Try PNG first, then JPG
  const imageSrc = `/images/members/${baseName}.png`;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`relative rounded-full border-4 border-emerald-100/30 backdrop-blur-sm ${sizes} overflow-hidden shadow-2xl`}
    >
      {/* Energy Orb Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      
      {/* Leader Badge */}
      {isLeader && (
        <motion.div
          className="absolute -top-2 -right-2 z-10"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <div className="p-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full shadow-lg">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
        </motion.div>
      )}
      
      {/* Active Status */}
      {isActive && (
        <div className="absolute -bottom-2 -right-2 z-10">
          <div className="p-1.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full shadow-lg border-2 border-emerald-100/50">
            <Zap className="h-3 w-3 text-white" />
          </div>
        </div>
      )}
      
      {/* Show image if available */}
      {!imgError ? (
        <Image
          src={imageSrc}
          alt={`${name}'s profile photo`}
          fill
          className="object-cover relative z-20"
          sizes="(max-width: 768px) 96px, 128px"
          onError={() => setImgError(true)}
          priority
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center relative z-20 bg-gradient-to-br ${color}`}>
          <span className={`text-white font-bold ${textSize} drop-shadow-lg`}>{initial}</span>
        </div>
      )}
      
      {/* Holographic Border Effect */}
      <div className="absolute inset-0 rounded-full border-2 border-emerald-400/20 pointer-events-none" />
      
      {/* Floating Particles */}
      <motion.div
        className="absolute -inset-4 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={{
              top: `${Math.sin((i / 8) * Math.PI * 2) * 50 + 50}%`,
              left: `${Math.cos((i / 8) * Math.PI * 2) * 50 + 50}%`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
