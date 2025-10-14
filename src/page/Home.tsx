
import { Truck,  Settings,House,Warehouse, DollarSign, Shield, Zap} from 'lucide-react';
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
    

      <section className="flex-center relative pt-14  pb-60 bg-gradient-to-b from-transparent via-transparent to-gray-400  ">
<div className=' max-w-6xl relative mx-2  mt-8 xl:mx-0   lg:flex  z-10 rounded-xl'>

  <div className='absolute -bottom-60 w-full max-w-4xl left-1/2  rounded-2xl py-4 pr-18 transform -translate-x-1/2 flex justify-between gap-4 '>
  {/* Value 1 */}
  <div className='group relative flex-1 max-w-48 h-48 bg-gradient-to-br from-gray-600/60 to-red-600/20 rounded-2xl shadow-2xl p-6 hover:-translate-y-3 transition-all duration-500'>
    <div className='w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3'>
      <Zap className="w-5 h-5 text-red-800" />
    </div>
    <h3 className='text-white text-xs font-semibold mb-2'>Fast Processing</h3>
    <p className='text-gray-100 text-xs leading-relaxed'>
      2-5 day turnaround for most orders with real-time tracking
    </p>
    <div className='absolute bottom-4 left-6 right-6 h-0.5 bg-red-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
  </div>


  {/* Value 3 */}
  <div className='group relative flex-1 max-w-48 h-48 bg-gradient-to-br from-gray-500/60 to-red-600/30 rounded-2xl shadow-2xl p-6 hover:-translate-y-3 transition-all duration-500'>
    <div className='w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3'>
      <DollarSign className="w-5 h-5 text-red-800" />
    </div>
    <h3 className='text-white text-xs font-semibold mb-3'>Transparent Pricing</h3>
    <p className='text-gray-200 text-xs leading-relaxed'>
      No hidden fees with volume discounts for growing businesses
    </p>
    <div className='absolute bottom-4 left-6 right-6 h-0.5 bg-red-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
  </div>
  
  {/* Value 2 */}
  <div className='group relative flex-1 max-w-48 h-48 bg-gradient-to-br from-gray-500/50 to-red-600/20 rounded-2xl shadow-2xl p-6 hover:-translate-y-3 transition-all duration-500'>
    <div className='w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3'>
      <Shield className="w-5 h-5 text-red-800" />
    </div>
    <h3 className='text-white text-xs font-semibold mb-2'>Quality Guarantee</h3>
    <p className='text-white text-xs leading-relaxed'>
      Amazon compliance guaranteed with detailed quality checks
    </p>
    <div className='absolute bottom-4 left-6 right-6 h-0.5 bg-red-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
  </div>
</div>

                    <div className="relative  pl-14 mx-auto xl:max-w-xl    max-w-xl lg:pt-24    shrink-0   text-black ">
                                <div className='h-full w-0.5 absolute top-20 left-20 bg-gradient-to-b from-white via-slate-200 to-white  -z-1'></div>
                                <div className='h-px w-full absolute top-20 left-20 bg-gradient-to-r from-white via-slate-200 to-white  -z-1'></div>
                                <div className='h-px w-full absolute top-40 left-20 bg-gradient-to-r from-white via-red-200 to-white  -z-1'></div>
                                <div className='h-px w-full absolute top-60 left-20 bg-gradient-to-r from-white via-slate-200 to-white  -z-1'></div>
                                <div className='h-px w-full absolute top-80 left-20 bg-gradient-to-r from-red-200 via-slate-200 to-white  -z-1'></div>
                                <div className='h-px w-full absolute top-100 left-20 bg-gradient-to-r from-white via-slate-200 to-white  -z-1'></div>
                                <div className='h-full w-px absolute top-20 left-40 bg-gradient-to-b from-white via-slate-200 to-white -z-1'></div>
                                <div className='h-full w-px absolute top-20 left-60 bg-gradient-to-b from-white via-slate-300 to-white -z-1'></div>
                                <div className='h-full w-px absolute top-20 left-80 bg-gradient-to-b from-white via-slate-400 to-white -z-1'></div>
                                <div className='h-full w-px absolute top-20 left-100 bg-gradient-to-b from-white  via-red-200 to-white -z-1'></div>
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
                      
                    <div className='lg:max-w-none relative mt-16 lg:flex-none flex max-w-2xl  lg:ml-0'>
                      
                    <div className='max-w-xl flex-none lg:max-w-none'>
                      <div className='   border-gray-400     border lg:border-0      bg-gray-200 lg:bg-transparent'>
                      <img src={box} alt="" className=" w-[28rem] object-cover rounded-xl        "/>
                        </div>  
                        </div>  

                    </div>
                            </div>

        </section>

<section className='relative py-16 border-t border-red-200 bg-radial from-red-100'>




<div className="absolute inset-0 opacity-15">
  <div className="absolute top-0 left-1/4 w-px h-full bg-red-800"></div>
  <div className="absolute top-0 left-1/2 w-px h-full bg-red-900"></div>
  <div className="absolute top-0 left-3/4 w-px h-full bg-red-800"></div>
  <div className="absolute top-1/4 left-0 w-full h-px bg-red-900"></div>
  <div className="absolute top-1/2 left-0 w-full h-px bg-red-800"></div>
  <div className="absolute top-3/4 left-0 w-full h-px bg-red-900"></div>
</div>




  <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-bl from-red-200   rounded-full"></div>
  <div className="relative max-w-6xl pt-24 mx-auto">
    
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
          <h2 className="text-4xl font-inter text-red-800 font-normal mb-2">50K+</h2>
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
          <h2 className="text-4xl font-normal text-red-900 mb-2">24-48h</h2>
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


<section className='relative bg-gradient-to-br from-red-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
  
  {/* Step Number Indicators */}
  
  <div className='max-w-6xl mx-auto relative z-10'>

    {/* Header Section */}
    <div className='text-left relative mb-12 ml-4'>
             <div className='h-full w-0.5 absolute top-20 left-20 bg-gradient-to-b from-white via-slate-200 to-white  -z-1'></div>
                                <div className='h-px w-full absolute top-20 left-20 bg-gradient-to-r from-white via-red-200 to-white  -z-1'></div>
                                <div className='h-px w-full absolute top-40 left-20 bg-gradient-to-r from-white via-red-200 to-white  -z-1'></div>
                                <div className='h-px w-full absolute top-60 left-20 bg-gradient-to-r from-white via-red-200 to-white  -z-1'></div>
                                <div className='h-px w-full absolute top-80 left-20 bg-gradient-to-r from-red-200 via-slate-200 to-white  -z-1'></div>
                                <div className='h-px w-full absolute top-100 left-20 bg-gradient-to-r from-white via-slate-200 to-white  -z-1'></div>
                                <div className='h-full w-px absolute top-0 left-40 bg-gradient-to-b from-red-200 via-red-200 to-white -z-1'></div>
                                <div className='h-full w-px absolute top-0 right-40 bg-gradient-to-b from-red-200 via-red-200 to-white -z-1'></div>
                                <div className='h-full w-px absolute top-0 right-20 bg-gradient-to-b from-red-200 via-slate-200 to-red-200 -z-1'></div>
                                <div className='h-full w-px absolute top-0 right-80 bg-gradient-to-b from-red-200 via-red-200 to-white -z-1'></div>
                                <div className='h-full w-px absolute top-0 right-100 bg-gradient-to-b from-white via-red-200 to-white -z-1'></div>
                                <div className='h-full w-px absolute top-20 right-60 bg-gradient-to-b from-white via-red-200 to-white -z-1'></div>
                                <div className='h-full w-px absolute top-20 left-60 bg-gradient-to-b from-white via-slate-300 to-white -z-1'></div>
                                <div className='h-full w-px absolute top-20 left-80 bg-gradient-to-b from-white via-slate-400 to-white -z-1'></div>
                                <div className='h-full w-px absolute top-20 left-100 bg-gradient-to-b from-white  via-red-200 to-white -z-1'></div>
                         
      <div className='inline-flex border border-red-200 items-center gap-2 bg-white text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm'>
        <div className='w-2 h-2 bg-red-600 rounded-full animate-pulse'></div>
        PROCESS
      </div>

      <h2 className='text-5xl font-inter text-left text-gray-900 mb-8'>
        From Receiving to Shipment,<span className='block'>All in One Flow</span>
      </h2>
      <h2 className='text-sm font-bold text-gray-900 '>
        HOW IT <span className='text-red-600'>WORKS</span>
      </h2>
    </div>

    {/* Steps Container */}
    <div className='flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-6 xl:gap-8 mt-16'>
      
      {/* Step 1: Receive Packages */}
      <div className='group relative flex-1 max-w-md'>
        {/* Step Number Badge for Mobile */}
        <div className="absolute -top-3 left-3 lg:hidden z-20 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-sm">1</span>
        </div>
        
        <div className='bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden group-hover:-translate-y-2'>
          {/* Image Container */}
          <div className='relative overflow-hidden h-48'>
            <img 
              src={rec} 
              alt="Package receiving process" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent'></div>
            
          </div>
          
          {/* Content */}
          <div className='p-6 lg:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300'>
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className='text-md font-semibold text-gray-900'>Receiving Packages</h3>
            </div>
            <p className='text-gray-600 text-sm leading-relaxed'>
              You send your inventory to our prep center. We conduct thorough inspection, 
              ensuring everything matches your specifications and requirements.
            </p>
            
            {/* Features List */}
            <ul className='mt-4 space-y-2'>
              <li className='flex items-center gap-2 text-sm text-gray-500'>
                <div className='w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                Secure package handling
              </li>
              <li className='flex items-center gap-2 text-sm text-gray-500'>
                <div className='w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                Detailed inspection report
              </li>
              <li className='flex items-center gap-2 text-sm text-gray-500'>
                <div className='w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                Immediate status updates
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 2: Prep & Pack */}
      <div className='group relative flex-1 max-w-md'>
        {/* Step Number Badge for Mobile */}
        <div className="absolute -top-3 -left-3 lg:hidden z-20 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-sm">2</span>
        </div>
        
        <div className='bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden group-hover:-translate-y-2'>
          {/* Image/Video Container */}
          <div className='overflow-hidden h-48 bg-gradient-to-br from-gray-900 to-gray-700 relative'>
            <MotionCrousel />
            {/* Dot pattern overlay */}
            <div className="absolute top-4 right-4 flex gap-1">
              {[1, 2, 3].map((dot) => (
                <div key={dot} className="w-2 h-2 bg-white rounded-full opacity-80"></div>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className='p-6 lg:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300'>
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className='text-md font-semibold text-gray-900'>Prep & Pack</h3>
            </div>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Your packages go through our optimized workflow with quality checks at every stage, 
              ensuring perfect preparation and packaging.
            </p>
            
            {/* Features List */}
            <ul className='mt-4 space-y-2'>
              <li className='flex items-center gap-2 text-sm text-gray-500'>
                <div className='w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                Quality assurance checks
              </li>
              <li className='flex items-center gap-2 text-sm text-gray-500'>
                <div className='w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                Brand-compliant packaging
              </li>
              <li className='flex items-center gap-2 text-sm text-gray-500'>
                <div className='w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                Real-time progress tracking
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 3: Shipment */}
      <div className='group relative flex-1 max-w-md'>
        {/* Step Number Badge for Mobile */}
        <div className="absolute -top-3 -left-3 lg:hidden z-20 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-sm">3</span>
        </div>

        <div className='bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden group-hover:-translate-y-2'>
          {/* Image Container */}
          <div className='relative overflow-hidden h-48'>
            <img 
              src={truck} 
              alt="Shipping and delivery process" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent'></div>
            {/* Dot pattern overlay */}
            <div className="absolute top-4 right-4 flex gap-1">
              {[1, 2, 3].map((dot) => (
                <div key={dot} className="w-2 h-2 bg-white rounded-full opacity-80"></div>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className='p-6 lg:p-8'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300'>
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className='text-md font-semibold text-gray-900'>Final Shipment</h3>
            </div>
            <p className='text-gray-600 text-sm leading-relaxed'>
              We ship your packages to the requested destination and provide comprehensive 
              tracking with instant notifications at every milestone.
            </p>
            
            {/* Features List */}
            <ul className='mt-4 space-y-2'>
              <li className='flex items-center gap-2 text-sm text-gray-500'>
                <div className='w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                Multiple carrier options
              </li>
              <li className='flex items-center gap-2 text-sm text-gray-500'>
                <div className='w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                Real-time tracking
              </li>
              <li className='flex items-center gap-2 text-sm text-gray-500'>
                <div className='w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                Delivery confirmation
              </li>
            </ul>
          </div>
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
