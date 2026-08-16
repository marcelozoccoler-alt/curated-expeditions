CREATE TABLE public.travel_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  interest TEXT,
  travel_when TEXT,
  travelers TEXT,
  budget TEXT,
  notes TEXT,
  source_page TEXT,
  context_type TEXT,
  status TEXT NOT NULL DEFAULT 'novo',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.travel_leads TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.travel_leads TO authenticated;
GRANT ALL ON public.travel_leads TO service_role;

ALTER TABLE public.travel_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
ON public.travel_leads FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 2 AND 120
  AND char_length(email) BETWEEN 5 AND 255
  AND char_length(phone) BETWEEN 8 AND 40
);

CREATE POLICY "Admins can view leads"
ON public.travel_leads FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update leads"
ON public.travel_leads FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete leads"
ON public.travel_leads FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX idx_travel_leads_created_at ON public.travel_leads (created_at DESC);