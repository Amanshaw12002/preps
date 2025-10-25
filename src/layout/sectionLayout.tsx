// AdvancedSectionLayout.tsx
import React from 'react';
import { motion } from 'framer-motion';




interface AdvancedSectionLayoutProps {
  children: React.ReactNode;
  sectionTopPadding?: 'pt-10';
  hero?:boolean;
}

const SectionLayout: React.FC<AdvancedSectionLayoutProps> = ({
  children,
  sectionTopPadding,

  
}) => {
 
  return (
    <section className={`px-4 overflow-hidden   ${sectionTopPadding}`}
    >
      <motion.div
        className='px-2 sm:px-6 lg:p-8  mb-6 relative bg-white
        max-w-6xl mx-auto
        border border-black/20 rounded-2xl  
        shadow-2xl  shadow-black/40'  
      >
        
          

        {/* boxes */}
        {children}
      </motion.div>
    </section>
  );
};

export default SectionLayout;