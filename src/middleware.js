import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "59106e9b-b5b9-4fca-a793-cf4ce868811e");
  requestHeaders.set("x-createxyz-project-group-id", "b19bffc1-3c45-48c6-9f3a-f54fc013ac5f");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}