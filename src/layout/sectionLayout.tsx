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
    <section className={` overflow-hidden   ${sectionTopPadding}`}
    >
      <motion.div
        className=' relative bg-gradient-to-b from-black  to-red-700
         mx-auto'  
      >
        
          

        {children}
      </motion.div>
    </section>
  );
};

export default SectionLayout;