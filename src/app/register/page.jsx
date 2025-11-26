// // // "use client";
// // // import { useState } from "react";
// // // import { useRouter } from "next/navigation";

// // // export default function RegisterPage() {
// // //   const router = useRouter();
// // //   const [form, setForm] = useState({ name: "", email: "", password: "" });

// // //   const handleRegister = (e) => {
// // //     e.preventDefault();
// // //     alert("Account created successfully!");
// // //     router.push("/login");
// // //   };

// // //   return (
// // //     <section className="flex items-center justify-center min-h-screen bg-gray-100">
// // //       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
// // //         <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

// // //         <form onSubmit={handleRegister} className="space-y-4">
// // //           <input
// // //             type="text"
// // //             placeholder="Full Name"
// // //             value={form.name}
// // //             onChange={(e) => setForm({ ...form, name: e.target.value })}
// // //             className="w-full px-4 py-3 border rounded-md"
// // //           />
// // //           <input
// // //             type="email"
// // //             placeholder="Email"
// // //             value={form.email}
// // //             onChange={(e) => setForm({ ...form, email: e.target.value })}
// // //             className="w-full px-4 py-3 border rounded-md"
// // //           />
// // //           <input
// // //             type="password"
// // //             placeholder="Password"
// // //             value={form.password}
// // //             onChange={(e) => setForm({ ...form, password: e.target.value })}
// // //             className="w-full px-4 py-3 border rounded-md"
// // //           />
// // //           <button className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700">
// // //             Register
// // //           </button>
// // //         </form>

// // //         <p className="text-center mt-6 text-gray-600">
// // //           Already have an account?{" "}
// // //           <a href="/login" className="text-purple-600 font-semibold">
// // //             Login
// // //           </a>
// // //         </p>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import bcrypt from "bcryptjs";

// // let users = []; // same in-memory users array (demo)

// // export default function RegisterPage() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const router = useRouter();

// //   const handleRegister = async (e) => {
// //     e.preventDefault();

// //     // hash password
// //     const passwordHash = await bcrypt.hash(password, 10);
// //     users.push({ name, email, passwordHash });

// //     alert("Registered successfully! Please login.");
// //     router.push("/login");
// //   };

// //   return (
// //     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
// //       <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
// //       <form onSubmit={handleRegister} className="flex flex-col gap-3">
// //         <input
// //           type="text"
// //           placeholder="Full Name"
// //           value={name}
// //           onChange={e => setName(e.target.value)}
// //           className="border px-3 py-2 rounded"
// //           required
// //         />
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={e => setEmail(e.target.value)}
// //           className="border px-3 py-2 rounded"
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={e => setPassword(e.target.value)}
// //           className="border px-3 py-2 rounded"
// //           required
// //         />
// //         <button
// //           type="submit"
// //           className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// //         >
// //           Register
// //         </button>
// //       </form>
// //       <p className="mt-3 text-center text-gray-600">
// //         Already have an account? <a href="/login" className="text-blue-600">Login</a>
// //       </p>
// //     </div>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import bcrypt from "bcryptjs";
// import { users } from "@/lib/users"; // shared array

// export default function RegisterPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     const passwordHash = await bcrypt.hash(password, 10);
//     users.push({ name, email, passwordHash }); // save in shared array

//     alert("Registered successfully! Please login.");
//     router.push("/login");
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
//       <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
//       <form onSubmit={handleRegister} className="flex flex-col gap-3">
//         <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="border px-3 py-2 rounded" required />
//         <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border px-3 py-2 rounded" required />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border px-3 py-2 rounded" required />
//         <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
//       </form>
//       <p className="mt-3 text-center text-gray-600">
//         Already have an account? <a href="/login" className="text-blue-600">Login</a>
//       </p>
//     </div>
//   );
// }

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
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="border px-3 py-2 rounded" required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border px-3 py-2 rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border px-3 py-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
      </form>
      <p className="mt-3 text-center text-gray-600">
        Already have an account? <a href="/login" className="text-blue-600">Login</a>
      </p>
    </div>
  );
}

