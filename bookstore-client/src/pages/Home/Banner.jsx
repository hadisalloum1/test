import React from 'react';
import BannerCard from '../shared/BannerCard';
import { useSearch } from '../../contexts/SearchContext';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const { setSearchValue } = useSearch();
  const navigate = useNavigate();

  const handlesearch = () => {
    const inputValue = document.getElementById('searchInput').value;
    setSearchValue(inputValue);
    navigate('/shop');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handlesearch();
    }
  };

  return (
    <div className=' bg-teal-100  px-4 lg:px-24 flex items-center'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
        {/* right side */}
        <div className='md:w-1/2 h-full'>
          <BannerCard />
        </div>

        {/* left side */}
        <div className='md:w-1/2 space-y-8 bg-teal-100'>
          <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>
            Buy and sell your books{' '}
            <span className='text-blue-700'>for the best prices</span>
          </h1>
          <p>
            Find and read more books you'll love, and keep track of the books
            you want to read. Be part of the world's largest community of book
            lovers on Goodreads.
          </p>
          <div>
            <input
              type='search'
              id='searchInput'
              placeholder='Search a book here'
              className='py-2 px-2 rounded-s-sm'
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handlesearch}
              className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
