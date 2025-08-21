export default function CartDrawer({ open, items, onClose, onRemove }){
  const total = items.reduce((sum,i)=> sum + i.price * i.qty, 0)
  return (
    <div className={`fixed inset-0 ${open ? '' : 'pointer-events-none'} z-40`}>
      <div className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose}/>
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Your Cart</h3>
          <button className="btn btn-outline" onClick={onClose}>Close</button>
        </div>
        {items.length===0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {items.map((it)=> (
              <div key={it.id} className="flex items-center justify-between border rounded-xl p-3">
                <div>
                  <p className="font-medium">{it.name}</p>
                  <p className="text-sm text-gray-500">Qty {it.qty} • ₹{it.price}</p>
                </div>
                <button className="btn btn-outline" onClick={() => onRemove(it.id)}>Remove</button>
              </div>
            ))}
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="font-semibold">Total</span>
              <span className="font-bold">₹{total}</span>
            </div>
            <button className="btn btn-primary w-full">Checkout</button>
          </div>
        )}
      </aside>
    </div>
  )
}