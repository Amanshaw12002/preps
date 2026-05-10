import { motion } from "framer-motion";
import { ChevronRight, MoveRight } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SecondSection() {
  return (
    <>
    <section 
        className=' relative bg-white max-w-7xl mx-auto py-8'  >
        

      <div className="flex-between relative flex-col   pl-4 gap-4  my-8">
       <h2 className="mx-auto z-10  text-black bg-white font-medium  border px-2 py-1 rounded-lg">STATS</h2>
       <div className="bg-black h-px absolute top-4 left-1/4 w-1/2 z-0">
   <div className="flex-between -mt-1.5">

   <div className="bg-white border-black border-2 rounded-sm h-3.5 w-3 "></div>
   <div className="bg-white border-black border-2 rounded-sm h-3.5 w-3"></div>
   </div>
  </div>

        <h2 className="text-4xl font-semibold  ">Prep, Packed, & Shipped Without Delays.</h2>
                    <span className="block  font-medium text-sm      text-gray-700"> Leave the steps to BlackBoxPreps, while you focus on growth.</span>

        <div className="flex-between w-fit gap-4  mt-2">

              <Link to="/quote" className=" border-2 group overflow-hidden flex-between   py-2.5 px-3.5 rounded-xl  w-fit text-md font-semibold  transition">
                         <ChevronRight className=" -translate-x-8  group-hover:translate-x-4 transition duration-700"/>

              <span className=" text-black py-1 px-3 rounded-lg -translate-x-4 group-hover:translate-x-4 transition duration-700">Start Sending Inventory</span>
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

                         <ChevronRight className=" w-4 sm:w-6"/>
        <p className="text-xs ">Trusted by 500+ Amazon Sellers.</p>
        </div>
        </div>

        <div className="flex-between flex-col sm:flex-row w-10/12 gap-4">
        {[
          { number: "100%", title: "Tax Advantage",shadow:'shadow-yellow-400', desc: "Operating from Delaware's tax-free zone", border: "border-yellow-400", bg: "from-white", color: "text-yellow-700",svg:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg> }
            ,{ number: "100K+", shadow:'shadow-red-500',title: "Orders Processed", desc: "Successfully prepped and shipped units.", border: "border-red-400", bg: "from-red-200", color: "text-red-700",svg:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg> },
            {
                number: "★ ★ ★ ★ ★",
                title: "5 Star Client Rating",
  desc: "From verified seller reviews.",
  border: "border-black",
  shadow:'shadow-black',
  bg: "from-white",
  color: "text-black",
  svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203"/></svg>

},
{ number: "24-72h", title: "Average Turnaround",shadow:'shadow-red-600', desc: "Fast processing from receiving to shipment", border: "border-red-500", bg: "from-red-200", color: "text-red-700",svg:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
].map((stat, index) => (
          <motion.div
          key={index}
          className={`border ${stat.border} hover:shadow-lg hover:scale-105  transition-all duration-600  ${stat.shadow} bg-white rounded-2xl flex flex-col items-start p-4 w-58 h-54`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          >
          
            <motion.div 
              className={`text-2xl font-inter font-normal my-4 border-2 rounded-full p-2 ${stat.color}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
                {stat.svg}
            </motion.div>


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
      
      <div className="flex-between flex-col  gap-2 border-t border-gr w-fit mx-auto  p-2 ">
        <p className="text-xs text-gray-600">We are available 24/7. </p>
        <a href="mailto:blackboxprepcenter.com" 
           className="bg-black/80 group text-white flex-between gap-2    rounded-lg text-sm font-semibold p-3 transition-all duration-500 overflow-hidden">
                    <FaEnvelope className="w-4 h-4 group-hover:-translate-x-8 transition duration-700"/>
                    <span className="duration-700 group-hover:-translate-x-3 transition">Contact Us</span>
                  </a>
                  
        </div>         
     
    </section>
    </>
  )
}
