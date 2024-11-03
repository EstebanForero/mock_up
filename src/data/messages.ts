
export type Message = {
  recipient: "user" | "liza",
  content: string
  isDaySeparator?: boolean
}

export const messages_v1: Message[] = [
  {
    recipient: "user",
    content: "ISA, ¿qué productos tienen en stock?",
  },
  {
    recipient: "liza",
    content: "Claro, aquí tienes una lista de productos disponibles de Ésika: [lista breve de productos como fragancias, maquillaje, cuidado de la piel]. ¿Te interesa algún tipo de producto en particular?",
  },
  {
    recipient: "user",
    content: "Sí, quiero ver opciones de fragancias.",
  },
  {
    recipient: "liza",
    content: "Perfecto. Aquí tienes nuestras fragancias más destacadas: [lista de fragancias populares]. ¿Te gustaría saber más sobre alguna de estas?",
  },
  {
    recipient: "user",
    content: "Cuéntame más sobre la primera fragancia.",
  },
  {
    recipient: "liza",
    content: "Es una fragancia floral con notas frescas y elegantes, ideal para cualquier ocasión. ¿Te gustaría añadirla al carrito?",
  },
  {
    isDaySeparator: true,
    recipient: "user",
    content: "",
  },

  // Top 10 productos más populares
  {
    recipient: "user",
    content: "¿Cuáles son los productos más vendidos?",
  },
  {
    recipient: "liza",
    content: "Aquí tienes los 10 productos más populares de Ésika esta semana: [lista de productos más vendidos, como labiales, perfumes y cremas]. ¿Te gustaría añadir alguno al carrito o saber más detalles?",
  },
  {
    recipient: "user",
    content: "Sí, quiero agregar el segundo producto de la lista.",
  },
  {
    recipient: "liza",
    content: "He añadido el producto a tu carrito. ¿Quieres ver el resumen del carrito o seguir explorando otros productos?",
  },
  {
    isDaySeparator: true,
    recipient: "user",
    content: "",
  },

  // Realización de pedido con confirmación
  {
    recipient: "user",
    content: "ISA, quiero realizar el pedido de mi carrito.",
  },
  {
    recipient: "liza",
    content: "Por supuesto. Aquí tienes el resumen de tu carrito: [lista de productos y precios]. ¿Confirmas que deseas proceder con el pedido? Responde con 'sí' para confirmar o 'no' para cancelar.",
  },
  {
    recipient: "user",
    content: "Sí, confirmo.",
  },
  {
    recipient: "liza",
    content: "Perfecto, estamos procesando tu pedido. Recibirás un correo con los detalles de envío y factura en breve.",
  },
  {
    recipient: "user",
    content: "Gracias, ISA.",
  },
  {
    recipient: "liza",
    content: "¡Con gusto! Si tienes alguna otra duda o necesitas ayuda en el futuro, estoy aquí para asistirte.",
  },
  {
    isDaySeparator: true,
    recipient: "user",
    content: "",
  },

  // Solicitud de mentoría o ayuda en ventas
  {
    recipient: "user",
    content: "ISA, necesito consejos para mejorar mis ventas de fragancias este mes.",
  },
  {
    recipient: "liza",
    content: "Un buen enfoque sería conocer qué tipo de fragancias prefieren tus clientes. Puedes ofrecer muestras o hacer preguntas sobre sus preferencias de aroma. ¿Te gustaría una sugerencia específica sobre cómo presentar una nueva fragancia?",
  },
  {
    recipient: "user",
    content: "Sí, eso sería útil.",
  },
  {
    recipient: "liza",
    content: "Podrías invitar a tus clientes a probar la fragancia en su muñeca y recordarles cómo evoluciona el aroma en unas horas. Una buena presentación puede hacer que se animen a probar más.",
  },
  {
    recipient: "user",
    content: "Gracias, ISA. Muy útil.",
  },
  {
    recipient: "liza",
    content: "Me alegra que te sirva. ¡Atraerás más clientes seguro!",
  },
];


export const messages_v2: Message[] = [
  // Situation 1: Searching for a specific product
  {
    recipient: "user",
    content: "¿Tienen algún producto para hidratar la piel?",
  },
  {
    recipient: "liza",
    content: "¡Hola! Sí, puedo ayudarte a encontrar productos hidratantes para la piel. Un momento...",
  },
  {
    recipient: "liza",
    content: "Aquí están algunos productos que pueden ayudarte a mantener la piel bien hidratada: [lista de productos hidratantes]. ¿Hay alguno que te interese revisar en detalle?",
  },
  {
    recipient: "user",
    content: "Sí, quiero saber más sobre el tercer producto.",
  },
  {
    recipient: "liza",
    content: "El tercer producto es una loción con ingredientes naturales que hidrata en profundidad y es ideal para pieles sensibles. ¿Te gustaría añadirlo a tu lista de compras o ver otros productos?",
  },
  {
    isDaySeparator: true,
    recipient: "user",
    content: "",
  },

  // Situation 2: Showing 10 most recommended products
  {
    recipient: "user",
    content: "¿Cuáles son los productos más recomendados?",
  },
  {
    recipient: "liza",
    content: "Aquí tienes nuestros 10 productos más recomendados actualmente: [lista de productos recomendados]. ¿Quieres información de alguno en particular?",
  },
  {
    recipient: "user",
    content: "Sí, háblame del segundo producto.",
  },
  {
    recipient: "liza",
    content: "El segundo producto es un suero rejuvenecedor que mejora la elasticidad de la piel y ayuda a reducir líneas finas. ¿Te gustaría añadirlo a tu carrito o necesitas detalles de otro producto?",
  }
];

