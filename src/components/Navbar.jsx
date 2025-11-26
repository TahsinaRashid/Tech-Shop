// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { data: session } = useSession();
//   const isLoggedIn = !!session;
//   const router = useRouter();

//   return (
//     <nav className="w-full sticky top-0 bg-purple-200 shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

//         <div className="text-2xl font-bold text-blue-600">
//           <Link href="/">
//             <img
//               src="/Tech-Shop.png" 
//               alt="Logo"
//               className="h-10 w-auto rounded-full" 
//             />
//           </Link>
//         </div>

//         {/* MIDDLE LINKS */}
//         <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           <Link href="/">Home</Link>
//           <Link href="/products">Products</Link>
//           <Link href="/about">About</Link>
//           <Link href="/contact">Contact</Link>
//         </div>

//         {/* RIGHT */}
//         <div className="hidden md:flex space-x-4 items-center">
//           {isLoggedIn ? (
//             <div className="relative group">
//               <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
//                 {session.user?.name ?? session.user?.email} ⬇
//               </button>

//               <div className="absolute right-0 mt-2 w-44 bg-white shadow-md rounded-md p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
//                 <p className="px-3 py-2 text-gray-700 border-b">{session.user?.email}</p>
//                 <Link href="/add-product" className="block px-3 py-2 hover:bg-gray-100 rounded">Add Product</Link>
//                 <Link href="/manage-products" className="block px-3 py-2 hover:bg-gray-100 rounded">Manage Products</Link>
//                 <button
//                   onClick={() => signOut({ callbackUrl: "/" })}
//                   className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-500 rounded"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <button
//                 onClick={() => router.push("/login")}
//                 className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => router.push("/register")}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//               >
//                 Register
//               </button>
//             </>
//           )}
//         </div>

//         {/* MOBILE HAMBURGER */}
//         <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
//       </div>

//       {/* MOBILE MENU */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md p-4 space-y-3 flex flex-col">
//           <Link href="/">Home</Link>
//           <Link href="/products">Products</Link>
//           <Link href="/about">About</Link>
//           <Link href="/contact">Contact</Link>

//           {isLoggedIn ? (
//             <>
//               <Link href="/add-product" className="block">Add Product</Link>
//               <Link href="/manage-products" className="block">Manage Products</Link>
//               <button onClick={() => signOut({ callbackUrl: "/" })} className="text-red-500">Logout</button>
//             </>
//           ) : (
//             // <>
//             //   <button onClick={() => router.push("/login")} className="block text-left">Login</button>
//             //   <button onClick={() => router.push("/register")} className="block text-left">Register</button>
//             // </>
//             <><button onClick={() => router.push("/login")}>Login</button>
// <button onClick={() => router.push("/register")}>Register</button>
// </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const isLoggedIn = !!session;
  const router = useRouter();

  return (
    <nav className="w-full sticky top-0 bg-purple-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">
            <img src="/Tech-Shop.png" alt="Logo" className="h-10 w-auto rounded-full" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          {isLoggedIn ? (
            <div className="relative group">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                {session.user?.name ?? session.user?.email} ⬇
              </button>
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-md rounded-md p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                <p className="px-3 py-2 text-gray-700 border-b">{session.user?.email}</p>
                <Link href="/add-product" className="block px-3 py-2 hover:bg-gray-100 rounded">Add Product</Link>
                <Link href="/manage-products" className="block px-3 py-2 hover:bg-gray-100 rounded">Manage Products</Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-500 rounded"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => router.push("/login")}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/register")}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Register
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-3 flex flex-col">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {isLoggedIn ? (
            <>
              <Link href="/add-product" className="block">Add Product</Link>
              <Link href="/manage-products" className="block">Manage Products</Link>
              <button onClick={() => signOut({ callbackUrl: "/" })} className="text-red-500">Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => router.push("/login")} className="block text-left">Login</button>
              <button onClick={() => router.push("/register")} className="block text-left">Register</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
