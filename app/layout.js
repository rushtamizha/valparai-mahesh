import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Valparai & Topslip Tourism | Wepzite Digital",
  description: "Premium tour packages for Valparai and Topslip.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      {/* 'font-sans' will now use Quicksand if configured in tailwind.config.js */}
      <body className="flex flex-col min-h-full font-sans">
        <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}