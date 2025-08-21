export default function ProductCard({ item, onAdd, wished, onToggleWish }){
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow card-hover flex flex-col">
      <img src={item.image} alt={item.name} className="w-full h-64 object-cover"/>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{item.category} • Size {item.size}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-brand-700 font-bold">₹{item.price}</span>
          <div className="flex gap-2">
            <button className="btn btn-outline" onClick={()=>onToggleWish(item)} aria-label="Wishlist">
              {wished ? '💖 Saved' : '🤍 Wish'}
            </button>
            <button className="btn btn-primary" onClick={()=>onAdd(item)}>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}