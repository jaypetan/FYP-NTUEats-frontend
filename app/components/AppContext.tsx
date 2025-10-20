import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the Context Type
interface AppContextType {
  currentPage: string;
  setCurrentPage: Dispatch<React.SetStateAction<string>>;
  returnToPreviousPage: () => void;
}

// Create Context Object
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create Provider Componenet
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // States to manage the current page
  const [currentPage, setCurrentPage] = useState("home-page");
  const [prevPage, setPrevPage] = useState({ prev: "", next: "home-page" });

  useEffect(() => {
    setPrevPage((prev) => ({ prev: prev.next, next: currentPage }));
  }, [currentPage]);

  const returnToPreviousPage = () => {
    setCurrentPage(prevPage.prev);
  };

  return (
    <AppContext.Provider
      value={{ currentPage, setCurrentPage, returnToPreviousPage }}
    >
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
