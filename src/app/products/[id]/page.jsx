"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useProduct } from "@/context/ProductContext";

export default function ProductDetailsPage() {
  const { id } = useParams(); 
  const { products } = useProduct(); // Context থেকে products
  const product = products.find((p) => p.id === id); // ID দিয়ে খোঁজা

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">This page is under construction.</p>
        <Link href="/products" className="mt-4 inline-block text-blue-600 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Large Image / Banner */}
      <div className="mb-6">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      {/* Product Title */}
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

      {/* Full Description */}
      <p className="text-gray-600 mb-4">{product.fullDesc}</p>

      {/* Meta Info */}
      <div className="mb-6 space-y-1">
        <p><strong>Price:</strong> ${product.price}</p>
        {product.date && <p><strong>Date:</strong> {product.date}</p>}
        {product.priority && <p><strong>Priority:</strong> {product.priority}</p>}
      </div>

      {/* Back Button */}
      <Link
        href="/products"
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Back to Products
      </Link>
    </div>
  );
}

