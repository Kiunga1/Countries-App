/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CountriesList = ({ selectedRegion }) => {
  const [countries, setCountries] = useState([]);
  

  useEffect (() => {
    const fetchCountries = async () => {
      try {
        let url = 'https://restcountries.com/v3.1/all';

        if (selectedRegion) {
          url = `https://restcountries.com/v3.1/region/${selectedRegion}`;
        }

        const response = await axios.get(url);
        console.log('Data from the API:', response.data);
        setCountries(response.data);
        
      } catch (error) {
        console.log('Error fetching countries:', error)
      }
    };

    fetchCountries();
  }, [selectedRegion]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-14 md:mx-20'>
      {countries.map((country) => (
        <div key={country.cca3} className=' my-4 p-0 bg-white dark:bg-bgColorGray shadow w-55'>
          <span>
            <img  src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          </span>
          <div className='p-4'>
            <h2 className='text-base font-bold text-primaryGray dark:text-primaryWhite'>{country.name.common}</h2>
            <p className='text-primaryGray dark:text-primaryWhite font-semibold text-sm'>
              Population: <span className='font-light'>{country.population}</span>
            </p>
            <p className='text-primaryGray dark:text-primaryWhite font-semibold text-sm'>
              Region: <span className='font-light'>{country.region}</span>
            </p>
            <p className='text-primaryGray dark:text-primaryWhite font-semibold text-sm'>
             Capital: <span className='font-light'>{country.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CountriesList
