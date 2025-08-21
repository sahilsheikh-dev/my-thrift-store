import { X } from "lucide-react";

export default function CartItem({ item, onRemove }) {
  return (
    <div className="border rounded-xl p-3 relative">
      {/* Remove (X) icon */}
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
        onClick={() => onRemove(item.id)}
        aria-label="Remove from cart"
      >
        <X size={18} />
      </button>

      {/* Top row: image + details */}
      <div className="flex items-center gap-3">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-lg"
          />
        )}
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-500">₹{item.price}</p>
        </div>
      </div>
    </div>
  );
}
