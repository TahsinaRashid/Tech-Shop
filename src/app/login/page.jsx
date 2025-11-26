"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialsLogin = (e) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div className=" max-w-md mx-auto mt-5 p-6 flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        Sign in with Google
      </button>
      <p className="text-center">Or</p>

      <form onSubmit={handleCredentialsLogin} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="border px-3 py-2 rounded"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-3 py-2 rounded"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Sign in with Credentials
        </button>
      </form>

      <p className="text-center text-gray-600">
        Don't have an account? <a href="/register" className="text-blue-600">Register</a>
      </p>
    </div>
  );
}
