import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { headers } from "next/headers";

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") || ""; // Fallback to an empty string if undefined
  
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      {/* 
        Passing the nonce string directly to the nonce property on the body tag 
        tells Next.js to inject this token into all internal framework scripts.
      */}
      <body className="flex flex-col min-h-full font-sans" nonce={nonce}>
        <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}