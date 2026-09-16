import { isSupabaseConfigured, supabase } from "./supabase"

export type ContactSubmissionInput = {
  source: "home" | "contact"
  name: string
  email: string
  organization?: string
  division?: string
  message?: string
}

/** Persists a contact-form lead to Supabase (see supabase/schema.sql for the
    `contact_submissions` table); admins read these back from the Supabase
    dashboard. Throws if Supabase isn't configured or the insert fails, so
    callers can show a real error instead of a fake success state. */
export async function submitContactForm(input: ContactSubmissionInput): Promise<void> {
  if (!isSupabaseConfigured) {
    throw new Error("Supabase is not configured.")
  }
  const { error } = await supabase.from("contact_submissions").insert({
    source: input.source,
    name: input.name,
    email: input.email,
    organization: input.organization || null,
    division: input.division || null,
    message: input.message || null,
  })
  if (error) throw error
}
