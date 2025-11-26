// // // // // app/add-product/page.jsx (server component)
// // // // import { getServerSession } from "next-auth";
// // // // import { auth } from "@/lib/firebaseConfig"; // নিশ্চিত করো path ঠিক আছে
// // // // import { redirect } from "next/navigation";

// // // // export default async function AddProductPage() {
// // // //   const session = await getServerSession(auth);

// // // //   if (!session) {
// // // //     redirect("/login");
// // // //   }

// // // //   return (
// // // //     <div className="max-w-3xl mx-auto p-6">
// // // //       <h1 className="text-2xl font-bold mb-4">Add Product</h1>
// // // //       {/* এখানে তোমার form UI বা add-product client component যোগ করবে */}
// // // //       <p>তোমার protected form এখানে থাকবে (Session user: {session.user?.email})</p>
// // // //     </div>
// // // //   );
// // // // }
// // // // /app/add-product/page.jsx
// // //  // next-auth helper

// // // import { auth } from "firebase-admin";
// // // import AddProductClient from "./AddProductClient";

// // // export default async function AddProductPage() {
// // //   const session = await auth();

// // //   // Not logged in → redirect
// // //   if (!session) {
// // //     return (
// // //       <div className="text-center mt-20">
// // //         <meta httpEquiv="refresh" content="0; url=/login" />
// // //         <p>Redirecting to login...</p>
// // //       </div>
// // //     );
// // //   }

// // //   return <AddProductClient user={session.user} />;
// // // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import { auth, db } from "@/lib/firebaseConfig";
// // import { onAuthStateChanged } from "firebase/auth";
// // import { addDoc, collection } from "firebase/firestore";
// // import { useRouter } from "next/navigation";
// // import toast from "react-hot-toast";

// // export default function AddProductPage() {
// //   const router = useRouter();
// //   const [user, setUser] = useState(null);

// //   // Protect Route
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       if (!currentUser) {
// //         router.push("/login"); // redirect if not logged in
// //       } else {
// //         setUser(currentUser);
// //       }
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   // Form states
// //   const [title, setTitle] = useState("");
// //   const [shortDesc, setShortDesc] = useState("");
// //   const [fullDesc, setFullDesc] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [imageUrl, setImageUrl] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       await addDoc(collection(db, "products"), {
// //         title,
// //         shortDesc,
// //         fullDesc,
// //         price,
// //         imageUrl,
// //         createdBy: user?.email,
// //         createdAt: new Date(),
// //       });

// //       toast.success("Product added successfully!");
// //       router.push("/products");
// //     } catch (error) {
// //       toast.error("Failed to add product");
// //       console.log(error);
// //     }
// //   };

// //   if (!user) {
// //     return <p className="text-center mt-10">Checking authentication...</p>;
// //   }

// //   return (
// //     <div className="max-w-xl mx-auto p-6 mt-10 border rounded shadow">
// //       <h2 className="text-2xl font-bold mb-4">Add Product</h2>

// //       <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Product Title"
// //           className="border p-2 rounded"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           required
// //         />

// //         <input
// //           type="text"
// //           placeholder="Short Description"
// //           className="border p-2 rounded"
// //           value={shortDesc}
// //           onChange={(e) => setShortDesc(e.target.value)}
// //           required
// //         />

// //         <textarea
// //           placeholder="Full Description"
// //           className="border p-2 rounded"
// //           value={fullDesc}
// //           onChange={(e) => setFullDesc(e.target.value)}
// //           required
// //         />

// //         <input
// //           type="number"
// //           placeholder="Price"
// //           className="border p-2 rounded"
// //           value={price}
// //           onChange={(e) => setPrice(e.target.value)}
// //           required
// //         />

// //         <input
// //           type="text"
// //           placeholder="Image URL (optional)"
// //           className="border p-2 rounded"
// //           value={imageUrl}
// //           onChange={(e) => setImageUrl(e.target.value)}
// //         />

// //         <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
// //           Add Product
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import { auth, db } from "@/lib/firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";
// import { addDoc, collection } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import toast, { Toaster } from "react-hot-toast";

// export default function AddProductPage() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);

//   const [productData, setProductData] = useState({
//     title: "",
//     shortDesc: "",
//     fullDesc: "",
//     price: "",
//     date: "",
//     priority: "",
//     image: "",
//   });

//   // Check auth state
//   useEffect(() => {
//     onAuthStateChanged(auth, (currentUser) => {
//       if (!currentUser) {
//         router.push("/login"); // Redirect if not logged in
//       } else {
//         setUser(currentUser);
//       }
//     });
//   }, []);

//   // Handle form input change
//   const handleChange = (e) => {
//     setProductData({
//       ...productData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Submit form → save to Firestore
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await addDoc(collection(db, "products"), {
//         ...productData,
//         createdAt: new Date(),
//         addedBy: user?.email,
//       });

//       toast.success("Product added successfully!");

//       // Reset form
//       setProductData({
//         title: "",
//         shortDesc: "",
//         fullDesc: "",
//         price: "",
//         date: "",
//         priority: "",
//         image: "",
//       });

//       // Optional redirect:
//       // router.push("/products");

//     } catch (err) {
//       toast.error("Error adding product!");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 mt-10 border rounded shadow">
//       <Toaster />
//       <h2 className="text-3xl font-bold text-center mb-6">Add Product</h2>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//         <input
//           name="title"
//           placeholder="Product Title"
//           className="border p-2 rounded"
//           value={productData.title}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="shortDesc"
//           placeholder="Short Description"
//           className="border p-2 rounded"
//           value={productData.shortDesc}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="fullDesc"
//           placeholder="Full Description"
//           className="border p-2 rounded h-32"
//           value={productData.fullDesc}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="price"
//           type="number"
//           placeholder="Price"
//           className="border p-2 rounded"
//           value={productData.price}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="date"
//           type="date"
//           className="border p-2 rounded"
//           value={productData.date}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="priority"
//           placeholder="Priority (1-10)"
//           className="border p-2 rounded"
//           value={productData.priority}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="image"
//           placeholder="Image URL (optional)"
//           className="border p-2 rounded"
//           value={productData.image}
//           onChange={handleChange}
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProduct } from "@/context/ProductContext";

export default function AddProductPage() {
  const router = useRouter();
  const { addProduct } = useProduct();

  const [form, setForm] = useState({
    title: "",
    short: "",
    full: "",
    price: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct(form); // save to context
    router.push("/products"); // redirect to products page (optional)
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Short Description"
          value={form.short}
          onChange={(e) => setForm({ ...form, short: e.target.value })}
          className="border p-2 w-full"
        />

        <textarea
          placeholder="Full Description"
          value={form.full}
          onChange={(e) => setForm({ ...form, full: e.target.value })}
          className="border p-2 w-full"
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Image URL (optional)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border p-2 w-full"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}
