import { createContext, context } from "react";

export const Context = createContext();

export const useGlobalContext = () => {
  const context = useContext(Context);
  return context(Context);
};

export const GlobalProvider = ({ children }) => {
  return <Context.Provider value={{ total: 100 }}>{children}</Context.Provider>;
};
