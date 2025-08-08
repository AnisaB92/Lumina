'use client';
import { useEffect, useState } from "react";
import { storage } from "@/components/store";

export default function Wardrobe() {
  const [items, setItems] = useState([]);
  useEffect(()=>{ setItems(storage.get("wardrobe", [])); },[]);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="card space-y-2">
        <h2 className="text-lg font-semibold">Мой гардероб</h2>
        <p className="text-sm text-gray-600">Здесь будут ваши вещи. Пока что это демо — добавляйте вручную через стилиста.</p>
        {items.length === 0 ? <div className="text-sm text-gray-500">Пусто</div> :
          <ul className="list-disc text-sm pl-6">{items.map((x,i)=><li key={i}>{x.title}</li>)}</ul>}
      </div>
    </main>
  );
}
