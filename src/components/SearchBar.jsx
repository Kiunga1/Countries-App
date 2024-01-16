/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import SearchIcon from '../assets/search1.svg'
import { ThemeContext } from '../context/ThemeContextProvider'

const SearchBar = ({ selectedRegion, handleRegionChange}) => {
    const {theme} = useContext(ThemeContext);

  
  return (
    <div className='px-3 py-2  md:mx-16 my-7  flex flex-col gap-4 md:flex-row md:justify-between'>
      <div className='flex gap-2 bg-white shadow rounded-md dark:bg-bgColorGray px-4 py-2'>
        <img src={SearchIcon} alt="search icon" />
        <input type="text"
        placeholder='Search for a country…'
        className='border-0 outline-none sm:w-full placeholder:text-primaryGray text-primaryGray dark:text-primaryWhite placeholder:text-xs bg-transparent'
         />
      </div>
      <div className='  items-center '>
        <select 
        className='text-primaryGray outline-none px-4 py-2 dark:text-primaryWhite bg-white dark:bg-bgColorGray w-70 shadow rounded-md' 
        id="dropdown" 
        value={selectedRegion}
        onChange={handleRegionChange}
        >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default SearchBar
