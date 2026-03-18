import { useState } from "react";

export default function AddList({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem);

    setName(" ");
    setQuantity(1);
  }

  const QuantityItems = [...Array(10)].map((_, i) => (
    <option value={i + 1} key={i + 1} className="bg-teal-500 text-black">
      {i + 1}
    </option>
  ));
  return (
    <section className="px-8 pb-6">
      <div className="flex flex-col gap-4">
        <label className="text-xs font-bold uppercase tracking-widest text-teal-400/80 ml-1">
          Today what are you gonna shop?
        </label>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <div className="w-20">
            <select
              className="w-full h-12 rounded-2xl border bg-white/10 border-white/10 text-white text-sm cursor-pointer focus:ring-teal-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:border appearance-none text-center"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {QuantityItems}
            </select>
          </div>
          <div className="grow">
            <input
              type="text"
              placeholder="Item name..."
              className="w-full h-12 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:ring-teal-500 focus:border-teal-500 text-sm focus:ring-1 focus:border focus:outline-none p-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button className="vibrant-accent text-white px-6 h-12 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-teal-900/20 text-sm">
            Add
          </button>
        </form>
      </div>
    </section>
  );
}
