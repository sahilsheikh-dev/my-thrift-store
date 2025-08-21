import WishlistView from "./WishlistView";

export default function WishlistDrawer({
  open,
  wishes,
  products,
  onClose,
  onAdd,
  onRemoveWish,
  cart,
}) {
  const wishItems = products.filter((p) => wishes.includes(p.id));

  return (
    <div className={`fixed inset-0 ${open ? "" : "pointer-events-none"} z-40`}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Your Wishlist</h3>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>

        <WishlistView
          items={wishItems}
          onAdd={onAdd}
          onRemoveWish={onRemoveWish}
          cart={cart}
        />
      </aside>
    </div>
  );
}
