'use client';
import { useEffect, useState } from "react";
import { storage } from "@/components/store";

export default function Cart() {
  const [items, setItems] = useState([]);
  useEffect(()=>{ setItems(storage.get("cart", [])); },[]);

  const total = items.reduce((s, x) => s + (x.price || 0), 0);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="card space-y-3">
        <h2 className="text-lg font-semibold">Корзина</h2>
        {items.length === 0 ? <div className="text-sm text-gray-500">Пока пусто</div> :
          <div className="space-y-2">
            {items.map((x,i)=>(
              <div key={i} className="flex items-center justify-between border rounded-xl p-3">
                <div className="text-sm">{x.title}</div>
                <div className="text-sm">${"{"}x.price{"}"}</div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="text-sm font-medium">Итого</div>
              <div className="text-sm font-semibold">${"{"}total.toFixed(2){"}"}</div>
            </div>
            <button className="btn btn-primary w-full">Перейти к покупке</button>
          </div>
        }
      </div>
    </main>
  );
}
