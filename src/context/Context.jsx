import { createContext, useState } from "react";

import { useNavigate } from "react-router-dom";


export const Context = createContext();
const ContextProvider = (props) =>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL 
    const [token, setToken] = useState('')
    const navigate = useNavigate();
    const value ={
        navigate, backendUrl,
        setToken, token
    };
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;