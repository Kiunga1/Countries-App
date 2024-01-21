/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
        setFilteredCountries(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }
  const handleRegionChange = (selectedRegion) => {
    // Handle region change filter countries based on the selected region
    // and update the filteredCountries state
    if (selectedRegion === '') {
      // If no region is selected, reset to the original list of countries
      setFilteredCountries(countries);
    } else {
      // Filter countries based on the selected region
      const filtered = countries.filter((country) => country.region === selectedRegion);
      setFilteredCountries(filtered);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} onRegionChange={handleRegionChange}/>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-14 md:mx-20'>
        {filteredCountries.map((country) => (
          <div key={country.numericCode} className='my-4 p-0 bg-white dark:bg-bgColorGray shadow w-55'>
            <span className='h-56'>
              <img className='h-56 rounded-t-md' src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            </span>
            <div className='p-4'>
              <h2 className='text-base font-bold text-primaryGray dark:text-primaryWhite pb-4'>{country.name.common}</h2>
              <p className='text-primaryGray dark:text-primaryWhite font-semibold text-sm pb-2'>
                Population: <span className='font-light'>{country.population}</span>
              </p>
              <p className='text-primaryGray dark:text-primaryWhite font-semibold text-sm pb-2'>
                Region: <span className='font-light'>{country.region}</span>
              </p>
              <p className='text-primaryGray dark:text-primaryWhite font-semibold text-sm pb-4'>
                Capital: <span className='font-light'>{country.capital}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
