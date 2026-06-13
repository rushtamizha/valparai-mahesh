// import { tourPackages } from "@/data/data";
// import TourDetails from "./TourComponent";

// export async function generateMetadata({ params }) {
//   // 1. Await the params
//   const { slug } = await params;
  
//   // 2. Fetch the tour data
//   const tour = tourPackages.find((p) => p.slug === slug);

//   if (!tour) return { title: "Tour Not Found" };

//   // 3. Construct SEO-optimized data
//   const title = `${tour.title} | ${tour.duration} - Best Tour Package in India`;
//   const description = `${tour.description.slice(0, 155)}... Book your ${tour.title} tour today for just ₹${tour.basePrice}. Experience the best of ${tour.tourFrom} with our private cab services.`;

//   return {
//     title: title,
//     description: description,
//     // OpenGraph adds rich snippets for social media sharing
//     openGraph: {
//       title: title,
//       description: description,
//       type: "website",
//       images: [
//         {
//           url: tour.image || "/default-og-image.jpg",
//           width: 1200,
//           height: 630,
//           alt: tour.title,
//         },
//       ],
//     },
//     // Twitter/X card
//     twitter: {
//       card: "summary_large_image",
//       title: title,
//       description: description,
//     },
//     // Canonical link to prevent duplicate content issues
//     alternates: {
//       canonical: `/tours/${slug}`,
//     },
//   };
// }

// export default function Page({ params }) {
//   // Pass the params down to your client component
//   return <TourDetails params={params} />;
// }

import { tourPackages } from "@/data/data";
import TourDetails from "./TourComponent";

const SITE_URL = "https://valparai-mahesh.vercel.app";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const tour = tourPackages.find((p) => p.slug === slug);

  if (!tour) {
    return {
      title: "Tour Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageUrl = `${SITE_URL}/tours/${slug}`;

  const title = `${tour.title} Tour Package (${tour.duration}) | Starting ₹${tour.basePrice}`;

  const description =
    `${tour.description}. Book ${tour.title} tour package from ${tour.tourFrom}. ` +
    `Private cab, sightseeing, experienced drivers and customizable itinerary. ` +
    `Starting from ₹${tour.basePrice}.`;

  return {
    metadataBase: new URL(SITE_URL),

    title,

    description,

    keywords: [
      tour.title,
      `${tour.title} package`,
      `${tour.title} tour package`,
      `${tour.title} cab package`,
      `${tour.title} sightseeing`,
      `${tour.duration} tour`,
      `tour package from ${tour.tourFrom}`,
      "private cab tours",
      "holiday packages",
      "tour packages india",
    ],

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Your Travel Brand",
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: tour.image,
          width: 1200,
          height: 630,
          alt: `${tour.title} Tour Package`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [tour.image],
    },

    category: "Travel",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const tour = tourPackages.find((p) => p.slug === slug);

  if (!tour) {
    return <div>Tour Not Found</div>;
  }

  const pageUrl = `${SITE_URL}/tours/${slug}`;

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",

    name: tour.title,
    description: tour.description,
    image: [tour.image],
    url: pageUrl,

    provider: {
      "@type": "TravelAgency",
      name: "Your Travel Brand",
      url: SITE_URL,
    },

    offers: {
      "@type": "Offer",
      price: tour.basePrice,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tours",
        item: `${SITE_URL}/tours`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tour.title,
        item: pageUrl,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Your Travel Brand",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    areaServed: "India",
  };

  return (
    <>
      {/* TouristTrip Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(touristTripSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <TourDetails params={params} />
    </>
  );
}