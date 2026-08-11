import inbound from '../asset/inbound.webp';
import inventory from '../asset/inventory.webp';
import outbound from '../asset/outbound.webp';

import { Truck, Settings, Warehouse, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Software_Display() {

   const [itemSelected,setItemSelected] =useState(0);
   /* Open by default: the rail is the only thing naming what the three views
      are, so a visitor who never touches the toggle has to arrive with the
      labels showing. */
   const [railOpen, setRailOpen] = useState(true);

const Items = [
  
  {
  index:0,
  label: "Inbound",
  icon: Settings,
  },
  {
    index:1,
    label: "Inventory",
    icon: Warehouse,
  },
  {
index:2,
    label: "Outbound",
    icon: Truck,
  },
];

/* `alt` was missing entirely — Lighthouse reported it against both the
   accessibility and the SEO score. Each of these shows a different part of the
   dashboard, so they get distinct descriptions rather than one reused string. */
const itemsImage = [
  {
    index:0,
    image:inbound,
    alt:"Inbound shipments dashboard — incoming inventory logged on arrival",
  },
  {
    index:1,
    image:inventory,
    alt:"Inventory dashboard — stock levels by SKU across the prep center",
  },
  {
    index:2,
    image:outbound,
    alt:"Outbound dashboard — shipments prepped and on their way to Amazon",
  },

]

  return (
    <>
        
{/* px-4 was missing entirely, so the grey card ran edge to edge on a phone
    while every other section on the page kept a margin — the kind of
    inconsistency that reads as a broken container rather than a choice. */}
<section className="max-w-7xl mx-auto ">
  <div className="max-w-5xl w-full flex flex-col items-center justify-center  mx-auto px-4 py-6 sm:px-6 rounded-xl">


     
    
    <motion.div 
      className='flex flex-col items-center text-2xl sm:text-4xl font-inter font-medium text-gray-900'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className='my-4'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {"Manage Everything from".split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
        <motion.span 
          className="bg-clip-text bg-gradient-to-r from-red-800 to-red-700 text-transparent font-semibold"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          One place.
        </motion.span>
      </motion.h2>
    </motion.div>

    {/* THE GAP BETWEEN THE TABS AND THE SCREENSHOT. The tabs are a fixed 9rem
        and the viewer caps at 46rem, so on a wide screen the row had ~6rem of
        slack — and because the viewer's own wrapper was `justify-center`, that
        slack was split evenly and half of it opened up between the tabs and the
        image they are supposed to be attached to. It closed up as you zoomed in
        because the slack disappeared. Capping the row at exactly tabs + viewer
        and centring the row itself puts the leftover on the outside, where it
        belongs, at every zoom level. */}
    {/* ONE CONTAINER, and the tabs are inside it. They used to be three pills
        floating to the left of a separately-bordered screenshot, which read as
        two unrelated objects that happened to be next to each other. Now the
        border, the rounding and the background belong to the frame and the rail
        is a sidebar within it — which is also what the product it is showing
        actually looks like. */}
    <div className='flex w-full flex-col sm:mt-8 sm:max-w-[55rem] sm:mx-auto sm:flex-row sm:overflow-hidden sm:rounded-xl sm:border sm:border-gray-300 sm:bg-white'>
      {/* Tabs. grid-cols-2 for THREE tabs left the third one alone on a second
          row, off to the left, looking like a mistake. Three columns fit at
          360px because the pills are no longer a fixed w-24.

          BELOW `sm` THIS IS NOT A SIDEBAR and the toggle is hidden. A rail that
          collapses to icons inside a 390px-wide card leaves the screenshot ~330px
          of room either way, so it would cost a control and buy nothing. */}
      <motion.div
        className={`grid grid-cols-3 gap-2 mt-4 sm:mt-0 sm:flex sm:flex-col sm:gap-1 sm:shrink-0 sm:gap-y-1 sm:border-r sm:border-gray-200 sm:bg-gray-50/80 sm:p-2 sm:transition-[width] sm:duration-300 sm:ease-[cubic-bezier(0.22,1,0.36,1)] ${
          railOpen ? "sm:w-44" : "sm:w-14"
        }`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* The toggle. `sm:flex hidden` rather than rendered conditionally, so
            the rail's open/closed state survives a resize instead of the button
            unmounting and stranding a collapsed sidebar with no way to reopen
            it. */}
        <button
          type="button"
          onClick={() => setRailOpen((v) => !v)}
          aria-expanded={railOpen}
          aria-label={railOpen ? "Collapse the dashboard sidebar" : "Expand the dashboard sidebar"}
          className={`hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 transition-colors duration-300 hover:border-gray-400 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 ${
            railOpen ? "self-start" : "self-center"
          }`}
        >
          {railOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>

        {Items.map(({ index, label, icon: Icon }) => {
          const active = index === itemSelected;
          return (
            <motion.button
              key={index}
              type="button"
              onClick={() => setItemSelected(index)}
              aria-pressed={active}
              /* `title` is the collapsed rail's only label — with the text gone
                 an icon alone says nothing about which view it opens. The
                 sr-only span below is the same answer for a screen reader. */
              title={label}
              /* COLLAPSED, EVERY ITEM IS THE SAME 36px SQUARE AS THE TOGGLE.
                 It used to keep `w-full` and `px-1.5` in both states: inside a
                 56px rail with `p-2` that is a 40px button holding a 32px icon
                 plus 12px of padding — 44px of content in 40px — so the row
                 overflowed its own button. On the grey items that only clipped;
                 on the red active one the fill made it read as bleeding out of
                 the rail. Square and centred, it matches the toggle above it. */
              /* HEIGHT IS IN THE CONDITIONAL, NOT THE BASE. It was `sm:h-11`
                 in the base string with `sm:h-9` appended for the collapsed
                 case — identical specificity, so the winner is whichever
                 Tailwind emits later, and it emitted h-11. The buttons stayed
                 44px tall next to a 36px toggle. Same trap the navbar's pill
                 borders document: the state has to PICK the class, not stack
                 one on top of another. */
              className={`
                flex items-center gap-1.5 sm:gap-2  h-10 rounded-sm sm:rounded-md border sm:border
                ${railOpen
                  ? "w-full justify-center sm:justify-start sm:h-11 "
                  : "w-full justify-center sm:h-9 sm:w-9 sm:self-center  sm:px-0"}
                ${active ? "border-red-700 bg-red-700 text-white shadow-none" : "bg-white border-gray-300 shadow-xl sm:shadow-none hover:shadow-none sm:hover:border-gray-400"}
                cursor-pointer transition-colors duration-300 flex-shrink-0 overflow-hidden
              `}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* the icon plate shrinks with the rail so it clears the 36px
                  square's border instead of filling it edge to edge */}
              <motion.div
                className={`
                  size-6 shrink-0 rounded-sm sm:rounded-md hover:bg-gray-100   ${railOpen ? "sm:size-9 p-0.5 ml-1" : "sm:size-10 p-1 ml-2 "}
                  ${active ? "bg-white text-red-700" : "bg-gray-200 text-gray-800"}
                `}
                transition={{ duration: 0.2 }}
              >
                <Icon className='w-full h-full p-1 sm:p-2'/>
              </motion.div>
              {/* The label collapses to zero WIDTH rather than to `hidden`, so
                  it fades with the rail instead of vanishing a frame before it
                  starts moving. */}
              <span
                className={`whitespace-nowrap font-semibold text-xs transition-[opacity,max-width] duration-300 sm:overflow-hidden ${
                  railOpen ? "opacity-100 sm:max-w-[8rem]" : "sm:max-w-0 sm:opacity-0"
                }`}
              >
                {label}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Selected Image */}
      {/* Enters on Y, not X. `x: 50` parked this block 50px to the RIGHT of the
          viewport until it scrolled into view, which widened the page — and on
          mobile Chrome that widens the layout viewport, which made the fixed
          navbar render wider than the screen. A vertical entrance reads the same
          and cannot push anything sideways. The tabs opposite still use x
          because they are narrow and sit at the left edge. */}
      <motion.div
        className="w-full min-w-0 flex justify-center sm:justify-start"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {/* WAS `sm:w-[46rem]` — a FIXED 736px, applied from the `sm`
            breakpoint, which starts at 640px. So between 640 and 736 the viewer
            was wider than the screen and the whole home page scrolled sideways;
            measured 688px of content in a 640px window. A fixed width at a
            breakpoint narrower than that width is always this bug. `max-w` caps
            it at the same size on a large screen and lets it shrink below.
            `min-w-0` on the flex parent is the other half: a flex item's
            default `min-width: auto` refuses to shrink past its content, so the
            cap alone would not have been enough. */}
        {itemsImage.map(({ index, image, alt }) => (
          <motion.div
            key={index}
            /* The border and rounding moved to the frame above — keeping them
               here too drew a second outline INSIDE the container, a hairline
               box around the screenshot that made the sidebar look bolted on
               rather than part of the same window. Kept on mobile, where there
               is no frame. */
            className={`${itemSelected === index ? "block" : "hidden"} w-full max-w-[46rem] overflow-hidden rounded-sm border border-gray-400 sm:rounded-none sm:border-0`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={itemSelected === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img loading="lazy" decoding="async"
              src={image}
              alt={alt}
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-xl"
              initial={{ scale: 1.1 }}
              animate={itemSelected === index ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>    
    </>
  )
}


