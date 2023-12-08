import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Banner, Button } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';
import "bootstrap/dist/css/bootstrap.min.css";
import { useShoppingCart } from '../../contexts/ShoppingCartContext';

const SingleBook = () => {
  const data = useLoaderData();
  const { _id, bookTitle, authorName, imageURL, category, bookDescription, price } = data; // Add _id to extract book id
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(_id); // Use _id as the book id

  return (
    <div className='mt-20 mb-8 max-w-5xl mx-auto'>
      <Banner>
        <div className="z-50 flex justify-between w-full py-4 px-6 border-b border-gray-300 bg-yellow-50">
          <div className="flex items-center mx-auto">
            <MdAnnouncement className='text-red-600 text-3xl' />
            <h1 className='text-3xl font-bold ml-2'>{bookTitle}</h1>
          </div>
          <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
            <HiX className="h-6 w-6" />
          </Banner.CollapseButton>
        </div>
      </Banner>

      {/* Book details */}
      <div className="mt-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative group">
            <img
              src={imageURL}
              alt={bookTitle}
              className='w-full h-auto object-cover rounded-md shadow-lg transform transition-transform duration-300 group-hover:scale-105'
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">{bookTitle}</h2>
            <p className="text-gray-700 text-2xl font-bold mb-4">${price}</p>
            <p className="text-gray-700 text-lg mb-2">Author: {authorName}</p>
            <p className="text-gray-700 text-lg mb-2">Category: {category}</p>
            <p className="text-gray-700 text-lg leading-relaxed">{bookDescription}</p>

            <div className="mt-8 space-y-4">
              {/* Buy Now Button */}
              {quantity === 0 ? (
                <button className='bg-blue-700 text-white font-semibold px-5 py-3 rounded block w-full hover:bg-black transition-all duration-300' onClick={() => increaseCartQuantity(_id)}>
                  + Add To Cart
                </button>
              ) : (
                <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                  <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                    <Button className='bg-blue-700' onClick={() => decreaseCartQuantity(_id)}>-</Button>
                    <div>
                      <span className='fs-3'>{quantity}</span> in cart
                    </div>
                    <Button className='bg-blue-700' onClick={() => increaseCartQuantity(_id)}>+</Button>
                  </div>
                  <Button className='bg-red-700' size="sm" onClick={() => removeFromCart(_id)}>Remove</Button>
                </div>
              )}


            </div>
          </div>
        </div>

        {/* Buttons Section */}
      </div>
    </div>
  );
};

export default SingleBook;
