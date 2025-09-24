import GetQuoteForm from "@/component/GetQuote";
import product1 from "../asset/IMG_6565 2.png";
import product from "../asset/product.png";
import product2 from "../asset/IMG_6347 2.png";
import product3 from "../asset/product1.png";

import {  Package, DollarSign, Truck } from "lucide-react";

export default function FbmService() {
  return (
    <>
      <section className="bg-gray-50 py-16 mt-16 px-6">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-mon text-gray-900">
             Fulfilled by Merchant (FBM) Services
          </h1>
          <p className="mt-4 text-gray-600 font-open-sans max-w-3xl mx-auto">
            FBM lets you handle fulfillment on your terms—keeping full control over
            storage, packaging, and shipping. We simplify the process with 
            streamlined logistics and support, so you can focus on growing your
            Amazon business while we handle the heavy lifting.
          </p>
        </div>

        {/* Service Details */}
        <div className="bg-white flex flex-col lg:flex-row items-center justify-between rounded-2xl shadow-md p-8 max-w-5xl mx-auto gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-inter mb-4 text-gray-800 flex items-center gap-2">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li> Secure & climate-controlled warehouse storage</li>
              <li> Pick, pack & ship directly to customers across regions</li>
              <li> Custom packaging, inserts, and branding options</li>
              <li> Real-time order tracking & automated updates</li>
              <li> Professional returns handling & customer support</li>
              <li> Scalable operations whether you ship 10 or 10,000 orders</li>
              <li> Cost-effective logistics tailored to your business size</li>
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
            <Package className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Flexibility</h3>
            <p className="mt-2 text-gray-600">
              Handle fulfillment on your terms—choose your carriers, packaging, and
              schedules while we provide the infrastructure.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Cost-Effective</h3>
            <p className="mt-2 text-gray-600">
              Pay only for the services you use. Our tailored solutions keep your
              fulfillment affordable and scalable.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Truck className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Reliable</h3>
            <p className="mt-2 text-gray-600">
              With fast processing and strong logistics partners, we ensure your
              customers receive orders on time, every time.
            </p>
          </div>
        </div>
      </section>

      <GetQuoteForm />
    </>
  );
}
