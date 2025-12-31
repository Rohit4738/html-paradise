import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Save, LayoutTemplate } from 'lucide-react';
import { HTML_COLORS } from '../constants';
import LivePalettePreview from './LivePalettePreview';
import { PaletteDefinition } from '../types';

interface CustomColor {
  id: string;
  hex: string;
  role: 'bg-main' | 'bg-card' | 'text-main' | 'text-muted' | 'accent-main' | 'border';
  label: string;
}

interface CustomPaletteBuilderProps {
  onSave: (palette: PaletteDefinition) => void;
  paletteToLoad?: PaletteDefinition | null;
  onClearLoad?: () => void;
}

const CustomPaletteBuilder: React.FC<CustomPaletteBuilderProps> = ({ onSave, paletteToLoad, onClearLoad }) => {
  const [colors, setColors] = useState<CustomColor[]>([
    { id: '1', hex: '#0f172a', role: 'bg-main', label: 'App Background' },
    { id: '2', hex: '#1e293b', role: 'bg-card', label: 'Card Surface' },
    { id: '3', hex: '#f8fafc', role: 'text-main', label: 'Primary Text' },
    { id: '4', hex: '#94a3b8', role: 'text-muted', label: 'Secondary Text' },
    { id: '5', hex: '#c026d3', role: 'accent-main', label: 'Brand Color' },
  ]);
  const [paletteName, setPaletteName] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Load palette effect
  useEffect(() => {
    if (paletteToLoad) {
      setPaletteName(paletteToLoad.name);
      
      const newColors: CustomColor[] = paletteToLoad.colors.map(c => ({
        id: Math.random().toString(36).substr(2, 9),
        hex: c.hex,
        role: c.name as CustomColor['role'], // In saved palette, 'name' stores the role
        label: c.description // In saved palette, 'description' stores the label
      }));
      
      setColors(newColors);
      
      // Clear the prop so it doesn't keep resetting if we edit
      if (onClearLoad) {
        onClearLoad();
      }
    }
  }, [paletteToLoad, onClearLoad]);

  const addColor = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setColors([...colors, { id: newId, hex: '#ffffff', role: 'bg-card', label: 'New Color' }]);
  };

  const removeColor = (id: string) => {
    setColors(colors.filter(c => c.id !== id));
  };

  const updateColor = (id: string, field: keyof CustomColor, value: string) => {
    setColors(colors.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const handleSave = () => {
    if (!paletteName.trim()) {
      alert("Please give your palette a name!");
      return;
    }

    const newPalette: PaletteDefinition = {
      id: `custom-${Date.now()}`,
      name: paletteName,
      category: 'Custom',
      // We map the builder structure to the standard PaletteColor structure
      // name -> role (so the previewer can read it back)
      // description -> label
      colors: colors.map(c => ({
        name: c.role, 
        hex: c.hex,
        description: c.label
      }))
    };

    onSave(newPalette);
    setIsSaving(false);
    setPaletteName('');
    alert("Palette Saved to 'Saved' tab!");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT: Builder Controls */}
      <div className="flex flex-col gap-6">
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <LayoutTemplate size={20} className="text-fuchsia-400" />
              Palette Builder
            </h2>
            <div className="flex gap-2">
               <button 
                onClick={addColor}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-sm transition-colors"
              >
                <Plus size={16} /> Add Color
              </button>
              <button 
                onClick={() => setIsSaving(!isSaving)}
                className="flex items-center gap-2 px-3 py-1.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-lg text-sm transition-colors font-medium"
              >
                <Save size={16} /> Save Palette
              </button>
            </div>
          </div>

          {isSaving && (
            <div className="mb-6 p-4 bg-fuchsia-900/20 border border-fuchsia-500/30 rounded-lg animate-in fade-in slide-in-from-top-2">
              <label className="block text-xs font-medium text-fuchsia-300 mb-1">Palette Name</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={paletteName}
                  onChange={(e) => setPaletteName(e.target.value)}
                  placeholder="e.g., My Dream Theme"
                  className="flex-grow bg-slate-950 border border-fuchsia-500/50 rounded px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                />
                <button 
                  onClick={handleSave}
                  className="px-4 py-2 bg-fuchsia-600 text-white rounded hover:bg-fuchsia-500 text-sm font-bold"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {colors.map((color) => (
              <div key={color.id} className="flex flex-col sm:flex-row gap-3 bg-slate-950/50 p-3 rounded-lg border border-slate-800/50 items-start sm:items-center">
                {/* Color Inputs */}
                <div className="flex items-center gap-2">
                  <input 
                    type="color" 
                    value={color.hex}
                    onChange={(e) => updateColor(color.id, 'hex', e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer bg-transparent border-none" 
                  />
                  <div className="relative">
                    <input 
                      type="text" 
                      value={color.hex}
                      onChange={(e) => updateColor(color.id, 'hex', e.target.value)}
                      className="w-24 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm text-slate-200 font-mono uppercase focus:ring-1 focus:ring-fuchsia-500 outline-none"
                      list="html-colors"
                    />
                     {/* Datalist for autocomplete */}
                     <datalist id="html-colors">
                        {HTML_COLORS.map(c => (
                            <option key={c.name} value={c.hex}>{c.name}</option>
                        ))}
                    </datalist>
                  </div>
                </div>

                {/* Role Selector */}
                <select 
                  value={color.role}
                  onChange={(e) => updateColor(color.id, 'role', e.target.value as CustomColor['role'])}
                  className="bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-300 focus:ring-1 focus:ring-fuchsia-500 outline-none flex-grow min-w-[120px]"
                >
                  <option value="bg-main">Background (Main)</option>
                  <option value="bg-card">Background (Card)</option>
                  <option value="text-main">Text (Primary)</option>
                  <option value="text-muted">Text (Secondary)</option>
                  <option value="accent-main">Accent / Button</option>
                  <option value="border">Border / Line</option>
                </select>

                {/* Label Input */}
                <input 
                  type="text" 
                  value={color.label}
                  onChange={(e) => updateColor(color.id, 'label', e.target.value)}
                  placeholder="Usage Label..."
                  className="bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-sm text-slate-300 focus:ring-1 focus:ring-fuchsia-500 outline-none flex-grow"
                />

                {/* Remove */}
                <button 
                  onClick={() => removeColor(color.id)}
                  className="p-2 text-slate-500 hover:text-red-400 hover:bg-slate-800 rounded transition-colors"
                  title="Remove color"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500">
            <p>Tip: Assign roles to see them applied in the Live Preview instantly.</p>
          </div>
        </div>
      </div>

      {/* RIGHT: Live Preview */}
      <div className="flex flex-col gap-6">
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-lg sticky top-24">
          <div className="flex justify-between items-center mb-4">
             <h2 className="text-xl font-bold text-slate-100">Live Preview</h2>
             <span className="text-xs px-2 py-1 bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30 rounded-full">Interactive</span>
          </div>

          <LivePalettePreview colors={colors} title={paletteName} />
          
          {/* Legend */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {colors.map(c => (
                <div key={c.id} className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full border border-slate-700" style={{ backgroundColor: c.hex }}></div>
                    <span className="text-slate-400 truncate">{c.label}</span>
                </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomPaletteBuilder;