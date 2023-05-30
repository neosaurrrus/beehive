import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://vzjcklzlouhfsuelfpby.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6amNrbHpsb3VoZnN1ZWxmcGJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0MzM5NDIsImV4cCI6MjAwMTAwOTk0Mn0.h-p_Dg_7dUVJVqnHKOxPJId5vvWKw8mYLGOk4PEqeoI') // TODO: move to env var
