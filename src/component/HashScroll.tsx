import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { settleScrollTo } from "./lenis";

/**
 * Scrolls to `location.hash` after a navigation.
 *
 * WHY THIS IS NOT JUST THE BROWSER'S JOB. A native anchor jump happens when the
 * document containing the target is parsed. Here the target is rendered by
 * React, inside a Suspense boundary, after a lazy chunk has been fetched — so
 * at the moment the URL changes the element does not exist and the browser has
 * nothing to jump to. It silently does nothing, which reads as a dead link.
 *
 * The retrying and the re-targeting both live in `settleScrollTo`; this
 * component is only the wiring from the router to it.
 */
export default function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash.slice(1);
    if (!id) return;
    /* Cancelling on unmount matters: navigating away mid-flight would otherwise
       leave a loop hunting for an element on a page that is gone, and grab the
       scroll on the NEW route if it happened to have a matching id. */
    /* `immediate` — this is the cold-load path where the page is still
       assembling above the anchor. See `settleScrollTo`. */
    return settleScrollTo(id, true);
  }, [pathname, hash]);

  return null;
}
