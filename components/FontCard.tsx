import React, { useState } from 'react';
import { Copy, Check, Star } from 'lucide-react';
import { FontDefinition } from '../types';

interface FontCardProps {
  font: FontDefinition;
  previewText: string;
  onPreviewChange: (text: string) => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const FontCard: React.FC<FontCardProps> = ({ font, previewText, onPreviewChange, isFavorite, onToggleFavorite }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(font.stack);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden hover:shadow-[0_0_15px_rgba(192,38,211,0.25)] hover:border-fuchsia-500/50 transition-all duration-300 flex flex-col h-full group">
      <div className="px-5 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
        <div>
          <h3 className="font-bold text-slate-100 text-lg group-hover:text-fuchsia-400 transition-colors flex items-center gap-2">
            {font.name}
            <button 
              onClick={onToggleFavorite}
              className={`hover:scale-110 transition-transform ${isFavorite ? 'text-yellow-400' : 'text-slate-600 hover:text-yellow-400'}`}
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Star size={16} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1 px-2 py-0.5 bg-slate-800 rounded inline-block border border-slate-700">
            {font.category}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="p-2 text-slate-500 hover:text-white hover:bg-fuchsia-600 rounded-full transition-all"
          title="Copy CSS font-family stack"
        >
          {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
        </button>
      </div>
      <div 
        className="flex-grow p-6 flex items-center min-h-[120px] bg-slate-950 relative"
      >
        <input
          type="text"
          value={previewText}
          onChange={(e) => onPreviewChange(e.target.value)}
          placeholder="The quick brown fox jumps over the lazy dog."
          className="w-full h-full bg-transparent border-none outline-none text-2xl sm:text-3xl text-white placeholder-slate-700 focus:ring-0 drop-shadow-sm font-medium"
          style={{ fontFamily: font.stack }}
          spellCheck={false}
        />
        {/* Visual cue for editability on hover */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
            Type to edit
          </span>
        </div>
      </div>
    </div>
  );
};

export default FontCard;
