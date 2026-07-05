'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Scissors, GraduationCap, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full Screen Hero Video Background */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/45 via-[#1A1A1A]/65 to-[#1A1A1A]" />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            src="/Hero.mp4"
            aria-label="Cinematic fashion film showcasing Layor Creation Hub designs"
          />
        </div>
      </div>

      {/* Hero Content with Floating Buttons */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.21, 0.69, 0.29, 0.98] }}
          className="text-center mb-18"
        >
          <div className="flex items-center justify-center gap-3 mb-7">
            <Sparkles className="text-[#E0BFB8]" size={30} />
            <span className="text-[#E0BFB8] uppercase tracking-[0.45em] text-xs font-semibold">Layor Creation Hub</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-7 leading-tight text-white drop-shadow-2xl">
            Where Elegance <br />
            <span className="text-[#E0BFB8]">Meets Mastery.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 drop-shadow-lg leading-relaxed">
            Step into two distinct worlds of fashion: our atelier where dreams are stitched into reality, and our academy where talent is nurtured into craft.
          </p>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link href="/studio" aria-label="Enter Bespoke & Bridal Studio">
            <motion.button
              initial={{ x: -85, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1,
                y: [0, -12, 0, -8, 0]
              }}
              transition={{ 
                duration: 1.1, 
                delay: 0.55, 
                ease: [0.21, 0.69, 0.29, 0.98],
                y: {
                  duration: 4.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.27, 0.48, 0.78, 1]
                }
              }}
              whileHover={{ scale: 1.08, boxShadow: '0 0 80px rgba(224,191,184,0.6)' }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#E0BFB8]/92 backdrop-blur-sm px-11 py-7 rounded-full text-xl font-bold text-[#1A1A1A] hover:bg-[#E0BFB8] transition-all duration-600 flex items-center justify-center gap-4"
            >
              <Scissors size={31} />
              Bespoke & Bridal Studio
            </motion.button>
          </Link>
          
          <Link href="/academy" aria-label="Enter Fashion Design Academy">
            <motion.button
              initial={{ x: 85, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1,
                y: [0, 13, 0, 9, 0]
              }}
              transition={{ 
                duration: 1.1, 
                delay: 0.77, 
                ease: [0.21, 0.69, 0.29, 0.98],
                y: {
                  duration: 5.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.32, 0.52, 0.82, 1]
                }
              }}
              whileHover={{ scale: 1.08, boxShadow: '0 0 80px rgba(224,191,184,0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="border-[3px] border-[#E0BFB8] bg-white/10 backdrop-blur-md px-11 py-7 rounded-full text-xl font-bold text-white hover:bg-[#E0BFB8] hover:text-[#1A1A1A] transition-all duration-600 flex items-center justify-center gap-4"
            >
              <GraduationCap size={31} />
              Fashion Design Academy
            </motion.button>
          </Link>
        </div>


      </div>
    </div>
  );
}
