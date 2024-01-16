
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DetailsPage from './pages/DetailsPage'
import HomePage from './pages/HomePage'


function App() {
  

  return (
    <div className='  bg-bgColorLight dark:bg-bgColorDark'>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/details' element={<DetailsPage/>}/>
     </Routes>

    </div>
  )
}

export default App
