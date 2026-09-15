import { createClient } from "@supabase/supabase-js"

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const isSupabaseConfigured = Boolean(url && anonKey)

if (!isSupabaseConfigured) {
  console.warn(
    "Supabase is not configured set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local. " +
      "The News section and /admin routes will show a friendly placeholder instead of live data.",
  )
}

/** Falls back to a placeholder project so createClient never throws when
    envs are missing callers must check `isSupabaseConfigured` before use. */
export const supabase = createClient(
  url || "https://placeholder.supabase.co",
  anonKey || "placeholder-anon-key",
)
