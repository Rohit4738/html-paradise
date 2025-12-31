import React, { useState } from 'react';
import { PaletteDefinition } from '../types';
import { Copy, Check, Info, Star } from 'lucide-react';

interface PaletteCardProps {
  palette: PaletteDefinition;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const PaletteCard: React.FC<PaletteCardProps> = ({ palette, isFavorite, onToggleFavorite }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden hover:shadow-[0_0_15px_rgba(192,38,211,0.25)] hover:border-fuchsia-500/50 transition-all duration-300 flex flex-col h-full relative">
       {/* Favorite Button */}
       <button 
        onClick={onToggleFavorite}
        className={`absolute top-3 right-3 z-10 p-1.5 rounded-full transition-all ${isFavorite ? 'text-yellow-400 bg-slate-800 border border-slate-700' : 'text-slate-600 hover:text-yellow-400'}`}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Star size={16} fill={isFavorite ? "currentColor" : "none"} />
      </button>

      <div className="px-5 py-3 border-b border-slate-800 bg-slate-900/50 pr-12">
        <h3 className="font-bold text-slate-100 truncate">{palette.name}</h3>
        <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 inline-block mt-1">
          {palette.category}
        </span>
      </div>
      
      <div className="flex flex-col flex-grow p-4 gap-3">
        {palette.colors.map((color) => (
          <button
            key={color.hex}
            onClick={() => handleCopy(color.hex)}
            className="flex items-start gap-3 w-full group text-left hover:bg-slate-800/50 p-2 rounded-lg transition-colors"
            title="Click to copy Hex"
          >
            {/* Color Swatch */}
            <div 
              className="w-12 h-12 rounded-lg shadow-sm border border-slate-700 flex-shrink-0 mt-0.5"
              style={{ backgroundColor: color.hex }}
            />
            
            {/* Details */}
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-slate-200 text-sm truncate">{color.name}</p>
                {copiedHex === color.hex && <Check size={14} className="text-green-400" />}
              </div>
              <p className="text-xs text-slate-500 font-mono uppercase mb-1">{color.hex}</p>
              
              {/* Usage Guide */}
              <div className="flex items-start gap-1.5 bg-slate-950/50 rounded px-1.5 py-1 mt-0.5 border border-slate-800/50">
                 <Info size={10} className="text-fuchsia-400 mt-[2px] flex-shrink-0" />
                 <p className="text-[11px] text-slate-400 leading-tight text-left">
                   <span className="font-medium text-slate-300">Use:</span> {color.description}
                 </p>
              </div>
            </div>
            
            <div className="opacity-0 group-hover:opacity-100 transition-opacity self-center">
               <Copy size={14} className="text-slate-500" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaletteCard;
