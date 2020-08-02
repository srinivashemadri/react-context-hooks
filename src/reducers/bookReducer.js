
import {v1 as uuid} from 'uuid';
export const bookReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_BOOK':
            return([...state , {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }])
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id ? true : false)
        default:
            return state
    }
}