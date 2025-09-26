import GetQuoteForm from "@/component/GetQuote";
import {  ShieldCheck, TrendingUp, Clock } from "lucide-react";

import product1 from "../asset/IMG_6565 2.png";
import product from "../asset/product.png";
import product2 from "../asset/IMG_6347 2.png";
import product3 from "../asset/product1.png";

export default function FbaService() {
  return (
    <>
      <section className="bg-gray-50 py-16 mt-16 px-6">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-mon text-gray-900">
            Fulfilled by Amazon (FBA) Services
          </h1>
          <p className="mt-4 text-gray-700 font-open-sans max-w-3xl mx-auto">
            With our professional FBA prep services, your <span className="font-semibold text-gray-800"> products are inspected,
            labeled, packed, and shipped directly to Amazon fulfillment centers </span>—
            making them 100% ready to reach millions of Prime customers worldwide.
          </p>
        </div>

        {/* Service Details */}
        <div className="bg-white flex flex-col lg:flex-row items-center justify-between rounded-2xl shadow-md p-8 max-w-5xl mx-auto gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-inter mb-4 text-gray-800 flex items-center gap-2">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li> Product inspection & quality control before shipping</li>
              <li> Amazon-compliant labeling & barcoding</li>
              <li> Poly bagging, bubble wrapping & kitting/bundling</li>
              <li> Fragile item protection with secure packaging</li>
              <li> Carton forwarding & palletizing as per Amazon guidelines</li>
              <li> Direct delivery to Amazon fulfillment centers</li>
              <li> Scalable services for small sellers & large brands</li>
            </ul>
          </div>
          <div className="flex  flex-wrap gap-1 max-w-xl">

          <img
            src={product2}
            alt="FBM box service"
            className=" w-80 object-cover   shadow"
            />

<img
  src={product}
  alt="FBM box service"
  className="w-54  shadow"
  />
  <img
    src={product1}
    alt="FBM box service"
    className="w-54 shadow"
    />
<img
  src={product3}
  alt="FBM box service"
  className="w-80 shadow"
  />
            </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center justify-center gap-2 mb-4 ">
            <ShieldCheck className="w-10 h-10  bg-red-800 rounded-lg p-2 text-white " />
            <h3 className="text-2xl font-normal text-gray-800">Amazon Compliance</h3>
          </div>
            <p className="mt-2 font-mon text-gray-800">
              Our prep services strictly follow Amazon’s packaging & labeling
              requirements so your products never face rejection.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center justify-center gap-2 mb-4 ">
            <TrendingUp className="w-10 h-10 bg-red-800 rounded-lg p-2 text-white " />
            <h3 className="text-2xl font-normal text-gray-800">Scalability</h3>
          </div>
            <p className="mt-2 font-mon text-gray-800">
              Whether you’re a new seller or a high-volume brand, our services
              scale to meet your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center justify-center gap-2 mb-4 ">
            <Clock className="w-10 h-10 bg-red-800 rounded-lg p-2 text-white " />
            <h3 className="text-2xl font-normal text-gray-800">Fast & Reliable</h3>
          </div>
            <p className="mt-2 font-mon text-gray-800">
              With quick turnaround and reliable logistics, your products get to
              Amazon warehouses faster, ready to sell.
            </p>
</div>
        </div>
      </section>

      <GetQuoteForm />
    </>
  );
}
