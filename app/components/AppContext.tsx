import React, {
  createContext,
  Dispatch,
  useState,
  ReactNode,
  useContext,
} from "react";

// Define the Context Type
interface AppContextType {
  currentPage: string;
  setCurrentPage: Dispatch<React.SetStateAction<string>>;
}

// Create Context Object
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create Provider Componenet
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // States to manage the current page
  const [currentPage, setCurrentPage] = useState("home-page");

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Create Custom Hook
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
export default AppProvider;
