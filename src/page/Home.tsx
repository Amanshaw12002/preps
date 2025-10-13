
import { Truck,  Settings,House,Warehouse} from 'lucide-react';
import inventory from "../asset/inventory.png"
import truck from "../asset/truck.png"
import rec from "../asset/rec.png"
import dashboard from "../asset/dashboard.png"
import box from "../asset/box.png"
import { useState } from 'react';
import CustomCalendar from '@/component/Meeting';
import MotionCrousel from '@/component/slider';
import PrepServicesSection from '@/component/PrepServicesSection';
import WhatSetsUsApart from '@/component/Apart';
import FAQ from './FAQ';



export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Inspection",
    icon: "FaSearch",
    image: "one", // your image import
    description:
      "Every item is carefully inspected for damage, accuracy, and quality before processing.",
  },
  {
    id: 2,
    title: "Packaging",
    icon: "FaBoxOpen",
    image: "four",
    description:
      "Items are securely packed using the right materials to prevent damage during transit.",
  },
  {
    id: 3,
    title: "Barcodes",
    icon: "FaBarcode",
    image: "two",
    description:
      "Each product is labeled with the correct FNSKU or UPC barcode for easy tracking.",
  },
  {
    id: 4,
    title: "Label",
    icon: "FaTags",
    image: "three",
    description:
      "Proper labels are applied to meet carrier and Amazon shipping guidelines.",
  },
];

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
interface ProcessStep {
  id: number;
  title: string;
  icon: "FaSearch" | "FaBoxOpen" | "FaBarcode" | "FaTags";
  image: "one" | "two" | "three" | "four";
  description: string;
}

export default function Home() {
  const [itemSelected,setItemSelected] = useState(0);
  return (
    <>
    

      <section className="flex-center relative py-14   overflow-hidden ">
<div className=' max-w-6xl mx-2  mt-8 xl:mx-0   lg:flex  z-10 overflow-hidden rounded-xl'>

                    <div className="  pl-14 mx-auto xl:max-w-xl    max-w-xl lg:pt-24    shrink-0   text-black ">
                                
                         <div className="flex  lg:flex-col w-lg ">
<h2 className="text-5xl font-semibold font-inter text-black text-shadow-2xs">
  <span className="block pb-1">
        Optimized    {" "} 
  </span>
  <span className="bg-gradient-to-l pb-1 block  from-red-500 via-red-600  to-blue-600 bg-clip-text  text-transparent ">
Prep Services {" "} 
  </span>
  for All Your
  <span
   className='bg-gradient-to-r pb-1 block  from-black  to-blue-600 bg-clip-text  text-transparent '>{" "}  Fulfillment Needs.  </span>
    
</h2>
                         </div>

                          <h2 className=' text-md font-sans font-normal text-black  mt-4  mb-2 '>You sell, we handle the rest.</h2>
                          <p className='font-sans text-xs  pr-12  text-gray-700 '>Safe storage to professional packing & fast shipping.With our fast and reliable  FBA service,your  products  are always  ready to reach  customers  quickly and  securely.</p>
                    </div>
                      
                    <div className='lg:max-w-none relative  lg:flex-none flex max-w-2xl  lg:ml-0'>
                      
                    <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
                      <div className='   border-gray-400     border lg:border-0      bg-gray-200 lg:bg-transparent'>
                      <img src={box} alt="" className=" w-[42rem] object-cover rounded-xl        "/>
                        </div>  
                        </div>  

                    </div>
                            </div>

        </section>

<section className='relative py-16 overflow-hidden bg-radial from-red-100'>
  {/* Background Pattern - Subtle Grid */}
  {/* Background Pattern - Minimal Grid */}
<div className="absolute inset-0 opacity-15">
  <div className="absolute top-0 left-1/4 w-px h-full bg-red-800"></div>
  <div className="absolute top-0 left-1/2 w-px h-full bg-red-900"></div>
  <div className="absolute top-0 left-3/4 w-px h-full bg-red-800"></div>
  <div className="absolute top-1/4 left-0 w-full h-px bg-red-900"></div>
  <div className="absolute top-1/2 left-0 w-full h-px bg-red-800"></div>
  <div className="absolute top-3/4 left-0 w-full h-px bg-red-900"></div>
</div>

  {/* Corner Accents */}
  <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-bl from-red-200 to-transparent opacity-30 rounded-full"></div>
  <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-tr from-red-200 to-transparent opacity-30 rounded-full"></div>

  <div className="relative max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="flex flex-col items-start justify-center text-black px-12">
      <h2 className="font-sans text-2xl mb-2">
        Let's grow your business together.
      </h2>

      <h2 className="text-5xl font-medium pb-12">
        <span className="bg-gradient-to-r pb-2 from-black to-red-700 bg-clip-text text-transparent font-medium block">
          New to Amazon or already selling?
        </span>  
        <span className="bg-gradient-to-r from-red-700 to-yellow-300 bg-clip-text text-transparent font-medium">
          We've got your prep covered...
        </span>
      </h2>
    </div>

    {/* Stats & Content Section */}
    <div className='flex justify-between max-w-6xl mx-auto py-6 px-12 mb-4'>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-8">
        <div className='border-l-2 border-red-600 flex flex-col items-start pl-4'>
          <h2 className="text-4xl font-inter font-normal mb-2">50K+</h2>
          <p className="text-gray-800 text-md mb-2">Orders Processed</p>
          <p className='text-gray-700 text-xs text-left'>Successfully prepped and shipped units.</p>
        </div>
        <div className='border-l-2 border-red-600 flex flex-col items-start pl-4'>
          <h2 className="text-4xl font-normal font-inter text-black mb-2">99%</h2>
          <h2 className="text-gray-800 text-md mb-2">Client Satisfaction</h2>
          <p className='text-gray-700 text-xs text-left'>Based on customer feedback & repeat business.</p>
        </div>
        <div className='border-l-2 border-red-600 flex flex-col items-start pl-4'>
          <h2 className="text-4xl font-normal text-gray-900 mb-2">$0</h2>
          <p className="text-gray-800 text-md mb-2">Tax Advantage</p>
          <p className='text-gray-600 text-xs text-left leading-relaxed'>
            Operating from Delaware's tax-free zone
          </p>
        </div>
        <div className='border-l-2 border-red-600 flex flex-col items-start pl-4'>
          <h2 className="text-4xl font-normal text-gray-900 mb-2">24-48h</h2>
          <p className="text-gray-800 text-md mb-2">Average Turnaround</p>
          <p className='text-gray-600 text-xs text-left leading-relaxed'>
            Fast processing from receiving to shipment
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className='flex flex-col w-1/2 pl-8'>
        <h2 className='font-sans text-md mt-12 text-gray-800 font-normal leading-relaxed'>
          Launching your first shipment or scaling to daily pallets, we help you move faster and stay compliant. Our team handles receiving, inspection, labeling, and shipment prep directly from Delaware's tax-free zone, cutting costs and turnaround time.
          Focus on growth, we'll handle the rest.
        </h2>
      </div>
    </div>
  </div>
</section>


<PrepServicesSection/>

<WhatSetsUsApart/>

<section className=' relative bg-gray-100 py-12 '>
  <div className='mx-auto max-w-6xl flex-center flex-col  '>
    <div className=' ml-12'>

 <h2 className=' text-5xl font-medium text-gray-800 pl-2 '>  How It Wo<span className='text-red-700'>rks.</span>  </h2>
    </div>
    <div className='flex-between max-w-6xl mx-auto gap-16 mt-12'>

<div className='flex-between flex-col     border-1 pb-4 overflow-hidden  bg-gray-50 gap-4 border-gray-400 rounded-2xl w-72  h-114'>
 <img src={rec} alt="" className=" w-full       "/>
     <h2 className="text-sm font-inter font-semibold mt-4 self-start text-black pl-4 ">Receive the packages</h2>
   <h2 className='text-sm px-4 font-inter font-normal text-gray-900 text-left'> You send us <span className=''>your  inventory to <span className='text-black font-semibold'>our prep center</span>.We inspect packages,ensuring</span> everything is correct .   </h2>
</div>



 <div className='flex-between flex-col overflow-hidden border-1 pb-4 bg-gray-50 border-gray-400  rounded-2xl w-72 h-114  gap-4'>
     <MotionCrousel/>
        <h2 className="text-sm font-inter self-start pl-4 mt-2 font-semibold text-black ">Prep  & Pack</h2>

   <h2 className='text-sm font-inter text-gray-900 px-4 pb-6 '>Your pakages will pass through <span className='font-semibold text-black'> our optimized workflow.</span></h2>
 </div>


    <div className='flex-between flex-col border-1 pb-4 bg-gray-50 overflow-hidden border-gray-400 rounded-2xl w-72 h-114'>
    <img src={truck} alt="" className="  w-full"/>
    <div className='flex-between flex-col  max-w-xl   gap-4'>
    <h2 className='font-inter text-sm font-semibold  self-start m pl-4'>Shipment</h2>
   <h2 className='text-sm font-inter font-normal px-3 text-gray-900 pb-4'>We <span className='text-black font-semibold'>ship your packages</span>  <span className='text-gray-600'>  to the requested center.Also we notify you</span> with our means of communication.   </h2>
    </div>
 </div>
 

</div>
  </div>
</section>
          
         



           
<section className="relative flex justify-center items-center overflow-hidden  bg-gray-100 py-8 px-4">
  {/* Top fading gradient for effect */}

  <div className="max-w-7xl  flex flex-col items-center justify-center bg-gray-50   border-2 m-2 border-gray-400 p-2 rounded-xl  ">
    {/* Tabs / Items */}
    <div className='flex flex-col items-center text-4xl font-inter  font-medium text-gray-900'>
      
    
    <h2 className='my-8 '> Manage Everthing from <span className="bg-clip-text bg-gradient-to-r from-red-800 to-blue-700 text-transparent font-semibold  ">One place.</span></h2>
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
        className={`${itemSelected === index ? "block" : "hidden"} w-[52rem]    rounded-sm sm:rounded-xl overflow-hidden border border-gray-400`}
        >
          <img src={image} className=" object-cover rounded-xl" />
        </div>
      ))}
    </div>
      </div>
  </div>
</section>



{/* <section className="py-16 bg-gray-100">
  <div className="max-w-5xl mx-auto flex flex-col   rounded-2xl py-8 items-center text-center px-4">
    <h2 className="text-xl mb-2 text-gray-800">Solutions</h2>
    <h2 className="text-3xl font-inter font-medium  text-black  mb-2">
      Comprehensive Fulfillment Services
    </h2>
    <h3 className="text-md font-medium text-gray-700 mb-12">
      Efficient and reliable logistics for Amazon sellers
    </h3>

    <div className="flex flex-wrap justify-between gap-6 w-full">
      <div className="flex flex-col md:flex-row items-center bg-white border rounded-2xl shadow-md w-full md:w-[48%] overflow-hidden hover:shadow-lg transition">
        <div className="flex flex-col w-full border-gray-400 border md:w-1/2 p-6 text-left gap-3">
          <h3 className="text-xl font-semibold text-gray-800">FBA</h3>
          <p className="text-gray-900 text-2xl font-medium">
            Amazon FBA fulfillment made simple
          </p>
          <p className="text-gray-600">
            Complete control over your Amazon selling strategy.
          </p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-xl w-fit hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
        <img
          src={def}
          alt="FBA"
          className="w-full md:w-1/2 h-full  object-cover object-[64%_center]"
        />
      </div>

      <div className="flex flex-col bg-gray-100 rounded-2xl shadow-md border w-full md:w-[23%] overflow-hidden hover:shadow-lg transition">
        <img src={def2} alt="FBM" className="w-full h-60 object-cover" />
        <div className="flex flex-col p-6 gap-3 text-left">
          <h3 className="text-xl font-semibold text-gray-800">FBM</h3>
          <p className="text-gray-900 text-2xl font-medium">
            Merchant fulfilled solutions
          </p>
          <p className="text-gray-600">
            Seamless inventory management and shipping for your products.
            
          </p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-xl w-fit hover:bg-gray-800 transition">
            Explore
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-gray-100 rounded-2xl shadow-md w-full md:w-[23%] border overflow-hidden hover:shadow-lg transition">
        <div className="flex flex-col p-6 gap-3 text-left">
          <h3 className="text-xl font-semibold text-gray-800">Prep</h3>
          <p className="text-gray-900 text-2xl font-medium">
            Product preparation services
          </p>
          <p className="text-gray-600">
            Expert handling to meet Amazon’s strict requirements.
          </p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-xl w-fit hover:bg-gray-800 transition">
            Discover
          </button>
        </div>
        <img src={def3} alt="Prep" className="w-full h-60 object-cover" />
      </div>
    </div>
  </div>
</section> */}

      
  <CustomCalendar/>
  <FAQ/>







</>
  )
}
