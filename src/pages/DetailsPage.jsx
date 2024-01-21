
import Header from '../components/Header'
import CountryDetails from '../components/CountryDetails'

const DetailsPage = ({ selectedCountry }) => {
  return (
    <div className='  bg-bgColorLight dark:bg-bgColorDark'>
      <Header/>
      <CountryDetails countryDetails={selectedCountry}/>
    </div>
  )
}

export default DetailsPage
