import { useState } from "react";
import ProductWishlistButton from "./ProductWishlistButton";
import ProductThumbnail from "./ProductThumbnail";
import ProductInfo from "./ProductInfo";
import ProductGallery from "./ProductGallery";

export default function ProductCard({
  item,
  onAdd,
  wished,
  onToggleWish,
  inCart,
}) {
  const [thumbIndex, setThumbIndex] = useState(0); // card thumbnail
  const [galleryIndex, setGalleryIndex] = useState(0); // modal gallery
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow card-hover flex flex-col relative w-full max-w-sm mx-auto">
        {/* Wishlist Button */}
        <ProductWishlistButton
          wished={wished}
          onToggleWish={() => onToggleWish(item)}
        />

        {/* Thumbnail with arrows */}
        <ProductThumbnail
          images={item.images}
          name={item.name}
          thumbIndex={thumbIndex}
          setThumbIndex={setThumbIndex}
          onClick={() => {
            setGalleryIndex(thumbIndex);
            setGalleryOpen(true);
          }}
        />

        {/* Info */}
        <ProductInfo item={item} onAdd={() => onAdd(item)} inCart={inCart} />
      </div>

      {/* Gallery Modal */}
      {galleryOpen && (
        <ProductGallery
          images={item.images}
          name={item.name}
          galleryIndex={galleryIndex}
          setGalleryIndex={setGalleryIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
}
