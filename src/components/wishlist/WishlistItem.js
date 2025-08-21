import { X } from "lucide-react";

export default function WishlistDrawerItem({ item, inCart, onRemoveWish, onAdd }) {
  return (
    <li className="border rounded-xl p-3 relative flex flex-col">
      {/* Remove (X) icon */}
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
        onClick={() => onRemoveWish(item.id)}
        aria-label="Remove from wishlist"
      >
        <X size={18} />
      </button>

      {/* Image + Details */}
      <div className="flex items-center gap-3">
        {item.images && item.images.length > 0 && (
          <img
            src={item.images[0]} // ✅ use first image
            alt={item.name}
            className="w-16 h-16 object-cover rounded-lg"
          />
        )}
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-500">₹{item.price}</p>
        </div>
      </div>

      {/* Add to Cart button */}
      {!inCart && (
        <div className="flex mt-3">
          <button className="btn btn-primary w-full" onClick={() => onAdd(item)}>
            Add to Cart
          </button>
        </div>
      )}
    </li>
  );
}
