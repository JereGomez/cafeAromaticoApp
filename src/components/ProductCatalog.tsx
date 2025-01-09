"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    name: "Espresso",
    price: 2.5,
    category: "Hot Beverages",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 3.5,
    category: "Hot Beverages",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Iced Coffee",
    price: 3.0,
    category: "Cold Beverages",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Croissant",
    price: 2.0,
    category: "Snacks",
    image: "/placeholder.svg?height=200&width=200",
  },
];

const categories = ["All", "Hot Beverages", "Cold Beverages", "Snacks"];

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { toast } = useToast();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    // Here you would typically update your cart state
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`mr-4 px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-coffee-brown text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
