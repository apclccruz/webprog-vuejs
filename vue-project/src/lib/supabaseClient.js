import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://uogbcatdljtsfgiptqkr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZ2JjYXRkbGp0c2ZnaXB0cWtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNzgyMjYsImV4cCI6MjA1Mzk1NDIyNn0.FU6xbUg27BI0t9NLt4fp3UUOBPZdpnIbEe5TSbeBAxg')