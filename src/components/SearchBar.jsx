/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import SearchIcon from '../assets/search1.svg';
// import { ThemeContext } from '../context/ThemeContextProvider';

const SearchBar = ({ onSearch, onRegionChange }) => {
  // const { theme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term, selectedRegion);
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    onRegionChange(region, searchTerm);
  };

  return (
    <div className='px-3 py-2 md:mx-16 my-7 flex flex-col gap-4 md:flex-row md:justify-between'>
      <div className='flex gap-2 bg-white shadow rounded-md dark:bg-bgColorGray px-4 py-2'>
        <img src={SearchIcon} alt='search icon' />
        <input
          type='text'
          placeholder='Search for a country…'
          value={searchTerm}
          onChange={handleInputChange}
          className='border-0 outline-none sm:w-full placeholder:text-primaryGray text-primaryGray placeholder:text-xs dark:text-primaryWhite dark:bg-bgColorGray rounded'
        />
      </div>
      <div className='items-center'>
        <select
          className='text-primaryGray outline-none p-2 dark:text-primaryWhite bg-white dark:bg-bgColorGray w-70 shadow rounded text-center'
          id='dropdown'
          onChange={handleRegionChange}
          value={selectedRegion}
        >
          <option value=''>Filter by Region</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
