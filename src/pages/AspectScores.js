import React, { useState } from "react";
import ChartCard from "../components/ChartCard";
import Filter from "../components/Filter";
import ReviewCard from "../components/ReviewCard";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

// data for different brands
export const reviewData = {
  brand1: {
    percentage: [76, 88, 91, 89, 77, 87],
    trend: ["upward", "downward", "upward", "upward", "downward", "upward"],
  },
  brand2: {
    percentage: [87, 69, 77, 69, 73, 67],
    trend: ["downward", "upward", "upward", "downward", "upward", "downward"],
  },
  brand3: {
    percentage: [67, 98, 80, 85, 58, 78],
    trend: ["upward", "upward", "upward", "upward", "downward", "downward"],
  },
};

const dataMap = new Map();
dataMap.set("Brand 1", reviewData.brand1);
dataMap.set("Brand 2", reviewData.brand2);
dataMap.set("Brand 3", reviewData.brand3);
dataMap.set("Select Brand", false);

function AspectScores() {
  const [brand1, setBrand1] = useState("Select brand");
  const selectedBrand = dataMap.get(brand1);
  console.log(selectedBrand);
  const labels = ["Cleaning", "Service", "Safety", "Quality", "Food taste"];

  const changeFilter = (brand1, brand2) => {
    setBrand1(brand1);
  };

  return (
    <>
      <div className='h-screen  flex  flex-col  w-full bg-white '>
        {/* filter */}
        {/* <div className='flex flex-row justify-center items-center text-white bg-yellow-600 h-[20%] w-full'> */}
        <Filter filterSelect={changeFilter} showWholeFilter={false}></Filter>
        {/* </div> */}
        {/* title */}
        {selectedBrand && (
          <>
            <div className=' text-center  w-full  text-2xl text-black '>
              Aspect-based sentiment: BBQ
            </div>
            <div className='flex max-[768px]:flex-col flex-wrap flex-row justify-evenly gap-x-8 bg-white  '>
              <div className='flex flex-col gap-y-8 m-8 items-center justify-start shadow-md p-4 rounded-xl'>
                <div className='w-full bg-teal-50 h-fit flex flex-col px-8  py-6 mx-4 pb-2 rounded-lg'>
                  <h1 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                    Pro Version ON
                  </h1>
                  <p className='text-xs'>You have access to all functions.</p>
                  <h1 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white my-6'>
                    Edit Subscription
                  </h1>
                </div>
                <ReviewCard className='w-full' brand={brand1}></ReviewCard>
              </div>
              <div className='grid grid-cols-2 grow my-8 gap-2  overflow-x-clip shadow-md  rounded-xl mr-4 p-4'>
                {labels.map((label, index) => (
                  <div
                    className={`flex flex-col justify-between py-4 px-6 rounded-md ${
                      selectedBrand.trend[index] === "upward"
                        ? "bg-green-100"
                        : "bg-orange-50"
                    }`}
                  >
                    <div>
                      <h1 className='text-xl font-semibold text-slate-900'>
                        {label}
                      </h1>
                      <p className='text-xs text-slate-400'>
                        {" "}
                        Score out of 100
                      </p>
                    </div>
                    <div className='flex flex-row  mt-4 w-full justify-between items-center'>
                      <h1 className='text-xl font-semibold text-slate-900'>
                        {selectedBrand.percentage[index]}%
                      </h1>
                      {selectedBrand.trend[index] === "upward" ? (
                        <FiArrowUpRight />
                      ) : (
                        <FiArrowDownRight />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {/* <Card></Card> */}
      </div>
    </>
  );
}

export default AspectScores;
