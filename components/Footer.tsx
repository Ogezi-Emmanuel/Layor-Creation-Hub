'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="relative group cursor-pointer w-24 h-24 flex items-center justify-center"> {/* Added fixed size container */}
                <div className="absolute inset-0 bg-[#E0BFB8]/20 rounded-3xl blur-xl group-hover:bg-[#E0BFB8]/35 transition-all duration-700 group-hover:scale-110" /> {/* Changed to rounded-3xl */}
                <Image 
                  src="/Logo.png"
                  alt="Layor Creation Hub Logo"
                  width={80}  // Adjusted size
                  height={80} // Adjusted size
                  className="object-contain relative z-10 rounded-3xl p-1 border border-white/10 group-hover:border-[#E0BFB8]/40 transition-all duration-500" // Changed to rounded-3xl
                />
              </div>
            </div>
            <p className="text-base text-gray-400 leading-relaxed">Based in Lagos, we blend traditional Nigerian artistry with modern haute couture techniques to create pieces that stand the test of time.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.12 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-2xl mb-6 text-[#E0BFB8]">Get in Touch</h4>
            <p className="text-lg text-gray-400 mb-3">WhatsApp: +234 808 998 0364</p>
            <p className="text-lg text-gray-400 mb-3">Lagos, Nigeria</p>
            <p className="text-base text-gray-500 mt-6">Ready to bring your vision to life? Send us a message anytime.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.24 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-2xl mb-6 text-[#E0BFB8]">Explore</h4>
            <div className="space-y-3">
              <Link href="/studio" aria-label="Visit Bespoke & Bridal Studio page" className="block text-lg text-gray-400 hover:text-[#E0BFB8] transition-colors">Bespoke & Bridal Studio</Link>
              <Link href="/academy" aria-label="Visit Fashion Design Academy page" className="block text-lg text-gray-400 hover:text-[#E0BFB8] transition-colors">Fashion Design Academy</Link>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-sm text-gray-500 mb-2">Layor Creation Hub © 2026. All rights reserved.</p>
          <p className="text-base text-[#E0BFB8] font-medium">Crafted with intention in Lagos</p>
        </div>
      </div>
    </footer>
  );
}
