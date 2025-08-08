'use client';
import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { addTo } from "@/components/store";

const MOCK = [
  { id: 1, title: "Абайя с капюшоном", brand: "Veila", price: 120, url: "https://example.com/a", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Костюм-тройка", brand: "Veila", price: 95, url: "https://example.com/b", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Палантин", brand: "Veila", price: 25, url: "https://example.com/c", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop" },
];

export default function Stylist() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Привет, я Lumina ✨ Что ищем сегодня? Могу собрать образ и дать ссылки на покупку." }
  ]);
  const [input, setInput] = useState("");
  const [results, setResults] = useState(MOCK);

  const send = async () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { role: "user", content: input }];
    setMessages(newMsgs);
    setInput("");
    // simple mock "search"
    setTimeout(() => {
      setMessages(m => [...m, { role: "assistant", content: "Собрала три варианта — добавляю ниже. Если нравится, жмите «В корзину» или «Купить»." }]);
      setResults(MOCK);
    }, 500);
  };

  const add = (item) => {
    addTo("cart", item);
    setMessages(m => [...m, { role: "assistant", content: `Добавила «${item.title}» в корзину.` }]);
  };

  return (
    <main className="max-w-5xl mx-auto p-4 space-y-4">
      <div className="card">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Lumina — ваш стилист</h2>
          <Link href="/cart" className="text-sm underline">Корзина</Link>
        </div>
        <div className="space-y-2 max-h-64 overflow-auto my-3">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "assistant" ? "text-sm bg-gray-50 border p-3 rounded-xl w-fit" : "text-sm bg-black text-white p-3 rounded-xl w-fit ml-auto"}>
              {m.content}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Например: «Повседневный образ в бежевых тонах»" className="flex-1 border rounded-xl px-3 py-2"/>
          <button onClick={send} className="btn btn-primary">Отправить</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map(item => <ProductCard key={item.id} item={item} onAdd={add} />)}
      </div>
    </main>
  );
}
