import packing from "../asset/packing.jpg";
import man from "../asset/man.jpg";
import { Briefcase, Users,  Globe } from "lucide-react";
export default function AboutUs() {
  return (
    <section className=" flex-center py-16 mt-24 px-6">
      <div className="max-w-6xl">
      <div className="max-w-5xl mx-12 flex-between  mb-12">
        <h1 className="text-6xl font-mon text-gray-800"> About Us </h1>
        <p className="mt-4 text-gray-900 font-sans text-xs max-w-lg ">
           
          We help Amazon sellers grow by <span className="font-semibold"> simplifying  FBA & FBM prep services.</span> 
          From packaging and labeling to storage and fulfillment, 
          we ensure your products reach customers with speed and reliability.
        </p>
      </div>

      {/* Our Story */}
      <div className="flex-col flex text-sm md:text-md  mx-auto   ">
          <div className=" flex-between mx-12 mb-4 bg-gradient-to-b from-gray-300 to-gray-400  transition">
            <img src={man} alt="packing" className="w-54 object-cover m-4"/>
<div className="flex flex-col max-w-3xl p-4 m-4">

            <h3 className="text-3xl font-sans  text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-800 text-md font-open-sans">
              To deliver exceptional logistics services that help our clients
              succeed in competitive marketplaces.We started with a simple goal: to make Amazon fulfillment easier for sellers. 
          Many businesses struggle with packaging compliance, warehouse management, and 
          timely shipping. That’s where we step in — acting as your trusted partner to 
          handle the heavy lifting so you can focus on scaling your brand.
            </p>
</div>
          </div>

<img src={packing} className="object-cover h-96"/>
      {/* Why Choose Us */}
      <div className="max-w-6xl max-auto bg-gray-200  flex-between  p-8 my-4">
        <h2 className="text-4xl font-sans text-gray-800 mb-4 flex flex-col">Why Choose Us?</h2>
        <ul className="list-disc list-inside font-open-sans text-gray-700 space-y-3">
          <li> Amazon-compliant packaging & labeling</li>
          <li> Transparent & competitive pricing</li>
          <li> Fast turnaround times & reliable shipping</li>
          <li> Secure storage with flexible options</li>
          <li> Dedicated customer support for every client</li>
        </ul>
      </div>
      </div>
  <div className="grid  lg:grid-cols-3 gap-8">
          {/* Mission */}

          {/* Experience */}
          <div className="bg-white border-2 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <Briefcase className="h-12 w-12 border-2 rounded-xl p-2 text-white bg-black  mb-4" />
            <h3 className="text-xl font-sans font-medium  text-black  mb-2">Our Experience</h3>
            <p className="text-gray-700 font-open-sans">
              With years of experience in FBA, FBM, and wholesale services, we
              provide tailored solutions for every seller’s needs.
            </p>
          </div>

          {/* Team */}
          <div className="bg-white border-2 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <Users className="h-12 w-12 border-2 rounded-xl p-2 text-white bg-black  mb-4" />
            <h3 className="text-xl font-sans font-medium text-black  mb-2">Our Team</h3>
            <p className="text-gray-700 font-open-sans">
              A passionate and skilled team committed to guiding clients through
              every step of their business journey.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-cyan-400 to-red-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <Globe className="h-12 w-12 border-2 text-white rounded-xl p-1 mb-4" />
            <h3 className="text-xl font-sans font-medium text-white   mb-2">Our Vision</h3>
            <p className="text-gray-700 font-open-sans">
              To be a global leader in logistics solutions, setting new
              standards of trust and efficiency.
            </p>
          </div>
        </div></div>
    </section>
  );
}
