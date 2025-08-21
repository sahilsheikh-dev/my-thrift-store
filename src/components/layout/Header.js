import { Heart, ShoppingBag } from "lucide-react";

export default function Header({
  onOpenCart,
  onOpenWishlist,
  cartCount,
  wishCount,
}) {
  return (
    <header className="w-full bg-pink-200/60 backdrop-blur border-b border-pink-200 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-brand-800">
          Girl's Thrift Store
        </h1>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Wishlist */}

          <button
            className="btn btn-outline relative p-2 rounded-full hover:bg-pink-100 transition md:px-3 md:py-1 md:border md:rounded-xl"
            onClick={onOpenWishlist}
            aria-label="Open Wishlist"
          >
            <Heart className="w-6 h-6 text-pink-600" />
            {wishCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishCount}
              </span>
            )}
            <span className="hidden md:inline ml-2">Wishlist</span>
          </button>

          {/* Cart */}
          <button
            className="btn btn-outline relative p-2 rounded-full hover:bg-pink-100 transition md:px-3 md:py-1 md:border md:rounded-xl"
            onClick={onOpenCart}
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-6 h-6 text-pink-600" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
            <span className="hidden md:inline ml-2">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
