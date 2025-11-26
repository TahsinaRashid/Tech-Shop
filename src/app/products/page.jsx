"use client";

import Link from "next/link";
import { useProduct } from "@/context/ProductContext";

export default function ProductsPage() {
  const { products } = useProduct();

  if (!products.length) {
    return <p className="text-center mt-10 text-gray-500">No products added yet.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="bg-purple-100 p-4 flex flex-col">
          {p.image ? (
            <img src={p.image} alt={p.title} className="h-48 w-full object-cover rounded mb-3" />
          ) : (
            <div className="h-48 w-full bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          <h3 className="font-semibold text-lg">{p.title}</h3>
          <p className="text-white">{p.fullDesc}</p>
          <p className="font-bold mt-2">${p.price}</p>
          <button>
            <Link href={`/products/${p.id}`} className="mt-auto text-purple-600 ">
            Details
          </Link>
          </button>
          
        </div>
      ))}
    </div>
  );
}
