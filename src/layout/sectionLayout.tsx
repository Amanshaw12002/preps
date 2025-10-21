// AdvancedSectionLayout.tsx
import React from 'react';





interface AdvancedSectionLayoutProps {
  children: React.ReactNode;
  sectionTopPadding?: 'pt-10';
  hero?:boolean;
}

const SectionLayout: React.FC<AdvancedSectionLayoutProps> = ({
  children,
  sectionTopPadding,
  hero

  
}) => {
 
  return (
    <section className={`px-4 overflow-hidden  ${sectionTopPadding}`}
    >
      <div
        className='px-4 sm:px-6 lg:p-8  relative 
        max-w-6xl mx-auto
        border border-red-400 border-b-0
        '  
      >
        {hero && (

<>
          <div className='absolute  h-10 w-[0.5px] left-0 -top-10 sm:-left-0 sm:-top-12 sm:w-[0.5px] sm:h-12  lg:h-14 lg:w-[0.5px] lg:left-0 lg:-top-12   bg-red-500   '></div>
          <div className='absolute  h-10 w-[0.5px] right-0 -top-10 sm:-right-0 sm:-top-12  sm:w-[0.5px] sm:h-12  lg:h-14 lg:w-[0.5px] lg:right-0 lg:-top-12   bg-red-500   '></div>
</>          
        )
        }
          

        {/* boxes */}
        <div className='absolute w-2 h-2 -left-1 -top-1 rounded-xs sm:-left-1.5 sm:-top-1.5  sm:w-3 sm:h-3  lg:h-4 lg:w-4 lg:-left-2 lg:-top-2  sm:rounded-sm bg-red-100 border border-red-400  '></div>
        <div className='absolute w-2 h-2 -right-1 -top-1 rounded-xs sm:-right-1.5 sm:-top-1.5  sm:w-3 sm:h-3  lg:h-4 lg:w-4 lg:-right-2 lg:-top-2  sm:rounded-sm bg-red-100 border border-red-400 '></div>
        <div className='absolute w-2 h-2 -left-1 -bottom-1 rounded-xs sm:-left-1.5 sm:-bottom-1.5  sm:w-3 sm:h-3  lg:h-4 lg:w-4 lg:-left-2 lg:-bottom-2  sm:rounded-sm bg-red-100 border border-red-400  '></div>
        <div className='absolute w-2 h-2 -right-1 -bottom-1 rounded-xs sm:-right-1.5 sm:-bottom-1.5  sm:w-3 sm:h-3  lg:h-4 lg:w-4 lg:-right-2  lg:-bottom-2  sm:rounded-sm bg-red-100 border border-red-400 '></div>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;