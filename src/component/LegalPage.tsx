import type { ReactNode } from "react";
import Head from "./Head";

/**
 * Shared shell for the three legal pages.
 *
 * They were footer links pointing at `href="#"` — the single worst trust signal
 * on a site that asks people to ship it their inventory. One layout so the three
 * cannot drift apart in wording or in the date they claim to have been updated.
 */

export const LEGAL_UPDATED = "10 August 2026";

export const BUSINESS = {
  name: "BlackBoxPreps",
  address: "9 Brookside Drive, Unit B, Wilmington, DE 19804, United States",
  email: "contact@blackboxprepcenter.com",
  phone: "+1 201-628-6391",
};

interface LegalPageProps {
  title: string;
  metaTitle: string;
  description: string;
  canonical: string;
  children: ReactNode;
}

export default function LegalPage({
  title,
  metaTitle,
  description,
  canonical,
  children,
}: LegalPageProps) {
  return (
    <>
      <Head title={metaTitle} description={description} canonical={canonical} />

      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 font-inter text-sm text-gray-500">
          Last updated {LEGAL_UPDATED}
        </p>

        {/* Typography is set here rather than per page so all three read the
            same. No prose plugin in this project, hence the explicit rules. */}
        <div
          className="mt-10 space-y-6 text-base leading-relaxed text-gray-700
            [&_a]:text-red-700 [&_a]:underline [&_a]:underline-offset-2
            [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900
            [&_li]:leading-relaxed
            [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
        >
          {children}
        </div>

        <p className="mt-14 border-t border-black/10 pt-6 text-sm text-gray-500">
          Questions about this page? Email{" "}
          <a
            href={`mailto:${BUSINESS.email}`}
            className="text-red-700 underline underline-offset-2"
          >
            {BUSINESS.email}
          </a>{" "}
          or call {BUSINESS.phone}.
        </p>
      </section>
    </>
  );
}
