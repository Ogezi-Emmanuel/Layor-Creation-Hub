'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scissors, GraduationCap, Home } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${scrolled ? 'bg-[#1A1A1A]/98 backdrop-blur-2xl shadow-lg shadow-[#E0BFB8]/5' : 'bg-gradient-to-b from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-transparent backdrop-blur-xl'} border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on Left */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.65, ease: [0.21, 0.69, 0.29, 0.98] }}
            className="flex-shrink-0"
          >
            <Link href="/" aria-label="Go to Layor Creation Hub home page">
              <div className="relative group cursor-pointer w-24 h-24 flex items-center justify-center"> {/* Added fixed size container */}
                <div className="absolute inset-0 bg-[#E0BFB8]/20 rounded-3xl blur-xl group-hover:bg-[#E0BFB8]/35 transition-all duration-700 group-hover:scale-110" /> {/* Changed to rounded-3xl */}
                <Image 
                  src="/Logo.png"
                  alt="Layor Creation Hub Logo"
                  width={80}  // Adjusted size
                  height={80} // Adjusted size
                  className="object-contain relative z-10 rounded-3xl p-1 border border-white/10 group-hover:border-[#E0BFB8]/40 transition-all duration-500" // Changed to rounded-3xl
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.21, 0.69, 0.29, 0.98] }}
            className="hidden md:flex items-center gap-10"
          >
            {[
              { href: '/', label: 'Home', icon: Home },
              { href: '/studio', label: 'The Studio', icon: Scissors },
              { href: '/academy', label: 'The Academy', icon: GraduationCap },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                aria-label={`Navigate to ${item.label} page`}
                className={`group relative flex items-center gap-2.5 transition-all duration-500 ${pathname === item.href ? 'text-[#E0BFB8]' : 'text-white/90 hover:text-[#E0BFB8]'}`}
              >
                <item.icon size={19} className={pathname === item.href ? 'text-[#E0BFB8]' : ''} />
                <span className="text-sm font-semibold tracking-[0.08em]">{item.label}</span>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#E0BFB8] transition-all duration-500 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.44, ease: [0.21, 0.69, 0.29, 0.98] }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-3.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-500"
          >
            {isMenuOpen ? <X size={26} className="text-[#E0BFB8]" /> : <Menu size={26} className="text-white" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.21, 0.69, 0.29, 0.98] }}
            className="md:hidden bg-[#1A1A1A]/98 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-10 space-y-7">
              {[
                { href: '/', label: 'Home', icon: Home },
                { href: '/studio', label: 'The Studio', icon: Scissors },
                { href: '/academy', label: 'The Academy', icon: GraduationCap },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -25, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.13, ease: [0.21, 0.69, 0.29, 0.98] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={`Go to ${item.label} page`}
                    className={`flex items-center gap-4 text-xl font-semibold transition-colors duration-300 ${pathname === item.href ? 'text-[#E0BFB8]' : 'text-white hover:text-[#E0BFB8]'}`}
                  >
                    <item.icon size={25} className={pathname === item.href ? 'text-[#E0BFB8]' : 'text-[#E0BFB8]/80'} />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
