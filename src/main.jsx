import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserMainPage from './Components/Pages/UserMainPage/UserMainPage'
import AnimalsFound from './Components/Pages/User/AnimalsFound/AnimalsFound'
import Adoptions from './Components/Pages/User/Adoptions/Adoptions'
import RescueAnimals from './Components/Pages/User/RescueAnimals/RescueAnimals'
import AFRequests from './Components/Pages/User/AnimalsFound/AFRequests/AFRequests'
import AdoptionRequests from './Components/Pages/User/Adoptions/AdoptionsRequests/AdoptionRequests'
import MyAdoptionsRequests from './Components/Pages/User/Adoptions/MyAdoptionsRequests/MyAdoptionsRequests'
import RescueAnimalsR from './Components/Pages/User/RescueAnimals/RescueAnimalsR/RescueAnimalsR'
import OrgMainPage from './Components/Pages/OrgMainPage/OrgMainPage'
import OrgAnimalsFound from './Components/Pages/Org/AnimalsFound/AnimalsFound'
import AnimalsFoundRequests from './Components/Pages/Org/AnimalsFound/AnimalsFoundRequests/AnimalsFoundRequests'
import MyAnimalsFoundRA from './Components/Pages/Org/AnimalsFound/MyAnimalsFoundRA/MyAnimalsFoundRA'
import OrgRescues from './Components/Pages/Org/Rescues/OrgRescues'
import RescuesRequests from './Components/Pages/Org/Rescues/RescuesRequests/RescuesRequests'
import OrgAdoptions from './Components/Pages/Org/Adoptions/OrgAdoptions'
import OrgAdoptionsRequests from './Components/Pages/Org/Adoptions/MyAdoptionsRequests/OrgAdoptionsRequests'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/userpage' element={<UserMainPage />} />
        <Route path='/useranimalsfound' element={<AnimalsFound />} />
        <Route path='/useradoptions' element={<Adoptions />} />
        <Route path='/userrescueanimals' element={<RescueAnimals />} />
        <Route path='/userafrequests' element={<AFRequests />} />
        <Route path='/useradopr' element={<AdoptionRequests />} />
        <Route path='/usermyadopr' element={<MyAdoptionsRequests />} />
        <Route path='/usermyresanimrequests' element={<RescueAnimalsR />} />
        <Route path='/orgpage' element={<OrgMainPage />} />
        <Route path='/orgaf' element={<OrgAnimalsFound />} />
        <Route path='/orgafar' element={<AnimalsFoundRequests />} />
        <Route path='/orgmafra' element={<MyAnimalsFoundRA />} />
        <Route path='/orgr' element={<OrgRescues />} />
        <Route path='/orgrr' element={<RescuesRequests />} />
        <Route path='/orgadop' element={<OrgAdoptions />} />
        <Route path='/orgadopr' element={<OrgAdoptionsRequests />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
