import { useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export function ImageTrailCursor({ images }) {
  const containerRef = useRef(null);
  const [trails, setTrails] = useState([]);
  const countRef = useRef(0);
  const lastTimeRef = useRef(0);

  const handleMouseMove = (e) => {
    const now = Date.now();
    // throttle slightly to avoid too many images
    if (now - lastTimeRef.current < 100) return; // Increased from 50 to 100 for a slower spawn rate
    lastTimeRef.current = now;

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = countRef.current++;
    const imageIndex = id % images.length;

    const newTrail = {
      id,
      x,
      y,
      src: images[imageIndex],
    };

    setTrails((prev) => [...prev, newTrail]);

    // Remove the trail after animation duration (e.g. 2500ms)
    setTimeout(() => {
      setTrails((prev) => prev.filter((t) => t.id !== id));
    }, 2500); // Increased from 1000 to 2500 to keep images on screen longer
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full overflow-hidden cursor-crosshair"
    >
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.img
            key={trail.id}
            src={trail.src}
            initial={{ opacity: 0.8, scale: 1, x: trail.x - 100, y: trail.y - 150 }}
            animate={{ opacity: 0, scale: 0.5, y: trail.y - 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute w-48 h-64 object-cover rounded-xl shadow-2xl pointer-events-none border border-white/20"
            style={{ zIndex: trail.id }}
          />
        ))}
      </AnimatePresence>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-bold text-white/50 tracking-widest uppercase mix-blend-overlay">
          Interactive Gallery
        </h2>
      </div>
    </div>
  );
}
