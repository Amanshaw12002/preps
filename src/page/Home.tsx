
import { CheckCircle, MoveRight ,Truck, Locate, Settings} from 'lucide-react';
import dash from "../asset/dash.png";
import d from "../asset/d.png"
import r from "../asset/r.png"
import i from "../asset/i.png"
import p from "../asset/p.png"
import s from "../asset/s.png"
import dashboard from "../asset/dashboard.png"
import del from "../asset/del.png";
import ContactForm from "@/component/ContactForm";
import GetQuoteForm from '@/component/GetQuote';


export default function Home() {
  
  return (
    <>
    


    <section className={`relative md:h-[100vh] h-[90vh] md:w-screen w-full flex items-center justify-center  bg-white overflow-hidden    `}>
                    <div className=" absolute md:left-10 left-4 top-30 w-full md:w-1/2 z-10 text-black ">
                          <h2 className="md:text-5xl text-4xl  font-com text-shadow-2xs  "> Store, <span className="text-red-900">Pack &</span> Ship.</h2>
                        <h2 className="md:text-2xl text-xl font-com   mt-2 ">Get Amazon-Ready  Fulfillment Services.
                          </h2><h2 className="md:text-2xl text-xl  font-com   "> You sell, we handle the rest.</h2>
                          <button className="group text-xl mt-8  font-sans overflow-hidden cursor-pointer
                          px-4 py-1 flex items-center justify-between hover:scale-105 transition duration-300 bg-gradient-to-tr from-gray-900 to-red-900 shadow-sm shadow-black rounded-2xl text-white ">
                            <span className="group-hover:translate-x-4 transition duration-200">Get Started</span>
                            <MoveRight className="group-hover:translate-x-10 duration-300 transition ml-2 w-5 h-5"/>
                            </button>
                            <div className="flex-between w-fit">

                             <CheckCircle className="w-5 h-5 " />
                            <p className="p-2 text-xs font-sans">5k+ users have booked demo to grow</p>

                    </div>

                    </div>
                    
      
                      <img src={dashboard} alt="" className="h-2/5 w-11/12 md:w-1/2 md:h-2/3 -right-10  overflow-hidden     absolute z-0  -bottom-10   border-l-8 border-t-6 rounded-2xl    border-gray-500"/>

                     <div className='bottom-0 h-12 bg-gradient-to-t from-white to-transparent z-20 absolute w-full'></div>

        </section>






            
            <section className="md:h-[140vh] h-[120vh]  w-screen   flex items-center justify-center  ">
              <div className='   h-9/12 relative  w-11/12 bg-[#eaedf2] rounded-4xl overflow-hidden'>

              <div className="flex items-start justify-between md:w-1/2 w-full   ">
                             <div className="md:mx-8 mx-2 mt-12    ">
                              <h2 className="md:text-4xl text-2xl font-com">Be <span className='text-red-700'>always updated</span> with our smart dashboard overview.</h2>
                              <h2 className="font-com text-lg pt-1"> Check anytime,anywhere within your range and  comfort.</h2>
                              
                              </div>

              </div>
                       <img src={d} className="object-cover  absolute  top-60 right-0 md:right-0 md:top-10 h-1/4 w-4/5 md:h-1/2 md:w-2/5 "/>
                       
                       <img src={dashboard} alt="dashboard" className="absolute shadow-2xl w-11/12 shadow-black z-10 left-2 bottom-20 md:left-8 md:-bottom-10 md:h-3/5 md:w-7/12 rounded-xl"/>

    <img src={dash} alt="inventory" className="z-20 absolute shadow-2xl  right-0 w-11/12 shadow-black -bottom-2 md:-bottom-20  md:left-1/3 md:h-1/2 md:w-fit rounded-2xl object-cover"/>
         <div className="bg-gradient-to-b from-transparent to-white bottom-0 z-30 absolute md:h-20 h-8 w-full"></div>
              </div>
            </section>

           

            <section className="md:h-[180vh] h-[220vh]  flex items-center justify-center w-screen   ">
              
              <div className='   h-11/12 relative  w-full bg-[#eaedf2] px-8  overflow-hidden'>
                           <h2 className={`text-4xl text-center text-black epunda-sans  mt-12  `}>We take care of   <span className="text-red-700">your packages </span>from start to end,   </h2>

                           <h3 className="mb-6 text-2xl text-center epunda-sans">So, you can take care of your business with ease.</h3>
                                  <h3 className="text-center font-mont mb-4   text-3xl">

                                  Our <span className="text-red-700 border-b-2">4 S</span>tep Proces
                                  <span className='text-red-700'>s</span>
                                  </h3>
                             <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2  gap-6">
  {/* Card 1 */}
  <div className="h-fit group overflow-hidden bg-white border-b-2 border-white rounded-xl hover:shadow-xl shadow-black hover:scale-105 transition duration-300">
    <img src={r} alt="receive" className="object-cover w-full h-32 sm:h-40 lg:h-48" />
    <h2 className="text-md pl-2 py-1 font-mont border-red-700 border-l-2">
      Accepting the package
    </h2>
    <h3 className="text-sm font-open-sans text-gray-800 px-2 text-start h-14 w-full">
      Receiving and Checking with full safety that you get updated.
    </h3>
  </div>

  {/* Card 2 */}
  <div className="h-fit overflow-hidden bg-white border-b-2 border-white rounded-xl hover:shadow-xl shadow-black hover:scale-105 transition duration-300">
    <img src={i} alt="warehouse" className="object-cover w-full h-32 sm:h-40 lg:h-48" />
    <h2 className="text-md pl-2 py-1 border-red-700 border-l-2 font-mont">
      Warehouse storage
    </h2>
    <h3 className="text-sm font-open-sans text-gray-800 px-2 text-start h-14 w-full">
      We give you total control of Inventory Management System in your hand.
    </h3>
  </div>

  {/* Card 3 */}
  <div className="h-fit overflow-hidden bg-white border-b-2 border-white rounded-xl hover:shadow-xl shadow-black hover:scale-105 transition duration-300">
    <img src={p} alt="packaging" className="object-cover w-full h-32 sm:h-40 lg:h-48" />
    <h2 className="text-md pl-2 py-1 border-red-700 border-l-2 font-mont">
      Preparing & Packaging
    </h2>
    <h2 className="text-sm font-open-sans text-gray-800 px-2 text-start h-14 w-full">
      Packaging with care & total security 24/7 checking that nothing is missed under your eyes.
    </h2>
  </div>

  {/* Card 4 */}
  <div className="h-fit overflow-hidden bg-white border-b-2 border-white rounded-xl hover:shadow-xl shadow-black hover:scale-105 transition duration-300">
    <img src={s} alt="shipment" className="object-cover w-full h-32 sm:h-40 lg:h-48" />
    <h2 className="text-md pl-2 py-1 border-red-700 border-l-2 font-mont">
      Shipment Process
    </h2>
    <h2 className="text-sm font-open-sans text-gray-800 px-2 text-start h-14 w-full">
      Effortless Tracking for your shipment
    </h2>
  </div>
</div>

                       </div>
            </section>





        <section className={`h-[130vh]  hidden md:block  w-screen    overflow-hidden  relative `}>

    <img src={del} alt="inventory" className="z-0 absolute top-10  -right-30 h-full w-2/3 rounded-2xl object-cover"/>

          <div className="flex items-start justify-start flex-col h-full w-11/12 left-10 top-2  absolute z-10 "> 
          <h2 className={`text-4xl  font-mont font-semibold mt-12 mb-2 `}>Our <span className="text-red-700">Smart &</span>  Optimized Shipment Process </h2>
          <p className="text-gray-500 font-mon">Get you covered with  all your tensions and frustration  with shipment
            by giving you </p>
            <p className="text-gray-500">
             <span className="text-red-700 underline">smooth and easy control</span>  over shipment process. </p>
          
        <div className=" flex-col flex  items-start justify-between  md:h-3/5 w-full ">
          {/* Card 1 */}
          <div className="p-6 w-1/2 bg-transparent h-72 flex flex-col items-start justify-start hover:shadow-xl transition">
            <div className="flex-between   w-fit h-12">

            <Truck className="w-8 h-8 bg-red-800 text-white mx-auto p-1 rounded-sm   " />
            <h3 className="text-lg font-semibold  text-black ml-2">
              Streamlined Operations
            </h3>
          </div>
            <p className="text-gray-600 text-md">
    We simplify shipment handling by cutting unnecessary steps
              and automating tasks. This reduces delays, lowers costs,
              and ensures packages move quickly without errors.            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-transparent p-6 w-1/2 h-72 flex flex-col items-start justify-start text-center hover:shadow-xl transition">
            <div className="flex-between self-start  w-fit h-12 ">
            <Locate className="w-8 h-8 bg-red-800 text-white mx-auto p-1 rounded-sm" />
            <h3 className="text-lg font-semibold text-black ml-2 ">
              Real-Time Tracking
            </h3>
            </div>
            <p className="text-gray-600 text-start text-md">
  Monitor every shipment from warehouse to delivery with
              live updates. Our system keeps you and your customers
              informed at every stage with full transparency.         </p>
          </div>

          {/* Card 3 */}
          <div className="bg-transparent p-6 w-1/2 h-72 flex items-start justify-start flex-col hover:shadow-xl transition">
            <div  className="flex-between  self-start  w-fit h-12">

            <Settings className="w-8 h-8 bg-red-800 text-white mx-auto p-1 rounded-sm" />
            <h3 className="text-lg font-semibold text-black ml-2">
              Hassle-Free Management
            </h3>
            </div>
            <p className="text-gray-600   text-md">
  Control shipments with a smart dashboard that manages
              orders, returns, and costs. Gain insights and keep
              logistics smooth—all in one place.            </p>
          </div>
        </div>
          </div>
        </section>

            <ContactForm />
            <GetQuoteForm/>





    </>
  )
}
