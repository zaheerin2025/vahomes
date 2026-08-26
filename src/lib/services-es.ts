/**
 * Spanish translations for service detail content.
 * Maps service slug → Spanish versions of all text fields.
 */

export type ServiceDetailEs = {
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  bestFor: string[];
  includes: string[];
  process: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const SERVICE_DETAILS_ES: Record<string, ServiceDetailEs> = {
  "regular-cleaning": {
    name: "Limpieza Regular",
    shortName: "Regular",
    tagline: "Frescura consistente, semana tras semana",
    summary: "Perfecta para mantener tu hogar u oficina limpio y ordenado a diario.",
    description:
      "Nuestro servicio de Limpieza Regular está diseñado para mantener tu espacio consistentemente fresco y ordenado. Es la opción ideal para hogares y oficinas que necesitan mantenimiento continuo: cubre todas las tareas diarias que evitan que el polvo, el desorden y la suciedad se acumulen. Prográmalo semanalmente, quincenalmente o mensualmente según tu rutina.",
    bestFor: [
      "Hogares que necesitan mantenimiento semanal",
      "Oficinas con tráfico regular",
      "Familias ocupadas",
      "Mantenimiento recurrente",
    ],
    includes: [
      "Barrer y trapear pisos",
      "Aspirar alfombras y tapetes",
      "Quitar el polvo de superficies visibles (mesas, estantes, escritorios)",
      "Limpieza de baños (lavamanos, inodoros, espejos)",
      "Limpieza de superficies de cocina, estufa y fregadero",
      "Vaciar basureros",
    ],
    process: [
      { title: "Cuéntanos tu horario", description: "Elige visitas semanales, quincenales o mensuales en un horario que funcione para ti." },
      { title: "Nosotros nos encargamos", description: "El mismo equipo confiable llega según lo programado para mantener tu espacio fresco." },
      { title: "Disfruta un espacio ordenado", description: "Llega a un hogar limpio y organizado cada vez." },
    ],
    benefits: [
      { title: "Horario Confiable", description: "Mismo equipo, misma hora, cada visita." },
      { title: "Ahorra Tiempo", description: "Recupera tus noches y fines de semana." },
      { title: "Resultados Consistentes", description: "Un estándar impecable, en cada visita." },
      { title: "Mejor Valor", description: "Planes recurrentes a precios accesibles." },
    ],
    faq: [
      { question: "¿Con qué frecuencia debo programar la limpieza regular?", answer: "La mayoría de clientes elige semanal o quincenal. También podemos hacer visitas mensuales según tus necesidades y el tamaño de tu espacio." },
      { question: "¿Será la misma persona de limpieza cada vez?", answer: "Buscamos enviar al mismo miembro del equipo de confianza para cada visita recurrente, para que conozca tu espacio y preferencias." },
      { question: "¿Necesito estar en casa durante la limpieza?", answer: "Para nada. Muchos clientes proporcionan instrucciones de acceso y regresan a un espacio recién limpiado." },
    ],
  },
  "light-cleaning": {
    name: "Limpieza Ligera",
    shortName: "Ligera",
    tagline: "Un refresco rápido entre visitas",
    summary: "Un servicio rápido y básico, diseñado para refrescar espacios sin profundizar.",
    description:
      "La Limpieza Ligera es nuestro servicio más rápido y económico — perfecto para refrescar las áreas principales entre limpiezas profundas. Se enfoca en los puntos visibles y de alto tráfico que hacen la mayor diferencia en cómo se siente un espacio. Ideal para invitados de último momento, orden después del fin de semana, o mantener todo presentable entre limpiezas regulares.",
    bestFor: [
      "Refresco rápido entre limpiezas profundas",
      "Antes de que lleguen invitados",
      "Apartamentos pequeños",
      "Ordenar áreas de alto tráfico",
    ],
    includes: [
      "Limpieza ligera de superficies (solo áreas principales)",
      "Barrer y trapeado rápido en húmedo",
      "Limpieza básica de baño (lavamanos, inodoro, espejo)",
      "Cocina: limpiar encimeras y superficies visibles",
    ],
    process: [
      { title: "Elige tus prioridades", description: "Cuéntanos las áreas principales en las que te gustaría que nos enfoquemos durante la visita." },
      { title: "Limpieza rápida y enfocada", description: "Nuestro equipo refresca las áreas visibles de mayor impacto en mínimo tiempo." },
      { title: "Refresco instantáneo", description: "Vuelve a un espacio más brillante y ordenado — listo para disfrutar." },
    ],
    benefits: [
      { title: "Súper Rápido", description: "Refresca tu espacio en menos de dos horas." },
      { title: "Más Económico", description: "Una opción económica para retoques rápidos." },
      { title: "Listo para Invitados", description: "Perfecto antes de que llegue visita." },
      { title: "Complementos Flexibles", description: "Añádelo entre tus limpiezas regulares cuando quieras." },
    ],
    faq: [
      { question: "¿Cuál es la diferencia entre limpieza ligera y regular?", answer: "La limpieza ligera se enfoca en áreas principales visibles para un refresco rápido. La limpieza regular es más completa y cubre todas las habitaciones en detalle." },
      { question: "¿Puedo reservar limpieza ligera para una sola habitación?", answer: "Sí. La limpieza ligera es flexible — nos dices en qué áreas enfocarnos y nosotros nos encargamos." },
      { question: "¿Cuánto tarda una visita de limpieza ligera?", answer: "Normalmente 1–2 horas dependiendo del tamaño de las áreas que quieras limpiar." },
    ],
  },
  "deep-cleaning": {
    name: "Limpieza Profunda",
    shortName: "Profunda",
    tagline: "La limpieza más detallada que ofrecemos",
    summary: "La limpieza más detallada y exhaustiva, ideal para espacios que necesitan un reset completo.",
    description:
      "Nuestro servicio de Limpieza Profunda va mucho más allá de una limpieza regular. Es un reset completo de arriba a abajo que aborda la suciedad acumulada, el polvo de difícil acceso y los puntos que suelen pasarse por alto. Ideal para limpieza de primavera, mudanzas, post-renovación, o cualquier espacio que merezca un comienzo verdaderamente fresco. Es nuestro servicio más popular por buena razón.",
    bestFor: [
      "Limpieza de mudanza (entrada/salida)",
      "Reset de limpieza de primavera",
      "Espacios post-renovación",
      "Hogares que necesitan atención extra",
    ],
    includes: [
      "Todo lo de Limpieza Regular, más:",
      "Limpieza profunda de cocina (electrodomésticos por fuera, y por dentro bajo pedido)",
      "Limpieza detallada de baños (azulejos, lechada, manchas difíciles)",
      "Quitar polvo de áreas altas y de difícil acceso (ventiladores de techo, estantes, lámparas)",
      "Limpiar puertas, interruptores, zócalos y marcos de ventanas",
      "Aspirar tapicería y espacios reducidos",
    ],
    process: [
      { title: "Recorrido y plan", description: "Discutimos tus prioridades e identificamos las áreas que necesitan más atención." },
      { title: "Limpieza profunda de arriba a abajo", description: "Nuestro equipo trabaja metódicamente del techo al piso, tocando cada superficie y detalle." },
      { title: "Recorrido final", description: "Revisamos los resultados contigo para asegurarnos de que no se nos haya pasado nada." },
    ],
    benefits: [
      { title: "Obsesionados con el Detalle", description: "Cada rincón, superficie y rendija atendidos." },
      { title: "Reset Completo", description: "Un comienzo verdaderamente fresco para cualquier espacio." },
      { title: "Hogar Más Saludable", description: "Elimina alérgenos, polvo y acumulación." },
      { title: "Diferencia Visible", description: "Verás y sentirás la transformación." },
    ],
    faq: [
      { question: "¿En qué se diferencia la limpieza profunda de la regular?", answer: "La limpieza profunda incluye todo lo de la limpieza regular, más atención detallada a áreas de difícil acceso, electrodomésticos por dentro (bajo pedido), lechada, zócalos, puertas, interruptores y marcos de ventanas." },
      { question: "¿Cuánto tarda una limpieza profunda?", answer: "Dependiendo del tamaño y condición del espacio, una limpieza profunda normalmente toma 3–6 horas con nuestro equipo." },
      { question: "¿Necesito una limpieza profunda antes de empezar el servicio recurrente?", answer: "La recomendamos para hogares que no han sido limpiados profesionalmente recientemente. Después de la limpieza profunda inicial, la limpieza regular mantiene todo en orden." },
    ],
  },
  "weekly-biweekly": {
    name: "Limpieza Semanal y Quincenal",
    shortName: "Recurrente",
    tagline: "Limpieza confiable en tu horario",
    summary: "Mantén tu hogar consistentemente fresco con servicios de limpieza recurrentes programados según tus necesidades.",
    description:
      "Nuestros planes de limpieza recurrente están diseñados para clientes que quieren un hogar consistentemente limpio sin la molestia de reservar cada vez. Elige visitas semanales o quincenales, y nosotros nos encargamos del resto — el mismo equipo confiable, el mismo estándar, cada vez. Es la forma más fácil de mantener tu espacio fresco todo el año.",
    bestFor: [
      "Profesionales ocupados",
      "Familias con niños o mascotas",
      "Cualquiera que quiera un hogar consistentemente limpio",
      "Tranquilidad a largo plazo",
    ],
    includes: [
      "Todas las tareas de Limpieza Regular",
      "Mismo miembro de equipo confiado en cada visita",
      "Horario flexible (semanal o quincenal)",
      "Lista de prioridades de tareas personalizable",
      "Reprogramación fácil cuando la vida pasa",
      "Reserva prioritaria para servicios adicionales",
    ],
    process: [
      { title: "Elige tu plan", description: "Elige visitas semanales o quincenales y selecciona un día/hora que se ajuste a tu horario." },
      { title: "Limpieza inicial", description: "Empezamos con una primera visita exhaustiva para llevar tu espacio a nuestro estándar." },
      { title: "Mantenimiento continuo", description: "El mismo equipo regresa según lo programado para mantener tu hogar consistentemente fresco." },
    ],
    benefits: [
      { title: "Configura y Olvida", description: "Una reserva, hogar limpio continuo." },
      { title: "Mismo Equipo", description: "Una persona que conoce tu espacio y preferencias." },
      { title: "Descuento Recurrente", description: "Ahorra en comparación con reservas únicas." },
      { title: "Reprogramación Fácil", description: "La vida pasa — nos adaptamos contigo." },
    ],
    faq: [
      { question: "¿Cuál es la diferencia entre semanal y quincenal?", answer: "Las visitas semanales mantienen tu hogar continuamente impecable. Quincenal (cada dos semanas) es la opción más popular — un gran equilibrio entre frescura y valor." },
      { question: "¿Puedo pausar o cancelar mi plan?", answer: "Sí. Los planes recurrentes son flexibles — puedes pausar, reprogramar o cancelar cuando quieras con un aviso razonable." },
      { question: "¿Tengo la misma persona de limpieza cada vez?", answer: "Hacemos nuestro mejor esfuerzo para enviar al mismo miembro del equipo en cada visita para que aprenda tus preferencias y tu espacio." },
    ],
  },
  "post-construction": {
    name: "Limpieza Post-Obra",
    shortName: "Post-Obra",
    tagline: "Del polvo de obra a lista para usar",
    summary: "Elimina polvo, escombros y residuos de construcción para que tu espacio recién terminado esté listo para usar.",
    description:
      "Después de una renovación o proyecto de construcción, el polvo y los escombros que quedan pueden ser abrumadores. Nuestro servicio de limpieza post-obra aborda el polvo fino, salpicaduras de pintura, residuos de adhesivo y escombros que la limpieza regular no puede manejar. Dejamos tu espacio recién renovado listo para mudanza, para que puedas disfrutar los resultados de tu proyecto sin el dolor de cabeza de la limpieza.",
    bestFor: [
      "Hogares recién renovados",
      "Mudanzas a construcción nueva",
      "Adecuaciones comerciales",
      "Limpieza post-remodelación",
    ],
    includes: [
      "Eliminación de polvo de construcción de todas las superficies",
      "Limpieza de ventilaciones, registros y lámparas",
      "Limpieza detallada de ventanas y marcos",
      "Eliminación de salpicaduras de pintura y residuos de adhesivo",
      "Barrer, aspirar y trapear todos los pisos",
      "Limpieza profunda de cocinas y baños recién instalados",
      "Paso final de detalle antes de la mudanza",
    ],
    process: [
      { title: "Evaluación del sitio", description: "Inspeccionamos el espacio y el alcance del trabajo para dar una cotización y cronograma precisos." },
      { title: "Limpieza gruesa", description: "Removemos escombros grandes, materiales de construcción y capas iniciales de polvo." },
      { title: "Limpieza final de detalle", description: "Un paso meticuloso de arriba a abajo para dejar el espacio listo para mudanza." },
    ],
    benefits: [
      { title: "Especialistas en Construcción", description: "Sabemos cómo manejar el desorden post-obra." },
      { title: "Eliminación de Polvo", description: "Elimina el polvo fino de construcción de todas partes." },
      { title: "Listo para Mudanza", description: "Entra y disfruta tu nuevo espacio inmediatamente." },
      { title: "Segura y Exhaustiva", description: "Manejo adecuado de todos los residuos post-construcción." },
    ],
    faq: [
      { question: "¿Cuándo debo reservar la limpieza post-obra?", answer: "Reserva después de que todo el trabajo de construcción esté completo y los contratistas hayan terminado. Podemos hacer una limpieza gruesa a mitad del proyecto y una limpieza final de detalle al final." },
      { question: "¿Remueven escombros de construcción?", answer: "Removemos escombros ligeros y polvo. Los desechos grandes de construcción y materiales peligrosos deben ser manejados por tu contratista o un servicio dedicado de remoción de desechos." },
      { question: "¿Cómo se determina el precio?", answer: "El precio depende del tamaño del espacio, el alcance del trabajo y el nivel de residuos de construcción. Damos una cotización gratis en sitio o basada en fotos." },
    ],
  },
  commercial: {
    name: "Limpieza de Oficinas y Comercial",
    shortName: "Comercial",
    tagline: "Espacios profesionales, limpios profesionalmente",
    summary: "Soluciones profesionales de limpieza para oficinas, espacios comerciales y lugares de trabajo.",
    description:
      "Un espacio de trabajo limpio causa una impresión más fuerte en los clientes y un ambiente más saludable para tu equipo. Nuestro servicio de limpieza comercial está diseñado para oficinas, espacios retail, consultorios médicos y otros lugares de trabajo. Trabajamos alrededor de tu horario comercial — temprano en la mañana, en la noche o fines de semana — para que tu equipo pueda enfocarse en el trabajo mientras nosotros nos encargamos de la limpieza.",
    bestFor: [
      "Oficinas y espacios de coworking",
      "Retail y showrooms",
      "Consultorios médicos y dentales",
      "Restaurantes y cafés",
    ],
    includes: [
      "Sanitización de estaciones de trabajo y escritorios",
      "Limpieza de cocina y áreas de descanso",
      "Limpieza de baños y reabastecimiento",
      "Cuidado de pisos (aspirar, barrer, trapear, pulir)",
      "Limpieza de cristales y ventanas",
      "Remoción de basura y reciclaje",
      "Desinfección de superficies de alto contacto",
      "Lista de limpieza personalizable",
    ],
    process: [
      { title: "Consulta gratis", description: "Visitamos tu espacio, entendemos tus necesidades y creamos un plan de limpieza personalizado." },
      { title: "Horario flexible", description: "Limpiamos antes, durante o después del horario laboral — lo que funcione para ti." },
      { title: "Calidad consistente", description: "Equipos capacitados siguen tu lista de limpieza personalizada en cada visita." },
    ],
    benefits: [
      { title: "Amigable para Negocios", description: "Limpieza que se ajusta a tu horario." },
      { title: "Equipo Más Saludable", description: "Menos días de enfermedad con espacios de trabajo sanitizados." },
      { title: "Impresión Pro", description: "Un espacio impecable impresiona a cada cliente." },
      { title: "Planes Personalizados", description: "Listas de verificación adaptadas a tu espacio." },
    ],
    faq: [
      { question: "¿Limpian durante o después del horario laboral?", answer: "Ambos. Trabajamos alrededor de tu horario — temprano en la mañana, en la noche, overnight o fines de semana. Muchos clientes prefieren la limpieza fuera de horario para que la oficina esté fresca cada mañana." },
      { question: "¿Pueden manejar espacios especializados como consultorios médicos?", answer: "Sí. Tenemos experiencia con consultorios médicos y dentales, usando protocolos y productos de desinfección apropiados para entornos sensibles." },
      { question: "¿Ofrecen contratos continuos?", answer: "Sí. La mayoría de clientes comerciales prefiere contratos recurrentes (diario, semanal o frecuencia personalizada) con un alcance fijo y precios predecibles." },
    ],
  },
  "eco-friendly": {
    name: "Limpieza Ecológica",
    shortName: "Ecológica",
    tagline: "Un enfoque más ecológico para un hogar impecable",
    summary: "¿Prefieres un enfoque más verde? Productos de limpieza ecológicos disponibles bajo pedido.",
    description:
      "Nuestra opción de limpieza ecológica usa productos vegetales y biodegradables que son duros con la suciedad pero suaves con el planeta. Perfecta para hogares con niños, mascotas o cualquier persona sensible a productos químicos agresivos. Puedes solicitar productos ecológicos en cualquiera de nuestros servicios — regular, profunda o comercial — sin complicaciones adicionales.",
    bestFor: [
      "Hogares con niños y mascotas",
      "Hogares sensibles a químicos",
      "Clientes conscientes del medio ambiente",
      "Cualquiera que quiera una limpieza más ecológica",
    ],
    includes: [
      "Productos de limpieza vegetales y biodegradables",
      "Limpiadores de superficies no tóxicos",
      "Ambientadores con aceites esenciales (opcional)",
      "Paños de microfibra (reutilizables, bajo desperdicio)",
      "Sin cloro ni amoníaco agresivos",
      "Seguro para superficies de preparación de alimentos",
    ],
    process: [
      { title: "Solicita ecológico", description: "Al reservar cualquier servicio, simplemente dinos que te gustaría la opción ecológica." },
      { title: "Nosotros traemos los productos verdes", description: "Nuestro equipo llega con limpiadores vegetales no tóxicos listos." },
      { title: "Una limpieza más segura y fresca", description: "Disfruta un espacio impecable sin residuos químicos agresivos ni vapores." },
    ],
    benefits: [
      { title: "Basado en Plantas", description: "Productos biodegradables, seguros para el planeta." },
      { title: "Seguro para Niños y Mascotas", description: "Sin químicos agresivos en las superficies." },
      { title: "Sin Vapores Agresivos", description: "Mejor calidad del aire interior." },
      { title: "Bajo Desperdicio", description: "Microfibra reutilizable, mínimo plástico." },
    ],
    faq: [
      { question: "¿Los productos ecológicos son tan efectivos como los limpiadores regulares?", answer: "Sí. Los limpiadores vegetales modernos son muy efectivos contra grasa, suciedad y bacterias. Para trabajos pesados podemos recomendar un producto específico, pero la limpieza diaria funciona genial con opciones eco." },
      { question: "¿Hay un cargo extra por ecológico?", answer: "En la mayoría de los casos, no. Los productos ecológicos se pueden solicitar en cualquier servicio sin costo adicional." },
      { question: "¿Los productos son seguros para mascotas?", answer: "Absolutamente. Los productos que usamos son no tóxicos y seguros para mascotas una vez que las superficies están secas." },
    ],
  },
  hourly: {
    name: "Limpieza por Hora",
    shortName: "Por Hora",
    tagline: "Limpieza flexible, precio por hora",
    summary: "Limpieza detallada por solo $50 por hora. Elige las áreas que necesitas limpiar, con mínimo de 2 horas.",
    description:
      "La limpieza por hora te da total flexibilidad. Por solo $50 por hora (mínimo de 2 horas), eliges exactamente en qué áreas enfocarte — dormitorio, baño, cocina o cualquier otra. Es perfecta para prioridades de limpieza específicas, trabajos pequeños, o cuando solo necesitas una mano extra. Añade servicios extra por un cargo adicional.",
    bestFor: [
      "Prioridades de limpieza específicas",
      "Trabajos pequeños y retoques",
      "Habitaciones o tareas específicas",
      "Limpieza flexible según necesidad",
    ],
    includes: [
      "Profesional de limpieza a $50/hora",
      "Elige tus áreas prioritarias: dormitorio, baño, cocina",
      "Mínimo de 2 horas por visita",
      "Trae tus propios suministros, o usa los nuestros",
      "Añade servicios extra (cargo adicional aplica)",
      "Mismo estándar confiable de VA Home Cleaners",
    ],
    process: [
      { title: "Reserva tus horas", description: "Reserva un bloque mínimo de 2 horas y cuéntanos tus áreas prioritarias." },
      { title: "Nos enfocamos en tu lista", description: "El limpiador trabaja eficientemente en tus tareas elegidas dentro del tiempo reservado." },
      { title: "Paga por lo que necesitas", description: "Precios transparentes por hora — extiende en el sitio si deseas más." },
    ],
    benefits: [
      { title: "Precios Transparentes", description: "$50/hora, sin sorpresas." },
      { title: "Tú Eliges el Enfoque", description: "Dirige al limpiador a tus prioridades." },
      { title: "Tiempo Flexible", description: "Reserva exactamente las horas que necesitas." },
      { title: "Servicios Adicionales", description: "Extiende con extras cuando lo necesites." },
    ],
    faq: [
      { question: "¿Cuál es la reserva mínima?", answer: "Hay un mínimo de 2 horas por visita. Después de eso, puedes reservar en incrementos de hora adicionales." },
      { question: "¿Qué puede hacer el limpiador en 2 horas?", answer: "En 2 horas, un limpiador típico puede limpiar a fondo una cocina y un baño, o hacer una limpieza ligera completa de un apartamento de 1 habitación. Te ayudaremos a establecer prioridades realistas." },
      { question: "¿Los suministros están incluidos?", answer: "Podemos traer nuestros propios suministros, o usar los tuyos si prefieres. Solo dínoslo al reservar." },
      { question: "¿Qué si necesito más de 2 horas?", answer: "No hay problema. Puedes reservar más horas por adelantado, o extender en el sitio con el limpiador si el tiempo lo permite." },
    ],
  },
};
