/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CountriesList from '../components/CountriesList';
//import CountryDetails from '../components/CountryDetails';


const HomePage = () => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div>
        <Header/>
        <SearchBar selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} />
        <CountriesList selectedRegion={selectedRegion} /> 
      {/* <CountryDetails/> */}
     
    </div>
  )
}

export default HomePage
