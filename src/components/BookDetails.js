import React from 'react';

//import { useBookContext } from '../hooks/useBookContext';


const BooksDetails = ({book}) => {

  //const {dispatch} = useBookContext();

  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/api/books/${book._id}`, {
      method: 'DELETE'
    })
   const json = await response.json()
   console.log(json);

   
//    if(response.ok) {
//     dispatch({type: 'DELETE_BOOKS', payload: json})
//    }
  }

  return (
    <div className='book-details'>
        <h4><strong>Book Name :</strong>{book.bookName}</h4>
        <p><strong>Auther : </strong>{book.auther}</p>
        <p><strong>year : </strong>{book.year}</p>
        <p><strong>Price : </strong>{book.price}</p>
       
        <span className='material-symbols-outlined' onClick={handleClick} >delete</span>
    </div>
  )
}

export default BooksDetails;