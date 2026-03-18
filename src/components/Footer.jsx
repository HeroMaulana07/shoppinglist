export default function Footer({ items }) {
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <div className="p-8 mt-auto">
      <div className="glass-card p-5 rounded-3xl border-white/5">
        <p className="text-[11px] leading-relaxed text-teal-200/50 uppercase tracking-[0.2em] mb-3 font-bold text-center">
          Inventory Status
        </p>
        <div className="flex justify-between items-end mb-3">
          <p className="text-sm text-white/90 font-medium">
            <span className="text-white font-extrabold">{totalItems}</span>{" "}
            items total
          </p>
          <p className="text-xs text-teal-400 font-bold">
            {percentage}% Completed
          </p>
        </div>
        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden p-0.5">
          <div
            className="vibrant-accent h-full rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(45,212,191,0.4)]"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
