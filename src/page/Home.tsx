
import { Truck,  Settings,House,Warehouse, PackageCheck, PackageSearch, Activity, LayoutDashboard, BarChart3} from 'lucide-react';
import inventory from "../asset/inventory.png"

import dash from "../asset/dash.jpg"
import dashboard from "../asset/dashboard.png"
import { Link } from 'react-router-dom';
import GetQuoteForm from '@/component/GetQuote';
import { useState } from 'react';
import CustomCalendar from '@/component/Meeting';


const Items = [
  {
    index:0,
    label: "Dashboard",
    icon: House,
  },
  {
index:1,
    label: "Shipments",
    icon: Truck,
  },
  {
index:2,
    label: "FBA & FBM",
    icon: Settings,
  },
  {
index:3,
    label: "Inventory",
    icon: Warehouse,
  },
];

const itemsImage = [
  {
    index:0,
    image:dashboard,
  },
  {
index:1,
    image:inventory,
  },
  {
    index:2,
    image:dashboard,
  },
  {
    index:3,
    image:dashboard,
  }
]



export default function Home() {
  const [itemSelected,setItemSelected] = useState(0);
  
  return (
    <>
    


    <section className="flex-center relative mt-12  overflow-hidden ">
           <div className='absolute bottom-0 hidden  lg:block h-60 w-full bg-gradient-to-b from-transparent  via-red-800  to-transparent z-0'>
           </div>
      <div className='max-w-7xl mx-auto  lg:flex md:mt-6 lg:max-h-screen  z-10  '>

                    <div className="  lg:pl-8 mx-auto  lg:max-w-xl max-w-2xl pt-12  pr-14 shrink-0 bg-white/20  text-black ">
                                
                         <div className="flex lg:flex-col ">
<h2 className="text-5xl font-semibold font-open-sans text-shadow-2xs">
  <span className="bg-gradient-to-r from-red-500  to-black bg-clip-text text-transparent ">
    Smooth {" "} 
  </span>
  process for your
  <span className='bg-gradient-to-r from-blue-900  to-red-500 bg-clip-text text-transparent '>{" "} prep center.  </span>
    
</h2>
                         </div>
                        
                          <h2 className=' text-xl font-sans font-normal text-gray-900  mt-4  '>You sell, we handle the rest.</h2>
                          <p className='font-open-sans text-xs font-medium inline text-slate-900 '>We provide safe storage to professional packing  and fast shipping.With our fast reliable  FBA service,your  products  are always  ready to reach  customers  quickly and  securely.</p>
                         
                    </div>
                      
                    <div className='lg:max-w-none  lg:flex-none flex max-w-2xl mt-4  lg:mt-12 lg:ml-0 sm:rounded-xl lg:bg-gradient-to-br from-black via-red-700 via-35%   to-red-500 shadow-xl  lg:shadow-red-700'>
                    <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
                      <div className='   border-gray-400    p-1 sm:p-4 border lg:border-0  rounded-sm sm:rounded-xl  border-b-0 bg-gray-200 lg:bg-transparent'>
                      <img src={dashboard} alt="" className=" rounded-xs  w-[54rem]  sm:rounded-xl border-gray-400  border border-b-0     "/>
                        </div>  
                        </div>  
                    </div>

                     <div className='bottom-0 h-14 bg-gradient-to-t from-white  to-transparent z-20 absolute w-full'></div>
                            </div>

        </section>




                
            <section className="flex-center    ">
              
<div className='   max-w-7xl   rounded-xl flex-center flex-col    mt-16  mx-4 bg-white   overflow-hidden  sm:p-0'>

              <div className="flex items-center justify-center flex-col sm:flex-row p-4    text-slate-900  ">
                       <img src={dash} className="object-cover w-80   border-gray-200  "/>
                             <div className=" mx-2   ml-12 w-1/2  ">
                              <h2 className="text-3xl font-open-sans font-medium mb-4   ">Always<span className='text-red-800'> stay updated</span> with our dashboard overview.</h2>
                              <div className=' text-gray-900 text-sm gap-5 font-normal flex  items-center flex-wrap font-inter mt-4'>
                                <h2 className='flex flex-col text-sm w-58 h-48 border-2 rounded-xl p-4 gap-2'><Activity className='border-2 h-7 w-7 p-1 rounded-sm text-red-800'/> <span className='font-semibold '>Real-Time Insights</span> <span> Track key activities instantly with live updates so you never miss important changes.</span></h2>
                                <h2 className='flex flex-col text-sm w-58 h-48 border-2 rounded-xl p-4 gap-2'><LayoutDashboard className='border-2 h-7 w-7 p-1 rounded-sm text-red-800'/> <span className='font-semibold '>Centralized Control </span><span> Manage  operations, monitor performance, and access all critical information from one place.</span></h2>
                                <h2 className='flex flex-col text-sm w-58 h-48 border-2 rounded-xl p-4 gap-2'> <BarChart3 className='border-2 h-7 w-7  p-1 rounded-sm text-red-800 '/><span className='font-semibold'>Data-Driven Decisions </span><span> Use clear visual informations and analytics to make smarter, faster, and more reliable business choices.</span></h2>
                              </div>
                              </div>


                   </div>    
              </div>
                       
            </section>
         

           
<section className="relative flex justify-center items-center overflow-hidden bg-white py-4 px-4">
  {/* Top fading gradient for effect */}

  <div className="max-w-7xl  flex flex-col items-center justify-center pt-12    ">
    {/* Tabs / Items */}
    <div className='flex flex-col items-center justify-center   text-gray-900'>
      
    <h2 className='text-xl md:text-4xl font-sans font-medium    '>We provide all your <span className='inline-block text-red-700'>requirements for</span> </h2>
    <h2 className=' text-xl md:text-4xl font-sans font-medium '> managing your prep center.</h2>
    </div>
    <div className='flex mt-8 '>

    <div className="grid  grid-cols-1 gap-2 h-1/2 mt-4 w-full    ">
      {Items.map(({ index, label, icon: Icon }) => {
        const active = index === itemSelected;
        return (
          <div
            key={index}
            onClick={() => setItemSelected(index)}
            className={`
              flex items-center gap-2 px-4 pr-4 py-2 w-36 h-12 rounded-l-xl border sm:border-2 
              ${active ? " border-red-700 bg-red-700  text-white shadow-none" : "bg-white border-gray-300 shadow-xl hover:shadow-none  hover:scale-95"}
              cursor-pointer transition-transform duration-300 flex-shrink-0
              `}
              >
            <Icon
              className={`
                w-7 h-7 p-1 rounded-md
                ${active ? "bg-white text-red-700 " : "bg-gray-200 text-gray-800"}
                `}
                />
            <span className="whitespace-nowrap font-medium text-xs">{label}</span>
          </div>
        );
      })}
    </div>

    {/* Selected Image */}
    <div className="w-full flex justify-center ">
      {itemsImage.map(({ index, image }) => (
        <div
        key={index}
        className={`${itemSelected === index ? "block" : "hidden"} w-[52rem]    rounded-sm sm:rounded-xl overflow-hidden border-2 border-gray-600`}
        >
          <img src={image} className=" object-cover rounded-3xl" />
        </div>
      ))}
    </div>
      </div>
  </div>
</section>

<section className=''>
  <div className='max-w-7xl h-42 mx-auto flex-center gap-8 px-12 lg:px-32   '> 
    <h2 className='text-black font-inter  lg:text-5xl sm:text-4xl text-2xl '>Get Started for free </h2>
              <Link to="/contact" className=" border-2 border-gray-700 rounded-xl text-black  hover:scale-95 hover:shadow-none text-xl  p-2 transition">
            Contact Us
          </Link>

  </div>
</section>



       <section className=" flex-center    ">
  <div className="bg-white max-w-5xl  flex-center flex-col h-full  z-10 my-12 mx-8">
    <h2 className="text-4xl font-mont font-medium my-2 ">
<span className="text-red-700">Optimized Process</span> for Prep & FBA
    </h2>
    <p className="text-gray-700 mb-8 ml-4">
      We've got you covered with all your tensions and frustrations that you can work with ease.
    </p>
    
    <div className="flex flex-col lg:flex-row   gap-4   p-2 rounded-xl w-full">
      {/* Card 1 */}
      <div className="p-6 w-full md:w-1/2 bg-white/90 border border-black hover:border-white  rounded-xl cursor-pointer shadow-sm  hover:bg-gradient-to-b from-red-400 to-cyan-700 group hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="flex items-center mb-4 gap-3">
          <PackageSearch className="w-8 h-8 shrink-0 bg-red-800  text-white p-1 group-hover:bg-white group-hover:text-red-800 rounded-md" />
          <h3 className="text-md font-semibold text-black group-hover:text-white">
              Standardized Receiving & Inspection
          </h3>
        </div>
        <p className="text-gray-900 text-sm group-hover:text-white">
Check and sort all incoming inventory against purchase orders.
Inspect for damage, expiration dates, and compliance with Amazon’s prep requirements before processing.        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 w-full md:w-1/2 bg-white/90 border border-black hover:border-white rounded-xl cursor-pointer shadow-sm  hover:bg-gradient-to-b from-red-400 to-cyan-700 group   hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="flex items-center mb-4 gap-3 ">
          <PackageCheck className="w-8 h-8 shrink-0 bg-red-800 text-white p-1 rounded-md group-hover:bg-white group-hover:text-red-800" />
          <h3 className="text-md font-semibold text-black group-hover:text-white">
Efficient Prep & Packaging          </h3>
        </div>
        <p className="text-gray-900 text-sm group-hover:text-white">
Use automation-friendly stations with labeled zones for polybagging, bubble wrapping, labeling, and bundling.
Apply Amazon-compliant barcodes (FNSKU) systematically to avoid delays or rejections at FBA.        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 w-full md:w-1/2 bg-white/90  rounded-xl cursor-pointer border border-black hover:border-white  hover:bg-gradient-to-b from-red-400 to-cyan-700 group hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="flex items-center mb-4 gap-3">
          <Truck className="w-8 h-8 shrink-0 bg-red-800 text-white p-1 rounded-md group-hover:bg-white group-hover:text-red-800" />
          <h3 className="text-md font-semibold text-black group-hover:text-white">
            Shipment Planning & Tracking
          </h3>
        </div>
        <p className="text-gray-900 text-sm group-hover:text-white">
Consolidate shipments to reduce costs while following Amazon’s warehouse distribution requirements.
Leverage software (Seller Central, 3rd-party tools, or WMS) to optimize carton contents, generate shipping plans, and maintain real-time tracking.        </p>
      </div>
    </div>
  </div>
</section>



     <GetQuoteForm/>
        <CustomCalendar/>





    </>
  )
}
