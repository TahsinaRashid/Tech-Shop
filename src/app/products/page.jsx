// // // // // // src/app/products/page.jsx (Server Component)
// // // // // import Link from 'next/link';

// // // // // const API_URL = 'http://localhost:3001/api/products'; 

// // // // // async function getProducts() {
// // // // //   try {
// // // // //     // Next.js Server Component তাই fetch API ব্যবহার করা হচ্ছে
// // // // //     const res = await fetch(API_URL, { cache: 'no-store' }); 
// // // // //     if (!res.ok) {
// // // // //       throw new Error("Failed to fetch products");
// // // // //     }
// // // // //     return res.json();
// // // // //   } catch (error) {
// // // // //     console.error("Data Fetch Error:", error);
// // // // //     return [];
// // // // //   }
// // // // // }

// // // // // const ProductCard = ({ product }) => (
// // // // //     <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:shadow-2xl hover:scale-[1.02] transition duration-300">
// // // // //         <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
// // // // //             {/* image URL ব্যবহার করা হচ্ছে */}
// // // // //             <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover"/>
// // // // //         </div>
// // // // //         <div className="p-4">
// // // // //             <h3 className="text-lg font-bold text-gray-900 h-6 overflow-hidden whitespace-nowrap overflow-ellipsis" title={product.title}>
// // // // //                 {product.title}
// // // // //             </h3>
// // // // //             <p className="text-sm text-gray-500 mb-2 line-clamp-2 h-10">{product.shortDesc}</p> 
// // // // //             <div className="flex justify-between items-center mt-3">
// // // // //                 <p className="text-xl font-extrabold text-indigo-600">${product.price}</p>
// // // // //                 {/* Dynamic Link to individual product page */}
// // // // //                 <Link href={`/products/${product.id}`} className="bg-indigo-500 text-white text-sm px-3 py-1 rounded-full hover:bg-indigo-600 transition">
// // // // //                     Details
// // // // //                 </Link>
// // // // //             </div>
// // // // //         </div>
// // // // //     </div>
// // // // // );

// // // // // export default async function ProductsPage() {
// // // // //     const products = await getProducts();

// // // // //     return (
// // // // //         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
// // // // //             <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Item Catalog</h1>
// // // // //             <p className="text-gray-600 mb-8">Browse the list of available products from Mock API.</p>

// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // // //                 {products.length > 0 ? (
// // // // //                     products.map((product) => (
// // // // //                         <ProductCard key={product.id} product={product} />
// // // // //                     ))
// // // // //                 ) : (
// // // // //                     <p className="text-center text-gray-500 col-span-full">No products found. Please check if Mock API is running on port 3001.</p>
// // // // //                 )}
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // export default function ProductsPage() {
// // // //   const items = Array.from({ length: 6 }).map((_, i) => ({
// // // //     id: i + 1,
// // // //     title: `Product ${i + 1}`,
// // // //     desc: "Short description for this product...",
// // // //     price: "$49",
// // // //   }));

// // // //   return (
// // // //     <div className="max-w-7xl mx-auto p-6">
// // // //       <h1 className="text-3xl font-bold mb-2">All Products</h1>
// // // //       <p className="text-gray-600 mb-6">
// // // //         Browse our collection of items.
// // // //       </p>

// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // // //         {items.map((item) => (
// // // //           <div key={item.id} className="border shadow-sm p-4 rounded-md hover:shadow-md transition">
// // // //             <div className="h-32 bg-gray-200 rounded mb-3" />
// // // //             <h2 className="font-bold text-lg">{item.title}</h2>
// // // //             <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
// // // //             <p className="font-semibold mb-3">{item.price}</p>
// // // //             <a className="text-blue-600 hover:underline" href={`/products/${item.id}`}>
// // // //               Details
// // // //             </a>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // "use client";

// // import { useProduct } from "@/context/ProductContext";

// // export default function ProductsPage() {
// //   const { products } = useProduct();

// //   return (
// //     <div className="max-w-3xl mx-auto mt-10">
// //       <h2 className="text-3xl font-bold mb-4">All Products</h2>

// //       {products.length === 0 ? (
// //         <p className="text-gray-500">No products found.</p>
// //       ) : (
// //         <div className="grid grid-cols-1 gap-4">
// //           {products.map((p, i) => (
// //             <div key={i} className="border p-4 rounded shadow">
// //               <h3 className="font-bold text-xl">{p.title}</h3>
// //               <p>{p.short}</p>
// //               <p className="text-green-700 font-semibold mt-2">Price: ${p.price}</p>

// //               {p.image && (
// //                 <img src={p.image} alt="" className="w-32 mt-2 rounded" />
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { useProduct } from "@/context/ProductContext";

// // export default function ProductsPage() {
// //   const { products } = useProduct();
// //   const [search, setSearch] = useState("");

// //   // Filter products by search term
// //   const filteredProducts = products.filter(
// //     (p) =>
// //       p.title.toLowerCase().includes(search.toLowerCase()) ||
// //       p.shortDesc.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 py-12">
// //       <h1 className="text-3xl font-bold mb-2">Our Products</h1>
// //       <p className="text-gray-600 mb-6">
// //         Explore our collection of products and find your perfect upgrade.
// //       </p>

      

// //       {/* Products Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         {filteredProducts.length === 0 && (
// //           <p className="col-span-full text-gray-500 text-center">No products found.</p>
// //         )}

// //         {filteredProducts.map((product, index) => (
// //           <div
// //             key={index}
// //             className="border rounded-lg shadow p-4 flex flex-col justify-between"
// //           >
// //             <div>
// //               <div className="h-40 bg-gray-200 mb-3 flex items-center justify-center overflow-hidden rounded">
// //                 {product.image ? (
// //                   <img
// //                     src={product.image}
// //                     alt={product.title}
// //                     className="object-cover w-full h-full"
// //                   />
// //                 ) : (
// //                   <span className="text-gray-500">No Image</span>
// //                 )}
// //               </div>
// //               <h2 className="text-xl font-semibold mb-1 truncate">{product.title}</h2>
// //               <p className="text-gray-600 text-sm line-clamp-2">{product.shortDesc}</p>
// //             </div>

// //             <div className="mt-3 flex items-center justify-between">
// //               <span className="font-bold text-purple-600">${product.price}</span>
// //               <Link
// //                 href={`/products/${index}`}
// //                 className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
// //               >
// //                 Details
// //               </Link>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import Link from "next/link";
// import { useProduct } from "@/context/ProductContext";

// export default function ProductsPage() {
//   const { products } = useProduct();
//   const productsArray = Object.values(products); // convert object to array

//   if (!productsArray.length) {
//     return <p className="text-center mt-10 text-gray-500">No products added yet.</p>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {productsArray.map((p) => (
//         <div key={p.id} className="border rounded shadow p-4 flex flex-col">
//           {p.image ? (
//             <img src={p.image} alt={p.title} className="h-48 w-full object-cover rounded mb-3" />
//           ) : (
//             <div className="h-48 w-full bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500">
//               No Image
//             </div>
//           )}
//           <h3 className="font-semibold text-lg">{p.title}</h3>
//           <p className="text-gray-600 truncate">{p.fullDesc}</p>
//           <p className="font-bold mt-2">${p.price}</p>
//           <Link href={`/products/${p.id}`} className="mt-auto text-purple-600 underline">
//             Details
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }
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
        <div key={p.id} className="border rounded shadow p-4 flex flex-col">
          {p.image ? (
            <img src={p.image} alt={p.title} className="h-48 w-full object-cover rounded mb-3" />
          ) : (
            <div className="h-48 w-full bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          <h3 className="font-semibold text-lg">{p.title}</h3>
          <p className="text-gray-600">{p.fullDesc}</p>
          <p className="font-bold mt-2">${p.price}</p>
          <Link href={`/products/${p.id}`} className="mt-auto text-purple-600 underline">
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}
