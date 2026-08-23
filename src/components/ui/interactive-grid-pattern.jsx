import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  ...props
}) {
  const [columns, rows] = squares;
  const [hoveredSquare, setHoveredSquare] = useState(null);

  return (
    <svg
      width="100%"
      height="100%"
      className={cn(
        "absolute inset-0 h-full w-full stroke-white/5",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id="interactive-grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#interactive-grid-pattern)" />
      
      <svg x="0" y="0" className="overflow-visible">
        {Array.from({ length: rows }).map((_, rowIndex) =>
          Array.from({ length: columns }).map((_, colIndex) => {
            const index = rowIndex * columns + colIndex;
            const isHovered = hoveredSquare === index;
            return (
              <motion.rect
                key={`${rowIndex}-${colIndex}`}
                width={width - 1}
                height={height - 1}
                x={colIndex * width + 1}
                y={rowIndex * height + 1}
                fill="currentColor"
                className="text-primary/10 cursor-pointer"
                onMouseEnter={() => setHoveredSquare(index)}
                onMouseLeave={() => setHoveredSquare(null)}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 0.95 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            );
          })
        )}
      </svg>
    </svg>
  );
}
