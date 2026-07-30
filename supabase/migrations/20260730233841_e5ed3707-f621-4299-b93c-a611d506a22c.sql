CREATE TABLE public.whatsapp_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  city text,
  interests text[] NOT NULL DEFAULT '{}',
  source text,
  consent boolean NOT NULL DEFAULT true,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX whatsapp_subscribers_phone_key ON public.whatsapp_subscribers ((regexp_replace(phone, '\D', '', 'g')));

GRANT INSERT ON public.whatsapp_subscribers TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.whatsapp_subscribers TO authenticated;
GRANT ALL ON public.whatsapp_subscribers TO service_role;

ALTER TABLE public.whatsapp_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
  ON public.whatsapp_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (consent = true);

CREATE POLICY "Admins can view subscribers"
  ON public.whatsapp_subscribers FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update subscribers"
  ON public.whatsapp_subscribers FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete subscribers"
  ON public.whatsapp_subscribers FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));