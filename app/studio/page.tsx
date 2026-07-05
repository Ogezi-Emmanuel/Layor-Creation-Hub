'use client';

import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Scissors, Sparkles, Users, Calendar, Star } from 'lucide-react';
import VideoComponent from '@/components/VideoComponent';

export default function StudioPage() {
  const handleStudioSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('fullName') as string,
        category: formData.get('dressCategory') as string,
        eventDate: formData.get('eventDate') as string,
        budget: formData.get('budgetTier') as string,
        notes: formData.get('designNotes') as string,
      };
      const message = `✨ *STUDIO BOOKING REQUEST* ✨\n\n👤 Name: ${data.name}\n👗 Category: ${data.category}\n📅 Event Date: ${data.eventDate}\n💰 Budget: ${data.budget}\n📝 Design Notes: ${data.notes}`;
      const encoded = encodeURIComponent(message);
      window.open(`https://api.whatsapp.com/send?phone=2348089980364&text=${encoded}`, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error submitting studio booking:', error);
      alert('There was an error submitting your booking. Please try again.');
    }
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 0.69, 0.29, 0.98] }}
          className="text-center mb-18"
        >
          <div className="flex items-center justify-center gap-3 mb-7">
            <Scissors className="text-[#E0BFB8]" size={38} />
            <span className="text-[#E0BFB8] uppercase tracking-[0.38em] text-sm font-bold">The Studio</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl mb-8">
            Haute Couture & <br />
            <span className="text-[#E0BFB8]">Bridal Bespoke</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Step into our atelier, where every piece is a labor of love. Our master artisans craft one-of-a-kind bridal gowns and bespoke garments that tell your unique story.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="space-y-11 mb-20">
          {[
            { src: '/Bridal.mp4', title: 'Bridal Couture', desc: 'Timeless pieces crafted for your most memorable moments. Every thread woven with intention.', alt: 'Elegant bridal gown showcase' },
            { src: '/Bespoke-1.mp4', title: 'Bespoke Creations', desc: 'From red carpet premieres to intimate celebrations, designs made just for you.', alt: 'Bespoke fashion design process' },
            { src: '/Bespoke-2.mp4', title: 'Premium Fittings', desc: 'Meticulous attention to detail ensures a fit that feels like it was made for you alone.', alt: 'Premium fabric selection and fitting' },
          ].map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 65 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.22, ease: [0.21, 0.69, 0.29, 0.98], duration: 0.85 }}
              viewport={{ once: true, margin: '-120px' }}
              className="group"
            >
              <div className="transition-all duration-750 group-hover:shadow-[0_0_90px_rgba(224,191,184,0.45)] rounded-3xl overflow-hidden">
                <VideoComponent
                  src={video.src}
                  alt={video.alt}
                />
              </div>
              <div className="mt-7 text-center sm:text-left px-4">
                <h3 className="font-serif text-3xl sm:text-4xl mb-3">{video.title}</h3>
                <p className="text-lg text-gray-300">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mb-20">
          {[
            { icon: Users, title: 'Personal Consultation', desc: 'Intimate one-on-one sessions where we listen closely to your vision and bring it to life.' },
            { icon: Star, title: 'Premium Materials', desc: 'Luxe fabrics, intricate laces, and hand-selected embellishments from around the globe.' },
            { icon: Calendar, title: 'Flexible Timeline', desc: 'Working with your schedule to ensure your piece is perfect for your special day.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.17, ease: [0.21, 0.69, 0.29, 0.98], duration: 0.7 }}
              viewport={{ once: true, margin: '-120px' }}
              whileHover={{ y: -6 }}
              className="bg-white/5 rounded-3xl p-10 border border-white/10 hover:border-[#E0BFB8]/50 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#E0BFB8]/20 flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="text-[#E0BFB8]" size={36} />
              </div>
              <h4 className="font-serif text-2xl mb-4 text-center">{feature.title}</h4>
              <p className="text-lg text-gray-300 text-center leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, ease: [0.21, 0.69, 0.29, 0.98], duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gradient-to-b from-white/5 to-white/3 rounded-3xl p-11 sm:p-13 border border-white/10 shadow-2xl"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare size={35} className="text-[#E0BFB8]" />
              <Sparkles size={27} className="text-[#E0BFB8]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl mb-3">Studio Booking</h2>
            <p className="text-gray-300 text-lg">Let&apos;s create something beautiful together</p>
          </div>
          
          <form onSubmit={handleStudioSubmit} className="space-y-7">
            {[
              { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
              { id: 'dressCategory', label: 'What are you looking for?', type: 'select', options: ['Select an option', 'Bridal Gown', 'Bespoke Outfit', 'Prom/Reception'] },
              { id: 'eventDate', label: 'Event Date', type: 'date' },
              { id: 'budgetTier', label: 'Budget Range', type: 'select', options: ['Select a range', '₦500k - ₦1M', '₦1M - ₦3M', '₦3M+'] },
            ].map((field, index) => (
              <div key={index}>
                <label htmlFor={field.id} className="block text-base mb-3 text-gray-300 font-semibold">{field.label}</label>
                {field.type === 'select' ? (
                  <select
                    id={field.id}
                    name={field.id}
                    required
                    aria-label={field.label}
                    className="w-full px-6 py-5 rounded-2xl bg-white/10 border border-white/20 focus:border-[#E0BFB8] focus:outline-none transition-all duration-300 text-lg"
                  >
                    {field.options?.map((option, i) => (
                      <option key={i} value={option === field.options[0] ? '' : option} className="bg-[#1A1A1A]">{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    required
                    type={field.type}
                    placeholder={field.placeholder}
                    aria-label={field.label}
                    className="w-full px-6 py-5 rounded-2xl bg-white/10 border border-white/20 focus:border-[#E0BFB8] focus:outline-none transition-all duration-300 text-lg"
                  />
                )}
              </div>
            ))}
            
            <div>
              <label htmlFor="designNotes" className="block text-base mb-3 text-gray-300 font-semibold">Tell us about your vision</label>
              <textarea
                id="designNotes"
                name="designNotes"
                required
                rows={6}
                placeholder="Share your inspiration, style preferences, and any special details you have in mind..."
                aria-label="Tell us about your design vision"
                className="w-full px-6 py-5 rounded-2xl bg-white/10 border border-white/20 focus:border-[#E0BFB8] focus:outline-none transition-all duration-300 resize-vertical text-lg"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(224,191,184,0.5)' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              aria-label="Submit booking request"
              className="w-full bg-[#E0BFB8] text-[#1A1A1A] py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all duration-300"
            >
              Send to Studio Manager
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
