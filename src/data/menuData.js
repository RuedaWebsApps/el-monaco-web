export const business = {
  name: 'Ahumados al Barril El Mónaco',
  nameEn: 'Barrel Smoked El Mónaco',
  short: 'El Mónaco',
  city: 'Austin, Texas',
  phone: '737-429-8756',
  phoneRaw: '7374298756',
  whatsapp: '17374298756',
  email: 'elmonaco1988@yahoo.com',
  tiktok: 'https://www.tiktok.com/@asadosalbarrilelmonaco23?_r=1&_t=ZT-9AwAsKphQz8',
  facebook: 'https://www.facebook.com/share/19jqybPCRT/?mibextid=wwXIfr',
  quoteEs: 'En El Mónaco no se prende una parrilla… se domina el fuego.',
  quoteEn: "At El Mónaco, we don't light a grill… we master the fire.",
  included:
    'Todos nuestros platos incluyen las salsas de la casa, guacamole y ají ahumado.',
  includedEn:
    'All our plates include house sauces, guacamole and smoked chili sauce.',
};

export const waLink = (text = 'Hola El Mónaco, quisiera hacer un pedido.') =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

const P = '/images/platos/';

export const sections = [
  { id: 'platos', name: 'Platos', en: 'Main Dishes', groups: ['especiales', 'cortes', 'bandejas'] },
  { id: 'acompanamientos', name: 'Acompañamientos', en: 'Side Orders', groups: ['acompanantes'] },
  { id: 'salsas', name: 'Salsas', en: 'Sauces', groups: ['salsas'] },
];

export const categories = [
  {
    id: 'especiales',
    name: 'Especial de la Casa',
    en: 'House Specials',
    note: 'Con papa o yuca · With potato or yuca.',
  },
  {
    id: 'cortes',
    name: 'Cortes al Barril',
    en: 'Barrel Smoked Cuts',
    note: 'Cada corte incluye chorizo, longaniza, yuca, papa y plátano macho maduro · Each cut includes chorizo, sausage, yuca, potato and sweet ripe plantain.',
  },
  {
    id: 'bandejas',
    name: 'Especiales del Barril',
    en: 'Barrel Specials',
    note: 'Para compartir · Platters & boards.',
  },
  {
    id: 'acompanantes',
    name: 'Acompañantes de la Casa',
    en: 'Side Orders',
    note: 'Guarniciones al barril · House side orders.',
  },
  {
    id: 'salsas',
    name: 'Salsas de la Casa',
    en: 'House Sauces',
    note: 'Incluidas con todos nuestros platos · Included with all our plates.',
  },
];

// image: null -> se muestra en lista bilingüe sin foto
export const dishes = [
  // ESPECIAL DE LA CASA / HOUSE SPECIALS
  {
    id: 'chicharron',
    category: 'especiales',
    name: 'Chicharrón al Barril',
    en: 'Barrel-Smoked Pork Belly',
    description: 'Crujiente chicharrón al barril con papa o yuca.',
    descriptionEn: 'Crispy barrel-smoked pork belly with potato or yuca.',
    image: P + 'chicharron.webp',
  },
  {
    id: 'costichicharron',
    category: 'especiales',
    name: 'Costichicharrón al Barril',
    en: 'Barrel-Smoked Pork Rib with Crispy Skin',
    description: 'Costilla de cerdo con cuero ahumada al barril, con papa o yuca.',
    descriptionEn: 'Barrel-smoked pork rib with crispy skin, with potato or yuca.',
    image: P + 'costichicharron.webp',
  },
  {
    id: 'media-plancha-pork-belly',
    category: 'especiales',
    name: 'Media Plancha de Pork Belly Crispy',
    en: 'Half Slab Crispy Barrel-Smoked Pork Belly',
    description: 'Media plancha de chicharrón carnudo al barril con piel dorada ultra crujiente.',
    descriptionEn: 'Half slab of meaty barrel-smoked pork belly with ultra-crispy golden skin.',
    image: P + 'media-plancha-pork-belly-crispy.webp',
  },
  {
    id: 'maduro-queso',
    category: 'especiales',
    name: 'Maduro con Queso',
    en: 'Ripe Plantain with Cheese',
    description: 'Plátano macho maduro asado al barril cubierto con abundante queso fundido.',
    descriptionEn: 'Barrel-roasted sweet ripe plantain topped with melted cheese.',
    image: P + 'maduro-con-queso.webp',
  },

  // CORTES AL BARRIL / BARREL SMOKED CUTS
  {
    id: 'ribeye',
    category: 'cortes',
    name: 'Ribeye al Barril',
    en: 'Barrel Smoked Ribeye',
    description:
      'Cada corte incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    descriptionEn:
      'Each cut includes chorizo, sausage, yuca, potato and sweet ripe plantain.',
    image: P + 'ribeye.webp',
  },
  {
    id: 'new-york',
    category: 'cortes',
    name: 'New York al Barril',
    en: 'Barrel Smoked New York Strip',
    description:
      'Cada corte incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    descriptionEn:
      'Each cut includes chorizo, sausage, yuca, potato and sweet ripe plantain.',
    image: P + 'new-york.webp',
  },
  {
    id: 'picana',
    category: 'cortes',
    name: 'Picaña al Barril',
    en: 'Barrel Smoked Picanha',
    description:
      'Cada corte incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    descriptionEn:
      'Each cut includes chorizo, sausage, yuca, potato and sweet ripe plantain.',
    image: P + 'picana.webp',
  },
  {
    id: 'costillas-angus',
    category: 'cortes',
    name: 'Costilla de Res Angus al Barril',
    en: 'Barrel Smoked Angus Beef Rib',
    description:
      'Cada corte incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    descriptionEn:
      'Each cut includes chorizo, sausage, yuca, potato and sweet ripe plantain.',
    image: P + 'costillas-angus.webp',
  },
  {
    id: 'tuetano-al-barril',
    category: 'cortes',
    name: 'Tuétano al Barril',
    en: 'Barrel Smoked Bone Marrow',
    description:
      'Tuétano de res asado y ahumado lentamente al barril, servido con bastones de yuca dorada.',
    descriptionEn:
      'Slow barrel-smoked beef bone marrow served with golden fried yuca sticks.',
    image: P + 'tuetano-al-barril.webp',
  },
  {
    id: 'cordero',
    category: 'cortes',
    name: 'Costilla de Cordero al Barril',
    en: 'Barrel Smoked Lamb Rib',
    description:
      'Cada corte incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    descriptionEn:
      'Each cut includes chorizo, sausage, yuca, potato and sweet ripe plantain.',
    image: P + 'costilla-cordero.webp',
  },
  {
    id: 'entrana',
    category: 'cortes',
    name: 'Entraña al Barril',
    en: 'Barrel Smoked Skirt Steak',
    description:
      'Cada corte incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    descriptionEn:
      'Each cut includes chorizo, sausage, yuca, potato and sweet ripe plantain.',
    image: null,
  },

  // ESPECIALES DEL BARRIL / BARREL SPECIALS
  {
    id: 'bandeja-monaco',
    category: 'bandejas',
    name: 'Bandeja El Mónaco',
    en: 'El Mónaco Platter',
    description:
      'Una combinación de longaniza artesanal, carne de res, costilla de cerdo y chicharrón al barril, con papa o yuca.',
    descriptionEn:
      'A combination of artisanal sausage, beef, pork rib and barrel-smoked pork belly, with potato or yuca.',
    image: P + 'bandeja-el-monaco.webp',
  },
  {
    id: 'bandeja-charro',
    category: 'bandejas',
    name: 'Bandeja del Charro',
    en: 'Charro Platter',
    description:
      'Nuestra parrillada más completa con chorizo colombiano, longaniza artesanal, dos costichicharrones, carne de res, costilla de cerdo, costilla de cordero, papa o yuca y plátano maduro.',
    descriptionEn:
      'Our most complete grill with Colombian chorizo, artisanal sausage, two COSTICHICHARRONES, beef, pork rib, lamb rib, potato or yuca, and sweet ripe plantain.',
    image: P + 'bandeja-del-charro.webp',
  },
  {
    id: 'bandeja-montanera',
    category: 'bandejas',
    name: 'Bandeja Montañera',
    en: 'Montañera Platter',
    description:
      'Base de queso, chicharrón al barril, morcilla, chorizo colombiano y plátano maduro.',
    descriptionEn:
      'Cheese base, barrel-smoked pork belly, blood sausage, Colombian chorizo, sweet ripe plantain.',
    image: P + 'bandeja-montanera.webp',
  },
  {
    id: 'bandeja-moro',
    category: 'bandejas',
    name: 'Bandeja de Moro (dos tipos de carne)',
    en: 'Moro Rice Platter (two meat options)',
    description:
      'Arroz moro con dos opciones de carne a elegir: costilla de cerdo, carne de res o chicharrón al barril, y plátano macho frito.',
    descriptionEn:
      'Moro rice with two meat options to choose from: pork rib, beef or barrel-smoked pork belly, with fried sweet ripe plantain.',
    image: null,
  },
  {
    id: 'tabla-premium',
    category: 'bandejas',
    name: 'Tabla Premium',
    en: 'Premium Barrel-Smoked Board',
    description:
      'Selección de carnes premium al barril con chorizo colombiano, longaniza artesanal, carne de res, ribeye, entraña de res, costilla de cordero, papa, yuca y plátano maduro.',
    descriptionEn:
      'Premium barrel-smoked meat selection with Colombian chorizo, artisanal sausage, beef, ribeye, skirt steak, lamb rib, potato, yuca and sweet ripe plantain.',
    image: null,
  },

  // ACOMPAÑANTES DE LA CASA / SIDE ORDERS
  {
    id: 'arroz-moro',
    category: 'acompanantes',
    name: 'Arroz Moro',
    en: 'Moro Rice',
    description: 'Arroz moro tradicional de la casa.',
    descriptionEn: 'Traditional house Moro rice.',
    image: P + 'arroz-moro.webp',
  },
  {
    id: 'tajadas-platano',
    category: 'acompanantes',
    name: 'Tajadas de Plátano',
    en: 'Fried Sweet Plantain Slices',
    description: 'Tajadas de plátano macho maduro fritas.',
    descriptionEn: 'Fried sweet ripe plantain slices.',
    image: P + 'tajadas-de-platano.webp',
  },
  {
    id: 'yuca-frita',
    category: 'acompanantes',
    name: 'Yuca Frita',
    en: 'Fried Yuca',
    description: 'Bastones de yuca frita dorados y crujientes.',
    descriptionEn: 'Crispy golden fried yuca sticks.',
    image: P + 'yuca-frita.webp',
  },
  {
    id: 'trocitos-yuca',
    category: 'acompanantes',
    name: 'Trocitos de Yuca',
    en: 'Crispy Yuca Bites',
    description: 'Bocados de yuca dorados al punto.',
    descriptionEn: 'Golden fried yuca bites.',
    image: P + 'trocitos-de-yuca.webp',
  },
  { id: 'papa', category: 'acompanantes', name: 'Papa', en: 'Baked Potato', description: '', descriptionEn: '', image: null },
  { id: 'yuca', category: 'acompanantes', name: 'Yuca', en: 'Yuca', description: '', descriptionEn: '', image: null },
  { id: 'maduro-asado', category: 'acompanantes', name: 'Maduro Asado', en: 'Ripe Plantain', description: '', descriptionEn: '', image: null },
  { id: 'morcilla', category: 'acompanantes', name: 'Morcilla', en: 'Blood Sausage', description: '', descriptionEn: '', image: null },
  { id: 'chorizo', category: 'acompanantes', name: 'Chorizo Artesanal', en: 'Artisanal Chorizo', description: '', descriptionEn: '', image: null },
  { id: 'longaniza', category: 'acompanantes', name: 'Longaniza', en: 'Artisanal Sausage', description: '', descriptionEn: '', image: null },

  // SALSAS / SAUCES
  {
    id: 'aji-ahumado',
    category: 'salsas',
    name: 'Ají Ahumado',
    en: 'Smoked Chili Sauce',
    description: 'Ají artesanal ahumado de la casa. Incluido con todos los platos.',
    descriptionEn: 'House barrel-smoked chili sauce. Included with all plates.',
    image: P + 'aji-ahumado.webp',
  },
  {
    id: 'chimichurri-ahumado',
    category: 'salsas',
    name: 'Chimichurri Ahumado',
    en: 'Smoked Chimichurri Sauce',
    description: 'Salsa chimichurri ahumada de la casa. Incluida con todos los platos.',
    descriptionEn: 'House smoked chimichurri sauce. Included with all plates.',
    image: P + 'chimichurri-ahumado.webp',
  },
  {
    id: 'guacamole',
    category: 'salsas',
    name: 'Guacamole',
    en: 'Fresh Guacamole',
    description: 'Guacamole fresco de la casa. Incluido con todos los platos.',
    descriptionEn: 'Fresh house guacamole. Included with all plates.',
    image: P + 'guacamole.webp',
  },
  {
    id: 'salsa-queso',
    category: 'salsas',
    name: 'Salsa de Queso',
    en: 'Cheese Sauce',
    description: 'Adicional.',
    descriptionEn: 'Additional sauce.',
    image: null,
  },
];
