import {
  MapPin,
  Ship,
  Waves,
  Car,
  Package,
  Home,
  Hotel,
  Info,
  Camera,
  Users,
  Star,
  Palmtree,
  Mountain,
  Briefcase,
  Heart,
  Zap,
} from "lucide-react";

export const companyConfig = {
  name: "Mahesh Tours & Travels",
  founderImg:"https://lookaside.fbsbx.com/elementpath/media/?media_id=323764547398564&version=1774609332",
  logo: "https://greentourandtravel.com/uploads/2025/12/1765815094-1763968842-1763446499_3583598_LOGO-GREEN-(1).png",
  contact: {
    phone: "+91 9626850192",
    whatsapp: "919626850192", // International format for URL linking
    email: "info@maheshtours.com", // Added missing data
  },
  address: {
    street: "133/Chellandiamman Kovil Street",
    city: "Valparai",
    state: "Tamil Nadu",
    pincode: "642127",
    country: "India",
  },
  socials: {
    facebook: "https://facebook.com/maheshtours",
    instagram: "https://instagram.com/maheshtours",
    googleMaps: "https://maps.app.goo.gl/example",
  },
  metadata: {
    foundingYear: "2000s",
    serviceAreas: ["Valparai", "Pollachi", "Kerala", "South India"],
  },
};



export const navData = [
  { name: "Home", link: "/", icon: <Home size={16} /> },
  { name: "Local Tours", link: "/valparai-local-tour-package", icon: <Waves size={16} /> },
  {
    name: "Tour Packages",
    slug: "tour-packages",
    icon: <Package size={16} />,
    items: [
      {
        name: "Wildlife Tour",
        slug: "wild-life-tour-packages",
        icon: <Camera size={14} />,
      },
      {
        name: "Honeymoon Specials",
        slug: "honeymoon-tour-packages",
        icon: <Heart size={14} />,
      },
      {
        name: "Kerala Tours",
        slug: "kerala-tour-packages",
        icon: <Ship size={14} />,
      },
      {
        name: "Hill Station Tours",
        slug: "hills-tour-packages",
        icon: <MapPin size={14} />,
      },
      {
        name: "South India Tours",
        slug: "south-india-tour-packages",
        icon: <MapPin size={14} />,
      },
      {
        name: "Valparai Specials",
        slug: "valparai-tour-packages",
        icon: <MapPin size={14} />,
      },
      {
        name: "Topslip Tours",
        slug: "topslip-tour-packages",
        icon: <Camera size={14} />,
      },
      {
        name: "Athirapally Falls",
        slug: "athirapally-tour-packages",
        icon: <Waves size={14} />,
      },
      {
        name: "Student Groups",
        slug: "students-tour-packages",
        icon: <Users size={14} />,
      },
      {
        name: "Corporate Outings",
        slug: "corporate-tour-packages",
        icon: <Briefcase size={14} />,
      },
    ],
  },
  {
    name: "Hotels",
    slug: "hotels",
    link: "/hotels",
    icon: <Hotel size={16} />,
  },
  {
    name: "Car Rentals",
    slug: "/#car-rentals",
    link: "/#car-rentals",
    icon: <Car size={16} />,
  },
  {
    name: "Valparai Guide",
    slug: "valparai",
    icon: <Info size={16} />,
    items: [
      { name: "About Valparai", slug: "valparai-about", icon: <Info size={14} /> },
      {
        name: "Top Attractions",
        slug: "attractions",
        icon: <Camera size={14} />,
      },
    ],
  },
];


export const heroData = [
  {
    id: 1,
    title: "Kerala Refined.",
    description: "Experience bespoke luxury travel. From private houseboats to mist-covered estates, we curate the soul of Kerala.",
    image: "https://mayaholidays.in/img/carousel-1.jpg",
    badge: "God's Own Country",
    tags: [
      { icon: <Waves size={14} />, label: "Backwaters" },
      { icon: <Star size={14} />, label: "Premium Stay" }
    ]
  },
  {
    id: 2,
    title: "Misty Munnar.",
    description: "Walk through emerald tea gardens and stay in colonial-style estates overlooking the Western Ghats.",
    image: "/HeroImages/valparai-tour-package.webp",
    badge: "Hill Station Special",
    tags: [
      { icon: <Palmtree size={14} />, label: "Tea Gardens" },
      { icon: <Mountain size={14} />, label: "Trekking" }
    ]
  }
];

// data/data.js
export const tourPackages = [
  {
    id: 1,
    title: "Valparai Local Tours",
    slug: "valparai-tour-package",
    duration: "1 Night 2 Days",
    basePrice: 2999,
    tourFrom: "Pollachi",
    description: "Explore the tranquil beauty of Valparai with our 1 Night 2 Days Tour Package. Enjoy visits to scenic tea plantations, mesmerizing waterfalls, and wildlife-rich forests.",
    termsConditions:[
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund."],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    itinerary: [
      {
        day: "01",
        title: "Pickup & Scenic Heights",
        activities: [
          {id:1, place:"Aliyar Dam",description:"Aliyar Dam is a scenic 81-meter high dam in the Anamalai Hills near Pollachi, Tamil Nadu, renowned for its panoramic reservoir views, landscaped terrace gardens, and boating, popular as a tranquil weekend getaway. The site is particularly famous for its spectacular sunset views over the water, nearby freshwater fish stalls, and its location on the way to the lush hill station of Valparai",placeImage:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/58/a6/aliyar-dam-reservoir.jpg?w=1200&h=-1&s=1"},
          {id:1, place:"MONKEY FALLS",description:"Aliyar Dam is a scenic 81-meter high dam in the Anamalai Hills near Pollachi, Tamil Nadu, renowned for its panoramic reservoir views, landscaped terrace gardens, and boating, popular as a tranquil weekend getaway. The site is particularly famous for its spectacular sunset views over the water, nearby freshwater fish stalls, and its location on the way to the lush hill station of Valparai",placeImage:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/58/a6/aliyar-dam-reservoir.jpg?w=1200&h=-1&s=1"},
          {id:1, place:"GRASS HILLS NATIONAL PARK",description:"Aliyar Dam is a scenic 81-meter high dam in the Anamalai Hills near Pollachi, Tamil Nadu, renowned for its panoramic reservoir views, landscaped terrace gardens, and boating, popular as a tranquil weekend getaway. The site is particularly famous for its spectacular sunset views over the water, nearby freshwater fish stalls, and its location on the way to the lush hill station of Valparai",placeImage:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/58/a6/aliyar-dam-reservoir.jpg?w=1200&h=-1&s=1"},
          {id:1, place:"CHINNAKALLAR FALLS",description:"Aliyar Dam is a scenic 81-meter high dam in the Anamalai Hills near Pollachi, Tamil Nadu, renowned for its panoramic reservoir views, landscaped terrace gardens, and boating, popular as a tranquil weekend getaway. The site is particularly famous for its spectacular sunset views over the water, nearby freshwater fish stalls, and its location on the way to the lush hill station of Valparai",placeImage:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/58/a6/aliyar-dam-reservoir.jpg?w=1200&h=-1&s=1"},
          {id:1, place:"SHOLAYAR DAM ",description:"Aliyar Dam is a scenic 81-meter high dam in the Anamalai Hills near Pollachi, Tamil Nadu, renowned for its panoramic reservoir views, landscaped terrace gardens, and boating, popular as a tranquil weekend getaway. The site is particularly famous for its spectacular sunset views over the water, nearby freshwater fish stalls, and its location on the way to the lush hill station of Valparai",placeImage:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/58/a6/aliyar-dam-reservoir.jpg?w=1200&h=-1&s=1"},
          {id:1, place:"BALAJI TEMPLE",description:"Aliyar Dam is a scenic 81-meter high dam in the Anamalai Hills near Pollachi, Tamil Nadu, renowned for its panoramic reservoir views, landscaped terrace gardens, and boating, popular as a tranquil weekend getaway. The site is particularly famous for its spectacular sunset views over the water, nearby freshwater fish stalls, and its location on the way to the lush hill station of Valparai",placeImage:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/58/a6/aliyar-dam-reservoir.jpg?w=1200&h=-1&s=1"},
        ]
      },
      {
        day: "02",
        title: "Riverside & Vistas",
        activities: ["Koolangal River", "Nirar Dam Viewpoint", "Chinnakalar Falls", "Nallamudi Viewpoint"]
      }
    ],
    includes: ["1 Night Stay", "Private Cab", "Day-1 Dinner", "Day-2 Breakfast", "Guide Charges", "Entry Tickets"],
    excludes: ["Personal expenses", "Lunch"],
    image: "/HeroImages/valparai-tour-package.webp",
    places:["/HeroImages/valparai-tour-package.webp","/HeroImages/valparai-tour-package.webp","/HeroImages/valparai-tour-package.webp"],
    tag: "Best Seller"
  },
];


export const fleet = [
  {
    id: 1,
    name: "Premium Innova Crysta",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9608/1755846139274/front-left-side-47.jpg", // Replace with your actual paths
    capacity: "6+1 Seater",
    bags: "4 Luggage",
    type: "Luxury MUV",
    features: ["AC", "Heater", "Carrier"]
  },
  {
    id: 2,
    name: "Luxury Tempo Traveller",
    image: "https://www.hindustanbesttravels.com/wp-content/uploads/2025/05/Things-You-Didnt-Know-About-Tempo-Traveller-Trips-in-India.webp",
    capacity: "12 to 17 Seater",
    bags: "10+ Luggage",
    type: "Group Travel",
    features: ["Pushback Seats", "Music System", "AC"]
  },
  {
    id: 3,
    name: "Swift Dzire / Etios",
    image: "https://images.autox.com/uploads/cars/2024/11/maruti-suzuki-dzire-500x261.jpg",
    capacity: "4+1 Seater",
    bags: "2 Luggage",
    type: "Premium Sedan",
    features: ["AC", "Compact", "Heater"]
  },
  {
    id: 4,
    name: "Off-Road Jeep",
    image: "https://images.unsplash.com/photo-1671967664667-5c21b344dec4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVlcCUyMG9mZnJvYWR8ZW58MHx8MHx8fDA%3D",
    capacity: "4-6 Seater",
    bags: "Limited",
    type: "Safari Special",
    features: ["4x4", "Open Top", "Naturalist Driver"]
  }
];


export const galleryImages = [
  { id: 1, src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp", title: "Tea Estates", category: "Nature" },
  { id: 2, src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp", title: "Wildlife Safari", category: "Adventure" },
  { id: 3, src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp", title: "Athirapally Falls", category: "Waterfalls" },
  { id: 4, src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp", title: "Topslip Greenery", category: "Forest" },
  { id: 5, src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp", title: "Luxury Transit", category: "Fleet" },
  { id: 6, src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp", title: "Misty Mornings", category: "Nature" },
];


export const valparaiTourData = {
  seo: {
    title: "Valparai Local Tour Packages | Explore the Green Paradise",
    description: "Book the best Valparai local sightseeing packages. Visit Sholayar Dam, Aliyar, Loam's View Point, and tea plantations with our premium cab services.",
    keywords: "Valparai tourism, Valparai tour package, Valparai sightseeing, Sholayar dam, Valparai cabs",
  },
  places: [
    {
      id: "sholayar-dam",
      title: "Sholayar Dam",
      description: "One of the highest masonry dams in Asia, offering breathtaking views of the backwaters and lush greenery.",
      image: "https://valparaicitytravels.com/images/chinnakallar-waterfalls.jpg",
      tag: "Engineering Marvel"
    },
    {
      id: "loams-view",
      title: "Loam's View Point",
      description: "Located at the 9th hairpin bend, it provides a panoramic bird's-eye view of the Aliyar Dam and the mountain ranges.",
      image: "https://images.unsplash.com/photo-1596395819057-e37f55a8516d?q=80&w=2070&auto=format&fit=crop",
      tag: "Scenic Beauty"
    },
    {
      id: "aliyar-dam",
      title: "Aliyar Dam & Park",
      description: "A popular spot at the foothills of Valparai, perfect for boat rides and family outings amidst the mountains.",
      image: "https://images.unsplash.com/photo-1623946729571-0f734458f70f?q=80&w=2070&auto=format&fit=crop",
      tag: "Family Spot"
    },
    {
      id: "tea-estates",
      title: "Estate Explorations",
      description: "Walk through sprawling emerald tea plantations and visit historical tea factories to see the process.",
      image: "https://images.unsplash.com/photo-1597485359714-38600d8bc392?q=80&w=2070&auto=format&fit=crop",
      tag: "Signature Experience"
    }
  ],
  pricing: [
    { type: "Sedan (Swift/Etios)", price: "₹3,500", limit: "Max 4 Persons" },
    { type: "SUV (Innova/Marazzo)", price: "₹5,500", limit: "Max 7 Persons" },
    { type: "Tempo Traveler", price: "₹8,500", limit: "Max 12 Persons" }
  ]
};


export const sightseeingPlaces = [
  {
    id: 1,
    name: "loam's view point",
    image: "/places/loams.jpg",
    desc: "situated at the 9th hairpin bend, this spot offers an breathtaking perspective of the aliyar dam reservoir and the majestic mountains surrounding it.",
    tags: ["scenic", "highway"],
    category: "viewpoint"
  },
  {
    id: 2,
    name: "sholayar dam",
    image: "/places/sholayar.jpg",
    desc: "one of the tallest dams in india. the drive to sholayar is lined with deep jungle on one side and tea estates on the other. a true engineering marvel.",
    tags: ["massive", "nature"],
    category: "landmark"
  },
  {
    id: 3,
    name: "koolangal river",
    image: "/places/river.jpg",
    desc: "a shallow, slow-moving river with smooth pebbles. it is the perfect spot for families to relax and dip their feet in crystal clear mountain water.",
    tags: ["relaxing", "family"],
    category: "nature"
  },
  {
    id: 4,
    name: "balaji temple",
    image: "/places/temple.jpg",
    desc: "a privately owned temple situated inside a tea estate. the silence here is profound, and the walk to the temple is incredibly scenic.",
    tags: ["spiritual", "tea estate"],
    category: "temple"
  },
  {
    id: 5,
    name: "nallamudi poonjolai",
    image: "/places/nallamudi.jpg",
    desc: "a hidden valley view point. a short walk through tea bushes leads you to a cliff edge overlooking tribal settlements and deep valleys.",
    tags: ["trek", "valley"],
    category: "viewpoint"
  },
  {
    id: 6,
    name: "nirar dam",
    image: "/places/nirar.jpg",
    desc: "known for its high waterfall-like overflow during rains. it's part of the hydroelectric project and offers great views of the rainforest.",
    tags: ["waterfall", "hydro"],
    category: "landmark"
  }
];

export const topslipPackage = {
  id: "vlp-ts-01",
  title: "valparai - topslip expedition",
  slug: "valparai-topslip-tour",
  duration: "2 nights / 3 days",
  class: "hp - deluxe",
  tag: "best seller",
  price: "on request",
  seo_description: "premium 3-day exploration covering valparai heights and topslip wilderness. naturalist guided tours including aliyar dam, sholayar, and elephant camps.",
  
  // High-level itinerary for the timeline component
  itinerary: [
    { 
      day: "01", 
      title: "arrival & transition", 
      desc: "pickup from coimbatore or pollachi. scenic drive through the 40 hairpin bends. hotel check-in and leisure evening at valparai town." 
    },
    { 
      day: "02", 
      title: "the plateau circuit", 
      desc: "full day exploration: monkey falls, masaniamman temple, sholayar dam, and sunset at nallamudi poonjolai." 
    },
    { 
      day: "03", 
      title: "topslip wilderness", 
      desc: "early checkout for topslip sightseeing, elephant camp visit, and forest safari. evening drop at coimbatore airport/railway station." 
    }
  ],

  // Detailed content for the bento grid cards
  destinations: [
    {
      name: "monkey falls",
      category: "waterfalls",
      tags: ["roadside", "refreshing"],
      desc: "an excellent roadside stop situated 65km from coimbatore. located on the valparai main road next to the forest department check post."
    },
    {
      name: "sholayar dam",
      category: "engineering",
      tags: ["2nd deepest in asia", "misty"],
      desc: "situated 30km from valparai, this hydroelectric marvel is a part of the chalakudy river system. entry requires special permission for closer views."
    },
    {
      name: "nallamudi poonjolai",
      category: "viewpoint",
      tags: ["tea estate", "valley view"],
      desc: "a private estate viewpoint 15km from town. a 1km trek through tea gardens leads to a 1000ft deep valley overlooking anaimudi peak."
    },
    {
      name: "topslip safari",
      category: "wildlife",
      tags: ["elephant camp", "tiger reserve"],
      desc: "part of the anamalai tiger reserve. famous for elephant camps, trekking trails, and diverse flora/fauna unique to the western ghats."
    },
    {
      name: "aliyar dam",
      category: "reservoir",
      tags: ["boating", "aquarium"],
      desc: "located at the foothills of valparai. features a beautiful garden, mini theme park, and boating facilities with mountain views on three sides."
    },
    {
      name: "koolangal river",
      category: "nature",
      tags: ["crystal clear", "pebble river"],
      desc: "a shallow river flowing through sirukundra estate. perfect for a relaxing picnic and wading in pure mountain water."
    },
    {
      name: "grass hills",
      category: "national park",
      tags: ["trekking", "2000m msl"],
      desc: "a unique montane shola-grassland ecosystem. a protected area that forms the boundary with eravikulam national park in kerala."
    },
    {
      name: "balaji temple",
      category: "spiritual",
      tags: ["high altitude", "serene"],
      desc: "owned by peria karamalai tea industries. famous for its tirupati-style poojas and the marble floor that stays chilled year-round."
    }
  ],

  // Policy data for the footer of the page
  policies: {
    inclusions: [
      "all taxes included",
      "naturalist driver-cum-guide",
      "fuel and parking charges",
      "pickup and drop-off"
    ],
    terms: [
      "50% advance payment for confirmation",
      "standard occupancy: 3 adults or 2 adults + 1 child",
      "75% refund if cancelled 15 days prior",
      "50% refund if cancelled 8-14 days prior",
      "no refund within 7 days of arrival"
    ]
  }
};