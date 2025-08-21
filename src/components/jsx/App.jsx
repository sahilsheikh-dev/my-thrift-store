import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Filters from './components/Filters.jsx'
import ProductCard from './components/ProductCard.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import { products as all } from './data/products.js'

export default function App(){
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [wishes, setWishes] = useState([])
  const [filters, setFilters] = useState({ category:'All', size:'All', maxPrice:'', query:'' })

  const filtered = useMemo(()=>{
    return all.filter(p => {
      if(filters.category !== 'All' && p.category !== filters.category) return false
      if(filters.size !== 'All' && p.size !== filters.size) return false
      if(filters.maxPrice !== '' && p.price > Number(filters.maxPrice)) return false
      if(filters.query && !p.name.toLowerCase().includes(filters.query.toLowerCase())) return false
      return true
    })
  }, [filters])

  const onAdd = (item) => {
    setCart(prev => {
      const existing = prev.find(i=>i.id===item.id)
      if(existing) return prev.map(i=> i.id===item.id ? {...i, qty:i.qty+1} : i)
      return [...prev, { id:item.id, name:item.name, price:item.price, qty:1 }]
    })
  }
  const onRemove = (id) => setCart(prev => prev.filter(i=> i.id!==id))
  const onToggleWish = (item) => setWishes(prev => prev.includes(item.id) ? prev.filter(id=>id!==item.id) : [...prev, item.id])

  const handleFilterChange = (patch) => setFilters(prev => ({...prev, ...patch}))

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenCart={()=>setCartOpen(true)} cartCount={cart.reduce((n,i)=>n+i.qty,0)} />
      <Hero />
      <Filters selected={filters} onChange={handleFilterChange} />

      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map(item => (
          <ProductCard key={item.id} item={item} onAdd={onAdd} wished={wishes.includes(item.id)} onToggleWish={onToggleWish} />
        ))}
      </main>

      <footer className="mt-auto bg-pink-200 text-center py-6">
        <p className="text-gray-700">© 2025 Girl's Thrift Store • Sustainable fashion for girls only</p>
      </footer>

      <CartDrawer open={cartOpen} items={cart} onClose={()=>setCartOpen(false)} onRemove={onRemove} />
    </div>
  )
}
