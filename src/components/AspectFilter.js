import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function AspectFilter() {
  const [deviceValue, setDevice] = useState("Select Device");
  const [brandValue, setBrand] = useState("Select Brand");
  const [modelValue, setModel] = useState("Select Model");
  const [openDropdownName, setOpenDropdownname] = useState(null);

  //   Select devices
  const changeDevice = async (deviceValue) => {
    setDevice(deviceValue);
  };
  //   Select devices
  const changeBrand = async (brandValue) => {
    setBrand(brandValue);
  };
  //   Select Model
  const changeModel = async (modelValue) => {
    setModel(modelValue);
  };
  //   change name of opened dropdown
  const changeDropdownName = (value) => {
    setOpenDropdownname(value);
  };

  return (
    <div className='flex md:flex-row flex-col sm:h-fit md:h-fit w-full  md:space-x-2 justify-evenly items-center p-8 bg-white shadow-md '>
      <div className='flex flex-col justify-start items-start'>
        <label className='px-4'> Device type</label>
        <Dropdown
          name='device-dropdown'
          changeValue={changeDevice}
          openedDropdown={openDropdownName}
          changeOpenedDropdown={changeDropdownName}
          values={["Select Device", "Device 1", "Device 2", "Device 3"]}
        ></Dropdown>
      </div>
      {/* brand dropdown */}
      <div className='flex flex-col justify-start items-start'>
        <label className=' w-full px-4 flex flex-row  items-center justify-start space-x-2'>
          <div>Brand</div> <AiOutlineArrowLeft />
        </label>
        <Dropdown
          name='brand-dropdown'
          changeValue={changeBrand}
          openedDropdown={openDropdownName}
          changeOpenedDropdown={changeDropdownName}
          values={["Select Brand", "Brand 1", "Brand 2", "brand 3"]}
        ></Dropdown>
      </div>
      <div className='flex flex-col  justify-start items-start'>
        <label className=' w-full flex flex-row  px-4 items-center justify-start space-x-2'>
          <div>Brand </div>
          <AiOutlineArrowRight />
        </label>
        <Dropdown
          name='model-dropdown'
          changeValue={changeModel}
          openedDropdown={openDropdownName}
          changeOpenedDropdown={changeDropdownName}
          values={["All Models", "Model 1", "Model 2", "Model 3"]}
        ></Dropdown>
      </div>
    </div>
  );
}

export default AspectFilter;
