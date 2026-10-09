import { Link } from "react-router-dom"

/** Point-of-collection notice shown under every public form. English only,
    like the legal pages it links to. */
export default function FormPrivacyNotice() {
  return (
    <p className="text-xs leading-relaxed text-text-secondary">
      We use the details you submit only to respond to your enquiry. See our{" "}
      <Link to="/privacy" className="font-semibold text-blue underline-offset-2 hover:underline">
        Privacy Policy
      </Link>
      .
    </p>
  )
}
