import React, { useState, useMemo, useEffect } from 'react';
import { Type, Palette, Search, X, Filter, Layout, ArrowDownAZ, SunMoon, PaintBucket, Star, Bookmark, Trash2, Edit } from 'lucide-react';
import { TabOption, PaletteDefinition } from './types';
import { HTML_FONTS, HTML_COLORS, COLOR_PALETTES } from './constants';
import { getLuminance, getColorCategory } from './utils';
import FontCard from './components/FontCard';
import ColorCard from './components/ColorCard';
import PaletteCard from './components/PaletteCard';
import CustomPaletteBuilder from './components/CustomPaletteBuilder';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabOption>(TabOption.FONTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [previewText, setPreviewText] = useState('');
  
  // State for loading a saved palette into the builder
  const [paletteToLoad, setPaletteToLoad] = useState<PaletteDefinition | null>(null);

  // Persistence state
  const [savedPalettes, setSavedPalettes] = useState<PaletteDefinition[]>(() => {
    const saved = localStorage.getItem('customPalettes');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [favFonts, setFavFonts] = useState<string[]>(() => {
    const saved = localStorage.getItem('favFonts');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [favColors, setFavColors] = useState<string[]>(() => {
    const saved = localStorage.getItem('favColors');
    return saved ? JSON.parse(saved) : [];
  });

  const [favPalettes, setFavPalettes] = useState<string[]>(() => {
    const saved = localStorage.getItem('favPalettes');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist effects
  useEffect(() => localStorage.setItem('customPalettes', JSON.stringify(savedPalettes)), [savedPalettes]);
  useEffect(() => localStorage.setItem('favFonts', JSON.stringify(favFonts)), [favFonts]);
  useEffect(() => localStorage.setItem('favColors', JSON.stringify(favColors)), [favColors]);
  useEffect(() => localStorage.setItem('favPalettes', JSON.stringify(favPalettes)), [favPalettes]);

  // Actions
  const handleSavePalette = (newPalette: PaletteDefinition) => {
    setSavedPalettes(prev => [newPalette, ...prev]);
  };
  
  const handleDeleteCustomPalette = (id: string) => {
    if(confirm("Delete this custom palette?")) {
      setSavedPalettes(prev => prev.filter(p => p.id !== id));
    }
  }

  const handleLoadPalette = (palette: PaletteDefinition) => {
    setPaletteToLoad(palette);
    setActiveTab(TabOption.BUILDER);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFavFont = (name: string) => {
    setFavFonts(prev => prev.includes(name) ? prev.filter(f => f !== name) : [...prev, name]);
  };
  
  const toggleFavColor = (name: string) => {
    setFavColors(prev => prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]);
  };
  
  const toggleFavPalette = (id: string) => {
    setFavPalettes(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  // Font Filters
  const [fontCategory, setFontCategory] = useState<string>('All');
  
  // Color Filters
  const [colorSort, setColorSort] = useState<'name' | 'dark-to-light' | 'light-to-dark'>('dark-to-light');
  const [colorMood, setColorMood] = useState<string>('All');

  // Palette Filters
  const [paletteCategory, setPaletteCategory] = useState<string>('All');

  // Logic: Fonts
  const filteredFonts = useMemo(() => {
    if (activeTab !== TabOption.FONTS) return [];
    
    let fonts = HTML_FONTS.filter((font) =>
      (font.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      font.category.toLowerCase().includes(searchQuery.toLowerCase())) && 
      (fontCategory === 'All' || font.category === fontCategory)
    );
    return fonts.sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, activeTab, fontCategory]);

  // Logic: Colors
  const filteredColors = useMemo(() => {
    if (activeTab !== TabOption.COLORS) return [];
    
    let colors = HTML_COLORS.filter((color) => {
      const matchesSearch = color.name.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;
      
      if (colorMood === 'All') return true;
      
      // Auto-tagging logic
      const tags = getColorCategory(color.hex);
      return tags.includes(colorMood);
    });

    if (colorSort === 'name') {
      return colors.sort((a, b) => a.name.localeCompare(b.name));
    } else if (colorSort === 'dark-to-light') {
      return colors.sort((a, b) => getLuminance(a.hex) - getLuminance(b.hex));
    } else {
      return colors.sort((a, b) => getLuminance(b.hex) - getLuminance(a.hex));
    }
  }, [searchQuery, activeTab, colorSort, colorMood]);

  // Logic: Palettes
  const filteredPalettes = useMemo(() => {
    if (activeTab !== TabOption.PALETTES) return [];
    
    return COLOR_PALETTES.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = paletteCategory === 'All' || p.category === paletteCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeTab, paletteCategory]);

  // Logic: Saved Items
  const savedItems = useMemo(() => {
     if (activeTab !== TabOption.SAVED) return { custom: [], favPalettes: [], favFonts: [], favColors: [] };
     
     return {
       custom: savedPalettes,
       favPalettes: COLOR_PALETTES.filter(p => favPalettes.includes(p.id)),
       favFonts: HTML_FONTS.filter(f => favFonts.includes(f.name)),
       favColors: HTML_COLORS.filter(c => favColors.includes(c.name)),
     }
  }, [activeTab, savedPalettes, favPalettes, favFonts, favColors]);


  const clearSearch = () => {
    setSearchQuery('');
    setFontCategory('All');
    setColorMood('All');
    setPaletteCategory('All');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      {/* Header Section */}
      <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
            
            {/* Logo / Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-600 to-purple-700 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(192,38,211,0.4)]">
                 {activeTab === TabOption.FONTS && <Type size={24} />}
                 {activeTab === TabOption.COLORS && <Palette size={24} />}
                 {activeTab === TabOption.PALETTES && <Layout size={24} />}
                 {activeTab === TabOption.BUILDER && <PaintBucket size={24} />}
                 {activeTab === TabOption.SAVED && <Bookmark size={24} />}
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-100 tracking-tight">HTML Studio</h1>
                <p className="text-xs text-fuchsia-400 font-medium tracking-wide">Standard Web Assets Reference</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex p-1 space-x-1 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto">
              <button
                onClick={() => { setActiveTab(TabOption.FONTS); clearSearch(); }}
                className={`flex items-center justify-center px-3 sm:px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === TabOption.FONTS
                    ? 'bg-slate-800 text-fuchsia-400 shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Type size={16} className="mr-2" />
                Fonts
              </button>
              <button
                onClick={() => { setActiveTab(TabOption.COLORS); clearSearch(); }}
                className={`flex items-center justify-center px-3 sm:px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === TabOption.COLORS
                    ? 'bg-slate-800 text-fuchsia-400 shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Palette size={16} className="mr-2" />
                Colors
              </button>
              <button
                onClick={() => { setActiveTab(TabOption.PALETTES); clearSearch(); }}
                className={`flex items-center justify-center px-3 sm:px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === TabOption.PALETTES
                    ? 'bg-slate-800 text-fuchsia-400 shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Layout size={16} className="mr-2" />
                Palettes
              </button>
               <button
                onClick={() => { setActiveTab(TabOption.BUILDER); clearSearch(); }}
                className={`flex items-center justify-center px-3 sm:px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === TabOption.BUILDER
                    ? 'bg-slate-800 text-fuchsia-400 shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <PaintBucket size={16} className="mr-2" />
                Builder
              </button>
              <button
                onClick={() => { setActiveTab(TabOption.SAVED); clearSearch(); }}
                className={`flex items-center justify-center px-3 sm:px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === TabOption.SAVED
                    ? 'bg-slate-800 text-yellow-400 shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Star size={16} className="mr-2" />
                Saved
              </button>
            </nav>
          </div>

          {/* Controls Bar */}
          {activeTab !== TabOption.BUILDER && activeTab !== TabOption.SAVED && (
            <div className="py-4 flex flex-col lg:flex-row gap-4 border-t border-slate-900">
              {/* Search Input */}
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-slate-500" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-10 py-2.5 border border-slate-800 rounded-lg bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all shadow-sm"
                  placeholder={
                    activeTab === TabOption.FONTS ? "Search fonts..." :
                    activeTab === TabOption.COLORS ? "Search colors..." : "Search palettes..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* FONT Controls */}
              {activeTab === TabOption.FONTS && (
                <div className="flex flex-col sm:flex-row gap-4 flex-grow">
                  <div className="relative min-w-[180px]">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Filter size={18} className="text-slate-500" />
                      </div>
                      <select
                        value={fontCategory}
                        onChange={(e) => setFontCategory(e.target.value)}
                        className="block w-full pl-10 pr-8 py-2.5 border border-slate-800 rounded-lg bg-slate-900/50 text-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all shadow-sm appearance-none cursor-pointer hover:bg-slate-900"
                      >
                        <option value="All">All Categories</option>
                        <option value="serif">Serif</option>
                        <option value="sans-serif">Sans Serif</option>
                        <option value="monospace">Monospace</option>
                        <option value="cursive">Cursive</option>
                        <option value="fantasy">Fantasy</option>
                      </select>
                  </div>
                  <div className="flex-grow">
                    <input
                      type="text"
                      className="block w-full px-4 py-2.5 border border-slate-800 rounded-lg bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all shadow-sm"
                      placeholder="Global preview text..."
                      value={previewText}
                      onChange={(e) => setPreviewText(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* COLOR Controls */}
              {activeTab === TabOption.COLORS && (
                <div className="flex flex-col sm:flex-row gap-4 flex-grow">
                  {/* Sort */}
                  <div className="relative min-w-[160px]">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {colorSort === 'name' ? <ArrowDownAZ size={18} className="text-slate-500" /> : <SunMoon size={18} className="text-slate-500" />}
                      </div>
                      <select
                        value={colorSort}
                        onChange={(e) => setColorSort(e.target.value as any)}
                        className="block w-full pl-10 pr-8 py-2.5 border border-slate-800 rounded-lg bg-slate-900/50 text-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all shadow-sm appearance-none cursor-pointer hover:bg-slate-900"
                      >
                        <option value="dark-to-light">Dark to Light</option>
                        <option value="light-to-dark">Light to Dark</option>
                        <option value="name">Alphabetical</option>
                      </select>
                  </div>

                  {/* Filter Mood */}
                  <div className="relative min-w-[160px]">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Filter size={18} className="text-slate-500" />
                      </div>
                      <select
                        value={colorMood}
                        onChange={(e) => setColorMood(e.target.value)}
                        className="block w-full pl-10 pr-8 py-2.5 border border-slate-800 rounded-lg bg-slate-900/50 text-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all shadow-sm appearance-none cursor-pointer hover:bg-slate-900"
                      >
                        <option value="All">All Moods</option>
                        <option value="Professional">Professional</option>
                        <option value="Calm">Calm</option>
                        <option value="Aesthetic">Aesthetic</option>
                        <option value="Dark">Dark</option>
                        <option value="Light">Light</option>
                        <option value="Vibrant">Vibrant</option>
                      </select>
                  </div>
                </div>
              )}

              {/* PALETTE Controls */}
              {activeTab === TabOption.PALETTES && (
                <div className="flex flex-col sm:flex-row gap-4 flex-grow">
                  <div className="relative min-w-[180px]">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Filter size={18} className="text-slate-500" />
                      </div>
                      <select
                        value={paletteCategory}
                        onChange={(e) => setPaletteCategory(e.target.value)}
                        className="block w-full pl-10 pr-8 py-2.5 border border-slate-800 rounded-lg bg-slate-900/50 text-slate-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all shadow-sm appearance-none cursor-pointer hover:bg-slate-900"
                      >
                        <option value="All">All Categories</option>
                        <option value="Professional">Professional</option>
                        <option value="Aesthetic">Aesthetic</option>
                        <option value="Pastel">Pastel</option>
                        <option value="Dark Mode">Dark Mode</option>
                        <option value="Neon">Neon</option>
                        <option value="Nature">Nature</option>
                        <option value="Calm">Calm</option>
                      </select>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Fonts Grid */}
        {activeTab === TabOption.FONTS && (
          <>
            <div className="mb-4 text-sm text-slate-400 flex justify-between items-center">
                <span>Showing {filteredFonts.length} font families</span>
            </div>
            
            {filteredFonts.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredFonts.map((font) => (
                  <FontCard 
                    key={font.name} 
                    font={font} 
                    previewText={previewText} 
                    onPreviewChange={setPreviewText}
                    isFavorite={favFonts.includes(font.name)}
                    onToggleFavorite={() => toggleFavFont(font.name)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800 border-dashed">
                <p className="text-slate-400 text-lg">No fonts found matching criteria</p>
                <button onClick={clearSearch} className="mt-4 text-fuchsia-400 hover:text-fuchsia-300 hover:underline">Reset filters</button>
              </div>
            )}
          </>
        )}

        {/* Colors Grid */}
        {activeTab === TabOption.COLORS && (
          <>
            <div className="mb-4 text-sm text-slate-400 flex justify-between items-center">
                <span>Showing {filteredColors.length} standard HTML colors</span>
            </div>

            {filteredColors.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredColors.map((color) => (
                  <ColorCard 
                    key={color.name} 
                    color={color} 
                    isFavorite={favColors.includes(color.name)}
                    onToggleFavorite={(e) => {
                      e.stopPropagation();
                      toggleFavColor(color.name);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800 border-dashed">
                <p className="text-slate-400 text-lg">No colors found. Try changing the mood filter.</p>
                <button onClick={clearSearch} className="mt-4 text-fuchsia-400 hover:text-fuchsia-300 hover:underline">Reset filters</button>
              </div>
            )}
          </>
        )}

         {/* Palettes Grid */}
         {activeTab === TabOption.PALETTES && (
          <>
            <div className="mb-4 text-sm text-slate-400 flex justify-between items-center">
                <span>Showing {filteredPalettes.length} curated palettes</span>
            </div>

            {filteredPalettes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredPalettes.map((palette) => (
                  <PaletteCard 
                    key={palette.id} 
                    palette={palette} 
                    isFavorite={favPalettes.includes(palette.id)}
                    onToggleFavorite={() => toggleFavPalette(palette.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-slate-800 border-dashed">
                <p className="text-slate-400 text-lg">No palettes found matching criteria</p>
                <button onClick={clearSearch} className="mt-4 text-fuchsia-400 hover:text-fuchsia-300 hover:underline">Reset filters</button>
              </div>
            )}
          </>
        )}

        {/* Builder Tab */}
        {activeTab === TabOption.BUILDER && (
           <CustomPaletteBuilder 
             onSave={handleSavePalette} 
             paletteToLoad={paletteToLoad}
             onClearLoad={() => setPaletteToLoad(null)}
           />
        )}

        {/* Saved Tab */}
        {activeTab === TabOption.SAVED && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-500">
            
            {/* Custom Palettes Section */}
            <section>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-2">
                <PaintBucket size={20} className="text-fuchsia-400" />
                <h2 className="text-xl font-bold text-slate-100">My Custom Palettes</h2>
                <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full">{savedItems.custom.length}</span>
              </div>
              
              {savedItems.custom.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {savedItems.custom.map(palette => (
                    <div key={palette.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-fuchsia-500/50 transition-all">
                       <div>
                         <h3 className="font-bold text-slate-100 text-lg mb-2">{palette.name}</h3>
                         <div className="flex -space-x-2 overflow-hidden">
                           {palette.colors.map((c, i) => (
                             <div 
                               key={i} 
                               className="w-8 h-8 rounded-full border-2 border-slate-900 shadow-sm" 
                               style={{backgroundColor: c.hex}} 
                               title={`${c.description} (${c.hex})`}
                             ></div>
                           ))}
                         </div>
                       </div>
                       <div className="flex gap-3 mt-2 sm:mt-0">
                          <button 
                            onClick={() => handleLoadPalette(palette)} 
                            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors border border-slate-700 hover:border-fuchsia-500/50"
                          >
                            <Edit size={16} className="text-fuchsia-400" />
                            Edit / View
                          </button>
                          <button 
                            onClick={() => handleDeleteCustomPalette(palette.id)} 
                            className="p-2 text-slate-500 hover:text-red-400 transition-colors bg-slate-950/50 rounded-lg border border-slate-800 hover:bg-slate-900"
                            title="Delete Palette"
                          >
                            <Trash2 size={18} />
                          </button>
                       </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 italic">No custom palettes saved yet. Go to the Builder tab to create one!</p>
              )}
            </section>

             {/* Fav Palettes Section */}
             <section>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-2">
                <Layout size={20} className="text-yellow-400" />
                <h2 className="text-xl font-bold text-slate-100">Favorite Palettes</h2>
                <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full">{savedItems.favPalettes.length}</span>
              </div>
              {savedItems.favPalettes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedItems.favPalettes.map(palette => (
                    <PaletteCard 
                      key={palette.id} 
                      palette={palette}
                      isFavorite={true}
                      onToggleFavorite={() => toggleFavPalette(palette.id)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 italic">No favorite palettes.</p>
              )}
            </section>

            {/* Fav Colors Section */}
            <section>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-2">
                <Palette size={20} className="text-yellow-400" />
                <h2 className="text-xl font-bold text-slate-100">Favorite Colors</h2>
                <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full">{savedItems.favColors.length}</span>
              </div>
              {savedItems.favColors.length > 0 ? (
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {savedItems.favColors.map(color => (
                    <ColorCard 
                      key={color.name} 
                      color={color}
                      isFavorite={true}
                      onToggleFavorite={(e) => { e.stopPropagation(); toggleFavColor(color.name); }}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 italic">No favorite colors.</p>
              )}
            </section>

            {/* Fav Fonts Section */}
            <section>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-2">
                <Type size={20} className="text-yellow-400" />
                <h2 className="text-xl font-bold text-slate-100">Favorite Fonts</h2>
                <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full">{savedItems.favFonts.length}</span>
              </div>
              {savedItems.favFonts.length > 0 ? (
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {savedItems.favFonts.map(font => (
                    <FontCard 
                      key={font.name} 
                      font={font} 
                      previewText={previewText}
                      onPreviewChange={setPreviewText}
                      isFavorite={true}
                      onToggleFavorite={() => toggleFavFont(font.name)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 italic">No favorite fonts.</p>
              )}
            </section>

          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default App;