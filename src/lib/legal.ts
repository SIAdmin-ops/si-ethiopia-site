/** Facts the legal pages rely on. Anything that could not be verified from the
    codebase is left empty; the pages then show a visible "pending
    confirmation" notice listing exactly which items are missing, and the
    notice disappears automatically once every value below is filled in. */
export const LEGAL = {
  operatorName: "Strategy Innovations Consultancy PLC",
  address: "Bole, Addis Ababa, Ethiopia",
  website: "https://siintnl.com",
  parentName: "Strategy Innovations",
  parentUrl: "https://strategy-innovations.com",

  /** CONFIRM: monitored address for privacy requests (the site currently shows two different email domains). */
  privacyEmail: "",
  /** CONFIRM: commercial registration / licence number. */
  registrationNumber: "",
  /** CONFIRM: date these documents take effect, e.g. "1 November 2026". */
  effectiveDate: "",
  /** CONFIRM: how long contact enquiries are kept, e.g. "24 months after the last contact". */
  enquiryRetention: "",
  /** CONFIRM: country/region where the Supabase project database is hosted. */
  databaseRegion: "",
  /** CONFIRM: web hosting provider that serves the site and keeps request logs. */
  hostingProvider: "",
  /** CONFIRM: whether enquiries are shared with the UK parent group: "yes" or "no". */
  sharedWithParent: "",
  /** CONFIRM: law and courts governing the Terms, e.g. "the laws of Ethiopia and the courts of Addis Ababa". */
  governingLaw: "",
} as const

const LABELS: Record<string, string> = {
  privacyEmail: "Privacy contact email address",
  registrationNumber: "Company registration number",
  effectiveDate: "Effective date",
  enquiryRetention: "Retention period for contact enquiries",
  databaseRegion: "Database hosting region",
  hostingProvider: "Web hosting provider",
  sharedWithParent: "Whether enquiries are shared with the UK parent group",
  governingLaw: "Governing law and courts",
}

export function pendingLegalItems(): string[] {
  return Object.entries(LABELS)
    .filter(([key]) => !(LEGAL as Record<string, string>)[key])
    .map(([, label]) => label)
}
