// // // "use client";
// // // import { useState } from "react";
// // // import { signIn } from "next-auth/react";
// // // import { useRouter } from "next/navigation";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";



// // // export default function LoginPage() {
// // //   const router = useRouter();
// // //   const [user, setUser] = useState({ email: "", password: "" });

// // //   // Credentials login
// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     if (!user.email || !user.password) {
// // //       toast.error("Please fill all fields!");
// // //       return;
// // //     }

// // //     const res = await signIn("credentials", {
// // //       email: user.email,
// // //       password: user.password,
// // //       redirect: false,
// // //     });

// // //     if (!res.error) {
// // //       toast.success("Login successful! 🎉");
// // //       router.push("/");
// // //     } else {
// // //       toast.error("Invalid credentials!");
// // //     }
// // //   };

// // //   // Google login
// // //   const handleGoogleLogin = () => {
// // //     signIn("google", { callbackUrl: "/" });
// // //   };

// // //   return (
// // //     <div className="flex flex-col min-h-screen">


// // //       <main className="flex-grow flex items-center justify-center bg-gray-100">
// // //         <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl space-y-6">
// // //           <h2 className="text-3xl font-bold text-center">Sign In</h2>

// // //           {/* Google Login */}
// // //           <button
// // //             onClick={handleGoogleLogin}
// // //             className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700"
// // //           >
// // //             Sign in with Google
// // //           </button>

// // //           {/* Divider */}
// // //           <div className="flex items-center justify-center text-gray-400 space-x-2">
// // //             <span>──────────</span>
// // //             <span>OR</span>
// // //             <span>──────────</span>
// // //           </div>

// // //           {/* Credentials Login */}
// // //           <form onSubmit={handleLogin} className="space-y-4">
// // //             <input
// // //               type="email"
// // //               placeholder="Email"
// // //               value={user.email}
// // //               onChange={(e) => setUser({ ...user, email: e.target.value })}
// // //               className="w-full px-4 py-3 border rounded-md"
// // //               required
// // //             />
// // //             <input
// // //               type="password"
// // //               placeholder="Password"
// // //               value={user.password}
// // //               onChange={(e) => setUser({ ...user, password: e.target.value })}
// // //               className="w-full px-4 py-3 border rounded-md"
// // //               required
// // //             />
// // //             <div className="text-right text-sm text-purple-600 hover:underline">
// // //               <a href="#">Forget Password?</a>
// // //             </div>
// // //             <button className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700">
// // //               Sign in with Credentials
// // //             </button>
// // //           </form>

// // //           {/* Register Link */}
// // //           <p className="text-center text-gray-600">
// // //             Don't have an account?{" "}
// // //             <a
// // //               href="/register"
// // //               className="text-purple-600 font-semibold hover:underline"
// // //             >
// // //               Register
// // //             </a>
// // //           </p>
// // //         </div>
// // //       </main>


// // //       <ToastContainer position="top-center" />
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import { useState } from "react";
// // import { signIn } from "next-auth/react";
// // import { useRouter } from "next/navigation";

// // export default function LoginPage() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const router = useRouter();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     const res = await signIn("credentials", {
// //       redirect: false,
// //       email,
// //       password,
// //     });

// //     if (res?.error) {
// //       alert("Invalid credentials!");
// //     } else {
// //       router.push("/");
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
// //       <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
// //       <form onSubmit={handleLogin} className="flex flex-col gap-3">
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
// //           Login
// //         </button>
// //       </form>

// //       <button
// //         onClick={() => signIn("google", { callbackUrl: "/" })}
// //         className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
// //       >
// //         Sign in with Google
// //       </button>

// //       <p className="mt-3 text-center text-gray-600">
// //         Don't have an account? <a href="/register" className="text-blue-600">Register</a>
// //       </p>
// //     </div>
// //   );
// // }

// "use client";
// import { signIn } from "next-auth/react";

// export default function LoginPage() {
//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow flex flex-col gap-4">
//       <h2 className="text-2xl font-bold text-center">Login</h2>
//       <button
//         onClick={() => signIn("google", { callbackUrl: "/" })}
//         className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
//       >
//         Sign in with Google
//       </button>

//       <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
//         <input type="email" placeholder="Email" className="border px-3 py-2 rounded" required />
//         <input type="password" placeholder="Password" className="border px-3 py-2 rounded" required />
//         <button type="submit" onClick={() => signIn("credentials", { email: "demo@example.com", password: "demo123", callbackUrl: "/" })} className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//           Sign in with Credentials
//         </button>
//       </form>

//       <p className="text-center text-gray-600">
//         Don't have an account? <a href="/register" className="text-blue-600">Register</a>
//       </p>
//     </div>
//   );
// }
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
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        Sign in with Google
      </button>

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
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
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
