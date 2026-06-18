import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { headers } from "next/headers";
import { GoogleAnalytics } from '@next/third-parties/google'; // Alternative method
const siteUrl = "https://www.valparaimaheshtravels.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Valparai Tour Packages | Valparai Mahesh Travels | 431+ Reviews",
    template: "%s | Valparai Mahesh Travels",
  },

  description:
    "Valparai Tour Packages from Pollachi, Coimbatore & Chennai. 4.9★ Rated with 431+ Google Reviews. Wildlife Tours, Topslip, Parambikulam, Athirapally & Kerala Packages.",

  keywords: [
    "Valparai Tour Packages",
    "Valparai Tour Package Price",
    "Valparai Mahesh Travels",
    "Valparai Tours",
    "Pollachi Valparai Tour Package",
    "Valparai Family Tour Package",
    "Valparai Honeymoon Package",
    "Topslip Tour Package",
    "Parambikulam Tour Package",
    "Athirapally Tour Package",
    "Valparai Hotels",
    "Valparai Cab Service",
    "Valparai Travels",
    "Valparai Package From Chennai",
    "Valparai Package From Coimbatore",
  ],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Valparai Tour Packages | 431+ Reviews | Valparai Mahesh Travels",

    description:
      "Customized Valparai, Topslip, Parambikulam, Kerala & Ooty Tour Packages.",

    url: siteUrl,

    siteName: "Valparai Mahesh Travels",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: `${siteUrl}/HeroImages/valparai-tour-package.png`,
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") || "";
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",

      name: "Valparai Mahesh Travels",

      image:
        `${siteUrl}/HeroImages/valparai-tour-package.png`,

      url: siteUrl,

      telephone: "+919487424257",

      email: "valparaiholidaytours@gmail.com",

      address: {
        "@type": "PostalAddress",
        streetAddress:
          "133/Chellandiamman Kovil Street",

        addressLocality: "Valparai",

        addressRegion: "Tamil Nadu",

        postalCode: "642127",

        addressCountry: "IN",
      },

      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "431",
      },

      areaServed: [
        "Valparai",
        "Pollachi",
        "Coimbatore",
        "Tamil Nadu",
        "Kerala",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",

      name: "Valparai Tour Packages",

      touristType: [
        "Family",
        "Couples",
        "Groups",
        "Adventure Travelers",
      ],

      itinerary: {
        "@type": "ItemList",

        numberOfItems: 16,
      },
    },

    {
      "@context": "https://schema.org",

      "@type": "Hotel",

      name: "Valparai Accommodation",

      makesOffer: [
        {
          "@type": "Offer",
          name: "Super Deluxe Room",
          price: "4500",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          name: "Standard Double Room",
          price: "1500",
          priceCurrency: "INR",
        },
      ],
    },

    {
      "@context": "https://schema.org",

      "@type": "LocalBusiness",

      name: "Valparai Mahesh Travels",

      priceRange: "₹₹",

      telephone: "+919487424257",

      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "431",
      },
    },
  ];
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      
      {/* 
        Passing the nonce string directly to the nonce property on the body tag 
        tells Next.js to inject this token into all internal framework scripts.
      */}
      <body className="flex flex-col min-h-full font-sans" nonce={nonce} suppressHydrationWarning >
        <GoogleAnalytics gaId="G-H8M1ZEY840" />
        <Navbar/>
        <main className="flex-grow">
          
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}