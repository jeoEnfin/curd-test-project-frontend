import React,{useState}from 'react';



const BookForm = () => {
    const [bookName,setBookName] =useState('')
    const [auther, setAuther] = useState('')
    const [year,setYear] = useState('')
    const [price, setPrice] = useState('')
    const [error, setError] = useState('')
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const book = {bookName,auther,year,price}
        const response = await fetch('http://localhost:4000/api/books/create', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setBookName('')
            setAuther('')
            setYear('')
            setPrice('')
            setError(null)
            setEmptyFields([])
            console.log('new workout created',json)
           
        }
    }

  return (
   <form className='create' onSubmit={handleSubmit}>
    <h3>Add new book</h3>

    <label>Book Name: </label>
    <input className={emptyFields.includes('bookName') ? 'error' : ''}
     type='text' value={bookName} onChange={(e) => setBookName(e.target.value)}/>
    <label>Auther: </label>
    <input className={emptyFields.includes('auther') ? 'error' : ''}
     type='text' value={auther} onChange={(e) => setAuther(e.target.value)}/>
    <label>Year: </label>
    <input className={emptyFields.includes('year') ? 'error' : ''} 
    type='number' min={1000} max={9999} value={year} onChange={(e) => setYear(e.target.value)}/>
     <label>Price: </label>
    <input className={emptyFields.includes('price') ? 'error' : ''} 
    type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>

    <button type='submit'>Add Book</button>
    {error && <div className='error'>{error}</div>}
   </form>
  )
}

export default BookForm