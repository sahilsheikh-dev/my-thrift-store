import { useEffect, useMemo, useState } from "react";
import Header from "../components/layout/Header.js";
import Hero from "../components/layout/Hero.js";
import Filters from "../components/products/Filters.js";
import ProductCard from "../components/products/ProductCard.js";
import CartDrawer from "../components/cart/CartDrawer.js";
import WishlistDrawer from "../components/wishlist/WishlistDrawer.js";
import { products as all } from "../data/products.js";
import Testimonials from "../components/layout/Testimonials.js"; // ✅ Import Testimonials component

function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  // ✅ Load from LocalStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem("wishes");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Persist changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);

  const [filters, setFilters] = useState({
    category: "All",
    size: "All",
    maxPrice: "",
    query: "",
  });

  const filtered = useMemo(() => {
    return all.filter((p) => {
      if (filters.category !== "All" && p.category !== filters.category)
        return false;
      if (filters.size !== "All" && p.size !== filters.size) return false;
      if (filters.maxPrice !== "" && p.price > Number(filters.maxPrice))
        return false;
      if (
        filters.query &&
        !p.name.toLowerCase().includes(filters.query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [filters]);

  const onAdd = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev; // only one piece
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image, // ✅ FIX: save image
          qty: 1,
        },
      ];
    });
  };

  const onRemove = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const onToggleWish = (item) => {
    setWishes((prev) =>
      prev.includes(item.id)
        ? prev.filter((id) => id !== item.id)
        : [...prev, item.id]
    );
  };

  const onRemoveWish = (id) =>
    setWishes((prev) => prev.filter((i) => i !== id));

  const handleFilterChange = (patch) =>
    setFilters((prev) => ({ ...prev, ...patch }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        cartCount={cart.length}
        wishCount={wishes.length}
      />
      <Hero />
      <Filters selected={filters} onChange={handleFilterChange} />

      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            onAdd={onAdd}
            wished={wishes.includes(item.id)}
            onToggleWish={onToggleWish}
            inCart={cart.some((c) => c.id === item.id)}
          />
        ))}
      </main>

      {/* ✅ Add testimonials below product grid */}
      <Testimonials />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onRemove={onRemove}
      />

      <WishlistDrawer
        open={wishlistOpen}
        wishes={wishes}
        products={all}
        onClose={() => setWishlistOpen(false)}
        onAdd={onAdd}
        onRemoveWish={onRemoveWish}
        cart={cart} // ✅ pass cart here
      />
    </div>
  );
}

export default Home;
