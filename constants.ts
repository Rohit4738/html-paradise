import { ColorDefinition, FontDefinition, PaletteDefinition } from './types';

// Comprehensive list of web-safe and commonly supported system fonts
export const HTML_FONTS: FontDefinition[] = [
  { name: 'Andale Mono', category: 'monospace', stack: '"Andale Mono", monospace' },
  { name: 'Arial', category: 'sans-serif', stack: 'Arial, Helvetica, sans-serif' },
  { name: 'Arial Black', category: 'sans-serif', stack: '"Arial Black", Gadget, sans-serif' },
  { name: 'Arial Narrow', category: 'sans-serif', stack: '"Arial Narrow", sans-serif' },
  { name: 'Arial Rounded MT Bold', category: 'sans-serif', stack: '"Arial Rounded MT Bold", sans-serif' },
  { name: 'Avant Garde', category: 'sans-serif', stack: '"Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif' },
  { name: 'Baskerville', category: 'serif', stack: 'Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif' },
  { name: 'Big Caslon', category: 'serif', stack: '"Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif' },
  { name: 'Bodoni MT', category: 'serif', stack: '"Bodoni MT", Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif' },
  { name: 'Book Antiqua', category: 'serif', stack: '"Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif' },
  { name: 'Bookman', category: 'serif', stack: '"Bookman Old Style", serif' },
  { name: 'Brush Script MT', category: 'cursive', stack: '"Brush Script MT", cursive' },
  { name: 'Calibri', category: 'sans-serif', stack: 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif' },
  { name: 'Calisto MT', category: 'serif', stack: '"Calisto MT", "Bookman Old Style", Bookman, "Goudy Old Style", Garamond, "Hoefler Text", "Bitstream Charter", Georgia, serif' },
  { name: 'Cambria', category: 'serif', stack: 'Cambria, Georgia, serif' },
  { name: 'Candara', category: 'sans-serif', stack: 'Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif' },
  { name: 'Century Gothic', category: 'sans-serif', stack: '"Century Gothic", CenturyGothic, AppleGothic, sans-serif' },
  { name: 'Comic Sans MS', category: 'cursive', stack: '"Comic Sans MS", cursive, sans-serif' },
  { name: 'Consolas', category: 'monospace', stack: 'Consolas, monospace' },
  { name: 'Copperplate', category: 'fantasy', stack: 'Copperplate, Papyrus, fantasy' },
  { name: 'Courier New', category: 'monospace', stack: '"Courier New", Courier, monospace' },
  { name: 'Didot', category: 'serif', stack: 'Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif' },
  { name: 'Franklin Gothic Medium', category: 'sans-serif', stack: '"Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", Arial, sans-serif' },
  { name: 'Garamond', category: 'serif', stack: 'Garamond, serif' },
  { name: 'Geneva', category: 'sans-serif', stack: 'Geneva, Tahoma, Verdana, sans-serif' },
  { name: 'Georgia', category: 'serif', stack: 'Georgia, serif' },
  { name: 'Gill Sans', category: 'sans-serif', stack: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' },
  { name: 'Goudy Old Style', category: 'serif', stack: '"Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif' },
  { name: 'Helvetica', category: 'sans-serif', stack: 'Helvetica, Arial, sans-serif' },
  { name: 'Hoefler Text', category: 'serif', stack: '"Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif' },
  { name: 'Impact', category: 'sans-serif', stack: 'Impact, Charcoal, sans-serif' },
  { name: 'Lucida Bright', category: 'serif', stack: '"Lucida Bright", Georgia, serif' },
  { name: 'Lucida Console', category: 'monospace', stack: '"Lucida Console", Monaco, monospace' },
  { name: 'Lucida Grande', category: 'sans-serif', stack: '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif' },
  { name: 'Lucida Sans Typewriter', category: 'monospace', stack: '"Lucida Sans Typewriter", "Lucida Console", Monaco, "Bitstream Vera Sans Mono", monospace' },
  { name: 'Monaco', category: 'monospace', stack: 'Monaco, monospace' },
  { name: 'Optima', category: 'sans-serif', stack: 'Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif' },
  { name: 'Palatino', category: 'serif', stack: '"Palatino Linotype", "Book Antiqua", Palatino, serif' },
  { name: 'Papyrus', category: 'fantasy', stack: 'Papyrus, fantasy' },
  { name: 'Perpetua', category: 'serif', stack: 'Perpetua, Baskerville, "Big Caslon", "Palatino Linotype", Palatino, "URW Palladio L", "Nimbus Roman No9 L", serif' },
  { name: 'Rockwell', category: 'serif', stack: 'Rockwell, "Courier New", Courier, Georgia, Times, "Times New Roman", serif' },
  { name: 'Segoe UI', category: 'sans-serif', stack: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif' },
  { name: 'Tahoma', category: 'sans-serif', stack: 'Tahoma, Geneva, sans-serif' },
  { name: 'Times New Roman', category: 'serif', stack: '"Times New Roman", Times, serif' },
  { name: 'Trebuchet MS', category: 'sans-serif', stack: '"Trebuchet MS", Helvetica, sans-serif' },
  { name: 'Verdana', category: 'sans-serif', stack: 'Verdana, Geneva, sans-serif' },
];

// Full list of 148 Standard CSS Color Names
export const HTML_COLORS: ColorDefinition[] = [
  { name: 'AliceBlue', hex: '#F0F8FF' },
  { name: 'AntiqueWhite', hex: '#FAEBD7' },
  { name: 'Aqua', hex: '#00FFFF' },
  { name: 'Aquamarine', hex: '#7FFFD4' },
  { name: 'Azure', hex: '#F0FFFF' },
  { name: 'Beige', hex: '#F5F5DC' },
  { name: 'Bisque', hex: '#FFE4C4' },
  { name: 'Black', hex: '#000000' },
  { name: 'BlanchedAlmond', hex: '#FFEBCD' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'BlueViolet', hex: '#8A2BE2' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'BurlyWood', hex: '#DEB887' },
  { name: 'CadetBlue', hex: '#5F9EA0' },
  { name: 'Chartreuse', hex: '#7FFF00' },
  { name: 'Chocolate', hex: '#D2691E' },
  { name: 'Coral', hex: '#FF7F50' },
  { name: 'CornflowerBlue', hex: '#6495ED' },
  { name: 'Cornsilk', hex: '#FFF8DC' },
  { name: 'Crimson', hex: '#DC143C' },
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'DarkBlue', hex: '#00008B' },
  { name: 'DarkCyan', hex: '#008B8B' },
  { name: 'DarkGoldenRod', hex: '#B8860B' },
  { name: 'DarkGray', hex: '#A9A9A9' },
  { name: 'DarkGreen', hex: '#006400' },
  { name: 'DarkGrey', hex: '#A9A9A9' },
  { name: 'DarkKhaki', hex: '#BDB76B' },
  { name: 'DarkMagenta', hex: '#8B008B' },
  { name: 'DarkOliveGreen', hex: '#556B2F' },
  { name: 'DarkOrange', hex: '#FF8C00' },
  { name: 'DarkOrchid', hex: '#9932CC' },
  { name: 'DarkRed', hex: '#8B0000' },
  { name: 'DarkSalmon', hex: '#E9967A' },
  { name: 'DarkSeaGreen', hex: '#8FBC8F' },
  { name: 'DarkSlateBlue', hex: '#483D8B' },
  { name: 'DarkSlateGray', hex: '#2F4F4F' },
  { name: 'DarkSlateGrey', hex: '#2F4F4F' },
  { name: 'DarkTurquoise', hex: '#00CED1' },
  { name: 'DarkViolet', hex: '#9400D3' },
  { name: 'DeepPink', hex: '#FF1493' },
  { name: 'DeepSkyBlue', hex: '#00BFFF' },
  { name: 'DimGray', hex: '#696969' },
  { name: 'DimGrey', hex: '#696969' },
  { name: 'DodgerBlue', hex: '#1E90FF' },
  { name: 'FireBrick', hex: '#B22222' },
  { name: 'FloralWhite', hex: '#FFFAF0' },
  { name: 'ForestGreen', hex: '#228B22' },
  { name: 'Fuchsia', hex: '#FF00FF' },
  { name: 'Gainsboro', hex: '#DCDCDC' },
  { name: 'GhostWhite', hex: '#F8F8FF' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'GoldenRod', hex: '#DAA520' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Green', hex: '#008000' },
  { name: 'GreenYellow', hex: '#ADFF2F' },
  { name: 'Grey', hex: '#808080' },
  { name: 'HoneyDew', hex: '#F0FFF0' },
  { name: 'HotPink', hex: '#FF69B4' },
  { name: 'IndianRed', hex: '#CD5C5C' },
  { name: 'Indigo', hex: '#4B0082' },
  { name: 'Ivory', hex: '#FFFFF0' },
  { name: 'Khaki', hex: '#F0E68C' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'LavenderBlush', hex: '#FFF0F5' },
  { name: 'LawnGreen', hex: '#7CFC00' },
  { name: 'LemonChiffon', hex: '#FFFACD' },
  { name: 'LightBlue', hex: '#ADD8E6' },
  { name: 'LightCoral', hex: '#F08080' },
  { name: 'LightCyan', hex: '#E0FFFF' },
  { name: 'LightGoldenRodYellow', hex: '#FAFAD2' },
  { name: 'LightGray', hex: '#D3D3D3' },
  { name: 'LightGreen', hex: '#90EE90' },
  { name: 'LightGrey', hex: '#D3D3D3' },
  { name: 'LightPink', hex: '#FFB6C1' },
  { name: 'LightSalmon', hex: '#FFA07A' },
  { name: 'LightSeaGreen', hex: '#20B2AA' },
  { name: 'LightSkyBlue', hex: '#87CEFA' },
  { name: 'LightSlateGray', hex: '#778899' },
  { name: 'LightSlateGrey', hex: '#778899' },
  { name: 'LightSteelBlue', hex: '#B0C4DE' },
  { name: 'LightYellow', hex: '#FFFFE0' },
  { name: 'Lime', hex: '#00FF00' },
  { name: 'LimeGreen', hex: '#32CD32' },
  { name: 'Linen', hex: '#FAF0E6' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'MediumAquaMarine', hex: '#66CDAA' },
  { name: 'MediumBlue', hex: '#0000CD' },
  { name: 'MediumOrchid', hex: '#BA55D3' },
  { name: 'MediumPurple', hex: '#9370DB' },
  { name: 'MediumSeaGreen', hex: '#3CB371' },
  { name: 'MediumSlateBlue', hex: '#7B68EE' },
  { name: 'MediumSpringGreen', hex: '#00FA9A' },
  { name: 'MediumTurquoise', hex: '#48D1CC' },
  { name: 'MediumVioletRed', hex: '#C71585' },
  { name: 'MidnightBlue', hex: '#191970' },
  { name: 'MintCream', hex: '#F5FFFA' },
  { name: 'MistyRose', hex: '#FFE4E1' },
  { name: 'Moccasin', hex: '#FFE4B5' },
  { name: 'NavajoWhite', hex: '#FFDEAD' },
  { name: 'Navy', hex: '#000080' },
  { name: 'OldLace', hex: '#FDF5E6' },
  { name: 'Olive', hex: '#808000' },
  { name: 'OliveDrab', hex: '#6B8E23' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'OrangeRed', hex: '#FF4500' },
  { name: 'Orchid', hex: '#DA70D6' },
  { name: 'PaleGoldenRod', hex: '#EEE8AA' },
  { name: 'PaleGreen', hex: '#98FB98' },
  { name: 'PaleTurquoise', hex: '#AFEEEE' },
  { name: 'PaleVioletRed', hex: '#DB7093' },
  { name: 'PapayaWhip', hex: '#FFEFD5' },
  { name: 'PeachPuff', hex: '#FFDAB9' },
  { name: 'Peru', hex: '#CD853F' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Plum', hex: '#DDA0DD' },
  { name: 'PowderBlue', hex: '#B0E0E6' },
  { name: 'Purple', hex: '#800080' },
  { name: 'RebeccaPurple', hex: '#663399' },
  { name: 'Red', hex: '#FF0000' },
  { name: 'RosyBrown', hex: '#BC8F8F' },
  { name: 'RoyalBlue', hex: '#4169E1' },
  { name: 'SaddleBrown', hex: '#8B4513' },
  { name: 'Salmon', hex: '#FA8072' },
  { name: 'SandyBrown', hex: '#F4A460' },
  { name: 'SeaGreen', hex: '#2E8B57' },
  { name: 'SeaShell', hex: '#FFF5EE' },
  { name: 'Sienna', hex: '#A0522D' },
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'SkyBlue', hex: '#87CEEB' },
  { name: 'SlateBlue', hex: '#6A5ACD' },
  { name: 'SlateGray', hex: '#708090' },
  { name: 'SlateGrey', hex: '#708090' },
  { name: 'Snow', hex: '#FFFAFA' },
  { name: 'SpringGreen', hex: '#00FF7F' },
  { name: 'SteelBlue', hex: '#4682B4' },
  { name: 'Tan', hex: '#D2B48C' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Thistle', hex: '#D8BFD8' },
  { name: 'Tomato', hex: '#FF6347' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Violet', hex: '#EE82EE' },
  { name: 'Wheat', hex: '#F5DEB3' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'WhiteSmoke', hex: '#F5F5F5' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'YellowGreen', hex: '#9ACD32' },
];

export const COLOR_PALETTES: PaletteDefinition[] = [
  {
    id: 'corp-blue',
    name: 'Corporate Trust',
    category: 'Professional',
    colors: [
      { name: 'Primary', hex: '#0f172a', description: 'Main navigation, Dark backgrounds' },
      { name: 'Secondary', hex: '#334155', description: 'Cards, Modals' },
      { name: 'Accent', hex: '#3b82f6', description: 'Buttons, Links' },
      { name: 'Text', hex: '#f8fafc', description: 'Body text' },
    ]
  },
  {
    id: 'sunset-vibes',
    name: 'Sunset Blvd',
    category: 'Aesthetic',
    colors: [
      { name: 'Sky', hex: '#2e1065', description: 'Deep background' },
      { name: 'Horizon', hex: '#db2777', description: 'Gradients' },
      { name: 'Sun', hex: '#f59e0b', description: 'Highlights' },
      { name: 'Cloud', hex: '#fae8ff', description: 'Text' },
    ]
  },
  {
    id: 'forest-calm',
    name: 'Deep Forest',
    category: 'Nature',
    colors: [
      { name: 'Canopy', hex: '#052e16', description: 'Main Background' },
      { name: 'Leaf', hex: '#15803d', description: 'Secondary elements' },
      { name: 'Earth', hex: '#a16207', description: 'Borders, Accents' },
      { name: 'Mist', hex: '#dcfce7', description: 'Text' },
    ]
  },
  {
    id: 'cyber-neon',
    name: 'Cyberpunk 2077',
    category: 'Neon',
    colors: [
      { name: 'Void', hex: '#000000', description: 'Background' },
      { name: 'Neon Yellow', hex: '#fcee0a', description: 'Primary Accent' },
      { name: 'Holo Blue', hex: '#00d4ff', description: 'Secondary Accent' },
      { name: 'Error Red', hex: '#ff003c', description: 'Warnings' },
    ]
  },
  {
    id: 'soft-pastel',
    name: 'Baby Shower',
    category: 'Pastel',
    colors: [
      { name: 'Bg', hex: '#fff1f2', description: 'Page Background' },
      { name: 'Pink', hex: '#fda4af', description: 'Buttons' },
      { name: 'Blue', hex: '#93c5fd', description: 'Secondary' },
      { name: 'Text', hex: '#475569', description: 'Readable Text' },
    ]
  },
  {
    id: 'monokai-ish',
    name: 'Code Editor',
    category: 'Dark Mode',
    colors: [
      { name: 'Editor', hex: '#272822', description: 'Background' },
      { name: 'Keyword', hex: '#f92672', description: 'Keywords' },
      { name: 'String', hex: '#e6db74', description: 'Strings' },
      { name: 'Function', hex: '#66d9ef', description: 'Functions' },
    ]
  },
  {
    id: 'coffee-shop',
    name: 'Espresso Bar',
    category: 'Aesthetic',
    colors: [
      { name: 'Bean', hex: '#451a03', description: 'Headers' },
      { name: 'Roast', hex: '#78350f', description: 'Footer' },
      { name: 'Crema', hex: '#d6d3d1', description: 'Background' },
      { name: 'Latte', hex: '#fafaf9', description: 'Cards' },
    ]
  },
  {
    id: 'fintech-clean',
    name: 'Modern Bank',
    category: 'Professional',
    colors: [
      { name: 'Navy', hex: '#172554', description: 'Trust/Security' },
      { name: 'White', hex: '#ffffff', description: 'Clean space' },
      { name: 'Success', hex: '#16a34a', description: 'Growth charts' },
      { name: 'Grey', hex: '#64748b', description: 'Subtext' },
    ]
  },
  {
    id: 'lavender-dream',
    name: 'Lavender Haze',
    category: 'Pastel',
    colors: [
      { name: 'Deep', hex: '#4c1d95', description: 'Headings' },
      { name: 'Mid', hex: '#8b5cf6', description: 'Buttons' },
      { name: 'Light', hex: '#ddd6fe', description: 'Background elements' },
      { name: 'Pale', hex: '#f5f3ff', description: 'Main Background' },
    ]
  },
  {
    id: 'dracula-theme',
    name: 'Vampire Night',
    category: 'Dark Mode',
    colors: [
      { name: 'Bg', hex: '#282a36', description: 'Background' },
      { name: 'Current', hex: '#44475a', description: 'Current Line' },
      { name: 'Purple', hex: '#bd93f9', description: 'Accent' },
      { name: 'Pink', hex: '#ff79c6', description: 'Secondary' },
    ]
  },
  {
    id: 'ocean-breeze',
    name: 'Oceanic',
    category: 'Nature',
    colors: [
      { name: 'Deep Sea', hex: '#0c4a6e', description: 'Footer/Nav' },
      { name: 'Wave', hex: '#0ea5e9', description: 'Buttons' },
      { name: 'Foam', hex: '#e0f2fe', description: 'Backgrounds' },
      { name: 'Sand', hex: '#fffbeb', description: 'Accents' },
    ]
  },
  {
    id: 'retro-synth',
    name: 'Synthwave',
    category: 'Neon',
    colors: [
      { name: 'Grid', hex: '#240046', description: 'Background' },
      { name: 'Sun', hex: '#ff9e00', description: 'Gradients' },
      { name: 'Laser', hex: '#9d4edd', description: 'Borders' },
      { name: 'Glow', hex: '#e0aaff', description: 'Highlights' },
    ]
  },
  {
    id: 'slate-minimal',
    name: 'Slate Minimalist',
    category: 'Professional',
    colors: [
      { name: 'Dark', hex: '#020617', description: 'Text/Contrast' },
      { name: 'Mid', hex: '#475569', description: 'Secondary Text' },
      { name: 'Light', hex: '#cbd5e1', description: 'Borders' },
      { name: 'Bg', hex: '#f8fafc', description: 'Background' },
    ]
  },
  {
    id: 'cherry-blossom',
    name: 'Sakura',
    category: 'Aesthetic',
    colors: [
      { name: 'Branch', hex: '#292524', description: 'Text' },
      { name: 'Bloom', hex: '#ec4899', description: 'CTA' },
      { name: 'Petal', hex: '#fbcfe8', description: 'Cards' },
      { name: 'Sky', hex: '#fff1f2', description: 'Background' },
    ]
  },
   {
    id: 'mint-fresh',
    name: 'Minty Fresh',
    category: 'Nature',
    colors: [
      { name: 'Leaf', hex: '#14532d', description: 'Strong Text' },
      { name: 'Fresh', hex: '#22c55e', description: 'Success States' },
      { name: 'Ice', hex: '#bbf7d0', description: 'Background Areas' },
      { name: 'White', hex: '#f0fdf4', description: 'Main Background' },
    ]
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    category: 'Nature',
    colors: [
      { name: 'Shadow', hex: '#713f12', description: 'Contrast' },
      { name: 'Gold', hex: '#eab308', description: 'Primary' },
      { name: 'Light', hex: '#fef08a', description: 'Secondary' },
      { name: 'Sky', hex: '#fffbeb', description: 'Background' },
    ]
  },
  {
    id: 'electric-purple',
    name: 'Electric Night',
    category: 'Neon',
    colors: [
      { name: 'Midnight', hex: '#1e1b4b', description: 'Background' },
      { name: 'Bolt', hex: '#818cf8', description: 'Secondary' },
      { name: 'Shock', hex: '#c084fc', description: 'Primary Accent' },
      { name: 'Flash', hex: '#ffffff', description: 'Text' },
    ]
  },
  {
    id: 'vintage-paper',
    name: 'Old Library',
    category: 'Aesthetic',
    colors: [
      { name: 'Ink', hex: '#1c1917', description: 'Text' },
      { name: 'Leather', hex: '#7c2d12', description: 'Headers' },
      { name: 'Paper', hex: '#f5f5f4', description: 'Background' },
      { name: 'Stain', hex: '#d6d3d1', description: 'Borders' },
    ]
  },
  {
    id: 'corporate-grey',
    name: 'Legal Firm',
    category: 'Professional',
    colors: [
      { name: 'Black', hex: '#000000', description: 'Text' },
      { name: 'Charcoal', hex: '#374151', description: 'Footer' },
      { name: 'Silver', hex: '#9ca3af', description: 'Dividers' },
      { name: 'White', hex: '#f9fafb', description: 'Background' },
    ]
  },
  {
    id: 'cotton-candy',
    name: 'Cotton Candy',
    category: 'Pastel',
    colors: [
      { name: 'Blue', hex: '#bfdbfe', description: 'Background Left' },
      { name: 'Pink', hex: '#fbcfe8', description: 'Background Right' },
      { name: 'Text', hex: '#64748b', description: 'Content' },
      { name: 'White', hex: '#ffffff', description: 'Cards' },
    ]
  },
  {
    id: 'tropical-punch',
    name: 'Tropical Punch',
    category: 'Neon',
    colors: [
      { name: 'Papaya', hex: '#ff9a9e', description: 'Main Highlight' },
      { name: 'Lime', hex: '#a1ffce', description: 'Secondary Accent' },
      { name: 'Ocean', hex: '#4facfe', description: 'Background Gradient' },
      { name: 'Sand', hex: '#fdfbfb', description: 'Background Base' },
    ]
  },
  {
    id: 'arctic-chill',
    name: 'Arctic Chill',
    category: 'Professional',
    colors: [
      { name: 'Frost', hex: '#e0f7fa', description: 'Background' },
      { name: 'Ice', hex: '#b2ebf2', description: 'Secondary Background' },
      { name: 'Glacier', hex: '#00bcd4', description: 'Primary Action' },
      { name: 'Deep', hex: '#006064', description: 'Headings & Text' },
    ]
  },
  {
    id: 'desert-sands',
    name: 'Desert Sands',
    category: 'Nature',
    colors: [
      { name: 'Dune', hex: '#d4a373', description: 'Card Backgrounds' },
      { name: 'Cactus', hex: '#ccd5ae', description: 'Secondary Accents' },
      { name: 'Clay', hex: '#faedcd', description: 'Main Background' },
      { name: 'Rock', hex: '#5c4d3c', description: 'Text & Icons' },
    ]
  },
  {
    id: 'royal-velvet',
    name: 'Royal Velvet',
    category: 'Professional',
    colors: [
      { name: 'Gold', hex: '#ffd700', description: 'Accents & Buttons' },
      { name: 'Velvet', hex: '#4b0082', description: 'Primary Background' },
      { name: 'Silk', hex: '#f8f8ff', description: 'Text' },
      { name: 'Shadow', hex: '#1a1a2e', description: 'Footer/Dark Areas' },
    ]
  },
  {
    id: 'autumn-leaves',
    name: 'Autumn Leaves',
    category: 'Aesthetic',
    colors: [
      { name: 'Maple', hex: '#d94e34', description: 'Primary Buttons' },
      { name: 'Pumpkin', hex: '#ed8936', description: 'Highlights' },
      { name: 'Moss', hex: '#2f855a', description: 'Secondary Elements' },
      { name: 'Cream', hex: '#fff5f5', description: 'Background' },
    ]
  },
  {
    id: 'galaxy-quest',
    name: 'Galaxy Quest',
    category: 'Dark Mode',
    colors: [
      { name: 'Space', hex: '#0b0c10', description: 'Main Background' },
      { name: 'Nebula', hex: '#1f2833', description: 'Card Background' },
      { name: 'Star', hex: '#c5c6c7', description: 'Text' },
      { name: 'Cyan', hex: '#66fcf1', description: 'Interactive Elements' },
    ]
  },
  {
    id: 'candy-apple',
    name: 'Candy Apple',
    category: 'Pastel',
    colors: [
      { name: 'Red', hex: '#ff6b6b', description: 'Attention Grabbing' },
      { name: 'Cream', hex: '#f7fff7', description: 'Background' },
      { name: 'Teal', hex: '#4ecdc4', description: 'Secondary Action' },
      { name: 'Dark', hex: '#292f36', description: 'Text Content' },
    ]
  },
  {
    id: 'carbon-fiber',
    name: 'Carbon Fiber',
    category: 'Professional',
    colors: [
      { name: 'Carbon', hex: '#18181b', description: 'Main Background' },
      { name: 'Steel', hex: '#27272a', description: 'Components' },
      { name: 'Chrome', hex: '#a1a1aa', description: 'Borders/Icons' },
      { name: 'White', hex: '#fafafa', description: 'Text' },
    ]
  },
  {
    id: 'lemon-zest',
    name: 'Lemon Zest',
    category: 'Neon',
    colors: [
      { name: 'Lemon', hex: '#faff00', description: 'Highlights' },
      { name: 'Lime', hex: '#00ff00', description: 'Success/Action' },
      { name: 'Black', hex: '#111111', description: 'Background' },
      { name: 'Grey', hex: '#333333', description: 'Secondary BG' },
    ]
  },
  {
    id: 'nordic-frost',
    name: 'Nordic Frost',
    category: 'Calm',
    colors: [
      { name: 'Polar', hex: '#eceff4', description: 'Background' },
      { name: 'Snow', hex: '#e5e9f0', description: 'Card Background' },
      { name: 'Ice', hex: '#88c0d0', description: 'Accents' },
      { name: 'Night', hex: '#2e3440', description: 'Text' },
    ]
  },
  {
    id: 'terra-cotta',
    name: 'Terra Cotta',
    category: 'Nature',
    colors: [
      { name: 'Clay', hex: '#e07a5f', description: 'Primary Brand' },
      { name: 'Sand', hex: '#f4f1de', description: 'Background' },
      { name: 'Sea', hex: '#3d405b', description: 'Headings' },
      { name: 'Sage', hex: '#81b29a', description: 'Secondary' },
    ]
  },
  {
    id: 'bubblegum-pop',
    name: 'Bubblegum Pop',
    category: 'Pastel',
    colors: [
      { name: 'Pink', hex: '#ffc6ff', description: 'Primary' },
      { name: 'Blue', hex: '#bdb2ff', description: 'Secondary' },
      { name: 'Yellow', hex: '#fdffb6', description: 'Highlights' },
      { name: 'White', hex: '#fffffc', description: 'Background' },
    ]
  },
  {
    id: 'warm-ember',
    name: 'Warm Ember',
    category: 'Nature',
    colors: [
      { name: 'Charcoal', hex: '#2d3748', description: 'Dark Text' },
      { name: 'Ember', hex: '#ed8936', description: 'Highlight' },
      { name: 'Ash', hex: '#edf2f7', description: 'Background' },
      { name: 'Fire', hex: '#c05621', description: 'CTA' },
    ]
  },
  {
    id: 'royal-gold',
    name: 'Royal Gold',
    category: 'Professional',
    colors: [
      { name: 'Gold', hex: '#d4af37', description: 'Luxury Accents' },
      { name: 'Royal', hex: '#4169e1', description: 'Trust & Stability' },
      { name: 'Ivory', hex: '#fffff0', description: 'Clean Background' },
      { name: 'Slate', hex: '#2f4f4f', description: 'Deep Contrast' },
    ]
  },
  {
    id: 'mossy-stone',
    name: 'Mossy Stone',
    category: 'Calm',
    colors: [
      { name: 'Stone', hex: '#a8a29e', description: 'Neutrals' },
      { name: 'Moss', hex: '#4d7c0f', description: 'Nature Accents' },
      { name: 'Stream', hex: '#e7e5e4', description: 'Soft Background' },
      { name: 'Bark', hex: '#44403c', description: 'Deep Text' },
    ]
  },
  {
    id: 'retro-diner',
    name: 'Retro Diner',
    category: 'Aesthetic',
    colors: [
      { name: 'Teal', hex: '#008080', description: 'Vintage Walls' },
      { name: 'Red', hex: '#ff0000', description: 'Bar Stools' },
      { name: 'Checker', hex: '#000000', description: 'Flooring Accent' },
      { name: 'Cream', hex: '#fffdd0', description: 'Milkshake' },
    ]
  },
  {
    id: 'neon-city',
    name: 'Neon City',
    category: 'Neon',
    colors: [
      { name: 'Night', hex: '#0f172a', description: 'Dark Alley' },
      { name: 'Pink', hex: '#f472b6', description: 'Neon Sign 1' },
      { name: 'Cyan', hex: '#22d3ee', description: 'Neon Sign 2' },
      { name: 'Purple', hex: '#a855f7', description: 'Reflection' },
    ]
  },
  {
    id: 'tech-startup',
    name: 'Tech Startup',
    category: 'Professional',
    colors: [
      { name: 'Primary', hex: '#2563eb', description: 'Main Action' },
      { name: 'Surface', hex: '#f8fafc', description: 'Background' },
      { name: 'Text', hex: '#1e293b', description: 'Readability' },
      { name: 'Success', hex: '#10b981', description: 'Status Indicators' },
    ]
  },
  {
    id: 'cherry-cola',
    name: 'Cherry Cola',
    category: 'Aesthetic',
    colors: [
      { name: 'Cola', hex: '#3e0e0e', description: 'Deep Background' },
      { name: 'Cherry', hex: '#9b1b30', description: 'Rich Accents' },
      { name: 'Fizz', hex: '#eec1ad', description: 'Light Elements' },
      { name: 'Label', hex: '#ffffff', description: 'Sharp Contrast' },
    ]
  },
  {
    id: 'serene-sky',
    name: 'Serene Sky',
    category: 'Calm',
    colors: [
      { name: 'Sky', hex: '#bae6fd', description: 'Header Background' },
      { name: 'Cloud', hex: '#f0f9ff', description: 'Body Background' },
      { name: 'Bluebird', hex: '#0284c7', description: 'Links & Buttons' },
      { name: 'Dusk', hex: '#1e3a8a', description: 'Footer' },
    ]
  },
  {
    id: 'pumpkin-spice',
    name: 'Pumpkin Spice',
    category: 'Aesthetic',
    colors: [
      { name: 'Pumpkin', hex: '#d97706', description: 'Autumn Feel' },
      { name: 'Cinnamon', hex: '#78350f', description: 'Text/Borders' },
      { name: 'Cream', hex: '#fff7ed', description: 'Soft Background' },
      { name: 'Nutmeg', hex: '#a16207', description: 'Secondary' },
    ]
  },
  {
    id: 'deep-space',
    name: 'Deep Space',
    category: 'Dark Mode',
    colors: [
      { name: 'Void', hex: '#000000', description: 'OLED Background' },
      { name: 'Star', hex: '#ffffff', description: 'Bright Text' },
      { name: 'Comet', hex: '#64748b', description: 'Subtle Elements' },
      { name: 'Nebula', hex: '#6366f1', description: 'Interactive' },
    ]
  },
  {
    id: 'fresh-lime',
    name: 'Fresh Lime',
    category: 'Neon',
    colors: [
      { name: 'Lime', hex: '#84cc16', description: 'High Energy' },
      { name: 'Dark', hex: '#1a2e05', description: 'Contrast Text' },
      { name: 'White', hex: '#ecfccb', description: 'Background' },
      { name: 'Zest', hex: '#3f6212', description: 'Borders' },
    ]
  },
  {
    id: 'slate-blue',
    name: 'Slate Blue',
    category: 'Professional',
    colors: [
      { name: 'Slate', hex: '#475569', description: 'Neutral Tone' },
      { name: 'Blue', hex: '#3b82f6', description: 'Trust Color' },
      { name: 'Light', hex: '#f1f5f9', description: 'Background' },
      { name: 'Dark', hex: '#0f172a', description: 'Typography' },
    ]
  },
  {
    id: 'rose-gold',
    name: 'Rose Gold',
    category: 'Aesthetic',
    colors: [
      { name: 'Rose', hex: '#b76e79', description: 'Elegant Accents' },
      { name: 'Gold', hex: '#d4af37', description: 'Luxury Trim' },
      { name: 'Blush', hex: '#ffe4e1', description: 'Background' },
      { name: 'Charcoal', hex: '#36454f', description: 'Sophisticated Text' },
    ]
  },
  {
    id: 'monochrome-mag',
    name: 'Mono Mag',
    category: 'Professional',
    colors: [
      { name: 'Black', hex: '#000000', description: 'Headlines' },
      { name: 'White', hex: '#ffffff', description: 'Page' },
      { name: 'Grey', hex: '#d4d4d4', description: 'Images/Borders' },
      { name: 'Silver', hex: '#a3a3a3', description: 'Meta Text' },
    ]
  },
  {
    id: 'sunny-day',
    name: 'Sunny Day',
    category: 'Nature',
    colors: [
      { name: 'Sun', hex: '#facc15', description: 'Warmth' },
      { name: 'Grass', hex: '#4ade80', description: 'Life' },
      { name: 'Sky', hex: '#38bdf8', description: 'Openness' },
      { name: 'Cloud', hex: '#f0f9ff', description: 'Canvas' },
    ]
  },
  {
    id: 'grape-soda',
    name: 'Grape Soda',
    category: 'Pastel',
    colors: [
      { name: 'Grape', hex: '#a855f7', description: 'Flavor' },
      { name: 'Fizz', hex: '#f3e8ff', description: 'Bubbles' },
      { name: 'Can', hex: '#4c1d95', description: 'Deep Brand' },
      { name: 'Pop', hex: '#e879f9', description: 'Fun Accent' },
    ]
  },
  {
    id: 'industrial',
    name: 'Industrial',
    category: 'Professional',
    colors: [
      { name: 'Concrete', hex: '#9ca3af', description: 'Structure' },
      { name: 'Steel', hex: '#4b5563', description: 'Framework' },
      { name: 'Rust', hex: '#ea580c', description: 'Warning/Highlight' },
      { name: 'Floor', hex: '#f3f4f6', description: 'Base' },
    ]
  },
  {
    id: 'island-getaway',
    name: 'Island Getaway',
    category: 'Nature',
    colors: [
      { name: 'Water', hex: '#06b6d4', description: 'Clear Sea' },
      { name: 'Sand', hex: '#fde047', description: 'Beach' },
      { name: 'Palm', hex: '#16a34a', description: 'Trees' },
      { name: 'Coral', hex: '#fb7185', description: 'Sunset' },
    ]
  },
  {
    id: 'hacker-terminal',
    name: 'Hacker Terminal',
    category: 'Dark Mode',
    colors: [
      { name: 'Screen', hex: '#000000', description: 'CRT Background' },
      { name: 'Code', hex: '#00ff00', description: 'Phosphor Green' },
      { name: 'Cursor', hex: '#008000', description: 'Blinking Block' },
      { name: 'Dim', hex: '#003300', description: 'History' },
    ]
  },
  {
    id: 'clean-slate',
    name: 'Clean Slate',
    category: 'Calm',
    colors: [
      { name: 'Slate', hex: '#64748b', description: 'Balanced Text' },
      { name: 'Fog', hex: '#f1f5f9', description: 'Soft Background' },
      { name: 'Mist', hex: '#cbd5e1', description: 'Dividers' },
      { name: 'Sky', hex: '#e2e8f0', description: 'Panel BG' },
    ]
  }
];
