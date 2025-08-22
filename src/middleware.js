


// middleware.js (project root)
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname, search } = req.nextUrl;

  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/register");
  const isDashboard = pathname.startsWith("/dashboard");

  //  Already logged in and visiting auth pages
  if (token && isAuthPage) {
    // After REGISTER → send to Home
    if (pathname.startsWith("/register")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    // After LOGIN → send to Dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  //  Not logged in and visiting dashboard → send to login (keep callback)
  if (!token && isDashboard) {
    const url = new URL("/login", req.url);
    // preserve original destination (path + query)
    url.searchParams.set("callbackUrl", pathname + (search || ""));
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

//  Run only on these routes
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
