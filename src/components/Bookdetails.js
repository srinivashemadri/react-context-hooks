import React, { useContext } from 'react'
import { Bookcontext } from '../contexts/Bookcontext';
const Bookdetails = ({book}) =>{
    const {dispatch} = useContext(Bookcontext);
    return(
        <li onClick={()=> dispatch({type: 'REMOVE_BOOK', id: book.id}) }>
            <div className="title">
                {book.title}     
            </div>
            <div className="author">
                {book.author}
            </div>
            
            
        </li>
            
        
    );
}
export default Bookdetails