import WishlistItem from "./WishlistItem";

export default function WishlistView({ items, onAdd, onRemoveWish, cart }) {
  if (items.length === 0) {
    return <p className="text-gray-600">Your wishlist is empty.</p>;
  }

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <WishlistItem
          key={item.id}
          item={item}
          onAdd={onAdd}
          onRemoveWish={onRemoveWish}
          inCart={cart.some((c) => c.id === item.id)}
        />
      ))}
    </ul>
  );
}
