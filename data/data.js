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
  name: "Valparai Mahesh Travels",
  founderImg: "/founder.jpg",
  logo: "/logo.jpg",
  contact: {
    phone: "+91 9487424257",
    whatsapp: "919487424257", // International format for URL linking
    email: "valparaiholidaytours@gmail.com", // Added missing data
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
    name: "Tour Packages",
    slug: "tours",
    icon: <Package size={16} />,
    items: [
      {
        name: "Valparai Tour Packages",
        slug: "valparai-tours",
        icon: <MapPin size={14} />,
        items: [
          {
            name: "2D 1N Pollachi Valparai Tour Package",
            slug: "pollachi-valparai-2d-1n",
          },
          {
            name: "3D 2N Pollachi Topslip Parambikulam Valparai",
            slug: "pollachi-topslip-parambikulam-valparai-3d-2n",
          },
          {
            name: "4D 3N Topslip Parambikulam Valparai Athirapally",
            slug: "topslip-parambikulam-valparai-athirapally-4d-3n",
          },
          {
            name: "5D 4N Coimbatore Isha Marudamalai Pollachi Valparai",
            slug: "coimbatore-isha-valparai-5d-4n",
          },
        ],
      },

      {
        name: "Ooty Tour Packages",
        slug: "ooty-tours",
        icon: <MapPin size={14} />,
        items: [
          {
            name: "3D 2N Coonoor Ooty Pykara Mudumalai",
            slug: "coimbatore-ooty-mudumalai-3d-2n",
          },
          {
            name: "4D 3N Coimbatore Coonoor Ooty Pykara Masinagudi",
            slug: "coimbatore-ooty-masinagudi-4d-3n",
          },
          {
            name: "6D 5N Grand Kodaikanal Ooty Coonoor Mudumalai",
            slug: "coimbatore-kodai-ooty-mudumalai-6d-5n",
          },
        ],
      },

      {
        name: "Kodaikanal Tour Packages",
        slug: "kodaikanal-tours",
        icon: <MapPin size={14} />,
        items: [
          {
            name: "3D 2N Kodaikanal Local & Sightseeing",
            slug: "kodai-road-kodaikanal-3d-2n",
          },
        ],
      },

      {
        name: "Kerala Tour Packages",
        slug: "kerala-tours",
        icon: <MapPin size={14} />,
        items: [
          {
            name: "3D 2N Kanthaloor Marayoor Munnar Tour",
            slug: "coimbatore-kanthaloor-marayoor-munnar-3d-2n",
          },
          {
            name: "4D 3N Cochin Munnar Kanthaloor Marayoor",
            slug: "cochin-munnar-kanthaloor-marayoor-4d-3n",
          },
          {
            name: "5D 4N Wonders of Kerala Coimbatore Departure",
            slug: "coimbatore-kerala-wonders-5d-4n",
          },
          {
            name: "6D 5N Cochin Alleppey Munnar Thekkady",
            slug: "cochin-alleppey-munnar-thekkady-6d-5n",
          },
          {
            name: "10D 9N Cochin To Wayanad Trivandrum Grand Tour",
            slug: "kerala-panorama-10d-9n",
          },
        ],
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
    hider:true,
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
    title: "Athirappilly Waterfalls Escape",
    description:
      "Witness Kerala's majestic Athirappilly Falls, lush forests, scenic drives, and unforgettable nature experiences.",
    image: "/HeroImages/valparai-athirapally-tour-package.webp",
    badge: "Waterfall Adventure",
    tags: [
      { icon: <Waves size={14} />, label: "Waterfalls" },
      { icon: <Star size={14} />, label: "Nature Tour" },
    ],
  },

  {
    id: 2,
    title: "Parambikulam Wildlife Safari",
    description:
      "Explore Parambikulam Tiger Reserve, spot exotic wildlife, enjoy jungle safaris, and discover untouched forests.",
    image: "/HeroImages/valparai-parambikulam-tour-package.webp",
    badge: "Wildlife Special",
    tags: [
      { icon: <Palmtree size={14} />, label: "Safari" },
      { icon: <Mountain size={14} />, label: "Wildlife" },
    ],
  },

  {
    id: 3,
    title: "Topslip Jungle Adventure",
    description:
      "Experience the beauty of Topslip with forest safaris, elephant sightings, trekking trails, and eco-tourism.",
    image: "/HeroImages/valparai-topslip-tour-package.webp",
    badge: "Forest Getaway",
    tags: [
      { icon: <Palmtree size={14} />, label: "Eco Tourism" },
      { icon: <Mountain size={14} />, label: "Jungle Safari" },
    ],
  },

  {
    id: 4,
    title: "Valparai Scenic Tour",
    description:
      "Discover winding mountain roads, tea plantations, waterfalls, viewpoints, and the natural charm of Valparai.",
    image: "/HeroImages/valparai-tour-package.webp",
    badge: "Most Popular",
    tags: [
      { icon: <Palmtree size={14} />, label: "Tea Estates" },
      { icon: <Mountain size={14} />, label: "Viewpoints" },
    ],
  },

  {
    id: 5,
    title: "Valparai Tour Packages",
    description:
      "Customized family, couple, and group tour packages covering Valparai, Topslip, Athirappilly, and Kerala destinations.",
    image: "/HeroImages/valparai-tour-packages.webp",
    badge: "Best Seller",
    tags: [
      { icon: <Palmtree size={14} />, label: "Custom Tours" },
      { icon: <Mountain size={14} />, label: "Multi-Day Trips" },
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
    description: "40 hairpin bends, misty dams & endless tea carpets — escape to Valparai, South India's '7th Heaven' in just 2 days!",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/pollachi-valparai/pollachi-valparai-2d-1n.png",
    places: ["/pollachi-valparai/pollachi-valparai-tour-package.mp4","/pollachi-valparai/valparai-pollachi-1.jpg", "/pollachi-valparai/valparai-pollachi-2.jpg", "/pollachi-valparai/valparai-pollachi-3.jpg", "/pollachi-valparai/valparai-pollachi-4.jpg","/pollachi-valparai/valparai-pollachi-5.jpg","/pollachi-valparai/valparai-pollachi-6.jpg","/pollachi-valparai/valparai-pollachi-7.jpg"],
    tag: "Quick Escape",
  },
  {
    id: 2,
    title: "Pollachi Topslip Parambikulam Valparai Tour Package",
    slug: "pollachi-topslip-parambikulam-valparai-3d-2n",
    duration: "3 Days 2 Night ",
    basePrice: "On Request",
    category: "Valparai",
    tourFrom: "Pollachi",
    description: "Teak forests, bamboo rafting & misty tea estates — the ultimate Western Ghats wildlife & hill combo in 3 unforgettable days!",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/pollachi-topslip-valparai/pollachi-topslip-parambikulam-valparai-3d-2n.png",
    places: ["/pollachi-topslip-valparai/pollachi-valparai-topslip-1.webp", "/pollachi-topslip-valparai/pollachi-valparai-topslip-2.webp", "/pollachi-topslip-valparai/pollachi-valparai-topslip-3.webp", "/pollachi-topslip-valparai/pollachi-valparai-topslip-4.jpg","/pollachi-topslip-valparai/pollachi-valparai-topslip-5.jpg"],
    tag: "Best Seller",
  },
  {
    id: 3,
    title: "Pollachi Valparai Athirapally Waterfalls Tour Package",
    slug: "pollachi-valparai-athirapally-3d-2n",
    duration: "3 Days 2 Night",
    basePrice: "On Request",
    category: "Valparai",
    tourFrom: "Pollachi / Valparai",
    description: "Chase India's Niagara! The roar of Athirapally Falls meets the misty serenity of Valparai's tea hills in one epic 3-day escape.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/valparai-athirapally/pollachi-valparai-athirapally-3d-2n.png",
    places: ["/valparai-athirapally/athirapally-falls-in.jpg", "/valparai-athirapally/Valparai.jpg", "/valparai-athirapally/munnar.jpg"],
    tag: "Nature Lovers",
  },
  {
    id: 4,
    title: "Topslip Parambikulam Valparai Athirapally Tour Package",
    slug: "topslip-parambikulam-valparai-athirapally-4d-3n",
    duration: "4 Days 3 Night",
    basePrice: "On Request",
    category: "Valparai",
    tourFrom: "Coimbatore / Pollachi",
    description: "Wildlife, deep reservoirs & thunderous waterfalls — experience the very best of the Western Ghats in one thrilling 4-day journey.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/wildlife-waterfalls/topslip-parambikulam-valparai-athirapally-4d-3n.png",
    places: ["/wildlife-waterfalls/parambikulam1.webp", "/wildlife-waterfalls/athirapally-tours.webp", "/wildlife-waterfalls/valparai.webp"],
    tag: "Adventure",
  },
  {
    id: 5,
    title: "Coimbatore Isha Marudamalai Pollachi Valparai Tour Package",
    slug: "coimbatore-isha-valparai-5d-4n",
    duration: "5 Days 4 Night",
    basePrice: "On Request",
    category: "Valparai",
    tourFrom: "Coimbatore",
    description: "From Adiyogi's grace to Valparai's misty embrace — a 5-day spiritual & nature odyssey through Coimbatore's finest landscapes.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/coimbatore-isha-valparai/coimbatore-isha-valparai-5d-4n.png",
    places: ["/coimbatore-isha-valparai/coimbatore-isha-valparai1.webp", "/coimbatore-isha-valparai/coimbatore-isha-valparai2.webp", "/coimbatore-isha-valparai/coimbatore-isha-valparai3.webp"],
    tag: "Spiritual & Nature",
  },

  // --- OOTY CATEGORY (3 PACKAGES) ---
  {
    id: 6,
    title: "Coonoor Ooty Pykara Mudumalai Tour Package",
    slug: "coimbatore-ooty-mudumalai-3d-2n",
    duration: "3 Days 2 Night",
    basePrice: "On Request",
    category: "Ooty",
    tourFrom: "Coimbatore",
    description: "Toy trains, crystal lakes & wild elephants — explore the Queen of Hills from Coonoor to Mudumalai in a perfect 3-day getaway.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/ooty-mudumalai/coimbatore-ooty-mudumalai-3d-2n.png",
    places: ["/ooty-mudumalai/ooty-mudumalai1.jpg", "/ooty-mudumalai/ooty-mudumalai2.png", "/ooty-mudumalai/ooty-mudumalai3.jpg"],
    tag: "Classic Ooty",
  },
  {
    id: 7,
    title: "Coonoor Ooty Pykara Masinagudi Tour Package",
    slug: "coimbatore-ooty-masinagudi-4d-3n",
    duration: "4 Days 3 Night",
    basePrice: "On Request",
    category: "Ooty",
    tourFrom: "Coimbatore",
    description: "Scenic falls by day, leopards by night — dive deep into the Blue Mountains with a thrilling Masinagudi wildlife stay included.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/ooty-masinagudi/coimbatore-ooty-masinagudi-4d-3n.png",
    places: ["/ooty-masinagudi/ooty-masinagudi1.jpg", "/ooty-masinagudi/ooty-masinagudi2.jpg", "/ooty-masinagudi/ooty-masinagudi3.jpg"],
    tag: "Wildlife Choice",
  },
  {
    id: 8,
    title: "Grand Kodaikanal Ooty Coonoor Mudumalai Tour Package",
    slug: "coimbatore-kodai-ooty-mudumalai-6d-5n",
    duration: "6 Days 5 Night",
    basePrice: "On Request",
    category: "Ooty",
    tourFrom: "Coimbatore",
    description: "Kodaikanal mist, Ooty's charm & Mudumalai's wild heart — South India's grandest 6-day hill station tour, all in one epic trip!",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/coimbatore-kodai-ooty-mudumalai/coimbatore-kodai-ooty-mudumalai-6d-5n.png",
    places: ["/coimbatore-kodai-ooty-mudumalai/coimbatore-kodai-ooty-mudumalai1.jpg", "/coimbatore-kodai-ooty-mudumalai/coimbatore-kodai-ooty-mudumalai2.jpg","/coimbatore-kodai-ooty-mudumalai/coimbatore-kodai-ooty-mudumalai3.jpg"],
    tag: "Grand Tour",
  },

  // --- KODAIKANAL CATEGORY (2 PACKAGES) ---
  {
    id: 9,
    title: "Kodaikanal Local & Sightseeing Tour Package",
    slug: "kodai-road-kodaikanal-3d-2n",
    duration: " 3 Days 2 Nights",
    basePrice: "On Request",
    category: "Kodaikanal",
    tourFrom: "Kodai Road / Madurai",
    description: "Coaker's Walk, Kodai Lake & Pillar Rocks mist — discover why Kodaikanal is crowned the Princess of South Indian hill stations.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/kodaikanal/kodai-road-kodaikanal-3d-2n.png",
    places: ["/kodaikanal/kodaikanal1.jpg", "/kodaikanal/kodaikanal2.jpg", "/kodaikanal/kodaikanal3.jpg"],
    tag: "Family Favorite",
  },
  {
    id: 10,
    title: "Coimbatore Kodaikanal Ooty Coonoor Mudumalai Tour Package",
    slug: "coimbatore-kodaikanal-ooty-mudumalai-6d-5n",
    duration: " 6 Days 5 Nights",
    basePrice: "On Request",
    category: "Kodaikanal",
    tourFrom: "Coimbatore",
    description: "Three iconic hill stations, one grand 6-day family adventure — Kodaikanal, Ooty & Mudumalai await from the heart of Coimbatore.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/kodai-ooty/coimbatore-kodaikanal-ooty-mudumalai-6d-5n.png",
    places: ["/kodai-ooty/kodai-ooty1.jpg", "/kodai-ooty/kodai-ooty2.png", "/kodai-ooty/kodai-ooty3.avif"],
    tag: "Premium Grand Tour",
  },

  // --- KERALA CATEGORY (6 PACKAGES) ---
  {
    id: 11,
    title: "Kanthaloor Marayoor Munnar Tour Tour Package",
    slug: "coimbatore-kanthaloor-marayoor-munnar-3d-2n",
    duration: "3 Days 2 Night",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Udumalpet / Coimbatore",
    description: "Ancient Dolmens, fresh orchards & emerald tea gardens — unlock Kerala's best-kept secret across Kanthaloor, Marayoor & Munnar.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/munnar-kanthaloor/coimbatore-kanthaloor-marayoor-munnar-3d-2n.png",
    places: ["/munnar-kanthaloor/munnar-kanthaloor1.jpg", "/munnar-kanthaloor/munnar-kanthaloor2.jpg"],
    tag: "Offbeat Kerala",
  },
  {
    id: 12,
    title: "Cochin Munnar Kanthaloor Marayoor Tour Package",
    slug: "cochin-munnar-kanthaloor-marayoor-4d-3n",
    duration: "4 Days 3 Night",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Cochin",
    description: "From Cochin's shores to Munnar's emerald hills — this 4-day Kerala escape blends coastal charm with misty mountain serenity.",
     termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor-4d-3n.png",
    places: ["/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor2.jpg", "/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor3.jpg","/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor1.jpg","/cochin-munnar-kanthaloor-marayoor/cochin-munnar-kanthaloor-marayoor4.jpg"],
    tag: "Top Choice",
  },
  {
    id: 13,
    title: "Wonders of Kerala Coimbatore Departure Tour Package",
    slug: "coimbatore-kerala-wonders-5d-4n",
    duration: "5 Days 4 Nights",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Coimbatore",
    description: "Spice trails, mountain mists & cultural gems — experience the wonders of Kerala in one action-packed 5-day Coimbatore departure.",
     termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/coimbatore-kerala-wonders/coimbatore-kerala-wonders-5d-4n.png",
    places: ["/coimbatore-kerala-wonders/coimbatore-kerala-wonders1.jpg", "/coimbatore-kerala-wonders/coimbatore-kerala-wonders2.avif","/coimbatore-kerala-wonders/coimbatore-kerala-wonders3.avif","/coimbatore-kerala-wonders/coimbatore-kerala-wonders4.jpg"],
    tag: "Adventure",
  },
  {
    id: 14,
    title: "Cochin Alleppey Houseboat Munnar Tour Package",
    slug: "cochin-alleppey-houseboat-munnar-5d-4n",
    duration: "5 Days  4 Nights",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Cochin",
    description: "Float on Alleppey's legendary backwaters, then wake to Munnar's misty tea hills — the most romantic 5-day Kerala escape awaits.",
    termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
    includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/alleppey-munnar/cochin-alleppey-munnar-thekkady-6d-5n.png",
    places: ["/alleppey-munnar/alleppey-munnar1.jpg", "/alleppey-munnar/alleppey-munnar2.jpg", "/alleppey-munnar/alleppey-munnar3.jpg"],
    tag: "Honeymoon Special",
  },
  {
    id: 15,
    title: "Cochin Alleppey Munnar Thekkady Tour Package",
    slug: "cochin-alleppey-munnar-thekkady-6d-5n",
    duration: " 6 Days 5 Nights",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Cochin",
    description: "Backwaters, tea hills & spice trails — savour the full flavour of Kerala across Alleppey, Munnar & Thekkady in 6 magical days.",
     termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
     includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/alleppey-munnar/cochin-alleppey-munnar-thekkady-6d-5n.png",
    places: ["/coimbatore-kerala-wonders/coimbatore-kerala-wonders1.jpg", "/coimbatore-kerala-wonders/coimbatore-kerala-wonders2.avif","/coimbatore-kerala-wonders/coimbatore-kerala-wonders3.avif","/coimbatore-kerala-wonders/coimbatore-kerala-wonders4.jpg"],
    tag: "Family Special",
  },
  {
    id: 16,
    title: "Cochin To Wayanad Trivandrum Grand Tour Tour Package",
    slug: "kerala-panorama-10d-9n",
    duration: " 10 Days  9 Nights",
    basePrice: "On Request",
    category: "Kerala",
    tourFrom: "Cochin",
    description: "Mountains to beaches, forests to backwaters — Kerala's ultimate 10-day signature journey from Wayanad's mist to Kovalam's surf.",
     termsConditions: ["The rates are inclusive of all taxes", "All the bookings must be confirmed with a 50% advance payment.", "Members Occupancy in a room: 3 Adults or 2 Adults and 1 Children", "15 days before scheduled arrival – 75% refund.", "8 – 14 days before scheduled arrival – 50% refund.", "7 days or less – no refund."],
    priceTiers: [{ members: "2 members", price: "3,499" }, { members: "3 members", price: "2,999" }, { members: "4 members", price: "2,499" }, { members: "5+ members", price: "1,999" }],
   includes: ["Private Cab for pick up till drop", "Accommodation with Comfortable Stay", "Dinner/Breakfast Complementary (vegetarian)", "Driver Beta", "Toll/ Parking", "Interstate Permit"],
    excludes: ["Cost of entry tickets", "Personal Expenses", "Lunch"],
    image: "/kerala-panorama/kerala-panorama-10d-9n.png",
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

export const galleryImage = Array.from({ length: 46 }, (_, i) => 
  `/valparai/valparai-pollachi-package-${i + 1}.jpg`
);
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



export const testimonials = [
    {
        "title": "VALPARAI MAHESH TRAVELS",
        "review_rating": 4.9,
        "review_count": 431,
        "reviews_link": "https://search.google.com/local/reviews?placeid=ChIJP7PZ5LaJBzsRbJC-E2iRhOY&authuser=0&hl=en&gl=US",
        "rating_1_count": "8",
        "rating_2_count": "2",
        "rating_3_count": "1",
        "rating_4_count": "19",
        "rating_5_count": "401",
        "reviews": [
            {
                "name": "Balaji Raman",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocKqyip0YXf0TVHHUYsHogrtsxlFK9iJC3L2rnHsFLSD0M46=s120-c-rp-mo-br100",
                "time": "2026-01-04T02:50:47.179Z",
                "rating": 5,
                "description": "Nice arrangements were made from pickup to drop. A 3 days trip with 2 night stay at Valparai was a pleasent experience.\nExperienced driver shown all the site seeings including the drive to athirappilly falls was wonderful experience.\nNice hospitality from Mr.Mahesh and his driver Mr.Rajagopal.\nOverall had good memories.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIABIhBYLzUcavng7hqyvo6qTCx2&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Gowtham GP",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocLgmDMQj-ifa6NsYiwnw2u6Ymg9IoHo6Glm7oPjlbNDrVz8jg=s120-c-rp-mo-br100",
                "time": "2025-08-21T07:24:38.940Z",
                "rating": 5,
                "description": "We highly recommend valparai mahesh travels for anyone planning a trip to valparai and nearby places. The booking process was seamless, and they took care of every detail with complete tour package. With the help of our driver and naturalist Mahesh sir—who was friendly, knowledgeable, and humble—we were able to explore all the beautiful and must-visit places in valparai parambikulam Pollachi and coimbatore local sightseeing tour.\n\nExcellent stay,food, sightseeing activities,vehicle,driver friendly,explored all parts this anaimalai hills for the past 3 days with family and we are returning back to Chennai withs tons of memories.This is because of valparai mahesh travels and his team.\n\nWe doesn't expect anything and booked this travels with number taken from Google.After this 4 days tour we really feel their service and field work.Very humble and professional team 20 different types of vehicles and 2 fleet in south india.very experienced company with helpfull drivers.\n\nThank you for providing us with such a wonderful and memorable experience!",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIABIhB6esMSsFDm9VU0tpUW127i&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Kpriya Kpriyanga",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocKMr8ZlSmUNJvcEReI2L_eO1DWzR1ap7Lx3BS1EtmysjLzP-g=s120-c-rp-mo-br100",
                "time": "2025-10-14T05:05:16.135Z",
                "rating": 5,
                "description": "My trip was an unplanned tour of 5 Days 4 night pollachi topslip parambikulam valparai athirapally waterfalls tour package. With my family of 4 adults and 2 kids,I contacted Valparai Mahesh Tours And Travels by website at just previous night of my trip begins. Owner of Mahesh Tours And Travels, Mr.Mahesh Kumar instantly replyed me and explained all the pros and cons about my tour plan very politely. He came himself as a driver at my entire trip.\n\nFew points about Mr.Mahesh kumar,\n\n1.I am very much impressed is his punctuality and time management.\n\n2.He is very polite, friendly and cheerful person.food, stay and activities are excellent.\n\n3.He guided us in my trip. He intimate all about local activities, entertainments, attractions, adventures, local goodness and scams of places where we visited.\n\n4.His caring attitude is really good. He made my trip safe and reliable.\n\n5.stay arranged inside forest parambikulam wad bind blowing and from city life we enjoyed nature and wildlife.\n\n6.Trip was very informative and enjoyed with family.\n\nHighly recommend travels with quality and service.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIABIhDvgebT_bknMnf4ldoF1Aff&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Arun kumar",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjWwUA1L8nLxtUHpDL9jcxb4o0yQb6XAbB_9hiGYoSCukd2vPLw=s120-c-rp-mo-br100",
                "time": "2025-08-21T06:56:19.726Z",
                "rating": 5,
                "description": "TRIP WORTHY👍👍👍👍👍\n\nThank You so much Mahesh sir❤️ Its a 3 days 2 night trip covering valparai topslip and parambikulam with family of 4 people booked valparai mahesh travels.\n\nTo start with pollachi junction till end of the trip valparai topslip and parambikulam the hospitality of the hotel assistants, cab Driver Mr.Rajagopal was very helpful and satisfactory.. we visited all the places safely, timely and also we were informed about the historical news of the places by the driver himself which was helpful to make the trip more memorable..valparai has become my most favourite trip especially because of the nature anf wildlife safari, tribal symphony, forest stay, trekking etc of arrangements made by Mr. Mahesh sir for our family. Wow breathtaking road curves and natural beauty!!\n\nTour package was very cost economic and customized . Food prepared was homely and taste was very good as we are vegetarian of nominal cost. Thanks for the chef from mahesh travels for their food choices provided with great taste.stay was very excellent and clean, comfort for 2 nights with all aminities.\n\nWill definitely we and out neighbours will keep in touch for the next trip. Well organized and professional people in tourism.i will refer your number to relatives and friends.\n\nThank you mahesh and team mahesh travels.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIABIhAb1dxS-iAjLacdcAaq9Qh1&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Priya S",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocJi1uRvIAk9jn_8581M7_wQ2g7qNqxU2QZ7_gX7aCJirap3Fg=s120-c-rp-mo-br100",
                "time": "2026-01-18T09:59:26.830Z",
                "rating": 5,
                "description": "I am sincerely thank you for the wonderful hospitality you showed my family during our recent pongal leave trip to Valparai.\n\nWe truly appreciated the deep knowledge and details you shared with us about the forest and nature. Because of you, we felt like family throughout the journey, and my entire family enjoyed the experience immensely.\n\nI will strongly recommend Mahesh Travels to anyone without a second thought. It was a trip we will cherish for a lifetime.\n\nThank you so much again for everything Brother. That goodbye felt like leaving a family member behind. It was truly a pleasure spending time together.",
                "images": null
            },
            {
                "name": "Vaishali Jeeva",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocJ-lJkjCHEkvFLE2yXafRUzuU4wxKlR4-mtpaFxPcGTHmkKRA=s120-c-rp-mo-br100",
                "time": "2026-01-18T11:26:43.278Z",
                "rating": 5,
                "description": "\"Just returned from a beautiful 3-day, 2-night trip to Valparai. A huge thank you to Mr. Mahesh sir for organizing everything perfectly. From the moment we started, everything was well-planned and stress-free.\n​He was not just a travel agent or driver; we felt him like our family member.   and specially that elephant crossing scene was awesome and mesmerizing, unforgettable moments in my life.He ensured our safety, showed us the best local spots, your patient and caring throughout the journey. If you are looking for someone trustworthy who treats you with genuine care, that's the person we recommend Mr.Mahesh Thank you, sir, for the memories!\"\n​My family and I truly enjoyed every moment. More than the sightseeing, we appreciated your company and care.  We felt very safe and comfortable with you. We will definitely recommend you to our friends.\n​",
                "images": null
            },
            {
                "name": "Munish Waran",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjVyD1Uu-PhQwVfAFWjSJ5Yof7UiHXm0sKXTIL48jjZ1oWIuYlU5=s120-c-rp-mo-br100",
                "time": "2025-12-01T06:03:43.159Z",
                "rating": 5,
                "description": "Booked 5 days 4 nights tour package with family of 6 persons and 2 kids from Chennai.Family and enjoyed the beautiful sightseeings of valparai parambikulam athirapally falls.special mention they given a very good stay for 4 nights with breathtaking views and parambikulam stay arranged by Mahesh sir was highly appreciated.As Mahesh sir was a naturalist with him as a cab driver for our 5 days trip was very informative and we doesn't see a person with tons of knowledge in wildlife and local insights.\n\nWe enjoyed many wildlife spottings elephant,leopard,sloth bear,wild dogs,great Indian guar,lion tailed macaque,giant squirrel, and many birds etc in this tour with help of Mahesh.He is very good guide and good friend I had got from valparai.\n\nFood provided in the package was very excellent and home made local stuff.Special mention on time food was delivered to room.Non veg was very tasty as we paid that belongs to our request.\n\nWe enjoyed local cusines,bamboo rafting,tribal dance,tribal people visit, with help of Mahesh and stay given inside the forest was highly recommend by this travels.\n\nWe covered all places and tour was very customer friendly.Punctual on time pick up drop feels we are very safe.As with family Mahesh sir driving skills was out of box in hills journey,\n\nVehicle given by them was Innova very clean and excellent maintenance with service records feels very safe to drive for 5 days.\n\nExcellent service, customer service was their top notched.will share their contacts to all my family and friends.",
                "images": null
            },
            {
                "name": "Chandru K",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjV6BKHdeZcdjVNq_enf1elmCEPOBzDOV2Kv2QNk2v7H2zKWnkI=s120-c-rp-mo-br100",
                "time": "2025-12-02T05:23:31.437Z",
                "rating": 5,
                "description": "We planned a trip to Valparai athirapally topslip parabikulam for 4 days tour for my Honeymoon in Valparai mahesh Travels. Mr.Mahesh kumar provide a trip  Budget Friendly and affordable with quality and service.This trip was Very Memorable To us...The Guide (Mr.siva) was Very Supportive And Helped with Kindly Heart from trip Start to End.\n\nEnjoyed each and every day of this 4 days with our cab driver siva anna.explained each and every sightseeing places and waits for all our request a friendly driver was a true gift for our tour.\n\nOur tour planner Mr.Mahesh Kumar was very kind and humble to make this honeymoon trip a memorable lifetime one.from the pick up till end of the 4 days all details sent by Mahesh sir was perfectly arranged.\n\nChef Guna anna was very positive and provide a good food for us.thank u.\n\nHigh quality service, affordable price,food,activities,stay given by them was highly recommend as based on our budget.\n\nOverall a satisfied trip for my loved ones.Thank you Mahesh travels and team.",
                "images": null
            },
            {
                "name": "Kamali Venkatachalam",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjXJBxc5QW_qsAlU5VdZ6YxFiDKeVW7J1LK_H50610HsziPZRrjZyA=s120-c-rp-mo-ba4-br100",
                "time": "2025-10-26T14:11:02.126Z",
                "rating": 5,
                "description": "We recently booked a short family vacation to Valparai through Mahesh Travels, and it was one of the most comfortable and happiest trips we've ever planned! The hospitality, room stay, restaurant recommendations, and sightseeing were all well-organized, making for an overall great experience. We'd like to extend our gratitude to Mr. Mahesh for an excellent vacation experience. Mr. Mahesh is an epitome of politeness, friendliness, and helpfulness. His explanations are engaging and informative, making him a true asset. He's a walking encyclopedia of forest species, and his knowledge is truly impressive. We highly recommend Valparai Mahesh Travels for any vacation plans..",
                "images": null
            },
            {
                "name": "Vinith Vinith",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjVNI5ucJ5As_8UyEYGn9jdwOTxFlnT_RcG6VmoSOj4PL0oliFGhUA=s120-c-rp-mo-br100",
                "time": "2024-12-31T07:40:49.905Z",
                "rating": 5,
                "description": "Thanks to Valparai Mahesh travels my trip exceeded all expectations carrying 4 adults with 3 kids, and I returned home with memories that will last a lifetime.Booked 5 Days 4 Night Coimbatore Pollachi Parambikulam Valparai Athirapally waterfalls tour package.The accommodation choices were top-notch, and the transportation arrangements were seamless. One of the highlights was their personalized attention and support I received throughout the trip. From restaurant recommendations to local insights, their expertise was invaluable.\n\nOur driver, Mr.Siva and Mr.Mahesh Kumar throughout the trip was exceptional. Punctual, skilled, and courteous, he made every aspect of our journey smooth and enjoyable. His knowledge of the local roads and traffic conditions was impressive, ensuring we reached our destinations efficiently. I felt safe and comfortable at all times, which allowed me to fully appreciate the scenery and enjoy the trip to the fullest. He is reliable and friendly travel companion.\n\nEnjoy all the places with some hidden gems stay in the forest made by Mahesh sir was very excellent to spend inside nature.Hotel and recommendations for food was excellent and tasted local cuisine.Trekking and bird watching was a sudden plan but we feel more happy and valuable information shared by our naturalist mr.mahesh.Enjoy the elephant corridor of Athirapally waterfalls ghat road .overall highly appreciated travel plan made by this travels.\n\nThankyou Mahesh kumar sir for everything. I wholeheartedly recommend their services to anyone looking to plan a memorable and stress-free adventure.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgICf1fb7qgE&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Hems",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjXlod80Bqy-x1X6EQSCPQeQJZBf8bTcfdTwtHnDbh5QsSx-WW_t=s120-c-rp-mo-br100",
                "time": "2026-01-17T16:43:18.754Z",
                "rating": 5,
                "description": "We booked our Valparai trip through Mahesh Tours and Travels, and the experience was absolutely amazing. Mahesh uncle took us to all the places, and every spot was truly beautiful. He handled everything in a very polite, calm, and professional manner. The entire trip felt safe and secure from start to finish.\nHe never rushed us or made the trip feel like a formality. Without any hurry or pressure, he patiently took us around and ensured we enjoyed every place properly. He carefully selected locations especially for us and guided us only to the best and most worthwhile spots.\nOne of the most unforgettable moments of this trip was seeing elephants from a very close distance. It was a lifetime experience that we will never forget. Mahesh uncle also explained a lot about animals during the journey, shared their names, and gave us interesting information throughout the trip.\nEven when we felt sick, he never panicked or hurried us. He waited patiently and took care of everything very responsibly. During the drop as well, he ensured we reached safely, and we completed the trip happily and peacefully.\nSpecial thanks to Mahesh uncle, for making our Valparai trip so safe, comfortable, and unforgettable.\nThis beautiful experience, especially the elephant sighting, will stay with us for a lifetime.\nOverall, this was a memorable and well-organized trip. Special thanks to Mahesh uncle for making our Valparai journey so comfortable, safe, and unforgettable. Highly recommended Mahesh Tours and Travels for anyone visiting Valparai. Thank you for such a wonderful experience. ✨🌷🤗🥰",
                "images": null
            },
            {
                "name": "J Rajesh John",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjWcUBWVoKczwp0lOc75d9lnXd2-pwOQtR9Hz1HlEESW224pvSsNkQ=s120-c-rp-mo-ba2-br100",
                "time": "2025-11-21T11:15:24.560Z",
                "rating": 5,
                "description": "Thank You To Mr.Mahesh Brother\nGood Service, Affordable Rate,\nExplained Each and Every Place,\nEspecially Valparai to Athirapally Falls...\nMemorable Trip ......\nI Forgot My things In Hotel ,\nThey Couriered My Things ,\nFood Also Very Nice ,\nCustomized Food ,\n\nThanks to All 🙏🙏",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIABIhCB0rZZJaQWmpg5Ot21AmjW&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Kumar Ezhumalai",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjVgBN_jZPJsXIuBnQrqmAceLRlcj1pke249wNpMRhYo6AOozKE1=s120-c-rp-mo-br100",
                "time": "2025-12-23T11:37:16.171Z",
                "rating": 5,
                "description": "We choose Valparai mahesh travels for our Valparai trip and it's was really a great experience. We can completely relly on them for an everlasting memories. Thanks to Valparai mahesh travels. Thanks to Mahesh and Achan anna.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIABIhBTO3ZsiLXZa-F8SZapRI6z&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Rajambal MD",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjWhpCetnawKzgMddnlkEUJSHH35UXbQzelQct5l30vyXicm9N96=s120-c-rp-mo-br100",
                "time": "2025-05-30T10:27:52.103Z",
                "rating": 5,
                "description": "Hii,\nIt's been exactly a month from the trip , I am posting my reviews here.\n\n\" The Fruit of a trip,is tasted by cherishment of its memories\"\n\nIts that kind of the trip ,we went  on Valparai last month.\nWe planned out trip arrangements with VALPARAI MAHESH TRAVELS , based on there good reviews in website.But they never disappointed us at any situation.\n\nWe went 3 day 2 night plan, to Pollachi,parambikulam, Valparai.\nThey planned  all the itenaries and kept us informed. Even though some unexpected delay on the day one of arrival, they managed the schedule and covered all the itenaries.\n\nThe accommodation arrangements were smooth and well-executed.Its tidy ,safe and comfortable room.\n\nA Trip is more about ride ,from the start to end we are provided with a cab with smooth ride experience and the driver was well mannered and knew the route well.\n\nWe planned this trip for our daughter's 2nd birthday, so we planned to cut cake at somewhere , but to \"the cherry on the top\", Magesh sir gave as a call and took us to an awesome scenic tea estate ,and arranged for a cake cutting celebration and made the moment time stand still.\n\nAs per the quote I mentioned above, we are cherishing all this moment without any disappointment and inconvenience, was surely because of Magesh travel  who ensured all arrangements were made with precision and care.\n\nThank you Magesh travels for all your incredible support and efforts, it's something we will always cherish.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEN3yt7b47uThjwE&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "KRISHNAMURTHY RAMAMOORTHY",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocLQLQ-jHYleKNOUxp77juCyM_KVeK0mbTeGwTMAr_XyyG08Fg=s120-c-rp-mo-ba2-br100",
                "time": "2024-11-09T12:23:24.775Z",
                "rating": 5,
                "description": "Recently visited Valparai and Parambikulam.  The places are excellent, full of greenery and beautiful.   Mahesh Travels customized the five days trip in such a way that we could see all the places leisurely.  The stay was also arranged by the Travels to our taste, which were excellent.  The satisfactory aspect was that Mr Mahesh himself drove for us.  He  has exceptional sense and knowledge about animals, birds and trees, etc.  Thanks to his extra sense we could spot a few extinct, endangered and rare wild life.  This made the whole trip amazing and memorable forever. The nature and weather also added more charm. We appreciate and thank the Valparai Mahesh Travels for a fantastic A-Z arrangement.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgIC3m4HlLw&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Vinith Crush",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjWKLs4QLKK6qoPngRD8Wq2t4y4zvxZlxmGs3tjdMUK6YMQPySVf=s120-c-rp-mo-br100",
                "time": "2024-12-31T07:16:09.189Z",
                "rating": 5,
                "description": "I recently used Valparai Mahesh travels for my vacation of 4 Days 3 Night Pollachi Topslip Parambikulam Valparai Tour Package with family of 5 Adults and 3 kids and it was one of the best decisions I’ve ever made! From the initial consultation to the final itinerary, the entire process was smooth, professional, and stress-free.\n\nMahesh kumar took the time to understand my preferences and designed a customized itinerary that perfectly matched my interests and budget. Every detail, from my arrival to accommodations and activities, was meticulously planned. They even included thoughtful touches, like restaurant recommendations and insider tips, which made the trip even more special.\n\nGood Driving skills and our driver Mr.Rajagopal shows all the places and shared valuable information of all insights.Every he stops to show the beautiful landscape of the nature.\n\nour trip dusted with trekking,forest stay,good food,planned,exploration ,tribal people visit,bird watching,bamboo rafting and excellent hospitality provided for our family bcoz of Mr.Mahesh kumar the owner of this company.Very interesting person with calm and smiling face to carry with more knowledge of this western ghats ecosystem.And also most important he is an local naturalist for tourists to support and spread information of this anaimalai hills and parambikulam.Asusual very kind person Mr.Mahesh kumar and all his team members are well equipped to serve people.\n\nWhat truly impressed me was their responsiveness. Any questions I had were answered promptly, and they were always available to assist, even during the trip. It felt like I had a trusted travel expert by my side throughout the journey.\n\nThe trip itself was flawless—everything went exactly as planned. The accommodations were excellent, the tours were well-organized, and the experiences they recommended were unforgettable. I was able to relax and fully enjoy my vacation, knowing all the logistics were taken care of.\n\nI highly recommend Mahesh Tours and Travels valparai ! Their expertise, attention to detail, and genuine passion for travel made all the difference. I’ll definitely be using their services again for future trips.\n\nRating: 5/5 Stars",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgICf1ezxWA&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Sudha Thodur",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocJLae2F-Ze7adROAMl_d0vG4fKkUsDfq8391lOr6jTqz4Vo=s120-c-rp-mo-ba2-br100",
                "time": "2026-02-14T12:23:49.943Z",
                "rating": 5,
                "description": "Our trip to Valparai and athirapally water fall was amazing..well organized trip..thanks to Mahesh to make this trip memorable.. Mr.Srinivasan who drove us al through the trip was amazing..was explaining us very well.. thanks to him too.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIABIhCuFdC9fbTHB-JagXrX_s5_&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "John Paul",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocIf5rejW4DMT4GXiIAY2pmm_p08R3o02qzolma4gvGkiafMjjI=s120-c-rp-mo-ba2-br100",
                "time": "2025-05-09T02:36:51.741Z",
                "rating": 5,
                "description": "The three days stay for us was really a unforgettable and remarkable stay at Valparai with the guidance of Mr. Mahesh. The accommodation was moreover like a home stay. Since the accommodation lies in the main valparai town ( just next to Valparai bus stop ) we had no difficulties of accessing hotels, shopping etc and, even often a walk in the town.\nMr. Mahesh who accompanied us to all the places was not only a guide, he is a environmentalist, nature lover and a wild life dictionary. We really thank him for sharing so much of information during our trip.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKENLGjunPoKrnWg&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Chilled Tears",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocKE3MMZzu3tv6a0sBh1xpMZhEiDf3nH41MRQXBzA0NvM_Kinw=s120-c-rp-mo-ba5-br100",
                "time": "2024-05-03T02:20:02.845Z",
                "rating": 5,
                "description": "We recently booked a 4-day, 3-night trip with Mahesh Tours and Travels, spending a day in Pollachi and two nights at plantation view resort in Valparai. The weather in late April was perfect. Mahesh, our guide, was incredibly supportive, from pickup to drop-off, keeping us updated and making the entire journey interesting with his knowledge. His safe driving and familiarity with each place, along with his knack for spotting wildlife, made the trip enjoyable for both us and the kids. The best part is the home-cooked food he provided for all our meals, which tasted so good that we will remember it for a long time. The amount we spent was entirely worth it. Highly recommended.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgIDj9oDWbQ&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Palani Vel",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocLEbYddACtUt3HsJFeV7YKt_ayfWAfVKRMWy31p8UvYBiEr=s120-c-rp-mo-br100",
                "time": "2026-01-18T15:23:51.151Z",
                "rating": 5,
                "description": "I am happy to spent my Pongal leave trip to Valparai and top slip parambikulam with Mahesh travels. And yes your hospitality, vehicle, rooms, food everything was awesome. Pls go ahead with Mahesh Travel without any doubt guys. Thank you Mahesh bro for everything. Surely see you soon 🥳",
                "images": null
            },
            {
                "name": "Nivethitha Sridhar",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjUu6eHimnMM6bk14gq0BtYNfIz1XFqa9bbnMGiPO9JAkvAsgntN=s120-c-rp-mo-ba2-br100",
                "time": "2024-07-30T04:55:55.946Z",
                "rating": 5,
                "description": "This was an amazing trip on the whole...Fully satisfied with the service,we visited valparai and Athirappilly with my family. Valparai Mahesh travels and Tours put together a customized itinerary to suit our interests. Mr. Mahesh our tour guide was very knowledgeable and engaging ,above all a great human being with full enthusiasm and a naturalist too..He was very passionate about his work,that made our trip so lively and enjoyable..His explanation of place,history and culture made the trip more relatable for my family. Shoutout to his driving skill as well!\n\nThe tour included excellent sight seeing,deep forest, off road trekking,elephant, exotic birds,cool climate,tea spots,sumptuous South Indian,Kerala meal that we enjoyed immensely. Thanks for making our trip one to remember!\n\nI will definitely look valparai Mahesh travels and Tours up for future travel experiences in other hill station too and will also recommend them to family and friends.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgICbm8DYWQ&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Jothi Madhavan",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocKRdFWLdXpuam69CjoRYVW-cYDStzQpLwei0h8KN5q4EZ8c1A=s120-c-rp-mo-ba2-br100",
                "time": "2025-09-29T12:12:54.494Z",
                "rating": 5,
                "description": "Worth the visit\nWe had 3 days trip with Valparai Magesh travels . He made the trip complete, Hassel free. He has local drivers who know the risk of the road and how to be animal friendly during travel. He was kind enough to even show the best shops to buy and deliver food. The home stay host was very respectful. The entire tip was made enjoyable even without skipping any of the spot mentioned in itenary in midst of bad weather.  Can be recommend.",
                "images": null
            },
            {
                "name": "Mahalaksmi",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocK3P85TuLCuJNMtMtFFMdHH9hWsLPJlX7JT_hMm6d3MapWLiQ=s120-c-rp-mo-br100",
                "time": "2024-02-12T09:25:31.181Z",
                "rating": 5,
                "description": "With family of 6 people and 2 infants after all Google searches booked Mahesh tours and travels.Team was very good and more sounds of knowledge in tour activities. Booked 4 days 3 night Coimbatore Pollachi topslip parambikulam tent Valparai tour package with my family of 6 people and 2 infants. Good service, punctual and respectful from all days in the tour. Clean and excellent stay in Valparai and parambikulam makes our family a second home. Driver Mr. Rajagopal was one of the senior driver who makes trip with joy and meaningful from day 1 to 4.\n\nCost was very economic for all type of people to travel. Most important thing is their quality and service was very truthful and respect. All with my family enjoyed the trip and climates roses in all parts above.\n\nSpecial thanks to Mr. Mahesh Kumar , who was guided from booking till the entire tour was perfectly executed in all forms. Their own travel company with good experienced driving skills makes people to explore all sightseeing activities here. Day 3 Mahesh sir is with us for a day such a polite and gem for today travellers from all over the globe. He has clients from various countries keeping calling and continuously booking trips. Seams in his busy schedules it's treat to with him.\n\nOverall excellent service. Highly recommended. Will join a trip towards Kerala soon.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgICd5LLAnQE&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Kannan R",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjVWwUdSwIQJJHl6uFUvE6oo0vsCqrhlraDN3Iz0c8wiyaXDDh3-=s120-c-rp-mo-br100",
                "time": "2023-10-05T04:47:37.463Z",
                "rating": 5,
                "description": "We had planned our travel to valparai with Mahesh Travels. It was 3 day and 2 night stay. The day when we reached pollachi, The travel agency car was readily available to pick up us, with pleasant weather we enjoyed in and out azhiyar and all the spots which are on the way to valparai.\n2nd day, visited the Dam, waterfalls, churches, temples and chinna kallar water falls which is a small amazing location situated in the Anamalai Tiger Reserve ahead of the Chinakalar Dam.This place is called the chirapunji of south India.\n3rd day was the amazing with thrilled experience where we travelled to Athirapalli falls via the dense forest.\nOverall very satisfactory trip and this travel agency was very well managed with timely coordination right from the booking stage till the end.\nSpecial Thanks to Mahesh who was with us throughout the trip and making home food arrangements, He is such a kind and knowledgeable person.\nWe’d recommend Mahesh travels and would definitely connect with them for our next trip.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgIDZpdLQ2gE&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Ramya Ramya",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocLqdGFVJRCDnt9Oudf1COYEvNVwqytYOC9HmBoaBSl-hI6ytw=s120-c-rp-mo-br100",
                "time": "2025-12-04T06:58:58.421Z",
                "rating": 5,
                "description": "Amazing service. Availed 4 days trip service for valparai topslip athirappali.Everything went smooth and perfect. Thanks to mahesh for providing Ertiga and for accompanying us throughout the trip. Food joints suggested by this travels are very good.\n\nStay was clean and hygienic,memorable trip.valuable for paid and affordable.\n\nHighly recommended.",
                "images": null
            },
            {
                "name": "Keerthana Rajkumar",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjWe7ph6sUI58bWMqniqEwRH9U1gl2gb54XqHg0RJPpacy70EIw_=s120-c-rp-mo-br100",
                "time": "2023-11-25T07:50:21.165Z",
                "rating": 5,
                "description": "Came across Mahesh Tours and Travels through random Instagram post of their page and surfed about them in Google. After reading through all the reviews contacted them to enquire about the packages. Mahesh sir patiently answered all our queries and guided us to choose the right package. Even until the last minute we were skeptical about the weather there as the predictions stated heavy rainfall during the tour dates. But Mahesh sir reassured about the weather there and he was so confident about it. Just as he said and to our surprise it was very pleasant throughout the trip. This shows his experience and his knowledge about the area.\n\nWe choose 3D2N Parambikulam Valparai trip.\n\nParambikulam: Stay, food, Safari and  morning Trek were all a new experience and rejuvenating one for us. Our 3yr old completely enjoyed.\n\nValparai: It's a beautiful landscape and totally underrated. We loved the climate when we went there. Mist and mild chillness. We would really love to come back again just to enjoy the scenery.\n\nSpecial mention about The driver Siva sir who guided throughout the trip and his driving skills. This was the first time our kid felt comfortable during car travel.\n\nWould totally recommend to choose them at anytime. Thanks for making our trip experience a pleasant and memorable one.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgIClvZf75QE&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Saravanan PP175",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjUarOycsjdimLkjtRkYkb2tKbTM78bnww5-XHFcfQaq83pGOHtj=s120-c-rp-mo-ba2-br100",
                "time": "2024-06-23T03:49:11.907Z",
                "rating": 4,
                "description": "Dear Mahesh Tours and Travels Team, I'm writing to express my heartfelt appreciation for the absolutely delightful Honeymoon vacation package you curated for us in Kerala. From the moment we landed in Pollachi to our heartfelt Honeymoon towards the 3 Days Munnar Kanthaloor Honeymoon package, it was a journey filled with breathtaking beauty, enriching experiences, and genuine warmth, all thanks to the meticulous planning and impeccable execution by your team.Candle light dinner,flower bed decoration are crafted patient as by our requirement.Everything, from the carefully chosen hotels and transportation to the thoughtfully planned. We enjoyed the lush green plantations of Munnar, the serene cultures of munnar, the blessings of thirumoorthy hills and the bath at Lakkom Waterfalls! Each day brought new sights, sounds, and flavors, creating unforgettable memories we'll cherish forever. However, what truly elevated this trip from remarkable to exceptional was the outstanding coordination and support provided by Mahesh Kumar. His dedication and attentiveness throughout the journey were truly unparalleled. He patiently answered our endless questions, addressed every last-minute detail with a smile, and ensured our comfort and safety at every step. Siva our cab driver warmth and genuine connection with us made her more than just a coordinator; he felt like a dear friend and guide. We are incredibly grateful for Mahesh Tours and Travels commitment to crafting immersive and personalized experiences. You haven't just given us a Honeymoon trip; you've given us memories that will last a lifetime. A special shout-out again to Mahesh Kumar for his exceptional service, and also, please thank the driver Siva (he was truly a professional and one whom we would definitely miss; he was so sweet and very humble).Mahesh kumar is an invaluable asset to your team. Thank you once again for making our Kerala adventure so perfect. We will undoubtedly recommend Mahesh Tours and Travels to all our friends and family seeking unforgettable travel experiences.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgICLi9vuYg&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "sathish kumar",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocKZYEfRzYby76S2pHRmdMxt9KGXsYUSjfn6PZEiCVJqjRlMfn0h=s120-c-rp-mo-br100",
                "time": "2023-08-21T18:38:21.244Z",
                "rating": 5,
                "description": "We had a good time with Mr Mahesh, who is the owner of valparai Mahesh Travels. We booked 2 nights and 3 day trip towards Parambikulam and valparai, During trip those information shared by him is much valuable and informative. Stay we had in Parambikulam and valparai is excellent. Trip we had is much more comfortable. We had home made food during our stay. Thanks a lot Mr Mahesh for ur wonderful support during our entire journey.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgIDptoGckwE&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Vedha Venkatesh",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjXZL4tjJPy24qd-JPg2dWvMC9-usHPsHDve0YjBMTcQVyDO_s3fFg=s120-c-rp-mo-br100",
                "time": "2023-05-02T10:31:11.266Z",
                "rating": 5,
                "description": "Firstly I would like to thank Mr Mahesh sir very much for making our trip very happy and memorable.\nWe( myself, hubby and 2 kids) booked Mahesh tours and travels Valparai for 5 days. From the day of confirmation Mr Mahesh made all the arrangements flawlessly.\nHe explained clearly about the trees, animals and birds we saw throughout our journey. He has great knowledge about the vegetation in valparai.\nHe almost knows all the localites so we got everything like honey, spices and herbs unadulterated.\nThanks again for your service and support sir. We will surely and proudly refer ur service to our friends and family sir.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgIDRg8miVA&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Mukilan Soundar",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjWvt5q5HrmyxxL8GQnQNA4f7rsZDlgmOguWCLmiIgC4Gj0MoqE=s120-c-rp-mo-br100",
                "time": "2025-08-21T08:04:29.318Z",
                "rating": 5,
                "description": "My best friend and I visited valparai in August 2025 from chennai for which we sought valparai mahesh Travels. And I must say that mahesh Travels has been truly wonderful in assisting, planning; and commuting throughout our trip. We visited Valparai, parambikulam and Athirapally waterfalls in which valparai and parambikulam were done with valparai mahesh Travels. The cab that was given to us was Toyota Etios which was extremely comfortable and clean for my best friend and I.\n\nOur cabbie, mahesh anna, has been supremely sweet and vigilant about our itinerary and other travel needs. We did not miss out on any scenic views thanks to him. His driving was very safe, given the hilly areas are always a bit risky. But he drove us even at odd hours and it was always very safe and conscious. Valparai Mahesh Travels in very accommodating to our questions at odd hours as well, being available 24x7. Valparai and nearby places is a very beautiful nature  with serene views and natural surroundings. We are very happy with our trip. As the tourism ad says, it is truly god’s land..",
                "images": null
            },
            {
                "name": "Mohanraj Sivanandam",
                "profile_picture": "https://lh3.googleusercontent.com/a/ACg8ocIYzEt0Oh2J6MEg8aRJ-RVMlB_qhH5g7nBcil-DgsjG4pMLpA=s120-c-rp-mo-ba4-br100",
                "time": "2024-05-28T16:00:00.750Z",
                "rating": 5,
                "description": "We(family of 4) recently came back from a 4 days 3 night Valparai -Top Slip -Parambikulam Tour package organized by Mr.Mahesh. We enjoyed every bit of the tour. I have to admit that I was initially apprehensive about choosing a Tour package just by a Google search. However the positive feedback that I saw in the Google reviews gave me a lot of confidence and I went ahead with my instinct and iam glad I did that. Mr.Mahesh was quite professional in handling the communication about the tour and ensured that the pickup at our Railway Station was on time. He even helped with arranging tasty home cooked food in Valparai which made our trip quite memorable.\n\nFinally Mr.Mahesh is not just any other tour operator...he holds a Ph.D., in Wildlife conservation and Ecology and he is quite knowledgeable about the forests. One of the cherished experiences i had during this trip was an early morning bird watching trip in Valparai where Mr.Mahesh helped me spot different birds and wildlife of that region. It would not have been possible without the deep knowledge that Mr.Mahesh possesses about the Forest. I was amazed how he kept his eyes and ears open even while he was driving to spot animals and birds by their calls. I was thrilled when he helped me spot the elusive Great Indian Hornbill bird pair by closely listening and tracking their calls even from a considerable distance.\n\nI would recommend Mr.Mahesh to anyone who is looking for a trip to Valparai.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIHM0ogKEICAgIDT28vfGg&fid=0x0:0xe684916813be906c"
                ]
            },
            {
                "name": "Somasundaram Munusamy",
                "profile_picture": "https://lh3.googleusercontent.com/a-/ALV-UjVusNLQ8F3bP2qfdJoBUezpsHRDzCqn6vV5LI_s0cN35T7ca_I=s120-c-rp-mo-br100",
                "time": "2025-11-20T10:52:33.812Z",
                "rating": 5,
                "description": "I would like to extend my sincere appreciation for the excellent tour guidance provided during our recent visit. Your professionalism, attention to detail, and passion for the subject matter were truly impressive. Your knowledge, enthusiasm, and warm hospitality made our tour truly unforgettable. You went above and beyond, and we're so grateful for your expertise and care. We thoroughly enjoyed the tour package! The itinerary was well-planned, and every detail was taken care of. The sightseeing, accommodations, and food were excellent. Thank you for providing a memorable experience. Great tour package. Highly recommend.",
                "images": [
                    "www.google.com/local/imagery/report/?cb_client=maps_sv.tactile&image_key=!1e10!2sCIABIhC5J4mRaHa-Us9sn5ckR87i&fid=0x0:0xe684916813be906c"
                ]
            },
            
        ]
    }
]