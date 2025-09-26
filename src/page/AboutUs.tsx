
import { Briefcase, Users, Target, Globe } from "lucide-react";
export default function AboutUs() {
  return (
    <section className="bg-gray-50 flex-center py-16 mt-12 px-6">
      <div className="max-w-7xl">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-6xl font-mon text-gray-900"> About Us</h1>
        <p className="mt-4 text-gray-600 font-open-sans max-w-3xl mx-auto">
          At <span className="font-mon  text-red-800">BlackBoxPreps</span>, 
          we help Amazon sellers grow by <span className="font-semibold"> simplifying  FBA & FBM prep services.</span> 
          From packaging and labeling to storage and fulfillment, 
          we ensure your products reach customers with speed and reliability.
        </p>
      </div>

      {/* Our Story */}
      <div className="grid md:grid-cols-2 text-sm md:text-md   ">

      <div className=" mx-auto bg-white rounded-2xl shadow-md p-8 mb-12">
        <h2 className="text-2xl font-sans text-gray-800 mb-4">-Our Story</h2>
        <p className="text-gray-700 font-open-sans leading-relaxed">
          We started with a simple goal: to make Amazon fulfillment easier for sellers. 
          Many businesses struggle with packaging compliance, warehouse management, and 
          timely shipping. That’s where we step in — acting as your trusted partner to 
          handle the heavy lifting so you can focus on scaling your brand.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-12">
        <h2 className="text-2xl font-sans text-gray-800 mb-4">-Why Choose Us?</h2>
        <ul className="list-disc list-inside font-open-sans text-gray-700 space-y-3">
          <li> Amazon-compliant packaging & labeling</li>
          <li> Transparent & competitive pricing</li>
          <li> Fast turnaround times & reliable shipping</li>
          <li> Secure storage with flexible options</li>
          <li> Dedicated customer support for every client</li>
        </ul>
      </div>
      </div>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <Target className="h-12 w-12 border-2 rounded-sm p-1 text-red-600  mb-4" />
            <h3 className="text-xl font-sans border-l-2 pl-2 text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 font-open-sans">
              To deliver exceptional logistics services that help our clients
              succeed in competitive marketplaces.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <Briefcase className="h-12 w-12 border-2 rounded-sm p-1 text-black  mb-4" />
            <h3 className="text-xl font-sans border-l-2 pl-2 text-gray-800  mb-2">Our Experience</h3>
            <p className="text-gray-600 font-open-sans">
              With years of experience in FBA, FBM, and wholesale services, we
              provide tailored solutions for every seller’s needs.
            </p>
          </div>

          {/* Team */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <Users className="h-12 w-12 border-2 rounded-sm p-1 text-purple-600  mb-4" />
            <h3 className="text-xl font-sans text-gray-800 border-l-2 pl-2 mb-2">Our Team</h3>
            <p className="text-gray-600 font-open-sans">
              A passionate and skilled team committed to guiding clients through
              every step of their business journey.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <Globe className="h-12 w-12 border-2 text-gray-600 rounded-sm p-1 mb-4" />
            <h3 className="text-xl font-sans text-gray-800 border-l-2 pl-2 mb-2">Our Vision</h3>
            <p className="text-gray-600 font-open-sans">
              To be a global leader in logistics solutions, setting new
              standards of trust and efficiency.
            </p>
          </div>
        </div></div>
    </section>
  );
}
