import { useRef, useState } from "react";
import { cn } from "../../lib/utils";

export function GlareCard({ children, className }) {
  const isPointerInside = useRef(false);
  const refElement = useRef(null);
  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const [style, setStyle] = useState({});

  const onPointerMove = (event) => {
    const rotateFactor = 0.4;
    const rect = refElement.current?.getBoundingClientRect();
    if (!rect) return;

    const position = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    const percentage = {
      x: (100 / rect.width) * position.x,
      y: (100 / rect.height) * position.y,
    };
    const delta = {
      x: percentage.x - 50,
      y: percentage.y - 50,
    };

    const { background, rotate, glare } = state.current;
    background.x = 50 + percentage.x / 4 - 12.5;
    background.y = 50 + percentage.y / 3 - 16.67;
    rotate.x = -(delta.x / 3.5) * rotateFactor;
    rotate.y = (delta.y / 2) * rotateFactor;
    glare.x = percentage.x;
    glare.y = percentage.y;

    updateStyles();
  };

  const onPointerEnter = () => {
    isPointerInside.current = true;
    if (refElement.current) {
      setTimeout(() => {
        if (isPointerInside.current) {
          refElement.current?.style.setProperty("--duration", "0s");
        }
      }, 300);
    }
  };

  const onPointerLeave = () => {
    isPointerInside.current = false;
    if (refElement.current) {
      refElement.current.style.removeProperty("--duration");
      refElement.current?.style.setProperty("--r-x", `0deg`);
      refElement.current?.style.setProperty("--r-y", `0deg`);
    }
  };

  const updateStyles = () => {
    if (!refElement.current) return;
    const { background, rotate, glare } = state.current;
    refElement.current.style.setProperty("--m-x", `${glare.x}%`);
    refElement.current.style.setProperty("--m-y", `${glare.y}%`);
    refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
    refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
    refElement.current.style.setProperty("--bg-x", `${background.x}%`);
    refElement.current.style.setProperty("--bg-y", `${background.y}%`);
  };

  return (
    <div
      style={{
        "--m-x": "50%",
        "--m-y": "50%",
        "--r-x": "0deg",
        "--r-y": "0deg",
        "--bg-x": "50%",
        "--bg-y": "50%",
        "--duration": "300ms",
        "--fov": "1500px",
        "--diagonal": "120%",
        "--color-white": "#fff",
        "--color-transparent": "rgba(255,255,255,0)",
        "--color-silver": "#e5e7eb",
        "--color-gold": "#fbbf24",
      }}
      className="relative isolate [contain:layout_style] [perspective:var(--fov)] transition-transform duration-[var(--duration)] ease-out will-change-transform w-[320px] aspect-[17/21]"
    >
      <div
        ref={refElement}
        onPointerMove={onPointerMove}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className="w-full h-full grid [transform-style:preserve-3d] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] transition-transform duration-[var(--duration)] ease-out origin-center will-change-transform rounded-2xl overflow-hidden shadow-2xl relative bg-card border border-white/10 group"
      >
        <div className="absolute inset-0 z-10 w-full h-full grid [grid-area:1/1] overflow-hidden mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(farthest-corner_at_var(--m-x)_var(--m-y),rgba(255,255,255,0.4)_10%,rgba(255,255,255,0.1)_20%,rgba(255,255,255,0)_120%)] z-20" />
        </div>
        
        <div className={cn("flex flex-col items-center justify-center p-8 h-full w-full relative z-30", className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
