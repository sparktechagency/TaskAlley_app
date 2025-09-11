import React, {
  createContext,
  ReactNode,
  useContext
} from 'react';

interface GlobalContextType {

}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {


  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalContextProvider;
