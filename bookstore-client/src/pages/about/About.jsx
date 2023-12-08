import React from 'react'
import { BsCloudArrowUp } from 'react-icons/bs';
import { HiLockClosed, HiServer } from "react-icons/hi";

const About = () => {
  return (
    <div className='mt-20'>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Best Bookstore</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to the Simple Online Bookstore</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              We believe in the transformative power of literature. Nestled in the vast realm of the internet, we've created a haven for book enthusiasts, where stories come to life and imaginations soar.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://s26162.pcdn.co/wp-content/uploads/sites/3/2023/02/used-books.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Established in 2023, this simple online bookstore was born out of a collective love for books and a shared vision to make the literary world more accessible. Our journey started with a simple idea — to connect readers with the stories that inspire, entertain, and provoke thought.
              </p>
              <p>
              Explore our virtual shelves, where genres blend, and narratives unfold. From timeless classics to contemporary gems, we curate a diverse collection that caters to every taste and curiosity. Whether you're seeking adventure in far-off lands, delving into the mysteries of the human mind, or discovering new voices, we have a book for you.
              </p>
            
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Mission:</h2>
              <p className="mt-6">
              Our mission is to foster a love for reading in the digital age. We're more than just a bookstore; we're a virtual sanctuary for bibliophiles, a place where stories unite us and words ignite our imaginations.
              Embark on a literary adventure with us. From the first page to the last, let the stories we offer transport you to new worlds and inspire your own narrative.
              Thank you for being a part of our story.
                <h1>Happy reading!</h1>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About