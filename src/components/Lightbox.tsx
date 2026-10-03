import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/schoolData';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (item) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Overlay Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Bar with Title and Close Button */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-full border border-slate-700/60 pointer-events-auto text-xs sm:text-sm font-medium truncate max-w-[70%]">
          <span className="capitalize text-amber-400 font-semibold mr-2">[{item.category}]</span>
          {item.title}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white border border-slate-700/60 pointer-events-auto transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="Close image modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative z-10 max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center pointer-events-auto">
        <img
          src={item.imageUrl}
          alt={item.alt}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80';
          }}
          className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl border border-slate-800"
        />

        {/* Caption */}
        <div className="mt-4 text-center bg-slate-900/70 backdrop-blur-sm border border-slate-800 text-slate-200 px-6 py-2.5 rounded-full text-sm max-w-xl">
          {item.caption || item.title}
        </div>
      </div>

      {/* Navigation Controls */}
      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white border border-slate-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white border border-slate-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
