import LegalPage, { BUSINESS } from "@/component/LegalPage";

/**
 * DRAFT. This is a plain-language privacy policy built from what the site
 * actually does — a quote form, a Calendly embed, Google Fonts — and nothing
 * else. It is not legal advice and it has not been reviewed by a lawyer. If the
 * business collects anything this page does not mention, this page is wrong,
 * and a privacy policy that is wrong is worse than one that is missing.
 */
export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      metaTitle="Privacy Policy | BlackBoxPreps"
      description="How BlackBoxPreps collects, uses and protects the information you give us through this website."
      canonical="/privacy"
    >
      <p>
        This policy explains what information {BUSINESS.name} collects through
        this website, why we collect it, and what we do with it. It covers this
        website only.
      </p>

      <h2>What we collect</h2>
      <p>
        We collect information you give us directly, and a small amount that is
        collected automatically when any website is loaded.
      </p>
      <ul>
        <li>
          <strong>Information you submit.</strong> When you request a quote or
          book a call, we receive the name, email address, phone number,
          business details and message you enter.
        </li>
        <li>
          <strong>Booking details.</strong> Calls are scheduled through Calendly,
          which receives whatever you enter into its booking form and processes
          it under its own privacy policy.
        </li>
        <li>
          <strong>Technical information.</strong> Our hosting provider records
          standard request data — IP address, browser and device type, the pages
          requested and the time of the request.
        </li>
      </ul>

      <h2>What we do with it</h2>
      <ul>
        <li>Reply to your enquiry and prepare a quote.</li>
        <li>Provide and invoice for prep and fulfillment services.</li>
        <li>Keep the site working, secure and reasonably fast.</li>
        <li>Meet our legal, tax and accounting obligations.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not share it with
        third parties for their own marketing.
      </p>

      <h2>Third parties we use</h2>
      <p>
        A small number of services process data on our behalf or are loaded
        directly by your browser when you use this site:
      </p>
      <ul>
        <li>
          <strong>Calendly</strong> — scheduling. Loaded only when you scroll to
          the booking section.
        </li>
        <li>
          <strong>Google Fonts</strong> — typefaces. Your browser requests these
          from Google, which receives the request as part of serving them.
        </li>
        <li>
          <strong>Our hosting and email providers</strong> — to serve this site
          and to receive what you send us.
        </li>
      </ul>
      <p>
        Carriers and Amazon receive the shipment information necessary to move
        your inventory. That is part of the service rather than a marketing
        disclosure, but it is worth stating plainly.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Enquiries are kept for as long as we are in contact with you and for a
        reasonable period afterwards. Records tied to work we have actually
        performed are kept for as long as tax and accounting rules require.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us for a copy of the information we hold about you, ask us
        to correct it, or ask us to delete it. Email{" "}
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> and we will
        respond. Depending on where you live you may have further rights under
        laws such as the GDPR or the CCPA; we will honour those requests.
      </p>

      <h2>Security</h2>
      <p>
        This site is served over HTTPS and access to enquiry data is limited to
        the people who need it. No system is perfectly secure, and we will not
        pretend otherwise — but we do not ask for payment card details or
        government identifiers through this website, so there is nothing of that
        kind here to lose.
      </p>

      <h2>Children</h2>
      <p>
        This is a business-to-business service and is not directed at children.
        We do not knowingly collect information from anyone under 16.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the date at the top of this page changes with it.
      </p>

      <h2>Contact</h2>
      <p>
        {BUSINESS.name}, {BUSINESS.address}. Email{" "}
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>, telephone{" "}
        {BUSINESS.phone}.
      </p>
    </LegalPage>
  );
}
