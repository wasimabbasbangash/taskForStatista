import React, { useState } from "react";

export const reviewData = {
  brand1: {
    stars: [4.4, 3.8, 4.9, 3.9, 4],
    title: "Reliable Reviews",
    description: "Anti-spam filtered reviews",
  },
  brand2: {
    stars: [5, 4.2, 4.1, 3.2, 4],
    title: "Reliable Reviews",
    description: "Anti-spam filtered reviews",
  },
  brand3: {
    stars: [2.9, 3.3, 2.9, 5, 1.8],
    title: "Reliable Reviews",
    description: "Anti-spam filtered reviews",
  },
};

const dataMap = new Map();
dataMap.set("Brand 1", reviewData.brand1);
dataMap.set("Brand 2", reviewData.brand2);
dataMap.set("Brand 3", reviewData.brand3);
dataMap.set("Select Brand", false);

function ReviewCard({ brand }) {
  const reviewedBrand = dataMap.get(brand);
  console.log(reviewedBrand);
  let totalReviews;

  if (reviewedBrand) {
    totalReviews = reviewedBrand.stars.reduce((acc, star) => {
      return acc + Math.floor(star * 100);
    }, 0);
  }

  return (
    <>
      {reviewedBrand && (
        <div className='w-full bg-[#fff8ed8c] max-w-sm flex flex-col justify-center items-start py-8  rounded-lg  dark:bg-gray-800 dark:border-gray-700'>
          <div className='px-5  mx-4 pb-2'>
            <a href='#'>
              <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                {reviewedBrand.title}
              </h5>
            </a>
            <p className='text-xs text-slate-400'>
              {reviewedBrand.description}
            </p>
            <div className='flex items-center mt-2.5 mb-5'>
              <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800'>
                5.0
              </span>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>First star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Second star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Third star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Fourth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Fifth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <p className=' ml-3 text-xs text-slate-400'>
                {totalReviews} Reviews
              </p>
              {/* </div> */}
              {/* <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
            <div
              className='bg-blue-600 h-2.5 rounded-full'
              style='width: 45%'
            ></div> */}
            </div>
          </div>
          {reviewedBrand.stars.map((star, index) => (
            <div className='w-[80%] mx-auto'>
              <div className='text-center text-xs'>{`${star * 20}`}%</div>
              <div className='flex flex-row  mt-[-8px] items-center justify-center'>
                <h3 className=' text-black text-xs mr-2'>
                  {reviewedBrand.stars.length - index}/
                  {reviewedBrand.stars.length}
                </h3>
                <div className='w-[70%] my-2 bg-yellow-100 rounded-full h-2 dark:bg-gray-700'>
                  <div
                    className='bg-yellow-300 h-2 rounded-full'
                    style={{ width: `${star * 20}%` }}
                  ></div>
                </div>
                <h3 className=' text-black text-xs ml-2'>
                  {Math.floor(`${star * 100}`)} Reviews
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ReviewCard;
