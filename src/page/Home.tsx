
import { CheckCircle, MoveRight ,Truck, Locate, Settings,House,Warehouse} from 'lucide-react';
import inventory from "../asset/inventory.png"
import d from "../asset/d.png"
import dashboard from "../asset/dashboard.png"

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
    


    <section className="flex-center relative mt-12  overflow-hidden">
      <div className='max-w-7xl mx-auto  lg:flex md:mt-12 lg:max-h-screen p-4'>

                    <div className="  lg:ml-8 mx-auto  lg:max-w-xl max-w-2xl pt-12 shrink-0  text-black ">
                                

                          <h2 className=" text-7xl font-semibold   font-open-sans text-shadow-2xs  "> Store,  </h2>
                          <h2 className=" text-7xl font-semibold   font-open-sans text-shadow-2xs  "><span className="text-red-900">Pack &</span> Ship.  </h2>
                        
                        <h2 className=" text-lg font-open-sans  text-gray-800    mt-2 ">Get Amazon-Ready  Fulfillment Services.
                          </h2>
                          <h2 className=' text-lg font-open-sans  text-gray-800    '>You sell, we handle the rest.</h2>
                          <button className="group  text-xl mt-6  font-mon overflow-hidden cursor-pointer
                          px-4 py-1.5 flex items-center justify-between  hover:scale-105 transition duration-300 bg-gradient-to-br from-red-700 to-stone-800 shadow-md hover:shadow-black rounded-2xl text-white ">
                            <span className="group-hover:translate-x-4 transition duration-1000">Get Started</span>
                            <MoveRight className="group-hover:translate-x-10 duration-1000 transition ml-2 w-5 h-5"/>
                            </button>
                            <div className="flex-between w-fit">

                             <CheckCircle className="w-5 h-5 " />
                            <p className="p-2 text-xs font-sans">200+ users have started using our services</p>

                    </div>

                    </div>
                    <div className='lg:max-w-none  lg:flex-none flex max-w-2xl mt-4  lg:mt-12 lg:ml-8'>
                      
                    <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
                      <div className='   border-gray-400  p-1 sm:p-4 border rounded-sm sm:rounded-xl bg-gray-200 border-b-0 '>
                      <img src={dashboard} alt="" className=" rounded-xs    sm:rounded-xl border-gray-400 border border-b-0     "/>
                        </div>  
                        </div>  
                    </div>

                     <div className='bottom-0 h-14 bg-gradient-to-t from-white  to-transparent z-20 absolute w-full'></div>
                            </div>

        </section>






            
            <section className=" relative  bg-gray-100 flex-center p-8 ">
              <div className='   max-w-7xl   rounded-xl   bg-white  overflow-hidden py-4 sm:p-0'>

              <div className="flex-between flex-col sm:flex-row  text-slate-800  ">
                             <div className=" mx-2  font-mon ml-8  ">
                              <h2 className="text-4xl  font-normal ">Be <span className='text-red-700'>always updated</span> with our dashboard overview.</h2>
                              <h2 className=" font-light text-lg pt-1 "> Check anytime,anywhere within your range and  comfort.</h2>
                              <div className='mt-6 text-gray-600 font-normal'>
                                <h2>--No setup fees</h2>
                                <h2>--No minimum  order Requirements</h2>
                                <h2>--Free demo session</h2>
                              </div>
                              </div>


                       <img src={d} className="object-cover max-w-1/2 sm:rounded-r-3xl rounded-xl   sm:border-l-4 border-gray-200   "/>

              </div>
                   </div>    
                       
            </section>
         

           
<section className="relative flex justify-center items-center overflow-hidden bg-gray-100 py-4 px-4">
  {/* Top fading gradient for effect */}
  <div className="absolute bottom-0 hidden  sm:block h-12 w-full bg-gradient-to-t from-white via-white to-transparent z-20"></div>

  <div className="max-w-7xl  flex bg-white flex-col items-center pt-12">
    {/* Tabs / Items */}
    <div className='flex flex-col items-center  '>
      
    <h2 className='text-xl md:text-5xl font-sans   '>We fullfill all your <span className='text-red-700'>requirements for</span> </h2>
    <h2 className=' text-xl md:text-5xl font-sans mb-2'> managing your prep center.</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-2 md:gap-4 w-full sm:mt-8   border sm:border-2 border-gray-400 rounded-xl  sm:w-10/12 overflow-x-auto lg:mx-12 py-4   px-4">
      {Items.map(({ index, label, icon: Icon }) => {
        const active = index === itemSelected;
        return (
          <div
            key={index}
            onClick={() => setItemSelected(index)}
            className={`
              flex items-center gap-2 px-4 py-2 min-w-24 rounded-xl border sm:border-2 
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
            <span className="whitespace-nowrap font-medium">{label}</span>
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






       <section className=" flex-center    ">
  <div className="bg-white max-w-7xl  flex flex-col h-full  z-10 my-4 mx-8">
    <h2 className="text-4xl font-mont font-semibold my-2 ml-4">
<span className="text-red-700">Optimized Process</span> for Prep & FBA
    </h2>
    <p className="text-gray-700 mb-4 ml-4">
      We've got you covered with all your tensions and frustrations that you can work with ease.
    </p>
    
    <div className="flex flex-col lg:flex-row   gap-4  w-full">
      {/* Card 1 */}
      <div className="p-6 w-full md:w-1/2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="flex items-center mb-4 gap-3">
          <Truck className="w-10 h-10 bg-red-800 text-white p-2 rounded-md" />
          <h3 className="text-lg font-semibold text-black">
            Streamlined Operations
          </h3>
        </div>
        <p className="text-gray-600 text-md">
          We simplify shipment handling by cutting unnecessary steps and automating tasks. This reduces delays, lowers costs, and ensures packages move quickly without errors.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 w-full md:w-1/2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="flex items-center mb-4 gap-3">
          <Locate className="w-10 h-10 bg-red-800 text-white p-2 rounded-md" />
          <h3 className="text-lg font-semibold text-black">
            Real-Time Tracking
          </h3>
        </div>
        <p className="text-gray-600 text-md">
          Monitor every shipment from warehouse to delivery with live updates. Our system keeps you and your customers informed at every stage with full transparency.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 w-full md:w-1/2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="flex items-center mb-4 gap-3">
          <Settings className="w-10 h-10 bg-red-800 text-white p-2 rounded-md" />
          <h3 className="text-lg font-semibold text-black">
            Hassle-Free Management
          </h3>
        </div>
        <p className="text-gray-600 text-md">
          Control shipments with a smart dashboard that manages orders, returns, and costs. Gain insights and keep logistics smooth—all in one place.
        </p>
      </div>
    </div>
  </div>
</section>
     <GetQuoteForm/>
        <CustomCalendar/>





    </>
  )
}
