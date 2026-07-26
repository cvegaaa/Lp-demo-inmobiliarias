/*
# Boutique real estate: properties + inquiries

1. New Tables
- `properties` — catalog of listings shown to visitors (read-only public).
  - id (uuid pk)
  - title (text)
  - description (text)
  - price (numeric)
  - location (text)
  - bedrooms (int)
  - bathrooms (int)
  - area_sqm (int)
  - property_type (text: e.g. Apartment, Villa, Loft, Penthouse, Townhouse)
  - status (text: e.g. For Sale, For Rent, Sold)
  - featured (boolean)
  - image_url (text)
  - gallery (text[]) — additional image urls
  - created_at (timestamptz)
- `inquiries` — messages submitted via the contact form.
  - id (uuid pk)
  - name (text)
  - email (text)
  - phone (text, nullable)
  - message (text)
  - property_id (uuid, nullable, references properties)
  - created_at (timestamptz)

2. Security
- Enable RLS on both tables.
- properties: public read (anon + authenticated), no writes from the client.
- inquiries: public insert only (anon + authenticated), no reads from the client.
*/

CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  location text NOT NULL,
  bedrooms int NOT NULL DEFAULT 0,
  bathrooms int NOT NULL DEFAULT 0,
  area_sqm int NOT NULL DEFAULT 0,
  property_type text NOT NULL,
  status text NOT NULL DEFAULT 'For Sale',
  featured boolean NOT NULL DEFAULT false,
  image_url text NOT NULL,
  gallery text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_properties" ON properties;
CREATE POLICY "public_read_properties"
ON properties FOR SELECT
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  property_id uuid REFERENCES properties(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_inquiries" ON inquiries;
CREATE POLICY "public_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_properties_featured ON properties(featured);
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
