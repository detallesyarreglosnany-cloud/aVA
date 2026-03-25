export type Category = 
  | 'MARKETING' 
  | 'MODA' 
  | 'POSTRES' 
  | 'COMIDA' 
  | 'UÑAS Y PESTAÑAS' 
  | 'BELLEZA' 
  | 'INFANTIL' 
  | 'EVENTOS' 
  | 'BEBIDAS Y DIVERSIÓN' 
  | 'MINIMARKETS' 
  | 'ENVIOS' 
  | 'SERVICIOS PROFESIONALES' 
  | 'ALQUILERES' 
  | 'SEGUNDO USO';

export interface Business {
  id: string;
  name: string;
  category: Category;
  subcategory: string;
  description: string;
  logo: string;
  images: string[];
  whatsapp: string;
  instagram?: string;
  googleMaps?: string;
  badges: ('Recomendado' | 'Sustentable' | 'Atención Premium')[];
  schedule: {
    open: string; // HH:mm
    close: string; // HH:mm
  };
  isFeatured?: boolean;
  isFlashOffer?: boolean;
  flashOfferText?: string;
  flashOfferExpiry?: string; // ISO string
}

export interface CategoryInfo {
  id: Category;
  label: string;
  icon: string; // Emoji or Lucide icon name
  subcategories: string[];
}
