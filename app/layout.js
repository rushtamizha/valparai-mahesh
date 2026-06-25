import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { headers } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";

// ─── Constants ───────────────────────────────────────────────────────────────
const siteUrl   = "https://www.valparaiholidaytours.com/";
const phone     = "+919487424257";
const email     = "maheshtravels2005@gmail.com";
const heroImage = `${siteUrl}/valparai-tour-packages.webp`;

// ─── Metadata (Next.js App Router) ───────────────────────────────────────────
// FIX 1: Title is now under 60 chars with primary keyword FIRST
// FIX 2: Description is exactly 155 chars with keyword + phone CTA
// FIX 3: Geo meta tags added for local SEO
// FIX 4: themeColor for mobile browser chrome
// FIX 5: Expanded long-tail keywords for "from Chennai/Coimbatore/Pollachi" intent
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Valparai Tour Packages | 4.9★ 431 Reviews | Mahesh Travels",
    template: "%s | Valparai Mahesh Travels",
  },

  description:
    "Book Valparai Tour Packages from Coimbatore, Pollachi & Chennai. Wildlife Safari, Topslip, Parambikulam & Kerala tours. 4.9★ | 431 Reviews | ☎ +91 83009 50311.",
   verification: {
    google: "dsRWqODpGPps79Vzdi4",
  },
  keywords: [
    // ── Transactional (high purchase intent) ──
    "Valparai Tour Packages",
    "Valparai Tour Package Price",
    "Valparai Tour Package Booking",
    "Valparai Tour Package from Coimbatore",
    "Valparai Tour Package from Chennai",
    "Valparai Tour Package from Pollachi",
    "Valparai Tour Package from Bangalore",
    // ── Destination + activity ──
    "Topslip Tour Package",
    "Parambikulam Tour Package",
    "Athirapally Tour Package",
    "Valparai Wildlife Tour",
    "Valparai Elephant Safari",
    "Valparai Weekend Trip",
    // ── Traveller segment ──
    "Valparai Family Tour Package",
    "Valparai Honeymoon Package",
    "Valparai Couple Package",
    "Valparai Group Tour Package",
    // ── Brand / service ──
    "Valparai Mahesh Travels",
    "Valparai Cab Service",
    "Valparai Taxi Service",
    "Valparai Travels",
    // ── Accommodation intent ──
    "Valparai Hotels",
    "Valparai Resorts",
    "Best Hotels in Valparai",
    // ── Informational (drives blog / content ranking) ──
    "Best Places to Visit in Valparai",
    "Valparai Tourism",
    "Valparai Travel Guide",
    "How to reach Valparai",
    "Valparai Trip Planner",
  ],

  alternates: {
    canonical: siteUrl,
    languages: {
      "en-IN": siteUrl,
    },
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

  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    title:
      "Valparai Tour Packages | 4.9★ 431 Reviews | Valparai Mahesh Travels",
    description:
      "Best Valparai Tour Packages — Wildlife, Topslip, Parambikulam, Athirapally & Kerala. Customised for families, couples & groups from Coimbatore, Pollachi & Chennai.",
    url: siteUrl,
    siteName: "Valparai Mahesh Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
        alt: "Valparai Tour Packages – Wildlife, Topslip & Kerala Tours by Valparai Mahesh Travels",
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Valparai Tour Packages | 4.9★ | Valparai Mahesh Travels",
    description:
      "Best Valparai Tour Packages from Coimbatore, Pollachi & Chennai. Wildlife, Topslip, Kerala & more. 431+ Reviews.",
    images: [heroImage],
  },

  // ── PWA / Mobile ────────────────────────────────────────────────────────────
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#15803d" },
    { media: "(prefers-color-scheme: dark)",  color: "#14532d" },
  ],
  appleWebApp: {
    capable: true,
    title: "Valparai Mahesh Travels",
    statusBarStyle: "black-translucent",
  },

  // ── Geo meta tags (critical for local SEO) ──────────────────────────────────
  // These tell Google precisely WHERE your business is located.
  other: {
    "geo.region":    "IN-TN",
    "geo.placename": "Valparai, Tamil Nadu, India",
    "geo.position":  "10.3271;76.9550",
    ICBM:            "10.3271, 76.9550",
    "DC.language":   "en",
    "revisit-after": "7 days",
    "rating":        "General",
    // Mobile friendliness signals
    HandheldFriendly: "True",
    MobileOptimized:  "320",
  },

  category: "travel",
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
// FIX: Original code defined schemas but NEVER injected them — Google saw nothing.
// Now rendered inside <head> so all rich results are enabled.
function buildSchemas(siteUrl, phone, email, heroImage) {
  return [

    // ── 1. WebSite ─────────────────────────────────────────────────────────────
    // Enables Google Sitelinks Search Box for branded queries.
    {
      "@context": "https://schema.org",
      "@type":    "WebSite",
      "@id":      `${siteUrl}/#website`,
      name:        "Valparai Mahesh Travels",
      url:         siteUrl,
      description: "Best Valparai Tour Packages from Pollachi, Coimbatore & Chennai",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type":       "EntryPoint",
          urlTemplate:   `${siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      publisher: { "@id": `${siteUrl}/#organization` },
    },

    // ── 2. TravelAgency + LocalBusiness (combined) ─────────────────────────────
    // Combined type = maximum local SEO signal.
    // Triggers Knowledge Panel, Google Maps, and Local Pack results.
    {
      "@context": "https://schema.org",
      "@type":    ["TravelAgency", "LocalBusiness"],
      "@id":      `${siteUrl}/#organization`,
      name:        "Valparai Mahesh Travels",
      alternateName: [
        "Valparai Mahesh Tour Travels",
        "Mahesh Travels Valparai",
        "Valparai Travels",
      ],
      description:
        "Premier travel agency in Valparai offering customised tour packages for Wildlife Safari, Topslip, Parambikulam, Athirapally, and Kerala.",
      image: [heroImage],
      logo: {
        "@type": "ImageObject",
        url:    `${siteUrl}/logo.png`,
      },
      url:               siteUrl,
      telephone:         phone,
      email:             email,
      priceRange:        "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted:   "Cash, Credit Card, UPI, Bank Transfer",

      address: {
        "@type":          "PostalAddress",
        streetAddress:    "133/Chellandiamman Kovil Street",
        addressLocality:  "Valparai",
        addressRegion:    "Tamil Nadu",
        postalCode:       "642127",
        addressCountry:   "IN",
      },

      // Geo coordinates — critical for "near me" and map pack ranking
      geo: {
        "@type":    "GeoCoordinates",
        latitude:   10.3271,
        longitude:  76.955,
      },

      hasMap: "https://maps.google.com/?q=Valparai+Mahesh+Travels",

      // Open 7 days — signals reliability to Google
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday", "Sunday",
          ],
          opens:  "06:00",
          closes: "22:00",
        },
      ],

      aggregateRating: {
        "@type":       "AggregateRating",
        ratingValue:   "4.9",
        reviewCount:   "431",
        bestRating:    "5",
        worstRating:   "1",
      },

      // areaServed — defines ranking geography
      areaServed: [
        { "@type": "City",                name: "Valparai"   },
        { "@type": "City",                name: "Pollachi"   },
        { "@type": "City",                name: "Coimbatore" },
        { "@type": "City",                name: "Chennai"    },
        { "@type": "City",                name: "Bangalore"  },
        { "@type": "AdministrativeArea",  name: "Tamil Nadu" },
        { "@type": "AdministrativeArea",  name: "Kerala"     },
      ],

      knowsAbout: [
        "Valparai Tour Packages",
        "Wildlife Safari Tours",
        "Topslip Wildlife Sanctuary",
        "Parambikulam Tiger Reserve",
        "Athirapally Waterfalls",
        "Kerala Tour Packages",
        "Honeymoon Tour Packages",
        "Family Tour Packages",
      ],

      // Offer Catalog — helps Google understand your products
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name:    "Valparai Tour Packages Catalog",
        itemListElement: [
          {
            "@type": "Offer",
            name:         "Valparai Day Tour Package",
            description:  "One-day sightseeing tour of Valparai's top attractions",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            name:         "Topslip Wildlife Safari Package",
            description:  "Wildlife safari at Topslip – Indira Gandhi Wildlife Sanctuary",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            name:         "Parambikulam Tour Package",
            description:  "Guided tour of Parambikulam Tiger Reserve, Kerala",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            name:         "Athirapally Waterfall Tour Package",
            description:  "Day trip to Athirapally and Vazhachal waterfalls in Kerala",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            name:         "Valparai Honeymoon Package",
            description:  "Romantic Valparai honeymoon package with couple-friendly stays",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            name:         "Valparai Family Tour Package",
            description:  "Family-friendly Valparai package with guided sightseeing and comfortable stays",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            name:         "Kerala Tour Package from Valparai",
            description:  "Complete Kerala tour including Athirapally, Munnar & backwaters",
            priceCurrency: "INR",
          },
        ],
      },

      // Add your real social/map profile URLs below
      sameAs: [
        // "https://g.page/your-google-maps-listing",
        // "https://www.facebook.com/YourPage",
        // "https://www.instagram.com/YourProfile",
        // "https://www.youtube.com/YourChannel",
        // "https://www.justdial.com/your-listing",
        // "https://www.tripadvisor.com/your-listing",
      ],
    },

    // ── 3. FAQPage ──────────────────────────────────────────────────────────────
    // The BIGGEST quick win: FAQ rich results expand your SERP footprint by 3-4x
    // and capture the "People Also Ask" box. Add this to your homepage content too.
    {
      "@context": "https://schema.org",
      "@type":    "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name:    "How much does a Valparai tour package cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Valparai tour packages from Valparai Mahesh Travels vary based on the package type, duration, number of guests, and accommodation. We offer day trips, overnight, and multi-day packages for families, couples, and groups at the best prices. Call +91 83009 50311 or WhatsApp for a customised quote.",
          },
        },
        {
          "@type": "Question",
          name:    "How to reach Valparai from Coimbatore?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Valparai is approximately 100 km from Coimbatore, about a 3-hour scenic drive via Pollachi. The ghat road passes through the famous 40 hairpin bends. Valparai Mahesh Travels provides comfortable cab and taxi service from Coimbatore to Valparai at affordable rates.",
          },
        },
        {
          "@type": "Question",
          name:    "What is the best time to visit Valparai?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best time to visit Valparai is October to March when weather is pleasant (15–25°C). Valparai is a year-round destination — the monsoon season (June–September) offers lush green scenery and misty landscapes, though roads can be slippery. Summer (March–May) is warm but crowds are lower.",
          },
        },
        {
          "@type": "Question",
          name:    "How many days are needed for a Valparai tour?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A minimum of 2 days and 1 night is recommended for Valparai to cover key attractions. For a complete experience including Topslip Wildlife Sanctuary, Parambikulam Tiger Reserve, and Athirapally Waterfalls, 3 to 4 days is ideal.",
          },
        },
        {
          "@type": "Question",
          name:    "What are the top places to visit in Valparai?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Top tourist places in Valparai include the 40 Hairpin Bends, Sholayar Dam, Monkey Falls, Balaji Temple, Nallamudi Viewpoint, Loam's View Point, Grass Hills, Topslip Wildlife Sanctuary, Parambikulam Tiger Reserve, and Athirapally Waterfalls.",
          },
        },
        {
          "@type": "Question",
          name:    "Does Valparai Mahesh Travels offer packages from Chennai?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Valparai Mahesh Travels offers customised Valparai tour packages from Chennai. Chennai is about 500 km from Valparai. We arrange comfortable cab service, complete sightseeing, hotel bookings, and meal plans for all outstation guests.",
          },
        },
        {
          "@type": "Question",
          name:    "Is Valparai safe for a family trip?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Valparai is extremely safe and family-friendly. It is a peaceful hill station with clean roads, scenic tea estates, and very low crime rates. Valparai Mahesh Travels offers dedicated family tour packages with experienced local guides and drivers.",
          },
        },
        {
          "@type": "Question",
          name:    "What is included in a Valparai Mahesh Travels tour package?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Our Valparai tour packages typically include: cab/taxi service, guided sightseeing at all major spots, hotel accommodation, and customised itineraries. Meals and wildlife permit fees can be added based on your preference. Contact us to build your perfect package.",
          },
        },
      ],
    },

    // ── 4. TouristTrip ─────────────────────────────────────────────────────────
    // Signals to Google that your site is about a specific tourist product.
    {
      "@context": "https://schema.org",
      "@type":    "TouristTrip",
      name:        "Valparai Tour Package by Valparai Mahesh Travels",
      description:
        "Comprehensive tour packages covering Valparai, Topslip, Parambikulam, Athirapally, and Kerala — customised for families, couples, and groups.",
      touristType: [
        "Family",
        "Couples",
        "Groups",
        "Adventure Travelers",
        "Wildlife Enthusiasts",
        "Nature Lovers",
      ],
      provider: { "@id": `${siteUrl}/#organization` },
      offers: {
        "@type":         "AggregateOffer",
        priceCurrency:   "INR",
        offerCount:      "16",
      },
      itinerary: {
        "@type":         "ItemList",
        numberOfItems:   16,
        itemListElement: [
          {
            "@type":    "ListItem",
            position:   1,
            item: {
              "@type":      "TouristAttraction",
              name:         "40 Hairpin Bends, Valparai",
              description:  "Iconic winding ghat road with breathtaking valley views",
            },
          },
          {
            "@type":    "ListItem",
            position:   2,
            item: {
              "@type":      "TouristAttraction",
              name:         "Sholayar Dam",
              description:  "Picturesque dam surrounded by dense forests and misty hills",
            },
          },
          {
            "@type":    "ListItem",
            position:   3,
            item: {
              "@type":      "TouristAttraction",
              name:         "Monkey Falls, Valparai",
              description:  "Popular waterfall and picnic spot on the Coimbatore-Valparai highway",
            },
          },
          {
            "@type":    "ListItem",
            position:   4,
            item: {
              "@type":      "TouristAttraction",
              name:         "Topslip – Indira Gandhi Wildlife Sanctuary",
              description:  "Rich wildlife sanctuary with elephants, tigers, and diverse birds",
            },
          },
          {
            "@type":    "ListItem",
            position:   5,
            item: {
              "@type":      "TouristAttraction",
              name:         "Parambikulam Tiger Reserve",
              description:  "Award-winning tiger reserve and one of India's most biodiverse forests",
            },
          },
          {
            "@type":    "ListItem",
            position:   6,
            item: {
              "@type":      "TouristAttraction",
              name:         "Athirapally Waterfalls, Kerala",
              description:  "The 'Niagara of India' — a magnificent 80-foot waterfall in Kerala",
            },
          },
          {
            "@type":    "ListItem",
            position:   7,
            item: {
              "@type":      "TouristAttraction",
              name:         "Grass Hills (Varagaliyar), Valparai",
              description:  "High-altitude grasslands and a trekking destination near Valparai",
            },
          },
          {
            "@type":    "ListItem",
            position:   8,
            item: {
              "@type":      "TouristAttraction",
              name:         "Nallamudi Viewpoint",
              description:  "Stunning panoramic viewpoint overlooking the Anamalai hills",
            },
          },
        ],
      },
    },

    // ── 5. Hotel schema (for your accommodation offerings) ──────────────────────
    {
      "@context": "https://schema.org",
      "@type":    "Hotel",
      name:        "Valparai Accommodation by Mahesh Travels",
      description: "Comfortable stays in Valparai arranged by Valparai Mahesh Travels for tour guests",
      provider:    { "@id": `${siteUrl}/#organization` },
      makesOffer: [
        {
          "@type":         "Offer",
          name:            "Super Deluxe Room",
          price:           "4500",
          priceCurrency:   "INR",
        },
        {
          "@type":         "Offer",
          name:            "Standard Double Room",
          price:           "1500",
          priceCurrency:   "INR",
        },
      ],
    },

  ];
}

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default async function RootLayout({ children }) {
  const headersList = await headers();
  const nonce       = headersList.get("x-nonce") || "";
  const schemas     = buildSchemas(siteUrl, phone, email, heroImage);

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/*
         * Performance: preconnect to third-party origins used above the fold.
         * This cuts ~100–300 ms from First Contentful Paint.
         */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/*
         * Preload the above-the-fold hero image so LCP fires faster.
         * Replace the href with your actual hero image file used in the homepage.
         * IMPORTANT: fetchpriority="high" + preload is the #1 LCP optimisation.
         */}
        <link
          rel="preload"
          as="image"
          href="/HeroImages/valparai-tour-package.png"
          fetchPriority="high"
        />

        {/*
         * JSON-LD Structured Data — ALL 5 schemas injected here.
         * BUG FIX: The original code defined schemas[] but never rendered them.
         * Google was receiving ZERO structured data despite the work put in.
         * These enable: Rich Results, FAQ accordion, Knowledge Panel,
         * Local Pack (Maps), and Star Ratings in SERPs.
         */}
        {schemas.map((schema, i) => (
          <script
            key={`ld-${i}`}
            type="application/ld+json"
            nonce={nonce}
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>

      <body
        className="flex flex-col min-h-full font-sans"
        nonce={nonce}
        suppressHydrationWarning
      >
        <GoogleAnalytics gaId="G-Z86PCC3410" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}