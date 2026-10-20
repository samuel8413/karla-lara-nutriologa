/**
 * Contenido central de la landing page.
 *
 * ⚠️ Todo lo marcado con `MOCK` son datos de ejemplo y deben reemplazarse
 * por la información real antes de publicar el sitio con dominio propio.
 */

export type IconName =
  | 'clipboard'
  | 'book'
  | 'plate'
  | 'sprout'
  | 'heart-pulse'
  | 'drop'
  | 'gauge';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export const site = {
  name: 'Karla Lara',
  fullName: 'Karla Alexia Lara Baltazar',
  title: 'Karla Lara · Nutrióloga | Nutrición para la vida real',
  tagline: 'Nutrición para la vida real',
  description:
    'Consulta nutricional personalizada con la nutrióloga Karla Alexia Lara Baltazar: educación y orientación alimentaria, nutrición en el embarazo, diabetes, hipertensión y dislipidemia. Presencial y en línea.',
  role: 'Licenciada en Nutrición',
  license: 'Cédula profesional 11728846', // MOCK
  locale: 'es_MX',
} as const;

export const contact = {
  whatsapp: '525565049317', // formato internacional sin "+" ni espacios
  phoneDisplay: '+52 55 6504 9317',
  phoneHref: '+525565049317',
  email: 'contacto@karlalara.example', // MOCK
  address: {
    street: 'Av. Ejemplo 123, Consultorio 4', // MOCK
    locality: 'Ciudad de México', // MOCK
    region: 'CDMX', // MOCK
    postalCode: '06000', // MOCK
    country: 'MX',
  },
  mapsUrl: 'https://maps.google.com/?q=Ciudad+de+M%C3%A9xico', // MOCK
  hours: [
    { days: 'Lunes a viernes', time: '9:00 – 19:00', schema: 'Mo-Fr 09:00-19:00' }, // MOCK
    { days: 'Sábado', time: '9:00 – 14:00', schema: 'Sa 09:00-14:00' }, // MOCK
  ],
  social: [
    { name: 'Instagram', url: 'https://instagram.com/' }, // MOCK
    { name: 'Facebook', url: 'https://facebook.com/' }, // MOCK
  ],
} as const;

export const whatsappLink = (text = 'Hola Karla, me gustaría agendar una consulta.') =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const services: Service[] = [
  {
    id: 'consulta',
    title: 'Servicios y consultas nutricionales',
    description:
      'Evaluación completa de tu estado de nutrición y un plan de alimentación diseñado para tus metas, gustos y rutina.',
    icon: 'clipboard',
  },
  {
    id: 'educacion',
    title: 'Educación nutricional',
    description:
      'Aprende a leer etiquetas, armar platos equilibrados y tomar decisiones informadas para comer bien sin depender de dietas.',
    icon: 'book',
  },
  {
    id: 'orientacion',
    title: 'Orientación alimentaria',
    description:
      'Acompañamiento práctico para mejorar tus hábitos: compras, porciones, horarios y opciones al comer fuera de casa.',
    icon: 'plate',
  },
  {
    id: 'embarazo',
    title: 'Nutrición durante el embarazo',
    description:
      'Alimentación segura y suficiente para ti y tu bebé en cada trimestre, y apoyo durante la lactancia.',
    icon: 'sprout',
  },
  {
    id: 'dislipidemia',
    title: 'Dislipidemia',
    description:
      'Plan nutricional para mejorar tus niveles de colesterol y triglicéridos y cuidar tu salud cardiovascular.',
    icon: 'heart-pulse',
  },
  {
    id: 'diabetes',
    title: 'Diabetes mellitus',
    description:
      'Estrategias de alimentación para mantener tu glucosa en control, prevenir complicaciones y comer con tranquilidad.',
    icon: 'drop',
  },
  {
    id: 'hipertension',
    title: 'Hipertensión arterial',
    description:
      'Ajustes en tu alimentación, con enfoque en sodio y potasio, que ayudan a controlar tu presión arterial.',
    icon: 'gauge',
  },
];

export const about = {
  // MOCK — biografía de ejemplo
  paragraphs: [
    'Soy Karla Alexia Lara Baltazar, nutrióloga. Creo en una nutrición que se adapta a tu vida y no al revés: sin prohibiciones extremas, con información clara y metas alcanzables.',
    'Acompaño a personas que quieren mejorar su alimentación, a mujeres durante el embarazo y a pacientes con enfermedades crónicas como diabetes, hipertensión y dislipidemia, siempre con un trato cercano y basado en evidencia científica.',
  ],
  highlights: [
    'Planes 100 % personalizados', // MOCK
    'Enfoque basado en evidencia',
    'Consulta presencial y en línea', // MOCK
    'Seguimiento continuo', // MOCK
  ],
};

export const steps = [
  {
    title: 'Agenda tu cita',
    description: 'Escríbeme por WhatsApp o mediante el formulario y elige el horario que mejor te acomode.',
  },
  {
    title: 'Evaluación inicial',
    description:
      'Revisamos tu historia clínica, hábitos, estudios de laboratorio y medidas corporales para conocerte a fondo.',
  },
  {
    title: 'Plan personalizado',
    description: 'Recibes un plan de alimentación práctico, con recomendaciones y opciones que sí puedes sostener.',
  },
  {
    title: 'Seguimiento',
    description: 'Ajustamos el plan en cada consulta según tu evolución, dudas y nuevos objetivos.',
  },
];

export const plans = [
  {
    name: 'Primera consulta',
    price: '$400',
    duration: '60 minutos', // MOCK
    features: [
      'Historia clínica y nutricional',
      'Mediciones antropométricas',
      'Plan de alimentación personalizado',
      'Guía de equivalentes y recetas',
    ],
    featured: true,
  },
  {
    name: 'Consulta de seguimiento',
    price: '$350',
    duration: '40 minutos', // MOCK
    features: ['Revisión de avances', 'Ajustes al plan', 'Resolución de dudas', 'Nuevas metas'],
    featured: false,
  },
  {
    name: 'Consulta en línea',
    price: '$300',
    duration: '50 minutos', // MOCK
    features: ['Videollamada desde casa', 'Plan en formato digital', 'Seguimiento por mensaje', 'Ideal si vives fuera'],
    featured: false,
  },
];

// MOCK — testimonios de ejemplo. Sustituir por testimonios reales y autorizados.
export const testimonials = [
  {
    quote:
      'Por fin entendí cómo comer sin sentir que estoy a dieta. Mis análisis de colesterol mejoraron en tres meses.',
    name: 'Mariana G.',
    context: 'Paciente con dislipidemia',
  },
  {
    quote:
      'Karla me acompañó durante todo mi embarazo. Me sentí segura, informada y con mucha energía.',
    name: 'Daniela R.',
    context: 'Nutrición en el embarazo',
  },
  {
    quote: 'Aprendí a controlar mi glucosa con comida rica y sencilla. Su trato es muy cercano y profesional.',
    name: 'Jorge L.',
    context: 'Paciente con diabetes tipo 2',
  },
];

export const faqs = [
  {
    question: '¿Qué necesito llevar a mi primera consulta?',
    answer:
      'Si los tienes, tus estudios de laboratorio recientes (no más de 6 meses), la lista de medicamentos o suplementos que tomas y ropa cómoda para las mediciones.',
  },
  {
    question: '¿Las consultas en línea son igual de efectivas?',
    answer:
      'Sí. En la consulta en línea revisamos tu historia clínica, hábitos y avances por videollamada, y recibes tu plan en formato digital. Solo te pediré algunas medidas que puedes tomar en casa.',
  },
  {
    question: '¿Cada cuánto son las consultas de seguimiento?',
    answer:
      'Generalmente cada 2 a 4 semanas, según tus objetivos y tu condición de salud. Lo definimos desde la primera consulta.',
  },
  {
    question: '¿Atiendes a personas con diabetes, hipertensión o colesterol alto?',
    answer:
      'Sí. Diseño planes de alimentación específicos para estas condiciones, como complemento del tratamiento indicado por tu médico.',
  },
  {
    question: '¿Qué formas de pago aceptas?',
    answer: 'Efectivo, transferencia y tarjeta de débito o crédito.', // MOCK
  },
];
