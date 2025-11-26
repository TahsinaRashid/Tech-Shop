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

        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Add Product
        </button>
      </form>
    </div>
  );
}
