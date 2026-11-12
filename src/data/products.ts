import type { Product } from "@/lib/types";

/**
 * Catalogo de la tienda.
 *
 * costMXN es el costo estimado de proveedor y se usa solo para calculo interno
 * de margen (ver src/lib/margin.ts). No se muestra al cliente.
 *
 * ANTES DE VENDER: confirmar el costo real en checkout, el plazo de envio real
 * y el tracking del proveedor. Los precios y costos de este archivo son
 * estimaciones de investigacion, no datos confirmados.
 */
export const products: Product[] = [
  {
    slug: "kit-soporte-celular-moto-antivibracion-360",
    name: "Kit Soporte Celular Moto Antivibracion 360 para Repartidor",
    shortName: "Kit soporte antivibracion 360",
    collection: "soportes-celular",
    role: "hero",
    price: 599,
    compareAt: 749,
    costMXN: 107,
    badge: "Mas vendido",
    summary:
      "Soporte antivibracion con rotacion 360 y montaje en manubrio o espejo, con sujetador de cable incluido. Hecho para quien vive sobre la moto.",
    description: [
      "La mayoria de los soportes baratos fallan en el mismo punto: la vibracion. El telefono se gira solo, la camara pierde enfoque y con el tiempo el soporte se afloja.",
      "Este kit usa amortiguacion en el punto de union y una base que abraza el telefono por cuatro esquinas, no solo por los lados. La rotacion 360 te deja el telefono vertical para navegar o acostado para grabar, sin desmontarlo.",
      "Incluye un sujetador de cable para que el cargador no se desconecte cuando pasas un tope o tomas una curva. Es el detalle que mas nos piden los repartidores.",
      "Se instala en manubrio de 22 a 32 mm o en la base del espejo, segun la variante que elijas. No requiere taladrar ni modificar la moto.",
    ],
    features: [
      "Amortiguacion antivibracion en el punto de union",
      "Rotacion 360 con traba en la posicion que elijas",
      "Sujecion por cuatro esquinas, no solo lateral",
      "Montaje en manubrio 22-32 mm o base de espejo",
      "Sujetador de cable incluido para el cargador",
      "Compatible con telefonos de 4 a 7 pulgadas",
    ],
    specs: [
      { label: "Compatibilidad", value: "Telefonos de 4 a 7 pulgadas" },
      { label: "Montaje", value: "Manubrio 22-32 mm o base de espejo" },
      { label: "Rotacion", value: "360 grados con traba" },
      { label: "Material", value: "Aluminio y ABS reforzado" },
      { label: "Incluye", value: "Soporte, base de montaje, sujetador de cable" },
      { label: "Instalacion", value: "Sin taladrar, con herramienta incluida" },
    ],
    faq: [
      {
        q: "¿De verdad no se mueve con la vibracion?",
        a: "Reduce la vibracion de forma notable frente a un soporte rigido sin amortiguacion, que es lo que hace que el telefono se gire. Ningun soporte elimina el 100% de la vibracion de una moto, pero este esta disenado especificamente para ese problema.",
      },
      {
        q: "¿Le queda a mi moto?",
        a: "Se monta en manubrios de 22 a 32 mm y en bases de espejo estandar. Practicamente cualquier moto de trabajo o scooter entra en ese rango. Si tu manubrio es de grosor distinto, escribenos antes de comprar.",
      },
      {
        q: "¿Aguanta la lluvia?",
        a: "El soporte es resistente al agua, pero el telefono queda expuesto. Si necesitas proteccion contra lluvia fuerte, revisa la variante impermeable dentro de la coleccion de soportes.",
      },
      {
        q: "¿Sirve para ponerlo en el espejo en lugar del manubrio?",
        a: "Si. La base de espejo viene incluida y es la opcion que mas recomendamos cuando el manubrio ya tiene otros accesorios montados.",
      },
      {
        q: "¿Cuanto tarda en llegar?",
        a: "Entre 7 y 15 dias habiles. Te enviamos el numero de guia en cuanto el proveedor despacha.",
      },
    ],
    keywords: [
      "soporte celular moto",
      "porta celular moto",
      "soporte celular moto antivibracion",
      "soporte celular para repartidor",
    ],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/kit-soporte-antivibracion-360.jpg",
    rating: 4.8,
    reviews: 60,
    available: true,
    featured: true,
  },
  {
    slug: "soporte-celular-moto-impermeable-espejo",
    name: "Soporte Celular Moto Impermeable con Base de Espejo",
    shortName: "Soporte impermeable con base espejo",
    collection: "soportes-celular",
    role: "hero",
    price: 469,
    compareAt: 599,
    costMXN: 145,
    summary:
      "Caja impermeable con cierre de seguridad y base para espejo. Tu telefono queda protegido de la lluvia y a la vista.",
    description: [
      "Cuando llueve, el problema no es solo mojar el telefono: es que la pantalla mojada deja de responder bien y ya no puedes ver la ruta.",
      "Este soporte encierra el telefono en una carcasa transparente con sello, montada sobre la base del espejo. La pantalla se sigue usando a traves de la membrana, sin sacar el telefono.",
      "El cierre es de liberacion rapida, asi que bajas el telefono en dos segundos cuando llegas a tu destino.",
    ],
    features: [
      "Carcasa impermeable con membrana sensible al tacto",
      "Cierre de liberacion rapida",
      "Base de montaje para espejo",
      "Rotacion ajustable",
      "Compatible con telefonos de 4 a 7 pulgadas",
    ],
    specs: [
      { label: "Compatibilidad", value: "Telefonos de 4 a 7 pulgadas" },
      { label: "Montaje", value: "Base de espejo" },
      { label: "Proteccion", value: "Impermeable con sello" },
      { label: "Material", value: "ABS y membrana de TPU" },
      { label: "Incluye", value: "Soporte con carcasa y base de espejo" },
    ],
    faq: [
      {
        q: "¿Se puede usar la pantalla dentro de la funda?",
        a: "Si, la membrana frontal es sensible al tacto. Con la pantalla seca responde bien. Con lluvia directa sobre la membrana el tacto pierde precision, como en cualquier funda impermeable.",
      },
      {
        q: "¿El telefono se calienta dentro?",
        a: "Puede subir de temperatura si lo dejas cargando y con pantalla encendida bajo el sol. Es normal en cualquier carcasa cerrada: recomendamos no cargar y navegar al mismo tiempo en trayectos largos.",
      },
      {
        q: "¿Cabe un telefono grande?",
        a: "Entra hasta 7 pulgadas. Mide tu telefono con funda incluida antes de comprar, porque una funda gruesa puede impedir que cierre bien.",
      },
      {
        q: "¿Cuanto tarda en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: [
      "soporte celular moto impermeable",
      "soporte celular moto lluvia",
      "porta celular moto espejo",
    ],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/soporte-impermeable-espejo.jpg",
    rating: 4.6,
    reviews: 38,
    available: true,
    featured: true,
  },
  {
    slug: "punos-moto-universales-22-25mm",
    name: "Punos Moto Universales 22/25 mm Antivibracion",
    shortName: "Punos universales 22/25 mm",
    collection: "punos-y-comodidad",
    role: "hero",
    price: 349,
    compareAt: 449,
    costMXN: 85,
    summary:
      "Par de punos de goma con patron antideslizante para manubrios de 22 y 25 mm. Menos vibracion, mejor agarre.",
    description: [
      "Los punos originales de frabrica se endurecen y se vuelven resbalosos con el tiempo. Es una de las mejoras mas baratas que puedes hacerle a la moto.",
      "Este par usa goma blanda con patron de canales que absorbe parte de la vibracion y mejora el agarre con o sin guantes. Se siente la diferencia en los primeros kilometros.",
      "Vienen en medidas de 22 y 25 mm para cubrir lado de clutch y lado de acelerador. Revisa la medida de tu manubrio antes de pedir.",
    ],
    features: [
      "Goma blanda que absorbe vibracion",
      "Patron antideslizante en toda la superficie",
      "Medidas 22 mm y 25 mm incluidas",
      "Instalacion con los punos originales como guia",
    ],
    specs: [
      { label: "Diametro", value: "22 mm y 25 mm" },
      { label: "Material", value: "Goma TPR" },
      { label: "Largo", value: "Aprox. 12 cm por puno" },
      { label: "Incluye", value: "Par de punos (2 piezas)" },
      { label: "Compatibilidad", value: "Manubrios estandar de moto y scooter" },
    ],
    faq: [
      {
        q: "¿Como se que medida necesita mi moto?",
        a: "La mayoria de las motos usa 22 mm del lado del clutch y 25 mm del lado del acelerador. Si puedes, mide el diametro exterior del puno original con un vernier o compara visualmente.",
      },
      {
        q: "¿Son dificiles de instalar?",
        a: "No requieren herramienta especial. Se retiran los originales y se colocan estos. Un poco de agua jabonosa en el interior facilita mucho el montaje.",
      },
      {
        q: "¿Reducen la vibracion de verdad?",
        a: "Reducen la vibracion que llega a las manos de forma perceptible en trayectos largos, porque la goma blanda absorbe parte de la energia. No eliminan la vibracion del motor.",
      },
      {
        q: "¿Cuanto tardan en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["punos moto", "punos moto universal", "punos moto 22mm", "grips moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/punos-universales.jpg",
    rating: 4.7,
    reviews: 44,
    available: true,
    featured: true,
  },
  {
    slug: "mochila-impermeable-moto-diaria",
    name: "Mochila Impermeable para Moto Uso Diario 25L",
    shortName: "Mochila impermeable 25L",
    collection: "alforjas-y-bolsas",
    role: "catalogo",
    price: 749,
    compareAt: 899,
    costMXN: 320,
    summary:
      "Mochila con cierre estanco y espalda acolchada. Lleva tu equipo sin que se moje y sin cargar todo el peso en los hombros.",
    description: [
      "Una mochila normal con funda de lluvia termina mojando lo de adentro: el agua entra por las costuras y por la espalda. Una mochila estanca resuelve el problema desde el diseno.",
      "El cierre se enrolla sobre si mismo y sella, sin cierres que se filtren. La espalda va acolchada y ventilada para trayectos largos.",
      "Con 25 litros entra una laptop de 15 pulgadas, cambio de ropa y algo de herramienta. Es el tamano que mas usamos para traslado diario.",
    ],
    features: [
      "Cierre estanco enrollable, sin cierres que se filtren",
      "Espalda y tirantes acolchados y ventilados",
      "Compartimento interno para laptop de hasta 15 pulgadas",
      "Correas de compresion laterales ajustables",
      "Material resistente a abrasion",
    ],
    specs: [
      { label: "Capacidad", value: "25 litros" },
      { label: "Material", value: "PVC reforzado / tela impermeable" },
      { label: "Cierre", value: "Estanco enrollable" },
      { label: "Laptop", value: "Hasta 15 pulgadas" },
      { label: "Medidas", value: "Aprox. 48 x 30 x 18 cm" },
      { label: "Incluye", value: "Mochila con correas ajustables" },
    ],
    faq: [
      {
        q: "¿Es 100% impermeable?",
        a: "El cuerpo y el cierre estanco si. La recomendacion honesta: si la sumerges no lo es, pero para lluvia fuerte en trayecto protege bien el contenido. Ninguna mochila de este rango es sumergible.",
      },
      {
        q: "¿Sirve como equipaje de cabina?",
        a: "A 25 litros suele entrar como articulo personal, pero eso depende de la aerolinea. Verifica sus medidas antes de viajar.",
      },
      {
        q: "¿Cabe una laptop de 15 pulgadas?",
        a: "Si, el compartimento interno esta pensado para hasta 15 pulgadas. Una de 17 no entra comoda.",
      },
      {
        q: "¿Cuanto tarda en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["mochila moto", "mochila impermeable moto", "mochila para moto", "maleta impermeable para moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/mochila-impermeable.jpg",
    rating: 4.5,
    reviews: 27,
    available: true,
    featured: false,
  },
  {
    slug: "alforjas-moto-impermeables-universales-36-58l",
    name: "Alforjas Moto Impermeables Universales 36L-58L",
    shortName: "Alforjas impermeables 36L-58L",
    collection: "alforjas-y-bolsas",
    role: "catalogo",
    price: 1099,
    compareAt: 1399,
    costMXN: 520,
    summary:
      "Par de alforjas laterales con cubierta impermeable y bandas elasticas. La forma mas estable de cargar en la moto.",
    description: [
      "Cargar peso en la espalda cansa y desestabiliza. Las alforjas laterales bajan el centro de gravedad y liberan los hombros, que es exactamente lo que necesitas en trayectos largos o de trabajo.",
      "El paquete incluye el par de alforjas, cubiertas impermeables y bandas elasticas de sujecion. El montaje es universal, sobre asiento o sobre defensas segun tu moto.",
      "Con 36 a 58 litros de capacidad total cubres desde la compra del dia hasta herramienta y equipo de trabajo.",
    ],
    features: [
      "Par de alforjas laterales universales",
      "Cubiertas impermeables incluidas",
      "Bandas elasticas de sujecion incluidas",
      "Refuerzo en costuras y puntos de anclaje",
      "Compartimentos multiples con cierres",
    ],
    specs: [
      { label: "Capacidad", value: "36 a 58 litros (segun configuracion)" },
      { label: "Material", value: "Poliéster reforzado con cubierta impermeable" },
      { label: "Montaje", value: "Universal, sobre asiento o defensas" },
      { label: "Incluye", value: "Par de alforjas, 2 cubiertas, bandas elasticas" },
      { label: "Reflectivos", value: "Si, en laterales" },
    ],
    faq: [
      {
        q: "¿Le quedan a mi moto?",
        a: "Son universales y se sujetan con bandas, asi que entran en la mayoria de motos y scooters. En motos con escape alto puede requerir acomodo adicional del lado derecho.",
      },
      {
        q: "¿Se moja lo de adentro?",
        a: "Con las cubiertas impermeables puestas, el contenido queda protegido en lluvia normal. Para lluvia muy fuerte y prolongada recomendamos tambien bolsas internas.",
      },
      {
        q: "¿Estorban para llevar pasajero?",
        a: "Depende del ancho de tu asiento. En la mayoria de motos el pasajero sigue comodo porque las alforjas quedan por debajo del nivel del asiento.",
      },
      {
        q: "¿Puedo llevarlas de un lado solo?",
        a: "Si, aunque no lo recomendamos: el peso desbalanceado afecta la estabilidad. Mejor usar el par.",
      },
      {
        q: "¿Cuanto tardan en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["alforjas moto", "alforjas moto impermeables", "alforjas moto universal", "bolsa para moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/alforjas-universales.jpg",
    rating: 4.5,
    reviews: 22,
    available: true,
    featured: false,
  },
  {
    slug: "bolsa-pierna-impermeable-motociclista",
    name: "Bolsa de Pierna Impermeable para Motociclista",
    shortName: "Bolsa de pierna impermeable",
    collection: "alforjas-y-bolsas",
    role: "upsell",
    price: 399,
    compareAt: 499,
    costMXN: 120,
    summary:
      "Bolsa compacta que se ajusta al muslo con correas. Documentos, telefono y cartera siempre a la mano y secos.",
    description: [
      "Es la bolsa que resuelve el problema diario: donde dejas la cartera, el telefono y los documentos sin que se mojen y sin bajar de la moto a cada rato.",
      "Se ajusta al muslo con correas regulables y se queda fija durante el trayecto. Al bajarte la llevas contigo, sin dejar nada en la moto.",
      "Cierre impermeable y compartimentos separados para que los documentos no se maltraten.",
    ],
    features: [
      "Correas regulables que se ajustan al muslo",
      "Cierre impermeable",
      "Compartimentos separados para documentos y telefono",
      "Se convierte en bolsa de mano al bajarte",
      "Reflectivos para visibilidad nocturna",
    ],
    specs: [
      { label: "Material", value: "Poliéster impermeable" },
      { label: "Ajuste", value: "Correas regulables universales" },
      { label: "Compartimentos", value: "3 (principal, documentos, telefono)" },
      { label: "Medidas", value: "Aprox. 22 x 15 x 8 cm" },
      { label: "Incluye", value: "Bolsa con correa de pierna" },
    ],
    faq: [
      {
        q: "¿Se mueve mientras manejo?",
        a: "Con las correas bien ajustadas se queda fija. Ajustala antes de arrancar y no necesitas tocarla en el trayecto.",
      },
      {
        q: "¿Cabe un telefono grande?",
        a: "El compartimento de telefono entra hasta 6.7 pulgadas. Un telefono mas grande tendria que ir en el compartimento principal.",
      },
      {
        q: "¿Es transpirable?",
        a: "No del todo, porque es impermeable. En climas muy calurosos se siente el contacto. Es el sacrificio normal de una bolsa impermeable.",
      },
      {
        q: "¿Cuanto tarda en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["bolsa pierna moto", "bolsa pierna motociclista", "bolsa impermeable moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/bolsa-pierna.jpg",
    rating: 4.6,
    reviews: 31,
    available: true,
    featured: false,
  },
  {
    slug: "bolsa-herramientas-moto-compacta",
    name: "Bolsa Compacta de Herramientas para Moto",
    shortName: "Bolsa de herramientas",
    collection: "alforjas-y-bolsas",
    role: "upsell",
    price: 329,
    compareAt: 399,
    costMXN: 110,
    summary:
      "Rollo compacto para llevar herramienta basica sujeta a la moto, sin que suene ni se moje.",
    description: [
      "Herramienta suelta en la moto termina sonando, oxidada o perdida. Este rollo la mantiene organizada y sujeta.",
      "Se enrolla y se ajusta con correas a la moto. El interior tiene separaciones elasticas para llaves, desarmadores y puntas.",
      "Tamano compacto: cabe en el hueco bajo el asiento de muchas motos o se cuelga de las defensas.",
    ],
    features: [
      "Rollo con separaciones elasticas",
      "Correas de sujecion a la moto",
      "Material resistente a aceite y agua",
      "Tamano compacto, entra bajo el asiento",
    ],
    specs: [
      { label: "Material", value: "Lona resistente a aceite" },
      { label: "Compartimentos", value: "Separaciones elasticas multiples" },
      { label: "Medidas abierta", value: "Aprox. 40 x 25 cm" },
      { label: "Medidas enrollada", value: "Aprox. 15 x 10 cm" },
      { label: "Incluye", value: "Rollo organizador (herramienta no incluida)" },
    ],
    faq: [
      {
        q: "¿Incluye herramienta?",
        a: "No. Es el organizador para que guardes la tuya. Lo aclaramos porque la foto puede confundir.",
      },
      {
        q: "¿Cabe bajo el asiento?",
        a: "Enrollada mide aproximadamente 15 x 10 cm, asi que entra en el hueco de muchas motos. Depende del espacio de cada modelo.",
      },
      {
        q: "¿Se moja la herramienta?",
        a: "Resiste salpicaduras, pero no es sumergible. Si la dejas expuesta a lluvia constante, guarda la herramienta en una bolsa aparte.",
      },
      {
        q: "¿Cuanto tarda en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["bolsa herramientas moto", "organizador herramientas moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/bolsa-herramientas.jpg",
    rating: 4.4,
    reviews: 18,
    available: true,
    featured: false,
  },
  {
    slug: "cubre-moto-impermeable-antiviento",
    name: "Cubre Moto Impermeable con Hebilla Antiviento",
    shortName: "Cubre moto impermeable",
    collection: "cubre-moto-e-impermeables",
    role: "hero",
    price: 599,
    compareAt: 749,
    costMXN: 210,
    badge: "Estacional",
    summary:
      "Funda impermeable con hebilla inferior antiviento. Protege de lluvia, sol y polvo a las motos que duermen afuera.",
    description: [
      "Si tu moto duerme en la calle, la lluvia es solo una parte del problema. El sol degrada el asiento y los plasticos, y el polvo se mete en todo.",
      "Esta funda cubre la moto completa con costuras selladas y una hebilla que pasa por debajo para que el viento no se la lleve. Ese detalle es lo que separa una funda que dura de una que amanece en el suelo.",
      "Incluye bolsa de transporte para guardarla cuando no la usas.",
    ],
    features: [
      "Costuras selladas, impermeable",
      "Hebilla inferior antiviento con correa",
      "Forro interior suave que no raya la pintura",
      "Costuras reflectivas para visibilidad",
      "Bolsa de transporte incluida",
    ],
    specs: [
      { label: "Material", value: "Poliéster 210D con recubrimiento PU" },
      { label: "Tallas", value: "M, L, XL, XXL (ver guia de medidas)" },
      { label: "Fijacion", value: "Hebilla y correa inferior antiviento" },
      { label: "Incluye", value: "Funda y bolsa de transporte" },
      { label: "Uso", value: "Exterior, moto estacionada" },
    ],
    faq: [
      {
        q: "¿Como elijo la talla?",
        a: "Mide el largo total de tu moto de punta a punta y sumale el alto del manubrio. Compara con la tabla de medidas de la ficha. Si estas entre dos tallas, sube a la mayor: una funda grande sobra, una chica no cubre.",
      },
      {
        q: "¿El viento no se la lleva?",
        a: "La hebilla pasa por debajo de la moto y sujeta la funda. Con eso aguanta viento fuerte. Es justamente la funcion que no tienen las fundas baratas que solo se amarran con cordon.",
      },
      {
        q: "¿Se puede poner con la moto caliente?",
        a: "Espera a que enfrie el escape y el motor. El calor directo puede danar el recubrimiento con el tiempo.",
      },
      {
        q: "¿Cabe con alforjas puestas?",
        a: "Con alforjas grandes puede quedar ajustada. Si las dejas puestas, considera subir una talla.",
      },
      {
        q: "¿Cuanto tarda en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["cubre moto", "cubre moto impermeable", "funda para moto", "impermeable para moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/cubre-moto.jpg",
    rating: 4.6,
    reviews: 52,
    available: true,
    featured: true,
  },
  {
    slug: "cubre-punos-handguards-universales",
    name: "Cubre Punos Handguards Universales para Moto",
    shortName: "Cubre punos universales",
    collection: "punos-y-comodidad",
    role: "catalogo",
    price: 499,
    compareAt: 649,
    costMXN: 210,
    summary:
      "Protectores de manos que cortan el viento y la lluvia directa sobre dedos y punos. Se montan en el manubrio.",
    description: [
      "El frio en las manos no viene solo de la temperatura: viene del viento que golpea directo. Un cubre punos corta ese flujo y la diferencia se siente de inmediato.",
      "Se montan en el manubrio con abrazadera y no requieren modificar la moto. Compatibles con la mayoria de manubrios estandar.",
      "Ademas de la temperatura, protegen las manos de piedras y bichos en carretera.",
    ],
    features: [
      "Corta viento y lluvia directa sobre las manos",
      "Montaje universal con abrazadera al manubrio",
      "Material rigido resistente a impactos",
      "No interfiere con los controles",
    ],
    specs: [
      { label: "Material", value: "ABS rigido" },
      { label: "Montaje", value: "Abrazadera universal al manubrio" },
      { label: "Compatibilidad", value: "Manubrios estandar, verificar espacio de controles" },
      { label: "Incluye", value: "Par de protectores y herrajes" },
    ],
    faq: [
      {
        q: "¿Estorban para frenar o acelerar?",
        a: "Bien montados no interfieren con los controles. Hay que ajustar la posicion para que la mano entre y salga con libertad, y probarlo antes de salir a carretera.",
      },
      {
        q: "¿Le quedan a mi moto?",
        a: "Son universales para manubrios estandar. En motos con espejos o mandos muy juntos puede requerir ajuste. Si tienes dudas, mandanos foto de tu manubrio.",
      },
      {
        q: "¿Sirven para lluvia fuerte?",
        a: "Reducen mucho el agua directa, pero no son impermeables totales. Combinados con guantes impermeables dan mejor resultado.",
      },
      {
        q: "¿Cuanto tardan en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["cubre punos moto", "handguards moto", "protector manos moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/cubre-punos.jpg",
    rating: 4.5,
    reviews: 24,
    available: true,
    featured: false,
  },
  {
    slug: "candado-disco-moto-cable-recordatorio",
    name: "Candado de Disco Moto con Cable Recordatorio",
    shortName: "Candado de disco + cable",
    collection: "seguridad-y-candados",
    role: "hero",
    price: 449,
    compareAt: 549,
    costMXN: 165,
    summary:
      "Candado de disco con llave y cable recordatorio naranja. Bloquea la rueda y te recuerda quitarlo antes de arrancar.",
    description: [
      "El candado de disco es la forma mas rapida de inmovilizar la moto: se pone en segundos y cabe en cualquier bolsillo.",
      "El cable recordatorio es la parte que la gente agradece despues. Va del candado al manubrio, y si intentas arrancar lo ves antes de romper la horquilla o caerte.",
      "Cuerpo en aleacion con barril de llave, y viene con dos llaves para que dejes una de respaldo.",
    ],
    features: [
      "Cuerpo en aleacion resistente a corte",
      "Barril de llave con dos llaves incluidas",
      "Cable recordatorio naranja de alta visibilidad",
      "Bolsa de transporte incluida",
      "Boton de bloqueo sin llave para cerrar rapido",
    ],
    specs: [
      { label: "Material", value: "Aleacion de zinc y acero" },
      { label: "Perno", value: "Aprox. 6 mm" },
      { label: "Incluye", value: "Candado, 2 llaves, cable recordatorio, bolsa" },
      { label: "Uso", value: "Disco de freno, cualquier moto" },
    ],
    faq: [
      {
        q: "¿Hace la moto imposible de robar?",
        a: "No, y desconfia de quien lo afirme. Ningun candado de este rango es inviolable. Lo que hace es subir el esfuerzo y quitar oportunidad. Combinarlo con cadena o anclaje fijo es mucho mejor que usar solo uno.",
      },
      {
        q: "¿Que pasa si arranco con el candado puesto?",
        a: "Para eso sirve el cable recordatorio: lo conectas al manubrio y lo ves antes de arrancar. Aun asi, si arrancas con fuerza puedes danar el disco o la horquilla.",
      },
      {
        q: "¿Le queda a mi moto?",
        a: "Entra en discos de freno con perforaciones de 6 mm o mas, que es el estandar de la mayoria de motos y scooters.",
      },
      {
        q: "¿Cuanto tarda en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["candado disco moto", "candado moto", "cable recordatorio candado", "seguridad moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/candado-disco.jpg",
    rating: 4.7,
    reviews: 41,
    available: true,
    featured: true,
  },
  {
    slug: "red-elastica-porta-carga-moto",
    name: "Red Elastica Porta Carga para Moto",
    shortName: "Red elastica porta carga",
    collection: "alforjas-y-bolsas",
    role: "upsell",
    price: 199,
    compareAt: 249,
    costMXN: 55,
    summary:
      "Red con ganchos que sujeta casco, mochila o bolsa a la parrilla o al asiento. El accesorio mas util por lo que cuesta.",
    description: [
      "Es el accesorio mas barato y el que mas se usa. Sujeta el casco cuando te bajas, la compra del dia o la mochila cuando no quieres cargarla.",
      "Los ganchos son de metal recubierto para no rayar la pintura, y el elastico mantiene tension constante sin aflojarse.",
      "Se enrolla y se guarda en cualquier hueco de la moto.",
    ],
    features: [
      "Elastico de alta tension que no se afloja",
      "6 ganchos de metal recubierto",
      "No raya pintura ni plasticos",
      "Se enrolla para guardar",
    ],
    specs: [
      { label: "Medidas", value: "Aprox. 40 x 40 cm estirada" },
      { label: "Ganchos", value: "6, metal recubierto" },
      { label: "Material", value: "Elastico de caucho con cuerda" },
      { label: "Incluye", value: "1 red porta carga" },
    ],
    faq: [
      {
        q: "¿Aguanta un casco?",
        a: "Si, un casco es de las cargas mas comunes. Sujeta bien y queda firme en trayecto urbano.",
      },
      {
        q: "¿Donde la engancho?",
        a: "En la parrilla trasera, en el asiento o en cualquier punto fijo de la moto. Los 6 ganchos te dan libertad para acomodarla.",
      },
      {
        q: "¿Se estira con el tiempo?",
        a: "Como todo elastico pierde tension con los anos. Con uso normal se mantiene bien; evita dejarla estirada al maximo cuando no la usas.",
      },
      {
        q: "¿Cuanto tarda en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["red elastica moto", "cargo net moto", "red porta carga moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/red-porta-carga.jpg",
    rating: 4.5,
    reviews: 33,
    available: true,
    featured: false,
  },
  {
    slug: "cepillo-limpiador-cadena-moto-3d",
    name: "Cepillo Limpiador de Cadena Moto 3 Caras",
    shortName: "Cepillo limpiador de cadena",
    collection: "mantenimiento",
    role: "upsell",
    price: 179,
    compareAt: 229,
    costMXN: 45,
    summary:
      "Cepillo de tres caras que abraza la cadena y limpia los tres lados al mismo tiempo. Mantenimiento en minutos.",
    description: [
      "Limpiar la cadena con trapo es lento y deja los eslabones internos sucios, que es donde importa. Este cepillo tiene cerdas en tres caras y abraza la cadena completa.",
      "Le das vueltas a la rueda y el cepillo hace el trabajo en los tres lados a la vez. En pocos minutos la cadena queda limpia para aplicar lubricante.",
      "Los cerdos son de nailon duro, no de alambre, asi que no danan los o-rings.",
    ],
    features: [
      "Cerdas en tres caras, abraza la cadena completa",
      "Nailon duro que no danan los o-rings",
      "Mango comodo para girar la rueda",
      "Se lava y se reutiliza",
    ],
    specs: [
      { label: "Material", value: "Nailon y plastico ABS" },
      { label: "Caras", value: "3 (superior, inferior y lateral)" },
      { label: "Uso", value: "Cadenas de moto estandar" },
      { label: "Incluye", value: "1 cepillo limpiador" },
    ],
    faq: [
      {
        q: "¿Danan los o-rings?",
        a: "No. Las cerdas son de nailon, no de alambre. Los cepillos de alambre si pueden danar los sellos, este no.",
      },
      {
        q: "¿Sirve con cualquier cadena?",
        a: "Si, se adapta a cadenas de moto estandar. En cadenas muy anchas puede requerir mas pasadas.",
      },
      {
        q: "¿Necesito desmontar la cadena?",
        a: "No. Se coloca sobre la cadena puesta, giras la rueda y trabaja ahi mismo.",
      },
      {
        q: "¿Cuanto tarda en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["cepillo cadena moto", "limpiador cadena moto", "mantenimiento cadena moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/cepillo-cadena.jpg",
    rating: 4.6,
    reviews: 29,
    available: true,
    featured: false,
  },
  {
    slug: "stickers-moto-genericos",
    name: "Pack de Stickers Genericos para Moto y Casco",
    shortName: "Pack stickers genericos",
    collection: "stickers-y-personalizacion",
    role: "upsell",
    price: 149,
    compareAt: 189,
    costMXN: 40,
    summary:
      "Calcomanias resistentes al agua y al sol para personalizar carenado, tanque o casco. Disenos genericos, sin marcas.",
    description: [
      "Personalizar la moto no tiene que costar. Un pack de stickers cambia la cara del carenado o el casco en una tarde.",
      "Son vinil resistente a agua y UV, pensados para exterior. No se despegan con la lluvia ni se decoloran rapido.",
      "Todos los disenos son genericos. No vendemos logos de marcas registradas como Honda, Yamaha, Italika o Bajaj.",
    ],
    features: [
      "Vinil resistente a agua y rayos UV",
      "Adhesivo fuerte para superficies lisas",
      "Variedad de tamanos y disenos",
      "Disenos 100% genericos, sin marcas registradas",
    ],
    specs: [
      { label: "Material", value: "Vinil adhesivo resistente a UV" },
      { label: "Cantidad", value: "Pack surtido de disenos variados" },
      { label: "Aplicacion", value: "Superficies lisas y limpias" },
      { label: "Uso", value: "Interior y exterior" },
    ],
    faq: [
      {
        q: "¿Son de alguna marca?",
        a: "No. Todos los disenos son genericos y originales. Evitamos cualquier logo de marca registrada por respeto a la propiedad intelectual.",
      },
      {
        q: "¿Aguantan la lluvia?",
        a: "Si, son vinil para exterior con proteccion UV. Con la superficie bien limpia y seca al aplicar, duran bastante.",
      },
      {
        q: "¿Se despegan al lavar la moto?",
        a: "Con agua a presion directa sobre el borde pueden levantarse. Evita apuntar la hidrolavadora de cerca en las orillas.",
      },
      {
        q: "¿Cuanto tardan en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["stickers moto", "calcomanias moto", "stickers para casco"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/stickers-genericos.jpg",
    rating: 4.4,
    reviews: 19,
    available: true,
    featured: false,
  },
  {
    slug: "stickers-reflectivos-moto-casco",
    name: "Stickers Reflectivos para Moto y Casco",
    shortName: "Stickers reflectivos",
    collection: "stickers-y-personalizacion",
    role: "upsell",
    price: 149,
    compareAt: 189,
    costMXN: 42,
    summary:
      "Calcomanias reflectivas que aumentan tu visibilidad de noche. Seguridad visible por muy poco dinero.",
    description: [
      "De noche, la mayoria de los accidentes con moto pasan porque el otro conductor simplemente no te vio. El reflectivo resuelve eso con luz de faros ajenos.",
      "Se aplican en casco, horquilla, guardabarros o laterales de la moto. No necesitan bateria ni instalacion electrica: reflejan la luz que reciben.",
      "Son el complemento mas barato de seguridad que puedes agregar a tu moto.",
    ],
    features: [
      "Reflectivo de alta visibilidad nocturna",
      "No requiere bateria ni instalacion electrica",
      "Adhesivo resistente a agua",
      "Aplicable en casco, carenado y horquilla",
    ],
    specs: [
      { label: "Material", value: "Vinil reflectivo" },
      { label: "Visibilidad", value: "Refleja luz de faros a distancia" },
      { label: "Aplicacion", value: "Superficies lisas y limpias" },
      { label: "Uso", value: "Exterior, uso nocturno" },
    ],
    faq: [
      {
        q: "¿De verdad se ven de noche?",
        a: "Si, pero con una condicion: reflejan la luz de un faro que les apunta. No brillan solos. Es exactamente lo que necesitas para que te vean desde otro auto.",
      },
      {
        q: "¿Se pueden poner en el casco?",
        a: "Si, sobre superficies lisas y limpias. Evita ponerlos sobre la visera o sobre cualquier zona que deba mantenerse transparente.",
      },
      {
        q: "¿Cuanto duran?",
        a: "El reflectivo de calidad dura anos en exterior. Con el tiempo pierde algo de intensidad, pero sigue cumpliendo.",
      },
      {
        q: "¿Cuanto tardan en llegar?",
        a: "Entre 7 y 15 dias habiles, con guia rastreable.",
      },
    ],
    keywords: ["stickers reflectivos moto", "reflejantes moto", "reflectivos casco", "seguridad visible moto"],
    shippingNote: "Envio internacional con guia rastreable. 7 a 15 dias habiles.",
    image: "/productos/stickers-reflectivos.jpg",
    rating: 4.5,
    reviews: 21,
    available: true,
    featured: false,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((product) => product.collection === collectionSlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = getProduct(slug);
  if (!current) return [];

  const sameCollection = products.filter(
    (product) => product.slug !== slug && product.collection === current.collection,
  );
  const others = products.filter(
    (product) => product.slug !== slug && product.collection !== current.collection,
  );

  return [...sameCollection, ...others].slice(0, limit);
}

export function getProductSlugs(): string[] {
  return products.map((product) => product.slug);
}
