// CountryDetails.js
import Germanflag from '../assets/germanflag.png';
import Backarrow from '../assets/backarrow.svg';
import { Link } from 'react-router-dom';



const CountryDetails = () => {
  

  return (
    <div className=' dark:bg-bgColorDark dark:text-primaryWhite h-screen px-3.5 py-7 md:px-20'>
      <Link to='/'>
        <div className=" ">
          <button className='flex gap-2 px-6 py-2 bg-primaryWhite shadow rounded dark:bg-bgColorGray mb-16'>
            <span>
              <img className='dark:text-primaryWhite 'src={Backarrow} alt="back arrow" />
            </span>Back
          </button>   
        </div>
      </Link>
      
      <div className='lg:flex lg:justify-between' >
        <span >
          <img className="rounded md:h-80" src={Germanflag} alt={`Flag of `} />
        </span>
      
        <div className=" ">
          <div className='lg:flex lg:justify-between  lg:gap-8'>
          <div>
          <h2 className='font-bold text-primaryGray dark:text-primaryWhite text-4xl mb-6 mt-8'>Title</h2>
          
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Native Name: <span className='font-light'>Germany</span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Population: <span className='font-light'>203948756</span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Region: <span className='font-light'>errope</span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Sub Region: <span className='font-light'></span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Capital: <span className='font-light'></span>
          </p>
        
          </div>
        <div className='mt-8 self-center'>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Top Level Domain: <span className='font-light'></span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Currencies: <span className='font-light'></span>
          </p>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
            Languages: <span className='font-light'></span>
          </p>
        </div>
          </div>
        <div className='mt-6'>
          <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
              Border Countries:
          </p>
        </div>
      </div>
      
        </div>
    </div>
  );
};

export default CountryDetails;

// // CountryDetails.js
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// import Backarrow from '../assets/backarrow.svg';

// const CountryDetails = () => {
//   const { id } = useParams();
//   const [country, setCountry] = useState(null);

//   useEffect(() => {
//     console.log(id)
//     const fetchCountryDetails = async () => {
//       try {
//         const response = await axios.get(`https://restcountries.com/v2/alpha/${id}`);
//         setCountry(response.data);
//         console.log(response.data)
//       } catch (error) {
//         console.error('Error fetching country details:', error);
//       }
//     };

//     fetchCountryDetails();
//   }, [id]);

//   return (
//     <div className='dark:bg-bgColorDark dark:text-primaryWhite h-screen px-3.5 py-7 md:px-20'>
//       <Link to='/'>
//         <div className=" ">
//           <button className='flex gap-2 px-6 py-2 bg-primaryWhite shadow rounded dark:bg-bgColorGray mb-16'>
//             <span>
//               <img className='dark:text-primaryWhite' src={Backarrow} alt="back arrow" />
//             </span>
//             Back
//           </button>
//         </div>
//       </Link>

//       {country && (
//         <div className='lg:flex lg:justify-between'>
//           <span>
//             <img className="rounded md:h-80" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
//           </span>

//           <div className=" ">
//             <div className='lg:flex lg:justify-between  lg:gap-8'>
//               <div>
//                 <h2 className='font-bold text-primaryGray dark:text-primaryWhite text-4xl mb-6 mt-8'>{country.name.common}</h2>

//                 <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
//                   Native Name: <span className='font-light'>{country.nativeName}</span>
//                 </p>
//                 <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
//                   Population: <span className='font-light'>{country.population}</span>
//                 </p>
//                 <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
//                   Region: <span className='font-light'>{country.region}</span>
//                 </p>
//                 <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
//                   Sub Region: <span className='font-light'>{country.subregion}</span>
//                 </p>
//                 <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
//                   Capital: <span className='font-light'>{country.capital}</span>
//                 </p>
//               </div>
//               <div className='mt-8 self-center'>
//                 <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
//                   Top Level Domain: <span className='font-light'>{country.topLevelDomain}</span>
//                 </p>
//                 <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
//                   Currencies: <span className='font-light'>{country.currencies[0].name}</span>
//                 </p>
//                 <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
//                   Languages: <span className='font-light'>{country.languages.map(lang => lang.name).join(', ')}</span>
//                 </p>
//               </div>
//             </div>
//             <div className='mt-6'>
//               <p className='font-semibold text-sm text-primaryGray dark:text-primaryWhite leading-8'>
//                 Border Countries: {country.borders.join(', ')}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CountryDetails;

