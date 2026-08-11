import LegalPage, { BUSINESS } from "@/component/LegalPage";

/**
 * DRAFT — see the note on Privacy.tsx.
 *
 * This one is written from a check of the code rather than from a template.
 * There is no Google Analytics, no tag manager and no advertising pixel
 * anywhere in this repo — verified by searching for all of them — so this page
 * says so instead of claiming a cookie banner's worth of tracking that does not
 * happen. IF ANALYTICS IS EVER ADDED, THIS PAGE MUST CHANGE IN THE SAME COMMIT,
 * and the site will then need a consent banner it does not need today.
 */
export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      metaTitle="Cookie Policy | BlackBoxPreps"
      description="Which cookies this website uses, which it does not, and how to control them."
      canonical="/cookies"
    >
      <p>
        Cookies are small files a website asks your browser to store. This page
        says which ones are involved when you use this site.
      </p>

      <h2>We do not track you</h2>
      <p>
        This website runs no analytics, no advertising pixels and no tag
        manager. We do not build a profile of you, and nothing here follows you
        to other sites.
      </p>

      <h2>What is actually used</h2>
      <ul>
        <li>
          <strong>Essential cookies.</strong> If you submit the quote form, a
          session cookie may be set so the request can be processed securely.
          Without it the form cannot work.
        </li>
        <li>
          <strong>Calendly.</strong> The booking widget is a third-party embed
          and sets its own cookies once it loads. It is deliberately not loaded
          until you scroll to it, so simply visiting a page does not set them.
        </li>
        <li>
          <strong>Google Fonts.</strong> Typefaces are requested from Google.
          This does not set a cookie, but the request itself reaches Google.
        </li>
      </ul>

      <h2>Controlling cookies</h2>
      <p>
        Every browser can block or delete cookies in its settings. Blocking the
        essential cookie above may stop the quote form working; nothing else on
        this site depends on one.
      </p>

      <h2>Changes</h2>
      <p>
        If we add anything that sets cookies, this page changes with it and the
        date at the top changes too.
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
