import React, { useState } from 'react';
import { Copy, Check, Star } from 'lucide-react';
import { ColorDefinition } from '../types';

interface ColorCardProps {
  color: ColorDefinition;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
}

const ColorCard: React.FC<ColorCardProps> = ({ color, isFavorite, onToggleFavorite }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="group relative flex flex-col items-center text-left bg-slate-900 rounded-xl shadow-md border border-slate-800 overflow-hidden hover:shadow-[0_0_15px_rgba(192,38,211,0.3)] hover:border-fuchsia-500/50 hover:-translate-y-0.5 transition-all duration-300"
      title={`Click color to copy "${color.name}"`}
    >
      {/* Favorite Button Overlay */}
      <button 
        onClick={onToggleFavorite}
        className={`absolute top-2 right-2 z-10 p-1.5 rounded-full bg-black/20 backdrop-blur-sm transition-all hover:bg-black/40 ${isFavorite ? 'text-yellow-400' : 'text-white/50 hover:text-yellow-400'}`}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Star size={14} fill={isFavorite ? "currentColor" : "none"} />
      </button>

      <button onClick={handleCopy} className="w-full flex flex-col focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-inset">
        <div 
          className="w-full h-24 sm:h-28 w-full border-b border-slate-800 relative"
          style={{ backgroundColor: color.name }}
        >
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-slate-900/90 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm border border-slate-700 transform scale-95 group-hover:scale-100 transition-transform">
                {copied ? "Copied!" : "Copy Name"}
              </span>
          </div>
        </div>
        <div className="w-full p-3 flex flex-col justify-center">
          <div className="flex items-center justify-between w-full">
            <span className="font-semibold text-slate-200 text-sm truncate group-hover:text-fuchsia-400 transition-colors">{color.name}</span>
            {copied && <Check size={14} className="text-green-400 flex-shrink-0 ml-1" />}
          </div>
          <span className="text-xs text-slate-500 font-mono mt-0.5">{color.hex}</span>
        </div>
      </button>
    </div>
  );
};

export default ColorCard;
