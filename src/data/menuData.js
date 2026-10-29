export const businessInfo = {
  name: "Ahumados Al Barril El Mónaco",
  shortName: "El Mónaco",
  slogan: "100% Al Barril",
  manifestoEs: "En El Mónaco no se prende una parrilla... se domina el fuego.",
  manifestoEn: "At El Mónaco, we don't light a grill... we master the fire.",
  city: "Austin, TX",
  phone: "737-429-8756",
  phoneRaw: "7374298756",
  whatsappFormatted: "+1 (737) 429-8756",
  whatsappUrl: "https://wa.me/17374298756?text=Hola%20El%20M%C3%B3naco,%20quiero%20hacer%20un%20pedido%20o%20consultar%20el%20men%C3%BA",
  clientName: "Francisco Borja",
  email: "elmonaco1988@yahoo.com",
  tiktok: "https://www.tiktok.com/@asadosalbarrilelmonaco23?_r=1&_t=ZT-9AwAsKphQz8",
  tiktokUser: "@asadosalbarrilelmonaco23",
  facebook: "https://www.facebook.com/share/19jqybPCRT/?mibextid=wwXIfr",
  includeNote: "Todos nuestros platos incluyen las salsas de la casa, guacamole y ají ahumado artesanal.",
  includeNoteEn: "All our plates include house sauces, guacamole and smoked chili sauce.",
};

export const menuCategories = [
  { id: 'all', name: 'Todo el Menú', icon: 'Flame' },
  { id: 'especiales', name: 'Especiales de la Casa', icon: 'Award' },
  { id: 'cortes', name: 'Cortes al Barril', icon: 'Utensils' },
  { id: 'bandejas', name: 'Bandejas & Parrilladas', icon: 'Users' },
  { id: 'acompanantes', name: 'Acompañantes', icon: 'Sparkles' },
  { id: 'adicionales', name: 'Salsas Adicionales', icon: 'PlusCircle' },
];

export const menuItems = [
  // ESPECIALES DE LA CASA
  {
    id: 'chicharron-al-barril',
    category: 'especiales',
    title: 'Chicharrón al Barril',
    titleEn: 'Crispy Barrel-Smoked Pork Belly',
    badge: 'Estrella de la Casa',
    description: 'Crujiente chicharrón cocido lentamente al barril para lograr un cuerito dorado ultra crocante y carne suave y jugosa. Acompañado con papa o yuca al vapor y nuestras salsas.',
    descriptionEn: 'Crispy barrel-smoked pork belly with potato or yuca, guacamole and house sauces.',
    image: '/images/platos/chicharron-al-barril.png',
    cardImage: '/images/platos/chicharron-al-barril-card.jpg',
    popular: true,
    highlights: ['100% al carbón', 'Piel ultra crujiente', 'Incluye salsas caseras']
  },
  {
    id: 'costichicharron-al-barril',
    category: 'especiales',
    title: 'Costichicharrón al Barril',
    titleEn: 'Barrel-Smoked Pork Rib with Crispy Skin',
    badge: 'El Más Pedido',
    description: 'Nuestra legendaria costilla de cerdo con cuero ahumada con precisión al barril. La combinación maestra: costilla tierna y ahumada con el chicharrón crujiente arriba. Servido con papa o yuca.',
    descriptionEn: 'Barrel-smoked pork rib with crispy skin, with potato or yuca.',
    image: '/images/platos/costichicharron-al-barril.png',
    cardImage: '/images/platos/costichicharron-al-barril-card.jpg',
    popular: true,
    highlights: ['Corte prémium', 'Tierno & crocante', 'Ahumado lento']
  },

  // CORTES AL BARRIL
  {
    id: 'ribeye-al-barril',
    category: 'cortes',
    title: 'Ribeye al Barril',
    titleEn: 'Barrel Smoked Ribeye',
    badge: 'Corte Prémium',
    description: 'Generoso corte de Ribeye marmoleado, ahumado al barril logrando un sellado jugoso y un aroma ahumado incomparable. Cada corte incluye chorizo, longaniza artesanal, yuca, papa y plátano macho maduro.',
    descriptionEn: 'Premium Ribeye smoked in barrel. Includes artisanal sausage, chorizo, yuca, potato and sweet ripe plantain.',
    image: '/images/platos/ribeye-al-barril.png',
    cardImage: '/images/platos/ribeye-al-barril-card.jpg',
    popular: true,
    highlights: ['Marmoleado perfecto', 'Incluye embutidos artesanales', 'Guarnición completa']
  },
  {
    id: 'picanha-al-barril',
    category: 'cortes',
    title: 'Picaña al Barril',
    titleEn: 'Barrel Smoked Picanha',
    badge: 'Tradición Brasileña & Ahumada',
    description: 'Corte noble con su capa dorada de grasa ahumada en su punto, tierna y rebosante de jugo. Servida con chorizo, longaniza artesanal, yuca, papa y plátano macho maduro.',
    descriptionEn: 'Juicy barrel-smoked picanha. Served with chorizo, artisanal sausage, yuca, potato and sweet plantain.',
    image: '/images/platos/picanha-al-barril.png',
    cardImage: '/images/platos/picanha-al-barril-card.jpg',
    popular: true,
    highlights: ['Textura ultrasuave', 'Sabor profundo', 'Salsas de la casa']
  },
  {
    id: 'costilla-res-angus',
    category: 'cortes',
    title: 'Costilla de Res Angus al Barril',
    titleEn: 'Barrel Smoked Angus Beef Rib',
    badge: 'Angus Beef',
    description: 'Costilla de res calidad Angus cocinada durante horas a fuego indirecto en el barril hasta desprenderse del hueso. Con chorizo, longaniza, yuca, papa y plátano maduro.',
    descriptionEn: 'Slow barrel-smoked Angus beef rib. Includes chorizo, artisanal sausage, yuca, potato and ripe plantain.',
    image: '/images/platos/costilla-res-angus.png',
    cardImage: '/images/platos/costilla-res-angus-card.jpg',
    popular: false,
    highlights: ['Calidad Angus', 'Carne tierna al desprendimiento', 'Fuego controlado']
  },
  {
    id: 'entrana-al-barril',
    category: 'cortes',
    title: 'Entraña al Barril',
    titleEn: 'Barrel Smoked Skirt Steak',
    badge: 'Pura Jugosidad',
    description: 'Entraña jugosa con el inconfundible toque ahumado al barril. Servida con chorizo, longaniza artesanal, yuca, papa y plátano macho maduro con ají ahumado y guacamole.',
    descriptionEn: 'Juicy skirt steak smoked to perfection in our barrel. Includes full side combo.',
    image: '/images/platos/entrana-al-barril.png',
    cardImage: '/images/platos/entrana-al-barril-card.jpg',
    popular: false,
    highlights: ['Corte clásico parrillero', 'Intenso sabor a brasa', 'Acompañamientos']
  },
  {
    id: 'costilla-cordero-al-barril',
    category: 'cortes',
    title: 'Costilla de Cordero al Barril',
    titleEn: 'Barrel Smoked Lamb Rib',
    badge: 'Gourmet',
    description: 'Exquisitas costillitas de cordero sazonadas con hierbas y ahumadas al barril con leña y carbón. Incluye chorizo, longaniza artesanal, yuca, papa y plátano macho maduro.',
    descriptionEn: 'Gourmet barrel-smoked lamb ribs with artisanal chorizo, sausage, yuca, potato and sweet plantain.',
    image: '/images/galeria-8.jpg',
    cardImage: '/images/galeria-8.jpg',
    popular: false,
    highlights: ['Sabor selecto', 'Hierbas y especias secretas', 'Ahumado fino']
  },

  // BANDEJAS & PARRILLADAS
  {
    id: 'bandeja-el-monaco',
    category: 'bandejas',
    title: 'Bandeja El Mónaco',
    titleEn: 'El Mónaco Signature Platter',
    badge: 'La Favorita',
    description: 'Una auténtica fiesta para los amantes de la carne: suculenta combinación de longaniza artesanal, carne de res ahumada, costilla de cerdo y crujiente chicharrón al barril, acompañado de papa o yuca al gusto.',
    descriptionEn: 'Combination of artisanal sausage, beef, pork rib and barrel-smoked pork belly with potato or yuca.',
    image: '/images/platos/bandeja-el-monaco.png',
    cardImage: '/images/platos/bandeja-el-monaco-card.jpg',
    popular: true,
    highlights: ['4 carnes distintas', 'Chicharrón incluido', 'Ideal para compartir']
  },
  {
    id: 'bandeja-del-charro',
    category: 'bandejas',
    title: 'Bandeja del Charro',
    titleEn: 'Charro Feast (El Banquete Supremo)',
    badge: 'Parrillada Gigante',
    description: 'Nuestra parrillada más colosal y completa. Incluye chorizo colombiano, longaniza artesanal, DOS COSTICHICHARRONES enteros, carne de res, costilla de cerdo, costilla de cordero, papa o yuca y plátano maduro.',
    descriptionEn: 'Our ultimate meat feast: Colombian chorizo, artisanal sausage, 2 Costichicharrones, beef, pork rib, lamb rib, potato/yuca and sweet plantain.',
    image: '/images/platos/bandeja-del-charro.png',
    cardImage: '/images/platos/bandeja-del-charro-card.jpg',
    popular: true,
    highlights: ['2 Costichicharrones', '5 tipos de cortes y embutidos', 'Para toda la familia']
  },
  {
    id: 'tabla-premium',
    category: 'bandejas',
    title: 'Tabla Prémium El Mónaco',
    titleEn: 'Premium Barrel-Smoked Board',
    badge: 'Selección Exclusiva',
    description: 'Nivel gastronómico superior: selección de carnes prémium al barril con chorizo colombiano, longaniza artesanal, carne de res, ribeye al barril, entraña de res, costilla de cordero, papa, yuca y plátano maduro.',
    descriptionEn: 'Premium meat selection: Colombian chorizo, artisanal sausage, beef, ribeye, skirt steak, lamb rib, potato, yuca and sweet ripe plantain.',
    image: '/images/platos/tabla-premium.png',
    cardImage: '/images/platos/tabla-premium-card.jpg',
    popular: true,
    highlights: ['Ribeye + Entraña + Cordero', 'Presentación en tabla rústica', 'Experiencia VIP']
  },
  {
    id: 'bandeja-montanera',
    category: 'bandejas',
    title: 'Bandeja Montañera',
    titleEn: 'Montañera Platter',
    badge: 'Tradicional',
    description: 'Generosa base de queso fundido, chicharrón al barril con piel crocante, morcilla tradicional artesanal, chorizo colombiano y plátano macho maduro caramelizado.',
    descriptionEn: 'Melted cheese base, barrel-smoked pork belly, artisanal blood sausage, Colombian chorizo and sweet plantain.',
    image: '/images/galeria-7.jpg',
    cardImage: '/images/galeria-7.jpg',
    popular: false,
    highlights: ['Base de queso derretido', 'Morcilla criolla', 'Chicharrón crocante']
  },

  // ACOMPAÑANTES
  {
    id: 'maduro-con-queso',
    category: 'acompanantes',
    title: 'Maduro con Queso',
    titleEn: 'Sweet Plantain with Melted Cheese',
    badge: 'Muy Solicitado',
    description: 'Plátano maduro horneado cubierto con abundante queso derretido en hilo. Contraste dulce y salado perfecto.',
    descriptionEn: 'Slow-baked ripe plantain covered with savory melted cheese.',
    image: '/images/platos/maduro-con-queso.png',
    cardImage: '/images/platos/maduro-con-queso-card.jpg',
    popular: true,
    highlights: ['Queso derretido en hilo', 'Sabor dulce y salado']
  },
  {
    id: 'maduro-asado',
    category: 'acompanantes',
    title: 'Maduro Asado',
    titleEn: 'Ripe Sweet Plantain',
    description: 'Plátano macho maduro asado lentamente al calor del barril, suave, dulce y acaramelado.',
    descriptionEn: 'Sweet ripe plantain slow-roasted in the barrel embers.',
    image: '/images/platos/maduro-asado.png',
    cardImage: '/images/platos/maduro-asado-card.jpg',
    popular: false,
    highlights: ['Caramelizado natural']
  },
  {
    id: 'yuca-vapor',
    category: 'acompanantes',
    title: 'Yuca al Vapor',
    titleEn: 'Steamed Soft Yuca',
    description: 'Trozos de yuca suave y harinosa, el acompañamiento tradicional predilecto para el chicharrón y las costillas.',
    descriptionEn: 'Soft traditional yuca, the quintessential pairing for smoked meats.',
    image: '/images/platos/yuca-vapor.png',
    cardImage: '/images/platos/yuca-vapor-card.jpg',
    popular: false,
    highlights: ['Suave y tierna']
  },
  {
    id: 'papa-cocida',
    category: 'acompanantes',
    title: 'Papa al Vapor / Asada',
    titleEn: 'Baked / Steamed Potato',
    description: 'Papas campesinas cocidas en su punto para acompañar las carnes y sumergir en las salsas caseras.',
    descriptionEn: 'Tender baked potatoes, perfect for dipping in house sauces.',
    image: '/images/platos/papa-cocida.png',
    cardImage: '/images/platos/papa-cocida-card.jpg',
    popular: false,
    highlights: ['Ideal con ají y guacamole']
  },
  {
    id: 'arroz-moro',
    category: 'acompanantes',
    title: 'Arroz Moro Casero',
    titleEn: 'Seasoned Moro Rice',
    description: 'Arroz cocinado con frijoles negros sazonados con especias de la casa, pimientos y fondo criollo.',
    descriptionEn: 'Homemade seasoned black bean and rice pilaf.',
    image: '/images/platos/arroz-moro.png',
    cardImage: '/images/platos/arroz-moro-card.jpg',
    popular: false,
    highlights: ['Receta tradicional criolla']
  },
  {
    id: 'morcilla-artesanal',
    category: 'acompanantes',
    title: 'Morcilla Artesanal',
    titleEn: 'Artisanal Blood Sausage',
    description: 'Elaborada artesanalmente con arroz y finas especias, dorada por fuera y suave por dentro.',
    descriptionEn: 'Traditional artisanal blood sausage prepared with rice and house spices.',
    image: '/images/platos/morcilla-artesanal.png',
    cardImage: '/images/platos/morcilla-artesanal-card.jpg',
    popular: false,
    highlights: ['Elaboración propia']
  },

  // ADICIONALES
  {
    id: 'salsa-queso',
    category: 'adicionales',
    title: 'Salsa de Queso Cremosa',
    titleEn: 'Creamy Melted Cheese Sauce',
    description: 'Cremosa y tibia salsa de quesos fundidos para bañar tus chicharrones, papas o plátano maduro.',
    descriptionEn: 'Warm melted cheese dipping sauce.',
    image: '/images/platos/salsa-queso.png',
    cardImage: '/images/platos/salsa-queso-card.jpg',
    popular: true,
    highlights: ['Para untar todo']
  },
  {
    id: 'guacamole-aji-extra',
    category: 'adicionales',
    title: 'Dúo Extra de Guacamole & Ají Ahumado',
    titleEn: 'Extra Guacamole & Smoked Chili Sauce',
    description: 'Porción adicional de nuestro auténtico guacamole fresco y ají ahumado artesanal preparado a diario.',
    descriptionEn: 'Extra serving of fresh handmade guacamole and barrel-smoked hot salsa.',
    image: '/images/galeria-1.jpg',
    cardImage: '/images/galeria-1.jpg',
    popular: false,
    highlights: ['Frescura diaria al 100%']
  }
];

export const galleryImages = [
  { src: '/images/platos/chicharron-al-barril.png', title: 'Chicharrón Crocante al Barril', desc: 'Cocción lenta a fuego indirecto' },
  { src: '/images/platos/costichicharron-al-barril.png', title: 'Costichicharrón Dorado', desc: 'El rey de la parrilla' },
  { src: '/images/platos/bandeja-el-monaco.png', title: 'Bandeja El Mónaco Completa', desc: 'Festín de carnes ahumadas' },
  { src: '/images/platos/bandeja-del-charro.png', title: 'Bandeja del Charro', desc: 'Nuestra combinación más colosal' },
  { src: '/images/platos/ribeye-al-barril.png', title: 'Ribeye al Carbón de Barril', desc: 'Corte grueso marmoleado' },
  { src: '/images/platos/picanha-al-barril.png', title: 'Picaña Jugosa', desc: 'Sabor y textura insuperable' },
  { src: '/images/platos/costilla-res-angus.png', title: 'Costillas Angus Ahumadas', desc: 'Suavidad que se desprende sola' },
  { src: '/images/platos/tabla-premium.png', title: 'Tabla Prémium El Mónaco', desc: 'Para celebraciones y reuniones' },
  { src: '/images/platos/maduro-con-queso.png', title: 'Plátano Maduro con Queso', desc: 'El toque dulce indispensable' },
  { src: '/images/platos/arroz-moro.png', title: 'Arroz Moro Casero', desc: 'Receta criolla tradicional' },
  { src: '/images/platos/morcilla-artesanal.png', title: 'Morcilla Artesanal', desc: 'Sabor criollo ahumado' },
  { src: '/images/platos/entrana-al-barril.png', title: 'Entraña al Barril', desc: 'Sellado ahumado magistral' },
];

export const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Cliente en Austin, TX",
    comment: "El mejor chicharrón al barril que he probado en todo Texas. La piel es ultra crujiente y la carne super tierna. El servicio de Francisco es de primera.",
    stars: 5,
  },
  {
    name: "Mariana Silva",
    role: "Foodie & Eventos",
    comment: "Pedimos la Bandeja del Charro para el cumpleaños de mi esposo y quedamos impresionados. Todo recién sacado del barril, las salsas y el guacamole son de otro mundo.",
    stars: 5,
  },
  {
    name: "Andrés Velásquez",
    role: "Cliente Frecuente",
    comment: "100% recomendado. La técnica del barril se nota en el sabor ahumado sutil y la jugosidad. No grasoso, limpio y con porciones bien despachadas.",
    stars: 5,
  }
];
