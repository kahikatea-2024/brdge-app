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
    <Route index element={<Login />} />
    <Route path="profiles/:id" element={<Profile />} />
    <Route path="/home" element={<Home />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
