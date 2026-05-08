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
import { BsCash } from "react-icons/bs";

export const companyConfig = {
  name: "Valparai Mahesh & Travels",
  founderImg: "founder.jpg",
  logo: "logo.jpg",
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
    link: "tours/pollachi-valparai-2d-1n",
    icon: <Waves size={16} />,
  },
  {
    name: "Tour Packages",
    slug: "packages",
    icon: <Package size={16} />,
    items: [
      {
        name: "Wildlife Tour",
        slug: "",
        icon: <Camera size={14} />,
      },
      {
        name: "Honeymoon Specials",
        slug: "",
        icon: <Heart size={14} />,
      },
      {
        name: "Kerala Tours",
        slug: "",
        icon: <Ship size={14} />,
      },
      {
        name: "Hill Station Tours",
        slug: "",
        icon: <MapPin size={14} />,
      },
      {
        name: "South India Tours",
        slug: "",
        icon: <MapPin size={14} />,
      },
      {
        name: "Valparai Specials",
        slug: "",
        icon: <MapPin size={14} />,
      },
      {
        name: "Topslip Tours",
        slug: "",
        icon: <Camera size={14} />,
      },
      {
        name: "Athirapally Falls",
        slug: "",
        icon: <Waves size={14} />,
      },
      {
        name: "Student Groups",
        slug: "",
        icon: <Users size={14} />,
      },
      {
        name: "Corporate Outings",
        slug: "",
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
  {
    name: "Payment Info",
    slug: "/payment",
    link: "/payment",
    icon: <BsCash size={16} />,
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
  // --- VALPARAI CATEGORY (5 PACKAGES) ---
  {
    id: 1,
    title: "Pollachi Valparai Tour Package",
    slug: "pollachi-valparai-2d-1n",
    duration: "2 Days 1 Night",
    basePrice: "On Request",
    category: "Valparai",
    tourFrom: "Pollachi / Coimbatore",
    description: "A refreshing short escape to the '7th Heaven'. Experience the thrill of 40 hairpin bends, the misty Aliyar Dam, and the lush tea carpets of Valparai.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/pollachi-valparai/valparai-pollachi-1.jpg",
    places: ["/pollachi-valparai/valparai-pollachi-1.jpg", "/pollachi-valparai/valparai-pollachi-2.webp", "/pollachi-valparai/valparai-pollachi-3.jpg", "/pollachi-valparai/valparai-pollachi-4.jpg"],
    tag: "Quick Escape",
  },
  {
    id: 2,
    title: "Pollachi Topslip Parambikulam Valparai",
    slug: "pollachi-topslip-parambikulam-valparai-3d-2n",
    duration: "3 Days 2 Night ",
    basePrice: "On Request",
    category: "Valparai",
    tourFrom: "Pollachi",
    description: "The ultimate wildlife and hill station combo. Explore the teak forests of Topslip, bamboo rafting at Parambikulam, and the serene tea estates of Valparai.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/pollachi-topslip-valparai/pollachi-topslip-valparai-1.webp",
    places: ["/pollachi-topslip-valparai/pollachi-topslip-valparai-1.webp", "/pollachi-topslip-valparai/pollachi-topslip-valparai-2.webp", "/pollachi-topslip-valparai/pollachi-topslip-valparai-3.jpg", "/pollachi-topslip-valparai/pollachi-topslip-valparai-4.jpg"],
    tag: "Best Seller",
  },
  {
    id: 3,
    title: "Pollachi Valparai Athirapally Waterfalls",
    slug: "pollachi-valparai-athirapally-3d-2n",
    duration: "3 Days 2 Night",
    basePrice: "On Request",
    category: "Valparai",
    tourFrom: "Pollachi / Valparai",
    description: "Witness the majestic Athirapally Waterfalls (the Niagara of India) combined with the peaceful heights of Valparai and rainforest drives.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/valparai-athirapally/athirapally-falls-in.jpg",
    places: ["/valparai-athirapally/athirapally-falls-in.jpg", "/valparai-athirapally/Valparai.jpg", "/valparai-athirapally/munnar.jpg"],
    tag: "Nature Lovers",
  },
  {
    id: 4,
    title: "Topslip Parambikulam Valparai Athirapally",
    slug: "topslip-parambikulam-valparai-athirapally-4d-3n",
    duration: "4 Days 3 Night",
    basePrice: "On Request",
    category: "Valparai",
    tourFrom: "Coimbatore / Pollachi",
    description: "A comprehensive 4-day tour covering the best of Western Ghats: Wildlife at Topslip, the deep reservoir of Parambikulam, and the thunderous Athirapally falls.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/wildlife-waterfalls/parambikulam1.webp",
    places: ["/wildlife-waterfalls/parambikulam1.webp", "/wildlife-waterfalls/athirapally-tours.webp", "/wildlife-waterfalls/valparai.webp"],
    tag: "Adventure",
  },
  {
    id: 5,
    title: "Coimbatore Isha Marudamalai Pollachi Valparai",
    slug: "coimbatore-isha-valparai-5d-4n",
    duration: "5 Days 4 Night",
    basePrice: "On Request",
    category: "Valparai",
    tourFrom: "Coimbatore",
    description: "A spiritual and natural odyssey. Visit the Adiyogi at Isha and Marudamalai temple, followed by an extensive tour of Topslip, Parambikulam and Valparai.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/coimbatore-isha-valparai/coimbatore-isha-valparai1.webp",
    places: ["/coimbatore-isha-valparai/coimbatore-isha-valparai1.webp", "/coimbatore-isha-valparai/coimbatore-isha-valparai2.webp", "/coimbatore-isha-valparai/coimbatore-isha-valparai3.webp"],
    tag: "Spiritual & Nature",
  },

  // --- OOTY CATEGORY (3 PACKAGES) ---
  {
    id: 6,
    title: "Coonoor Ooty Pykara Mudumalai",
    slug: "coimbatore-ooty-mudumalai-3d-2n",
    duration: "3 Days 2 Night",
    basePrice: "On Request",
    category: "Ooty",
    tourFrom: "Coimbatore",
    description: "Explore the Queen of Hills. From the heritage toy train in Coonoor to the wildlife of Mudumalai and the crystal waters of Pykara lake.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/ooty-mudumalai/ooty-mudumalai1.jpg",
    places: ["/ooty-mudumalai/ooty-mudumalai1.jpg", "/ooty-mudumalai/ooty-mudumalai2.png", "/ooty-mudumalai/ooty-mudumalai3.jpg"],
    tag: "Classic Ooty",
  },
  {
    id: 7,
    title: "Coonoor Ooty Pykara Masinagudi",
    slug: "coimbatore-ooty-masinagudi-4d-3n",
    duration: "4 Days 3 Night",
    basePrice: "On Request",
    category: "Ooty",
    tourFrom: "Coimbatore",
    description: "A deeper look into the Blue Mountains. Includes the scenic Pykara falls and an adventurous stay in Masinagudi, known for its dense wildlife.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/ooty-masinagudi/ooty-masinagudi1.jpg",
    places: ["/ooty-masinagudi/ooty-masinagudi1.jpg", "/ooty-masinagudi/ooty-masinagudi2.jpg", "/ooty-masinagudi/ooty-masinagudi3.jpg"],
    tag: "Wildlife Choice",
  },
  {
    id: 8,
    title: "Grand Kodaikanal Ooty Coonoor Mudumalai",
    slug: "coimbatore-kodai-ooty-mudumalai-6d-5n",
    duration: "6 Days 5 Night",
    basePrice: "On Request",
    category: "Ooty",
    tourFrom: "Coimbatore",
    description: "The ultimate hill station grand tour covering the best of Kodaikanal, the misty Ooty, and the wildlife of Mudumalai.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/coimbatore-kodai-ooty-mudumalai/coimbatore-kodai-ooty-mudumalai1.jpg",
    places: ["/coimbatore-kodai-ooty-mudumalai/coimbatore-kodai-ooty-mudumalai1.jpg", "/coimbatore-kodai-ooty-mudumalai/coimbatore-kodai-ooty-mudumalai2.jpg","/coimbatore-kodai-ooty-mudumalai/coimbatore-kodai-ooty-mudumalai3.jpg"],
    tag: "Grand Tour",
  },

  // --- KODAIKANAL CATEGORY (2 PACKAGES) ---
  {
    id: 9,
    title: "Kodaikanal Local & Sightseeing",
    slug: "kodai-road-kodaikanal-3d-2n",
    duration: " 3 Days 2 Nights",
    basePrice: "On Request",
    category: "Kodaikanal",
    tourFrom: "Kodai Road / Madurai",
    description: "Visit the Princess of Hill Stations. Walk through the Coaker's Walk, boat in the Kodai Lake, and enjoy the mist at Pillar Rocks.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/kodaikanal/kodaikanal1.jpg",
    places: ["/kodaikanal/kodaikanal1.jpg", "/kodaikanal/kodaikanal2.jpg", "/kodaikanal/kodaikanal3.jpg"],
    tag: "Family Favorite",
  },
  {
    id: 10,
    title: "Coimbatore Kodaikanal Ooty Coonoor Mudumalai",
    slug: "coimbatore-kodaikanal-ooty-mudumalai-6d-5n",
    duration: " 6 Days 5 Nights",
    basePrice: "On Request",
    category: "Kodaikanal",
    tourFrom: "Coimbatore",
    description: "A grand 6-day journey across the most popular hill stations of South India. Perfect for families looking for a long break.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/kodai-ooty/kodai-ooty1.jpg",
    places: ["/kodai-ooty/kodai-ooty1.jpg", "/kodai-ooty/kodai-ooty2.png", "/kodai-ooty/kodai-ooty3.avif"],
    tag: "Premium Grand Tour",
  },

  // --- KERALA CATEGORY (6 PACKAGES) ---
  {
    id: 11,
    title: "Kanthaloor Marayoor Munnar Tour",
    slug: "coimbatore-kanthaloor-marayoor-munnar-3d-2n",
    duration: "3 Days 2 Night",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Udumalpet / Coimbatore",
    description: "Explore the offbeat beauty of Kanthaloor fruit orchards and the ancient Dolmens of Marayoor along with the tea gardens of Munnar.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/munnar-kanthaloor/munnar-kanthaloor1.jpg",
    places: ["/munnar-kanthaloor/munnar-kanthaloor1.jpg", "/munnar-kanthaloor/munnar-kanthaloor2.jpg"],
    tag: "Offbeat Kerala",
  },
  {
    id: 12,
    title: "Cochin Munnar Kanthaloor Marayoor",
    slug: "cochin-munnar-kanthaloor-marayoor-4d-3n",
    duration: "4 Days 3 Night",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Cochin",
    description: "Starting from Cochin, this package covers the sprawling tea estates of Munnar and the serene natural beauty of the Marayoor region.",
    termsConditions: ["Standard Kerala T&C apply"],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor1.jpg",
    places: ["/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor2.jpg", "/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor3.jpg","/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor1.jpg","/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor4.jpg"],
    tag: "Top Choice",
  },
  {
    id: 13,
    title: "Wonders of Kerala Coimbatore Departure",
    slug: "coimbatore-kerala-wonders-5d-4n",
    duration: "5 Days 4 Nights",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Coimbatore",
    description: "An extensive 5-day tour from Coimbatore covering the best of Kerala's mountain landscapes and cultural highlights.",
    termsConditions: ["Standard Kerala T&C apply"],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/coimbatore-kerala-wonders/coimbatore-kerala-wonders1.jpg",
    places: ["/coimbatore-kerala-wonders/coimbatore-kerala-wonders1.jpg", "/coimbatore-kerala-wonders/coimbatore-kerala-wonders2.avif","/coimbatore-kerala-wonders/coimbatore-kerala-wonders3.avif","/coimbatore-kerala-wonders/coimbatore-kerala-wonders4.jpg"],
    tag: "Adventure",
  },
  {
    id: 14,
    title: "Cochin Alleppey Houseboat Munnar",
    slug: "cochin-alleppey-houseboat-munnar-5d-4n",
    duration: "5 Days  4 Nights",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Cochin",
    description: "Experience the quintessential Kerala: A romantic night in an Alleppey Houseboat followed by the rolling tea hills of Munnar.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/alleppey-munnar/alleppey-munnar1.jpg",
    places: ["/alleppey-munnar/alleppey-munnar1.jpg", "/alleppey-munnar/alleppey-munnar2.jpg", "/alleppey-munnar/alleppey-munnar3.jpg"],
    tag: "Honeymoon Special",
  },
  {
    id: 15,
    title: "Cochin Alleppey Munnar Thekkady",
    slug: "cochin-alleppey-munnar-thekkady-6d-5n",
    duration: " 6 Days 5 Nights",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Cochin",
    description: "A complete Kerala experience including the backwaters, the tea gardens of Munnar, and the spice plantations of Thekkady.",
    termsConditions: ["Standard Kerala T&C apply"],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
     includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/coimbatore-kerala-wonders/coimbatore-kerala-wonders1.jpg",
    places: ["/coimbatore-kerala-wonders/coimbatore-kerala-wonders1.jpg", "/coimbatore-kerala-wonders/coimbatore-kerala-wonders2.avif","/coimbatore-kerala-wonders/coimbatore-kerala-wonders3.avif","/coimbatore-kerala-wonders/coimbatore-kerala-wonders4.jpg"],
    tag: "Family Special",
  },
  {
    id: 16,
    title: "Cochin To Wayanad Trivandrum Grand Tour",
    slug: "kerala-panorama-10d-9n",
    duration: " 10 Days  9 Nights",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Cochin",
    description: "The most comprehensive Kerala experience. From Wayanad in the north to the backwaters of Alleppey and the southern beaches of Kovalam.",
    termsConditions: ["Standard Kerala T&C apply"],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
   includes: ["Private Cab for pick up till drop", "Accomodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/kerala-panorama/kerala-panorama2.webp",
    places: ["/kerala-panorama/kerala-panorama2.webp", "/kerala-panorama/kerala-panorama3.jpg", "/kerala-panorama/kerala-panorama4.webp", "/kerala-panorama/kerala-panorama5.webp", "/kerala-panorama/kerala-panorama6.jpg"],
    tag: "Signature Journey",
  }
];

export const fleet = [
  {
    id: 1,
    name: "Premium Innova Crysta",
    image: "/vehicles/toyota-innova-crysta.webp",
    capacity: "6+1 Seater",
    bags: "4 Luggage",
    type: "Luxury MUV",
    features: ["AC", "Heater", "Carrier"],
  },
  {
    id: 2,
    name: "Luxury Tempo Traveller",
    image: "/vehicles/12-seater-tempo-traveller.jpg",
    capacity: "12 to 17 Seater",
    bags: "10+ Luggage",
    type: "Group Travel",
    features: ["Pushback Seats", "Music System", "AC"],
  },
  {
    id: 3,
    name: "Swift Dzire",
    image: "/vehicles/dzire.jpg",
    capacity: "4+1 Seater",
    bags: "2 Luggage",
    type: "Premium Sedan",
    features: ["AC", "Compact", "Heater"],
  },
  {
    id: 4,
    name: "Maruti Ertiga",
    image: "/vehicles/Ertiga.avif",
    capacity: "6+1 Seater",
    bags: "2 Luggage",
    type: "Comfort MUV",
    features: ["AC", "Music System", "Heater"],
  },
  {
    id: 5,
    name: "Toyota Innova",
    image: "/vehicles/innova.jpg",
    capacity: "6+1 Seater",
    bags: "4 Luggage",
    type: "Luxury MUV",
    features: ["AC", "Heater", "Carrier"],
  },
  {
    id: 6,
    name: "Coach Van (24 Seater)",
    image: "/vehicles/coach.jpg",
    capacity: "24 Seater",
    bags: "20+ Luggage",
    type: "Large Group Coach",
    features: ["AC", "Pushback Seats", "Large Storage"],
  },
  {
    id: 7,
    name: "Toyota Etios",
    image: "/vehicles/Etios.avif",
    capacity: "4+1 Seater",
    bags: "2 Luggage",
    type: "Premium Sedan",
    features: ["AC", "Compact", "Heater"],
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "/galleryImages/customer1.jpg",
    title: "Tea Estates",
    category: "Nature",
  },
  {
    id: 2,
    src: "/galleryImages/customer2.jpg",
    title: "Wildlife Safari",
    category: "Adventure",
  },
  {
    id: 3,
    src: "/galleryImages/customer3.jpg",
    title: "Athirapally Falls",
    category: "Waterfalls",
  },
  {
    id: 4,
    src: "/galleryImages/customer4.jpg",
    title: "Topslip Greenery",
    category: "Forest",
  },
];

export const attractions = [
  // --- POLLACHI & VALPARAI SECTOR ---
  {
    title: "Aliyar Dam",
    category: "Reservoir",
    image: "/attractions/Aliyar Dam.jpg",
    tag: "Foothills"
  },
  {
    title: "Monkey Falls",
    category: "Waterfalls",
    image: "/attractions/Monkey Falls.avif",
    tag: "Natural Pool"
  },
  {
    title: "Sholayar Dam",
    category: "Engineering",
    image: "/attractions/caption.jpg",
    tag: "Deepest in Asia"
  },
  {
    title: "Topslip Safari",
    category: "Wildlife",
    image: "/attractions/one-day-coimbatore-to-topslip-sightseeing-tour-package-by-car-elephant-safari-at-topslip.webp",
    tag: "Tiger Reserve"
  },
  {
    title: "Parambikulam",
    category: "Nature",
    image: "/attractions/we-are-a-tour-operator.jpg",
    tag: "Eco-Tourism"
  },

  // --- OOTY & COONOOR SECTOR ---
  {
    title: "Ooty Botanical Garden",
    category: "Flora",
    image: "/ooty-masinagudi/ooty-masinagudi1.jpg",
    tag: "Heritage Park"
  },
  {
    title: "Pykara Lake",
    category: "Boating",
    image: "/attractions/fb-img-1536802621189.jpg",
    tag: "Scenic Beauty"
  },
  {
    title: "Mudumalai / Masinagudi",
    category: "Wildlife",
    image: "/ooty-masinagudi/ooty-masinagudi3.jpg",
    tag: "Jungle Safari"
  },

  // --- KODAIKANAL SECTOR ---
  {
    title: "Kodai Lake",
    category: "Leisure",
    image: "/attractions/a7b7107e-c5da-4362-992a-edec53c68948.jpg",
    tag: "Star Shaped Lake"
  },
  {
    title: "Pillar Rocks",
    category: "Nature",
    image: "/attractions/pillar-rocks.jpg",
    tag: "Kodai Landmark"
  },

  // --- KERALA (MUNNAR, ATHIRAPALLY, ALLEPPEY) ---
  {
    title: "Athirapally Falls",
    category: "Waterfalls",
    image: "/attractions/athirapally-falls-in.jpg",
    tag: "Niagara of India"
  },
  {
    title: "Munnar Tea Gardens",
    category: "Vistas",
    image: "/attractions/tea-gardens.jpg",
    tag: "Rolling Hills"
  },
  {
    title: "Alleppey Houseboat",
    category: "Backwaters",
    image: "/cochin-alleppey-munnar-thekkady/cochin-alleppey-munnar-thekkady1.jpg",
    tag: "Floating Luxury"
  },
  {
    title: "Thekkady",
    category: "Spices",
    image: "/cochin-alleppey-munnar-thekkady/cochin-alleppey-munnar-thekkady4.jpg",
    tag: "Periyar Lake"
  },
  {
    title: "Kanthaloor",
    category: "Agriculture",
    image: "/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor4.jpg",
    tag: "Fruit Orchards"
  },

  // --- SPIRITUAL & COIMBATORE ---
  {
    title: "Adiyogi Isha",
    category: "Spiritual",
    image: "/coimbatore-isha-valparai/coimbatore-isha-valparai5.webp",
    tag: "Largest Bust"
  }
];
export const roomsData = [
  {
    id: 1,
    name: "6 Pax Family Dorm",
    price: "3800",
    folder: "6 pax family Dorm",
    capacity: "6 People",
    features: ["Bunk Beds", "Shared Area", "Spacious"],
    images: ["/rooms/6 pax family Dorm/9dc0d984-044e-4d4e-928c-883fbeb43329.jpg"] // Assuming these names inside the folder
  },
  {
    id: 2,
    name: "Deluxe Family Suite with Balcony",
    price: "3000",
    folder: "Deluxe Family suite Room with Balcony",
    capacity: "4 People",
    features: ["Private Balcony", "King Bed", "Premium View"],
    images: ["/rooms/Deluxe Family suite Room with Balcony/3e5e9c4f-8b74-4883-9421-d516a4570155.jpg", "/rooms/Deluxe Family suite Room with Balcony/06841c00-2816-4895-ab83-9cd1ad1461db.jpg", "/rooms/Deluxe Family suite Room with Balcony/f0e847b7-78cd-4712-8465-405bb3fb5bb8.jpg"]
  },
  {
    id: 3,
    name: "Deluxe Room (Tea Estate View)",
    price: "3500",
    folder: "Deluxe Room with Tea Estate view",
    capacity: "2 People",
    features: ["Garden View", "Tea Estate Access", "Quiet"],
    images: ["/rooms/Deluxe Room with Tea Estate view/35c21a24-3184-4e0d-a72d-07055e1d48ba.jpg", "/rooms/Deluxe Room with Tea Estate view/94b976ee-4471-4721-846f-6e6c36e56331.jpg", "/rooms/Deluxe Room with Tea Estate view/3956b01a-8bf9-4344-a431-b1a257e90580.jpg","/rooms/Deluxe Room with Tea Estate view/cc3560a0-a694-471f-bdd6-d76a8c193f21.jpg","/rooms/Deluxe Room with Tea Estate view/e46d4d38-321d-4c4c-8885-c75166e6156b.jpg"]
  },
  {
    id: 4,
    name: "Standard Double Room",
    price: "1500",
    folder: "Standard Double Room",
    capacity: "2 People",
    features: ["Budget Friendly", "Attached Bath", "Cozy"],
    images: ["/rooms/Standard Double Room/9fa0398b-c340-40b7-9c2d-6a3ae7a7a80d.jpg", ]
  },
  {
    id: 5,
    name: "Standard Family Suite",
    price: "2500",
    folder: "Standard Family Suite Room",
    capacity: "4 People",
    features: ["Family Layout", "Storage", "Clean"],
    images: ["/rooms/Standard Family Suite Room/253a4e61-f6a5-4511-97f2-b7c990657c7e.jpg",]
  },
  {
    id: 6,
    name: "Standard Suite Room",
    price: "2500",
    folder: "Standard Suite Room",
    capacity: "2-3 People",
    features: ["Work Desk", "Sofa", "Elegant"],
    images: ["/rooms/Standard Suite Room/609fe975-9b69-42c1-9d6a-27056259ecae.jpg",]
  },
  {
    id: 7,
    name: "Super Deluxe Room",
    price: "4500",
    folder: "Super Deluxe Room",
    capacity: "2 People",
    features: ["Luxury Decor", "Best View", "King Size Bed"],
    images: ["/rooms/Super Deluxe Room/41c143dc-bfb6-455b-961f-b7ade2ebbf31.jpg", "/rooms/Super Deluxe Room/ab007e12-875c-4bbf-b7a6-422d0285bac0.jpg", ]
  }
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
