import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://auqamlnvlpxhbokrlxtg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1cWFtbG52bHB4aGJva3JseHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMDM5NjQsImV4cCI6MjAxMjg3OTk2NH0.ZthhlRTiArk1h0_ZmSd48VKUc5moLUOX6zfjMFoKeUc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
