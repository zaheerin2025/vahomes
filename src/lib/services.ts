import { assetPath } from "@/lib/utils";

export type ServiceDetail = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  icon: string; // lucide icon name
  image: string;
  gallery: string[];
  accent: "crimson" | "navy" | "purple" | "gold";
  popular?: boolean;
  priceFrom?: string;
  duration?: string;
  bestFor: string[];
  includes: string[];
  process: { title: string; description: string }[];
  benefits: { icon: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "regular-cleaning",
    name: "Regular Cleaning",
    shortName: "Regular",
    tagline: "Consistent freshness, week after week",
    summary:
      "Perfect for keeping your home or office clean and tidy on a daily basis.",
    description:
      "Our Regular Cleaning service is designed to keep your space consistently fresh and tidy. It's the ideal choice for homes and offices that need ongoing maintenance — covering all the everyday tasks that keep dust, clutter, and grime from building up. Schedule it weekly, bi-weekly, or monthly to match your routine.",
    icon: "CalendarClock",
    image: assetPath("/images/service-recurring.png"),
    gallery: [assetPath("/images/work-1.jpg"), assetPath("/images/gallery-kitchen.png"), assetPath("/images/work-3.jpg")],
    accent: "navy",
    popular: true,
    priceFrom: "Affordable rates",
    duration: "1–3 hrs",
    bestFor: [
      "Homes needing weekly upkeep",
      "Offices with regular foot traffic",
      "Busy families",
      "Recurring maintenance",
    ],
    includes: [
      "Sweeping and mopping floors",
      "Vacuuming carpets and rugs",
      "Dusting visible surfaces (tables, shelves, desks)",
      "Cleaning bathrooms (sinks, toilets, mirrors)",
      "Cleaning kitchen surfaces, stovetop, and sink",
      "Emptying trash bins",
    ],
    process: [
      {
        title: "Tell us your schedule",
        description: "Choose weekly, bi-weekly, or monthly visits at a time that works for you.",
      },
      {
        title: "We handle the rest",
        description: "The same trusted team arrives on schedule to keep your space consistently fresh.",
      },
      {
        title: "Enjoy a tidy space",
        description: "Come home to a clean, organized environment every single time.",
      },
    ],
    benefits: [
      { icon: "CalendarCheck", title: "Reliable Schedule", description: "Same team, same time, every visit." },
      { icon: "Clock", title: "Saves You Time", description: "Reclaim your evenings and weekends." },
      { icon: "Sparkles", title: "Consistent Results", description: "A spotless standard, every single visit." },
      { icon: "Wallet", title: "Better Value", description: "Recurring plans are priced affordably." },
    ],
    faq: [
      {
        question: "How often should I schedule regular cleaning?",
        answer: "Most clients choose weekly or bi-weekly. We can also do monthly visits depending on your needs and the size of your space.",
      },
      {
        question: "Will it be the same cleaner each time?",
        answer: "We aim to send the same trusted team member for every recurring visit so they get to know your space and preferences.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer: "Not at all. Many clients provide access instructions and come back to a freshly cleaned space.",
      },
    ],
  },
  {
    slug: "light-cleaning",
    name: "Light Cleaning",
    shortName: "Light",
    tagline: "A quick refresh for in-between visits",
    summary:
      "A quick and basic service, designed to refresh spaces without going too deep.",
    description:
      "Light Cleaning is our fastest, most affordable service — perfect for refreshing main living areas between deeper cleans. It focuses on the visible, high-traffic spots that make the biggest difference in how a space feels. Great for last-minute guests, post-weekend tidy-ups, or keeping things presentable between regular cleans.",
    icon: "Wind",
    image: "/images/service-hourly.png",
    gallery: ["/images/gallery-living-room.png", "/images/work-3.jpg"],
    accent: "gold",
    priceFrom: "Budget-friendly",
    duration: "1–2 hrs",
    bestFor: [
      "Quick refresh between deep cleans",
      "Before guests arrive",
      "Small apartments",
      "Tidying high-traffic areas",
    ],
    includes: [
      "Light surface cleaning (main areas only)",
      "Sweeping and quick damp mopping",
      "Basic bathroom cleaning (sink, toilet, mirror)",
      "Kitchen: wipe down visible counters and surfaces",
    ],
    process: [
      {
        title: "Pick your priorities",
        description: "Tell us the main areas you'd like us to focus on during the visit.",
      },
      {
        title: "Fast, focused clean",
        description: "Our team refreshes the visible, high-impact areas in minimal time.",
      },
      {
        title: "Instant refresh",
        description: "Walk back into a brighter, tidier space — ready to enjoy.",
      },
    ],
    benefits: [
      { icon: "Zap", title: "Lightning Fast", description: "Refresh your space in under two hours." },
      { icon: "Wallet", title: "Most Affordable", description: "A budget-friendly option for quick touch-ups." },
      { icon: "Heart", title: "Guest-Ready", description: "Perfect before company arrives." },
      { icon: "RefreshCw", title: "Flexible Top-Ups", description: "Add it between your regular cleans anytime." },
    ],
    faq: [
      {
        question: "What's the difference between light and regular cleaning?",
        answer: "Light cleaning focuses on visible, main areas for a quick refresh. Regular cleaning is more thorough and covers all rooms in detail.",
      },
      {
        question: "Can I book light cleaning for just one room?",
        answer: "Yes. Light cleaning is flexible — you tell us which areas to focus on and we'll take care of them.",
      },
      {
        question: "How long does a light cleaning visit take?",
        answer: "Typically 1–2 hours depending on the size of the areas you'd like cleaned.",
      },
    ],
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    shortName: "Deep Clean",
    tagline: "The most detailed clean we offer",
    summary:
      "The most detailed and thorough cleaning, ideal for spaces that need a full reset.",
    description:
      "Our Deep Cleaning service goes far beyond a regular clean. It's a comprehensive top-to-bottom reset that targets built-up grime, hard-to-reach dust, and the spots that often get missed. Ideal for spring cleaning, moving in or out, post-renovation, or any space that deserves a truly fresh start. This is our most popular service for good reason.",
    icon: "Sparkles",
    image: "/images/service-deep-cleaning.png",
    gallery: ["/images/work-1.jpg", "/images/gallery-bathroom.png", "/images/featured-deep-cleaning.png"],
    accent: "crimson",
    popular: true,
    priceFrom: "Premium service",
    duration: "3–6 hrs",
    bestFor: [
      "Move-in / move-out cleaning",
      "Spring cleaning resets",
      "Post-renovation spaces",
      "Homes that need extra attention",
    ],
    includes: [
      "Everything in Regular Cleaning, plus:",
      "Deep cleaning of kitchen (appliances outside, and inside upon request)",
      "Detailed bathroom cleaning (tiles, grout, tough stains)",
      "Dusting high and hard-to-reach areas (ceiling fans, shelves, light fixtures)",
      "Wiping doors, switches, baseboards, and window frames",
      "Vacuuming upholstery and tight spaces",
    ],
    process: [
      {
        title: "Walkthrough & plan",
        description: "We discuss your priorities and identify the areas that need the most attention.",
      },
      {
        title: "Top-to-bottom deep clean",
        description: "Our team works methodically from ceiling to floor, hitting every surface and detail.",
      },
      {
        title: "Final walkthrough",
        description: "We review the results with you to make sure nothing was missed.",
      },
    ],
    benefits: [
      { icon: "ScanSearch", title: "Detail Obsessed", description: "Every corner, surface, and crevice handled." },
      { icon: "Home", title: "Full Reset", description: "A truly fresh start for any space." },
      { icon: "ShieldCheck", title: "Healthier Home", description: "Removes allergens, dust, and buildup." },
      { icon: "Sparkles", title: "Visible Difference", description: "You'll see and feel the transformation." },
    ],
    faq: [
      {
        question: "How is deep cleaning different from regular cleaning?",
        answer: "Deep cleaning includes everything in regular cleaning, plus detailed attention to hard-to-reach areas, appliances inside (on request), grout, baseboards, doors, switches, and window frames.",
      },
      {
        question: "How long does a deep clean take?",
        answer: "Depending on the size and condition of the space, a deep clean typically takes 3–6 hours with our team.",
      },
      {
        question: "Do I need a deep clean before starting recurring service?",
        answer: "We recommend it for homes that haven't been professionally cleaned recently. After the initial deep clean, regular cleaning keeps things maintained.",
      },
    ],
  },
  {
    slug: "weekly-biweekly",
    name: "Weekly & Bi-Weekly Cleaning",
    shortName: "Recurring",
    tagline: "Dependable cleaning on your schedule",
    summary:
      "Keep your home consistently fresh with recurring cleaning services scheduled around your needs.",
    description:
      "Our recurring cleaning plans are built for clients who want a consistently clean home without the hassle of booking each time. Choose weekly or bi-weekly visits, and we'll handle the rest — same trusted team, same reliable standard, every single time. It's the easiest way to keep your space feeling fresh year-round.",
    icon: "CalendarClock",
    image: "/images/service-recurring.png",
    gallery: ["/images/work-3.jpg", "/images/gallery-living-room.png"],
    accent: "navy",
    popular: true,
    priceFrom: "Save with recurring plans",
    duration: "1–3 hrs / visit",
    bestFor: [
      "Busy professionals",
      "Families with kids or pets",
      "Anyone wanting a consistently clean home",
      "Long-term peace of mind",
    ],
    includes: [
      "All Regular Cleaning tasks",
      "Same trusted team member each visit",
      "Flexible scheduling (weekly or bi-weekly)",
      "Customizable task priority list",
      "Easy rescheduling when life happens",
      "Priority booking for add-on services",
    ],
    process: [
      {
        title: "Choose your plan",
        description: "Pick weekly or bi-weekly visits and select a day/time that fits your schedule.",
      },
      {
        title: "Initial clean",
        description: "We start with a thorough first visit to bring your space up to our standard.",
      },
      {
        title: "Ongoing maintenance",
        description: "The same team returns on schedule to keep your home consistently fresh.",
      },
    ],
    benefits: [
      { icon: "CalendarCheck", title: "Set & Forget", description: "One booking, ongoing clean home." },
      { icon: "Users", title: "Same Team", description: "A cleaner who knows your space and preferences." },
      { icon: "BadgePercent", title: "Recurring Discount", description: "Save compared to one-time bookings." },
      { icon: "CalendarDays", title: "Easy Reschedule", description: "Life happens — we adapt with you." },
    ],
    faq: [
      {
        question: "What's the difference between weekly and bi-weekly?",
        answer: "Weekly visits keep your home continuously spotless. Bi-weekly (every two weeks) is the most popular choice — a great balance of freshness and value.",
      },
      {
        question: "Can I pause or cancel my plan?",
        answer: "Yes. Recurring plans are flexible — you can pause, reschedule, or cancel anytime with reasonable notice.",
      },
      {
        question: "Do I get the same cleaner every time?",
        answer: "We do our best to send the same team member for every visit so they learn your preferences and your space.",
      },
    ],
  },
  {
    slug: "post-construction",
    name: "Post-Construction Cleaning",
    shortName: "Post-Construction",
    tagline: "From renovation dust to ready-to-use",
    summary:
      "Remove dust, debris, and construction residue so your newly completed space is ready to use.",
    description:
      "After a renovation or construction project, the dust and debris left behind can be overwhelming. Our post-construction cleaning service tackles the fine dust, paint splatter, adhesive residue, and debris that regular cleaning can't handle. We get your newly renovated space move-in ready, so you can enjoy the results of your project without the cleanup headache.",
    icon: "HardHat",
    image: "/images/service-post-construction.png",
    gallery: ["/images/work-4.jpg", "/images/service-post-construction.png"],
    accent: "purple",
    priceFrom: "Custom quote",
    duration: "Varies by scope",
    bestFor: [
      "Newly renovated homes",
      "New construction move-ins",
      "Commercial build-outs",
      "Post-remodel cleanup",
    ],
    includes: [
      "Removal of construction dust from all surfaces",
      "Cleaning of vents, registers, and light fixtures",
      "Detail cleaning of windows and frames",
      "Removal of paint splatter and adhesive residue",
      "Sweeping, vacuuming, and mopping all floors",
      "Deep cleaning of newly installed kitchens and bathrooms",
      "Final detail pass before move-in",
    ],
    process: [
      {
        title: "Site assessment",
        description: "We inspect the space and scope of work to provide an accurate quote and timeline.",
      },
      {
        title: "Rough clean",
        description: "We remove large debris, construction materials, and initial dust layers.",
      },
      {
        title: "Final detail clean",
        description: "A meticulous top-to-bottom pass to make the space move-in ready.",
      },
    ],
    benefits: [
      { icon: "HardHat", title: "Construction Specialists", description: "We know how to handle post-build mess." },
      { icon: "Wind", title: "Dust Removal", description: "Eliminates fine construction dust everywhere." },
      { icon: "Home", title: "Move-In Ready", description: "Walk in and enjoy your new space immediately." },
      { icon: "ShieldCheck", title: "Safe & Thorough", description: "Proper handling of all post-construction residue." },
    ],
    faq: [
      {
        question: "When should I book post-construction cleaning?",
        answer: "Book after all construction work is complete and trades have finished. We can do a rough clean mid-project and a final detail clean at the end.",
      },
      {
        question: "Do you remove construction debris?",
        answer: "We remove light debris and dust. Large construction waste and hazardous materials should be handled by your contractor or a dedicated waste removal service.",
      },
      {
        question: "How is pricing determined?",
        answer: "Pricing depends on the size of the space, scope of work, and level of construction residue. We provide a free on-site or photo-based quote.",
      },
    ],
  },
  {
    slug: "commercial",
    name: "Office & Commercial Cleaning",
    shortName: "Commercial",
    tagline: "Professional spaces, professionally cleaned",
    summary:
      "Professional cleaning solutions for offices, commercial spaces, and workplaces.",
    description:
      "A clean workspace makes a stronger impression on clients and a healthier environment for your team. Our commercial cleaning service is built for offices, retail spaces, medical offices, and other workplaces. We work around your business hours — early mornings, evenings, or weekends — so your team can focus on work while we handle the cleaning.",
    icon: "Building2",
    image: "/images/service-commercial.png",
    gallery: ["/images/gallery-office.png", "/images/work-2.jpg"],
    accent: "navy",
    priceFrom: "Custom contracts",
    duration: "Flexible scheduling",
    bestFor: [
      "Offices & coworking spaces",
      "Retail & showrooms",
      "Medical & dental offices",
      "Restaurants & cafés",
    ],
    includes: [
      "Workstation and desk sanitization",
      "Kitchen and breakroom cleaning",
      "Restroom cleaning and restocking",
      "Floor care (vacuum, sweep, mop, polish)",
      "Glass and window cleaning",
      "Trash removal and recycling",
      "High-touch surface disinfection",
      "Customizable cleaning checklist",
    ],
    process: [
      {
        title: "Free consultation",
        description: "We visit your space, understand your needs, and build a custom cleaning plan.",
      },
      {
        title: "Flexible scheduling",
        description: "We clean before, during, or after business hours — whatever works for you.",
      },
      {
        title: "Consistent quality",
        description: "Trained teams follow your customized checklist every single visit.",
      },
    ],
    benefits: [
      { icon: "Briefcase", title: "Business-Friendly", description: "Cleaning that fits around your hours." },
      { icon: "Users", title: "Healthier Team", description: "Fewer sick days with sanitized workspaces." },
      { icon: "Building2", title: "Pro Impression", description: "A spotless space impresses every client." },
      { icon: "ClipboardCheck", title: "Custom Plans", description: "Tailored checklists for your space." },
    ],
    faq: [
      {
        question: "Do you clean during or after business hours?",
        answer: "Both. We work around your schedule — early mornings, evenings, overnight, or weekends. Many clients prefer after-hours cleaning so the office is fresh each morning.",
      },
      {
        question: "Can you handle specialized spaces like medical offices?",
        answer: "Yes. We have experience with medical and dental offices, using appropriate disinfection protocols and products for sensitive environments.",
      },
      {
        question: "Do you offer ongoing contracts?",
        answer: "Yes. Most commercial clients prefer recurring contracts (daily, weekly, or custom frequency) with a set scope and predictable pricing.",
      },
    ],
  },
  {
    slug: "eco-friendly",
    name: "Eco-Friendly Cleaning",
    shortName: "Eco-Friendly",
    tagline: "A greener approach to a spotless home",
    summary:
      "Prefer a greener approach? Eco-friendly cleaning products are available upon request.",
    description:
      "Our eco-friendly cleaning option uses plant-based, biodegradable products that are tough on dirt but gentle on the planet. Perfect for homes with kids, pets, or anyone sensitive to harsh chemicals. You can request eco-friendly products on any of our services — regular, deep, or commercial cleaning — at no extra hassle.",
    icon: "Leaf",
    image: "/images/service-eco-friendly.png",
    gallery: ["/images/service-eco-friendly.png", "/images/gallery-living-room.png"],
    accent: "gold",
    priceFrom: "Available on any service",
    duration: "Same as selected service",
    bestFor: [
      "Homes with children & pets",
      "Chemical-sensitive households",
      "Eco-conscious clients",
      "Anyone wanting a greener clean",
    ],
    includes: [
      "Plant-based, biodegradable cleaning products",
      "Non-toxic surface cleaners",
      "Essential-oil-based fresheners (optional)",
      "Microfiber cloths (reusable, low-waste)",
      "No harsh bleach or ammonia",
      "Safe for food-prep surfaces",
    ],
    process: [
      {
        title: "Request eco-friendly",
        description: "When booking any service, simply let us know you'd like the eco-friendly option.",
      },
      {
        title: "We bring the green products",
        description: "Our team arrives with plant-based, non-toxic cleaners ready to go.",
      },
      {
        title: "A safer, fresher clean",
        description: "Enjoy a spotless space without harsh chemical residues or fumes.",
      },
    ],
    benefits: [
      { icon: "Leaf", title: "Plant-Based", description: "Biodegradable products, safe for the planet." },
      { icon: "Baby", title: "Kid & Pet Safe", description: "No harsh chemicals left on surfaces." },
      { icon: "Wind", title: "No Harsh Fumes", description: "Better indoor air quality." },
      { icon: "Recycle", title: "Low-Waste", description: "Reusable microfiber, minimal plastic." },
    ],
    faq: [
      {
        question: "Are eco-friendly products as effective as regular cleaners?",
        answer: "Yes. Modern plant-based cleaners are highly effective on grease, grime, and bacteria. For heavy-duty jobs we may recommend a targeted product, but everyday cleaning works great with eco options.",
      },
      {
        question: "Is there an extra charge for eco-friendly?",
        answer: "In most cases, no. Eco-friendly products can be requested on any service at no additional cost.",
      },
      {
        question: "Are the products safe for pets?",
        answer: "Absolutely. The products we use are non-toxic and pet-safe once surfaces are dry.",
      },
    ],
  },
  {
    slug: "hourly",
    name: "Cleaning by the Hour",
    shortName: "Hourly",
    tagline: "Flexible cleaning, priced by the hour",
    summary:
      "Detailed cleaning for just $50 per hour. Choose the areas you need cleaned, with a 2-hour minimum.",
    description:
      "Cleaning by the hour gives you total flexibility. At just $50 per hour (2-hour minimum), you choose exactly which areas to focus on — bedroom, bathroom, kitchen, or anything else. It's perfect for targeted cleaning priorities, small jobs, or when you just need an extra pair of hands. Add extra services for an additional charge.",
    icon: "Clock",
    image: "/images/service-hourly.png",
    gallery: ["/images/work-2.jpg", "/images/service-hourly.png"],
    accent: "purple",
    popular: true,
    priceFrom: "$50/hour",
    duration: "2-hour minimum",
    bestFor: [
      "Targeted cleaning priorities",
      "Small jobs & touch-ups",
      "Specific rooms or tasks",
      "Flexible, as-needed cleaning",
    ],
    includes: [
      "Professional cleaner at $50/hour",
      "Choose your priority areas: bedroom, bathroom, kitchen",
      "2-hour minimum per visit",
      "Bring your own supplies, or use ours",
      "Add extra services (extra charge applies)",
      "Same reliable VA Home Cleaners standard",
    ],
    process: [
      {
        title: "Book your hours",
        description: "Reserve a 2-hour minimum block and tell us your priority areas.",
      },
      {
        title: "We focus on your list",
        description: "The cleaner works through your chosen tasks efficiently within the booked time.",
      },
      {
        title: "Pay for what you need",
        description: "Transparent hourly pricing — extend on-site if you'd like more done.",
      },
    ],
    benefits: [
      { icon: "DollarSign", title: "Transparent Pricing", description: "$50/hour, no surprises." },
      { icon: "Target", title: "You Choose Focus", description: "Direct the cleaner to your priorities." },
      { icon: "Clock", title: "Flexible Time", description: "Book exactly the hours you need." },
      { icon: "Plus", title: "Add-On Services", description: "Extend with extras when needed." },
    ],
    faq: [
      {
        question: "What's the minimum booking?",
        answer: "There's a 2-hour minimum per visit. After that, you can book in additional hourly increments.",
      },
      {
        question: "What can the cleaner do in 2 hours?",
        answer: "In 2 hours, a typical cleaner can deep-clean a kitchen and bathroom, or do a full light clean of a 1-bedroom apartment. We'll help you set realistic priorities.",
      },
      {
        question: "Are supplies included?",
        answer: "We can bring our own supplies, or use yours if you prefer. Just let us know when booking.",
      },
      {
        question: "What if I need more than 2 hours?",
        answer: "No problem. You can book more hours upfront, or extend on-site with the cleaner if time allows.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICE_DETAILS.map((s) => s.slug);

/** Trust badges shown on hourly / pricing sections */
export const TRUST_BADGES = [
  { icon: "BadgeCheck", label: "Experienced Staff" },
  { icon: "Headphones", label: "Live Support" },
  { icon: "Leaf", label: "Natural Products" },
  { icon: "Award", label: "Best Equipment" },
];
