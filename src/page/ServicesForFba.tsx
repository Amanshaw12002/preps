import GetQuoteForm from "@/component/GetQuote";
import box2 from "../asset/box2.jpg";
import { CheckCircle, ShieldCheck, TrendingUp, Clock } from "lucide-react";

export default function FbaService() {
  return (
    <>
      <section className="bg-gray-50 py-16 mt-16 px-6">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-com text-gray-900">
            📦 Fulfilled by Amazon (FBA) Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            With our professional FBA prep services, your products are inspected,
            labeled, packed, and shipped directly to Amazon fulfillment centers —
            making them 100% ready to reach millions of Prime customers worldwide.
          </p>
        </div>

        {/* Service Details */}
        <div className="bg-white flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-md p-8 max-w-5xl mx-auto gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
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
          <img
            src={box2}
            alt="FBA packaging"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow"
          />
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Amazon Compliance</h3>
            <p className="mt-2 text-gray-600">
              Our prep services strictly follow Amazon’s packaging & labeling
              requirements so your products never face rejection.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Scalability</h3>
            <p className="mt-2 text-gray-600">
              Whether you’re a new seller or a high-volume brand, our services
              scale to meet your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Clock className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Fast & Reliable</h3>
            <p className="mt-2 text-gray-600">
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
