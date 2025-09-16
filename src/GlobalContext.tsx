import  { createContext, useContext, useRef,type ReactNode } from 'react';




type GlobalContextType = {
     demoRef: React.RefObject<HTMLElement | null>; 
    };


const GlobalContext = createContext<GlobalContextType | undefined>(undefined);



export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const demoRef = useRef<HTMLElement>(null);

  return (
    <GlobalContext.Provider value={{demoRef}}> 
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobalContext must be used within GlobalProvider');
  return context;
};
