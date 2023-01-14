import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function Sllider({ handleSliderChange, value }) {
  function valuetext(value) {
    return `${value}`;
  }
  return (
    <div className='relative flex flex-col text-xs py-px justify-between  space-x-2 items-center text-left w-full'>
      <div className='flex flex-row w-full gap-x-2 gap-y-2 justify-between stretch'>
        <div className='  inline-flex py-1 w-full justify-between rounded-md border-[2px]  border-gray-300 bg-white px-4  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
          {value[0]}
        </div>
        <div className='  inline-flex py-px w-full justify-between rounded-md border-[2px] border-gray-300 bg-white px-4  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
          {value[1]}
        </div>
      </div>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        min={0}
        step={5}
        max={2000}
        onChange={handleSliderChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        disableSwap
      />
    </div>
  );
}

export default Sllider;
