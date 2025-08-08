export async function GET() {
  const items = [
    { id: 1, title: "Абайя с капюшоном", brand: "Veila", price: 120, url: "https://example.com/a" },
    { id: 2, title: "Костюм-тройка", brand: "Veila", price: 95, url: "https://example.com/b" },
    { id: 3, title: "Палантин", brand: "Veila", price: 25, url: "https://example.com/c" },
  ];
  return Response.json({ items });
}
