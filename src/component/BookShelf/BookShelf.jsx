import React, { useState } from 'react'

const BookShelf = () => {
    const [myBooks, setMyBook] = useState([]);
    const [newBook, setNewBook] = useState({ title: "", author: "" });

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMyBook([...myBooks, { title: newBook.title, author: newBook.author }]);
        setNewBook({ title: "", author: "" });
    };

    //level up
    const handleDelete = (index)=>{
        setMyBook(myBooks.filter((book,i)=> i !== index))
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title:</label>
                    <input type="text" id="title" name="title" value={newBook.title} onChange={handleInputChange} required/>

                    <label htmlFor='author'>author:</label>
                    <input type="text" id="author" name="author" value={newBook.author} onChange={handleInputChange} required/>

                    <button type="submit" disabled={!newBook.title || !newBook.author}>Submit</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {myBooks.length ? (
                        myBooks.map((book, index)=>(
                            <div className='bookCard' key={index}>
                                <h3 className='bookTitle'>{book.title}</h3>
                                <p className='bookAuthor'>by {book.author}</p>
                                <button type="button" className='deleteBtn' onClick={()=>handleDelete(index)}>Delete</button>
                            </div>
                        ))
                    ) : <p className='noBook'>Your bookshelf is empty!</p>
                }
            </div>
        </div>

    )
}

export default BookShelf