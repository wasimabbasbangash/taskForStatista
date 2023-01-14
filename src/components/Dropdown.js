import React, { useState } from "react";

function Dropdown({
  name,
  changeValue,
  openedDropdown,
  changeOpenedDropdown,
  values,
  currentValue,
}) {
  const [isOpen, setIsopen] = useState(false);
  const [tempValue, setTempValue] = useState(currentValue);

  const openDropdown = () => {
    setIsopen(true);
    changeOpenedDropdown(name);
  };
  const closeDropdown = () => {
    setIsopen(false);
    changeOpenedDropdown(null);
  };

  return (
    <div className='relative inline-block text-left text-xs z-100 bg-transparent w-[100%]'>
      <div>
        <button
          type='button'
          className='inline-flex py-px w-full justify-between items-center rounded-md border-[2px] border-gray-300 bg-white px-4  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
          id='menu-button'
          aria-expanded='true'
          aria-haspopup='true'
          onClick={() =>
            !(name == openedDropdown) ? openDropdown() : setIsopen(false)
          }
        >
          {currentValue}
          <svg
            className='-mr-1 ml-2 h-5 w-5 '
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fill-rule='evenodd'
              d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
        <div
          className='absolute right-0 z-10  w-40  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabindex='-1'
        >
          {values &&
            isOpen &&
            name == openedDropdown &&
            values.map((value) => (
              <div
                className='py-1 hover:cursor-pointer hover:bg-slate-100  hover:border-gray-200'
                role='none'
                onClick={() => {
                  changeValue(value);
                  closeDropdown();
                  setTempValue(value);
                }}
              >
                <a
                  href='#'
                  className='text-gray-700 block w-fit px-4 py-2 text-sm'
                  role='menuitem'
                  tabindex='-1'
                  id='menu-item-0'
                >
                  {value}
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
