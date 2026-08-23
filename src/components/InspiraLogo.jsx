import { GlareCard } from './ui/glare-card';

export default function InspiraLogo({ label = "Inspira UI", tone = "dark" }) {
  const toneClass = 
    tone === "slate" ? "bg-slate-950" : 
    tone === "warm" ? "bg-stone-950" : 
    "bg-neutral-950";

  return (
    <div className="flex items-center justify-center py-20 relative z-10">
      <GlareCard className={`${toneClass} flex flex-col items-center justify-center`}>
        <img src="https://cdn.inspira-ui.com/logo-dark.svg" alt="Inspira UI Logo" className="w-24 h-24 object-contain" />
        <p className="mt-4 text-xl font-bold text-white tracking-widest">{label}</p>
      </GlareCard>
    </div>
  );
}
