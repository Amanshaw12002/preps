import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Head from "@/component/Head";
import Logo from "@/component/Logo";

/**
 * THE 404 PAGE.
 *
 * There was no catch-all route, so an unknown URL rendered the nav and the
 * footer with nothing between them — 684 characters of chrome, served with
 * HTTP 200 and the home page's title. Google calls that a soft 404 and treats
 * it as a duplicate of the home page, so every mistyped or stale inbound link
 * became a competing copy of the site's most important URL.
 *
 * The status code cannot be fixed from inside a client-side router — the server
 * has already answered 200 by the time React runs. `noindex` is the part that
 * is fixable here, and it is the part that matters: a page crawlers are told to
 * skip cannot compete with anything. See the host-level note at the bottom of
 * this file for the other half.
 */
export default function NotFound() {
  return (
    <>
      <Head
        title="Page not found | BlackBoxPreps"
        description="This page does not exist. Browse our FBA and FBM prep services, pricing, or request a quote."
        noindex
      />

      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[#0a0a0a]"
        >
          <Logo size={56} decorative />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 font-inter text-sm tracking-[0.2em] text-gray-500"
        >
          404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl"
        >
          We couldn&apos;t find that page
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-lg text-base leading-relaxed text-gray-600"
        >
          The link may be out of date, or the address may have a typo in it.
          Everything below is still where it should be.
        </motion.p>

        {/* Links, not just a "go home" button. A 404 is a dead end for the
            visitor AND for a crawler following an old link; giving it real
            internal links is what lets both carry on. `noindex, follow` above
            is the same idea stated to the crawler. */}
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          aria-label="Suggested pages"
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { to: "/", label: "Home" },
            { to: "/service/fba", label: "FBA prep" },
            { to: "/service/fbm", label: "FBM fulfillment" },
            { to: "/pricing", label: "Pricing" },
            { to: "/faq", label: "FAQ" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md border border-black/15 px-4 py-2 font-inter text-sm text-gray-800 transition-colors duration-300 hover:border-black/40 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            to="/quote"
            className="group inline-flex items-center gap-2 rounded-md bg-[#0a0a0a] px-5 py-3 font-inter text-sm font-semibold text-white transition-colors duration-300 hover:bg-black"
          >
            Send inventory
            <MoveRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}

/*
 * THE OTHER HALF, which is not code in this repo: the host must serve a real
 * 404 status for unknown paths. A static SPA host rewrites everything to
 * index.html with a 200, which is what makes the status wrong no matter what
 * this component renders. On Vercel that is a `routes` entry with
 * `"status": 404` for the catch-all; on Netlify it is `/* /index.html 404` in
 * _redirects. Worth doing, but `noindex` above is what keeps these pages out of
 * the index in the meantime.
 */
