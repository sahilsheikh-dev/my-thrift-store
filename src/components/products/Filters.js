import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import { products } from "../../data/products.js"; // adjust path if needed

const sizes = ["All", "S", "M", "L"];

export default function Filters({ selected, onChange }) {
  const { category, size, maxPrice, query } = selected;
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Extract unique categories from product data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const FilterForm = (
    <div className="grid gap-4 md:grid-cols-4 items-end">
      {/* Category */}
      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          className="mt-1 w-full border rounded-xl p-2"
          value={category}
          onChange={(e) => onChange({ category: e.target.value })}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Size */}
      <div>
        <label className="block text-sm font-medium">Size</label>
        <select
          className="mt-1 w-full border rounded-xl p-2"
          value={size}
          onChange={(e) => onChange({ size: e.target.value })}
        >
          {sizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Max Price */}
      <div>
        <label className="block text-sm font-medium">Max Price (₹)</label>
        <input
          type="number"
          className="mt-1 w-full border rounded-xl p-2"
          value={maxPrice}
          onChange={(e) => onChange({ maxPrice: Number(e.target.value) || "" })}
          placeholder="e.g. 800"
        />
      </div>

      {/* Search */}
      <div>
        <label className="block text-sm font-medium">Search</label>
        <input
          className="mt-1 w-full border rounded-xl p-2"
          value={query}
          onChange={(e) => onChange({ query: e.target.value })}
          placeholder="try: dress, denim"
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Mobile filter toggle */}
      <div className="flex justify-end md:hidden mb-4">
        <button
          className="flex items-center gap-2 border px-3 py-2 rounded-xl shadow-sm"
          onClick={() => setMobileOpen(true)}
        >
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* Desktop filters (always visible) */}
      <div className="hidden md:block">{FilterForm}</div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
          <aside className="bg-white w-80 h-full p-6 shadow-2xl overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Filters</h3>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>
            {FilterForm}
            <div className="mt-6">
              <button
                className="btn btn-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Apply
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
