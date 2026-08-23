import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [text, setText] = useState('');
  
  const fullText = "NEERAJ GAHLOUT | FULL-STACK WEB DEVELOPER";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
        setTimeout(() => {
          setFading(true);
          setTimeout(() => setLoading(false), 500); // Wait for fade out
        }, 600); // Shorter wait after finish
      }
    }, 35); // Faster typing speed for longer text

    return () => clearInterval(typing);
  }, []);

  if (!loading) return children;

  return (
    <div className={`fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl relative z-10 shadow-2xl">
            <Terminal size={40} className="text-primary animate-pulse" />
          </div>
        </div>
        <div className="h-6 flex justify-center items-center font-mono text-xs sm:text-sm tracking-widest text-gray-400 max-w-[90vw] text-center">
          <span className="text-primary mr-2 shrink-0">_{'>'}</span>
          <span className="truncate">{text}</span>
          <span className="w-2 h-4 bg-primary ml-1 shrink-0 animate-pulse" />
        </div>
        
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-scroll" style={{ width: text.length === fullText.length ? '100%' : '50%', transition: 'width 1s ease-out' }} />
        </div>
      </div>
    </div>
  );
}
