import { Heart, HeartOff } from "lucide-react";

export default function ProductWishlistButton({ wished, onToggleWish }) {
  return (
    <button
      className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md z-10"
      onClick={onToggleWish}
    >
      {wished ? (
        <Heart className="text-pink-500" />
      ) : (
        <HeartOff className="text-gray-500" />
      )}
    </button>
  );
}
