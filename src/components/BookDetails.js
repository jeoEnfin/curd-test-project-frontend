import React from 'react';

//import { useBookContext } from '../hooks/useBookContext';


const BooksDetails = ({book,click}) => {

  

  //const {dispatch} = useBookContext();

  const handleClick = async () => {

    const response = await fetch(`http://localhost:4000/api/books/statusUpdate/${book._id}`, {
      method: 'PATCH'
    })
   const json = await response.json()
   console.log(json);
  }

  return (
    <div className='book-details'>
      <div onClick={click}>
        <h4>{book.bookName}</h4>
        <p><strong>Auther : </strong>{book.auther}</p>
        <p><strong>year : </strong>{book.year}</p>
        <p><strong>Price : </strong>{book.price}</p>
        
        <p><strong>Status: </strong>{book.status === 1 ? 'Active': 'Not Active'}</p>
       

        </div>
        <span className='material-symbols-outlined' onClick={handleClick} >delete</span>
    </div>
  )
}

export default BooksDetails;