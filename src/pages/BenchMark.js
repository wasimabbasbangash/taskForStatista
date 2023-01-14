import React, { useState } from "react";
import ChartCard, { Brand1 } from "../components/ChartCard";
import Filter from "../components/Filter";
import ReviewCard from "../components/ReviewCard";

function BenchMark() {
  const [brand1, setBrand1] = useState("Select Brand");
  const [brand2, setBrand2] = useState("Select Brand");

  const showCard =
    brand1 == "Select Brand" && brand2 == "Select Brand" ? false : true;

  console.log(showCard);
  const changeFilter = (brand1, brand2) => {
    setBrand1(brand1);
    setBrand2(brand2);
  };

  return (
    <div className='h-screen  flex  flex-col  w-full bg-white '>
      {/* filter */}
      {/* <div className='flex flex-row justify-center items-center text-white bg-yellow-600 h-[20%] w-full'> */}
      <Filter filterSelect={changeFilter} showWholeFilter={true}></Filter>
      {/* </div> */}
      {/* title */}
      <div className=' text-center mt-4 w-full  text-xl text-slate-600 font-bold'>
        Aspect-based sentiment: BBQ
      </div>
      {/* internal comparison section */}
      {showCard && (
        <div className=''>
          <div className='flex md:flex-row  sm:flex-col justify-evenly  p-8 overflow-x-scroll bg-white w-[full] '>
            <div className='flex flex-col lg:gap-y-8 h-fit md:gap-y-4 lg:m-8  overflow-y-auto items-center justify-start shadow-md p-4 rounded-xl'>
              <ReviewCard className='md:w-[1/2]' brand={brand1}></ReviewCard>
              <ChartCard brand={brand1} className='md:w-[1/2]'></ChartCard>
            </div>

            <div className='flex flex-col lg:gap-y-8  h-fit md:gap-y-4 lg:m-8 items-center overflow-y-auto justify-start shadow-md p-4 rounded-xl'>
              <ReviewCard className='md:w-[1/2]' brand={brand2}></ReviewCard>
              <ChartCard brand={brand2} className='md:w-[1/2]'></ChartCard>
            </div>
          </div>
        </div>
      )}

      {/* <Card></Card> */}
    </div>
  );
}

export default BenchMark;
