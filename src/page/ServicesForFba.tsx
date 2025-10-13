import {  ShieldCheck, TrendingUp, Clock } from "lucide-react";
import man4 from "../asset/man4.jpg"
import product from "../asset/product.png";
import check from "../asset/check.jpg";



export default function FbaService() {
  return (
    <>
      <section className="py-16 px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto flex items-center ">

        <div className=" flex text-5xl font-inter font-medium items-start flex-col mt-12">
          <h2 className=" text-gray-900">
Simplified Workflow           </h2>
          <h2 className="text-gray-900">
for Your Amazon </h2>
          <h2 className=" text-gray-900">
            FBA Journey
            </h2>
          <p className="mt-4 text-gray-700 text-sm font-open-sans max-w-xl">
           We handle every step — from inspection to shipment — ensuring your products reach Amazon fully compliant and ready to sell
          </p>
        </div>
        <img src={product} alt="FBA box service" className="w-[24rem] object-cover  ml-8 rounded-lg shadow-lg hidden md:block"/>
        </div>


        {/* Service Details */}
        <div className="bg-white flex flex-col lg:flex-row items-center justify-between rounded-2xl shadow-md p-8 max-w-5xl mx-auto gap-8">

          


            <div className="max-w-5xl text-black mx-auto mt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-sm">
  {/* Image Section */}
  <div className="flex-shrink-0">
    <img
      src={check}
      alt="FBA Prep Illustration"
      className="w-72 h-auto rounded-xl object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col text-gray-800 max-w-xl">
    <h2 className="text-4xl font-semibold  mb-4 flex items-center gap-2 text-gray-800">
      What is FBA?
    </h2>

    <p className="mb-6 text-base leading-relaxed">
      With FBA, Amazon requires all products to be properly prepared for shipping —
      including labeling, packaging, and ensuring they meet safety and compliance standards.
      Failure to follow these requirements can lead to delays, rejections, or extra fees.
      Since Amazon and other warehouses often charge premium rates for these services,
      using a dedicated FBA prep service can help you save costs, ensure compliance, and
      streamline your fulfillment process.
    </p>

    <p className="text-sm leading-relaxed">
      Before sending your inventory directly to Amazon, choose{" "}
      <span className="font-semibold text-red-800">BlackBoxPreps</span> as your trusted
      prep partner. We handle everything — from packaging your items to Amazon’s exact
      specifications, to printing and applying labels and barcodes, and shipping them
      directly to the appropriate fulfillment center.{" "}
      <span className="font-medium text-gray-900">
        With us, your products are always Amazon-ready.
      </span>
    </p>
  </div>
</div>
</div>


        </div>
      </section>
<section>

        {/* Why Choose Us */}
       
</section>


<section className="py-16 px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-6">
      Why You Need an FBA Prep Service
    </h2>
    <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto mb-10">
      Managing FBA shipments can be time-consuming and confusing — from Amazon’s changing guidelines to packaging and labeling rules. One small mistake can lead to delays, rejections, or costly fees. Our FBA prep service removes this burden so you can focus on selling and growing your business.
    </p>
 <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 flex flex-col items-start rounded-xl border-2 border-black   shadow-md">
            <ShieldCheck className="w-10 h-10   p-2  text-white bg-black rounded-xl " />
            <h3 className="text-xl font-sans mt-2 font-medium text-gray-800">Amazon Compliance</h3>
            <p className="mt-2 font-open-sans text-sm text-start text-gray-800">
              Our prep services strictly follow Amazon’s packaging & labeling
              requirements so your products never face rejection.
            </p>
          </div>
          <div className="bg-white p-6 flex flex-col items-start rounded-xl border-2 shadow-md">
            <TrendingUp className="w-10 h-10 text-white bg-black rounded-xl p-2  " />
            <h3 className="text-xl font-sans mt-2 font-medium text-gray-800">Scalability</h3>
            <p className="mt-2 font-open-sans text-sm text-start text-gray-800">
              Whether you’re a new seller or a high-volume brand, our services
              scale to meet your business needs.
            </p>
          </div>
          <div className="bg-white p-6 flex flex-col items-start rounded-xl border-2 shadow-md">
            <Clock className="w-10 h-10 text-white bg-black rounded-xl p-2" />
            <h3 className="text-xl font-medium font-sans text-gray-800 mt-2">Fast & Reliable</h3>
            <p className="mt-2 font-open-sans  text-sm text-start text-gray-800">
              With quick turnaround and reliable logistics, your products get to
              Amazon warehouses faster, ready to sell.
            </p>
</div>
        </div>
  </div>
</section>


<section className="py-16 px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <div className="mx-auto w-fit mb-10">

    <h2 className="text-4xl font-semibold  text-gray-800 text-center">
      How We Do FBA Prep
    </h2>

    <p className="text-md mt-2">Here’s what happens after your products arrive at our facility.</p>
    </div>

    <div className="grid grid-cols-2 gap-6">
      <div className="flex bg-white p-8 border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <h2 className="border-2 border-r-0 border-black  rounded-2xl mr-4 p-6 text-center text-3xl font-normal w-20 h-20 flex items-center justify-center">
          1
        </h2>
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">
            Product Receiving & Inspection
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We receive your products, verify quantities, and carefully inspect them for any visible damage or discrepancies before storage or prep begins.
          </p>
        </div>
      </div>

      <div className="flex bg-white p-8 border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <h2 className="border-2 border-r-0 border-black rounded-2xl mr-4 p-6 text-center text-3xl font-normal w-20 h-20 flex items-center justify-center">
          2
        </h2>
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">
            Amazon Shipment Setup & Notification
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our team sets up your shipment plan and notifies Amazon of the incoming inventory, ensuring that all shipment details are fully aligned with Amazon’s requirements.
          </p>
        </div>
      </div>

      <div className="flex bg-white p-8 border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <h2 className="border-2 border-r-0 border-black rounded-2xl mr-4 p-6 text-center text-3xl font-normal w-20 h-20 flex items-center justify-center">
          3
        </h2>
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">
            FBA Prep: Repackaging, Bagging & Labeling
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We repackage, polybag, and label your products according to Amazon’s FBA standards — including FNSKU, suffocation, expiration, and other required labels.
          </p>
        </div>
      </div>

      <div className="flex bg-white p-8 border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <h2 className="border-2 border-r-0 border-black rounded-2xl mr-4 p-6 text-center text-3xl font-normal w-20 h-20 flex items-center justify-center">
          4
        </h2>
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">
            Multi-Center Shipment & Distribution
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We prepare and distribute your shipments to multiple Amazon fulfillment centers using small parcel or LTL services, ensuring cost-effective and timely delivery.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-6">
      What We Handle
    </h2>
    <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto mb-10">
      Whether you sell private label, wholesale, or online arbitrage products, 
      <span className="font-medium text-red-700"> BlackBoxPreps </span> is equipped to manage them all. 
      Our flexible prep solutions are tailored to your product type and Amazon’s exact standards.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Private Label</h3>
        <p className="text-gray-700 text-sm">From labeling to polybagging, we ensure your custom-branded items meet all Amazon FBA packaging standards.</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Wholesale</h3>
        <p className="text-gray-700 text-sm">We break down bulk shipments, inspect inventory, and prepare items for multi-center Amazon deliveries.</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Online Arbitrage / Retail</h3>
        <p className="text-gray-700 text-sm">From inspection to relabeling, we prep each product to meet Amazon’s strict compliance and packaging rules.</p>
      </div>
    </div>
  </div>
</section>
<section className="py-16 px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-6">
      Flexible Storage & Shipping Options
    </h2>
    <p className="text-gray-700 text-sm max-w-3xl mx-auto mb-10">
      Whether you’re sending 20 units or 2,000, we provide short-term storage, 
      organize shipments, and send them to Amazon’s fulfillment centers according to your schedule.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Short-Term Storage</h3>
        <p className="text-gray-700 text-sm">Secure, climate-controlled storage available for your inventory before dispatch.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Parcel & LTL Shipments</h3>
        <p className="text-gray-700 text-sm">We prepare and ship inventory to multiple Amazon centers via your preferred carrier or our partnered logistics.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Updates</h3>
        <p className="text-gray-700 text-sm">Stay informed with shipment tracking, photos, and preparation reports directly from our dashboard.</p>
      </div>
    </div>
  </div>
</section>


<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-6">
      Why Sellers Trust BlackBoxPreps
    </h2>
    <p className="text-gray-700 text-sm max-w-3xl mx-auto mb-10">
      We’re more than just a prep center — we’re your fulfillment partner. 
      Our mission is to make FBA preparation stress-free, transparent, and affordable.
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
        <p className="text-gray-700 text-sm">No hidden costs — our pricing is clear, with detailed invoices for every service.</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Trained Staff</h3>
        <p className="text-gray-700 text-sm">Every item is handled by trained professionals who know Amazon’s compliance inside out.</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
        <p className="text-gray-700 text-sm">We process and ship inventory quickly to ensure your products stay live on Amazon with minimal downtime.</p>
      </div>
    </div>
  </div>
</section>
<section className="relative mt-12 flex flex-col items-center">
  
  {/* Content Box */}
  <div className="max-w-4xl text-white text-center rounded-t-3xl pt-12 pb-6 bg-red-800 mx-auto px-6 relative z-10">
    <h2 className="text-3xl font-medium mb-4">Ready to Simplify Your FBA Prep?</h2>
    <p className="text-sm mb-8 leading-relaxed">
      Partner with <span className="font-semibold">BlackBoxPreps</span> today and experience
      stress-free product preparation, faster delivery, and complete Amazon compliance.
    </p>
    <button className="bg-white cursor-pointer text-red-800 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
      Get Started Today
    </button>
  </div>

  {/* Bottom image */}
  <img
    src={man4}
    className="w-full md:w-4xl rounded-b-2xl object-cover h-96 mx-auto "
    alt="FBA illustration"
  />
</section>


    </>
  );
}
