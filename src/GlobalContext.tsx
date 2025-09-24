import  { createContext, useContext,type ReactNode } from 'react';




type GlobalContextType = {
    };


const GlobalContext = createContext<GlobalContextType | undefined>(undefined);



export const GlobalProvider = ({ children }: { children: ReactNode }) => {

  return (
    <GlobalContext.Provider value={{}}> 
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobalContext must be used within GlobalProvider');
  return context;
};
