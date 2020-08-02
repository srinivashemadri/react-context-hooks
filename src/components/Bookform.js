import React, { useState, useContext } from 'react'
import { Bookcontext } from '../contexts/Bookcontext';

const Bookform = () => {
    const { dispatch } = useContext(Bookcontext)
    
    const [title,setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handlesubmit = (e)=>{
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title,author}})
        setAuthor('');
        setTitle('');
    }
    return(
        <form onSubmit={handlesubmit}> 
            <input type="text" value={title} placeholder="Enter title of the book" onChange={(e)=>{setTitle(e.target.value)}}></input>
            <input type="text" value={author} placeholder="Enter Author for the book" onChange={(e)=>{setAuthor(e.target.value)}}></input>
            <input type="submit" value="add book"/>
        </form>
    )
}


export default Bookform;