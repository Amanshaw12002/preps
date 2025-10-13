import { Package, ShoppingBag, DollarSign, Truck, Warehouse } from "lucide-react";
import { Settings} from "lucide-react";
export default function Pricing() {

  return (
<>
<section className="relative pb-24 z-10">
  {/* Background Gradient */}
  <div className="absolute top-0 h-64 bg-gradient-to-b from-red-900 via-red-800 to-red-700 w-full -z-1"></div>

  <div className="mx-auto max-w-6xl pt-32 z-10">
    {/* Section Heading */}
    <div className="max-w-5xl mx-auto text-center mb-16">
      <h1 className="text-6xl font-mon  mb-4 text-white">Our Pricing</h1>
      <h2 className="text-md text-white mx-auto">
        Transparent and competitive pricing for Amazon prep services.
        <span className="font-medium text-yellow-300"> No hidden fees</span> — pay
        only for what you use.
      </h2>
    </div>

         <h2 className=" w-fit  mx-auto text-center mb-12 font-semibold  p-2   text-6xl">Choose Your Plan</h2>
    {/* Pricing Cards */}
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl xl:max-w-6xl mx-auto">
      {/* Online Arbitrage */}
      <div className="bg-gray-200 rounded-xl shadow-md shadow-black border-gray-400 border hover:scale-105 duration-600 p-6 flex flex-col transition">
        <div className="flex items-center gap-2 mb-6">
                    <ShoppingBag className="w-8  h-8 p-1 text-red-700  border-2 rounded-lg" />

          <h2 className="text-lg font-semibold text-gray-900">Online Arbitrage</h2>
        </div>

        <ul className="space-y-2 text-gray-700 text-sm mb-6">
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 text-white rounded-lg">
            <span className="font-medium text-black">0–999 units/mo</span>
            <span className="font-semibold bg-red-700 border-l border-gray-400 p-2 rounded-r-lg text-white">$1.20 / unit</span>
          </li>
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium text-black">1,000+ units/mo</span>
            <span className="font-semibold bg-red-700 border-l border-gray-400 p-2 rounded-r-lg text-white">$1.00 / unit</span>
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-gray-800 mb-2">Additional Fees</h3>
        <ul className="space-y-2 text-gray-700 text-sm mb-6">
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium text-gray-800">Fragile(bubble wrap)</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">+$0.10 / foot</span>
          </li>
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium flex flex-wrap text-gray-800">Oversized/Overweight (5+ lbs)</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">+$0.50 / unit</span>
          </li>
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium flex flex-wrap text-gray-800">Multi-pack / bundle</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">+$0.15 each</span>
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-gray-800 mb-2">Additional Services</h3>
        <ul className="space-y-2 text-gray-700 text-sm mb-6">
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium flex flex-wrap text-gray-800">Merchant Fulfillment</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">+$1.00 / unit + box price</span>
          </li>
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium flex flex-wrap text-gray-800">Return to supplier</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">+$2.00 / return</span>
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-gray-800 mb-2">Storage</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="bg-gray-50 pl-2 py-2 text-gray-900 border-gray-500 border rounded-lg">
            First 14 days: <span className="font-semibold text-green-600">Free</span>
          </li>
          <li className="bg-gray-50 pl-4 border border-gray-400 flex-between rounded-lg">
            <span className="font-medium flex flex-wrap text-gray-800">After 14 days</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">$0.01 / day per unit</span>
          </li>
        </ul>

        <p className="text-xs text-gray-900 mt-4 italic">*Box price not included</p>
      </div>




      <div className="bg-[#292929] rounded-xl shadow-md shadow-black border-gray-400 border p-6 flex flex-col hover:scale-105  duration-600 transition">
        <div className="flex items-center gap-2 mb-6 text-white">
                    <Package className="w-8  h-8 p-1   border-2 text-red-700 rounded-lg"/>

          <h2 className="text-lg font-semibold ">Wholesale & Private Label</h2>
        </div>

        <ul className="space-y-2 text-gray-700 text-sm mb-6">
          <li className=" pl-4 flex-between bg-gray-100 border border-white rounded-lg">
            <span className="font-medium  text-black">0–999 units/mo</span>
            <span className="font-semibold bg-red-700 border-l border-gray-900 p-2 rounded-r-lg text-white">$0.70 / unit</span>
          </li>
          <li className="pl-4 flex-between border bg-gray-100 border-white rounded-lg">
            <span className="font-medium text-black">1,000+ units/mo</span>
            <span className="font-semibold bg-red-800 border-l border-red-600 p-2 rounded-r-lg text-white">$0.50 / unit</span>
          </li>
        </ul>

<h3 className="text-sm font-semibold text-white mb-2">Additional Fees</h3>
        <ul className="space-y-2 text-gray-700 text-sm mb-6">
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium text-gray-800">Fragile(bubble wrap)</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">+$0.10 / foot</span>
          </li>
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium flex flex-wrap text-gray-800">Oversized/Overweight (5+ lbs)</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">+$0.50 / unit</span>
          </li>
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium flex flex-wrap text-gray-800">Multi-pack / bundle</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">+$0.15 each</span>
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-white mb-2">Additional Services</h3>
        <ul className="space-y-2 text-gray-700 text-sm mb-6">
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium flex flex-wrap text-gray-800">Merchant Fulfillment</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">+$1.00 / unit + box price</span>
          </li>
          <li className="bg-gray-50 pl-4 flex-between border border-gray-400 rounded-lg">
            <span className="font-medium flex flex-wrap text-gray-800">Return to supplier</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">+$2.00 / return</span>
          </li>
        </ul>

        <h3 className="text-sm font-semibold text-white mb-2">Storage</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="bg-gray-50 pl-2 py-2 text-gray-900 border-gray-500 border rounded-lg">
            First 14 days: <span className="font-semibold text-green-600">Free</span>
          </li>
          <li className="bg-gray-50 pl-4 border border-gray-400 flex-between rounded-lg">
            <span className="font-medium flex flex-wrap text-gray-800">After 14 days</span>
            <span className="font-semibold bg-white border-l border-gray-400 p-2 rounded-r-lg text-black">$0.01 / day per unit</span>
          </li>
        </ul>
        <p className="text-xs text-gray-50 mt-4 italic">*Box price not included</p>
      </div>

      {/* Custom Plan */}
      <div className="bg-white rounded-xl shadow-md shadow-black border-gray-400 p-6 hover:scale-105 duration-600 border-1 flex flex-col transition">
        <div className="flex items-center gap-2 mb-6">
          <Settings className="w-8 h-8 p-1 text-black border-2 rounded-lg" />
          <h2 className="text-lg font-semibold text-gray-800">Custom Plan</h2>
        </div>

        <p className="text-gray-700 text-sm mb-4">
          Tailored for businesses with unique requirements. Combine prep, fulfillment,
          and storage options to fit your specific needs.
        </p>

        <ul className="space-y-2 text-gray-700 text-sm mb-6">
          <li>Flexible unit rates</li>
          <li>Bulk discounts available</li>
          <li>Custom service combinations</li>
        </ul>

        <h3 className="text-md font-semibold text-gray-800 mb-2">Includes:</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><DollarSign className="inline w-4 h-4 mr-1" /> Additional Fees</li>
          <li><Truck className="inline w-4 h-4 mr-1" /> Additional Services</li>
          <li><Warehouse className="inline w-4 h-4 mr-1" /> Storage Options</li>
        </ul>
        <div className="mt-auto">

        <button className="font-semibold text-lg w-full border-2 border-gray-400  bg-gray-200 text-black  cursor-pointer rounded-sm py-2  ">Contact Us</button>

        <p className="text-xs text-gray-500 mt-2 italic">Contact us for a personalized quote.</p>
      </div>
      </div>
    </div>
  </div>
</section>

    
</>
  );
}
