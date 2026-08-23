import { ImageTrailCursor } from "./ui/image-trail-cursor";

export default function Gallery() {
  const images = [
    "/trail-1.jpg",
    "/trail-2.jpg",
    "/trail-3.jpg",
    "/trail-4.jpg",
    "/trail-5.jpg?v=3"
  ];

  return (
    <section id="gallery" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2 text-center">Gallery</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Moments & Achievements</h2>
        
        <div className="w-full h-[500px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative backdrop-blur-sm">
          <ImageTrailCursor images={images} />
        </div>
      </div>
    </section>
  );
}
