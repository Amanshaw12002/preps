// src/component/Head.tsx
import { useEffect } from "react";

/**
 * Per-route document metadata.
 *
 * It used to set the title and rewrite the favicon on every route change. The
 * favicon rewrite is gone: it is identical on every page, so it belonged in
 * index.html once rather than being re-applied per navigation — and pointing it
 * at a 608 kB PNG made every route change fetch one.
 *
 * What it does now is the part that actually matters for search and for link
 * previews: title, description and canonical, kept in step with the route.
 * index.html carries a static copy of the home page's set, so a crawler that
 * does not run JavaScript still sees a titled, described page.
 */

const SITE = "https://blackboxpreps.com";

interface HeadProps {
  title: string;
  description?: string;
  /** Path only, e.g. "/pricing". Defaults to the current location. */
  canonical?: string;
  /**
   * Ask search engines not to index this page. Only the 404 wants this — a soft
   * 404 that Google indexes competes with the real pages for the same site.
   */
  noindex?: boolean;
}

function setMeta(selector: string, attr: string, value: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    const [key, val] = selector.replace(/meta\[|\]/g, "").split("=");
    tag.setAttribute(key, val.replace(/["']/g, ""));
    document.head.appendChild(tag);
  }
  tag.setAttribute(attr, value);
}

export default function Head({ title, description, canonical, noindex }: HeadProps) {
  useEffect(() => {
    document.title = title;

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }

    setMeta('meta[property="og:title"]', "content", title);

    const path = canonical ?? window.location.pathname;
    const href = `${SITE}${path}`;

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = href;
    setMeta('meta[property="og:url"]', "content", href);

    /* NOINDEX MUST BE REMOVED ON THE WAY OUT, not merely set on the way in.
       This is a single-page app: the <head> survives navigation, so a robots
       tag left behind by the 404 would keep telling crawlers not to index
       whichever real page the visitor clicked through to. Adding the tag is
       the easy half; the cleanup is the half that would have been the bug. */
    if (!noindex) return;
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, follow";
    document.head.appendChild(robots);
    return () => {
      robots.remove();
    };
  }, [title, description, canonical, noindex]);

  return null;
}
