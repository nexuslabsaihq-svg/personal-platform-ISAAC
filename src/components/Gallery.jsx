import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';

// Configuración simple para que Isaac pueda agregar fotos a futuro.
// Las imágenes deben colocarse en public/images/gallery/
const GALLERY_IMAGES = [
  { id: 1, src: '/images/gallery/photo1.jpg', alt: 'Isaac Pastén en presentación' },
  { id: 2, src: '/images/gallery/photo2.jpg', alt: 'Trabajo en equipo' },
  { id: 3, src: '/images/gallery/photo3.jpg', alt: 'Evento INACAP' },
  // Agrega más objetos aquí: { id: 4, src: '/images/gallery/tu-foto.jpg', alt: 'Descripción' }
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Si no hay imágenes configuradas o faltan, podemos mostrar un placeholder genérico temporal
  const images = GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES : [
    { id: 'placeholder', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80', alt: 'Placeholder' }
  ];

  return (
    <section id="galeria" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-semibold uppercase mb-3">
              <ImageIcon size={12} />
              // 06. Galería
            </div>
            <h2 className="text-3xl sm:text-4xl font-sora font-bold tracking-tight text-slate-900 mb-3">
              Momentos & Experiencia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Registro visual de participación en proyectos, liderazgo de equipos y vida académica.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="relative max-w-4xl mx-auto">
            {/* Viewport del Carrusel */}
            <div className="overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-inner" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {images.map((img) => (
                  <div 
                    key={img.id} 
                    className="relative flex-[0_0_100%] min-w-0 h-[300px] sm:h-[450px] md:h-[550px] flex items-center justify-center p-4 sm:p-8"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain drop-shadow-md rounded-lg"
                      loading="lazy"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Controles Desktop (Flechas) */}
            <div className="hidden sm:block">
              <button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors z-10"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors z-10"
                aria-label="Siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Puntos de Navegación */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === selectedIndex
                      ? 'w-6 h-2 bg-blue-600'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir a la foto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
