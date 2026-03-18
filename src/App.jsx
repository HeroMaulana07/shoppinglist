import { useState } from "react";
import Header from "./components/Header";
import AddList from "./components/AddList";
import ListStuff from "./components/ListStuff";
import Footer from "./components/Footer";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div>
      <main className="w-full max-w-md glass-container min-h-[90vh] flex flex-col rounded-[2.5rem] liquid-shadow overflow-hidden px-3 py-2">
        <Header />
        <AddList onAddItem={handleAddItem} />
        <ListStuff
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearItems={handleClearItems}
        />
        <Footer items={items} />
      </main>
    </div>
  );
}
