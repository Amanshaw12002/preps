import LegalPage, { BUSINESS } from "@/component/LegalPage";

/**
 * DRAFT — see the note on Privacy.tsx. These terms describe a prep and
 * fulfillment arrangement in general shape only. Anything with a number in it
 * (storage limits, liability caps, payment days) is a commercial decision this
 * repo cannot make, so those are written as pointers to the quote rather than
 * as invented figures. Have a lawyer read this before it goes live.
 */
export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      metaTitle="Terms of Service | BlackBoxPreps"
      description="The terms that apply to prep, storage and fulfillment services provided by BlackBoxPreps."
      canonical="/terms"
    >
      <p>
        These terms apply to the use of this website and to prep, storage and
        fulfillment services provided by {BUSINESS.name} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;). Where you have signed a separate written agreement
        with us, that agreement takes precedence over anything on this page.
      </p>

      <h2>The service</h2>
      <p>
        We receive inventory you send us, inspect and prepare it to the
        requirements of the destination marketplace, and ship it onward. The
        specific services, prices and turnaround times that apply to you are the
        ones set out in the quote we issue and you accept.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>
          Give us accurate shipment details, including quantities, SKUs and
          labeling requirements, before your goods arrive.
        </li>
        <li>
          Make sure the goods you send are legal to import, store and sell in
          the United States, and that you have the right to sell them.
        </li>
        <li>
          Tell us in advance about anything hazardous, perishable, temperature
          sensitive, oversized or otherwise restricted.
        </li>
        <li>Pay invoices by the date stated on them.</li>
      </ul>

      <h2>What we will not accept</h2>
      <p>
        We may refuse, hold or return goods that are illegal, hazardous,
        counterfeit, unsafe or not what was declared. Where we have to do this,
        you are responsible for the cost of return or disposal.
      </p>

      <h2>Quotes and pricing</h2>
      <p>
        Prices shown on this website are indicative. A binding price is the one
        in a written quote we have issued to you. If a shipment differs
        materially from what was described — more units, different prep
        requirements, unexpected condition on arrival — we will tell you before
        additional work is carried out wherever it is practical to do so.
      </p>

      <h2>Storage</h2>
      <p>
        Short-term storage while goods are being prepared is part of the service.
        Longer storage is chargeable at the rate stated in your quote. Goods left
        with us with no instruction and no contact for an extended period may be
        returned or disposed of at your cost, after we have made reasonable
        attempts to reach you.
      </p>

      <h2>Loss and damage</h2>
      <p>
        We handle your inventory with care and we are responsible for loss or
        damage caused by our own negligence while goods are in our possession.
        We are not responsible for damage that occurred before arrival, for
        losses in transit under carriers you selected, for delays or decisions by
        Amazon or any other marketplace, or for indirect losses such as lost
        profit or lost ranking. Any limit on our liability is the one set out in
        your written agreement or quote.
      </p>

      <h2>Payment</h2>
      <p>
        Invoices are payable on the terms stated on them. We may hold goods for
        unpaid invoices. Charges we incur on your behalf — carrier fees, return
        shipping, disposal — are passed through.
      </p>

      <h2>Ending the arrangement</h2>
      <p>
        Either of us may end the arrangement in writing. On ending it, you
        arrange collection or onward shipment of any inventory we still hold and
        settle any outstanding invoices.
      </p>

      <h2>This website</h2>
      <p>
        The content, branding and design of this site belong to us. The site is
        provided as it is, and we do not warrant that it will be uninterrupted or
        error free.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Delaware, United
        States.
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
