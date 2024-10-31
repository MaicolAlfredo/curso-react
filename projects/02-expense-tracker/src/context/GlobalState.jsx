import { createContext } from 'react';

export const Context = createContext();

export const GlobalProvider = ({children}) => {
    return (
        <Context.Provider value={{ total: 100 }}>
            {children}
        </Context.Provider>
    )
};