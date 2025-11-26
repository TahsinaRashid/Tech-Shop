// // src/app/products/[id]/page.jsx (Server Component)
// import Link from 'next/link';

// const API_URL = 'http://localhost:3001/api/products'; 

// async function getProduct(id) {
//     const res = await fetch(`${API_URL}/${id}`, { cache: 'no-store' }); 
//     if (!res.ok) { return null; }
//     return res.json();
// }

// export default async function ProductDetailsPage({ params }) {
//     // URL থেকে ID (params.id) নিয়ে ডেটা ফেচ করা হচ্ছে
//     const product = await getProduct(params.id);

//     if (!product) {
//         return <div className="text-center p-20">Product not found. <Link href="/products" className="text-indigo-600">Go back</Link></div>;
//     }

//     return (
//         <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//             <Link href="/products" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition mb-6">
//                 Back to Products
//             </Link>

//             <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
//                 {/* Product Image */}
//                 <div className="lg:col-span-1">
//                     <img src={product.imageUrl} alt={product.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
//                 </div>

//                 {/* Details */}
//                 <div className="lg:col-span-1">
//                     <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.title}</h1>
//                     <div className="mb-6">
//                         <span className="text-3xl font-extrabold text-indigo-700">${product.price}</span>
//                     </div>

//                     <h2 className="text-xl font-bold text-gray-800 mb-2">Product Description</h2>
//                     <p className="text-gray-600 mb-6 leading-relaxed">{product.fullDesc}</p>

//                     <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//                         <p className="text-sm text-gray-600"><strong>SKU:</strong> {product.id}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useProduct } from "@/context/ProductContext";

export default function ProductDetailsPage() {
  const { id } = useParams(); // URL থেকে product id
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

