
import { Truck,  Settings,House,Warehouse, PackageCheck, PackageSearch} from 'lucide-react';
import inventory from "../asset/inventory.png"
import workflow from "../asset/workflow.png"
import d from "../asset/d.png"
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
      <div className='max-w-7xl mx-auto  lg:flex md:mt-6 lg:max-h-screen  '>

                    <div className="  lg:pl-8 mx-auto  lg:max-w-xl max-w-2xl pt-12   shrink-0  text-black ">
                                
                         <div className="flex lg:flex-col ">

                          <h2 className=" text-7xl font-semibold   font-open-sans text-shadow-2xs  "> Store,  </h2>
                          <h2 className=" text-7xl font-semibold   font-open-sans text-shadow-2xs   "><span className="text-red-900">Pack &</span> Ship.  </h2>
                         </div>
                        
                          <h2 className=' text-2xl font-open-sans font-medium  text-gray-800  mt-2  '>-You sell, we handle the rest.</h2>
                        <h2 className=" text-lg font-open-sans      mt-4  ">Get Amazon-Ready  Fulfillment Services
                          <p className='font-open-sans text-sm font-normal inline text-gray-800 '>--we provide safe storage to professional packing  and fast shipping.With our fast reliable  FBA service,your  products  are always  ready to reach  customers  quickly and  securely.</p>
                          </h2>
                         
                    </div>
                      
                    <div className='lg:max-w-none  lg:flex-none flex max-w-2xl mt-4  lg:mt-12 lg:ml-0 sm:rounded-xl lg:bg-gradient-to-br from-black via-red-700 via-35%   to-red-500 shadow-xl  lg:shadow-red-700'>
                    <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
                      <div className='   border-gray-400   p-1 sm:p-4 border rounded-sm sm:rounded-xl  border-b-0 bg-gray-200 lg:bg-transparent'>
                      <img src={dashboard} alt="" className=" rounded-xs  w-[54rem]  sm:rounded-xl border-gray-400  border border-b-0     "/>
                        </div>  
                        </div>  
                    </div>

                     <div className='bottom-0 h-14 bg-gradient-to-t from-white  to-transparent z-20 absolute w-full'></div>
                            </div>

        </section>




<section>

              <div className='max-w-7xl mx-auto flex-between flex-col lg:flex-row md:mt-12 px-12 lg:max-h-screen '>
                       <div className="flex flex-col    lg:p-6">
                        <h2 className='text-4xl font-open-sans font-medium  text-slate-900'>Our -eFullfillment Service Workflow</h2>
                        <p className='font-open-sans mt-4 text-stone-800'>--At our prep center, we follow a <span className='font-semibold text-stone-900'> streamlined and reliable workflow designed to save you time, reduce costs, and ensure compliance with marketplace standards like Amazon FBA.</span>  Every step is <span>optimized for accuracy, efficiency, and speed,</span> so your products move smoothly from arrival to shipment. </p>
                       </div>
                       <img src={workflow} className="object-cover  max-w-96  rounded-2xl border-red-700  "/>
                       </div>
              
</section>
                
            <section className="flex-center   ">
              
<div className='   max-w-7xl   rounded-xl   bg-white  overflow-hidden  sm:p-0'>

              <div className="flex items-center flex-col sm:flex-row p-12   text-slate-800  ">
                       <img src={d} className="object-cover max-w-96  border-gray-200   "/>
                             <div className=" mx-2  font-mon ml-8  ">
                              <h2 className="text-4xl font-open-sans   ">Be <span className='text-red-700'>always updated</span> with our dashboard overview.</h2>
                              <h2 className=" font-normal text-lg pt-1 "> Check anytime,anywhere within your range and  comfort.</h2>
                              <div className='mt-6 text-gray-600 font-normal'>
                                <h2>--No setup fees</h2>
                                <h2>--No minimum  order Requirements</h2>
                                <h2>--Free demo session</h2>
                              </div>
                              </div>


                   </div>    
              </div>
                       
            </section>
         

           
<section className="relative flex justify-center items-center overflow-hidden bg-gray-100 py-4 px-4">
  {/* Top fading gradient for effect */}
  <div className="absolute bottom-0 hidden  sm:block h-12 w-full bg-gradient-to-t from-white via-white to-transparent z-20"></div>

  <div className="max-w-7xl  flex bg-white flex-col items-center justify-center pt-12  ">
    {/* Tabs / Items */}
    <div className='flex flex-col items-center justify-center   text-black'>
      
    <h2 className='text-xl md:text-5xl font-open-sans font-medium     '>We fullfill all your <span className='inline-block'>requirements for</span> </h2>
    <h2 className=' text-xl md:text-5xl font-open-sans font-medium mb-2'> managing your prep center.</h2>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-2 md:gap-4 w-full sm:mt-8      sm:w-10/12 overflow-x-auto lg:mx-12 py-4   px-4">
      {Items.map(({ index, label, icon: Icon }) => {
        const active = index === itemSelected;
        return (
          <div
            key={index}
            onClick={() => setItemSelected(index)}
            className={`
              flex items-center gap-2 px-4 pr-4 py-2 max-w-fit rounded-xl border sm:border-2 
              ${active ? "bg-white border-red-700 scale-95 text-black shadow-none" : "bg-white border-gray-300 shadow-xl hover:shadow-none  hover:scale-95"}
              cursor-pointer transition-transform duration-300 flex-shrink-0
            `}
          >
            <Icon
              className={`
                w-10 h-10 p-2 rounded-md
                ${active ? "bg-red-700 text-white" : "bg-gray-200 text-gray-800"}
              `}
            />
            <span className="whitespace-nowrap font-medium text-xl">{label}</span>
          </div>
        );
      })}
    </div>

    {/* Selected Image */}
    <div className="w-full flex justify-center mt-8">
      {itemsImage.map(({ index, image }) => (
        <div
          key={index}
          className={`${itemSelected === index ? "block" : "hidden"} w-full sm:w-11/12  rounded-sm sm:rounded-3xl overflow-hidden border-2 border-gray-300`}
        >
          <img src={image} className="w-full h-auto object-cover rounded-3xl" />
        </div>
      ))}
    </div>
  </div>
</section>

<section className=''>
  <div className='max-w-7xl h-42 mx-auto flex-between bg-gradient-to-b from-red-900 via-red-700 px-12 lg:px-32   '> 
    <h2 className='text-white font-inter  lg:text-5xl sm:text-4xl text-2xl '>Get Started for free </h2>
              <Link to="/contact" className=" border-2 border-amber-700   text-white  text-2xl shadow-lg shadow-black rounded-lg p-2 transition">
            Contact Us
          </Link>

  </div>
</section>




       <section className=" flex-center    ">
  <div className="bg-white max-w-7xl  flex-center flex-col h-full  z-10 my-12 mx-8">
    <h2 className="text-4xl font-mont font-medium my-2 ">
<span className="text-red-700">Optimized Process</span> for Prep & FBA
    </h2>
    <p className="text-gray-700 mb-8 ml-4">
      We've got you covered with all your tensions and frustrations that you can work with ease.
    </p>
    
    <div className="flex flex-col lg:flex-row   gap-4  bg-gradient-to-b from-red-950 to-red-700 p-2 rounded-xl w-full">
      {/* Card 1 */}
      <div className="p-6 w-full md:w-1/2 bg-white/90 border border-gray-200  rounded-xl cursor-pointer shadow-sm  hover:bg-black/20 group hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="flex items-center mb-4 gap-3">
          <PackageSearch className="w-10 h-10 shrink-0 bg-red-800  text-white p-2 rounded-md" />
          <h3 className="text-lg font-semibold text-black group-hover:text-white">
              Standardized Receiving & Inspection
          </h3>
        </div>
        <p className="text-gray-900 text-md group-hover:text-white">
Check and sort all incoming inventory against purchase orders.
Inspect for damage, expiration dates, and compliance with Amazon’s prep requirements before processing.        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 w-full md:w-1/2 bg-white/90 border border-gray-200 rounded-xl cursor-pointer shadow-sm  hover:bg-black/20 group   hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="flex items-center mb-4 gap-3">
          <PackageCheck className="w-10 h-10 shrink-0 bg-red-800 text-white p-2 rounded-md" />
          <h3 className="text-lg font-semibold text-black group-hover:text-white">
Efficient Prep & Packaging          </h3>
        </div>
        <p className="text-gray-900 text-md group-hover:text-white">
Use automation-friendly stations with labeled zones for polybagging, bubble wrapping, labeling, and bundling.
Apply Amazon-compliant barcodes (FNSKU) systematically to avoid delays or rejections at FBA.        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 w-full md:w-1/2 bg-white/90 border border-gray-200 rounded-xl cursor-pointer shadow-sm  hover:bg-black/20 group hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="flex items-center mb-4 gap-3">
          <Truck className="w-10 h-10 shrink-0 bg-red-800 text-white p-2 rounded-md" />
          <h3 className="text-lg font-semibold text-black group-hover:text-white">
            Shipment Planning & Tracking
          </h3>
        </div>
        <p className="text-gray-900 text-md group-hover:text-white">
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
