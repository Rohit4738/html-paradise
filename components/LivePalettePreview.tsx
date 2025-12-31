import React from 'react';
import { PaletteDefinition } from '../types';
import { getLuminance } from '../utils';

interface LivePalettePreviewProps {
  colors: Array<{ role: string; hex: string; label: string }>;
  title?: string;
}

// Helper to decide text color (white/black) based on brightness
function getLuminanceForText(hex: string) {
    // Simple fallback if hex is invalid
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) return "#ffffff";
    return getLuminance(hex) > 0.6 ? "#000000" : "#ffffff";
}

const LivePalettePreview: React.FC<LivePalettePreviewProps> = ({ colors, title }) => {
  // Helper to find color by role
  const getRoleColor = (role: string, fallback: string) => {
    return colors.find(c => c.role === role)?.hex || fallback;
  };

  const bgMain = getRoleColor('bg-main', '#000000');
  const bgCard = getRoleColor('bg-card', '#222222');
  const textMain = getRoleColor('text-main', '#ffffff');
  const textMuted = getRoleColor('text-muted', '#888888');
  const accentMain = getRoleColor('accent-main', '#0000ff');
  const borderColor = getRoleColor('border', 'transparent');

  return (
    <div 
      className="rounded-lg overflow-hidden shadow-2xl border transition-colors duration-300 flex flex-col w-full h-full min-h-[300px]"
      style={{ backgroundColor: bgMain, borderColor: borderColor }}
    >
      {/* Mock Header */}
      <div className="h-12 border-b flex items-center px-4 justify-between shrink-0" style={{ borderColor: borderColor, backgroundColor: bgCard }}>
          <div className="w-24 h-4 rounded opacity-80" style={{ backgroundColor: textMain }}></div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full opacity-20" style={{ backgroundColor: textMuted }}></div>
            <div className="w-8 h-8 rounded-full opacity-20" style={{ backgroundColor: textMuted }}></div>
          </div>
      </div>

      {/* Mock Content */}
      <div className="p-6 flex-grow flex flex-col justify-center items-center text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300" style={{ color: textMain }}>
            {title || "Live Preview"}
          </h3>
          <p className="mb-6 max-w-sm text-sm sm:text-base transition-colors duration-300" style={{ color: textMuted }}>
            Visualizing how your selected colors work together in a real interface.
          </p>
          
          <div className="flex gap-3 flex-wrap justify-center">
            <div 
              className="px-5 py-2 rounded-lg font-medium shadow-md transition-all duration-300 flex items-center justify-center"
              style={{ backgroundColor: accentMain, color: getLuminanceForText(accentMain) }}
            >
              Primary
            </div>
            <div 
              className="px-5 py-2 rounded-lg font-medium border transition-all duration-300 flex items-center justify-center"
              style={{ borderColor: borderColor, color: textMain }}
            >
              Secondary
            </div>
          </div>
      </div>

      {/* Mock Card Section */}
      <div className="p-6 pt-0 grid grid-cols-2 gap-4 shrink-0">
        <div className="p-4 rounded-lg border shadow-sm transition-colors duration-300" style={{ backgroundColor: bgCard, borderColor: borderColor }}>
            <div className="w-8 h-8 rounded mb-2" style={{ backgroundColor: accentMain }}></div>
            <div className="h-3 w-2/3 rounded mb-1" style={{ backgroundColor: textMain }}></div>
            <div className="h-2 w-full rounded opacity-60" style={{ backgroundColor: textMuted }}></div>
        </div>
        <div className="p-4 rounded-lg border shadow-sm transition-colors duration-300" style={{ backgroundColor: bgCard, borderColor: borderColor }}>
            <div className="w-8 h-8 rounded mb-2" style={{ backgroundColor: accentMain, opacity: 0.5 }}></div>
            <div className="h-3 w-2/3 rounded mb-1" style={{ backgroundColor: textMain }}></div>
            <div className="h-2 w-full rounded opacity-60" style={{ backgroundColor: textMuted }}></div>
        </div>
      </div>
    </div>
  );
};

export default LivePalettePreview;
