"use client";

type Props = {
  categories: string[];
  selected: string;
  onSelect: (c: string) => void;
};

export default function CategoryTabs({ categories, selected, onSelect }: Props) {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <ul className="flex gap-6 overflow-x-auto text-sm font-medium px-4 py-2 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onSelect(cat)}
              className={`category-tab capitalize whitespace-nowrap pb-1
                ${selected === cat ? "active" : ""}
              `}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
