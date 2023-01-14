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
  };

  return (
    <div className='flex xs:justify-start xs:px-0 sm:px-0 xs:items-center  sm:justify-start sm:items-center text-sm md:flex-row flex-col sm:h-fit md:h-fit w-full min-w-fit  space-x-8 items-start p-8 bg-white shadow-md '>
      <div className='flex flex-col justify-start items-start'>
        <label className='px-4'> Device type</label>
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
      <div className='flex flex-col justify-start items-start'>
        <label className=' w-full px-4 flex flex-row  items-center justify-start space-x-2'>
          <div>Brand</div> {showWholeFilter && <AiOutlineArrowLeft />}
        </label>
        <Dropdown
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
            <label className=' w-full flex flex-row  px-4 items-center justify-start space-x-2'>
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
      <div className='flex flex-col  justify-start items-start'>
        {!showWholeFilter && (
          <>
            <label className=' w-full flex flex-row  px-4 items-center justify-start space-x-2'>
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
            <label className=' w-full flex flex-row  px-4 items-center justify-start space-x-2'>
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

            <label className=' w-full flex flex-row  px-4 items-center justify-start space-x-2'>
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
      <div className='flex flex-col  justify-start items-start'>
        <div
          date-rangepicker
          className='flex  flex-col jusitfy-start items-center'
        >
          <label className='text-black w-full '>Date</label>
          <DatePicker
            className='text-sm border-[2px] border-gray-300 border-spacing-2 shadow-sm p-2 rounded-md'
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={onDateChangeHandler}
            dateFormat='dd MM yyyy'
          />
        </div>
      </div>
      <div className='flex flex-col  justify-start items-start'>
        <Sllider
          handleSliderChange={handleSliderChange}
          value={sliderValue}
        ></Sllider>
      </div>
      <div className='flex flex-col  justify-start items-start'>
        <label className='text-black'>Clear filter</label>
        <button
          onClick={onClearFilterhandler}
          className='relative bg-white inline-block md:w-40 w-[100%] border-gray-300 border-[2px] text-center py-[7px] rounded-md hover:scale-105'
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default Filter;
