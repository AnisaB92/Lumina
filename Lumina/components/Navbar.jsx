import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-20">
      <div className="max-w-5xl mx-auto p-4 flex items-center gap-4">
        <Link href="/" className="font-semibold">Lumina</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/stylist">Стилист</Link>
          <Link href="/wardrobe">Гардероб</Link>
          <Link href="/cart">Корзина</Link>
        </div>
        <div className="ml-auto flex gap-4 text-sm">
          <Link href="/admin/login">Админ</Link>
        </div>
      </div>
    </nav>
  );
}
