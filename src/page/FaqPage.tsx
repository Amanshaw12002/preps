import FAQ from "./FAQ";

/**
 * The /faq ROUTE.
 *
 * Exists so the route and the home page's embedded copy of the same section are
 * two different things at the import level. The alternative — App.tsx passing a
 * prop through `lazy()` — puts the distinction in a `.then()` callback where the
 * next person editing the routes will not see it.
 */
export default function FaqPage() {
  return <FAQ standalone />;
}
