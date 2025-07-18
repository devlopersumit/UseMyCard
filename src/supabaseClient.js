import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nxejknpnnsqndujzcgen.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZWprbnBubnNxbmR1anpjZ2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MDYwMzEsImV4cCI6MjA2MzQ4MjAzMX0.dDqWCMRrIKzbLwYbeUujot4QJkIQp48sY-URaxnTRmU'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 