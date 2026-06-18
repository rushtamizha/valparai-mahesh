
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

  const title = `${tour.title} `;

  const description =
    `${tour.description}. Book ${tour.title} `;

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
      siteName: "Valparai Mahesh Travels",
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