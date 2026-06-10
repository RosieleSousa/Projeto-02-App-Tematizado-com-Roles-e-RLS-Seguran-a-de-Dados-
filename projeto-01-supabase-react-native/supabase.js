import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iltkvpbpvkguelstzchs.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsdGt2cGJwdmtndWVsc3R6Y2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExMDI0MjgsImV4cCI6MjA5NjY3ODQyOH0.sfVNdfPQ0JtZgQGtS0GbQxc-iTQpf2Nsk21k9RkACb0";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);