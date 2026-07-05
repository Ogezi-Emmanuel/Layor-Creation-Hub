'use client';

import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, GraduationCap, Sparkles, Star } from 'lucide-react';
import VideoComponent from '@/components/VideoComponent';

export default function AcademyPage() {
  const handleAcademySubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('fullName') as string,
        phone: formData.get('phoneNumber') as string,
        program: formData.get('selectedProgram') as string,
        startMonth: formData.get('startMonth') as string,
        experience: formData.get('experienceLevel') as string,
      };
      const message = `🎓 *ACADEMY ENROLLMENT APPLICATION* 🎓\n\n👤 Name: ${data.name}\n📞 Phone: ${data.phone}\n📚 Program: ${data.program}\n📅 Start Month: ${data.startMonth}\n📊 Experience: ${data.experience}`;
      const encoded = encodeURIComponent(message);
      window.open(`https://api.whatsapp.com/send?phone=2348089980364&text=${encoded}`, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      alert('There was an error submitting your enrollment. Please try again.');
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
            <GraduationCap className="text-[#E0BFB8]" size={38} />
            <span className="text-[#E0BFB8] uppercase tracking-[0.38em] text-sm font-bold">The Academy</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl mb-8">
            Master the Art of <br />
            <span className="text-[#E0BFB8]">Fashion Design</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join our academy and learn directly from industry experts. Turn your passion into a craft with hands-on training and personalized guidance every step of the way.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="space-y-11 mb-20">
          {[
            { src: '/Academy-1.mp4', title: 'Classroom Learning', desc: 'Engaging sessions with practicing designers and master artisans sharing their craft.', alt: 'Fashion design academy classroom and workshop' },
            { src: '/Academy-2.mp4', title: 'Practical Training', desc: 'Real-world experience in our professional studio, working with actual materials.', alt: 'Hands-on practical training at fashion academy' },
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

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {[
            {
              title: "Beginner's Mastery",
              description: "Begin your fashion journey with our comprehensive foundation program. Build strong fundamentals in design, pattern making, and sewing from the ground up.",
              features: [
                'Introduction to fashion design principles',
                'Pattern drafting and cutting techniques',
                'Basic sewing and garment construction',
                'Fabric selection and material knowledge',
                'Creative sketching and illustration',
                'Introduction to color theory'
              ]
            },
            {
              title: 'Advanced Corsetry & Bridal',
              description: "Elevate your skills with our intensive advanced program focused on haute couture techniques and specialized bridal craftsmanship. For those ready to create show-stopping pieces.",
              features: [
                'Advanced draping and moulage techniques',
                'Corsetry and structured garment construction',
                'Bridal specialization and lace application',
                'Haute couture finishing techniques',
                'Business and brand development',
                'Portfolio creation'
              ]
            }
          ].map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.17, ease: [0.21, 0.69, 0.29, 0.98], duration: 0.7 }}
              viewport={{ once: true, margin: '-120px' }}
              whileHover={{ y: -6 }}
              className="bg-gradient-to-b from-white/5 to-white/3 rounded-3xl p-10 border border-white/10 hover:border-[#E0BFB8]/50 transition-all duration-500"
            >
              <h3 className="font-serif text-3xl mb-6 text-[#E0BFB8]">{program.title}</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">{program.description}</p>
              <ul className="space-y-4">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Star className="text-[#E0BFB8] flex-shrink-0 mt-1" size={20} />
                    <span className="text-lg text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enrollment Form */}
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
            <h2 className="font-serif text-3xl sm:text-4xl mb-3">Enroll Today</h2>
            <p className="text-gray-300 text-lg">Take the first step toward your fashion career</p>
          </div>
          
          <form onSubmit={handleAcademySubmit} className="space-y-7">
            {[
              { id: 'fullName-acad', name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
              { id: 'phoneNumber', name: 'phoneNumber', label: 'Phone Number', type: 'tel', placeholder: 'Your phone number' },
              { id: 'selectedProgram', name: 'selectedProgram', label: 'Which program interests you?', type: 'select', options: ['Select a program', "Beginner's Mastery", 'Advanced Corsetry & Bridal', 'Private Mentorship'] },
              { id: 'startMonth', name: 'startMonth', label: 'Preferred Start Month', type: 'month' },
              { id: 'experienceLevel', name: 'experienceLevel', label: 'Your Experience Level', type: 'select', options: ['Select experience level', 'None - Complete Beginner', 'Basic Knowledge', 'Intermediate', 'Advanced'] },
            ].map((field, index) => (
              <div key={index}>
                <label htmlFor={field.id} className="block text-base mb-3 text-gray-300 font-semibold">{field.label}</label>
                {field.type === 'select' ? (
                  <select
                    id={field.id}
                    name={field.name}
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
                    name={field.name}
                    required
                    type={field.type}
                    placeholder={field.placeholder}
                    aria-label={field.label}
                    className="w-full px-6 py-5 rounded-2xl bg-white/10 border border-white/20 focus:border-[#E0BFB8] focus:outline-none transition-all duration-300 text-lg"
                  />
                )}
              </div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(224,191,184,0.5)' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              aria-label="Submit enrollment application"
              className="w-full bg-[#E0BFB8] text-[#1A1A1A] py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all duration-300"
            >
              Send Enrollment Application
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
