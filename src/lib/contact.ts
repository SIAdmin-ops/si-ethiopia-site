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
export const CONTACT_LIMITS = { name: 200, email: 254, organization: 200, division: 100, message: 5000 } as const

const clean = (value: string | undefined, max: number) => (value ?? "").trim().slice(0, max)

export async function submitContactForm(input: ContactSubmissionInput): Promise<void> {
  if (!isSupabaseConfigured) {
    throw new Error("Supabase is not configured.")
  }
  const { error } = await supabase.from("contact_submissions").insert({
    source: input.source,
    name: clean(input.name, CONTACT_LIMITS.name),
    email: clean(input.email, CONTACT_LIMITS.email),
    organization: clean(input.organization, CONTACT_LIMITS.organization) || null,
    division: clean(input.division, CONTACT_LIMITS.division) || null,
    message: clean(input.message, CONTACT_LIMITS.message) || null,
  })
  if (error) throw error
}
