// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://eusbvipkerxokaoouzyb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1c2J2aXBrZXJ4b2thb291enliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NTQ0NzEsImV4cCI6MjA2NDQzMDQ3MX0.j8x7pXTI6lI23q1jd_3ZHSD5E1wJF8hAPbUBe-cAUOc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);