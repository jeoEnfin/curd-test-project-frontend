import React, { useEffect, useState } from 'react'
import BooksDetails from '../components/BookDetails';
import axios from 'axios'
import BookModal from '../components/BookModal';
import { Pagination } from "react-pagination-bar"
import 'react-pagination-bar/dist/index.css'
//import { useBookContext } from '../hooks/useBookContext';



function Home() {
    //const {books, dispatch} = useBookContext();
    const [books, setBooks] = useState([])
    const [book, setBook] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState('');
    const [noData, setNoData] = useState('');
    const [limit, setLimit] = useState('');
    const [data, setData] = useState('');

    const handleAddBook = (formData) => {
        setIsModalOpen(false);
        console.log('Form data submitted:', formData);
    };

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/books?page=${page}`);
                console.log("Books API Response: ", response.data);
                const json = JSON.stringify(response.data);
                setData(response.data)
                setBooks(response.data.books);
                setPage(response.data.page);
                setPages(response.data.pages);
                setNoData(response.data.total);
                setLimit(response.data.limit);

                console.log(json);
                // if(response.ok){
                // dispatch({type: 'SET_BOOKS', payload: response.data});}

            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        getBooks();
    }, [page]);

    const filteredBooks = books.filter((book) =>
        book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.auther.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.year.toString().includes(searchTerm)
    );

    return (
        <div>
            <h1>Books</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Search by book name, auther name and year"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Pagination
                currentPage={page}
                itemsPerPage={limit}
                onPageChange={(pageNumber) => setPage(pageNumber)}
                totalItems={noData}
                onlyPageNumbers={true}
                pageNeighbours={1}
                customClassNames={{
                    rpbItemClassName:'custom-item',
                    rpbItemClassNameActive:'custom-item--active',
                    rpbGoItemClassName: 'custom-go-item',
                    rpbItemClassNameDisable: 'custom-item--disable', 
                    rpbProgressClassName: 'custom-progress-bar',
                    rpbRootClassName: 'custom-root',
                  }}
            />
            <div>
                {filteredBooks.map(book => (
                    <BooksDetails key={book._id} book={book} click={() => { setIsModalOpen(true); setBook(book) }} />
                ))}
            </div>
            
            <BookModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                onSubmit={handleAddBook}
                data={book}
            />

        </div>
    )
}

export default Home