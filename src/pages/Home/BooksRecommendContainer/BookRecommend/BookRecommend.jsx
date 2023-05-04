import React from 'react';
import { Card } from 'react-bootstrap';

const BookRecommend = ({ book }) => {
    const { book_img, book_name, sold_worldwide, rating } = book;

    return (
        <div>
            <Card className='' style={{ height: "630px" }}>
                <div className='p-3'>
                    <Card.Img className='mx-auto img-fluid rounded' variant="top" src={book_img} style={{ height: "400px" }} />
                </div>

                <div className='d-flex flex-column align-items-stretch'>
                    <Card.Title className='fs-5 px-3'><b>{book_name}</b></Card.Title>

                    <Card.Body className='text-secondary'>
                        <p>Sold Worldwide: <b>{sold_worldwide}</b></p>
                        <p>Ratings: <b>{rating}</b> out of 10</p>
                    </Card.Body>
                </div>
            </Card >
        </div>
    );
};

export default BookRecommend;