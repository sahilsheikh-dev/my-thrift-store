export default function Header({ onOpenCart, onOpenWishlist, cartCount, wishCount }) {
  return (
    <header className="w-full bg-pink-200/60 backdrop-blur border-b border-pink-200 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-extrabold text-brand-800">Girl's Thrift Store</h1>
        <div className="flex items-center gap-3">
          <button className="btn btn-outline" onClick={onOpenWishlist} aria-label="Open Wishlist">
            💖 <span className="ml-2">Wishlist ({wishCount})</span>
          </button>
          <button className="btn btn-outline" onClick={onOpenCart} aria-label="Open Cart">
            🛍️ <span className="ml-2">Cart ({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  )
}
