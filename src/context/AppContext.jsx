import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../constants/api";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(false);

    const loadCreditsData = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/api/user/credits`, 
                {headers: {token}});

            if(data.success) {
                setCredit(data.credits);
                setUser(data.user);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken('');
        setUser(null);
    }

    useEffect(() => {
        if(token) {
            loadCreditsData();
        }
    }, [token]);

    const value = { 
        user, setUser, showLogin, 
        setShowLogin, token, setToken, 
        credit, setCredit, loadCreditsData,
        logout
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider