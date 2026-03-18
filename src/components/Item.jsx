import { useState } from "react";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li
      className={`bgList glass-card ${item.checked ? "mybg" : ""}`}
      key={item.id}
    >
      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => onToggleItem(item.id)}
            className="w-6 h-6 rounded-lg border-white/20 bg-white/5 text-teal-500 focus:ring-teal-500 transition-all cursor-pointer appearance-none checked:bg-teal-500 "
          />
        </div>
        <span
          style={
            item.checked
              ? { textDecoration: "line-through", opacity: "0.4" }
              : {}
          }
          className="text-white/90 font-semibold text-base"
        >
          {item.quantity} {item.name}
        </span>
      </div>
      <button
        className="text-white/20 hover:text-rose-400 p-2 transition-colors cursor-pointer"
        onClick={() => onDeleteItem(item.id)}
      >
        <svg
          className="h-6 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      </button>
    </li>
  );
}

// function ButtonList() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const items = ["HTML", "CSS", "JavaScript", "React"];

//   return (
//     <div className="space-y-3">
//       {items.map((item, i) => (
//         <button
//           key={i}
//           onClick={() => setActiveIndex(i)}
//           className={`
//             w-full px-4 py-2 rounded-xl text-white text-left
//             transition-all duration-300 bg-si
//             ${
//               activeIndex === i
//                 ? `
//                   mybg
//                 `
//                 : "bg-white/10 hover:bg-white/20"
//             }
//           `}
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   );
// }

//  className={`bgList glass-card ${active ? "mybg" : ""}`}
// onCLick={() => setActive(!active)}
