import { useState, useEffect } from "react";
import BookCard from "./bookcard";

const Books = (props) => {

    const [books, setBooks] = useState([]);

    const loadData = () => {
        fetch('http://localhost:8080/api/books')
            .then((response) => response.json())
            .then(data => {
                setBooks(data);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='question-count'>
                <span>Page 1</span>/{books.length}
            </div>
            {books.map((book, index) => {
                return <BookCard key={index} book={book} />
            })}
        </div>
    )

}

export default Books;
