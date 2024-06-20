import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/:Profile' element={<Profile />}/>
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
