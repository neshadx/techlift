// import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import clientPromise from "./mongodb"; // your existing mongodb.js
// import { compare } from "bcryptjs";

// export const authOptions = {
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             email: credentials.email,
//             password: credentials.password,
//           }),
//         });

//         const user = await res.json();
//         if (res.ok && user) return user;
//         return null;
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.user = user;
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = token.user;
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };




import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./mongodb"; // MongoDB client
import { compare } from "bcryptjs";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise), // MongoDB adapter

  providers: [
    // 🔐 Credentials Login (demo or real login from API)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const user = await res.json();

          if (res.ok && user) return user;
          return null;
        } catch (err) {
          console.error("Authorize error:", err);
          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt", // using JWT for sessions
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

  pages: {
    signIn: "/login", // redirect to custom login page
  },
};

