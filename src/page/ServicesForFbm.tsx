
import Head from "@/component/Head";
import product1 from "../asset/IMG_6565 2.webp";

import {  Package, DollarSign, Truck } from "lucide-react";

export default function FbmService() {


  return (
    <>
      <Head
        title="FBM & Wholesale Fulfillment | BlackBoxPreps"
        description="Merchant-fulfilled pick, pack and ship for Amazon FBM and wholesale orders, handled from our Delaware prep center."
        canonical="/service/fbm"
      />
    
      <section className="bg-gray-50 py-16 mt-16 px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto flex items-start flex-col mb-12">
          <h1 className="text-3xl font-sans  text-gray-900">
             Fulfilled by Merchant (FBM) Services
          </h1>
          <p className="mt-4 text-gray-800 font-open-sans text-sm max-w-xl ">
            FBM lets you handle fulfillment on your terms—keeping full control over
            storage, packaging, and shipping. We simplify the process with 
            streamlined logistics and support, so you can focus on growing your
            Amazon business while we handle the heavy lifting.
          </p>
        </div>

        {/* Service Details */}

      </section>

<section className="py-16 px-6">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
    {/* Image Section */}
    <div className="flex-shrink-0">
      <img loading="lazy" decoding="async"
        src={product1}
        alt="FBM Illustration"
        className="w-72 h-auto rounded-xl object-cover shadow-md"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col text-gray-800 max-w-xl">
      <h2 className="text-4xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
        What is FBM?
      </h2>
      <p className="mb-6 text-base leading-relaxed">
        Fulfilled by Merchant (FBM) allows you, the seller, to manage storage, packaging, and shipping of your products yourself.
        You retain full control over your inventory and fulfillment methods, unlike FBA where Amazon handles it for you.
      </p>
      <p className="text-sm leading-relaxed">
        Choosing <span className="font-semibold text-red-800">BlackBoxPreps</span> as your FBM partner ensures that
        your products are stored securely, picked and packed professionally, and shipped reliably.
        We help you manage the heavy lifting while you focus on selling and growing your business.
      </p>
    </div>
  </div>
</section>




         <section className="py-16 px-6 bg-gray-100">
        {/* Why Choose Us */}
        <h2 className="text-4xl max-w-5xl mx-auto font-medium">Why Choose FBM with Us</h2>
        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 flex flex-col items-start rounded-xl border-2 border-black   shadow-md">
            <Package className="w-10 h-10  text-white bg-black p-2 rounded-xl" />
            <h3 className="text-xl font-medium  text-gray-800 mt-2">Flexibility</h3>
            <p className="mt-2 text-gray-800 text-start  text-sm font-open-sans">
              Handle fulfillment on your terms—choose your carriers, packaging, and
              schedules while we provide the infrastructure.
            </p>
          </div>
          <div className="bg-white p-6 flex flex-col items-start rounded-xl border-2 border-black   shadow-md">
            <DollarSign className="w-10 h-10  text-white bg-black p-2 rounded-xl " />
            <h3 className="text-xl font-medium mt-2 text-gray-800">Cost-Effective</h3>
            <p className="mt-2 text-gray-800 text-start  text-sm font-open-sans">
              Pay only for the services you use. Our tailored solutions keep your
              fulfillment affordable and scalable.
            </p>
          </div>
          <div className="bg-white p-6 flex flex-col items-start rounded-xl border-2 border-black   shadow-md">
            <Truck className="w-10 h-10  text-white bg-black rounded-xl p-2" />
            <h3 className="text-xl font-medium mt-2  text-gray-800">Reliable</h3>
            <p className="mt-2 text-gray-800 text-start  text-sm font-open-sans">
              With fast processing and strong logistics partners, we ensure your
              customers receive orders on time, every time.
            </p>
          </div>
        </div>
      </section>
         <section className="py-16 px-6 bg-gray-100">
  <h2 className="text-4xl font-semibold mb-4 mx-auto max-w-5xl flex items-center gap-2 text-gray-800">
    How we do FBM Prep
  </h2>

  <div className="grid md:grid-cols-2 mx-auto max-w-5xl gap-6 mt-8">

    {/* Step 1 */}
    <div className="flex bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="border-2 rounded-2xl m-4 p-6 text-center text-4xl">1</h2>
      <div className="flex flex-col">
        <h3 className="text-md font-semibold mb-2">Product Storage & Inventory Management</h3>
        <p className="text-gray-700 text-xs leading-relaxed">
          We securely store your inventory in our warehouse and maintain accurate tracking to ensure your stock levels are always up to date.
        </p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="border-2 rounded-2xl m-4 p-6 text-center text-4xl">2</h2>
      <div className="flex flex-col">
        <h3 className="text-md font-semibold mb-2">Order Processing & Pick-Pack Services</h3>
        <p className="text-gray-700 text-xs leading-relaxed">
          Once an order is placed, we pick, pack, and prepare your items for direct shipment to your customers with professional care and accuracy.
        </p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="border-2 rounded-2xl m-4 p-6 text-center text-4xl">3</h2>
      <div className="flex flex-col">
        <h3 className="text-md font-semibold mb-2">Custom Packaging & Branding</h3>
        <p className="text-gray-700 text-xs leading-relaxed">
          We offer custom packaging and inserts, helping your brand stand out while maintaining the professionalism expected by your customers.
        </p>
      </div>
    </div>

    {/* Step 4 */}
    <div className="flex bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="border-2 rounded-2xl m-4 p-6 text-center text-4xl">4</h2>
      <div className="flex flex-col">
        <h3 className="text-md font-semibold mb-2">Shipping & Tracking Management</h3>
        <p className="text-gray-700 text-xs leading-relaxed">
          We handle the shipping process end-to-end — from generating labels to carrier coordination — and provide full tracking visibility for you and your customers.
        </p>
      </div>
    </div>

  </div>
</section>

<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-6">
      Types of Products We Handle
    </h2>
    <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto mb-10">
      From private label and wholesale to retail arbitrage, we manage each product type 
      with the care and compliance needed for FBM fulfillment.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Private Label</h3>
        <p className="text-gray-700 text-sm">Custom branding, labeling, and packaging tailored to your products.</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Wholesale</h3>
        <p className="text-gray-700 text-sm">Bulk handling, quality inspection, and efficient distribution for your business.</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Retail Arbitrage</h3>
        <p className="text-gray-700 text-sm">Inspection, relabeling, and repackaging to ensure your items meet Amazon standards.</p>
      </div>
    </div>
  </div>
</section>

<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-6">
      Common FBM Challenges & How We Solve Them
    </h2>
    <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto mb-10">
      FBM fulfillment can be tricky — from inventory errors to missed shipping deadlines. 
      We provide solutions that remove stress and improve your customer experience.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Inventory Management</h3>
        <p className="text-gray-700 text-sm">
          Accurate tracking and reporting prevent stockouts and overselling.
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipping Errors</h3>
        <p className="text-gray-700 text-sm">
          Professional pick-pack services ensure orders go out correctly and on time.
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Returns</h3>
        <p className="text-gray-700 text-sm">
          We help manage returns efficiently, keeping your inventory organized and customer satisfaction high.
        </p>
      </div>
    </div>
  </div>
</section>


    </>
  );
}
