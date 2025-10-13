import { ShieldCheck, Eye, Layers} from "lucide-react";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-800" />,
      title: "Retail-Grade Accuracy",
      desc: "Every order goes through a multi-step QC process with barcode verification and photo documentation to ensure 100% compliance with Amazon, Walmart, and wholesale standards.",
    },
    {
      icon: <Eye className="w-6 h-6 text-red-800" />,
      title: "Transparent Operations",
      desc: "Full visibility through order tracking, prep reports, and proof-of-prep images — no hidden steps, no surprises.",
    },
    {
      icon: <Layers className="w-6 h-6 text-red-800" />,
      title: "Scalable Infrastructure",
      desc: "Our systems and workforce scale effortlessly with your seasonal demand — ensuring consistent turnaround even during peak season.",
    },
    
  ];

  return (
    <section className="py-24 bg-red-100">
      <div className="max-w-6xl mx-auto px-6 text-center  rounded-2xl">
        <div className="w-full flex items-center px-8">

        <h2 className="text-5xl font-semibold font-inter w-fit text-gray-800 text-left  m-4">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-red-800 to-red-800">What Sets Us Apart</span>
        </h2>
        <p className="text-xl text-right font-inter text-gray-800 max-w-lg ml-auto border-t-2 border-black pt-2">
          We go beyond basic prep — offering precision, reliability, and a true partnership
          built for<span className="font-semibold block">  scalable e-commerce growth.</span>
        </p>
</div>
        <div className="grid md:grid-cols-3 gap-6 p-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" border border-red-800 group  hover:border-red-800 rounded-2xl shadow-sm hover:shadow-md p-6 text-left transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-3 flex items-center justify-start">
                <div className="p-3  rounded-xl border-red-800 border">{feature.icon}</div>
              </div>
              <h3 className="text-md font-semibold text-red-800 mb-2">
                {feature.title}
              </h3>
              <p className="group-hover: text-sm text-gray-800 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
