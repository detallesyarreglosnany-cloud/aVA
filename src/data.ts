import { Business, CategoryInfo } from './types';

export const CATEGORIES: CategoryInfo[] = [
  { id: 'MARKETING', label: 'Marketing & RRSS', icon: '📱', subcategories: ['Daniela Silva'] },
  { id: 'MODA', label: 'Moda', icon: '👗', subcategories: ['Ropa Mujer', 'TROPICA', 'Ropa Hombre', 'Zapatos'] },
  { id: 'POSTRES', label: 'Postres', icon: '🧁', subcategories: ['Dulcitos Ema'] },
  { id: 'COMIDA', label: 'Comida', icon: '🍔', subcategories: ['Perros Calientes El Mocho'] },
  { id: 'UÑAS Y PESTAÑAS', label: 'Uñas & Pestañas', icon: '💅', subcategories: ['Rox Nails'] },
  { id: 'BELLEZA', label: 'Belleza', icon: '✨', subcategories: ['Skincare Amazonas', 'Depilación Laser C.A.'] },
  { id: 'INFANTIL', label: 'Infantil', icon: '🎈', subcategories: ['Recreación', 'Niños'] },
  { id: 'EVENTOS', label: 'Eventos', icon: '🎉', subcategories: ['Inflables Sanz'] },
  { id: 'BEBIDAS Y DIVERSIÓN', label: 'Bebidas & Diversión', icon: '🍹', subcategories: ['Disco Bar Tentación'] },
  { id: 'MINIMARKETS', label: 'Minimarkets', icon: '🛒', subcategories: ['Bodega La Avenida F.P.'] },
  { id: 'ENVIOS', label: 'Envíos', icon: '📦', subcategories: ['Delivery', 'Encomiendas Nacionales'] },
  { id: 'SERVICIOS PROFESIONALES', label: 'Servicios Prof.', icon: '💼', subcategories: ['Abogados', 'Herrería', 'Psicología', 'Construcción'] },
  { id: 'ALQUILERES', label: 'Alquileres', icon: '🏠', subcategories: ['Casas', 'Locales'] },
  { id: 'SEGUNDO USO', label: 'Segundo Uso', icon: '♻️', subcategories: ['Ropa', 'Zapatos', 'Carros', 'Motos', 'Electrodomésticos'] },
];

export const BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'TROPICA',
    category: 'MODA',
    subcategory: 'Ropa Mujer',
    description: 'Moda femenina con esencia amazónica. Diseños exclusivos para la mujer moderna.',
    logo: 'https://picsum.photos/seed/tropica/200/200',
    images: [
      'https://picsum.photos/seed/fashion1/800/600',
      'https://picsum.photos/seed/fashion2/800/600',
      'https://picsum.photos/seed/fashion3/800/600'
    ],
    whatsapp: '584120000000',
    instagram: 'tropica_moda',
    googleMaps: 'https://goo.gl/maps/example1',
    badges: ['Recomendado', 'Atención Premium'],
    schedule: { open: '08:00', close: '18:00' },
    isFeatured: true,
    isFlashOffer: true,
    flashOfferText: '20% OFF en toda la colección de verano',
    flashOfferExpiry: new Date(Date.now() + 86400000).toISOString()
  },
  {
    id: '1b',
    name: 'Boutique Amazonas',
    category: 'MODA',
    subcategory: 'Ropa Mujer',
    description: 'Elegancia y estilo en el corazón de la selva.',
    logo: 'https://picsum.photos/seed/boutique/200/200',
    images: ['https://picsum.photos/seed/boutique1/800/600'],
    whatsapp: '584120000001',
    badges: ['Atención Premium'],
    schedule: { open: '09:00', close: '19:00' }
  },
  {
    id: '1c',
    name: 'Urban Style',
    category: 'MODA',
    subcategory: 'Ropa Hombre',
    description: 'Lo último en tendencia masculina.',
    logo: 'https://picsum.photos/seed/urban/200/200',
    images: ['https://picsum.photos/seed/urban1/800/600'],
    whatsapp: '584120000002',
    badges: ['Recomendado'],
    schedule: { open: '10:00', close: '20:00' }
  },
  {
    id: '2',
    name: 'Dulcitos Ema',
    category: 'POSTRES',
    subcategory: 'Dulcitos Ema',
    description: 'Los mejores postres artesanales de Puerto Ayacucho. Dulzura en cada bocado.',
    logo: 'https://picsum.photos/seed/ema/200/200',
    images: [
      'https://picsum.photos/seed/cake1/800/600',
      'https://picsum.photos/seed/cake2/800/600'
    ],
    whatsapp: '584121111111',
    badges: ['Sustentable'],
    schedule: { open: '09:00', close: '20:00' }
  },
  {
    id: '3',
    name: 'Perros Calientes El Mocho',
    category: 'COMIDA',
    subcategory: 'Perros Calientes El Mocho',
    description: 'El sabor tradicional que ya conoces. Los mejores perros de la ciudad.',
    logo: 'https://picsum.photos/seed/mocho/200/200',
    images: ['https://picsum.photos/seed/food1/800/600'],
    whatsapp: '584122222222',
    badges: ['Recomendado'],
    schedule: { open: '17:00', close: '23:00' }
  },
  {
    id: '4',
    name: 'Rox Nails',
    category: 'UÑAS Y PESTAÑAS',
    subcategory: 'Rox Nails',
    description: 'Especialistas en manicura, pedicura y extensión de pestañas.',
    logo: 'https://picsum.photos/seed/rox/200/200',
    images: ['https://picsum.photos/seed/nails1/800/600'],
    whatsapp: '584123333333',
    badges: ['Atención Premium'],
    schedule: { open: '08:00', close: '17:00' }
  },
  {
    id: '5',
    name: 'Abog. Ana Alicia Nieves',
    category: 'SERVICIOS PROFESIONALES',
    subcategory: 'Abogados',
    description: 'Experta Penal. Consultas profesionales y asesoría legal integral.',
    logo: 'https://picsum.photos/seed/law/200/200',
    images: ['https://picsum.photos/seed/office1/800/600'],
    whatsapp: '584124444444',
    badges: ['Atención Premium'],
    schedule: { open: '08:00', close: '16:00' }
  }
];
