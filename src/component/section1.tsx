import { easeIn, easeOut, motion } from 'framer-motion';
import { Zap, Shield, DollarSign } from 'lucide-react';
import box from '../asset/box.png'

export default function OptimizedSection() {
  return (
    <section className="flex-center relative pt-4 pb-60 ">
  
             

  <motion.div 
         className="absolute top-20 left-6.5 w-3 h-3 bg-red-800"
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.1, duration: 0.5 }}
       ></motion.div>
       <motion.div 
         className="absolute top-20 right-6.5 w-3 h-3 bg-red-800"
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.2, duration: 0.5 }}
       ></motion.div>
       <motion.div 
         className="absolute -bottom-1 right-6.5 w-3 h-3  bg-red-800"
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.3, duration: 0.5 }}
       ></motion.div>
       <motion.div 
         className="absolute -bottom-1 left-6.5 w-3 h-3  bg-red-800"
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.4, duration: 0.5 }}
       ></motion.div>
       
       {/* Animated Border Lines */}
       <motion.div 
         className="absolute top-0 left-8 w-px h-full bg-red-800"
         initial={{ scaleY: 0 }}
         whileInView={{ scaleY: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
       ></motion.div>
       <motion.div 
         className="absolute top-0 right-8 w-px h-full bg-red-800"
         initial={{ scaleY: 0 }}
         whileInView={{ scaleY: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, delay: 0.2 }}
       ></motion.div>
       <motion.div 
         className="absolute top-21  w-full h-px bg-red-800"
         initial={{ scaleY: 0 }}
         whileInView={{ scaleY: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, delay: 0.2 }}
       ></motion.div>


      <motion.div 
        className='max-w-6xl relative mx-2 mt-8 xl:mx-0 lg:flex z-10 rounded-xl'
        initial={{ opacity: 0, }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        
        {/* Animated Value Cards */}
        <div className='absolute -bottom-60 w-full max-w-4xl left-1/2 rounded-2xl py-4 pr-18 transform -translate-x-1/2 flex justify-between gap-4'>
          {/* Value 1 */}
      {/* Value 1 */}
<motion.div 
  className='group relative flex-1 max-w-48 h-48 bg-white border-2 border-red-400  rounded-2xl shadow-2xl p-6 hover:-translate-y-3 transition-all duration-500'
  initial={{  y: 100 ,scale:0.7}}
  whileInView={{ y: 0 ,scale:1}}
  viewport={{once:true}}
  
  transition={{  duration: 0.8 , ease:easeIn}}
>
  <motion.div 
    className='w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center mb-3'
  >
    <Zap className="w-5 h-5 text-white" />
  </motion.div>
  <motion.h3 
    className='text-black text-xs font-semibold mb-2'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    Fast Processing
  </motion.h3>
  <motion.p 
    className='text-black text-xs leading-relaxed'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.6 }}
  >
    2-5 day turnaround for most orders with real-time tracking
  </motion.p>
  <div className='absolute group-hover:scale-x-100 scale-x-0 bottom-4 left-6 right-6 h-0.5 bg-red-600 rounded-full transition-transform duration-600'></div>
</motion.div>

{/* Value 2 */}
<motion.div 
  className='group relative flex-1 max-w-48 h-48 bg-white border-2 border-red-400 rounded-2xl shadow-2xl p-6 hover:-translate-y-3 transition-all duration-500'
  initial={{  y: 100 ,scale:0.6}}
  whileInView={{ y: 0 ,scale:1}}
  viewport={{once:true}}
  
  transition={{  duration: 1 , ease:easeOut}}
>
  <motion.div 
    className='w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center mb-3'
  >
    <Shield className="w-5 h-5 text-white" />
  </motion.div>
  <motion.h3 
    className='text-black text-xs font-semibold mb-2'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.6 }}
  >
    Quality Guarantee
  </motion.h3>
  <motion.p 
    className='text-black text-xs leading-relaxed'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
  >
    Amazon compliance guaranteed with detailed quality checks
  </motion.p>
  <div className='absolute group-hover:scale-x-100 scale-x-0 bottom-4 left-6 right-6 h-0.5 bg-red-600 rounded-full transition-transform duration-600'></div>
</motion.div>

{/* Value 3 */}
<motion.div 
  className='group relative flex-1 max-w-48 h-48 bg-white border-2 border-red-400 rounded-2xl shadow-2xl p-6 hover:-translate-y-3 transition-all duration-500'
  initial={{  y: 100 ,scale:0.7}}
  whileInView={{ y: 0 ,scale:1}}
  viewport={{once:true}}
  
  transition={{  duration: 0.8 , ease:easeOut}}
>
  <motion.div 
    className='w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center mb-3'

  >
    <DollarSign className="w-5 h-5 text-white" />
  </motion.div>
  <motion.h3 
    className='text-black text-xs font-semibold mb-3'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7, duration: 0.6 }}
  >
    Transparent Pricing
  </motion.h3>
  <motion.p 
    className='text-black text-xs leading-relaxed'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    No hidden fees with volume discounts for growing businesses
  </motion.p>
  <div className='absolute group-hover:scale-x-100 scale-x-0 bottom-4 left-6 right-6 h-0.5 bg-red-600 rounded-full transition-transform duration-600'></div>
</motion.div>
        </div>


        

        {/* Content Section with Animated Grid Lines */}
        <div className="relative pl-14 mx-auto xl:max-w-xl max-w-xl lg:pt-24 shrink-0 text-black">

 



          {/* Animated Grid Lines */}
          {[
            { class: 'h-full w-px top-20 left-20 bg-gradient-to-b from-red-800 to-red-700 ', delay: 0 },
            { class: 'h-px w-full top-20 left-20 bg-gradient-to-r from-red-800 via-red-200 to-white', delay: 0.1 },
            { class: 'h-px w-full top-40 left-20 bg-gradient-to-r from-red-800 via-red-200 to-white', delay: 0.2 },
            { class: 'h-px w-full top-60 left-20 bg-gradient-to-r from-red-800 via-slate-200 to-white', delay: 0.3 },
            { class: 'h-px w-full top-80 left-20 bg-gradient-to-r from-red-200 via-slate-200 to-white', delay: 0.4 },
            { class: 'h-px w-full top-100 left-20 bg-gradient-to-r from-red-800  via-slate-200 to-red-800', delay: 0.5 },
            { class: 'h-full w-px top-20 left-40 bg-gradient-to-b from-red-800 via-slate-200 to-red-800', delay: 0.6 },
            { class: 'h-full w-px top-20 left-60 bg-gradient-to-b from-red-800 via-slate-300 to-red-800', delay: 0.7 },
            { class: 'h-full w-px top-20 left-80 bg-gradient-to-b from-red-800 via-slate-400 to-red-800', delay: 0.8 },
            { class: 'h-full w-px top-20 left-100 bg-gradient-to-b from-white via-red-200 to-white', delay: 0.9 },
          ].map((line, index) => (
            <motion.div
              key={index}
              className={`absolute -z-1 ${line.class}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: line.delay, duration: 0.8 }}
            />
          ))}
          
          {/* Animated Text Content */}
          <div className="flex lg:flex-col w-lg relative ">

            <h2 className="text-5xl font-semibold font-inter text-red-700 text-shadow-2xs">
              <motion.span 
                className="block pb-1"
                initial={{ opacity: 0, y: 30,scale:0.7 }}
                animate={{ opacity: 1, y: 0 ,scale:1}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Optimized {" "} 
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r pb-1 block from-red-500 via-black to-black bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 ,scale:0.7}}
                animate={{ opacity: 1, y: 0 ,scale:1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Prep Services {" "} 
              </motion.span>
              <motion.span 
                className="bg-gradient-to-l pb-1 block from-black via-black to-red-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 ,scale:0.7}}
                animate={{ opacity: 1, y: 0 ,scale:1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
              for All Your
              </motion.span>
              <motion.span 
                className='bg-gradient-to-l pb-1 block from-black via-black to-red-500 bg-clip-text text-transparent'
                initial={{ opacity: 0, y: 30 ,scale:0.7}}
                animate={{ opacity: 1, y: 0 ,scale:1}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {" "} Fulfillment Needs. {" "}
              </motion.span>
            </h2>
          </div>

          <motion.h2 
            className='text-md font-sans font-normal text-black mt-4 mb-2'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            You sell, we handle the rest.
          </motion.h2>
          <motion.p 
            className='font-sans text-xs pr-12 text-gray-700'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Safe storage to professional packing & fast shipping. With our fast and reliable FBA service, your products are always ready to reach customers quickly and securely.
          </motion.p>
        </div>
        
        {/* Animated Image */}
        <div className='lg:max-w-none relative mt-16 lg:flex-none flex max-w-2xl lg:ml-0'>
          <div className='max-w-xl flex-none lg:max-w-none'>
            <motion.div 
              className='border-gray-400 border lg:border-0 bg-gray-200 lg:bg-transparent'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.img 
                src={box} 
                alt="" 
                className="w-[24rem] object-cover rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              />
            </motion.div>  
          </div>  
        </div>
      </motion.div>
    </section>
  );
}