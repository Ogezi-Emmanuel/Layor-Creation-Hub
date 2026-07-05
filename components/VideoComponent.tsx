'use client';

import { useState, useEffect, useRef } from 'react';

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
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setLoading(false);
    };

    const handleError = () => {
      setError(true);
      setLoading(false);
      console.error('Error loading video:', src);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl min-h-[300px] ${className}`}>
        <p className="text-xl text-gray-400">Video unavailable</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl">
      {loading && (
        <div className="absolute inset-0 bg-[#1A1A1A]/80 flex items-center justify-center z-10">
          <div className="w-12 h-12 border-4 border-[#E0BFB8]/30 border-t-[#E0BFB8] rounded-full animate-spin" />
        </div>
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`w-full h-auto ${className}`}
        src={src}
        aria-label={alt}
      />
    </div>
  );
}
