export default function ProductThumbnail({
  images,
  name,
  thumbIndex,
  setThumbIndex,
  onClick,
}) {
  const handleNext = (e) => {
    e.stopPropagation();
    setThumbIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = (e) => {
    e.stopPropagation();
    setThumbIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-64 overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={images[thumbIndex]}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {images.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-1 rounded-full text-gray-700 hover:bg-white"
            onClick={handlePrev}
          >
            ‹
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-1 rounded-full text-gray-700 hover:bg-white"
            onClick={handleNext}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
