import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,

} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Login from './Pages/Login'

export const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="profiles/:id" element={<Profile />} />
    <Route path='/login' element={<Login />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
