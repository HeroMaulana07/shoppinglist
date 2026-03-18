import Item from "./Item";
import { useState } from "react";

export default function ListStuff({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
  }
  return (
    <section>
      <div className="grow overflow-y-auto px-6 py-4 h-80 scrollbar-thumb-teal-500 scrollbar-track-white/10 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <ul className="space-y-4">
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="px-8 mt-auto">
        <div className="flex items-center justify-between gap-4 pt-5 lg:pt-15">
          <div className="grow">
            <select
              className="w-full h-11 rounded-xl border bg-white/5 border-white/10 text-white/70 px-4 focus:ring-teal-500  focus:ring-2 cursor-pointer focus:outline-none appearance-none font-semibold text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option className="bg-teal-500 text-black" value="input">
                Sort by input
              </option>
              <option className="bg-teal-500 text-black" value="name">
                Sort by name
              </option>
              <option className="bg-teal-500 text-black" value="checked">
                Sort by checked
              </option>
            </select>
          </div>
          <button
            className="px-6 h-11 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-xl text-xs font-bold hover:bg-rose-500 hover:text-white transition-all uppercase tracking-widest whitespace-nowrap"
            onClick={onClearItems}
          >
            Clear List
          </button>
        </div>
      </div>
    </section>
  );
}
