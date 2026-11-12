export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  /** Meta title para el <title> de la pagina (max 60 caracteres) */
  metaTitle: string;
  /** Meta description para el <meta name="description"> (max 160 caracteres) */
  metaDescription: string;
  /** Mismo texto que metaDescription, se conserva para el render actual */
  description: string;
  /** Resumen que se muestra en el listado */
  excerpt: string;
  /** Keyword principal de la guia */
  keyword: string;
  /** Keywords secundarias que la gente realmente busca */
  keywords: string[];
  readingMinutes: number;
  updated: string;
  sections: GuideSection[];
  /** Slugs de productos relacionados */
  relatedProducts: string[];
};

export const guides: Guide[] = [
  {
    slug: "elegir-soporte-celular-moto-sin-vibracion",
    title: "Como elegir un soporte de celular para moto sin que vibre",
    metaTitle: "Soporte celular moto antivibracion: como elegirlo",
    metaDescription:
      "Guia para elegir soporte celular moto antivibracion que no vibre ni se gire: amortiguacion, sujecion por esquinas, montaje en manubrio o espejo y precio.",
    description:
      "Guia para elegir soporte celular moto antivibracion que no vibre ni se gire: amortiguacion, sujecion por esquinas, montaje en manubrio o espejo y precio.",
    excerpt:
      "La vibracion es lo que arruina la mayoria de los soportes baratos. Aqui te explicamos que revisar antes de comprar.",
    keyword: "soporte celular moto",
    keywords: [
      "soporte celular moto",
      "porta celular moto",
      "soporte celular para moto",
      "soporte celular moto antivibracion",
      "soporte celular moto impermeable",
    ],
    readingMinutes: 11,
    updated: "2026-11-09",
    sections: [
      {
        heading: "Por que vibra un soporte de celular",
        paragraphs: [
          "La vibracion no viene del soporte, viene de la moto: del motor a bajas revoluciones, de los rieles del ferro y de cada bache. Lo que hace el soporte es absorberla o amplificarla. Un soporte rigido, atornillado directo al manubrio sin ninguna pieza flexible, transmite la vibracion completa hasta el telefono.",
          "El resultado lo conoces: la pantalla se ve borrosa mientras manejas, el telefono se va girando poco a poco hasta quedar de lado y, en trayectos largos, la camara pierde el enfoque por el movimiento constante del lente. Todo eso pasa antes de que el soporte se rompa.",
          "Por eso el precio del soporte no es lo importante. Lo importante es si tiene o no amortiguacion en el punto de union y si la base aprieta el telefono por las cuatro esquinas. De eso se trata el resto de la guia.",
        ],
      },
      {
        heading: "Que revisar antes de comprar",
        paragraphs: [
          "Estos son los puntos que definen si un soporte sirve o no para uso diario, ordenados de mas a menos importante:",
        ],
        bullets: [
          "Amortiguacion real: debe haber una pieza de goma o silicona entre la base y el brazo. Si todo es plastico rigido, la vibracion llega completa al telefono.",
          "Sujecion por cuatro esquinas: los que solo aprietan los lados permiten que el telefono se deslice hacia arriba con los baches. Con funda gruesa el ajuste importa todavia mas.",
          "Traba de rotacion: la rotacion 360 solo sirve si tiene traba. Sin traba el telefono se gira solo y a mitad de un pendiente lo terminas agarrando con una mano.",
          "Tipo de montaje: manubrio o base de espejo. La base de espejo suele quedar mas alta, mas estable y libera espacio en el manubrio para otros accesorios.",
          "Rango de tamano: verifica que tu telefono, con funda puesta, entre en el rango declarado. La mayoria de los soportes universales cubren de 4 a 7 pulgadas.",
          "Material del brazo: el aluminio reparte mejor la vibracion que un plastico grueso con uniones abiertas. No lo cambia todo, pero ayuda.",
          "Que venir incluido: un buen kit trae base de espejo y sujetador de cable. Comprar el kit completo sale menos que comprar las piezas por separado.",
          "Liberacion rapida: bajar el telefono en dos segundos importa cuando estas haciendo entregas y no quieres buscar la llave.",
        ],
      },
      {
        heading: "Manubrio o base de espejo: cual te conviene",
        paragraphs: [
          "Los dos montajes funcionan y resuelven problemas distintos. El montaje en manubrio deja el telefono a la altura natural de la mirada, que es comodo para consultar la ruta de un vistazo. La base de espejo lo sube un poco mas y lo aleja del centro de la moto, asi que la vibracion del manubrio le llega menos.",
          "En la practica, la base de espejo conviene mas cuando el manubrio ya esta ocupado con cables, controles y cuando quieres que el telefono no quede tapado por el deposito de combustible. El montaje en manubrio conviene cuando prefieres sentir el telefono cerca y no te importa el espacio.",
        ],
        bullets: [
          "Base de espejo: mas estable, mas alto y no compite por el espacio del manubrio.",
          "Montaje en manubrio de 22 a 32 mm: queda a la altura de la mirada y se siente mas natural.",
          "Si tu manubrio esta fuera del rango de medidas, la base de espejo es la salida: no se fuerza un tubo que no entra.",
        ],
      },
      {
        heading: "El error mas comun: comprar solo por precio",
        paragraphs: [
          "En el marketplace mexicano hay soportes desde 98 pesos. Muchos funcionan para un trayecto ocasional y para una moto que no se usa todos los dias.",
          "El calculo es simple: si un soporte de 98 pesos dura dos meses y uno de 599 dura mas de un ano, el barato te costo mas. Y el costo invisible es el telefono que se cae en una avenida a las diez de la noche, con la pantalla estrellada y el turno perdido.",
          "A esos precios el plastico suele venir con marcas de molde y uniones que se abren al primer torsion, y no hay pieza de amortiguacion que amortigue nada. Se nota en la primera semana.",
          "No te decimos que lo mas caro siempre sea mejor. Te decimos que, para uso diario, la diferencia entre un soporte sin amortiguacion y uno con amortiguacion se paga sola en pocos meses.",
        ],
      },
      {
        heading: "Como saber si tu telefono entra de verdad",
        paragraphs: [
          "El dato que mas confunde es la medida en pulgadas. Las pulgadas describen la diagonal de la pantalla, no el ancho, asi que un telefono puede medir 6.7 pulgadas y ser mas ancho que otro de 6.4 con marco mas delgado.",
          "Lo que tienes que comparar es el ancho del telefono, con funda puesta, contra el ancho interior del soporte. Si el ancho del telefono es igual o menor que el del soporte, entra sin forzar.",
        ],
        bullets: [
          "Mide el ancho del telefono con funda: ese es el numero que importa.",
          "Los soportes universales suelen aceptar de 4 a 7 pulgadas de diagonal, con telefonos de hasta 9 cm de ancho.",
          "Con funda grueso o con funda con wallet, el ancho crece: mide con la funda puesta, no con el telefono desnudo.",
          "Si el soporte se ajusta justo y el telefono entra a la fuerza, mejor cambiar de modelo. Un tope forzado es un soporte que va a salir disparado en el primer tope.",
        ],
      },
      {
        heading: "Si usas la moto para trabajar",
        paragraphs: [
          "Para repartidores hay un detalle que casi nadie considera hasta que le pasa: el cable de carga se desconecta con los baches. Si el telefono se queda sin bateria a medio turno, el problema no es el soporte, es que nadie penso en el cable.",
          "Un sujetador de cable resuelve eso por completo. Es una pieza de bajo costo que va de la base del soporte al conector y mantiene la carga en su lugar mientras la moto trabaja.",
          "La segunda cosa que se necesita trabajando es bajar el telefono rapido. Un cierre de liberacion rapida te ahorra medio minuto en cada entrega, y en un turno de diez entregas son casi cinco minutos recuperados.",
        ],
        bullets: [
          "Sujetador de cable, para que el cargador no se desconecte en cada bache.",
          "Cierre de liberacion rapida, para bajar el telefono en segundos sin buscar la llave.",
          "Montaje en base de espejo si el manubrio ya esta lleno de cables y controles.",
          "Carcasa impermeable si llueve en tu ruta y no quieres arruinar el telefono con la pantalla mojada.",
        ],
      },
      {
        heading: "Lluvia: cuando si conviene una carcasa cerrada",
        paragraphs: [
          "Si manejas con lluvia regular, una carcasa impermeable evita que la pantalla mojada deje de responder bien. La contra honesta: dentro de una carcasa cerrada el telefono se calienta mas, sobre todo si lo dejas cargando.",
          "Nuestra recomendacion: si llueve poco en tu zona, soporte abierto con amortiguacion. Si llueve seguido, carcasa impermeable y evita cargar y navegar al mismo tiempo en trayectos largos.",
          "El detalle que casi nadie revisa: la carcasa no debe tapar el sensor de huellas ni la zona de la camara frontal si usas desbloqueo facial. Si el telefono no se desbloquea en el trayecto, la carcasa es un problema y no una solucion.",
          "Y un recordatorio de uso: ningun soporte mantiene el telefono seco si te paras bajo un arbol en plena lluvia. El soporte resuelve el trayecto, no la parada.",
        ],
      },
      {
        heading: "Como se monta en diez minutos",
        paragraphs: [
          "El montaje no requiere taladrar ni herramientas especiales. Es cuestion de orden:",
        ],
        bullets: [
          "Revisa el kit antes de abrir la caja: base de manubrio, base de espejo, abrazadera, llave allen y sujetador de cable.",
          "Apaga la moto y espera a que el motor y el escape enfrien antes de apretar la abrazadera en el manubrio.",
          "Monta primero la base. Si usas espejo, aprieta la abrazadera del tallo, no la del cristal.",
          "Coloca el brazo y orienta el soporte hacia ti, con la pantalla un poco inclinada hacia arriba para que el sol no la apague.",
          "Ajusta la traba de rotacion y prueba el bloqueo antes de guardar el telefono.",
          "Pasa el cable por el sujetador y deja holgura suficiente para que el giro del manubrio no lo tense.",
          "Prueba en parado: toma el manubrio, mueve la moto con la fuerza de una curva y verifica que el telefono no se mueva y que el cable no jale.",
        ],
      },
      {
        heading: "Errores de instalacion que dejan el soporte flojo",
        paragraphs: [
          "La mayoria de los soportes que se aflojan despues de un mes fallaron en la instalacion, no en el producto:",
        ],
        bullets: [
          "Apretar la abrazadera de mas: deforma el tubo del manubrio y el soporte termina girando alrededor del tubo.",
          "Montar el soporte pegado al acelerador: estorba al girar y se golpea con la mano en cada maniobra.",
          "No poner la traba de rotacion: la rotacion 360 sin bloqueo se convierte en el problema del telefono que se gira solo.",
          "Dejar el cable tensado: en los baches jala el puerto del telefono y lo dana por dentro.",
          "Cargar con el telefono dentro de la carcasa cerrada y la pantalla encendida al sol: se calienta y se apaga.",
          "No volver a revisar el apriete despues del primer mes: los tornillos de las bases de espejo pierden con la vibracion.",
        ],
      },
      {
        heading: "El siguiente paso",
        paragraphs: [
          "Si ya decidiste, estas son las dos opciones que tenemos disponibles: el Kit Soporte Celular Moto Antivibracion 360 para Repartidor esta en /producto/kit-soporte-celular-moto-antivibracion-360, con amortiguacion en el punto de union, rotacion 360 con traba, sujecion por cuatro esquinas, montaje en manubrio de 22 a 32 mm o base de espejo, y el sujetador de cable incluido.",
          "Si tu ruta es de lluvia frecuente, el soporte con carcasa impermeable y base de espejo esta en /producto/soporte-celular-moto-impermeable-espejo, con cierre de liberacion rapida y pantalla sensible al tacto a traves de la membrana.",
          "Para ver precios, medidas y las dos variantes lado a lado, la coleccion esta en /coleccion/soportes-celular. Y si lo que buscas es el kit completo para trabajar, la guia de accesorios para repartidor en moto te dice en que orden conviene comprarlo todo.",
        ],
      },
    ],
    relatedProducts: [
      "kit-soporte-celular-moto-antivibracion-360",
      "soporte-celular-moto-impermeable-espejo",
    ],
  },
  {
    slug: "accesorios-para-repartidor-en-moto",
    title: "Kit basico de accesorios para repartidor en moto",
    metaTitle: "Accesorios para repartidor en moto: kit recomendado",
    metaDescription:
      "Que necesita un repartidor en moto en Mexico: soporte antivibracion, sujetador de cable, red elastica, candado de disco y proteccion contra lluvia.",
    description:
      "Que necesita un repartidor en moto en Mexico: soporte antivibracion, sujetador de cable, red elastica, candado de disco y proteccion contra lluvia.",
    excerpt:
      "Si trabajas repartiendo en moto, estos son los accesorios que si cambian tu dia y en que orden conviene comprarlos.",
    keyword: "accesorios para repartidor en moto",
    keywords: [
      "accesorios para repartidor en moto",
      "repartidor moto",
      "moto delivery",
      "soporte celular para repartidor",
      "kit repartidor moto",
    ],
    readingMinutes: 11,
    updated: "2026-11-09",
    sections: [
      {
        heading: "El criterio correcto: resolver fricciones, no acumular accesorios",
        paragraphs: [
          "El patron entre quienes reparten en moto es claro: los accesorios que valen la pena son los que eliminan un problema repetido todos los dias. Todo lo demas es peso muerto colgado de la moto.",
          "La pregunta para evaluar cualquier compra es: que cosa se rompe hoy o esta semana si no tengo esto? Si la respuesta es concreta, vale la pena. Si la respuesta es por si acaso, espera.",
          "Ordenados por impacto real en el dia a dia, estos son los que importan.",
        ],
      },
      {
        heading: "1. Soporte de celular con antivibracion",
        paragraphs: [
          "Es el primero porque sin el no trabajas. Si el telefono se mueve pierdes la ruta; si la pantalla no se lee, pierdes tiempo en cada entrega y la app se vuelve inutilizable.",
          "Busca antivibracion y sujecion por cuatro esquinas. Si tu telefono vive en la moto todo el turno, la diferencia entre un soporte rigido y uno con amortiguacion se nota en la primera semana, no en la primera compra.",
          "Para el uso diario, el detalle que mas se agradece es el cable sujeto al soporte. Sin eso, el conector se sale con cada tope.",
        ],
      },
      {
        heading: "2. Sujecion del cable de carga",
        paragraphs: [
          "El detalle mas subestimado de todo el kit. El cable se desconecta con los baches y te quedas sin bateria a medio turno, que es justo cuando mas vas a necesitar el mapa.",
          "Un sujetador de cable cuesta casi nada y elimina el problema por completo. Si tu soporte no lo incluye, cualquier cinta o clip resuelve, pero uno pensado para esto queda mucho mejor y no maltrata el cable.",
          "La regla al elegirlo: que tenga espacio para un cable de carga de uso grueso y que no apriete el conector, porque un conector aplastado deja de cargar.",
        ],
      },
      {
        heading: "3. Red elastica para sujetar carga",
        paragraphs: [
          "Para el casco cuando te bajas, para la mochila cuando no quieres cargarla en el trayecto, para la compra del dia. Es el accesorio mas barato del kit y el que mas veces usas.",
          "Elige una con ganchos de metal recubierto: las de gancho de plastico se rompen rapido y rayan la pintura de la moto justo donde se ven mas.",
          "Sirve tambien para lo que transportas por trabajo y no quieres que vuele: una bolsa de comida, una herramienta, una chamarra. En trayectos con viento fuerte es la diferencia entre llegar con todo o llegar sin nada.",
        ],
      },
      {
        heading: "4. Proteccion contra lluvia",
        paragraphs: [
          "En temporada de lluvias esto deja de ser opcional. Hay dos caminos y no son excluyentes: carcasa impermeable para el telefono y cubre moto para cuando la dejas estacionada afuera.",
          "La carcasa impermeable tiene un costo real: el telefono se calienta mas dentro y, si lo dejas cargando con la pantalla encendida al sol, se apaga. La compensa es que puedes seguir viendo la ruta con la pantalla mojada.",
          "Si tu moto duerme en la calle, el cubre moto con hebilla antiviento es probablemente la mejor inversion del kit: protege de lluvia, sol y polvo, y no se la lleva el viento. Esa ultima parte es la que separa una funda util de una que amanece en el suelo.",
        ],
      },
      {
        heading: "5. Seguridad basica",
        paragraphs: [
          "Un candado de disco con cable recordatorio. El cable es lo que evita el error caro: arrancar con el candado puesto y danar el disco o la horquilla, o, peor todavia, caerse.",
          "Ningun candado hace la moto imposible de robar, y desconfia de quien te lo prometa. Lo que hace es subir el esfuerzo necesario y quitar oportunidad. Combinar candado de disco con una cadena o un anclaje fijo siempre es mejor que usar uno solo.",
          "Para uso diario, el factor decisivo es que puedas ponerlo y quitarlo en segundos. Un candado que toma medio minuto es un candado que terminas de dejar puesto en la calle.",
        ],
      },
      {
        heading: "6. Bolsa de pierna y punos: lo que se siente en el turno",
        paragraphs: [
          "Hay dos accesorios mas que aparecen en la lista de todo repartidor y que conviene decidir con calma.",
          "El primero es la bolsa de pierna impermeable. Resuelve el problema de todos los dias: donde dejas la cartera, el telefono y los documentos sin que se mojen y sin tener que bajar de la moto a cada rato. Se ajusta al muslo con correas regulables, se queda fija durante el trayecto y te la llevas al bajarte. A 399 pesos es de las compras que mas se justifican si entregas en zonas donde el clima cambia a media hora.",
          "El segundo son los punos universales de 22 y 25 mm. Los punos de fabrica se endurecen con el uso, se vuelven resbalosos y dejan pasar la vibracion completa a las manos. Un par de goma blanda con patron antideslizante mejora el agarre y reduce lo que llega a tus dedos. No es seguridad, es comodidad, y en un turno de ocho horas la diferencia en lo cansado que llegas a casa es real.",
          "Y una nota sobre lo que no conviene: los guantes y las chamarras para moto tienen tallas y devoluciones, asi que si no sabes la talla exacta de la persona no son un regalo ni una compra a ciegas. Es preferible un accesorio que se ajusta a cualquier cuerpo.",
        ],
      },
      {
        heading: "7. El cuidado de la moto tambien es parte del trabajo",
        paragraphs: [
          "Si la moto es tu herramienta de trabajo, el mantenimiento basico cuenta como accesorio: una cadena limpia y lubricada rinde, dura y no te deja varado en medio de un turno.",
          "El problema es que el mantenimiento se pospone. Se limpia cuando ya suena raro, se lubrica cuando la cadena ya se ve seca, y las dos cosas pasan en el peor momento: con la moto parada y la app tronando. Un cepillo limpiador de cadena de tres caras resuelve la parte de limpiar en cinco minutos, sin necesitar taller.",
          "A eso se suma un detalle de seguridad que es puro sentido comun y que muchos repartidores no hacen: revisar la cadena y la presion de las llantas antes de salir, no cuando la moto ya esta en la calle. Una cadena floja o una llanta baja no se arreglan en medio de un turno.",
          "Y el ultimo detalle, el mas aburrido y el mas importante: si la moto duerme en la calle, el cubre moto con hebilla antiviento no es un extra. Sin el, la lluvia entra por donde quiera y el sol de mediodia envejece el asiento y los plasticos. Es el accesorio que mas se agradece cuando ya paso la temporada de lluvias.",
        ],
      },
      {
        heading: "En que orden comprarlos",
        paragraphs: [
          "Si vas empezando y el presupuesto esta limitado, este orden tiene sentido. Primero lo que te hace falta para trabajar: el soporte con amortiguacion y su sujetador de cable. Segundo lo mas barato y de uso diario: la red elastica. Tercero la seguridad: el candado de disco con su cable recordatorio. Y al final, segun la temporada, la proteccion contra lluvia.",
          "Es un orden por impacto, no por precio. Con ese orden, con el primer bloque de compras ya resuelves el ochenta por ciento de los problemas que te van a aparecer en el mes.",
        ],
      },
      {
        heading: "Cuanto cuesta el kit completo",
        paragraphs: [
          "Para que sepas de antemano cuanto estas gastando, estos son los precios de la tienda en pesos mexicanos:",
        ],
        bullets: [
          "Kit soporte celular moto antivibracion 360 con sujetador de cable: $599 MXN.",
          "Red elastica porta carga para moto: $199 MXN.",
          "Candado de disco con cable recordatorio: $449 MXN.",
          "Cubre moto impermeable con hebilla antiviento: $599 MXN.",
          "Bolsa de pierna impermeable: $399 MXN.",
          "Punos universales 22 y 25 mm: $349 MXN.",
          "Suma orientativa del kit completo: $2,594 MXN.",
        ],
      },
      {
        heading: "El siguiente paso",
        paragraphs: [
          "Empieza por el soporte: es el que mas te mueve el dia. El Kit Soporte Celular Moto Antivibracion 360 para Repartidor esta en /producto/kit-soporte-celular-moto-antivibracion-360.",
          "La red elastica y el candado de disco con cable recordatorio los encuentras en /producto/red-elastica-porta-carga-moto y /producto/candado-disco-moto-cable-recordatorio. Para lluvia y proteccion del equipo esta /producto/cubre-moto-impermeable-antiviento.",
          "Todos los accesorios juntos estan en la coleccion de la tienda: /coleccion/soportes-celular, /coleccion/alforjas-y-bolsas, /coleccion/seguridad-y-candados y /coleccion/cubre-moto-e-impermeables.",
        ],
      },
    ],
    relatedProducts: [
      "kit-soporte-celular-moto-antivibracion-360",
      "red-elastica-porta-carga-moto",
      "candado-disco-moto-cable-recordatorio",
      "cubre-moto-impermeable-antiviento",
    ],
  },
  {
    slug: "alforjas-moto-vs-mochila-moto",
    title: "Alforjas moto vs mochila moto: cual te conviene",
    metaTitle: "Alforjas moto vs mochila moto: cual conviene",
    metaDescription:
      "Alforjas moto o mochila impermeable: diferencias de comodidad, capacidad, estabilidad y precio. Que conviene para reparto, traslados y viajes en Mexico.",
    description:
      "Alforjas moto o mochila impermeable: diferencias de comodidad, capacidad, estabilidad y precio. Que conviene para reparto, traslados y viajes en Mexico.",
    excerpt:
      "Cargar en la espalda o cargar en la moto cambia por completo como se siente el trayecto. Te ayudamos a decidir.",
    keyword: "alforjas moto",
    keywords: [
      "alforjas moto",
      "mochila moto",
      "mochila impermeable moto",
      "bolsa para moto",
      "maleta impermeable para moto",
    ],
    readingMinutes: 11,
    updated: "2026-11-09",
    sections: [
      {
        heading: "La diferencia real no es de capacidad, es de centro de gravedad",
        paragraphs: [
          "El peso en la espalda sube el centro de gravedad y cansa los hombros. El peso en las alforjas va abajo y a los lados: la moto se siente mas plantada y tu llegas menos cansado.",
          "En trayectos cortos casi da igual. A partir de una hora manejando, la diferencia se siente claramente, sobre todo en calles rotas donde la mochila te pega contra la espalda en cada tope.",
          "Hay un detalle menos visible: la mochila te quita sensibilidad en los brazos cuando esta cargada y llena, y eso se nota en curvas de alta velocidad y en frenadas de emergencia.",
        ],
      },
      {
        heading: "Cuando conviene una mochila para moto",
        paragraphs: [
          "La mochila gana cuando necesitas llevarte la carga contigo al bajarte. Si cargas laptop, herramienta de trabajo o algo de valor, no quieres dejarlo amarrado a la moto mientras haces una entrega.",
          "Tambien gana si tu moto no tiene puntos de anclaje comodos, si el pasajero necesita el asiento, o si haces trayectos cortos y urbanos donde el volumen no es el problema.",
        ],
        bullets: [
          "Necesitas llevarte la carga al bajarte.",
          "Cargas equipo fragil, electronica o de valor.",
          "Trayectos cortos y ciudad, sin mucho volumen.",
          "Vas con pasajero y el asiento no se puede cargar.",
        ],
      },
      {
        heading: "Cuando convienen las alforjas moto",
        paragraphs: [
          "Las alforjas ganan cuando el volumen es alto y el trayecto es largo. Ropa, herramienta, equipo de trabajo, compras: todo eso va mejor abajo y a los lados.",
          "El montaje es universal en la mayoria de motos: se sujetan con bandas sobre el asiento o sobre las defensas. Con las cubiertas impermeables puestas, el contenido queda protegido en lluvia normal.",
          "Tambien son la opcion mas comoda para llevar dos cosas que no quieres mezclar, como herramientas sucias y ropa limpia, porque van en compartimentos separados.",
        ],
        bullets: [
          "Volumen alto o varios dias de viaje.",
          "Trayectos largos o carretera.",
          "Quieres liberar los hombros por completo.",
          "Necesitas separar equipo de trabajo de ropa o comida.",
        ],
      },
      {
        heading: "Capacidad: cuantos litros necesitas de verdad",
        paragraphs: [
          "Los litros que aparecen en las fichas son volumen total de las dos alforjas, no por pieza. Para no comprar de mas ni de menos, toma como referencia lo que realmente cargas.",
        ],
        bullets: [
          "Hasta 10 litros: una chamarra, un casco extra y un par de guantes.",
          "De 15 a 25 litros: un cambio de ropa completo, una laptop o una caja de herramientas.",
          "De 36 a 58 litros: varios dias de viaje, camping, o equipo de trabajo con refacciones.",
          "Mochila de 25 litros: cabe una laptop de 15 pulgadas, un cambio de ropa y herramienta basica.",
          "Regla rapida: mejor un poco mas de espacio que andar: el que se queda sin lugar acaba dejando cosas colgadas.",
        ],
      },
      {
        heading: "El detalle honesto sobre impermeabilidad",
        paragraphs: [
          "Ni las alforjas ni las mochilas de este rango son sumergibles. Resisten lluvia fuerte en trayecto, que es lo que necesitas, pero si cruzas un vado inundado el agua va a entrar.",
          "Lo que hace la diferencia es el tipo de cierre. Un cierre estanco enrollable, como el de las mochilas estancas, sella mucho mejor que un cierre convencional con cubierta encima.",
          "Por eso la mochila impermeable de 25 litros de esta tienda lleva cierre estanco enrollable: no hay cremallera que se pueda filtrar. Las alforjas incluyen cubiertas impermeables aparte, y para lluvia muy fuerte y prolongada conviene guardar lo importante en bolsas internas.",
        ],
      },
      {
        heading: "Lo que nadie te dice del montaje universal",
        paragraphs: [
          "Universal no significa que le quede bien a cualquier moto sin ajustes. Hay tres cosas que conviene revisar antes de pedir:",
        ],
        bullets: [
          "Espacio del escape: en motos con escape alto, la alforja derecha puede requerir acomodarse o acortarse.",
          "Espacio del pasajero: en la mayoria de las motos el pasajero sigue comodo porque las alforjas quedan por debajo del nivel del asiento.",
          "Simetria: usar una sola alforja desbalancea la moto. Mejor el par completo, aunque uses mas una que otra.",
          "Altura de las bandas: si las bandas aprietan de mas, la alforja sube y roza el escape. Si aprietan de menos, la carga se sale en el primer tope.",
        ],
      },
      {
        heading: "Como se siente el peso en la practica",
        paragraphs: [
          "La prueba de los diez minutos: carga la bolsa con el peso real que vas a usar y date una vuelta larga con la moto. Si en la parte alta de un tope la carga se mueve hacia adelante, la correa o las bandas estan flojas.",
          "En mochila, la prueba es de hombros: con la mochila cargada al peso de tu uso real, levanta los brazos al frente durante un minuto. Si no puedes, la mochila te va a molestar en horas.",
          "Otra prueba honesta: con la mochila puesta, monta y baja de la moto varias veces. Si el peso te hace tambalear al bajarte, la correa no esta bien ajustada o el modelo es demasiado grande para ti.",
        ],
      },
      {
        heading: "La respuesta corta",
        paragraphs: [
          "Si usas la moto para trabajar y cargas equipo que te llevas contigo: mochila impermeable. Si cargas volumen y haces trayectos largos: alforjas. Si puedes, las dos cosas se complementan bien y el reparto se vuelve mucho mas comodo.",
          "Y una combinacion que se usa mucho: alforjas para lo que viaja en la moto y bolsa de pierna para cartera, documentos y telefono, que es lo que de verdad necesitas a la mano en cada entrega.",
        ],
      },
      {
        heading: "La pregunta del pasajero y del tiempo de carga",
        paragraphs: [
          "Dos detalles que casi nadie revisa antes de comprar y que despues generan quejas: donde va el pasajero y como se reparte el peso en la moto.",
          "En la mayoria de las motos las alforjas quedan por debajo del nivel del asiento, asi que el pasajero sigue comodo. Pero en motos con asiento alto o escape corto, la alforja derecha puede invadir el espacio de la pierna. Medir la moto con alguien sentado encima evita la sorpresa.",
          "El reparto del peso es la otra cuenta que conviene hacer. Con 40 litros y todo bien distribuido, la moto queda centrada; con una sola alforja llena, tira de un lado y en curva se nota el peso. Reparte entre las dos alforjas y usa el ajuste de las bandas para dejar la carga pegada al centro.",
        ],
      },
      {
        heading: "Precio: por que hay una escalera de precios y cual te conviene",
        paragraphs: [
          "Las alforjas universales de 36 a 58 litros rondan los 1,100 pesos en esta tienda, y las de marca premium se van por encima de los 2,300. La diferencia no es solo el material: es el cierre, los refuerzos y que tan bien termina el montaje.",
          "Para uso diario en ciudad, la version universal con cubiertas impermeables es la que mas sentido hace: aguanta la lluvia de trayecto y el uso diario, y el precio deja margen para el resto del equipo. Pagar mas por una alforja premium tiene sentido cuando la usas para viajes largos con el mismo equipo durante meses.",
          "La mochila impermeable de 25 litros esta en 749 pesos y resuelve casi todo lo que resuelve una alforja pequena, con la diferencia de que te la llevas al bajarte. La bolsa de pierna, en 399, resuelve lo que ninguna de las dos resuelve: donde llevar lo que necesitas a la mano.",
        ],
      },
      {
        heading: "El siguiente paso",
        paragraphs: [
          "Para carga volumetrica en trayectos largos, las alforjas impermeables universales de 36 a 58 litros estan en /producto/alforjas-moto-impermeables-universales-36-58l, con par de alforjas, cubiertas impermeables y bandas elasticas incluidas.",
          "Para lo que te llevas al bajarte, la mochila impermeable de 25 litros con cierre estanco esta en /producto/mochila-impermeable-moto-diaria, y la bolsa de pierna en /producto/bolsa-pierna-impermeable-motociclista. Para herramienta, el rollo organizador compacto esta en /producto/bolsa-herramientas-moto-compacta.",
          "Todas las opciones de equipaje estan juntas en /coleccion/alforjas-y-bolsas.",
        ],
      },
    ],
    relatedProducts: [
      "alforjas-moto-impermeables-universales-36-58l",
      "mochila-impermeable-moto-diaria",
      "bolsa-pierna-impermeable-motociclista",
    ],
  },
  {
    slug: "proteger-moto-de-la-lluvia",
    title: "Como proteger tu moto de la lluvia si duerme afuera",
    metaTitle: "Cubre moto impermeable: como elegir la talla",
    metaDescription:
      "Cubre moto impermeable con hebilla antiviento: que dana el sol y la lluvia, como medir la moto para elegir la talla correcta y cuando conviene un cubre asiento.",
    description:
      "Cubre moto impermeable con hebilla antiviento: que dana el sol y la lluvia, como medir la moto para elegir la talla correcta y cuando conviene un cubre asiento.",
    excerpt:
      "El problema no es solo mojarse: el sol y el polvo danan mas lento pero mas caro. Y casi todos compran la talla equivocada.",
    keyword: "cubre moto impermeable",
    keywords: [
      "cubre moto",
      "funda para moto",
      "cubre moto impermeable",
      "impermeable para moto",
      "cubre moto para la calle",
    ],
    readingMinutes: 10,
    updated: "2026-11-09",
    sections: [
      {
        heading: "Que danan realmente la lluvia, el sol y el polvo",
        paragraphs: [
          "La lluvia se lleva la culpa, pero el sol es el que mas dano hace con el tiempo. Los rayos UV agrietan el asiento, decoloran los plasticos y resecan las gomas. El polvo se mete en las partes moviles y acelera el desgaste.",
          "Si tu moto duerme afuera, los tres factores trabajan todos los dias, no solo cuando llueve. Un toldo o una techumbre parcial ayudan, pero si la moto pasa la noche a la intemperie, el desgaste anual se nota igual.",
          "El agua tambien hace cosas que no son obvias: si la moto amanece mojada y la limpias al sol, el agua con polvo se convierte en una pasta abrasiva que raye el carenado. Secar antes de lavar no es mania, es mantenimiento.",
        ],
      },
      {
        heading: "La hebilla antiviento es lo que separa una funda util de una inutil",
        paragraphs: [
          "Las fundas baratas se amarran con un cordon en la parte de abajo. Con viento fuerte, el cordon se suelta y amaneces con la funda en el suelo y la moto mojada igual.",
          "Una hebilla que pasa por debajo de la moto mantiene la funda sujeta. Es la diferencia mas importante entre dos fundas que por foto se ven iguales, y es la razon por la que en esta tienda el cubre moto incluye hebilla y correa inferior.",
          "Segunda diferencia que importa: el forro interior. Si el forro es aspero, cada vez que movemos la moto con viento la funda se arrastra sobre la pintura y le deja rayones. Un forro suave evita el rayado durante toda la vida de la funda.",
        ],
      },
      {
        heading: "Como elegir la talla (aqui falla casi todo el mundo)",
        paragraphs: [
          "El error comun es pedir la talla segun el modelo de la moto. No funciona asi: las tallas van por medidas.",
          "Mide el largo total de tu moto de punta a punta, desde la parte delantera mas adelantada hasta el final de la cola, y sumale el alto del manubrio. Compara ese numero con la tabla de tallas del producto.",
          "Regla practica: si estas entre dos tallas, sube a la mayor. Una funda grande sobra un poco y cumple; una chica deja el manubrio o la cola al descubierto, que es justo la parte que mas se moja.",
          "Y si la moto lleva alforjas montadas o un equipo extra, mide con todo puesto. Una funda que se cierra con las alforjas puestas queda muy ajustada y se abre con el viento.",
        ],
      },
      {
        heading: "Detalles que si importan",
        paragraphs: [
          "Revisa estos puntos antes de comprar:",
        ],
        bullets: [
          "Forro interior suave: protege la pintura de rayones durante el movimiento con viento.",
          "Costuras reflectivas: util para que te vean de noche si la moto queda en la calle.",
          "Nunca ponerla con el escape caliente: el calor directo danara el recubrimiento con el tiempo.",
          "Bolsa de transporte incluida: sin ella, la funda termina guardada en el cajon y se estropea.",
          "Tallas medidas de la moto, no del modelo: revisa la tabla antes de pedir.",
        ],
      },
      {
        heading: "Cubre asiento: cuando vale la pena",
        paragraphs: [
          "Si ya cubres la moto completa, el cubre asiento es redundante. Vale la pena cuando la moto duerme a media intemperie, con techo parcial, y lo que mas sufre es el asiento.",
          "El asiento es la parte que mas se dana con el sol de todos los dias: el vinil se cuartea, se endurece y se cuartea mas. Si puedes cubrir solo el asiento sin cubrir la moto entera, es una solucion mucho mas barata.",
          "Para la mayoria de la gente, el cubre moto completo es la mejor compra primero, y el cubre asiento se compra despues si la situacion lo pide.",
        ],
      },
      {
        heading: "El error de guardar la funda mojada",
        paragraphs: [
          "Guardar la funda mojada y cerrada es la forma mas rapida de arruinarla. La humedad se queda atrapada, el forro empieza a oler y a descomponerse, y la tela se degrada en pocas semanas.",
          "Lo correcto es abrirla apenas la quitas, extenderla y dejarla secar en un lugar ventilado antes de guardarla en su bolsa. Si la guardas mojada una sola vez, el olor no se va con una lavada: toca lavarla a mano y secsarla al aire.",
          "Y si la moto se mojo mucho, no la seques al sol directo: primero quitala con un trapo limpio, dejala ventilada y despues la lava. El sol con polvo encima es lo que raya.",
        ],
      },
      {
        heading: "Que revisar cuando llega tu funda",
        paragraphs: [
          "Cuando abras el paquete, no te saltes la revision. Es el momento de devolver o cambiar si algo no cuadra, y toma dos minutos:",
        ],
        bullets: [
          "Cuenta las piezas: funda, bolsa de transporte, hebilla, correa y, si aplica, reflectivos.",
          "Revisa las costuras de los reflectivos y de las uniones: una costura mal pegada es por donde entra el agua primero.",
          "Confirma que las costuras principales estan selladas con el reflejo de la tela al trasluz.",
          "Prueba la hebilla sin la moto puesta, pasando la correa por debajo de la moto imaginaria: debe cerrar sin forzar.",
          "Mide la funda contra tu moto antes de guardarla: las tallas de fabrica varian y conviene saber en que punto quedaste.",
        ],
      },
      {
        heading: "Cubre moto o cubre asiento: cuando el parcial alcanza",
        paragraphs: [
          "El cubre moto completo no siempre es la compra mas inteligente. Si tu moto duerme en una cochera techada o en un portico, el problema de la lluvia ya esta resuelto y lo que sigue destruyendo el moto es el sol y el polvo.",
          "En ese caso, un cubre asiento impermeable, en el rango de 200 a 350 pesos, resuelve el 80% del dao por una fraccion del precio. El vinil del asiento con los rayos UV se cuartea en dos o tres temporadas y de ahi viene el 90% de las quejas de las motos que se ven viejas antes de tiempo.",
          "La regla es sencilla: si el agua es el problema principal, cubre la moto completa. Si lo que mata tu moto es el sol y el polvo, el cubre asiento es la compra mas inteligente que puedes hacer.",
        ],
      },
      {
        heading: "El momento de ponerla y de quitarla",
        paragraphs: [
          "Ponla antes de que empiece la lluvia, no cuando ya te estas mojando. La funda mojada es la que hay que secar, y esa es la parte que nadie quiere hacer.",
          "Quitala en cuanto llegues, no la dejes puesta horas despues con el sol de mediodia. El plastico de la funda trabaja como un horno y si la moto esta caliente, el calor se queda atrapado con la funda encima y termina danando tanto el recubrimiento como el plastico del carenado.",
          "Si tu ruta te hace pasar varias veces por zonas de lluvia, tener la funda siempre en la moto es la diferencia entre una molestia de diez segundos y una funda mojada que hay que secar.",
        ],
      },
      {
        heading: "Cubre moto o candado: las dos cosas juntas",
        paragraphs: [
          "Un cubre moto sin candado protege de la lluvia y no de que se la lleven. Un candado sin cubre protege el disco y no del agua. Son problemas distintos y se resuelven con dos compras distintas.",
          "Lo unico que hay que tener claro es el alcance de cada uno: ningun candado de disco de este rango hace la moto imposible de robar. Lo que hace es subir el esfuerzo necesario y quitar oportunidad.",
          "Si tu moto duerme en un lugar con poco paso, combinar un candado de disco con su cable recordatorio y un buen cubre moto es la combinacion que mas te deja tranquilo sin gastar de mas.",
        ],
      },
      {
        heading: "El siguiente paso",
        paragraphs: [
          "El Cubre Moto Impermeable con Hebilla Antiviento esta en /producto/cubre-moto-impermeable-antiviento, con costuras selladas, forro interior suave, costuras reflectivas, hebilla inferior antiviento y bolsa de transporte incluida.",
          "Para el equipo que usas en el trayecto, la mochila impermeable de 25 litros esta en /producto/mochila-impermeable-moto-diaria, con cierre estanco enrollable.",
          "Para el candado que acompana al cover cuando la moto duerme afuera, esta /producto/candado-disco-moto-cable-recordatorio. Y todos los productos de clima e impermeables estan en /coleccion/cubre-moto-e-impermeables.",
        ],
      },
    ],
    relatedProducts: [
      "cubre-moto-impermeable-antiviento",
      "mochila-impermeable-moto-diaria",
      "candado-disco-moto-cable-recordatorio",
    ],
  },
  {
    slug: "como-limpiar-la-cadena-de-tu-moto",
    title: "Como limpiar la cadena de tu moto paso a paso",
    metaTitle: "Como limpiar la cadena de tu moto paso a paso",
    metaDescription:
      "Limpieza de cadena de moto paso a paso: por que el trapo no alcanza, como usar el cepillo de tres caras, cada cuanto lubricar y que errores danan los o-rings.",
    description:
      "Limpieza de cadena de moto paso a paso: por que el trapo no alcanza, como usar el cepillo de tres caras, cada cuanto lubricar y que errores danan los o-rings.",
    excerpt:
      "Limpiar la cadena con trapo deja sucio justo donde importa. Aqui esta el metodo simple y correcto.",
    keyword: "lubricante cadena moto",
    keywords: [
      "lubricante cadena moto",
      "limpiador cadena moto",
      "cepillo cadena moto",
      "como limpiar la cadena de una moto",
      "grasa para cadena moto",
    ],
    readingMinutes: 10,
    updated: "2026-11-09",
    sections: [
      {
        heading: "Por que la cadena es la pieza que mas agradece el mantenimiento",
        paragraphs: [
          "La cadena transmite toda la potencia de tu moto. Cuando esta sucia y seca, se estira mas rapido, desgasta los dientes de los engranes y te quita rendimiento.",
          "Una cadena bien cuidada dura bastante mas. El mantenimiento toma minutos y el ahorro es de cientos de pesos, porque cambiar cadena y engranes juntos es de las reparaciones mas caras del mantenimiento basico.",
          "La buena noticia es que la tarea es sencilla. No hace falta taller ni herramienta especial: hace falta un cepillo con la forma correcta y cinco minutos.",
        ],
      },
      {
        heading: "Por que el trapo no alcanza",
        paragraphs: [
          "Un trapo limpia la parte exterior de los eslabones, que es la que se ve. El problema esta en los espacios internos, donde se acumula la mezcla de polvo, grasa y tierra que desgasta los o-rings.",
          "Para llegar ahi necesitas cerdas que entren entre los eslabones desde los tres lados. Y esto no es un detalle menor: los o-rings son los que mantienen el lubricante dentro de la cadena. Si se secan o se rompen, el lubricante se escapa y la cadena se desgasta mucho mas rapido de lo que deberia.",
          "Por eso un trapo sucio, mojado con gasolina o con un solvente fuerte, es la peor opcion: limpia por fuera, deja el interior igual y puede danar los sellos.",
        ],
      },
      {
        heading: "El cepillo de tres caras",
        paragraphs: [
          "Tiene cerdas en la cara superior, la inferior y un lateral, de modo que abraza la cadena completa. Le das vueltas a la rueda y limpia los tres lados al mismo tiempo.",
          "Un detalle importante: las cerdas deben ser de nailon, no de alambre. Las de alambre limpian mas agresivo pero danan los o-rings, y ahi el dano sale mucho mas caro que la suciedad.",
          "Tambien conviene que el mango sea comodo, porque vas a tener que hacer bastante fuerza con la rueda, ya girada con el pie en el taller. Un mango corto y quebrado hace que la tarea sea mucho mas molesta de lo que deberia.",
        ],
      },
      {
        heading: "El metodo, paso a paso",
        paragraphs: [
          "Con la moto apagada y sobre el caballete, sigue este orden:",
        ],
        bullets: [
          "Pon la moto en el caballete central, con la rueda trasera libre del piso.",
          "Coloca el cepillo sobre la cadena abrazando los tres lados.",
          "Gira la rueda trasera a mano, con la mano izquierda, y deja que el cepillo trabaje en toda la cadena.",
          "Repite hasta que salga limpia. Si esta muy sucia, pasa el cepillo en seco primero y luego con un poco de limpiador.",
          "Retira el exceso de suciedad con un trapo limpio antes de lubricar.",
          "Aplica lubricante para cadena en la cara superior, con la moto en movimiento lento para que el lubricante entre entre los eslabones.",
          "Deja reposar unos minutos y da una vuelta corta antes de salir a rodar.",
        ],
      },
      {
        heading: "Lubricar bien: la parte que casi todos hacen mal",
        paragraphs: [
          "Limpiar es la mitad del trabajo. El lubricante es lo que evita que los eslabones se gripen y que los o-rings se sequen, y aplicarlo mal desperdicia el producto y deja el trabajo a medias.",
        ],
        bullets: [
          "Primero limpia, luego lubrica: el lubricante sobre mugre atrapa la suciedad y la lleva directo al o-ring.",
          "Usa poca cantidad: en cadena de moto, menos es mas. El exceso escurre y termina en el freno trasero.",
          "Aplica sobre la cara superior con la cadena en movimiento lento, para que el producto entre entre las placas.",
          "Retira el excedente con un trapo. Si el lubricante llega al disco o al tambor del freno, el freno pierde potencia.",
          "Usa lubricante de cadena, no grasa de motor ni aceite de cocina: las resinas y el aceite de cocina se quema con el calor y se convierten en un abrasivo.",
          "Despues de lubricar, limpia el disco del freno con un trapo y un limpiador de frenos: es un paso de un minuto que evita un problema grave.",
        ],
      },
      {
        heading: "Cada cuanto hacerlo",
        paragraphs: [
          "En uso urbano diario, cada dos o tres semanas. Si manejas con lluvia o en caminos de tierra, con mas frecuencia: el agua y el polvo son lo que mas acelera el desgaste.",
          "Una revision rapida despues de lavar la moto es el mejor momento, porque ya esta limpia y a la mano. Aprovecha ese rato para mirar como corre la cadena: si se ve muy seca, es buena idea lubricar.",
          "Y en los trayectos largos de carretera, revisa la tension antes de salir. Una cadena floja golpea contra la cubierta del pignon y se desgasta en la parte alta del enlace.",
        ],
      },
      {
        heading: "Errores que danan la cadena y el freno",
        paragraphs: [
          "Estos son los errores que se repiten y que despues salen caros:",
        ],
        bullets: [
          "Lubricar sin limpiar antes: la mugre atrapada raspa los eslabones por dentro.",
          "Dejar lubricante en el disco del freno: el freno se degrada y el problema aparece en una bajada de montana.",
          "Lavar la moto con hidrolavadora a alta presion sin proteger la cadena: se mete agua y detergente donde no deben.",
          "Cerrar la cadena mientras esta sucia: el polvo se mete entre las placas y las raspa por dentro.",
          "Usar aceite de cocina o grasa de motor: no esta formulado para metal y calor, y ensucia los o-rings.",
          "Apretar la cadena al maximo: no corrige una cadena estirada, solo dana el pignon y los engranes.",
        ],
      },
      {
        heading: "Cuando ya no hay que limpiarla: hay que cambiarla",
        paragraphs: [
          "Hay senales claras de que la cadena ya paso su vida util, y conviene reconocerlas antes de que se rompan en el camino:",
        ],
        bullets: [
          "La cadena se ve mas floja de lo normal y hay que tensarla para que no golpee.",
          "Al acelerar en baja velocidad se escuchan golpes secos en el tranche, como si el motor tosiera.",
          "Los eslabones se ven alargados y las placas laterales brillan, senal de desgaste en los rodillos.",
          "La diferencia de dientes entre el pignon y el engran ya es visible a simple vista.",
          "El cambio de aceite cada vez mas seguido: es sintoma de que el desgaste ya comenzo.",
          "Cuando notes cualquiera de estas, el mantenimiento ya no salva la cadena: hay que cambiar cadena, pignon y engranes juntos.",
        ],
      },
      {
        heading: "El mantenimiento de la moto en general (lo que dura mas)",
        paragraphs: [
          "La cadena es la pieza que mas se nota cuando se descuida, pero no es la unica. Un mantenimiento basico completo cabe en una tarde y evita las reparaciones mas caras del taller.",
          "Lo primero que revisas al mirar la cadena es la lubricacion: debe verse una capa uniforme, sin areas oscuras y sin fierros asomando. Si ves partes oxidadas o con color distinto, es senal de que ese tramo se esta secando mas que los demas.",
          "El segundo punto es la tension. Una cadena bien tensada no debe golpear contra la cubierta del pignon cuando levantas la rueda trasera con el pie. Si golpea, ajustala antes de seguir, porque el golpe constante es justo lo que acorta la vida de la cadena y del pinon.",
          "Y el tercero es la limpieza general. Una moto lavada a presion sin proteger la cadena mete agua y detergente justo donde no deben, y un residuo de jabon en los o-rings acelera su desgaste. Si lavas con hidrolavadora, usa un trapo o una bolsa de plastico sobre la cadena mientras limpias.",
        ],
      },
      {
        heading: "Por que no vendemos aerosoles",
        paragraphs: [
          "Los lubricantes en aerosol complican el envio y encarecen el producto por restricciones de transporte. Por eso en esta tienda vendemos la herramienta y el accesorio solido, y el lubricante lo consigues local sin pagar envio internacional.",
          "Si prefieres la herramienta con mas versiones, el envio es internacional con guia rastreable y tarda de 7 a 15 dias habiles. Es un tiempo real, no una promesa de entrega inmediata.",
        ],
      },
      {
        heading: "El siguiente paso",
        paragraphs: [
          "El Cepillo Limpiador de Cadena Moto 3 Caras esta en /producto/cepillo-limpiador-cadena-moto-3d, con cerdas de nailon duro que no danan los o-rings, mango comodo, y se lava y se reutiliza.",
          "Para llevar la herramienta y el aceite a la moto sin que suene ni se moje, el rollo organizador compacto esta en /producto/bolsa-herramientas-moto-compacta. Y todos los accesorios de mantenimiento estan en /coleccion/mantenimiento.",
        ],
      },
    ],
    relatedProducts: ["cepillo-limpiador-cadena-moto-3d", "bolsa-herramientas-moto-compacta"],
  },
  {
    slug: "stickers-para-moto-guia-para-elegir-los-que-si-pegan",
    title: "Stickers para moto: guia para elegir los que si pegan",
    metaTitle: "Stickers para moto: elegir los que si pegan",
    metaDescription:
      "Stickers para moto y casco: como elegir vinilos que si pegan, que superficie los acepta, cuando conviene un reflectivo y como quitar un sticker sin rayar.",
    description:
      "Stickers para moto y casco: como elegir vinilos que si pegan, que superficie los acepta, cuando conviene un reflectivo y como quitar un sticker sin rayar.",
    excerpt:
      "Dos calcomanias del mismo precio pueden durar una semana o tres anos. La diferencia esta en el vinil, no en el dibujo.",
    keyword: "stickers moto",
    keywords: [
      "stickers moto",
      "calcomanias moto",
      "stickers para casco",
      "stickers reflectivos moto",
      "vinil para moto",
    ],
    readingMinutes: 10,
    updated: "2026-11-09",
    sections: [
      {
        heading: "Que determina que un sticker dure",
        paragraphs: [
          "Dos calcomanias del mismo precio pueden durar una semana o tres anos. La diferencia casi nunca esta en el dibujo ni en la marca: esta en el tipo de vinil y en como se aplica sobre la superficie.",
          "Un vinil adhesivo de buena calidad es el que tiene una capa de adhesivo uniforme y estable, que no se corre con el calor del sol ni se pega con los dedos cuando el carro esta estacionado al mediodia. Un vinil barato se despinta con el agua a presion y se despega con los dedos en semanas.",
          "Antes de comprar, revisa dos cosas en la ficha del producto: que el material sea vinil y que este descrito como resistente a agua y rayos UV. Si dice papel, es decoracion para interiores y no aguanta la intemperie.",
        ],
      },
      {
        heading: "Los cuatro tipos de vinil que vas a encontrar",
        paragraphs: [
          "En el mercado hay cuatro familias de calcomania y se usan para cosas distintas:",
        ],
        bullets: [
          "Vinil estatico (sin adhesivo): se adheres con agua y se puede quitar y pegar varias veces. Ideal para probar disenos, pero no aguanta el sol de verano.",
          "Vinil adhesivo permanente: es el estandar de las calcomanias para moto. Aguanta agua, sol y cambio de temperatura, y se quita con calor.",
          "Vinil reflectivo: ademas de verse de dia, devuelve la luz de los faros de noche. Es el que mejora tu visibilidad.",
          "Vinil transferible: mas fino y flexible, ideal para superficies curvas como el casco o el deposito de combustible.",
        ],
      },
      {
        heading: "Que superficie los acepta y cual los rechaza",
        paragraphs: [
          "El adhesivo necesita una superficie limpia, lisa y sin grasa. Las superficies que mejor funcionan son el carenado de plastico y el deposito de combustible. Las que siempre dan problemas son las que tienen textura, rugosidad o brillo.",
        ],
        bullets: [
          "Va bien: carenado de plastico, tapa del deposito, guardabarros de plastico liso, horquillas y barras del chasis.",
          "Va con cuidado: pintura metalica del tanquecito, que necesita un lavado previo y puede quedar marca si se quita mal.",
          "No funciona: plastico texturizado, rugoso o con grabados, cepillos y plasticos de motor con textura.",
          "Nunca sobre la visera del casco: cualquier calcomania estorba la vision y puede invalidar la garantia del casco.",
          "Nunca sobre el disco del freno, la pinza o el tambor: cualquier particula pegada ahi te frena peor.",
          "Nunca pegues sobre una zona caliente: el escape y el tubo de escape no son superficie para vinil.",
          "Casco: solo en superficie lisa y limpia, nunca sobre la visera ni sobre los respiraderos.",
        ],
      },
      {
        heading: "Como preparar la superficie antes de pegar",
        paragraphs: [
          "La adhesion depende tanto de la limpieza como del vinil. Estos pasos toman tres minutos y evitan el despegue de una semana:",
        ],
        bullets: [
          "Lava la zona con agua y jabon y seca con un trapo de microfibra limpio.",
          "Desgrasa con alcohol isopropilico o con un limpiador de plasticos. Sin este paso, la cera o el aceite del trato hacen que el vinil resbale.",
          "Seca con un trapo que no deje pelusa: las motas de tela se quedan atrapadas en el borde del vinil.",
          "Revisa que la superficie este fria y a la sombra. Pegar un vinil caliente o al sol es la causa numero uno de burbujas.",
          "Prueba primero en una esquina escondida, con un tramo pequeno del sticker, para ver como se comporta la pintura.",
        ],
      },
      {
        heading: "Como pegarlos sin que queden burbujas",
        paragraphs: [
          "El secreto es no pegar de golpe. Si lo haces, el aire queda atrapado y sale en forma de burbujas que no tienen arreglo.",
        ],
        bullets: [
          "Usa el metodo de la tarjeta: pega un borde y desliza una tarjeta de plastico o de credencial sobre el vinil para ir avance a avance.",
          "Presiona suave con la tarjeta desde el centro hacia los bordes, asi expulsa el aire en vez de atraparlo.",
          "En curvas o superficies con relieve, usa el metodo de la agua: moja un poco la superficie y el adhesivo, y desliza el vinil hasta que se acomode.",
          "Al final, pasa un rodillo de repasador o el lomo de una tarjeta con firmeza sobre toda la superficie.",
          "No lo dejes al sol inmediato: deja la moto reposada un par de horas para que el adhesivo asiente.",
          "Espera 24 horas antes de lavar la moto o de exponerla a lluvia fuerte.",
        ],
      },
      {
        heading: "Los reflectivos: que hacen y que no hacen",
        paragraphs: [
          "Los stickers reflectivos no brillan solos: devuelven la luz que les llega. Si no hay un faro apuntandoles, de noche no se ven. Ese es exactamente su trabajo: que el conductor de un auto que viene enfrente te ubique a tiempo.",
          "Son el complemento mas barato de seguridad que puedes agregar a la moto y se aplican en casco, horquilla, guardabarros o laterales del carenado.",
        ],
        bullets: [
          "Reflejan la luz de los faros, no la tuya: de noche se ven cuando alguien te ilumina.",
          "No sustituyen un equipo de seguridad certificado ni a las luces de la moto.",
          "Si van en el casco, evita la visera y cualquier zona que deba mantenerse transparente.",
          "Limpialos con un trapo humedo para mantener el reflejo. Con el polvo y la mugre el reflectivo pierde bastante luz.",
          "Complementa perfecto del cubre moto cuando la moto duerme afuera en la calle.",
        ],
      },
      {
        heading: "Cuanto duran y como se deterioran",
        paragraphs: [
          "Un vinil de calidad bien aplicado dura anos. Los problemas aparecen por tres vias, y conviene saber de antemano cual es la tuya para elegir el tipo de calcomania.",
        ],
        bullets: [
          "Bordes que se levantan: es la causa mas comun. Pasa siempre por el borde de las piezas, donde el viento y el agua entran.",
          "Decoloracion por el sol: el vinil de verdad lleva proteccion UV. Si se deslava en meses, no la tenia.",
          "Residuo de adhesivo al quitarlo: si lo quitas con la mano, deja pegamento. El calor de un secador de cabello lo afloja.",
          "Rayones en la pintura: el vinil nunca raspa, pero si lo mantienes mucho tiempo el sol y el polvo lo desgastan y al quitarlo pueden dejar sombra en la pintura.",
        ],
      },
      {
        heading: "Como quitar un sticker sin rayar",
        paragraphs: [
          "Quitar una calcomania a la fuerza es la forma mas rapida de dejar marca en la pintura o en el plastico. El orden correcto es calor, paciencia y aceite.",
        ],
        bullets: [
          "Calienta la zona con un secador de cabello a distancia media, por 15 segundos.",
          "Empieza por una esquina y ve levantando despacio, en angulo bajo, en vez de tirar de golpe.",
          "En el adhesivo que queda, pon aceite de cocina o un removedor de adhesivo y deja actuar unos minutos.",
          "Limpia el residuo con un trapo con jabon y luego con alcohol isopropilico.",
          "Nunca uses objetos metalicos, porque ahi si aparecen los rayones de verdad.",
          "Si el vinil estuvo mucho tiempo al sol, puede quedar una sombra leve en la pintura. Es desgaste de la capa superior y no tiene arreglo casero.",
        ],
      },
      {
        heading: "El siguiente paso",
        paragraphs: [
          "Para personalizar el carenado, el tanque o el casco con disenos genericos, el Pack de Stickers Genericos para Moto y Casco esta en /producto/stickers-moto-genericos, con vinil resistente a agua y rayos UV y una variedad de tamanos.",
          "Si lo que buscas es que te vean mejor de noche, los Stickers Reflectivos para Moto y Casco estan en /producto/stickers-reflectivos-moto-casco: no necesitan bateria ni instalacion electrica.",
          "Los dos packs juntos funcionan bien: el reflectivo da visibilidad y el generico da la identidad. Y si buscas el resto del kit, la guia sobre que regalar a un motociclista te dice como integrar los stickers sin gastar de mas. Los dos packs de esta tienda estan en /coleccion/stickers-y-personalizacion.",
        ],
      },
    ],
    relatedProducts: ["stickers-moto-genericos", "stickers-reflectivos-moto-casco"],
  },
  {
    slug: "que-regalar-a-un-motociclista-que-viene-de-moto",
    title: "Que regalar a un motociclista que viene de moto",
    metaTitle: "Que regalar a un motociclista que viene de moto",
    metaDescription:
      "Guia de regalo para motociclistas en Mexico: ideas segun presupuesto, que no regalar, como pedir la talla correcta y cuando llega tu pedido.",
    description:
      "Guia de regalo para motociclistas en Mexico: ideas segun presupuesto, que no regalar, como pedir la talla correcta y cuando llega tu pedido.",
    excerpt:
      "Regalar a alguien que usa la moto todos los dias es mas facil de lo que parece, siempre que no adivines la talla.",
    keyword: "regalo para motociclista",
    keywords: [
      "regalo para motociclista",
      "regalos para alguien que anda en moto",
      "accesorios de moto de regalo",
      "regalo para repartidor",
      "que regalar a un motocyzlista",
    ],
    readingMinutes: 11,
    updated: "2026-11-09",
    sections: [
      {
        heading: "La pregunta que hay que responder antes de comprar",
        paragraphs: [
          "Regalar a alguien que usa la moto todos los dias es mas facil de lo que parece, siempre que no adivines la talla. El error tipico es regalar algo que suena elegante pero no le sirve.",
          "La pregunta que decide todo es una sola: como usa la moto? Un repartidor que hace ocho horas de turno, un viajero de fin de semana y alguien que solo va a la oficina el fin de semana necesitan cosas distintas.",
          "Y hay una segunda pregunta igual de importante: que esta ya usando? Un buen regalo para alguien que ya tiene todos los accesorios basicos es el que se la juega por la version mejorada, no por la misma pieza mas barata.",
        ],
        bullets: [
          "Repartidor o trabajo diario: soporte antivibracion, sujetador de cable, red elastica y bolsa de pierna.",
          "Viajero o trayectos largos: alforjas, mochila impermeable y cubre moto.",
          "Uso urbano de fin de semana: punos universales, stickers y reflejantes.",
          "Moto que duerme en la calle: cubre moto con hebilla antiviento y candado de disco.",
          "Principiante: un kit de limpieza de cadena y un par de punos le resuelve el primer trimestre.",
        ],
      },
      {
        heading: "Regalos de 150 a 250 pesos",
        paragraphs: [
          "Son los regalos que casi nunca fallan: baratos, utiles y de uso diario.",
        ],
        bullets: [
          "Pack de stickers genericos para moto y casco: $149 MXN. Personaliza su moto y le da algo que mostrar.",
          "Stickers reflectivos para moto y casco: $149 MXN. Aporta visibilidad nocturna y se ven bien de dia.",
          "Red elastica porta carga: $199 MXN. El accesorio mas barato de la lista y el que mas veces usa.",
          "Cepillo limpiador de cadena de tres caras: $179 MXN. Util, durable y con fecha de caducidad inexistente.",
        ],
      },
      {
        heading: "Regalos de 300 a 500 pesos",
        paragraphs: [
          "Aqui empieza lo que la persona usa de verdad en cada trayecto.",
        ],
        bullets: [
          "Punos universales de 22 y 25 mm: $349 MXN. La mejora mas barata y la que mas se agradece en trayectos largos.",
          "Bolsa de pierna impermeable: $399 MXN. Resuelve el problema de donde llevar documentos y cartera.",
          "Bolsa compacta de herramientas: $329 MXN. Organiza la herramienta y evita que suene en el carenado.",
          "Candado de disco con cable recordatorio: $449 MXN. Util si su moto se queda sola en la calle.",
          "Cubre punos o handguards universales: $499 MXN. Cortan el viento y la lluvia directa sobre las manos.",
        ],
      },
      {
        heading: "El regalo grande: de 600 pesos en adelante",
        paragraphs: [
          "Si la relacion es lo bastante cercana para un regalo de este porte, estas son las opciones que mas impacto tienen.",
        ],
        bullets: [
          "Kit soporte celular moto antivibracion 360 con sujetador de cable: $599 MXN. El regalo mas util para quien trabaja o navega con el telefono en la moto.",
          "Cubre moto impermeable con hebilla antiviento: $599 MXN. Recomendado en temporada de lluvias, pero vale igual el resto del ano para quien duerme la moto afuera.",
          "Mochila impermeable de 25 litros: $749 MXN. Para quien lleva equipo de trabajo o laptop en el trayecto.",
          "Alforjas impermeables universales de 36 a 58 litros: $1,099 MXN. El regalo de verdad para un viajero.",
        ],
      },
      {
        heading: "Si vas a regalar punos: la medida importa",
        paragraphs: [
          "Los punos son el regalo mas requerido y el que mas se devuelve por culpa de la medida. En la mayoria de las motos el tubo del manubrio no es igual de grueso en los dos lados: el lado del clutch suele ser de 22 mm y el lado del acelerador de 25 mm.",
          "La forma de resolverlo sin adivinar es simple: pides una foto de la moto con el manubrio de frente o mides el diametro exterior del puno original con una regla. Con ese dato eliges el par correcto y el regalo llega bien.",
          "Si no puedes medir, el cubre punos y los stickers son la salida segura, porque no dependen de medidas.",
        ],
      },
      {
        heading: "Que no conviene regalar",
        paragraphs: [
          "Hay articulos que se piden con buenas intenciones y terminan en una caja sin abrir. Los motivos no son el costo: es que implican un riesgo que la persona tiene que resolver.",
        ],
        bullets: [
          "Cascos: son equipo de seguridad con talla, certificacion y responsabilidad legal. Si no sabes su talla exacta y su modelo, no es un regalo, es una devolucion esperando.",
          "Camaras, GPS, intercomunicadores y alarmas: son electronica con instalacion, garantia y soporte. Si algo falla, la garantia y el soporte te tocan a ti.",
          "Direccionales o faros LED: su instalacion y su calidad dependen de la instalacion, y un producto que no enciende se lleva una decepcion.",
          "Guantes y chamarras sin talla: es el regalo que mas falla. Si no sabes la talla, no lo regales.",
          "Liquidos y aerosoles: el envio se encarece y las restricciones de transporte los hacen llegar lento o imposible en algunos casos.",
          "Piezas especificas por modelo: la compatibilidad es tan estrecha que casi siempre toca devolverlas.",
        ],
      },
      {
        heading: "En que si conviene ahorrar y en que no",
        paragraphs: [
          "Un regalo no tiene que ser caro para estar bien elegido, pero hay una linea clara entre gastar poco y gastar mal.",
        ],
        bullets: [
          "Si conviene ahorrar: red elastica, cepillo de cadena, stickers, reflectivos y bolsa de pierna. Su funcion es simple y si fallan, la consecuencia es una molestia.",
          "Si no conviene ahorrar: soporte de celular, candados y punos. Si fallan, la consecuencia es un telefono en el suelo, una moto que se llevan o un manubrio sin control.",
          "La regla no es el precio: es la consecuencia del fallo. Preguntate que pasa si esto falla mientras maneja y deja que la respuesta decida el presupuesto.",
        ],
      },
      {
        heading: "Como se arma un regalo que se ve bien",
        paragraphs: [
          "El empaque y la nota importan mas de lo que parece, sobre todo en regalos que se ven caros pero no se ven usados.",
        ],
        bullets: [
          "Anota a mano por que elegiste ese regalo. La razon es la parte que se recuerda.",
          "Si el regalo es de talla, anota la medida en la tarjeta: le sirve para el futuro y evita el misterio.",
          "No aplastes el empaque de los reflectivos ni de los viniles: una esquina doblada los marca para siempre.",
          "Si compras dos piezas que se complementan, juntalas en el mismo pedido: el conjunto se ve mucho mas pensado que dos regalos sueltos.",
          "Si el regalo es de temporada, mandalo antes de que empiece la lluvia y no despues.",
        ],
      },
      {
        heading: "Envio, tiempos y como pedir",
        paragraphs: [
          "Todos los productos de la tienda se envian por courier internacional con guia rastreable, en un promedio de 7 a 15 dias habiles a todo Mexico. Como el regalo depende de una fecha, conviene tomar en cuenta ese tiempo y no la ultima semana.",
          "Si el regalo tiene que llegar para una fecha fija, haz el pedido con tiempo de sobra y mandale a tu persona el numero de guia en cuanto lo recibas. Es el gesto que mas se agradece cuando se trata de un pedido que llega tarde.",
          "Si tienes duda de que modelo encaja, escribe antes de comprar: es mas barato confirmar la medida que devolver un paquete.",
        ],
      },
      {
        heading: "El siguiente paso",
        paragraphs: [
          "Los regalos mas pedidos y los que mejor funcionan estan en: el kit soporte celular moto antivibracion en /producto/kit-soporte-celular-moto-antivibracion-360, la red elastica en /producto/red-elastica-porta-carga-moto, los punos universales en /producto/punos-moto-universales-22-25mm, el cepillo de cadena en /producto/cepillo-limpiador-cadena-moto-3d y los stickers en /producto/stickers-moto-genericos y /producto/stickers-reflectivos-moto-casco.",
          "Para ver todo el catalogo ordenado por tipo de uso, esta la tienda en /tienda y las colecciones en /coleccion/soportes-celular, /coleccion/punos-y-comodidad, /coleccion/mantenimiento y /coleccion/stickers-y-personalizacion.",
        ],
      },
    ],
    relatedProducts: [
      "kit-soporte-celular-moto-antivibracion-360",
      "punos-moto-universales-22-25mm",
      "red-elastica-porta-carga-moto",
      "stickers-moto-genericos",
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getAllGuides(): Guide[] {
  return guides;
}
