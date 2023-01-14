import React, { useState } from "react";
import ChartCard from "../components/ChartCard";
import Filter from "../components/Filter";
import ReviewCard from "../components/ReviewCard";

function BenchMark() {
  const [brand1, setBrand1] = useState("Select Brand");
  const [brand2, setBrand2] = useState("Select Brand");

  // check if any brand is selected
  const selectedBrand = () => {
    return brand1 === "Select Brand" && brand2 === "Select Brand"
      ? false
      : true;
  };

  // check wheter any brand has been selected
  const showCard = selectedBrand();
  console.log(showCard);

  // update brand state from filter dropdown
  const changeFilter = async (brand1, brand2) => {
    setBrand1(brand1);
    setBrand2(brand2);
  };

  console.log(brand1);

  return (
    <div className='h-screen  flex  flex-col  w-full bg-white '>
      {/* filter */}
      {/* <div className='flex flex-row justify-center items-center text-white bg-yellow-600 h-[20%] w-full'> */}
      <Filter filterSelect={changeFilter} showWholeFilter={true}></Filter>
      {/* </div> */}
      {/* title */}
      {/* internal comparison section */}
      {showCard && (
        <div className=''>
          <div className=' text-center mt-4 w-full  text-xl text-slate-600 font-bold'>
            Aspect-based sentiment: BBQ
          </div>
          <div className='flex  max-[768px]:flex-col lg:flex-row   sm:flex-col xs:flex-col  justify-evenly  p-8 overflow-x-scroll bg-white w-[full] '>
            {brand1 !== "Select Brand" && (
              <div className='flex flex-col lg:gap-y-8 h-fit md:gap-y-4 lg:m-8  overflow-y-auto items-center justify-start shadow-md p-4 rounded-xl'>
                <ReviewCard
                  className='md:w-[1/2] sm:w-full sm:mb-2 md:mb-2'
                  brand={brand1}
                ></ReviewCard>
                <ChartCard
                  brand={brand1}
                  className='md:w-[1/2] sm:w-full'
                ></ChartCard>
              </div>
            )}
            {brand2 !== "Select Brand" && (
              <div className='flex flex-col  lg:gap-y-8  h-fit md:gap-y-4 lg:m-8 items-center overflow-y-auto justify-start shadow-md p-4 rounded-xl'>
                <ReviewCard
                  className='md:w-[1/2] sm:w-full sm:mb-2 md:mb-2'
                  brand={brand2}
                ></ReviewCard>
                <ChartCard
                  brand={brand2}
                  className='md:w-[1/2] sm:w-full'
                ></ChartCard>
              </div>
            )}
          </div>
        </div>
      )}
      {/* <Card></Card> */}
    </div>
  );
}

export default BenchMark;
