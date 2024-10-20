import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
HomePage
import MainLayouts from './layouts/MainLayouts';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import JobDetailsPage, { jobLoader } from './pages/JobDetailsPage';
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from './pages/EditJobPage';

const App = () => {

  const newJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(newJob),
    });
  }

  // Delete Job
  const deleteJob = async (id) => {
    const data = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    })
  }

  // Update Job
  const updateJob = async (job) => {
    const id = job.id;
    const res = await fetch(`/api/jobs/${id}`, {
      method: "PUT",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(job),
    });
  }

  const router = createBrowserRouter(
    createRoutesFromElements(<Route path='/' element={<MainLayouts />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobPage />} />
      <Route path='/jobs/:id' element={<JobDetailsPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
      <Route path='/add-job' element={< AddJobPage addJobSubmit={newJob} />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>)
  );

  return (
    <RouterProvider router={router} />

  )
}

export default App
