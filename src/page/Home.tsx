
import { Truck,  Settings,House,Warehouse} from 'lucide-react';
import inventory from "../asset/inventory.png"

import truck from "../asset/truck.png"
import one from "../asset/1.png"
import two from "../asset/2.png"
import three from "../asset/3.png"
import four from "../asset/4.png"
import prep from "../asset/prep.png"
import rec from "../asset/rec.png"
import warehouse from "../asset/warehouse.png"
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
    

      <section className="flex-center relative mt-16   overflow-hidden ">
       <div className="absolute bottom-0 w-full h-64 bg-gradient-to-b from-transparent via-red-700 to-transparent  -z-1"></div>
      <div className=' max-w-6xl  lg:flex  z-10  '>

                    <div className="  pl-14 mx-auto xl:max-w-xl  lg:max-w-lg max-w-xl lg:mt-32    shrink-0   text-black ">
                                
                         <div className="flex lg:flex-col lg:w-sm ">
<h2 className="text-6xl font-semibold font-inter text-black text-shadow-2xs">
  <span className=" block">
    New look   {" "} 
  </span>
  <span className=" block">
  for your FBA
  </span>
  <span className='bg-gradient-to-r from-blue-800   to-red-500 bg-clip-text  text-transparent '>{" "}   prep service.  </span>
    
</h2>
                         </div>

                          <h2 className=' text-xl font-sans font-normal text-gray-900  mt-4 mb-2  '>You sell, we handle the rest.</h2>
                          <p className='font-sans text-sm  pr-12  text-gray-900 '>We provide safe storage to professional packing  and fast shipping.With our fast reliable  FBA service,your  products  are always  ready to reach  customers  quickly and  securely.</p>

                         
                    </div>
                      
                    <div className='lg:max-w-none  lg:flex-none flex max-w-2xl   lg:ml-0 shadow-2xl shadow-red-700 bg-gradient-to-r from-red-700 via-black to-red-800 rounded-2xl'>
                    <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
                      <div className='   border-gray-400     border lg:border-0 p-4  rounded-sm sm:rounded-xl   bg-gray-200 lg:bg-transparent'>
                      <img src={prep} alt="" className=" rounded-xs xl:w-[38rem]  w-[38rem] sm:rounded-xl      "/>
                        </div>  
                        </div>  
                    </div>

                            </div>

        </section>

<section className=' relative'>
  <div className='flex-between  max-w-5xl mx-auto' >

                      <img src={warehouse} alt="" className=" rounded-xs  w-[32rem] sm:rounded-xl      "/>
                      <div className='flex flex-col max-w-xl  ml-12 '>
                        <h2 className='font-sans text-md'>Let's grow your business together.</h2>
                        <h2 className='text-3xl font-inter font-normal mb-4  '>Setting up <span className='text-red-700'>new business on Amazon </span> or  have a <span className='text-gray-900'> existing one,</span> who is looking for a reliable <span className='bg-gradient-to-r from-blue-800   to-red-500 bg-clip-text font-medium  text-transparent '> prep services</span>.</h2>
                        <h2 className='font-sans text-md text-gray-900 font-normal mb-2'>Then you are in right place in right time,we will  cover all your fullfillment needs in one place for your preps requirements to get you started with FBA or FBM.We also provide plateform to stay connected with our prep center that you never miss anything on our prep center. </h2>
                              <h2 className='font-open-sans text-md text-gray-700 font-semibold'>Know more:
                              </h2>
                            <div className="flex-between text-gray-500 mx-auto font-semibold gap-4 mt-4">

                              <button className='    cursor-pointer rounded-xl border-2 bg-gradient-to-r from-gray-200  to-white font-medium` shadow-sm shadow-black text-black px-4 py-2'>FBA Service</button>
                              Or<button className='  cursor-pointer rounded-xl border-2 border-amber-700 bg-gradient-to-r from-white  to-gray-200 font-medium shadow-sm shadow-black text-black px-4 py-2'>FBM Service</button>
                              
                            </div>
                        </div>

</div>
</section>

<section className=' relative'>
  <div className='mx-auto max-w-5xl flex-center flex-col '>
    <div className='w-1/2 self-start ml-26'>

 <h2 className=' text-4xl font-normal text-black border-l-2 pl-2 '>  <span className="text-red-700">You are 3 s|</span>teps away to get started with us. </h2>
    </div>
<div className='flex-between max-w-4xl mx-auto gap-6'>
 <div className='flex-between  max-w-md   gap-4'>
    <div className='text-center border-2   rounded-2xl p-6    font-medium text-4xl'>1</div>
   <h2 className='text-2xl font-inter font-normal text-black border-l-2 pl-2'>First you send us <span className='text-gray-600'>your  inventory to <span className='text-red-700'>our prep center</span>.We inspect the packages,ensuring</span> everything is correct .   </h2>
 </div>
 <img src={rec} alt="" className=" rounded-xs  w-[22rem] sm:rounded-xl      "/>
</div>
  </div>
<div className='flex-center flex-col'>
 <div className='flex-between flex-col   gap-4'>
    <div className='text-center border-2   rounded-2xl p-6  font-medium text-4xl'>2</div>
   <h2 className='text-3xl font-inter text-black border-t-2'>Second <span className='text-gray-700'>your pakages will </span>pass through <span className='text-red-700'>our optimized workflow.</span></h2>
   <h2 className='text-3xl font-inter text-black '></h2>
 </div>
 <div className='flex items-center max-w-4xl mx-auto bg-gray-200 rounded-2xl gap-6 mt-8'>
<div className='  relative m-2 '>
  <img src={one} alt="" className="       rounded-full      "/>

  <div className='flex items-center shadow-black  rounded-3xl bg-white mt-2'>
   <h2 className='text-center   rounded-full w-10 h-10 p-2 m-1   text-white bg-black   font-medium text-xl'>1</h2>
   <h2 className=' text-black  px-4 font-medium text-md font-sans py-1'>Inspecting</h2>
  </div>
</div>
<div className='  relative m-2'>
  <img src={four} alt="" className="   rounded-full border-black             "/>

  <div className='flex items-center shadow-black  rounded-3xl bg-white mt-2'>
   <h2 className='text-center   rounded-full w-10 h-10 p-2 m-1   text-white bg-black   font-medium text-xl'>2</h2>
   <h2 className=' text-black  px-4 font-medium text-md font-sans py-1'>Packaging</h2>
  </div></div>
<div className='  relative m-2'>
  <img src={two} alt="" className="  rounded-full      "/>

  <div className='flex items-center shadow-black  rounded-3xl bg-white mt-2'>
   <h2 className='text-center   rounded-full w-10 h-10 p-2 m-1 text-white bg-black   font-medium text-xl'>3</h2>
   <h2 className=' text-black  px-4 font-medium text-md font-sans py-1'>Barcodes</h2>
  </div></div>
<div className='  relative m-2'>
  <img src={three} alt="" className="  rounded-full      "/>

  <div className='flex items-center shadow-black  rounded-3xl bg-white mt-2'>
   <h2 className='text-center   rounded-full w-10 h-10 p-2 m-1 text-white bg-black   font-medium text-xl'>4</h2>
   <h2 className=' text-black  px-4 font-medium text-sm font-sans py-1'>Label</h2>
  </div></div>
 </div>

</div>
</section>
          
         

           
<section className="relative flex justify-center items-center overflow-hidden  bg-white py-4 px-4">
  {/* Top fading gradient for effect */}

  <div className="max-w-7xl  flex flex-col items-center justify-center pt-12    ">
    {/* Tabs / Items */}
    <div className='flex flex-col items-end self-end border-r-2 pr-2   text-gray-900'>
      
    <h2 className='text-xl md:text-4xl font-open-sans font-medium    '>We provide all </h2>
    <span className='inline-block text-xl md:text-4xl font-open-sans text-red-700'>requirements for</span> 
    <h2 className=' text-xl md:text-4xl font-open-sans font-medium '> managing your prep center.</h2>
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

<section className='flex-center'>
  <div className="max-w-5xl ">
    <div className='flex-between  max-w-5xl mx-auto gap-6 mt-8 mb-8'>
    <img src={truck} alt="" className=" rounded-xs  w-[24rem] sm:rounded-xl      "/>
    <div className='flex-between  max-w-xl   gap-4'>
    <div className='text-center border-2   rounded-2xl p-6    font-medium text-4xl'>3</div>
   <h2 className='text-2xl font-inter font-normal text-black border-l-2 pl-2'>Third after <span className='text-red-700'>prep & pack</span>,we  <span className='text-gray-600'> ship your packages to the requested center.Also we notify you</span> with our means of communication.   </h2>
    </div>
 </div>
 
  </div>

  </section>


      

<section className=''>
  <div
  className='max-w-5xl h-50 mx-auto relative flex items-start flex-col gap-2 px-12 py-4 bg-gradient-to-br from-red-600  to-black  '> 
  <div className='absolute -top-10 left-2/3 w-18 h-96 bg-white/20 -rotate-24'></div>
  <div className='absolute -top-10 left-1/3 w-12 h-96 bg-white/20 -rotate-24'></div>
  <div className='absolute -top-10 left-1/4 w-6 h-96 bg-white/20 -rotate-24'></div>
    <h2 className='text-white font-inter   sm:text-4xl text-2xl font-medium '>Simplify Your Business </h2>
    <h2 className='text-white font-inter   sm:text-4xl text-2xl '>Get started with <span className='font-semibold'> BlackBoxPreps</span> today! </h2>

              <div className='bg-white    rounded-xl p-2 mt-2'>
              <Link to="/contact" className=" bg-gradient-to-r from-black   to-red-600 bg-clip-text font-medium  text-transparent   hover:scale-95 hover:shadow-none text-xl  p-2 transition">
            Get in touch
          </Link>
              </div>

  </div>
</section>






     <GetQuoteForm/>
        <CustomCalendar/>




</>
  )
}
