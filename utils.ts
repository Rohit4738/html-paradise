/**
 * Converts a Hex color to RGB
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * Calculates relative luminance (brightness) of a color
 * Returns value 0 (darkest) to 1 (brightest)
 */
export const getLuminance = (hex: string): number => {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  
  const { r, g, b } = rgb;
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

/**
 * Converts Hex to HSL to determine saturation and lightness for categories
 */
const hexToHsl = (hex: string): { h: number; s: number; l: number } => {
  let { r, g, b } = hexToRgb(hex) || { r: 0, g: 0, b: 0 };
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h: h * 360, s, l };
};

/**
 * Auto-categorizes a color based on its HSL/Luminance properties
 */
export const getColorCategory = (hex: string): string[] => {
  const { s, l } = hexToHsl(hex);
  const tags: string[] = ['All'];

  if (l < 0.2) tags.push('Dark');
  if (l > 0.8) tags.push('Light');
  
  // Professional: Low saturation, not too dark/light, usually blues/greys/whites
  if (s < 0.4 && l > 0.2 && l < 0.9) tags.push('Professional');
  
  // Calm: Low saturation, mid-to-high lightness
  if (s < 0.5 && l > 0.6) tags.push('Calm');
  
  // Aesthetic/Pastel: Mid saturation, high lightness
  if (s > 0.4 && s < 0.8 && l > 0.6) tags.push('Aesthetic');
  
  // Vibrant: High saturation
  if (s > 0.8) tags.push('Vibrant');

  return tags;
};
