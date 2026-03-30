-- Run this SQL in Supabase Dashboard > SQL Editor > New Query

create table contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  company text,
  email text not null,
  contact text,
  platform text check (platform in ('shopify', 'woocommerce', 'magento', 'custom', 'other')),
  notes text,
  created_at timestamptz default now() not null
);

-- Index for querying by date
create index idx_contact_submissions_created_at
  on contact_submissions (created_at desc);

-- RLS: block all client access (we use service role key server-side)
alter table contact_submissions enable row level security;
-- No policies = no client access. Service role key bypasses RLS.
