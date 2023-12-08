import React, { useContext, useEffect, useState } from 'react'
import { Card, Spinner } from 'flowbite-react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom'; 
import { useSearch } from '../../contexts/SearchContext';

export default function Shop() {
  const { searchValue, setSearchValue } = useSearch();
  const { loading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filterOption, setFilterOption] = useState('All'); // Default filter option

// fetching data

  useEffect(() => {
    fetch('http://localhost:5000/all-books')
    .then((res) => res.json())
    .then((data) => { 
      setBooks(data);
      filterBooks(data, searchValue, filterOption);
  })
  .catch((error) => console.error('Error fetching data:', error));
}, [loading, searchValue, filterOption]);

    // loader
    if (loading) {
      return (
        <div className="text-center mt-28">
          <Spinner aria-label="Center-aligned spinner example" />
      </div>
      );
  }
    const handleInputChange = (e) => { 
      const inputValue = e.target.value;
      setSearchValue(inputValue);
      filterBooks(books, inputValue, filterOption);
    };
    
    const handleFilterChange = (e) => {
      const selectedOption = e.target.value;
      setFilterOption(selectedOption);
      filterBooks(books, searchValue, selectedOption);
    };
  
    const filterBooks = (allBooks, inputValue, selectedOption) => {
      const filtered = allBooks.filter((book) => {
        const titleMatch = book.bookTitle.toLowerCase().includes(inputValue.toLowerCase());
        if (selectedOption === 'All') {
          return       book.bookTitle.toLowerCase().includes(inputValue.toLowerCase()) ||
          book.category.toLowerCase().includes(inputValue.toLowerCase()) ||
          book.price.toString().includes(inputValue.toLowerCase()) ||
          book.bookDescription.toLowerCase().includes(inputValue.toLowerCase())
        } else if (selectedOption === 'Book Title') {
          return titleMatch;
        } else if (selectedOption === 'Category') {
          return book.category.toLowerCase().includes(inputValue.toLowerCase());
        } else if (selectedOption === 'Price') {
          return book.price.includes(inputValue);
        }
        return titleMatch;
      });
  
      setFilteredBooks(filtered);
    };
  
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handlesearch();
      }
    };
  
    return (
      <div className="my-28 px-4 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-16 z-40">All Books are Available Here</h2>
        <div className="my-2 px-4 lg:px-24">
        <select
            value={filterOption}
            onChange={handleFilterChange}
            className="ml-2 py-2 px-4 rounded-s-sm"
          >
            <option value="All">All</option>
            <option value="Book Title">Book Title</option>
            <option value="Category">Category</option>
            <option value="Price">Price</option>
          </select>
          <input
            type="search"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search a book here"
            className="ml-2 py-2 px-4 rounded-s-sm"
            onKeyDown={handleKeyDown}
          />
          
          <button className="bg-blue-700 ml-2 py-2 px-4 rounded-s-sm text-white font-medium hover:bg-black transition-all ease-in duration-200">
            Search
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {filteredBooks.map((book) => (
            <Card key={book._id}>
              <Link to={`/book/${book._id}`}>
                <img
                  src={book.imageURL}
                  alt=""
                  className="h-96 transition-transform transform hover:scale-105 duration-300"
                />
              </Link>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
                <p
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 2,
                  }}
                >
                  {book.bookDescription}
                </p>
              </p>
              <div className="mt-2">
                <p className="text-lg font-semibold mb-2">${book.price}</p>
                <Link to={`/book/${book._id}`} className="block">
                  <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
                    Buy Now
                  </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  
  
