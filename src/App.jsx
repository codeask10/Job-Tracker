import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
HomePage
import MainLayouts from './layouts/MainLayouts';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import JobDetailsPage, { jobLoader } from './pages/JobDetailsPage';


const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<MainLayouts />}>
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobPage />} />
    <Route path='/jobs/:id' element={<JobDetailsPage />} loader={jobLoader} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>)
);
const App = () => {

  return (
    <RouterProvider router={router} />

  )
}

export default App
