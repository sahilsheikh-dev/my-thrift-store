import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    price: "₹899",
    image: "https://i.pinimg.com/1200x/f4/81/c6/f481c6933cf55fa619770cb34075c8b4.jpg",
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: "₹699",
    image: "https://i.pinimg.com/1200x/91/10/97/91109788b71fb6f327dc6204a07bf978.jpg",
  },
  {
    id: 3,
    name: "Trendy Crop Top",
    price: "₹399",
    image: "https://i.pinimg.com/1200x/0b/89/e2/0b89e2554f7106f981e79962da00d941.jpg",
  },
  {
    id: 4,
    name: "Classic High-Waist Jeans",
    price: "₹799",
    image: "https://i.pinimg.com/1200x/78/ad/d9/78add9c1010c524ba0465967517bf494.jpg",
  },
];

export default function ThriftStore() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Header */}
      <header className="p-6 bg-pink-200 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-700">Girl's Thrift Store</h1>
        <Button className="bg-pink-600 text-white hover:bg-pink-700">
          <ShoppingBag className="mr-2 h-5 w-5" /> Cart
        </Button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-pink-100 to-pink-200">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-pink-700"
       >
          Fashion Finds Just For You
        </motion.h2>
        <p className="mt-4 text-gray-600">
          Explore affordable & trendy outfits for every occasion
        </p>
        <Button className="mt-6 bg-pink-600 text-white hover:bg-pink-700">
          Shop Now
        </Button>
      </section>

      {/* Product Grid */}
      <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-2xl shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-pink-600 font-bold">{product.price}</p>
                <div className="flex justify-between mt-4">
                  <Button className="bg-pink-600 text-white hover:bg-pink-700">
                    <ShoppingBag className="mr-2 h-5 w-5" /> Buy
                  </Button>
                  <Button variant="outline" className="hover:bg-pink-100">
                    <Heart className="h-5 w-5 text-pink-600" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-pink-200 text-center py-4 mt-8">
        <p className="text-gray-700">© 2025 Girl's Thrift Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
