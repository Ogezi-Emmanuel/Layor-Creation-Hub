'use client';

import { useState } from 'react';

export default function VideoComponent({ 
  src, 
  className = '', 
  alt 
}: { 
  src: string; 
  className?: string; 
  alt?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl ${className}`}>
        <p className="text-xl text-gray-400">Video unavailable</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onError={() => setError(true)}
        className={`w-full h-auto ${className}`}
        src={src}
        aria-label={alt}
      />
    </div>
  );
}
