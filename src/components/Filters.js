const categories = ['All','Tops','Bottoms','Dresses','Outerwear']
const sizes = ['All','S','M','L']

export default function Filters({ selected, onChange }){
  const { category, size, maxPrice, query } = selected
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 grid gap-4 md:grid-cols-4 items-end">
      <div>
        <label className="block text-sm font-medium">Category</label>
        <select className="mt-1 w-full border rounded-xl p-2" value={category} onChange={e=>onChange({category:e.target.value})}>
          {categories.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Size</label>
        <select className="mt-1 w-full border rounded-xl p-2" value={size} onChange={e=>onChange({size:e.target.value})}>
          {sizes.map(s=> <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Max Price (₹)</label>
        <input type="number" className="mt-1 w-full border rounded-xl p-2" value={maxPrice} onChange={e=>onChange({maxPrice:Number(e.target.value)||''})} placeholder="e.g. 800"/>
      </div>
      <div>
        <label className="block text-sm font-medium">Search</label>
        <input className="mt-1 w-full border rounded-xl p-2" value={query} onChange={e=>onChange({query:e.target.value})} placeholder="try: dress, denim"/>
      </div>
    </div>
  )
}