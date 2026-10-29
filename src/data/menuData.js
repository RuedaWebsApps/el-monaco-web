export const business = {
  name: 'Ahumados al Barril El Mónaco',
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
};

export const waLink = (text = 'Hola El Mónaco, quisiera hacer un pedido.') =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

const P = '/images/platos/';

export const categories = [
  {
    id: 'especiales',
    name: 'Especiales de la Casa',
    en: 'House Specials',
    note: 'Con papa o yuca.',
  },
  {
    id: 'cortes',
    name: 'Cortes al Barril',
    en: 'Barrel Smoked Cuts',
    note: 'Cada corte incluye chorizo, longaniza, yuca, papa y plátano maduro.',
  },
  {
    id: 'bandejas',
    name: 'Especiales del Barril',
    en: 'Barrel Specials',
    note: 'Para compartir.',
  },
  {
    id: 'acompanantes',
    name: 'Acompañantes',
    en: 'Side Orders',
    note: 'Acompañantes de la casa.',
  },
  {
    id: 'salsas',
    name: 'Salsas',
    en: 'Sauces',
    note: 'Las salsas de la casa acompañan todos los platos.',
  },
];

// image: null  -> se muestra solo en lista, sin foto
export const dishes = [
  // Especiales de la casa
  {
    id: 'chicharron',
    category: 'especiales',
    name: 'Chicharrón al Barril',
    en: 'Barrel-smoked pork belly',
    description: 'Crujiente chicharrón al barril con papa o yuca.',
    image: P + 'chicharron.webp',
  },
  {
    id: 'costichicharron',
    category: 'especiales',
    name: 'Costichicharrón al Barril',
    en: 'Smoked pork rib with crispy skin',
    description: 'Costilla de cerdo con cuero, ahumada al barril, con papa o yuca.',
    image: P + 'costichicharron.webp',
  },

  // Cortes
  {
    id: 'ribeye',
    category: 'cortes',
    name: 'Ribeye al Barril',
    en: 'Barrel smoked ribeye',
    description:
      'Incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    image: P + 'ribeye.webp',
  },
  {
    id: 'picana',
    category: 'cortes',
    name: 'Picaña al Barril',
    en: 'Barrel smoked picanha',
    description:
      'Incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    image: P + 'picana.webp',
  },
  {
    id: 'angus',
    category: 'cortes',
    name: 'Costilla de Res Angus al Barril',
    en: 'Barrel smoked Angus beef rib',
    description:
      'Incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    image: P + 'costilla-res-angus.webp',
  },
  {
    id: 'cordero',
    category: 'cortes',
    name: 'Costilla de Cordero al Barril',
    en: 'Barrel smoked lamb rib',
    description:
      'Incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    image: P + 'costilla-cordero.webp',
  },
  {
    id: 'entrana',
    category: 'cortes',
    name: 'Entraña al Barril',
    en: 'Barrel smoked skirt steak',
    description:
      'Incluye chorizo, longaniza, yuca, papa y plátano macho maduro.',
    image: P + 'entrana.webp',
  },

  // Especiales del barril
  {
    id: 'bandeja-monaco',
    category: 'bandejas',
    name: 'Bandeja El Mónaco',
    en: 'El Mónaco platter',
    description:
      'Longaniza artesanal, carne de res, costilla de cerdo y chicharrón al barril, con papa o yuca.',
    image: P + 'bandeja-el-monaco.webp',
  },
  {
    id: 'bandeja-charro',
    category: 'bandejas',
    name: 'Bandeja del Charro',
    en: 'Charro platter',
    description:
      'Nuestra parrillada más completa: chorizo colombiano, longaniza artesanal, dos costichicharrones, carne de res, costilla de cerdo, costilla de cordero, papa o yuca y plátano maduro.',
    image: P + 'bandeja-del-charro.webp',
  },
  {
    id: 'bandeja-montanera',
    category: 'bandejas',
    name: 'Bandeja Montañera',
    en: 'Montañera platter',
    description:
      'Base de queso, chicharrón al barril, morcilla, chorizo colombiano y plátano maduro.',
    image: P + 'bandeja-montanera.webp',
  },
  {
    id: 'bandeja-moro',
    category: 'bandejas',
    name: 'Bandeja de Moro',
    en: 'Moro rice platter · dos tipos de carne',
    description:
      'Arroz moro con dos carnes a elegir: costilla de cerdo, carne de res o chicharrón al barril, y plátano macho frito.',
    image: null,
  },
  {
    id: 'tabla-premium',
    category: 'bandejas',
    name: 'Tabla Premium',
    en: 'Premium board',
    description:
      'Selección de carnes premium al barril con chorizo colombiano, longaniza artesanal, carne de res, ribeye, entraña, costilla de cordero, papa, yuca y plátano maduro.',
    image: P + 'tabla-premium.webp',
  },

  // Acompañantes
  { id: 'papa', category: 'acompanantes', name: 'Papa', en: 'Baked potato', description: '', image: null },
  { id: 'yuca', category: 'acompanantes', name: 'Yuca', en: 'Yuca', description: '', image: null },
  { id: 'maduro-asado', category: 'acompanantes', name: 'Maduro asado', en: 'Ripe plantain', description: '', image: null },
  {
    id: 'maduro-queso',
    category: 'acompanantes',
    name: 'Maduro con queso',
    en: 'Ripe plantain with cheese',
    description: '',
    image: P + 'maduro-con-queso.webp',
  },
  {
    id: 'arroz-moro',
    category: 'acompanantes',
    name: 'Arroz moro',
    en: 'Moro rice',
    description: '',
    image: P + 'arroz-moro.webp',
  },
  { id: 'morcilla', category: 'acompanantes', name: 'Morcilla', en: 'Blood sausage', description: '', image: null },
  { id: 'chorizo', category: 'acompanantes', name: 'Chorizo artesanal', en: 'Artisanal chorizo', description: '', image: null },
  { id: 'longaniza', category: 'acompanantes', name: 'Longaniza', en: 'Artisanal sausage', description: '', image: null },

  // Salsas
  {
    id: 'salsa-queso',
    category: 'salsas',
    name: 'Salsa de queso',
    en: 'Cheese sauce',
    description: 'Adicional.',
    image: P + 'salsa-queso.webp',
  },
  {
    id: 'guacamole',
    category: 'salsas',
    name: 'Guacamole',
    en: 'House guacamole',
    description: 'Incluido con cada plato.',
    image: P + 'guacamole.webp',
  },
  {
    id: 'aji',
    category: 'salsas',
    name: 'Ají de la casa',
    en: 'House chili sauce',
    description: 'Incluido con cada plato.',
    image: P + 'aji-casa.webp',
  },
];
