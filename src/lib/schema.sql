-- Create a table for website inquiries
CREATE TABLE leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (public access for contact form)
CREATE POLICY "Public can insert leads" ON leads
FOR INSERT WITH CHECK (true);

-- Only authenticated admins should be able to read leads (you can refine this later)
-- CREATE POLICY "Admins can read leads" ON leads
-- FOR SELECT USING (auth.role() = 'service_role');
