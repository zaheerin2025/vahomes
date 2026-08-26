/**
 * VA Home Cleaners — bilingual translations (EN / ES).
 * Flat key structure for easy lookups via t("key.path").
 */

export type Locale = "en" | "es";

export const LOCALES: Locale[] = ["en", "es"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
};

type Dict = Record<string, string>;

export const translations: Record<Locale, Dict> = {
  en: {
    // ===== Navigation =====
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.work": "Our Work",
    "nav.contact": "Contact",
    "nav.book": "Book a Cleaning",

    // ===== Header =====
    "header.callAnytime": "Call Anytime",

    // ===== Hero =====
    "hero.eyebrow": "Professional Home & Commercial Cleaning",
    "hero.title1": "A Cleaner Space.",
    "hero.title2": "A Better Way to Live.",
    "hero.taglineEn": "Cleaning that transforms",
    "hero.description":
      "From deep home cleaning to recurring maintenance and commercial spaces, VA Home Cleaners delivers reliable, detailed cleaning services designed around your needs.",
    "hero.ctaBook": "Book a Cleaning",
    "hero.trustReliable": "Reliable Service",
    "hero.trustDetailed": "Detailed Cleaning",
    "hero.trustBoth": "Residential & Commercial",
    "hero.ratingLoved": "Loved by local homes",
    "hero.ratingTrusted": "Trusted cleaning service",
    "hero.ecoTitle": "Eco-Friendly",
    "hero.ecoSub": "Green cleaning on request",

    // ===== Trust strip =====
    "trust.eyebrow": "Why Customers Choose VA Home Cleaners",
    "trust.professional": "Professional Service",
    "trust.professionalDesc": "Detailed cleaning performed with care.",
    "trust.flexible": "Flexible Scheduling",
    "trust.flexibleDesc": "Cleaning options designed around your schedule.",
    "trust.both": "Residential & Commercial",
    "trust.bothDesc": "Solutions for homes, offices, and other spaces.",
    "trust.eco": "Eco-Friendly Options",
    "trust.ecoDesc": "Eco-friendly products available upon request.",

    // ===== Services =====
    "services.eyebrow": "Our Services",
    "services.title1": "Cleaning Services Designed ",
    "services.title2": "Around You",
    "services.description":
      "Whether you need a one-time deep clean or dependable recurring service, we have flexible cleaning options to fit your space. Tap any service for full details.",
    "services.deep": "Deep House Cleaning",
    "services.regular": "Regular Cleaning",
    "services.light": "Light Cleaning",
    "services.weekly": "Weekly & Bi-Weekly Cleaning",
    "services.postConstruction": "Post-Construction Cleaning",
    "services.commercial": "Office & Commercial Cleaning",
    "services.eco": "Eco-Friendly Cleaning",
    "services.hourly": "Cleaning by the Hour",
    "services.viewDetails": "View Details",
    "services.notSure": "Not sure which service fits?",
    "services.getRec": "Get a free recommendation",
    "services.notSureSuffix": "— we'll help you choose.",

    // ===== Featured service =====
    "featured.eyebrow": "Featured Service",
    "featured.title": "Give Your Home the Deep Clean It Deserves",
    "featured.description":
      "From kitchens and bathrooms to living areas and hard-to-reach spaces, our detailed cleaning service helps transform your home into a fresher, more comfortable environment.",
    "featured.point1": "Kitchens & bathrooms sanitized",
    "featured.point2": "Hard-to-reach areas covered",
    "featured.point3": "Living areas & bedrooms refreshed",
    "featured.point4": "Attention to every detail",
    "featured.cta": "Book a Deep Cleaning",
    "featured.badgeTitle": "Deep Clean",
    "featured.badgeSub": "Top-to-bottom",

    // ===== How it works =====
    "how.eyebrow": "How It Works",
    "how.title1": "A Cleaner Home in ",
    "how.title2": "3 Simple Steps",
    "how.description":
      "Getting started is easy. We've made the whole process simple and stress-free from start to finish.",
    "how.step1Title": "Choose Your Service",
    "how.step1Desc": "Tell us what kind of cleaning your home or business needs.",
    "how.step2Title": "Schedule Your Cleaning",
    "how.step2Desc": "Choose a convenient time that works for you.",
    "how.step3Title": "Enjoy a Cleaner Space",
    "how.step3Desc": "Our team takes care of the cleaning so you can enjoy the results.",

    // ===== Our Work =====
    "work.eyebrow": "Our Work",
    "work.title1": "See the Difference ",
    "work.title2": "We Make",
    "work.description":
      "Real results from real cleans — featuring our team in action and the sparkling spaces we leave behind.",
    "work.all": "All",
    "work.residential": "Residential",
    "work.airbnb": "Airbnb",
    "work.commercial": "Commercial",
    "work.realPhotos": "Real photos from our team — actual results we're proud of.",

    // ===== Before/After =====
    "ba.eyebrow": "Before & After",
    "ba.title1": "From Before to ",
    "ba.title2": "Brilliant",
    "ba.description":
      "A professional clean can completely change the look and feel of a space. Drag the slider to see the transformation.",
    "ba.before": "Before",
    "ba.after": "After",
    "ba.transformation": "Transformation",
    "ba.livingRoom": "Living Room",
    "ba.kitchen": "Kitchen",

    // ===== Why choose us =====
    "why.eyebrow": "Why VA Home Cleaners",
    "why.title1": "More Than Cleaning. ",
    "why.title2": "We Care About Your Space.",
    "why.description":
      "VA Home Cleaners provides residential and commercial cleaning with a focus on dependable service, attention to detail, and a cleaner experience for every customer.",
    "why.reason1": "Attention to Detail",
    "why.reason1Desc":
      "We focus on the details that make a space feel truly clean — from surfaces to the spots others miss.",
    "why.reason2": "Flexible Cleaning Options",
    "why.reason2Desc":
      "Choose one-time, recurring, hourly, residential, or commercial cleaning — built around your priorities.",
    "why.reason3": "Professional Approach",
    "why.reason3Desc":
      "We aim to provide a dependable and professional customer experience, every single visit.",
    "why.reason4": "Cleaning That Fits Your Needs",
    "why.reason4Desc":
      "From standard cleaning to specialized requests, services can be tailored around your priorities.",
    "why.stat1": "Detail-focused",
    "why.stat2": "Service options",
    "why.stat3": "Days a week",
    "why.stat4": "Tailored to you",
    "why.quote": "\"We treat every space like it's our own.\"",
    "why.quoteAuthor": "— The VA Home Cleaners Team",

    // ===== Testimonials =====
    "test.eyebrow": "Testimonials",
    "test.title": "What Our Customers Say",
    "test.description": "Real feedback from the people and businesses we keep clean.",
    "test.disclaimer":
      "Sample reviews shown for demonstration. Real customer reviews will replace these as they become available.",

    // ===== CTA banner =====
    "ctabanner.eyebrow": "Get Started Today",
    "ctabanner.title": "Ready for a Cleaner Space?",
    "ctabanner.description":
      "Let VA Home Cleaners take care of the cleaning while you focus on what matters.",
    "ctabanner.cta": "Book Your Cleaning",
    "ctabanner.callAnytime": "Call anytime",
    "ctabanner.hereToHelp": "We're here to help",

    // ===== Contact =====
    "contact.eyebrow": "Contact / Quote",
    "contact.title1": "Let's Get Your Space ",
    "contact.title2": "Looking Its Best",
    "contact.description":
      "Tell us what you need cleaned and we'll help you find the right service.",
    "contact.callAnytime": "Call Anytime",
    "contact.callDesc":
      "Speak directly with our team — we're happy to answer any questions and help you book the right service.",
    "contact.emailUs": "Email Us",
    "contact.availability": "Availability",
    "contact.daysWeek": "7 days a week",
    "contact.serviceArea": "Service Area",
    "contact.areaValue": "Residential & commercial",
    "contact.noObligation": "No obligation.",
    "contact.noObligationDesc":
      "Requesting a quote is free and there's no commitment. We'll get back to you with the right cleaning solution for your space.",
    "contact.formTitle": "Request a Free Quote",
    "contact.formSub": "We'll reply within one business day.",
    "contact.name": "Name",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.serviceNeeded": "Service Needed",
    "contact.preferredDate": "Preferred Date",
    "contact.message": "Message",
    "contact.additionalDetails": "Additional Details",
    "contact.detailsPlaceholder":
      "Square footage, number of rooms, special requests, etc.",
    "contact.submit": "Request a Quote",
    "contact.sending": "Sending your request...",
    "contact.sent": "Request Sent — We'll be in touch!",
    "contact.error": "Something went wrong. Please call us at",
    "contact.privacy":
      "By submitting, you agree to be contacted about your cleaning request. We respect your privacy.",
    "contact.selectService": "Select a service",

    // ===== Footer =====
    "footer.description":
      "Professional residential and commercial cleaning services designed to keep your spaces fresh, clean, and comfortable.",
    "footer.taglineEn": "Cleaning that transforms",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.getInTouch": "Get In Touch",
    "footer.daysWeek": "7 days a week",
    "footer.serviceArea": "Residential & commercial",
    "footer.bookCta": "Book a Cleaning",
    "footer.rights": "All Rights Reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.madeWith": "Made with",
    "footer.madeFor": "for cleaner spaces",

    // ===== Booking page =====
    "book.eyebrow": "Book a Cleaning",
    "book.title1": "Let's get your space ",
    "book.title2": "looking its best",
    "book.description":
      "Four quick steps — pick your service, tell us about your space, choose a date, and we'll take care of the rest. No obligation, free quote.",
    "book.step1": "Service",
    "book.step2": "Details",
    "book.step3": "Schedule",
    "book.step4": "Contact",
    "book.step1Title": "Choose your service",
    "book.step1Desc":
      "Pick the cleaning service that fits your needs. You can change this later.",
    "book.step2Title": "Tell us about your space",
    "book.step2Desc":
      "A few details so we can match the right team and time to your needs.",
    "book.step3Title": "When would you like it?",
    "book.step3Desc": "Pick a preferred date. We'll confirm the exact time with you.",
    "book.step4Title": "How can we reach you?",
    "book.step4Desc":
      "Almost done! Just your contact details and we'll send a confirmation.",
    "book.frequency": "How often do you need cleaning?",
    "book.homeSize": "What size is your space?",
    "book.priorities": "Priority areas",
    "book.prioritiesOptional": "(optional)",
    "book.prioritiesHint": "Tap the areas you'd like us to focus on.",
    "book.preferredDate": "Preferred date",
    "book.notes": "Notes",
    "book.notesPlaceholder":
      "Anything special we should know? (pets, parking, access, etc.)",
    "book.summary": "Your selection so far",
    "book.name": "Name",
    "book.phone": "Phone",
    "book.email": "Email",
    "book.continue": "Continue",
    "book.back": "Back",
    "book.services": "Services",
    "book.requestBooking": "Request Booking",
    "book.sending": "Sending...",
    "book.successTitle": "Booking request sent!",
    "book.successDesc":
      "Thanks for your request. Our team will reach out shortly to confirm the details and finalize your booking.",
    "book.callNow": "Call us now",
    "book.backHome": "Back to home",
    "book.preferCall": "Prefer to talk?",
    "book.freqOneTime": "One-time",
    "book.freqOneTimeDesc": "Single visit",
    "book.freqWeekly": "Weekly",
    "book.freqWeeklyDesc": "Every week",
    "book.freqBiweekly": "Bi-Weekly",
    "book.freqBiweeklyDesc": "Every 2 weeks",
    "book.freqMonthly": "Monthly",
    "book.freqMonthlyDesc": "Every month",
    "book.sizeStudio": "Studio / 1BR",
    "book.sizeStudioDesc": "Up to 800 sqft",
    "book.size2br": "2 Bedroom",
    "book.size2brDesc": "800–1200 sqft",
    "book.size3br": "3 Bedroom",
    "book.size3brDesc": "1200–1800 sqft",
    "book.size4br": "4+ Bedroom",
    "book.size4brDesc": "1800+ sqft",
    "book.sizeOffice": "Office / Commercial",
    "book.sizeOfficeDesc": "Workspace",
    "book.errorService": "Please select a service.",
    "book.errorFrequency": "Please choose a frequency.",
    "book.errorHomeSize": "Please select your home size.",
    "book.errorDate": "Please choose a preferred date.",
    "book.errorName": "Please enter your name.",
    "book.errorPhone": "Please enter your phone.",
    "book.errorEmail": "Please enter a valid email.",
    "book.prioritiesList": "Kitchen,Bathrooms,Bedrooms,Living Room,Dining Room,Floors,Windows,Laundry,Organization,Move-in/Move-out",
    "book.trustExperienced": "Experienced Staff",
    "book.trustSupport": "Live Support",
    "book.trustNatural": "Natural Products",
    "book.trustEquipment": "Best Equipment",

    // ===== Service detail page =====
    "sd.backToServices": "Back to all services",
    "sd.mostPopular": "Most Popular",
    "sd.overview": "Overview",
    "sd.includesTitle": "What's included",
    "sd.includesSub": "Every booking covers:",
    "sd.bookNow": "Book Now",
    "sd.freeQuote": "Free quote · No obligation",
    "sd.howItWorks": "How It Works",
    "sd.processTitle": "A simple process",
    "sd.whyChoose": "Why Choose It",
    "sd.benefitsTitle": "Benefits you'll feel",
    "sd.gallery": "Gallery",
    "sd.galleryTitle": "in action",
    "sd.faq": "FAQ",
    "sd.faqTitle": "Common questions",
    "sd.ready": "Ready when you are",
    "sd.bookToday": "Book your service today",
    "sd.bookTodayDesc": "Get a free quote in minutes.",
    "sd.exploreMore": "Explore More",
    "sd.otherServices": "Other services",
    "sd.viewAll": "View all services",
    "sd.learnMore": "Learn More",
    "sd.bestFor": "Best for",

    // ===== Mobile CTA =====
    "mobile.callNow": "Call Now",
    "mobile.bookCleaning": "Book Cleaning",

    // ===== Language switcher =====
    "lang.switch": "Switch language",
    "lang.en": "English",
    "lang.es": "Español",
  },

  es: {
    // ===== Navigation =====
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.work": "Nuestro Trabajo",
    "nav.contact": "Contacto",
    "nav.book": "Reservar Limpieza",

    // ===== Header =====
    "header.callAnytime": "Llama cuando quieras",

    // ===== Hero =====
    "hero.eyebrow": "Limpieza Profesional Residencial y Comercial",
    "hero.title1": "Un Espacio Más Limpio.",
    "hero.title2": "Una Mejor Forma de Vivir.",
    "hero.taglineEn": "Cleaning that transforms",
    "hero.description":
      "Desde limpieza profunda del hogar hasta mantenimiento recurrente y espacios comerciales, VA Home Cleaners ofrece servicios de limpieza confiables y detallados diseñados según tus necesidades.",
    "hero.ctaBook": "Reservar Limpieza",
    "hero.trustReliable": "Servicio Confiable",
    "hero.trustDetailed": "Limpieza Detallada",
    "hero.trustBoth": "Residencial y Comercial",
    "hero.ratingLoved": "Favorito de los hogares locales",
    "hero.ratingTrusted": "Servicio de limpieza confiable",
    "hero.ecoTitle": "Ecológico",
    "hero.ecoSub": "Limpieza verde bajo pedido",

    // ===== Trust strip =====
    "trust.eyebrow": "Por Qué los Clientes Eligen VA Home Cleaners",
    "trust.professional": "Servicio Profesional",
    "trust.professionalDesc": "Limpieza detallada realizada con cuidado.",
    "trust.flexible": "Horarios Flexibles",
    "trust.flexibleDesc": "Opciones de limpieza diseñadas según tu horario.",
    "trust.both": "Residencial y Comercial",
    "trust.bothDesc": "Soluciones para hogares, oficinas y otros espacios.",
    "trust.eco": "Opciones Ecológicas",
    "trust.ecoDesc": "Productos ecológicos disponibles bajo pedido.",

    // ===== Services =====
    "services.eyebrow": "Nuestros Servicios",
    "services.title1": "Servicios de Limpieza Diseñados ",
    "services.title2": "Para Ti",
    "services.description":
      "Ya sea que necesites una limpieza profunda única o un servicio recurrente confiable, tenemos opciones flexibles de limpieza para tu espacio. Toca cualquier servicio para ver todos los detalles.",
    "services.deep": "Limpieza Profunda del Hogar",
    "services.regular": "Limpieza Regular",
    "services.light": "Limpieza Ligera",
    "services.weekly": "Limpieza Semanal y Quincenal",
    "services.postConstruction": "Limpieza Post-Obra",
    "services.commercial": "Limpieza de Oficinas y Comercial",
    "services.eco": "Limpieza Ecológica",
    "services.hourly": "Limpieza por Hora",
    "services.viewDetails": "Ver Detalles",
    "services.notSure": "¿No sabes qué servicio te conviene?",
    "services.getRec": "Obtén una recomendación gratis",
    "services.notSureSuffix": "— te ayudamos a elegir.",

    // ===== Featured service =====
    "featured.eyebrow": "Servicio Destacado",
    "featured.title": "Dale a tu Hogar la Limpieza Profunda que Merece",
    "featured.description":
      "Desde cocinas y baños hasta áreas comunes y espacios de difícil acceso, nuestro servicio de limpieza detallada ayuda a transformar tu hogar en un ambiente más fresco y cómodo.",
    "featured.point1": "Cocinas y baños desinfectados",
    "featured.point2": "Áreas de difícil acceso incluidas",
    "featured.point3": "Áreas comunes y dormitorios renovados",
    "featured.point4": "Atención a cada detalle",
    "featured.cta": "Reservar Limpieza Profunda",
    "featured.badgeTitle": "Limpieza Profunda",
    "featured.badgeSub": "De arriba a abajo",

    // ===== How it works =====
    "how.eyebrow": "Cómo Funciona",
    "how.title1": "Un Hogar Más Limpio en ",
    "how.title2": "3 Pasos Sencillos",
    "how.description":
      "Empezar es fácil. Hemos hecho todo el proceso simple y sin estrés de principio a fin.",
    "how.step1Title": "Elige tu Servicio",
    "how.step1Desc": "Cuéntanos qué tipo de limpieza necesita tu hogar o negocio.",
    "how.step2Title": "Agenda tu Limpieza",
    "how.step2Desc": "Elige un horario conveniente que funcione para ti.",
    "how.step3Title": "Disfruta un Espacio Más Limpio",
    "how.step3Desc": "Nuestro equipo se encarga de la limpieza para que disfrutes los resultados.",

    // ===== Our Work =====
    "work.eyebrow": "Nuestro Trabajo",
    "work.title1": "Mira la Diferencia que ",
    "work.title2": "Hacemos",
    "work.description":
      "Resultados reales de limpiezas reales — con nuestro equipo en acción y los espacios brillantes que dejamos.",
    "work.all": "Todos",
    "work.residential": "Residencial",
    "work.airbnb": "Airbnb",
    "work.commercial": "Comercial",
    "work.realPhotos": "Fotos reales de nuestro equipo — resultados de los que estamos orgullosos.",

    // ===== Before/After =====
    "ba.eyebrow": "Antes y Después",
    "ba.title1": "De Antes a ",
    "ba.title2": "Brillante",
    "ba.description":
      "Una limpieza profesional puede cambiar por completo el aspecto y la sensación de un espacio. Arrastra el control para ver la transformación.",
    "ba.before": "Antes",
    "ba.after": "Después",
    "ba.transformation": "Transformación",
    "ba.livingRoom": "Sala de Estar",
    "ba.kitchen": "Cocina",

    // ===== Why choose us =====
    "why.eyebrow": "Por Qué VA Home Cleaners",
    "why.title1": "Más que Limpieza. ",
    "why.title2": "Nos Importa tu Espacio.",
    "why.description":
      "VA Home Cleaners ofrece limpieza residencial y comercial con enfoque en servicio confiable, atención al detalle y una experiencia más limpia para cada cliente.",
    "why.reason1": "Atención al Detalle",
    "why.reason1Desc":
      "Nos enfocamos en los detalles que hacen que un espacio se sienta verdaderamente limpio — desde las superficies hasta los lugares que otros pasan por alto.",
    "why.reason2": "Opciones de Limpieza Flexibles",
    "why.reason2Desc":
      "Elige limpieza única, recurrente, por hora, residencial o comercial — según tus prioridades.",
    "why.reason3": "Enfoque Profesional",
    "why.reason3Desc":
      "Buscamos ofrecer una experiencia de cliente confiable y profesional en cada visita.",
    "why.reason4": "Limpieza que se Ajusta a tus Necesidades",
    "why.reason4Desc":
      "Desde limpieza estándar hasta solicitudes especializadas, los servicios se pueden adaptar a tus prioridades.",
    "why.stat1": "Enfoque en detalle",
    "why.stat2": "Opciones de servicio",
    "why.stat3": "Días por semana",
    "why.stat4": "A tu medida",
    "why.quote": "\"Tratamos cada espacio como si fuera nuestro.\"",
    "why.quoteAuthor": "— El Equipo de VA Home Cleaners",

    // ===== Testimonials =====
    "test.eyebrow": "Testimonios",
    "test.title": "Lo Que Dicen Nuestros Clientes",
    "test.description": "Comentarios reales de las personas y negocios que mantenemos limpios.",
    "test.disclaimer":
      "Reseñas de muestra mostradas para demostración. Las reseñas reales de clientes reemplazarán estas conforme estén disponibles.",

    // ===== CTA banner =====
    "ctabanner.eyebrow": "Comienza Hoy",
    "ctabanner.title": "¿Listo para un Espacio Más Limpio?",
    "ctabanner.description":
      "Deja que VA Home Cleaners se encargue de la limpieza mientras tú te enfocas en lo que importa.",
    "ctabanner.cta": "Reserva tu Limpieza",
    "ctabanner.callAnytime": "Llama cuando quieras",
    "ctabanner.hereToHelp": "Estamos para ayudarte",

    // ===== Contact =====
    "contact.eyebrow": "Contacto / Cotización",
    "contact.title1": "Pongamos tu Espacio a ",
    "contact.title2": "Punto",
    "contact.description":
      "Cuéntanos qué necesitas limpiar y te ayudaremos a encontrar el servicio adecuado.",
    "contact.callAnytime": "Llama cuando quieras",
    "contact.callDesc":
      "Habla directamente con nuestro equipo — estamos felices de responder cualquier pregunta y ayudarte a reservar el servicio adecuado.",
    "contact.emailUs": "Escríbenos",
    "contact.availability": "Disponibilidad",
    "contact.daysWeek": "7 días a la semana",
    "contact.serviceArea": "Área de Servicio",
    "contact.areaValue": "Residencial y comercial",
    "contact.noObligation": "Sin compromiso.",
    "contact.noObligationDesc":
      "Solicitar una cotización es gratis y no hay compromiso. Te responderemos con la solución de limpieza adecuada para tu espacio.",
    "contact.formTitle": "Solicita una Cotización Gratis",
    "contact.formSub": "Respondemos en un día hábil.",
    "contact.name": "Nombre",
    "contact.phone": "Teléfono",
    "contact.email": "Correo",
    "contact.serviceNeeded": "Servicio Necesario",
    "contact.preferredDate": "Fecha Preferida",
    "contact.message": "Mensaje",
    "contact.additionalDetails": "Detalles Adicionales",
    "contact.detailsPlaceholder":
      "Metros cuadrados, número de habitaciones, solicitudes especiales, etc.",
    "contact.submit": "Solicitar Cotización",
    "contact.sending": "Enviando tu solicitud...",
    "contact.sent": "¡Solicitud Enviada — Nos pondremos en contacto!",
    "contact.error": "Algo salió mal. Por favor llámanos al",
    "contact.privacy":
      "Al enviar, aceptas ser contactado sobre tu solicitud de limpieza. Respetamos tu privacidad.",
    "contact.selectService": "Selecciona un servicio",

    // ===== Footer =====
    "footer.description":
      "Servicios profesionales de limpieza residencial y comercial diseñados para mantener tus espacios frescos, limpios y cómodos.",
    "footer.taglineEn": "Cleaning that transforms",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.services": "Servicios",
    "footer.getInTouch": "Contáctanos",
    "footer.daysWeek": "7 días a la semana",
    "footer.serviceArea": "Residencial y comercial",
    "footer.bookCta": "Reservar Limpieza",
    "footer.rights": "Todos los Derechos Reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.madeWith": "Hecho con",
    "footer.madeFor": "para espacios más limpios",

    // ===== Booking page =====
    "book.eyebrow": "Reservar Limpieza",
    "book.title1": "Pongamos tu espacio ",
    "book.title2": "a punto",
    "book.description":
      "Cuatro pasos rápidos — elige tu servicio, cuéntanos sobre tu espacio, elige una fecha y nosotros nos encargamos del resto. Sin compromiso, cotización gratis.",
    "book.step1": "Servicio",
    "book.step2": "Detalles",
    "book.step3": "Agenda",
    "book.step4": "Contacto",
    "book.step1Title": "Elige tu servicio",
    "book.step1Desc":
      "Elige el servicio de limpieza que se ajuste a tus necesidades. Puedes cambiarlo después.",
    "book.step2Title": "Cuéntanos sobre tu espacio",
    "book.step2Desc":
      "Algunos detalles para asignar el equipo y horario correctos a tus necesidades.",
    "book.step3Title": "¿Para cuándo lo necesitas?",
    "book.step3Desc": "Elige una fecha preferida. Confirmaremos la hora exacta contigo.",
    "book.step4Title": "¿Cómo podemos contactarte?",
    "book.step4Desc":
      "¡Casi listo! Solo tus datos de contacto y enviaremos una confirmación.",
    "book.frequency": "¿Con qué frecuencia necesitas limpieza?",
    "book.homeSize": "¿Qué tamaño tiene tu espacio?",
    "book.priorities": "Áreas prioritarias",
    "book.prioritiesOptional": "(opcional)",
    "book.prioritiesHint": "Toca las áreas en las que te gustaría que nos enfoquemos.",
    "book.preferredDate": "Fecha preferida",
    "book.notes": "Notas",
    "book.notesPlaceholder":
      "¿Algo especial que debamos saber? (mascotas, estacionamiento, acceso, etc.)",
    "book.summary": "Tu selección hasta ahora",
    "book.name": "Nombre",
    "book.phone": "Teléfono",
    "book.email": "Correo",
    "book.continue": "Continuar",
    "book.back": "Atrás",
    "book.services": "Servicios",
    "book.requestBooking": "Solicitar Reserva",
    "book.sending": "Enviando...",
    "book.successTitle": "¡Solicitud de reserva enviada!",
    "book.successDesc":
      "Gracias por tu solicitud. Nuestro equipo se pondrá en contacto pronto para confirmar los detalles y finalizar tu reserva.",
    "book.callNow": "Llámanos ahora",
    "book.backHome": "Volver al inicio",
    "book.preferCall": "¿Prefieres hablar?",
    "book.freqOneTime": "Único",
    "book.freqOneTimeDesc": "Visita única",
    "book.freqWeekly": "Semanal",
    "book.freqWeeklyDesc": "Cada semana",
    "book.freqBiweekly": "Quincenal",
    "book.freqBiweeklyDesc": "Cada 2 semanas",
    "book.freqMonthly": "Mensual",
    "book.freqMonthlyDesc": "Cada mes",
    "book.sizeStudio": "Estudio / 1 Hab",
    "book.sizeStudioDesc": "Hasta 75 m²",
    "book.size2br": "2 Habitaciones",
    "book.size2brDesc": "75–110 m²",
    "book.size3br": "3 Habitaciones",
    "book.size3brDesc": "110–170 m²",
    "book.size4br": "4+ Habitaciones",
    "book.size4brDesc": "170+ m²",
    "book.sizeOffice": "Oficina / Comercial",
    "book.sizeOfficeDesc": "Lugar de trabajo",
    "book.errorService": "Por favor selecciona un servicio.",
    "book.errorFrequency": "Por favor elige una frecuencia.",
    "book.errorHomeSize": "Por favor selecciona el tamaño de tu espacio.",
    "book.errorDate": "Por favor elige una fecha preferida.",
    "book.errorName": "Por favor ingresa tu nombre.",
    "book.errorPhone": "Por favor ingresa tu teléfono.",
    "book.errorEmail": "Por favor ingresa un correo válido.",
    "book.prioritiesList": "Cocina,Baños,Dormitorios,Sala de Estar,Comedor,Pisos,Ventanas,Lavandería,Organización,Mudanza",
    "book.trustExperienced": "Personal Experto",
    "book.trustSupport": "Soporte en Vivo",
    "book.trustNatural": "Productos Naturales",
    "book.trustEquipment": "Mejor Equipo",

    // ===== Service detail page =====
    "sd.backToServices": "Volver a todos los servicios",
    "sd.mostPopular": "Más Popular",
    "sd.overview": "Descripción",
    "sd.includesTitle": "Qué incluye",
    "sd.includesSub": "Cada reserva cubre:",
    "sd.bookNow": "Reservar",
    "sd.freeQuote": "Cotización gratis · Sin compromiso",
    "sd.howItWorks": "Cómo Funciona",
    "sd.processTitle": "Un proceso sencillo",
    "sd.whyChoose": "Por Qué Elegirlo",
    "sd.benefitsTitle": "Beneficios que sentirás",
    "sd.gallery": "Galería",
    "sd.galleryTitle": "en acción",
    "sd.faq": "Preguntas Frecuentes",
    "sd.faqTitle": "Preguntas comunes",
    "sd.ready": "Listo cuando tú",
    "sd.bookToday": "Reserva tu servicio hoy",
    "sd.bookTodayDesc": "Obtén una cotización gratis en minutos.",
    "sd.exploreMore": "Explora Más",
    "sd.otherServices": "Otros servicios",
    "sd.viewAll": "Ver todos los servicios",
    "sd.learnMore": "Ver Más",
    "sd.bestFor": "Ideal para",

    // ===== Mobile CTA =====
    "mobile.callNow": "Llamar",
    "mobile.bookCleaning": "Reservar",

    // ===== Language switcher =====
    "lang.switch": "Cambiar idioma",
    "lang.en": "English",
    "lang.es": "Español",
  },
};

/** Helper to get a nested list (comma-separated) as an array */
export function getList(locale: Locale, key: string): string[] {
  return (translations[locale][key] ?? translations.en[key] ?? "").split(",");
}
