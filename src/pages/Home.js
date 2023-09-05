import React, { useEffect, useState } from 'react'
import BooksDetails from '../components/BookDetails';
import axios from 'axios'




function Home() {
    const [books, setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    const getBooks = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/books");
            console.log("Books API Response:", response.data);
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => { getBooks(); }, []);

    const filteredBooks = books.filter((book) =>
    book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.auther.toLowerCase().includes(searchTerm.toLowerCase()) 
  );


    return (
        <div>
            <h1>Books</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Search by book name, auther name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
                {filteredBooks.map(book => (
                    <BooksDetails key={book._id} book={book} />
                ))}
            </div>

        </div>
    )
}

export default Home