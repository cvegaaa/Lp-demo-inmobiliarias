export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area_sqm: number;
  property_type: string;
  status: string;
  featured: boolean;
  image_url: string;
  gallery: string[];
  created_at: string;
};

export type InquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  property_id?: string;
};

export function formatPrice(price: number, status: string): string {
  const formatted = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);
  return status === 'For Rent' ? `${formatted} / mes` : formatted;
}
