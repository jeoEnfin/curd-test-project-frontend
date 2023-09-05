import { createContext,useReducer } from "react";

export const BookContext = createContext();

export const bookReducer = (state, action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return {
                books: action.payload
            }
        case "CREATE_BOOKS":
            return {
                books: [action.payload,...state.books]
            }
        case "DELETE_BOOKS":
            return {
                books: state.books.filter((book) => book._id!== action.payload._id)
            }    
            default: 
            return state
    }
}

export const BookContextProvider = ({children}) => {
   const [state, dispatch] = useReducer(bookReducer, {
    books: null
   });

 

    return (
        <BookContext.Provider  value={{...state, dispatch}}>
            {children}
        </BookContext.Provider>
    )
}