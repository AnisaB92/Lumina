import Link from "next/link";

export default function Onboarding() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="card space-y-4">
        <h2 className="text-xl font-semibold">Анкета</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="text-sm grid gap-1">Рост (см)<input className="border rounded-lg px-3 py-2" placeholder="165"/></label>
          <label className="text-sm grid gap-1">Размер одежды
            <select className="border rounded-lg px-3 py-2">{["XS","S","M","L","XL","2XL"].map(s=><option key={s}>{s}</option>)}</select>
          </label>
          <label className="text-sm grid gap-1 md:col-span-2">Цели
            <input className="border rounded-lg px-3 py-2" placeholder="офис, прогулка, торжество"/>
          </label>
        </form>
        <div className="flex gap-3">
          <Link href="/stylist" className="btn btn-primary">Сохранить и перейти к стилисту</Link>
          <Link href="/" className="btn btn-outline">Назад</Link>
        </div>
      </div>
    </main>
  );
}
