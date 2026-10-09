import { Link } from "react-router-dom"
import LegalPage, { LegalSection, Tbc } from "../components/LegalPage"
import { LEGAL } from "../lib/legal"
import { useSeo } from "../lib/useSeo"

export default function Privacy() {
  useSeo(
    "Privacy Policy",
    "How Strategy Innovations Consultancy PLC collects, uses and protects personal data on siintnl.com.",
    "/privacy",
  )
  const email = LEGAL.privacyEmail
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what personal data we collect through this website, why we collect it, who it is shared with, and the choices you have."
    >
      <LegalSection title="1. Who we are">
        <p>
          This website ({LEGAL.website}) is operated by {LEGAL.operatorName}, {LEGAL.address} (registration number:{" "}
          <Tbc value={LEGAL.registrationNumber} label="registration number" />
          ). We are the Ethiopian operating entity of{" "}
          <a href={LEGAL.parentUrl} className="font-semibold text-blue underline-offset-2 hover:underline" rel="noopener">
            {LEGAL.parentName}
          </a>
          , headquartered in the United Kingdom. We are the organisation responsible for the personal data described
          in this policy.
        </p>
      </LegalSection>

      <LegalSection title="2. What we collect">
        <p>
          <strong className="text-basalt">Enquiry forms.</strong> If you use a contact form we collect your name, email
          address, and, if you choose to give them, your organisation, the division you are interested in, and your
          message. Please do not include sensitive personal data (for example health or financial account details) in
          your message.
        </p>
        <p>
          <strong className="text-basalt">Technical data.</strong> When you visit, our hosting provider (
          <Tbc value={LEGAL.hostingProvider} label="hosting provider" />) and our database provider process technical
          data needed to deliver the site and keep it secure, such as your IP address, browser and device type,
          requested pages and timestamps. We do not use this data to identify you.
        </p>
        <p>
          <strong className="text-basalt">Website administrators.</strong> Staff who sign in to the site&apos;s news
          admin area have their sign-in details, and any two-step verification settings, stored by our authentication
          provider.
        </p>
        <p>We do not run advertising or analytics trackers on this website, and we do not sell personal data.</p>
      </LegalSection>

      <LegalSection title="3. Cookies and similar technologies">
        <p>
          This website does not set advertising or analytics cookies. It stores one preference in your browser&apos;s
          local storage, your chosen language, so the site remembers it on your next visit. Administrators&apos; sign-in
          sessions are also kept in browser storage. Both are strictly necessary for the feature you ask for, so no
          cookie banner is shown. You can clear this at any time in your browser settings.
        </p>
        <p>
          Some page images are loaded directly from a third-party image host (images.unsplash.com), which means your
          browser contacts that host and it can see your IP address. Fonts are served from this website itself.
        </p>
      </LegalSection>

      <LegalSection title="4. Why we use your data">
        <ul className="list-disc pl-5">
          <li>To read and respond to your enquiry, and to take steps you ask us to take before any engagement.</li>
          <li>To run, secure and maintain the website, and to detect and prevent misuse.</li>
          <li>To meet legal and regulatory obligations that apply to us.</li>
        </ul>
        <p>
          We rely on the lawful basis recognised by the data protection law that applies to you, which for enquiries is
          generally your request to us and our legitimate interest in responding to business enquiries. Where the law
          requires your consent, we will ask for it. The exact legal bases are subject to legal review.
        </p>
      </LegalSection>

      <LegalSection title="5. Who we share it with">
        <p>We share personal data only with service providers that help us run the site, under their own terms:</p>
        <ul className="list-disc pl-5">
          <li>Supabase, which provides our database and sign-in service (database region: <Tbc value={LEGAL.databaseRegion} label="database region" />).</li>
          <li>Our web hosting provider (<Tbc value={LEGAL.hostingProvider} label="hosting provider" />).</li>
        </ul>
        <p>
          Sharing enquiries with our UK parent group: <Tbc value={LEGAL.sharedWithParent} label="yes or no" />. We may
          also disclose data where the law requires it.
        </p>
      </LegalSection>

      <LegalSection title="6. International transfers">
        <p>
          Our providers may process data outside Ethiopia, including in the United Kingdom, the European Union or the
          United States. Where the law requires safeguards for such transfers, we apply them. The specific safeguards
          are subject to legal review.
        </p>
      </LegalSection>

      <LegalSection title="7. How long we keep it">
        <p>
          Enquiries are kept for <Tbc value={LEGAL.enquiryRetention} label="retention period" /> and then deleted.
          Hosting logs are kept by the hosting provider for its standard period. If you ask us to delete your enquiry
          sooner, we will do so unless we must keep it by law.
        </p>
      </LegalSection>

      <LegalSection title="8. How we protect it">
        <p>
          The site is served over HTTPS. Access to submitted enquiries is limited to authorised administrators who sign
          in with a password and may use two-step verification. No online service is completely secure, so we cannot
          guarantee absolute security. If we become aware of a personal data breach we will respond and notify
          affected people and authorities as the law requires.
        </p>
      </LegalSection>

      <LegalSection title="9. Your rights">
        <p>
          Depending on where you live and the law that applies, you may have the right to ask us for access to your
          personal data, to correct it, to delete it, to restrict or object to its use, to withdraw consent, and to
          receive a copy of it. You may also complain to your data protection authority. To use any of these rights,
          write to{" "}
          {email ? (
            <a href={`mailto:${email}`} className="font-semibold text-blue underline-offset-2 hover:underline">
              {email}
            </a>
          ) : (
            <Tbc label="privacy contact email" />
          )}
          . We may need to confirm your identity first.
        </p>
      </LegalSection>

      <LegalSection title="10. Children">
        <p>This website is intended for businesses and institutions and is not directed at children.</p>
      </LegalSection>

      <LegalSection title="11. Changes to this policy">
        <p>
          We will post any update on this page and change the effective date above. Material changes will be
          highlighted on the site.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          {LEGAL.operatorName}, {LEGAL.address}. See also our <Link to="/terms" className="font-semibold text-blue underline-offset-2 hover:underline">Terms of Use</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
