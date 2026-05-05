'use client';

import { useMemo, useState } from 'react';

const LOCAL_WARDROBE = [
  { id: 'abaya', name: 'abaya', type: 'outerwear', styles: ['modest', 'elegant'], colors: ['black', 'beige', 'ivory'] },
  { id: 'tunic-set', name: 'tunic set', type: 'set', styles: ['modest', 'casual'], colors: ['beige', 'soft pink', 'olive'] },
  { id: 'hood-scarf', name: 'hood scarf', type: 'accessory', styles: ['modest', 'casual'], colors: ['ivory', 'beige', 'gray'] },
  { id: 'hijab', name: 'hijab', type: 'accessory', styles: ['modest', 'elegant'], colors: ['ivory', 'soft pink', 'navy'] },
  { id: 'wide-pants', name: 'wide pants', type: 'bottom', styles: ['casual', 'elegant'], colors: ['beige', 'white', 'black'] },
  { id: 'maxi-dress', name: 'maxi dress', type: 'dress', styles: ['modest', 'elegant'], colors: ['soft pink', 'ivory', 'emerald'] },
  { id: 'cardigan', name: 'cardigan', type: 'layer', styles: ['casual', 'modest'], colors: ['beige', 'ivory', 'brown'] },
  { id: 'belt', name: 'belt', type: 'accessory', styles: ['elegant', 'casual'], colors: ['gold', 'tan', 'black'] },
  { id: 'sneakers', name: 'sneakers', type: 'shoes', styles: ['casual'], colors: ['white', 'beige', 'soft pink'] },
  { id: 'elegant-shoes', name: 'elegant shoes', type: 'shoes', styles: ['elegant', 'modest'], colors: ['gold', 'beige', 'black'] },
];

function generateOutfit(userData, userRequest) {
  const styleMatch = LOCAL_WARDROBE.filter((item) => item.styles.includes(userData.style));
  const preferredColor = userData.preferredColor?.trim().toLowerCase();
  const byColor = preferredColor
    ? styleMatch.filter((item) => item.colors.some((color) => color.toLowerCase() === preferredColor))
    : [];

  const selected = (byColor.length ? byColor : styleMatch).slice(0, 5);
  const fallback = LOCAL_WARDROBE.filter((item) => !selected.find((picked) => picked.id === item.id)).slice(0, Math.max(0, 5 - selected.length));
  const items = [...selected, ...fallback].slice(0, 5).map((item) => item.name);

  return {
    title: `${userData.style[0].toUpperCase()}${userData.style.slice(1)} outfit for size ${userData.size}`,
    items,
    description: `Designed for height ${userData.height} with a ${userData.style} mood. Request focus: ${userRequest || 'balanced everyday look'}.`,
    colors: preferredColor ? [preferredColor, 'ivory', 'gold'] : ['beige', 'soft pink', 'ivory', 'gold'],
  };
}

export default function StylistPage() {
  const [userData, setUserData] = useState({
    height: '',
    size: 'M',
    style: 'modest',
    preferredColor: '',
  });
  const [userRequest, setUserRequest] = useState('');
  const [outfit, setOutfit] = useState(null);

  const colorPalette = useMemo(() => ({
    page: '#fdf8f2',
    card: '#fffdf9',
    border: '#efdcc7',
    title: '#6b4d39',
    subtitle: '#9a7b67',
    accent: '#c89b3c',
    pink: '#f6e4ea',
  }), []);

  const handleGenerate = () => {
    const result = generateOutfit(userData, userRequest);
    setOutfit(result);
  };

  return (
    <main className="min-h-screen px-4 py-8" style={{ backgroundColor: colorPalette.page }}>
      <div className="mx-auto w-full max-w-3xl space-y-5">
        <section className="rounded-3xl border p-6 shadow-sm" style={{ backgroundColor: colorPalette.card, borderColor: colorPalette.border }}>
          <h1 className="text-3xl font-semibold" style={{ color: colorPalette.title }}>Lumina AI Stylist</h1>
          <p className="mt-1 text-sm" style={{ color: colorPalette.subtitle }}>Your modest AI stylist</p>
        </section>

        <section className="rounded-3xl border p-5 shadow-sm" style={{ backgroundColor: '#fff', borderColor: colorPalette.border }}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="text-sm" style={{ color: colorPalette.title }}>
              Height
              <input
                value={userData.height}
                onChange={(e) => setUserData((prev) => ({ ...prev, height: e.target.value }))}
                placeholder="e.g. 168 cm"
                className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm focus:outline-none"
                style={{ borderColor: colorPalette.border }}
              />
            </label>

            <label className="text-sm" style={{ color: colorPalette.title }}>
              Size
              <select
                value={userData.size}
                onChange={(e) => setUserData((prev) => ({ ...prev, size: e.target.value }))}
                className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm focus:outline-none"
                style={{ borderColor: colorPalette.border }}
              >
                {['S', 'M', 'L', 'XL', '2XL'].map((size) => <option key={size}>{size}</option>)}
              </select>
            </label>

            <label className="text-sm" style={{ color: colorPalette.title }}>
              Style
              <select
                value={userData.style}
                onChange={(e) => setUserData((prev) => ({ ...prev, style: e.target.value }))}
                className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm focus:outline-none"
                style={{ borderColor: colorPalette.border }}
              >
                {['modest', 'casual', 'elegant'].map((style) => <option key={style}>{style}</option>)}
              </select>
            </label>

            <label className="text-sm" style={{ color: colorPalette.title }}>
              Preferred color
              <input
                value={userData.preferredColor}
                onChange={(e) => setUserData((prev) => ({ ...prev, preferredColor: e.target.value }))}
                placeholder="beige, ivory, soft pink..."
                className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm focus:outline-none"
                style={{ borderColor: colorPalette.border }}
              />
            </label>
          </div>

          <label className="mt-4 block text-sm" style={{ color: colorPalette.title }}>
            Your request
            <textarea
              value={userRequest}
              onChange={(e) => setUserRequest(e.target.value)}
              placeholder="I need a modest elegant look for dinner with neutral tones"
              rows={4}
              className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm focus:outline-none"
              style={{ borderColor: colorPalette.border }}
            />
          </label>

          <button
            onClick={handleGenerate}
            className="mt-4 w-full rounded-2xl px-4 py-3 text-sm font-medium transition hover:opacity-90 sm:w-auto"
            style={{ backgroundColor: colorPalette.accent, color: '#fff' }}
          >
            Generate Outfit
          </button>
        </section>

        <section className="rounded-3xl border p-5 shadow-sm" style={{ backgroundColor: colorPalette.pink, borderColor: colorPalette.border }}>
          <h2 className="text-lg font-semibold" style={{ color: colorPalette.title }}>Outfit result</h2>
          {outfit ? (
            <div className="mt-3 space-y-3 text-sm" style={{ color: colorPalette.title }}>
              <p className="font-medium">{outfit.title}</p>
              <p>{outfit.description}</p>
              <div>
                <p className="font-medium">Items:</p>
                <ul className="list-disc pl-5">
                  {outfit.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {outfit.colors.map((color) => (
                  <span key={color} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: colorPalette.border, backgroundColor: '#fff' }}>
                    {color}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="mt-2 text-sm" style={{ color: colorPalette.subtitle }}>
              Fill in your preferences and press “Generate Outfit” to see your personalized suggestion.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
