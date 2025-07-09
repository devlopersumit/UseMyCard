import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fbeychgiyiovoierqviw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6cXh0emZsZ3RwcXJlcm5zbWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NzM0MzgsImV4cCI6MjA2MTA0OTQzOH0.JO4rjRyf4x-HZh-uDM9zIQF4jTVsG1PjxqQ5lqemQyk'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 