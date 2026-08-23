import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LinkPreview({ children, url, imageSrc, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Relative to the viewport, but we want the tooltip to follow the mouse
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noreferrer" 
        className={className}
      >
        {children}
      </a>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 pointer-events-none rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-background"
            style={{
              left: mousePosition.x - 100, // offset to center slightly
              top: mousePosition.y - 150,  // offset to show above cursor
              width: 200,
              height: 120
            }}
          >
            <img 
              src={imageSrc} 
              alt="Preview" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
