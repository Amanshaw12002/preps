import SectionLayout from "@/layout/sectionLayout";
import { motion } from "framer-motion";
import { ChevronRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SecondSection() {
  return (
    <>
    <SectionLayout>
        

      <div className="flex-between flex-col  pl-4 gap-4   my-8">
        <h2 className="text-4xl font-semibold  ">Build upon  performance & experience.</h2>
                    <span className="block  font-medium      text-black "> BlackBoxPreps handle the rest, while you focus on growth.</span>

        <div className="flex-between w-fit gap-4  mt-2">

              <Link to="/quote" className=" border-2 group overflow-hidden flex-between   py-2.5 px-3.5 rounded-xl  w-fit text-md font-semibold  transition">
                         <ChevronRight className=" -translate-x-8  group-hover:translate-x-4 transition duration-700"/>

              <span className=" text-black py-1 px-3 rounded-lg -translate-x-4 group-hover:translate-x-4 transition duration-700">Get Started</span>
              <MoveRight className="p-0.5 -translate-x-4 group-hover:translate-x-9 transition duration-700"/>
            </Link>
            <Link 
                to="/pricing"  
                
                className="w-fit bg-gradient-to-r from-black to-red-600   border-2 hover:border-red-600 border-black bg-clip-text text-transparent text-md rounded-lg text-center font-semibold px-5 py-3 transition  "
                >
               Check Pricing
              </Link>
               
            </div>
        
        <div className="flex flex-col items-start gap-2 mb-6">

        <div className="flex-between   w-fit">

                         <ChevronRight className=" "/>
        <p>Our 200+ clients trust us.Be next join us.</p>
        </div>
        </div>

        <div className="flex-between w-10/12 gap-4">
        {[
            { number: "100K+", shadow:'shadow-red-500',title: "Orders Processed", desc: "Successfully prepped and shipped units.", border: "border-red-400", bg: "from-red-200", color: "text-red-700" },
            {
                number: "★ ★ ★ ★ ★",
                title: "Full 5 Stars Rating",
  desc: "From verified client reviews and testimonials.",
  border: "border-black",
  shadow:'shadow-black',
  bg: "from-white",
  color: "text-black",
},
{ number: "24-48h", title: "Average Turnaround",shadow:'shadow-red-600', desc: "Fast processing from receiving to shipment", border: "border-red-500", bg: "from-red-200", color: "text-red-700" },
{ number: "100%", title: "Tax Advantage",shadow:'shadow-black', desc: "Operating from Delaware's tax-free zone", border: "border-black", bg: "from-white", color: "text-gray-900" }
].map((stat, index) => (
          <motion.div
          key={index}
          className={`border ${stat.border} hover:shadow-lg hover:scale-105  transition-all duration-600  ${stat.shadow} bg-white rounded-2xl flex flex-col items-start p-4 w-52`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className={`text-2xl font-inter font-normal mb-2 ${stat.color}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
              {stat.number}
            </motion.h2>
            <motion.p 
              className={`${stat.color} text-xs font-semibold mb-2`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
              >
              {stat.title}
            </motion.p>
            <motion.p 
              className={`${stat.color.replace('800', '700').replace('800', '700')} text-xs text-left`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
              {stat.desc}
            </motion.p>
          </motion.div>
        ))}
        </div>
      </div>
     
    </SectionLayout>
    </>
  )
}
