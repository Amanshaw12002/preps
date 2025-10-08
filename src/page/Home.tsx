
import { Truck,  Settings,House,Warehouse} from 'lucide-react';
import inventory from "../asset/inventory.png"
import truck from "../asset/truck.png"
import one from "../asset/1.png"
import two from "../asset/2.png"
import three from "../asset/3.png"
import four from "../asset/4.png"
import rec from "../asset/rec.png"
import def from "../asset/default-4.png"
import def2 from "../asset/default-13.jpg"
import def3 from "../asset/default-31.jpg"
import dashboard from "../asset/dashboard.png"
import m from "../asset/m.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CustomCalendar from '@/component/Meeting';
import { FaSearch, FaBoxOpen, FaBarcode, FaTags } from "react-icons/fa";


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
    

       <div className="absolute bottom-0  h-64  bg-gradient-to-b from-white via-red-700 to-white  -z-1"></div>
      <section className="flex-center relative my-14   overflow-hidden ">

      <div className=' lg:w-screen xl:max-w-7xl mx-2 py-4 xl:mx-0  lg:flex  z-10 overflow-hidden  bg-gradient-to-r from-white to-white rounded-xl'>

                    <div className="  pl-14 mx-auto xl:max-w-xl    max-w-lg lg:pt-32    shrink-0   text-black ">
                                
                         <div className="flex  lg:flex-col lg:w-sm ">
<h2 className="text-5xl font-semibold font-inter text-black text-shadow-2xs">
  <span className="block  bg-gradient-to-l  from-red-700 via-red-600 to-black bg-clip-text  text-transparent">
    Give new     {" "} 
  </span>
  <span className="bg-gradient-to-l pb-1 block from-red-700 via-red-800 to-black bg-clip-text  text-transparent ">
    look to your
  </span>
  <span className='bg-gradient-to-l block pb-1 from-red-500 to-black bg-clip-text  text-transparent '>{" "} FBA  prep service.  </span>
    
</h2>
                         </div>

                          <h2 className=' text-md font-sans font-normal text-black  mt-4 mb-2  '>You sell, we handle the rest.</h2>
                          <p className='font-sans text-xs  pr-12  text-black '>We provide safe storage to professional packing  and fast shipping.With our fast reliable  FBA service,your  products  are always  ready to reach  customers  quickly and  securely.</p>
             <button className='border-2 px-2 py-1 mt-4 text-black bg-white rounded-xl cursor-pointer'>Explore now</button>
                    </div>
                      
                    <div className='lg:max-w-none relative  lg:flex-none flex max-w-2xl  mt-12 lg:ml-0'>
                      <div className='absolute bottom-4 -left-10 w-42 p-4 bg-white rounded-2xl shadow-xl shadow-black '>
                       <h2 className='font-inter text-xl'>100%</h2>
                       <h2 className='text-sm text-blue-800'>Amazon compliance</h2>
                       <p className='text-xs'>Fully compliant with Amazon FBA standards.</p>

                      </div>
                      <div className='absolute -top-10 left-50 w-42 p-4 bg-white rounded-2xl shadow-xl shadow-black '>
                       <h2 className='font-inter  text-md'>24-48hrs</h2>
                       <h2 className='text-sm text-blue-800'>Turnaround Time</h2>
                     <p className='text-xs'>Fast and reliable order processing.</p>
                      </div>
                    <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
                      <div className='   border-gray-400     border lg:border-0      bg-gray-200 lg:bg-transparent'>
                      <img src={m} alt="" className=" w-[42rem] object-cover rounded-4xl       "/>
                        </div>  
                        </div>  

                    </div>
                            </div>

        </section>

<section className='my-24'>
      <div className="max-w-6xl mx-auto flex flex-col items-start justify-center text-black px-12 my-8">
  <h2 className="font-sans text-xl mb-2">
    Let's grow together.
  </h2>

  <h2 className="text-5xl font-medium">
    Setting up a <span className="text-amber-500">new business on Amazon</span> or have an 
    <span className="text-red-700"> existing one</span> who is looking for 
    a <span className="bg-gradient-to-r from-red-700 to-yellow-200 bg-clip-text text-transparent font-medium">
      reliable prep service
    </span>.
  </h2>
</div>
                      
  <div className='flex-between  max-w-6xl   mx-auto py-6 px-12 mb-12' >

<div className="max-w-6xl mx-auto px-4 self-start grid grid-cols-2 gap-8 text-center">
    <div className='border-l-2 flex flex-col items-start pl-2 '>
      <h2 className="text-2xl font-inter font-normal border-b-2">50K+</h2>
      <p className="text-gray-800 text-md">Orders Processed</p>
      <p className='text-gray-700 text-xs text-left'>Successfully prepped and shipped units.</p>
    </div>
    <div className='border-l-2 flex flex-col items-start pl-2'>
      <h2 className="text-2xl  font-normal font-inter text-black border-b-2">99%</h2>
      <h2 className="text-gray-800 text-md">Client Satisfaction</h2>
      <p className='text-gray-700 text-xs text-left'>Based on customer feedback & repeat business.</p>
    </div>
</div>
                            
                            <div className='flex flex-col  w-1/2 '>
                        <h2 className='font-sans text-sm text-gray-500 font-normal '>Then you are in right place,we cover all fullfillment needs in one place for your preps requirements to get you started with FBA or FBM services.We also provide plateform to stay connected with our prep center that you never miss anything on our prep center. </h2>
                <div className="flex-between flex-col self-start">
              <h2 className='font-sans text-md text-gray-800  mt-1 self-start mb-2 '>Let's connect</h2>
              <div className='bg-white border-2 border-black w-fit    rounded-xl p-2 '>
              <Link to="/contact" className=" bg-gradient-to-r from-black   to-red-600 bg-clip-text font-medium  text-transparent   hover:scale-95 hover:shadow-none text-xl  p-2 transition">
            Get in touch
          </Link>
              </div>
                </div>

                        </div>

</div>

</section>

<section className=' relative '>
  <div className='mx-auto max-w-5xl flex-center flex-col  '>
    <div className='w-2/3 self-start ml-12'>

 <h2 className=' text-5xl font-medium text-gray-800 pl-2 '>  <span className="text-red-700">You are 3 s|</span>teps away to get started with us. </h2>
    </div>
<div className='flex-between max-w-4xl mx-auto gap-6'>
 <div className='flex-between flex-col max-w-md   gap-4'>
  <div className='flex-between '>
    <div className='text-center border-2   rounded-2xl p-6    font-medium text-4xl'>1</div>
     <h2 className="text-3xl font-inter font-medium text-black border-l-2 pl-2 ml-2">Receive the packages</h2>
  </div>
   <h2 className='text-2xl font-inter font-normal text-black border-l-2 pl-2'> You send us <span className='text-gray-600'>your  inventory to <span className='text-red-700'>our prep center</span>.We inspect packages,ensuring</span> everything is correct .   </h2>
 </div>
 <img src={rec} alt="" className=" rounded-xs  w-[22rem] sm:rounded-xl      "/>
</div>
  </div>
<div className='flex-center flex-col'>
 <div className='flex-between flex-col   gap-4'>
  <div className='flex-between flex-col'>
    <div className='text-center border-2   rounded-2xl p-6  font-medium text-4xl'>2</div>
        <h2 className="text-3xl font-inter mt-2 font-medium text-black border-t-2">Prep & Pack</h2>
  </div>

   <h2 className='text-2xl font-inter text-black border-t-2'> <span className='text-gray-700'>Your pakages will </span>pass through <span className='text-red-700'>our optimized workflow.</span></h2>
   <h2 className='text-3xl font-inter text-black '></h2>
 </div>
 <div className='flex items-center max-w-4xl mx-auto  rounded-2xl gap-6 mt-8'>
<div className='  relative m-2 bg-gray-200 rounded-2xl p-2'>
    <div className='flex-center bg-white rounded-2xl py-1 mb-2 px-4'>
   <FaSearch className='text-center   w-6 h-6 p-1    text-white bg-red-700 rounded-full   font-medium text-xl'/>
   <h2 className=' text-black  px-4 font-medium text-md font-sans py-1'>Inspection</h2>
  </div>
  <img src={one} alt="" className="       rounded-full      "/>

   <h2 className='text-center   rounded-full w-10 h-10 p-2 m-1   text-black bg-white   font-medium text-xl'>1</h2>
  <p className='text-xs p-4 text-black  m-1 rounded-2xl bg-white  font-sans'>Every item is carefully inspected for damage, accuracy, and quality before processing.</p>

   
</div>
<div className='  relative m-2 bg-gray-200 rounded-2xl p-2'>
  <div className='flex-center bg-white   rounded-xl py-1 mb-2 px-4'>

   <FaBoxOpen className='text-center w-6 h-6 p-1  text-white  bg-red-700  rounded-full   font-medium text-xl'/>
   <h2 className=' text-black  px-4 font-medium text-md font-sans py-1'>Packaging</h2>
  </div>
  <img src={four} alt="" className="   rounded-full border-black             "/>

   <h2 className='text-center   rounded-full w-10 h-10 p-2 m-1   text-black bg-white   font-medium text-xl'>2</h2>
        
    <p className='text-xs p-4 text-black  m-1 rounded-2xl bg-white font-sans'>Items are securely packed using the right materials to prevent damage during transit.</p>
  </div>
<div className='  relative m-2 bg-gray-200 rounded-2xl p-2'>
<div className="flex-center   bg-white   rounded-xl py-1 mb-2 ">
   <FaBarcode className='text-center w-6 h-6 p-1   bg-red-700 text-white rounded-full    font-medium text-xl'/>
   <h2 className=' text-black px-4 font-medium text-md font-sans py-1'>Barcodes</h2>
  </div>
  <img src={two} alt="" className="  rounded-full      "/>
   <h2 className='text-center   rounded-full w-10 h-10 p-2  text-black bg-white   font-medium text-xl'>3</h2>

    <p className='text-xs p-4 text-black  m-1 rounded-2xl bg-white font-sans'>Each product is labeled with the correct FNSKU or UPC barcode for easy tracking.</p>
  </div>

<div className='  relative m-2 bg-gray-200 rounded-2xl p-2'>
      <div className='flex item-center px-4  mb-2  rounded-xl bg-white py-1'>
   <FaTags className='text-center w-6 h-6 p-1 rounded-full   text-white bg-red-800   font-medium text-xl'/>
   <h2 className=' text-black  px-4 font-medium text-sm   font-sans py-1'>Label</h2>
    </div>

  <img src={three} alt="" className="  rounded-full      "/>

   <h2 className='text-center   rounded-full w-10 h-10 p-2 m-1 text-black bg-white   font-medium text-xl'>4</h2>

    <p className='text-xs p-4 text-black bg-white  m-1 rounded-2xl bg- font-sans'>Proper labels are applied to meet carrier and Amazon shipping guidelines.</p>
</div>
 </div>

</div>
</section>
          
         
<section className='flex-center'>
  <div className="max-w-5xl ">
    <div className='flex-between  max-w-5xl mx-auto gap-6 mt-8 mb-8'>
    <img src={truck} alt="" className=" rounded-xs  w-[24rem] sm:rounded-xl      "/>
    <div className='flex-between flex-col  max-w-xl   gap-4'>
    <div className='flex-between '>
    <div className='text-center border-2   rounded-2xl p-6    font-medium text-4xl'>3</div>
    <h2 className='border-l-2 pl-2 ml-2 font-inter text-3xl font-medium'>Shipment</h2>
    </div>
   <h2 className='text-2xl font-inter font-normal text-black border-l-2 pl-2'>We <span className='text-red-700'>ship your packages</span>  <span className='text-gray-600'>  to the requested center.Also we notify you</span> with our means of communication.   </h2>
    </div>
 </div>
 
  </div>

  </section>


           
<section className="relative flex justify-center items-center overflow-hidden  bg-white mb-12 px-4">
  {/* Top fading gradient for effect */}

  <div className="max-w-7xl  flex flex-col items-center justify-center     ">
    {/* Tabs / Items */}
    <div className='flex flex-col items-end self-end border-r-2 pr-2   text-gray-900'>
      
    <h2 className='text-xl md:text-3xl font-inter     '>We provide all </h2>
    <span className='inline-block text-xl md:text-3xl font-inter text-red-700'>requirements for</span> 
    <h2 className=' text-xl md:text-3xl font-inter'> managing your prep center.</h2>
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
<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto flex flex-col  rounded-2xl py-8 items-center text-center px-4">
    <h2 className="text-xl mb-2 text-gray-800">Solutions</h2>
    <h2 className="text-3xl font-inter font-medium  text-black  mb-2">
      Comprehensive Fulfillment Services
    </h2>
    <h3 className="text-md font-medium text-gray-700 mb-12">
      Efficient and reliable logistics for Amazon sellers
    </h3>

    {/* Cards */}
    <div className="flex flex-wrap justify-between gap-6 w-full">
      {/* FBA Card */}
      <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-2xl shadow-md w-full md:w-[48%] overflow-hidden hover:shadow-lg transition">
        <div className="flex flex-col w-full md:w-1/2 p-6 text-left gap-3">
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

      {/* FBM Card */}
      <div className="flex flex-col bg-gray-100 rounded-2xl shadow-md w-full md:w-[23%] overflow-hidden hover:shadow-lg transition">
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

      {/* Prep Card */}
      <div className="flex flex-col bg-gray-100 rounded-2xl shadow-md w-full md:w-[23%] overflow-hidden hover:shadow-lg transition">
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
</section>

      

<section className=''>
  <div
  className='max-w-5xl h-50 mx-auto relative flex-between rounded-xl  gap-2 px-12 py-4 bg-gradient-to-r from-gray-700  to-black overflow-hidden  '> 

  <div className='absolute -top-10 left-3/4 w-18 h-96 bg-white/60 -rotate-24  z-0'></div>
  <div className='absolute -top-10 left-1/3 w-12 h-96  bg-white/60 -rotate-24 z-0'></div>
  <div className='absolute -top-10 left-1/2 w-6 h-96 bg-white/40 -rotate-24 z-0'></div>
  <div className='flex flex-col items-start z-10'>
    <h2 className='text-white font-inter   sm:text-4xl text-2xl font-medium '>Simplify Your Business.</h2>
    <h2 className='text-white font-inter   sm:text-4xl text-2xl mt-1'>Get started  today! </h2>

              <div className='bg-white    rounded-xl p-2 mt-2'>
              <Link to="/contact" className=" bg-gradient-to-r from-black   to-red-600 bg-clip-text font-medium  text-transparent   hover:scale-95 hover:shadow-none text-xl  p-2 transition">
            Get in touch
          </Link>
              </div>

  </div>
  </div>

</section>






        <CustomCalendar/>




</>
  )
}
