import { Package, ShoppingBag, DollarSign, Truck, Warehouse } from "lucide-react";
import ContactForm from "@/component/ContactForm";

export default function Pricing() {

  return (
<>
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-mon text-gray-900">
           Our Pricing
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Transparent and competitive pricing for Amazon prep services. 
          <span className="font-medium text-gray-800"> No hidden fees</span> — pay only for what you use.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Online Arbitrage */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition p-10">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="w-8 h-8 text-gray-600" />
            <h2 className="text-2xl font-sans text-gray-800">Online Arbitrage</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>0–999 units/month: <span className="font-semibold text-gray-900">$1.20 / unit</span></li>
            <li>1,000+ units/month: <span className="font-semibold text-gray-900">$1.00 / unit</span></li>
          </ul>
          <p className="text-sm text-gray-500 mt-4 italic">*Box price not included</p>
        </div>

        {/* Wholesale & Private Label */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition p-10">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-8 h-8 text-gray-600" />
            <h2 className="text-2xl font-sans text-gray-800">Wholesale & Private Label</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>0–999 units/month: <span className="font-semibold text-gray-900">$0.70 / unit</span></li>
            <li>1,000+ units/month: <span className="font-semibold text-gray-900">$0.50 / unit</span></li>
          </ul>
          <p className="text-sm text-gray-500 mt-4 italic">*Box price not included</p>
        </div>
      {/* Additional Fees */}
      <div className="max-w-6xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-10">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign className="w-8 h-8 text-gray-600" />
          <h2 className="text-2xl font-sans text-gray-800">Additional Fees</h2>
        </div>
        <ul className="grid md:grid-cols-1 gap-y-3 text-gray-700">
          <li>Fragile (bubble wrap): <span className="font-semibold">+$0.10 / foot</span></li>
          <li>Oversized/Overweight (5+ lbs): <span className="font-semibold">+$0.50 / unit</span></li>
          <li>Multi-pack / bundle: <span className="font-semibold">+$0.15 each</span></li>
        </ul>
      </div>
      {/* Additional Services */}
      <div className="max-w-6xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-10">
        <div className="flex items-center gap-3 mb-6">
          <Truck className="w-8 h-8 text-gray-600" />
          <h2 className="text-2xl font-sans text-gray-800">Additional Services</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-y-3 text-gray-700">
          <li>Merchant Fulfillment: <span className="font-semibold">+$1.00 / unit + box price</span></li>
          <li>Return to supplier: <span className="font-semibold">+$2.00 / return</span></li>
        </ul>
      </div>
      </div>



      {/* Storage */}
      <div className="max-w-6xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-10">
        <div className="flex items-center gap-3 mb-6">
          <Warehouse className="w-8 h-8 text-gray-600" />
          <h2 className="text-2xl font-sans text-gray-800">Storage</h2>
        </div>
        <ul className="space-y-3 text-gray-700">
          <li>First 14 days: <span className="font-semibold text-green-600">Free</span></li>
          <li>After 14 days: <span className="font-semibold text-gray-900">$0.01 / day per unit</span></li>
        </ul>
      </div>
    </section>
        
      <ContactForm />
</>
  );
}
