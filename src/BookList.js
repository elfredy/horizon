import React from 'react'
import Book from './Book';
import { books } from './books';

import './books.css';





const BookList = () => {
    return (
        <section className="main">
            {
                books.map((book, index) => {

                    return (
                        <Book {...book} key={index} />
                    )

                })
            }

        </section>
    )
}

export default BookList;
