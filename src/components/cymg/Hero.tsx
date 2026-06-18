import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://ik.imagekit.io/5zp8ovb7c/CYMG/CYMG.jpeg?updatedAt=1765784359910',
  'https://ik.imagekit.io/5zp8ovb7c/CYMG/LandingPage2.jpg?updatedAt=1757854908407',
  'https://ik.imagekit.io/5zp8ovb7c/CYMG/LandingPage3.jpg?updatedAt=1757854906156',
];

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={heroImages[currentImageIndex]}
            alt="CYMG Movement"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-sm font-semibold tracking-wider uppercase mb-6 border border-white/20">
            Children and Youth Major Group
          </span>
          <h1 className="text-display font-bold mb-6 leading-[1.1]">
            Empowering Youth to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
              Shape Our Global Environment
            </span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            The formal channel for children and youth participation in the UN Environment Programme.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/join"
              className="group btn-pill bg-[var(--assembly-blue)] text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-[var(--ink)] transition-all duration-300 w-full sm:w-auto"
            >
              Join the Movement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="btn-pill bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 text-lg font-bold hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Our Mission
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Progress Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImageIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === i ? 'h-8 bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
