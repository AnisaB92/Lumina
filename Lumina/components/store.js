export const storage = {
  get(key, init=[]) {
    if (typeof window === 'undefined') return init;
    try { return JSON.parse(localStorage.getItem(key)) ?? init; } catch { return init; }
  },
  set(key, val) { if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(val)); },
};

export function addTo(key, item) {
  const list = storage.get(key, []);
  list.push(item);
  storage.set(key, list);
  return list;
}
