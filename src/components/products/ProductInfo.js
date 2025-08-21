export default function ProductInfo({ item, onAdd, inCart }) {
  return (
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="font-semibold text-lg">{item.name}</h3>
      <p className="text-gray-500 text-sm mt-1">
        {item.category} • Size {item.size}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-brand-700 font-bold">₹{item.price}</span>
        <button
          className={`btn ${
            inCart ? "bg-gray-200 text-gray-500" : "btn-primary"
          }`}
          onClick={onAdd}
          disabled={inCart}
        >
          {inCart ? "Added" : "Add"}
        </button>
      </div>
    </div>
  );
}
