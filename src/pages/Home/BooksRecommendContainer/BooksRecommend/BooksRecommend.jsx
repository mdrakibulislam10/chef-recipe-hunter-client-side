import React, { useEffect, useState } from 'react';
import BookRecommend from '../BookRecommend/BookRecommend';
import { Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const BooksRecommend = () => {
    const [books, setBooks] = useState([]);
    const [books2, setBooks2] = useState([]);

    useEffect(() => {
        const booksData = async () => {
            const res = await fetch("https://chef-recipe-hunter-server-side-topaz.vercel.app/recipe-books");
            const data = await res.json();
            setBooks(data.slice(0, 4));
            setBooks2(data);
        };
        booksData();
    }, []);

    const handleSeeMore = () => {
        setBooks(books2);
    };
    return (
        <div className='my-5'>
            <h2 className='text-info border-start border-4 border-secondary ps-1'>Recipe Books Recommendation</h2>
            <p>You can read the following books to know more about Japanese recipes</p>
            <Row xs={1} sm={2} lg={3} xl={4} className='gy-2 g-md-3'>
                {
                    books.map(book =>
                        <BookRecommend
                            key={book.id}
                            book={book}
                        />
                    )
                }
            </Row>
            {
                (books.length <= 4) &&
                <button onClick={handleSeeMore} className='btn btn-warning mt-3 mx-auto d-block' style={{ fontWeight: "500" }}>
                    See More
                    <FaArrowRight className='ms-1' />
                </button>
            }
        </div>
    );
};

export default BooksRecommend;