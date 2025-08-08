'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    if (email === "admin@lumina.app" && pass === "demo123") {
      localStorage.setItem("admin", "1");
      router.push("/admin");
    } else {
      alert("Неверные данные (для демо используйте admin@lumina.app / demo123)");
    }
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <form onSubmit={submit} className="card space-y-3">
        <h2 className="text-lg font-semibold">Админ-вход</h2>
        <input className="border rounded-xl px-3 py-2 w-full" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="border rounded-xl px-3 py-2 w-full" type="password" placeholder="Пароль" value={pass} onChange={e=>setPass(e.target.value)} />
        <button className="btn btn-primary w-full" type="submit">Войти</button>
      </form>
    </main>
  );
}
