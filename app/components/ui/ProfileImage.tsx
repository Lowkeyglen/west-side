'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ProfileImageProps {
  name: string;
  color: string;
  size?: 'md' | 'lg';
}

export default function ProfileImage({ name, color, size = 'md' }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);
  const [pngError, setPngError] = useState(false);
  const initial = name.charAt(0);
  
  const sizes = size === 'md' ? 'w-24 h-24' : 'w-32 h-32';
  const textSize = size === 'md' ? 'text-2xl' : 'text-4xl';
  
  const baseName = name.toLowerCase();
  const imageSrc = `/images/members/${baseName}.png`;

  return (
    <div className={`relative rounded-full border-4 border-white ${sizes} overflow-hidden shadow-lg`}>
      {/* Show image if available, otherwise show colored initial */}
      {!imageError ? (
        <Image
          src={imageSrc}
          alt={`${name}'s photo`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 96px, 128px"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${color}`}>
          <span className={`text-white font-bold ${textSize}`}>{initial}</span>
        </div>
      )}
    </div>
  );
}
