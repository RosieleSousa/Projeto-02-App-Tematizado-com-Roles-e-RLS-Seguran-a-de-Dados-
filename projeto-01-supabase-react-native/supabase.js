import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jnutbtpepiibnsstpqjp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpudXRidHBlcGlpYm5zc3RwcWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MjcwNTIsImV4cCI6MjA5NjUwMzA1Mn0.Nzz6GHkFM8irD_8QXS2hs3d3F_zjblQQK661xdxGo6k";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);