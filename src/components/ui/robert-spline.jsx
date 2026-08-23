import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function RobertSpline({ 
  title = "Neeraj Gahlout", 
  className = ""
}) {
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    // Show the greeting after 2.5 seconds (gives time for initial load)
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 2500);
    
    // Hide it after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowGreeting(false);
    }, 8500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl glass-panel h-[400px] lg:h-[500px] ${className}`}>
      <div className="absolute top-0 left-0 w-full flex flex-col items-center justify-start pt-6 text-center z-10 pointer-events-none">
        <span className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white opacity-80">{title}</span>
      </div>
      
      {/* Interactive Chat Bubble */}
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute top-24 right-8 z-20 max-w-[200px] pointer-events-none"
          >
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-2xl rounded-tr-none shadow-xl border border-black/5 dark:border-white/10 backdrop-blur-md text-sm font-medium leading-relaxed">
              Welcome to my digital workspace. Feel free to drag and interact with me!
              {/* Little triangle pointing to the robot */}
              <div className="absolute top-0 -right-2 w-0 h-0 border-t-[10px] border-t-white dark:border-t-gray-800 border-r-[10px] border-r-transparent"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-full relative z-0 mt-12 scale-[1.2]">
        <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
      </div>
    </div>
  );
}
