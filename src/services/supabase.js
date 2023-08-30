import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ybhkqfncejmagvmqsfne.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliaGtxZm5jZWptYWd2bXFzZm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMDM3NDUsImV4cCI6MjAwODg3OTc0NX0.IYVVlFuZLtzI3vE6i-OD_6X4YS350szjxRFZijIhH5U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
