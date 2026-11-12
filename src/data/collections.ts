export type Collection = {
  slug: string;
  name: string;
  /** Titulo SEO de la pagina de coleccion */
  title: string;
  /**
   * Meta description de la pagina (150-160 caracteres).
   * Lleva el mismo texto que `description` para que la pagina siga mostrando
   * el parrafo introductorio sin cambios en el resto del codigo.
   */
  metaDescription: string;
  /** Parrafo introductorio visible bajo el titulo */
  description: string;
  /** Texto SEO que aparece al final de la pagina */
  seoText: string[];
  keywords: string[];
  emoji: string;
};

export const collections: Collection[] = [
  {
    slug: "soportes-celular",
    name: "Soportes de celular",
    title: "Soporte celular moto antivibracion 360 para repartidor",
    metaDescription:
      "Soporte celular moto antivibracion 360 con amortiguacion, sujecion por 4 esquinas y base de espejo. Precio en pesos, envio con guia rastreable a Mexico.",
    description:
      "Soporte celular moto antivibracion 360 con amortiguacion, sujecion por 4 esquinas y base de espejo. Precio en pesos, envio con guia rastreable a Mexico.",
    seoText: [
      "Un soporte de celular mal elegido arruina la navegacion: vibra, se gira solo o el telefono termina en el suelo. En esta coleccion reunimos soportes con amortiguacion en el punto de union, sujecion firme por las cuatro esquinas y rotacion 360 con traba.",
      "Para repartidores y moto de trabajo el angulo que importa es la antivibracion y el sujetador de cable, porque el conector se sale con los baches y te quedas sin bateria a medio turno. Si tu ruta tiene lluvia, la variante impermeable con carcasa y base de espejo es la que conviene.",
      "Elige por tipo de montaje, no por precio: manubrio de 22 a 32 mm o base de espejo. Si ya traes otros accesorios en el manubrio, la base de espejo queda mas estable y te libera el espacio.",
    ],
    keywords: [
      "soporte celular moto",
      "porta celular moto",
      "soporte celular para moto",
      "soporte celular moto antivibracion",
      "soporte celular moto impermeable",
    ],
    emoji: "📱",
  },
  {
    slug: "alforjas-y-bolsas",
    name: "Alforjas y bolsas",
    title: "Alforjas moto impermeables y bolsas para moto",
    metaDescription:
      "Alforjas moto impermeables de 36 a 58 litros, mochila impermeable de 25 litros y bolsa de pierna. Capacidad real, montaje universal y precio en pesos.",
    description:
      "Alforjas moto impermeables de 36 a 58 litros, mochila impermeable de 25 litros y bolsa de pierna. Capacidad real, montaje universal y precio en pesos.",
    seoText: [
      "La categoria con mas busqueda en Mexico es alforjas moto, y con razon: es la forma mas estable de cargar sin cargar peso en la espalda. Aqui encontraras desde bolsas compactas de pierna hasta alforjas laterales de mayor capacidad.",
      "Elige por volumen y por tipo de uso. Para traslados diarios suele alcanzar una bolsa de pierna o mochila impermeable de 25 litros; para viaje o carga de trabajo conviene una alforja lateral de 36 a 58 litros con cubiertas impermeables incluidas.",
      "Ojo con la impermeabilidad: ninguna de estas bolsas es sumergible. Resisten lluvia fuerte en trayecto, que es lo que necesitas, pero lo que hace la diferencia es el tipo de cierre, y por eso la mochila de esta tienda lleva cierre estanco enrollable.",
    ],
    keywords: [
      "alforjas moto",
      "mochila moto",
      "mochila impermeable moto",
      "bolsa para moto",
      "maleta impermeable para moto",
      "bolsa herramientas moto",
    ],
    emoji: "🎒",
  },
  {
    slug: "cubre-moto-e-impermeables",
    name: "Cubre moto e impermeables",
    title: "Cubre moto impermeable con hebilla antiviento",
    metaDescription:
      "Cubre moto impermeable con hebilla antiviento, costuras selladas y forro suave. Protege tu moto de lluvia, sol y polvo. Tallas M a XXL. Precio en MXN.",
    description:
      "Cubre moto impermeable con hebilla antiviento, costuras selladas y forro suave. Protege tu moto de lluvia, sol y polvo. Tallas M a XXL. Precio en MXN.",
    seoText: [
      "Si tu moto duerme en la calle, el enemigo no es solo la lluvia: es el sol, el polvo y la humedad constante. Un cubre moto impermeable con hebilla antiviento resuelve las tres cosas y evita que el viento te lo arranque, que es lo que le pasa a las fundas que solo se amarran con cordon.",
      "Antes de comprar, mide el largo total de tu moto de punta a punta y sumale el alto del manubrio. Es el error mas comun: pedir la talla chica y quedarse con un cubre que no cubre. Si estas entre dos tallas, sube a la mayor.",
      "Revisa tambien que tenga forro interior suave, para que la funda no raye la pintura cuando se arrastra con viento, y costuras reflectivas para que te vean de noche. Nunca lo pongas con el escape caliente.",
    ],
    keywords: [
      "cubre moto",
      "funda para moto",
      "cubre moto impermeable",
      "impermeable para moto",
      "cubre moto para la calle",
    ],
    emoji: "🌧️",
  },
  {
    slug: "punos-y-comodidad",
    name: "Punos y comodidad",
    title: "Punos moto universales 22/25 mm y cubre punos",
    metaDescription:
      "Punos moto universales de 22 y 25 mm con goma antideslizante y cubre punos que cortan el viento. Mide el diametro exterior de tu puno original antes de comprar.",
    description:
      "Punos moto universales de 22 y 25 mm con goma antideslizante y cubre punos que cortan el viento. Mide el diametro exterior de tu puno original antes de comprar.",
    seoText: [
      "Los punos moto son una mejora barata que se siente desde el primer trayecto: menos vibracion en las manos, mejor agarre y menos fatiga en trayectos largos. Los de fabrica se endurecen, se ponen resbalosos y dejan pasar toda la vibracion.",
      "Lo mas importante es la medida. La mayoria de las motos usa 22 mm del lado del clutch y 25 mm del lado del acelerador. Mide el diametro exterior del puno original o el tubo metalico y compara antes de pedir: un puno que no entra bien no se compensa de forma segura.",
      "Los cubre punos son el complemento: cortan el viento y la lluvia directa sobre los dedos, que es de donde viene el frio de verdad en carretera. Se montan en el manubrio con abrazadera, sin modificar la moto.",
    ],
    keywords: [
      "punos moto",
      "punos moto universal",
      "cubre punos moto",
      "handguards moto",
      "punos moto 22mm",
    ],
    emoji: "🤲",
  },
  {
    slug: "seguridad-y-candados",
    name: "Seguridad y candados",
    title: "Candado disco moto con cable recordatorio",
    metaDescription:
      "Candado disco moto con llave y cable recordatorio naranja y reflectivos para verte de noche. Seguridad visible para tu moto. Envio con guia rastreable.",
    description:
      "Candado disco moto con llave y cable recordatorio naranja y reflectivos para verte de noche. Seguridad visible para tu moto. Envio con guia rastreable.",
    seoText: [
      "El cable recordatorio parece un detalle tonto y es lo que evita el error mas caro: arrancar con el candado de disco puesto. Va del candado al manubrio, asi que lo ves antes de mover la moto.",
      "Ningun candado hace la moto imposible de robar. Lo que hacen es subir el esfuerzo necesario y quitar oportunidad. Combinar candado de disco con una cadena o un anclaje fijo siempre es mejor que usar solo uno.",
      "Para el uso diario importa mas la rapidez que la potencia: un candado que toma medio minuto es un candado que terminas de dejar puesto en la calle. Y para que te vean de noche, los reflectivos son el complemento mas barato que puedes instalar.",
    ],
    keywords: [
      "candado disco moto",
      "candado moto",
      "cable recordatorio candado",
      "seguridad moto",
      "candado para moto",
    ],
    emoji: "🔒",
  },
  {
    slug: "mantenimiento",
    name: "Mantenimiento",
    title: "Cepillo limpiador de cadena moto y herramienta",
    metaDescription:
      "Cepillo limpiador de cadena moto de 3 caras y bolsa compacta de herramientas. Mantenimiento basico en minutos, sin aerosoles ni liquidos. Envio con guia.",
    description:
      "Cepillo limpiador de cadena moto de 3 caras y bolsa compacta de herramientas. Mantenimiento basico en minutos, sin aerosoles ni liquidos. Envio con guia.",
    seoText: [
      "La cadena es la pieza que mas agradece el mantenimiento basico y la que mas caro sale cuando se descuida. Un cepillo de tres caras limpia lo que un trapo no alcanza, porque las cerdas entran entre los eslabones desde arriba, abajo y de lado.",
      "No vendemos aerosoles ni liquidos por ahora: las restricciones de envio encarecen el producto y complican la entrega. Vendemos la herramienta y el accesorio solido, y el lubricante de cadena lo consigues local sin pagar envio internacional.",
      "El metodo es simple: pasa el cepillo con la rueda girandola, retira la suciedad con un trapo y despues aplica lubricante. Hazlo cada dos o tres semanas en uso urbano, y mas seguido si manejas con lluvia o en caminos de tierra.",
    ],
    keywords: [
      "lubricante cadena moto",
      "limpiador cadena moto",
      "cepillo cadena moto",
      "mantenimiento moto",
      "bolsa herramientas moto",
    ],
    emoji: "🧰",
  },
  {
    slug: "stickers-y-personalizacion",
    name: "Stickers y personalizacion",
    title: "Stickers y calcomanias para moto y casco",
    metaDescription:
      "Stickers moto, calcomanias y vinilos reflectivos para personalizar tu moto o casco. Disenos genericos sin logos de marcas y envio con guia rastreable.",
    description:
      "Stickers moto, calcomanias y vinilos reflectivos para personalizar tu moto o casco. Disenos genericos sin logos de marcas y envio con guia rastreable.",
    seoText: [
      "Personalizar no tiene que costar. Stickers genericos y reflectivos cambian la cara de la moto o el casco por muy poco y son un excelente complemento de pedido: entrada barata que suma al carrito.",
      "Todos nuestros stickers son de disenos genericos. No vendemos logos de marcas registradas. Para que si peguen y duren, importa que la superficie este limpia y sin grasa, que se apliquen con el metodo de la tarjeta para que no queden burbujas, y que el vinil sea resistente a agua y rayos UV.",
      "Los reflectivos cumplen otra funcion: no brillan solos, devuelven la luz de los faros, asi que de noche te ven mas temprano. Se aplican en casco, horquilla o laterales del carenado.",
    ],
    keywords: [
      "stickers moto",
      "calcomanias moto",
      "stickers reflectivos moto",
      "reflejantes moto",
      "stickers para casco",
    ],
    emoji: "✨",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}
