// import { NextResponse } from "next/server";

// export function middleware(request) {
//   // 1. Generate a random nonce for script authentication
//   const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

//   // 2. Content Security Policy with Google Fonts allowed
//   const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${
//       process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ""
//     };
//     style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
//     font-src 'self' data: https://fonts.gstatic.com;
//     img-src 'self' blob: data: https:;
//     video-src 'self' blob: data: https:;
//     connect-src 'self' https:;
//     frame-src 'self' https://www.google.com https://maps.google.com;
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     upgrade-insecure-requests;
//   `.replace(/\s{2,}/g, ' ').trim();

//   // 3. Set the request headers so Next.js can read the nonce in Server Components
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set("x-nonce", nonce);
//   requestHeaders.set("Content-Security-Policy", cspHeader);

//   // 4. Instantiate the response and attach the CSP header
//   const response = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
  
//   response.headers.set("Content-Security-Policy", cspHeader);
//   return response;
// }

// // Ensure the middleware runs on all page routes, excluding static assets and APIs
// export const config = {
//   matcher: [
//     {
//       source: '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)',
//       missing: [
//         { type: 'header', key: 'next-router-prefetch' },
//         { type: 'header', key: 'purpose', value: 'prefetch' },
//       ],
//     },
//   ],
// };

import { NextResponse } from "next/server";

export function middleware(request) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${
      process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""
    };
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' data: https://fonts.gstatic.com;
    img-src 'self' blob: data: https:;
    connect-src 'self' https:;
    frame-src 'self' https://www.google.com https://maps.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(
    "Content-Security-Policy",
    cspHeader
  );

  return response;
}

export const config = {
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)",
      missing: [
        {
          type: "header",
          key: "next-router-prefetch",
        },
        {
          type: "header",
          key: "purpose",
          value: "prefetch",
        },
      ],
    },
  ],
};