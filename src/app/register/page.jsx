"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      alert("Registered successfully! Please login.");
      router.push("/login");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="border px-3 py-2 rounded" required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border px-3 py-2 rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border px-3 py-2 rounded" required />
        <button type="submit" className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Register</button>
      </form>
      <p className="mt-3 text-center text-gray-600">
        Already have an account? <a href="/login" className="text-blue-600">Login</a>
      </p>
    </div>
  );
}

