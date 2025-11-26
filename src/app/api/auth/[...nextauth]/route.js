
// // import NextAuth from "next-auth";
// // import GoogleProvider from "next-auth/providers/google";
// // import CredentialsProvider from "next-auth/providers/credentials";
// // import bcrypt from "bcryptjs";
// // import { users } from "@/lib/users"; // shared array

// // export const authOptions = {
// //   providers: [
// //     GoogleProvider({
// //       clientId: process.env.GOOGLE_CLIENT_ID,
// //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// //     }),
// //     CredentialsProvider({
// //       name: "Credentials",
// //       credentials: {
// //         email: { label: "Email", type: "text" },
// //         password: { label: "Password", type: "password" },
// //       },
// //       async authorize(credentials) {
// //         const user = users.find(u => u.email === credentials.email);
// //         if (!user) return null;

// //         const isValid = await bcrypt.compare(credentials.password, user.passwordHash);
// //         if (!isValid) return null;

// //         return { id: user.email, name: user.name, email: user.email };
// //       },
// //     }),
// //   ],
// //   secret: process.env.NEXTAUTH_SECRET,
// //   pages: { signIn: "/login" },
// // };

// // const handler = NextAuth(authOptions);
// // export { handler as GET, handler as POST };


// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { adminAuth } from "@/lib/firebaseAdmin";
// import bcrypt from "bcryptjs";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" ,  placeholder: "example@gmail.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         try {
//           // Firebase: signInWithEmailAndPassword
//           const userRecord = await adminAuth.getUserByEmail(credentials.email);

//           // Check password (hashed in Firebase? If plain password, use custom hashing)
//           // For demo: allow login if user exists (Firebase handles password)
//           return { id: userRecord.uid, name: userRecord.displayName || credentials.email, email: userRecord.email };
//         } catch (error) {
//           console.log("Login failed:", error.message);
//           return null;
//         }
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: { signIn: "/login" },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          const user = userCredential.user;

          if (!user) return null;

          return {
            id: user.uid,
            name: user.displayName || user.email,
            email: user.email,
          };
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // login page route
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
