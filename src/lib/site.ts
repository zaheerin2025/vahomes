/**
 * Central site configuration for VA Home Cleaners.
 * Keeps contact info, nav, services and gallery data in one place.
 */

export const SITE = {
  name: "VA Home Cleaners",
  phone: "+1 (516) 205-8884",
  phoneHref: "tel:+15162058884",
  email: "hello@vahomecleaners.com",
  tagline: "Limpieza que transforma",
  taglineEn: "Cleaning that transforms",
  description:
    "Professional residential and commercial cleaning services, including deep cleaning, recurring maintenance, Airbnb cleaning, post-construction cleaning, and more.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string; // lucide icon name
  href: string;
};

export const SERVICES: Service[] = [
  {
    id: "deep-cleaning",
    name: "Deep House Cleaning",
    description:
      "A detailed top-to-bottom cleaning for homes that need extra attention and care.",
    image: "/images/service-deep-cleaning.png",
    icon: "Sparkles",
    href: "/services/deep-cleaning",
  },
  {
    id: "regular-cleaning",
    name: "Regular Cleaning",
    description:
      "Perfect for keeping your home or office clean and tidy on a daily basis.",
    image: "/images/service-recurring.png",
    icon: "CalendarClock",
    href: "/services/regular-cleaning",
  },
  {
    id: "light-cleaning",
    name: "Light Cleaning",
    description:
      "A quick and basic service, designed to refresh spaces without going too deep.",
    image: "/images/service-hourly.png",
    icon: "Wind",
    href: "/services/light-cleaning",
  },
  {
    id: "post-construction",
    name: "Post-Construction Cleaning",
    description:
      "Remove dust, debris, and construction residue so your newly completed space is ready to use.",
    image: "/images/service-post-construction.png",
    icon: "HardHat",
    href: "/services/post-construction",
  },
  {
    id: "commercial",
    name: "Office & Commercial Cleaning",
    description:
      "Professional cleaning solutions for offices, commercial spaces, and workplaces.",
    image: "/images/service-commercial.png",
    icon: "Building2",
    href: "/services/commercial",
  },
  {
    id: "eco-friendly",
    name: "Eco-Friendly Cleaning",
    description:
      "Prefer a greener approach? Eco-friendly cleaning products are available upon request.",
    image: "/images/service-eco-friendly.png",
    icon: "Leaf",
    href: "/services/eco-friendly",
  },
  {
    id: "hourly",
    name: "Cleaning by the Hour",
    description:
      "Flexible hourly cleaning for customers who need help with specific cleaning priorities.",
    image: "/images/service-hourly.png",
    icon: "Clock",
    href: "/services/hourly",
  },
  {
    id: "weekly-biweekly",
    name: "Weekly & Bi-Weekly Cleaning",
    description:
      "Keep your home consistently fresh with recurring cleaning services scheduled around your needs.",
    image: "/images/service-recurring.png",
    icon: "CalendarClock",
    href: "/services/weekly-biweekly",
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  service: string;
  image: string;
  /** optional taller card for visual rhythm */
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  // Real photos first (uploaded by client)
  {
    id: "kitchen-real",
    title: "Kitchen Deep Cleaning",
    category: "Residential",
    service: "Residential Service",
    image: "/images/work-1.jpg",
    featured: true,
  },
  {
    id: "bedroom-organize",
    title: "Bedroom & Surfaces",
    category: "Residential",
    service: "Residential Service",
    image: "/images/work-2.jpg",
  },
  {
    id: "living-fluff",
    title: "Living Room Refresh",
    category: "Residential",
    service: "Residential Service",
    image: "/images/work-3.jpg",
  },
  {
    id: "move-out-detail",
    title: "Move-Out Detail Clean",
    category: "Residential",
    service: "Residential Service",
    image: "/images/work-4.jpg",
  },
  // AI-generated supporting images
  {
    id: "airbnb",
    title: "Airbnb Deep Cleaning",
    category: "Airbnb",
    service: "Airbnb Service",
    image: "/images/gallery-airbnb.png",
    featured: true,
  },
  {
    id: "bathroom",
    title: "Bathroom Cleaning",
    category: "Residential",
    service: "Residential Service",
    image: "/images/gallery-bathroom.png",
  },
  {
    id: "dining",
    title: "Dining Room Cleaning",
    category: "Residential",
    service: "Residential Service",
    image: "/images/gallery-dining-room.png",
  },
  {
    id: "office",
    title: "Commercial Cleaning",
    category: "Commercial",
    service: "Office Service",
    image: "/images/gallery-office.png",
    featured: true,
  },
];

export const GALLERY_CATEGORIES = ["All", "Residential", "Airbnb", "Commercial"] as const;

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Choose Your Service",
    description: "Tell us what kind of cleaning your home or business needs.",
    icon: "ClipboardList",
  },
  {
    number: "02",
    title: "Schedule Your Cleaning",
    description: "Choose a convenient time that works for you.",
    icon: "CalendarCheck",
  },
  {
    number: "03",
    title: "Enjoy a Cleaner Space",
    description: "Our team takes care of the cleaning so you can enjoy the results.",
    icon: "Sparkles",
  },
];

export type Testimonial = {
  name: string;
  service: string;
  rating: number;
  quote: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jessica M.",
    service: "Deep House Cleaning",
    rating: 5,
    initials: "JM",
    quote:
      "The team was punctual, friendly, and incredibly thorough. My kitchen has never looked this clean — every surface sparkled.",
  },
  {
    name: "Daniel R.",
    service: "Recurring Cleaning",
    rating: 5,
    initials: "DR",
    quote:
      "Reliable and consistent every single visit. Having a recurring cleaning service has genuinely made my home feel more relaxing.",
  },
  {
    name: "Priya S.",
    service: "Airbnb Cleaning",
    rating: 5,
    initials: "PS",
    quote:
      "They handle the turnover for my Airbnb between guests and the place always looks spotless. My guests constantly leave five-star reviews.",
  },
  {
    name: "Marcus T.",
    service: "Commercial Cleaning",
    rating: 5,
    initials: "MT",
    quote:
      "Professional, efficient, and detail-oriented. The office feels fresher and more welcoming for the whole team since we started working with them.",
  },
];

export const SERVICE_OPTIONS = [
  "Deep House Cleaning",
  "Weekly & Bi-Weekly Cleaning",
  "Post-Construction Cleaning",
  "Office & Commercial Cleaning",
  "Eco-Friendly Cleaning",
  "Cleaning by the Hour",
  "Airbnb Cleaning",
  "Other",
] as const;
