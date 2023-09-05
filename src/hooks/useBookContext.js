import { BookContext } from "../context/bookContext";
import { useContext } from "react";

export const useBookContext = () =>{
    const context = useContext(BookContext);
    if(!context){
        throw new Error('useBookContext must be used within a BookContext');
    }

    return context;
}