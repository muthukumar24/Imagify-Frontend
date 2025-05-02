import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(false);

    const value = { 
        user, setUser, showLogin, 
        setShowLogin, token, setToken, 
        credit, setCredit
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider