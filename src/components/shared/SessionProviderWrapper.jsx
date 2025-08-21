// "use client";

// import { SessionProvider } from "next-auth/react";

// export default function SessionProviderWrapper({ children }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }


// src/components/shared/SessionProviderWrapper.jsx
"use client";

import { SessionProvider } from "next-auth/react";

export const SessionProviderWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
