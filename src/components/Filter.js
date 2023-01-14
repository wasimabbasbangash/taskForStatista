import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sllider from "./Sllider";

function Filter({ filterSelect, showWholeFilter }) {
  const [deviceValue, setDevice] = useState("Select Device");
  const [brandValue, setBrand] = useState("Select Brand");
  const [secondBrandValue, setSecondBrand] = useState("Select Brand");
  const [modelValue, setModel] = useState("Select Model");
  const [secondModelValue, setSecondModel] = useState("Select Model");
  const [openDropdownName, setOpenDropdownname] = useState(null);
  //   date range
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  // slider
  const [sliderValue, setSliderValue] = React.useState([20, 100]);

  const handleSliderChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setSliderValue([
        Math.min(newValue[0], sliderValue[1] - 10),
        sliderValue[1],
      ]);
    } else {
      setSliderValue([
        sliderValue[0],
        Math.max(newValue[1], sliderValue[0] + 10),
      ]);
    }
  };
  //   Select devices
  const changeDevice = async (deviceValue) => {
    setDevice(deviceValue);
  };
  //   Select devices
  const changeBrand = async (brandValue) => {
    setBrand(brandValue);
    filterSelect(brandValue, secondBrandValue);
  };
  //   Select second brand
  const changeSecondBrand = async (secondBrandValue) => {
    setSecondBrand(secondBrandValue);
    filterSelect(brandValue, secondBrandValue);
  };
  //   Select devices
  const changeModel = async (modelValue) => {
    setModel(modelValue);
  };
  //   Select second brand
  const changeSecondModel = async (modelValue) => {
    setSecondModel(modelValue);
  };
  //   change name of opened dropdown
  const changeDropdownName = (value) => {
    setOpenDropdownname(value);
  };
  // date change handler
  function onDateChangeHandler(value) {
    console.log(value);
    setStartDate(value[0]);
    setEndDate(value[1]);
    setOpenDropdownname("");
  }

  //   clear Filters
  const onClearFilterhandler = () => {
    console.log("clearing filter");
    setDevice("Select Device");
    setBrand("Select Brand");
    setSecondBrand("Select Brand");
    setModel("Select model");
    setSecondModel("Select model");
    setStartDate();
    setEndDate();
    setSliderValue([20, 100]);
    filterSelect(brandValue, secondBrandValue);
  };

  return (
    <div className='flex max-[786px]:flex-col pl-8  pb-2 gap-x-8 max-[786px]:p-8 justify-evenly items-center max-[786px]:w-full bg-white shadow-md min-[787px]:items-start min-[787px]:gap-x-4 flex-wrap min-[787px]:gap-y-1 min-[787px]:justify-start min-[787px]:items-start'>
      <div className='flex flex-col justify-start mt-2 items-start max-[786px]:w-[60%] min-[787px]:w-[30%] min-[1441px]:w-[15%] '>
        <label className='px-4 text-xs'> Device type</label>
        <Dropdown
          name='device-dropdown'
          changeValue={changeDevice}
          openedDropdown={openDropdownName}
          changeOpenedDropdown={changeDropdownName}
          currentValue={deviceValue}
          values={["Select Device", "Device 1", "Device 2", "Device 3"]}
        ></Dropdown>
      </div>
      {/* brand dropdown */}
      <div className='flex flex-col mt-2 justify-start items-start max-[786px]:w-[60%] min-[787px]:w-[30%] min-[1441px]:w-[15%] '>
        <label className=' text-xs w-full px-4 flex flex-row  items-center justify-start space-x-2'>
          <div>Brand</div> {showWholeFilter && <AiOutlineArrowLeft />}
        </label>
        <Dropdown
          className='bg-[##E5E8E8]'
          name='brand-dropdown'
          changeValue={changeBrand}
          openedDropdown={openDropdownName}
          changeOpenedDropdown={changeDropdownName}
          currentValue={brandValue}
          values={["Select Brand", "Brand 1", "Brand 2", "Brand 3"]}
        ></Dropdown>
        {/* model */}
        {showWholeFilter && (
          <>
            <label className=' w-full text-xs flex flex-row  px-4 items-center justify-start space-x-2'>
              <div>Model </div>
            </label>
            <Dropdown
              name='model-dropdown'
              changeValue={changeModel}
              openedDropdown={openDropdownName}
              changeOpenedDropdown={changeDropdownName}
              currentValue={modelValue}
              values={["Select Model", "Model 1", "Model 2", "Model 3"]}
            ></Dropdown>
          </>
        )}
      </div>
      {/* second brand */}
      <div className='flex flex-col mt-2 justify-start items-start max-[786px]:w-[60%] min-[787px]:w-[30%] min-[1441px]:w-[15%]'>
        {!showWholeFilter && (
          <>
            <label className=' w-full text-xs flex flex-row  px-4 items-center justify-start space-x-2'>
              <div>Model </div>
            </label>
            <Dropdown
              name='second-brand-dropdown'
              changeValue={changeSecondBrand}
              openedDropdown={openDropdownName}
              changeOpenedDropdown={changeDropdownName}
              currentValue={secondBrandValue}
              values={["Select Brand", "Brand 1", "Brand 2", "Brand 3"]}
            ></Dropdown>
          </>
        )}
        {showWholeFilter && (
          <>
            <label className=' w-full text-xs flex flex-row  px-4 items-center justify-start space-x-2'>
              <div>Brand </div>
              <AiOutlineArrowRight />
            </label>
            <Dropdown
              name='second-brand-dropdown'
              changeValue={changeSecondBrand}
              openedDropdown={openDropdownName}
              changeOpenedDropdown={changeDropdownName}
              currentValue={secondBrandValue}
              values={["Select Brand", "Brand 1", "Brand 2", "Brand 3"]}
            ></Dropdown>

            {/* model */}

            <label className=' w-full text-xs flex flex-row  px-4 items-center justify-start space-x-2'>
              <div>Model </div>
            </label>
            <Dropdown
              name='second-model-dropdown'
              changeValue={changeSecondModel}
              openedDropdown={openDropdownName}
              changeOpenedDropdown={changeDropdownName}
              currentValue={secondModelValue}
              values={["Select Model", "Model 1", "Model 2", "Model 3"]}
            ></Dropdown>
          </>
        )}
      </div>
      <div className='flex flex-col mt-2 justify-start items-start max-[786px]:w-[60%] min-[787px]:w-[30%] min-[1441px]:w-[15%] '>
        <div
          date-rangepicker
          className='flex w-[100%] flex-col jusitfy-start items-center'
        >
          <label className='w-full px-4 flex flex-row text-xs items-center justify-start space-x-2 '>
            Date
          </label>
          <DatePicker
            className='text-xs border-[2px] border-gray-300 border-spacing-2 shadow-sm px-2 py-1 rounded-md w-full'
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={onDateChangeHandler}
            dateFormat='dd MM yyyy'
          />
        </div>
      </div>
      <div className='flex flex-col mt-2 justify-start items-start max-[786px]:w-[60%] min-[787px]:w-[30%] min-[787px]:pt-[1rem] min-[1441px]:w-[15%]'>
        {/* <div
          date-rangepicker
          className='flex w-[100%] flex-col jusitfy-start items-center'
        >
          <label className='w-full px-4 flex flex-row text-xs items-center justify-start space-x-2 '></label> */}
        <Sllider
          handleSliderChange={handleSliderChange}
          value={sliderValue}
        ></Sllider>
        {/* </div> */}
      </div>
      <div className='flex flex-col mt-2 justify-start items-start max-[786px]:w-[60%] min-[787px]:w-[30%] min-[787px]:mt-3 min-[1441px]:w-[15%]'>
        <label className='w-full px-4 flex flex-row text-xs items-center justify-start space-x-2 max-[786px]:invisible'>
          Clear filter
        </label>
        <button
          onClick={onClearFilterhandler}
          className='relative bg-black text-xs text-white inline-block w-full  border-black border-[2px] text-center py-1 rounded-md hover:scale-105
          transition ease-in-out delay-150  hover:text-black hover:bg-white hover:border-black duration-300'
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default Filter;
