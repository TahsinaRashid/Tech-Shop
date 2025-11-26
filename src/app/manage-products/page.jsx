// "use client";

// import { useEffect } from "react";
// import { useProduct } from "@/context/ProductContext";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function ManageProductsPage() {
//   const { products, deleteProduct } = useProduct();
//   const router = useRouter();
//   const { data: session } = useSession();

//   // Protected Page: redirect if not logged in
//   useEffect(() => {
//     if (!session) {
//       router.push("/login");
//     }
//   }, [session, router]);

//   const handleDelete = (index) => {
//     deleteProduct(index);
//     toast.success("Product deleted successfully!");
//   };

//   if (!session) return null; // Prevent flicker

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-4">
//       <ToastContainer position="top-center" />
//       <h2 className="text-3xl font-bold mb-6">Manage Products</h2>

//       {products.length === 0 ? (
//         <p className="text-gray-500">No products available.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border rounded-lg">
//             <thead className="bg-purple-600 text-white">
//               <tr>
//                 <th className="px-4 py-2">#</th>
//                 <th className="px-4 py-2">Title</th>
//                 <th className="px-4 py-2">Short Description</th>
//                 <th className="px-4 py-2">Price</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               {products.map((p, i) => (
//                 <tr key={i} className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-2">{i + 1}</td>
//                   <td className="px-4 py-2">{p.title}</td>
//                   <td className="px-4 py-2">{p.short}</td>
//                   <td className="px-4 py-2">${p.price}</td>
//                   <td className="px-4 py-2 flex gap-2">
//                     <button
//                       className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                       onClick={() => alert(JSON.stringify(p, null, 2))}
//                     >
//                       View
//                     </button>
//                     <button
//                       className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//                       onClick={() => handleDelete(i)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";
import { useProduct } from "@/context/ProductContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function ManageProductsPage() {
  const { products, deleteProduct } = useProduct();
  const router = useRouter();
  const { data: session } = useSession();

  // Protected Page: redirect if not logged in
  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  const handleDelete = (id) => {
    deleteProduct(id);
    toast.success("Product deleted successfully!");
  };

  if (!session) return null; // Prevent flicker

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <ToastContainer position="top-center" />
      <h2 className="text-3xl font-bold mb-6">Manage Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Short Description</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products.map((p, i) => (
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{p.title}</td>
                  <td className="px-4 py-2">{p.short}</td>
                  <td className="px-4 py-2">${p.price}</td>
                  <td className="px-4 py-2 flex gap-2">
                    {/* Link to details page with product id */}
                    <Link
                      href={`/products/${p.id}`}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      View
                    </Link>

                    <button
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
