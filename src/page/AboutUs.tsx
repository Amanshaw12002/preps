import man2 from "../asset/man2.jpg";
import maninblack from "../asset/maninblack.png";
import man3 from "../asset/man3.jpg";
import { Briefcase, Users, Globe } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      {/* ======================= Section 1: About Intro ======================= */}
      <section className="relative  flex-center flex-center flex-col mt-20 ">
        <div className="flex items-center justify-between max-w-5xl mx-auto bg-radial from-transparent via-black via-60% to-black h-96 rounded-2xl gap-8 ">
          <h1 className="text-9xl mt-auto   text-white ">
            About Us
          </h1>
          <p className="text-gray-100 font-sans w-lg  text-sm  mt-auto mb-12">
            We help Amazon sellers grow by{" "}
            <span className="font-semibold">simplifying FBA & FBM prep services.</span>
            From packaging and labeling to storage and fulfillment, we ensure your
            products reach customers with speed and reliability.
          </p>
        </div>
        

        <div className="w-5xl  mx-auto h-96 absolute top-0  -z-1">
        <img
          src={maninblack}
          className="object-cover  w-6xl h-96  rounded-2xl shadow-lg"
          alt="Our team"
          />
          </div>
      </section>

      {/* ======================= Section 2: Our Mission ======================= */}
      <section className="flex flex-col items-center text-center bg-black/90 text-white py-20 mt-20 px-6">
        <h3 className="text-4xl md:text-5xl font-sans text-gray-300 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-500 text-3xl max-w-4xl leading-relaxed">
          To deliver <span className="text-gray-200">exceptional logistics services</span>{" "}
          that help our clients succeed in competitive marketplaces. We started
          with a <span className="text-gray-200">simple goal: to make Amazon
          fulfillment easier </span> for sellers. Many businesses struggle with packaging
          compliance, warehouse management, and timely shipping. That’s where we
          step in — acting as <span className="text-white">your trusted partner</span>{" "}
          to handle the heavy lifting so you can{" "}
          <span className="text-gray-100">focus on scaling your brand.</span>
        </p>

        <img
          src={man2}
          className="object-cover h-96 w-5xl mx-auto rounded-2xl mt-12 shadow-lg"
          alt="Packing process"
        />
      </section>

      {/* ======================= Section 3: Why Choose Us ======================= */}
      <section className="bg-gray-100 py-20 px-6 mt-20">
        <div className="w-6xl mx-auto flex items-start">

          <h2 className="text-5xl   font-medium mb-12  ">Work become play with our experience team members</h2>
        </div>
        <div className="max-w-6xl flex mx-auto">
          {/* Cards */}
          <img src={man3} className="w-lg"/>
         </div>
      </section>
      <section className="bg-gray-100 py-20 px-6 mt-20">
        <div className="w-6xl mx-auto flex items-start">
           <div className="grid md:grid-cols-3 gap-8 m-12">
            {/* Experience */}
            <div className="bg-white border rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <Briefcase className="h-12 w-12 border-2 rounded-xl p-2 text-white bg-black mb-4" />
              <h3 className="text-xl font-sans font-medium text-black mb-2">
                Our Experience
              </h3>
              <p className="text-gray-700 font-open-sans">
                With years of experience in FBA, FBM, and wholesale services, we
                provide tailored solutions for every seller’s needs.
              </p>
            </div>

            {/* Team */}
            <div className="bg-white border rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <Users className="h-12 w-12 border-2 rounded-xl p-2 text-white bg-black mb-4" />
              <h3 className="text-xl font-sans font-medium text-black mb-2">
                Our Team
              </h3>
              <p className="text-gray-700 font-open-sans">
                A passionate and skilled team committed to guiding clients through
                every step of their business journey.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-cyan-400 to-red-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <Globe className="h-12 w-12 border-2 text-white rounded-xl p-1 mb-4" />
              <h3 className="text-xl font-sans font-medium text-white mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700 font-open-sans">
                To be a global leader in logistics solutions, setting new
                standards of trust and efficiency.
              </p>
            </div>
          </div>
        
         </div>
      </section>
      
    
      
    </>
  );
}
