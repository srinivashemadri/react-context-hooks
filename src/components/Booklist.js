import React, { useContext } from 'react'
import { Bookcontext } from '../contexts/Bookcontext'
import Bookdetails from './Bookdetails';
const Booklist = () =>{
    const {books} =useContext(Bookcontext);
    return books.length ? (
        <div className ="book-list">
            <ul>
                {books.map((book)=>{
                    return(
                        <Bookdetails book={book} key={book.id} />
                    )
                })}
            </ul>

        </div>
    ) : (
        <div className="empty">
            No books to read. : )
        </div>
    );
}

export default Booklist;