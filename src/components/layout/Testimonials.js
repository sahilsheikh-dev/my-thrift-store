import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        What Our Customers Say 💖
      </h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[200px]">
        {testimonials.map((item) => (
          <div className="rounded-xl overflow-hidden shadow bg-white flex items-center justify-center p-2">
            {item.type === "image" && (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-xl"
              />
            )}

            {item.type === "video" && (
              <video
                src={item.src}
                controls
                className="w-full h-full rounded-xl"
              />
            )}

            {item.type === "text" && (
              <p className="text-gray-700 text-center p-4 italic">
                “{item.content}”
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
