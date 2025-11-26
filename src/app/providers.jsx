
"use client";
import { SessionProvider } from "next-auth/react";
import { ProductProvider } from "@/context/ProductContext";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <ProductProvider>
        <Navbar />
        <Toaster position="top-center" />
        {children}
      </ProductProvider>
    </SessionProvider>
  );
}
