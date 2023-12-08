import React from 'react';
import favBook from '../../assets/favoritebook.jpg';
import { Link } from 'react-router-dom';

const FavoriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={favBook} alt="Favorite Book" className='rounded md:w-10/12' />
      </div>
      <div className='space-y-6 md:w-1/2'>
        <h2 className='text-5xl my-5 font-bold md:w-3/4 leading-snug'>
          Explore a World of Knowledge with Your <span className='text-blue-600'>Favorite Books!</span>
        </h2>
        <p className='mb-10 text-lg md:w-5/6'>
          Discover a vast collection of books covering various genres and topics. Whether you're an avid reader or just starting your reading journey, we have something for everyone. Immerse yourself in captivating stories, insightful knowledge, and literary wonders.
        </p>
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold '>800+</h3>
            <p className='text-base'>Diverse Book Listings</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold '>550+</h3>
            <p className='text-base'>Registered Users</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold '>1200+</h3>
            <p className='text-base'>Downloads of PDFs</p>
          </div>
        </div>
        <Link to="/shop" className='block mt-8'>
          <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FavoriteBook;