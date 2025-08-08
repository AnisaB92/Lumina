import Link from "next/link";
export default function Home() {
  return (
    <main className="gradient-hero min-h-[80vh] flex items-center justify-center p-6">
      <div className="max-w-xl w-full card space-y-6">
        <h1 className="text-2xl font-semibold">Lumina — AI Stylist</h1>
        <p className="text-sm text-gray-600">Выберите язык и начните — Lumina подберет образы и даст ссылки на покупку.</p>
        <div className="grid grid-cols-2 gap-3">
          {["Русский","English","Español","Türkçe","العربية","Français"].map(l => (
            <button key={l} className="btn btn-outline">{l}</button>
          ))}
        </div>
        <div className="flex gap-3">
          <Link href="/onboarding" className="btn btn-primary">Начать</Link>
          <Link href="/stylist" className="btn btn-outline">Открыть стилиста</Link>
        </div>
      </div>
    </main>
  );
}
