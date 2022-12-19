import React from 'react'
import './books.css';


const Book = ({ img, title, author }) => {
    //const { img, title, author } = props;

    const clickHandler = () => {
        alert('hello World')

    };
    const comlexExample = (author) => {
        console.log(author);
    }
    return (
        <div className="book" onMouseOver={() => {
            console.log(title)
        }}>
            <img src={img} alt='test' />
            <h1 onClick={() => console.log(title)}>
                {title}
            </h1>
            <h4>
                {author}
            </h4>
            <button type='button' onClick={clickHandler}>
                reference example
            </button>
            <br />
            <button type='buttin' onClick={() => comlexExample(author)}>
                more complex example
            </button>

        </div>
    )
}

export default Book;
