import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducer';
export const Bookcontext = createContext();
const Bookcontextprovider = (props) =>{
    const [books, dispatch] = useReducer( bookReducer ,[] ,()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData): [];
    })
    useEffect(()=>{
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    return(
        <Bookcontext.Provider value={{books, dispatch}}>
            {props.children}
        </Bookcontext.Provider>
    )


}

export default Bookcontextprovider