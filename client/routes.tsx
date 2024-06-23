import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouteObject,
} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'

const routes: RouteObject[] = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/:Profile' element={<Profile />}/>
  </Route>,
)

const router: RouteObject[]  = createBrowserRouter(routes)

export default router
