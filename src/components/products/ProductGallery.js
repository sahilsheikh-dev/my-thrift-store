import { useEffect } from "react";
import { X } from "lucide-react";

export default function ProductGallery({
  images,
  name,
  galleryIndex,
  setGalleryIndex,
  onClose,
}) {
  const handleNext = () =>
    setGalleryIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setGalleryIndex((prev) => (prev - 1 + images.length) % images.length);

  // Keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <button
        className="absolute top-6 right-6 text-white hover:text-red-400"
        onClick={onClose}
      >
        <X size={28} />
      </button>
      <div className="relative max-w-3xl w-full flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-2 text-white text-3xl px-3 py-1 hover:text-pink-400"
        >
          ‹
        </button>
        <img
          src={images[galleryIndex]}
          alt={name}
          className="max-h-[80vh] object-contain rounded-xl shadow-lg"
        />
        <button
          onClick={handleNext}
          className="absolute right-2 text-white text-3xl px-3 py-1 hover:text-pink-400"
        >
          ›
        </button>
      </div>
    </div>
  );
}
