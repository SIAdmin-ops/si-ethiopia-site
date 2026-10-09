import { Link } from "react-router-dom"
import LegalPage, { LegalSection, Tbc } from "../components/LegalPage"
import { LEGAL } from "../lib/legal"
import { useSeo } from "../lib/useSeo"

export default function Terms() {
  useSeo(
    "Terms of Use",
    "The terms for using the Strategy Innovations Consultancy PLC website, siintnl.com.",
    "/terms",
  )
  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms apply to your use of this website. By using it you agree to them. If you do not agree, please do not use the site."
    >
      <LegalSection title="1. About this website">
        <p>
          This website is operated by {LEGAL.operatorName}, {LEGAL.address}. It describes our capital markets, technology
          and training advisory services. It has no public accounts or online payments.
        </p>
      </LegalSection>

      <LegalSection title="2. Information only, not advice">
        <p>
          Content on this site is general information about our services and the markets we work in. It is not legal,
          financial, investment, tax or regulatory advice, and does not create an advisory or client relationship with
          us. Any engagement with us is governed by a separate written agreement. Regulations change, so please
          confirm current requirements with the relevant authority or your own advisers.
        </p>
      </LegalSection>

      <LegalSection title="3. Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5">
          <li>attempt to gain unauthorised access to the site, its administrative area, or its data;</li>
          <li>interfere with the site&apos;s operation, or send automated or excessive requests;</li>
          <li>submit unlawful, misleading or malicious content through our forms; or</li>
          <li>copy or scrape the site in a way that breaches these terms or applicable law.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Intellectual property">
        <p>
          The site&apos;s text, design, logos and other materials belong to {LEGAL.operatorName}, our group companies or
          our licensors, and are protected by law. You may view the site and share a link to it, and may quote short
          extracts with attribution. Any other use needs our written permission. Third-party names and logos belong
          to their owners.
        </p>
      </LegalSection>

      <LegalSection title="5. Your submissions">
        <p>
          If you send us an enquiry, you confirm that the information is accurate and that you are entitled to share
          it. We use it as described in our{" "}
          <Link to="/privacy" className="font-semibold text-blue underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Links to other websites">
        <p>
          The site may link to other websites, including our parent group&apos;s. We do not control them and are not
          responsible for their content or practices.
        </p>
      </LegalSection>

      <LegalSection title="7. Availability and changes">
        <p>
          We try to keep the site available and accurate, but we do not promise it will be uninterrupted or error-free.
          We may change or remove content, or suspend access, at any time.
        </p>
      </LegalSection>

      <LegalSection title="8. Liability">
        <p>
          To the extent the law allows, the site is provided &ldquo;as is&rdquo; and we are not liable for loss arising from your use of
          or reliance on it. Nothing in these terms limits any liability that cannot be limited by law, including
          liability for fraud or for death or personal injury caused by negligence. The extent of any exclusion is
          subject to legal review.
        </p>
      </LegalSection>

      <LegalSection title="9. Governing law">
        <p>
          These terms are governed by <Tbc value={LEGAL.governingLaw} label="governing law and courts" />.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to these terms">
        <p>We may update these terms. The version on this page, with its effective date, applies when you use the site.</p>
      </LegalSection>

      <LegalSection title="11. Contact">
        <p>
          {LEGAL.operatorName}, {LEGAL.address}. See our{" "}
          <Link to="/contact" className="font-semibold text-blue underline-offset-2 hover:underline">
            contact page
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
