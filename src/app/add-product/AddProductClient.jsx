"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function AddProductClient({ user }) {
  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    date: "",
    priority: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success("Product added successfully!");
      setFormData({
        title: "",
        shortDesc: "",
        fullDesc: "",
        price: "",
        date: "",
        priority: "",
        image: "",
      });
    } else {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Add Product</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 rounded"
          required
        />

        <input
          name="shortDesc"
          value={formData.shortDesc}
          onChange={handleChange}
          placeholder="Short Description"
          className="border p-2 rounded"
          required
        />

        <textarea
          name="fullDesc"
          value={formData.fullDesc}
          onChange={handleChange}
          placeholder="Full Description"
          className="border p-2 rounded"
          rows={4}
          required
        />

        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded"
          required
        />

        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          placeholder="Priority (High/Medium/Low)"
          className="border p-2 rounded"
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
