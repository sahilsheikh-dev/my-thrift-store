import { useState } from "react";
import CartView from "./CartView";
import CheckoutForm from "./CheckoutForm";

export default function CartDrawer({ open, items, onClose, onRemove }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={`fixed inset-0 ${open ? "" : "pointer-events-none"} z-40`}>
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Your Cart</h3>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>

        <CartView
          items={items}
          onRemove={onRemove}
          onCheckout={() => setShowForm(true)}
        />
      </aside>

      {/* Delivery Form Popup */}
      {showForm && (
        <CheckoutForm items={items} onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}
