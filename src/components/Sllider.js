import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function Sllider({ handleSliderChange, value }) {
  function valuetext(value) {
    return `${value}`;
  }
  return (
    <div className='relative flex flex-col  py-4 justify-start items-center text-left md:w-40 w-[100%]'>
      <div className='flex flex-row w-full justify-between stretch space-x-4 p-2'>
        <div className='  border-[2px] w-[50%] border-gray-300 rounded-md bg-white px-4 py-2 text-sm font-medium'>
          {value[0]}
        </div>
        <div className='  border-[2px] w-[50%] border-gray-300 bg-white  rounded-md px-4 py-2 text-sm font-medium'>
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
