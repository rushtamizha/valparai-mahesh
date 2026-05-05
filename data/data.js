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
  founderImg:
    "https://lookaside.fbsbx.com/elementpath/media/?media_id=323764547398564&version=1774609332",
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
  {
    name: "Local Tours",
    link: "/valparai-local-tour-package",
    icon: <Waves size={16} />,
  },
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
    link: "/#hotels",
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
      {
        name: "About Valparai",
        slug: "valparai-about",
        icon: <Info size={14} />,
      },
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
    description:
      "Experience bespoke luxury travel. From private houseboats to mist-covered estates, we curate the soul of Kerala.",
    image: "https://mayaholidays.in/img/carousel-1.jpg",
    badge: "God's Own Country",
    tags: [
      { icon: <Waves size={14} />, label: "Backwaters" },
      { icon: <Star size={14} />, label: "Premium Stay" },
    ],
  },
  {
    id: 2,
    title: "Misty Munnar.",
    description:
      "Walk through emerald tea gardens and stay in colonial-style estates overlooking the Western Ghats.",
    image: "/HeroImages/valparai-tour-package.webp",
    badge: "Hill Station Special",
    tags: [
      { icon: <Palmtree size={14} />, label: "Tea Gardens" },
      { icon: <Mountain size={14} />, label: "Trekking" },
    ],
  },
];

// data/data.js
export const tourPackages = [
  {
    id: 1,
    title: "Pollachi Valparai Tour Package",
    slug: "pollachi-valparai-2d-1n",
    duration: "Night 2 Days",
    basePrice: "On Request",
    tourFrom: "Pollachi / Coimbatore",
    description:
      "A refreshing short escape to the '7th Heaven'. Experience the thrill of 40 hairpin bends, the misty Aliyar Dam, and the lush tea carpets of Valparai in a compact yet fulfilling itinerary.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/pollachi-valparai/valparai-pollachi-1.jpg",
    places: [
      "/pollachi-valparai/valparai-pollachi-1.jpg",
      "/pollachi-valparai/valparai-pollachi-2.webp",
      "/pollachi-valparai/valparai-pollachi-3.jpg",
      "/pollachi-valparai/valparai-pollachi-4.jpg",
    ],
    tag: "Quick Escape",
  },
  {
    id: 2,
    title: "Pollachi Topslip Parambikulam Valparai",
    slug: "pollachi-topslip-valparai-3d-2n",
    duration: "2 Nights 3 Days",
    basePrice: "On Request",
    tourFrom: "Pollachi",
    description:
      "The ultimate wildlife and hill station combo. Explore the teak forests of Topslip, the bamboo rafting at Parambikulam, and the serene tea estates of Valparai.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/pollachi-topslip-valparai/pollachi-topslip-valparai-1.webp",
    places: [
      "/pollachi-topslip-valparai/pollachi-topslip-valparai-1.webp",
      "/pollachi-topslip-valparai/pollachi-topslip-valparai-2.webp",
      "/pollachi-topslip-valparai/pollachi-topslip-valparai-3.jpg",
      "/pollachi-topslip-valparai/pollachi-topslip-valparai-4.jpg",
      "/pollachi-topslip-valparai/pollachi-topslip-valparai-5.webp",
    ],
    
    tag: "Best Seller",
  },
  {
    id: 3,
    title: "Pollachi Valparai Athirapally Waterfalls",
    slug: "valparai-athirapally-3d-2n",
    duration: "2 Nights 3 Days",
    basePrice: "On Request",
    tourFrom: "Pollachi / Valparai",
    description:
      "Witness the majestic Athirapally Waterfalls (the Niagara of India) combined with the peaceful heights of Valparai. A journey through deep rainforests and cascading waters.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/valparai-athirapally/athirapally-falls-in.jpg",
    places: ["/valparai-athirapally/athirapally-falls-in.jpg", "/valparai-athirapally/Best-Munnar-Tea-Estates.png","/valparai-athirapally/munnar.jpg","/valparai-athirapally/Valparai.jpg"],
    tag: "Nature Lovers",
  },
  {
    id: 4,
    title: "Topslip Parambikulam Valparai Athirapally",
    slug: "mega-wildlife-waterfalls-4d-3n",
    duration: "3 Nights 4 Days",
    basePrice: "On Request",
    tourFrom: "Coimbatore / Pollachi",
    description:
      "A comprehensive 4-day tour covering the best of Western Ghats: Wildlife at Topslip, the deep reservoir of Parambikulam, and the thunderous Athirapally falls.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/wildlife-waterfalls/parambikulam1.webp",
    places: ["/wildlife-waterfalls/athirapally-tours.webp", "/wildlife-waterfalls/Parambikulam.jpg","/wildlife-waterfalls/parambikulam1.webp","/wildlife-waterfalls/valparai.webp"],
    tag: "Adventure",
  },
  {
    id: 5,
    title: "Isha Marudamalai Wildlife & Waterfalls",
    slug: "coimbatore-isha-valparai-5d-4n",
    duration: "4 Nights 5 Days",
    basePrice: "On Request",
    tourFrom: "Coimbatore",
    description:
      "A spiritual and natural odyssey. Visit the Adiyogi at Isha and Marudamalai temple, followed by an extensive tour of Topslip and Valparai's natural wonders.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/coimbatore-isha-valparai/coimbatore-isha-valparai1.webp",
    places: ["/coimbatore-isha-valparai/coimbatore-isha-valparai1.webp", "/coimbatore-isha-valparai/coimbatore-isha-valparai2.webp","/coimbatore-isha-valparai/coimbatore-isha-valparai3.webp","/coimbatore-isha-valparai/coimbatore-isha-valparai4.webp","/coimbatore-isha-valparai/coimbatore-isha-valparai5.webp"],
    tag: "Spiritual & Nature",
  },

  // --- OOTY PACKAGES ---
  {
    id: 6,
    title: "Coonoor Ooty Pykara Mudumalai",
    slug: "ooty-mudumalai-3d-2n",
    duration: "2 Nights 3 Days",
    basePrice: "On Request",
    tourFrom: "Coimbatore",
    description:
      "Explore the Queen of Hills. From the heritage toy train in Coonoor to the wildlife of Mudumalai and the crystal waters of Pykara lake.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/ooty-mudumalai/ooty-mudumalai1.jpg",
    places:["/ooty-mudumalai/ooty-mudumalai1.jpg","/ooty-mudumalai/ooty-mudumalai2.png","/ooty-mudumalai/ooty-mudumalai3.jpg",'/ooty-mudumalai/ooty-mudumalai4.jpg',"/ooty-mudumalai/ooty-mudumalai5.webp"],
    tag: "Classic Ooty",
  },
  {
    id: 7,
    title: "Ooty Pykara Masinagudi Adventure",
    slug: "ooty-masinagudi-4d-3n",
    duration: "3 Nights 4 Days",
    basePrice: "On Request",
    tourFrom: "Coimbatore",
    description:
      "A deeper look into the Blue Mountains. Includes the scenic Pykara falls and an adventurous stay in Masinagudi, known for its dense wildlife sightings.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/ooty-masinagudi/ooty-masinagudi1.jpg",
    places:["/ooty-masinagudi/ooty-masinagudi1.jpg","/ooty-masinagudi/ooty-masinagudi2.jpg","/ooty-masinagudi/ooty-masinagudi3.jpg","/ooty-masinagudi/ooty-masinagudi4.jpg","/ooty-masinagudi/ooty-masinagudi5.webp"],
    tag: "Wildlife Choice",
  },

  // --- KODAIKANAL PACKAGES ---
  {
    id: 8,
    title: "Kodaikanal Local & Sightseeing",
    slug: "kodaikanal-3d-2n",
    duration: "2 Nights 3 Days",
    basePrice: "On Request",
    tourFrom: "Kodai Road / Madurai",
    description:
      "Visit the Princess of Hill Stations. Walk through the Coaker's Walk, boat in the Kodai Lake, and enjoy the mist at Pillar Rocks.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/kodaikanal/kodaikanal1.jpg",
    places:["/kodaikanal/kodaikanal1.jpg","/kodaikanal/kodaikanal2.jpg","/kodaikanal/kodaikanal3.jpg","/kodaikanal/kodaikanal4.webp"],
    tag: "Family Favorite",
  },
  {
    id: 9,
    title: "Grand Hill Station: Kodai Ooty Coonoor",
    slug: "kodai-ooty-6d-5n",
    duration: "5 Nights 6 Days",
    basePrice: "On Request",
    tourFrom: "Coimbatore",
    description:
      "The ultimate Tamil Nadu hill station tour. Covering Kodaikanal, Ooty, Coonoor, and the Mudumalai tiger reserve in one grand journey.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/kodai-ooty/kodai-ooty1.jpg",
    places:["/kodai-ooty/kodai-ooty1.jpg","/kodai-ooty/kodai-ooty2.png","/kodai-ooty/kodai-ooty3.avif","/kodai-ooty/kodai-ooty4.jpg","/kodai-ooty/kodai-ooty5.jpg","/kodai-ooty/kodai-ooty6.avif"],
    tag: "Premium Grand Tour",
  },

  // --- KERALA PACKAGES ---
  {
    id: 10,
    title: "Munnar Kanthaloor Marayoor",
    slug: "munnar-kanthaloor-3d-2n",
    duration: "2 Nights 3 Days",
    basePrice: "On Request",
    tourFrom: "Udumalpet / Coimbatore",
    description:
      "Explore the offbeat beauty of Kanthaloor fruit orchards and the ancient Dolmens of Marayoor along with the tea gardens of Munnar.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/munnar-kanthaloor/munnar-kanthaloor1.jpg",
    places:["/munnar-kanthaloor/munnar-kanthaloor1.jpg","/munnar-kanthaloor/munnar-kanthaloor2.jpg","/munnar-kanthaloor/munnar-kanthaloor3.webp","/munnar-kanthaloor/munnar-kanthaloor4.webp"],
    tag: "Offbeat Kerala",
  },
  {
    id: 11,
    title: "Alleppey Houseboat & Munnar",
    slug: "alleppey-munnar-5d-4n",
    duration: "4 Nights 5 Days",
    basePrice: "On Request",
    tourFrom: "Cochin",
    description:
      "Experience the quintessential Kerala: A romantic night in an Alleppey Houseboat followed by the rolling tea hills of Munnar.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/alleppey-munnar/alleppey-munnar1.jpg",
    places:["/alleppey-munnar/alleppey-munnar1.jpg","/alleppey-munnar/alleppey-munnar2.jpg","/alleppey-munnar/alleppey-munnar3.jpg"],
    tag: "Honeymoon Special",
  },
  {
    id: 12,
    title: "Complete Kerala Panorama",
    slug: "kerala-panorama-10d-9n",
    duration: "9 Nights 10 Days",
    basePrice: "On Request",
    tourFrom: "Cochin",
    description:
      "The most comprehensive Kerala experience. From the hills of Munnar and Wayanad to the backwaters of Alleppey and the beaches of Kovalam.",
    termsConditions: [
      "The rates are inclusive of all taxes",
      "All the bookings must be confirmed with a 50% advance payment.",
      "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children",
      "15 days before scheduled arrival – 75% refund.",
      "8 – 14 days before scheduled arrival – 50% refund.",
      "7 days or less – no refund.",
    ],
    priceTiers: [
      { members: "2 members", price: "3,499" },
      { members: "3 members", price: "2,999" },
      { members: "4 members", price: "2,499" },
      { members: "5+ members", price: "1,999" },
    ],
    includes: [
      "Night Stay",
      "Private Cab",
      "Dinner",
      "Breakfast",
      "Guide Charges",
      "Entry Tickets",
    ],
    excludes: ["Personal expenses", "Lunch"],
    image: "/kerala-panorama/kerala-panorama2.webp",
    places:["/kerala-panorama/kerala-panorama2.webp","/kerala-panorama/kerala-panorama3.jpg","/kerala-panorama/kerala-panorama4.webp","/kerala-panorama/kerala-panorama5.webp","/kerala-panorama/kerala-panorama6.jpg"],
    tag: "Signature Journey",
  },
];

export const fleet = [
  {
    id: 1,
    name: "Premium Innova Crysta",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9608/1755846139274/front-left-side-47.jpg", // Replace with your actual paths
    capacity: "6+1 Seater",
    bags: "4 Luggage",
    type: "Luxury MUV",
    features: ["AC", "Heater", "Carrier"],
  },
  {
    id: 2,
    name: "Luxury Tempo Traveller",
    image:
      "https://www.hindustanbesttravels.com/wp-content/uploads/2025/05/Things-You-Didnt-Know-About-Tempo-Traveller-Trips-in-India.webp",
    capacity: "12 to 17 Seater",
    bags: "10+ Luggage",
    type: "Group Travel",
    features: ["Pushback Seats", "Music System", "AC"],
  },
  {
    id: 3,
    name: "Swift Dzire / Etios",
    image:
      "https://images.autox.com/uploads/cars/2024/11/maruti-suzuki-dzire-500x261.jpg",
    capacity: "4+1 Seater",
    bags: "2 Luggage",
    type: "Premium Sedan",
    features: ["AC", "Compact", "Heater"],
  },
  {
    id: 4,
    name: "Off-Road Jeep",
    image:
      "https://images.unsplash.com/photo-1671967664667-5c21b344dec4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVlcCUyMG9mZnJvYWR8ZW58MHx8MHx8fDA%3D",
    capacity: "4-6 Seater",
    bags: "Limited",
    type: "Safari Special",
    features: ["4x4", "Open Top", "Naturalist Driver"],
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp",
    title: "Tea Estates",
    category: "Nature",
  },
  {
    id: 2,
    src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp",
    title: "Wildlife Safari",
    category: "Adventure",
  },
  {
    id: 3,
    src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp",
    title: "Athirapally Falls",
    category: "Waterfalls",
  },
  {
    id: 4,
    src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp",
    title: "Topslip Greenery",
    category: "Forest",
  },
  {
    id: 5,
    src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp",
    title: "Luxury Transit",
    category: "Fleet",
  },
  {
    id: 6,
    src: "https://www.valparaimountterrain.com/wp-content/uploads/2025/08/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand-1024x682.webp",
    title: "Misty Mornings",
    category: "Nature",
  },
];

//  itinerary: [
//       {
//         day: "01",
//         title: "Arrival Valparai",
//         activities: [
//           {
//             id: 1,
//             place: "Arrival Valparai",
//             description: "Pickup transfer to hotel, free day",
//             placeImage:
//               "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/58/a6/aliyar-dam-reservoir.jpg?w=1200&h=-1&s=1",
//           },
//         ],
//       },
//       {
//         day: "02",
//         title: "Proceed for Aliyar Dam",
//         activities: [
//           {
//             id: 1,
//             place: "Monkey Falls",
//             description:
//               "A natural wonder located on the foothills of the Anamalai range. These refreshing waterfalls are surrounded by evergreen forests and rocky cliffs, making it a perfect spot for a quick dip and nature photography during the ascent to Valparai.",
//             placeImage: "/images/attractions/monkey-falls.jpg",
//           },
//           {
//             id: 2,
//             place: "Valparai Sightseeing",
//             description:
//               "Explore the 'Seventh Heaven' of the Western Ghats. From sprawling tea estates that look like green carpets to mist-covered valleys, the sightseeing covers the best of high-altitude biodiversity and colonial-era charm.",
//             placeImage: "/images/attractions/valparai-view.jpg",
//           },
//           {
//             id: 3,
//             place: "Masaniamman Temple",
//             description:
//               "A powerful ancient shrine located in Anaimalai. Dedicated to Goddess Masaniamman, this temple is unique for its reclining deity and is a significant spiritual landmark for travelers seeking blessings before their hill journey.",
//             placeImage: "/images/attractions/masaniamman.jpg",
//           },
//           {
//             id: 4,
//             place: "Topslip",
//             description:
//               "Located in the Anamalai Tiger Reserve, Topslip is a wildlife enthusiast's paradise. It offers elephant safaris, forest treks, and the chance to spot rare species like the Nilgiri Tahr and lion-tailed macaques in their natural habitat.",
//             placeImage: "/images/attractions/topslip.jpg",
//           },
//           {
//             id: 5,
//             place: "Aliyar Dam",
//             description:
//               "A magnificent feat of engineering nestled in the Anamalai foothills. Renowned for its well-maintained park, aquarium, and boat rides, it provides a breathtaking 360-degree view of the surrounding mountains reflecting in the blue waters.",
//             placeImage: "/images/attractions/aliyar-dam.jpg",
//           },
//           {
//             id: 6,
//             place: "Thirumoorthy Hills",
//             description:
//               "A serene spot famous for the Amanalingeswarar Temple located at the foot of the hills. The area combines spirituality with nature, featuring a beautiful dam and a perennial stream that flows through the rugged terrain.",
//             placeImage: "/images/attractions/thirumoorthy.jpg",
//           },
//           {
//             id: 7,
//             place: "Thirumurthi Falls",
//             description:
//               "A gentle yet captivating waterfall that cascades down the Thirumoorthy Hills. Known for its medicinal properties and calm atmosphere, it is a favorite for families and those looking for a peaceful forest bath.",
//             placeImage: "/images/attractions/thirumurthi-falls.jpg",
//           },
//           {
//             id: 8,
//             place: "Amaravathy Dam",
//             description:
//               "A major dam in the Indira Gandhi Wildlife Sanctuary. It is famous for its massive reservoir and the steep slopes of the Anamalai Hills that surround it, creating a dramatic landscape perfect for bird watching.",
//             placeImage: "/images/attractions/amaravathy.jpg",
//           },
//           {
//             id: 9,
//             place: "Crocodile Park",
//             description:
//               "Home to the largest population of crocodiles in South India. This conservation center at Amaravathy offers a safe look at these prehistoric reptiles in a naturalistic setting, educating visitors on wildlife preservation.",
//             placeImage: "/images/attractions/crocodile-park.jpg",
//           },
//           {
//             id: 10,
//             place: "Nallamudi Poonjolai",
//             description:
//               "One of the most spectacular viewpoints in Valparai. Walk through a private tea estate to reach a cliff edge that offers a stunning view of the Anamalai mountain range and deep tribal valleys below.",
//             placeImage: "/images/attractions/nallamudi.jpg",
//           },
//           {
//             id: 11,
//             place: "Koolangal River",
//             description:
//               "A crystal-clear, shallow river famous for its smooth pebbles and gentle flow. It’s the best spot in Valparai to relax your feet in cold water while surrounded by lush tea bushes on both sides.",
//             placeImage: "/images/attractions/koolangal.jpg",
//           },
//           {
//             id: 12,
//             place: "Palani Murugan Temple",
//             description:
//               "One of the six abodes of Lord Murugan. Perched atop a hill accessible by steps or a winch/rope car, this temple is a masterpiece of Dravidian architecture and offers panoramic views of the plains below.",
//             placeImage: "/images/attractions/palani.jpg",
//           },
//           {
//             id: 13,
//             place: "Night Halt",
//             description:
//               "Relax and rejuvenate in the cool mountain air. Our overnight stays are arranged in premium bungalows or resorts surrounded by tea plantations, allowing you to experience the true silence of the hills.",
//             placeImage: "/images/attractions/resort.jpg",
//           },
//         ],
//       },
//       {
//         day: "03",
//         title: "Check out hotel",
//         activities: [
//           {
//             id: 1,
//             place: "Arrival Valparai",
//             description:
//               "Evening drop back to Pollachi/Coimbatore Railway Station or Airport.",
//           },
//         ],
//       },
//     ],
