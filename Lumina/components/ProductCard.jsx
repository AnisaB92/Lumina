import Image from "next/image";

export default function ProductCard({ item, onAdd }) {
  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="aspect-square relative bg-gray-50">
        {item.image ? (
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        ) : null}
      </div>
      <div className="p-3 space-y-1">
        <div className="text-sm font-medium">{item.title}</div>
        <div className="text-xs text-gray-500">{item.brand}</div>
        <div className="text-sm">${"{"}item.price{"}"}</div>
        <div className="flex gap-2 pt-1">
          <button className="btn btn-primary" onClick={() => onAdd(item)}>В корзину</button>
          <a href={item.url} target="_blank" className="btn btn-outline">Купить</a>
        </div>
      </div>
    </div>
  );
}
