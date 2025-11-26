// // // // // "use client";
// // // // // import { createContext, useContext, useState } from "react";

// // // // // const ProductContext = createContext();

// // // // // export function ProductProvider({ children }) {
// // // // //   const [products, setProducts] = useState([]);

// // // // //   const addProduct = (product) => {
// // // // //     setProducts((prev) => [...prev, product]);
// // // // //   };

// // // // //   return (
// // // // //     <ProductContext.Provider value={{ products, addProduct }}>
// // // // //       {children}
// // // // //     </ProductContext.Provider>
// // // // //   );
// // // // // }

// // // // // export const useProduct = () => useContext(ProductContext);
// // // // "use client";

// // // // import { createContext, useContext, useState } from "react";
// // // // import { toast } from "react-hot-toast";

// // // // const ProductContext = createContext();

// // // // export function ProductProvider({ children }) {
// // // //   const [products, setProducts] = useState([]);

// // // //   const addProduct = (product) => {
// // // //     setProducts((prev) => [...prev, product]);
// // // //     toast.success("Product added successfully!");
// // // //   };

// // // //   return (
// // // //     <ProductContext.Provider value={{ products, addProduct }}>
// // // //       {children}
// // // //     </ProductContext.Provider>
// // // //   );
// // // // }

// // // // export const useProduct = () => useContext(ProductContext);
// // // // ProductContext.jsx
// // // import { createContext, useContext, useState } from "react";
// // // import { toast } from "react-hot-toast";

// // // const ProductContext = createContext();

// // // export function ProductProvider({ children }) {
// // //   const [products, setProducts] = useState([]);

// // //   const addProduct = (product) => {
// // //     // প্রতিটা product কে unique id দাও
// // //     const newProduct = { ...product, id: Date.now().toString() };
// // //     setProducts((prev) => [...prev, newProduct]);
// // //     toast.success("Product added successfully!");
// // //   };

// // //   return (
// // //     <ProductContext.Provider value={{ products, addProduct }}>
// // //       {children}
// // //     </ProductContext.Provider>
// // //   );
// // // }

// // // export const useProduct = () => useContext(ProductContext);
// // "use client";

// // import { createContext, useContext, useState, useEffect } from "react";
// // import { toast } from "react-hot-toast";

// // const ProductContext = createContext();

// // export function ProductProvider({ children }) {
// //   const [products, setProducts] = useState([]);

// //   // Load products from localStorage on mount
// //   useEffect(() => {
// //     const stored = localStorage.getItem("products");
// //     if (stored) setProducts(JSON.parse(stored));
// //   }, []);

// //   // Save products to localStorage whenever changed
// //   useEffect(() => {
// //     localStorage.setItem("products", JSON.stringify(products));
// //   }, [products]);

// //   const addProduct = (product) => {
// //     const newProduct = { ...product, id: Date.now().toString() };
// //     setProducts((prev) => [...prev, newProduct]);
// //     toast.success("Product added successfully!");
// //   };

// //   const deleteProduct = (id) => {
// //     setProducts((prev) => prev.filter((p) => p.id !== id));
// //     toast.success("Product deleted successfully!");
// //   };

// //   return (
// //     <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
// //       {children}
// //     </ProductContext.Provider>
// //   );
// // }

// // export const useProduct = () => useContext(ProductContext);
// "use client";

// import { createContext, useContext, useState, useEffect } from "react";
// import { toast } from "react-hot-toast";

// const ProductContext = createContext();

// export function ProductProvider({ children }) {
//   const [products, setProducts] = useState([]);

//   // Load products from localStorage on mount
//   useEffect(() => {
//     const stored = localStorage.getItem("products");
//     if (stored) setProducts(JSON.parse(stored));
//   }, []);

//   // Save products to localStorage whenever changed
//   useEffect(() => {
//     localStorage.setItem("products", JSON.stringify(products));
//   }, [products]);

//   const addProduct = (product) => {
//     const newProduct = { ...product, id: Date.now().toString() }; // unique id
//     setProducts((prev) => [...prev, newProduct]);
//     toast.success("Product added successfully!");
//   };

//   const deleteProduct = (id) => {
//     setProducts((prev) => prev.filter((p) => p.id !== id));
//     toast.success("Product deleted successfully!");
//   };

//   return (
//     <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
//       {children}
//     </ProductContext.Provider>
//   );
// }

// export const useProduct = () => useContext(ProductContext);
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  // Load products from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  // Save products to localStorage whenever changed
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    // Ensure each product has a unique ID
    const newProduct = { ...product, id: Date.now().toString() };
    setProducts((prev) => [...prev, newProduct]);
    toast.success("Product added successfully!");
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    toast.success("Product deleted successfully!");
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => useContext(ProductContext);
