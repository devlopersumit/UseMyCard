import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uswkoruzjkexibwlkoga.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzd2tvcnV6amtleGlid2xrb2dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NzY5ODgsImV4cCI6MjA2MjM1Mjk4OH0.IN6PrnbBYgt7Y_5M6v3l5nQIMrGwHi-5B1EtMWQB71M'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 