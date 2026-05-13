const SUPABASE_URL = 'https://kgawtxznewdxkoswikqp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnYXd0eHpuZXdkeGtvc3dpa3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MTcxNTQsImV4cCI6MjA5NDE5MzE1NH0.3aX3OsDRJcL0GSye5EpeGCFWwhewDV_anRAFvt7XfEk';

const { createClient } = supabase;
window._supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
