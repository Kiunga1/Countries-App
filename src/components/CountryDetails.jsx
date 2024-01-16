// CountryDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetails = ({ countryCode }) => {
  const [countryDetails, setCountryDetails] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        console.log('Country Details:', response.data);
        setCountryDetails(response.data[0]);

    //Fetch bordering countries
    const borderCodes = response.data[0]?.borders || [];
        const borderCountriesResponse = await Promise.all(
          borderCodes.map(async (code) => {
            const borderResponse = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
            return borderResponse.data[0];
          })
        );
        setBorderCountries(borderCountriesResponse);
      } catch (error) {
        console.log('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();
  }, [countryCode]);

  if (!countryDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-white dark:bg-bgColorGray h-screen md:flex md:justify-between m-4 p-7'>
      <span>
        <img src={countryDetails.flags.png} alt={`Flag of ${countryDetails.name.common}`} />
      </span>
      <div>
        <div>
          <h2 className='font-bold text-primaryGray dark:text-primaryWhite text-4xl mb-4'>{countryDetails.name.common}</h2>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Native Name: <span className='font-light'>{countryDetails.name.native.common}</span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Population: <span className='font-light'>{countryDetails.population}</span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Region: <span className='font-light'>{countryDetails.region}</span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Sub Region: <span className='font-light'>{countryDetails.subregion}</span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Capital: <span className='font-light'>{countryDetails.capital}</span>
          </p>
        </div>
        <div>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Top Level Domain: <span className='font-light'>{countryDetails.tld[0]}</span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Currencies: <span className='font-light'>{countryDetails.currencies[0].name}</span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Languages: <span className='font-light'>{countryDetails.languages.join(', ')}</span>
          </p>
        </div>
        <div>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
              Border Countries:
          </p>
            {borderCountries.map((borderCountry) => (
          <button key={borderCountry.alpha3Code}>{borderCountry.name.common}</button>
            ))}

        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
