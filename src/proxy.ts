import { NextRequest, NextResponse } from "next/server";
import { userServices } from "./services/user.service";
import { Roles } from "./constants/constants";

export const proxy = async (request: NextRequest) => {
  const { data } = await userServices.getSession();
  const pathName = request.nextUrl.pathname;
  console.log(pathName);
  let authenticated = false;
  let isAdmin = false;

  if (data) {
    authenticated = true;
    isAdmin = data.user.role === Roles.admin;
  }
  if (!authenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (!isAdmin && pathName.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (isAdmin && pathName.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
  ],
};
