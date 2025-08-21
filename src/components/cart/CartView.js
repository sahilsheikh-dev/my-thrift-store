import CartItem from "./CartItem";

export default function CartView({ items, onRemove, onCheckout }) {
  const total = items.reduce((sum, i) => sum + i.price, 0); // qty always 1

  if (items.length === 0) {
    return <p className="text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="space-y-4">
      {items.map((it) => (
        <CartItem key={it.id} item={it} onRemove={onRemove} />
      ))}
      <div className="flex items-center justify-between pt-4 border-t">
        <span className="font-semibold">Total</span>
        <span className="font-bold">₹{total}</span>
      </div>
      <button className="btn btn-primary w-full" onClick={onCheckout}>
        Checkout
      </button>
    </div>
  );
}
