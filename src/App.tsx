import { Suspense, lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "@/component/Navbar";
import Footer from './component/footer';
import ScrollToTop from './component/ScrollToTop';
import HashScroll from './component/HashScroll';
import { useLenis } from './component/lenis';
import IntroSplash, { introPending } from './component/IntroSplash';
import NavTransition from './component/NavTransition';

/**
 * ROUTES ARE LAZY, and that is the single biggest cut available to the bundle.
 *
 * Every page was a static import, so the entry chunk carried all of them — most
 * expensively `/quote`, which pulls antd, three Mantine packages and
 * react-datepicker for one form that most visitors never open. A first-time
 * visitor landing on the home page downloaded, parsed and compiled the whole
 * site to see the hero.
 *
 * Home stays eager on purpose: it is the landing page for almost all traffic,
 * and making it a second round trip would trade bundle size for a slower LCP —
 * the opposite of the point.
 */
import Home from './page/Home'

/* Static, as it is in git. It was briefly forced static because `IntroSplash`
   imported it: a module both statically and dynamically imported is folded into
   the entry chunk anyway, so `lazy()` split nothing and Rollup warned about it.
   The splash uses `IsometricCube` again, so that constraint is gone — this is a
   plain import now rather than a forced one. */
import IsometricHero from './component/logoHook'

const Pricing = lazy(() => import('./page/Pricing'))
const AboutUs = lazy(() => import('./page/AboutUs'))
const FbaService = lazy(() => import('./page/ServicesForFba'))
const FbmService = lazy(() => import('./page/ServicesForFbm'))
/* FaqPage, not FAQ: the same section is embedded in the home page, and only the
   route may set the document title or own the h1. See page/FAQ.tsx. */
const FAQ = lazy(() => import('./page/FaqPage'))
const GetQuoteForm = lazy(() => import('./component/GetQuote'))
const Privacy = lazy(() => import('./page/Privacy'))
const Terms = lazy(() => import('./page/Terms'))
const Cookies = lazy(() => import('./page/Cookies'))
const NotFound = lazy(() => import('./page/NotFound'))

/* Deliberately not a spinner. A route chunk on a warm connection arrives in
   tens of milliseconds, and a spinner that flashes for 40ms reads as a glitch;
   an empty block of roughly the right height does not. */
const RouteFallback = () => <div style={{ minHeight: '60vh' }} aria-busy="true" />

/**
 * THE PAGE'S ENTRANCE ANIMATIONS ARE REPLAYED WHEN THE INTRO LIFTS, and the
 * `key` below is the whole mechanism.
 *
 * `HeroSection` and most of the home page animate with `animate`, not
 * `whileInView` — so they fire on MOUNT, which happens underneath an opaque
 * full-screen overlay. Measured: at 458ms the page's `<h1>` is at opacity 0 and
 * y 24, and by the time the overlay lifts at 9.2s it is already opacity 1 with
 * no transform. Every entrance on the first screen was performed to nobody, and
 * the site was revealed fully settled.
 *
 * Flipping the key remounts the subtree, so those animations run again from
 * their initial state. It fires at the START of the overlay's 0.8s fade, while
 * it is still fully opaque — so the remount itself is invisible and the motion
 * is already under way as the page appears, rather than starting from a static
 * frame after it.
 *
 * The content stays MOUNTED the whole time rather than being withheld until the
 * intro ends. Images, fonts and route chunks all fetch during those 8 seconds;
 * deferring the mount would move that work to the moment of the reveal and buy
 * a hitch. Re-running the animations is cheap, re-fetching the page is not.
 */
function App() {
  useLenis();
  /* Held for exactly as long as the splash will run, from the splash's own
     decision — see `introPending`. A second reading of sessionStorage here
     would eventually disagree with it. */
  const [held, setHeld] = useState(introPending);
  return (
    <NavTransition>
      <IntroSplash onDone={() => setHeld(false)} />
      <main key={held ? 'held' : 'live'} className=' relative space-b-6 bg-white '>
        <Navbar />
        <ScrollToTop />
        <HashScroll />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/quote" element={<GetQuoteForm />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path='/service/fba' element={<FbaService />} />
            <Route path='/service/fbm' element={<FbmService />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            {/* Catch-all. Without it an unknown URL rendered the nav and footer
                with nothing between them, under the home page's title — a soft
                404 that Google treats as a duplicate of the home page. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <IsometricHero />
        <Footer />
      </main>
    </NavTransition>
  )
}

export default App
