import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    /* A hash IS a scroll instruction, and this would overrule it. Arriving at
       `/#faq` from another route changes `pathname` too, so without this guard
       the page is thrown to the top on the same tick `HashScroll` starts moving
       it — the link appears to work and then visibly undoes itself. */
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]); // runs whenever route changes

  return null; // this component renders nothing
}
