export interface FontDefinition {
  name: string;
  category: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy';
  stack: string;
}

export interface ColorDefinition {
  name: string;
  hex: string;
}

export interface PaletteColor {
  name: string; // Used for "Role" in custom palettes (e.g. "bg-main")
  hex: string;
  description: string; // Used for "Label" in custom palettes
}

export interface PaletteDefinition {
  id: string;
  name: string;
  category: 'Professional' | 'Aesthetic' | 'Neon' | 'Pastel' | 'Dark Mode' | 'Nature' | 'Calm' | 'Custom';
  colors: PaletteColor[];
}

export enum TabOption {
  FONTS = 'FONTS',
  COLORS = 'COLORS',
  PALETTES = 'PALETTES',
  BUILDER = 'BUILDER',
  SAVED = 'SAVED',
}
