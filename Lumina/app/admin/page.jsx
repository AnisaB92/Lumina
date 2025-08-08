'use client';
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Admin() {
  const [ok, setOk] = useState(false);
  useEffect(()=>{ setOk(localStorage.getItem("admin")==="1"); },[]);

  if (!ok) return (
    <main className="max-w-md mx-auto p-6">
      <div className="card space-y-2">
        <div className="text-sm">Нет доступа. <Link href="/admin/login" className="underline">Войти</Link></div>
      </div>
    </main>
  );

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-4">
      <div className="card">
        <h2 className="text-lg font-semibold">Админ-панель</h2>
        <p className="text-sm text-gray-600">Демо: заявки пользователей и клики по реф-ссылкам.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-medium">Пользователи (демо)</h3>
          <ul className="text-sm list-disc pl-6">
            <li>user001 — XS — цель: офис</li>
            <li>user002 — M — цель: прогулка</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-medium">Рефералы (демо)</h3>
          <ul className="text-sm list-disc pl-6">
            <li>Клик: abaya-hood — 3 шт</li>
            <li>Клик: scarf — 7 шт</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
