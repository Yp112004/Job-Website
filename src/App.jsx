import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Mainlayout from './layouts/Mainlayout';
import Jobspage from './pages/Jobspage';
import NotFoundPage from './pages/Notfound';
import JobPage, { jobloader } from './pages/JobPage';
import AddJobpage from './pages/AddJobpage';
import EditJobpage from './pages/EditJobpage';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return res.ok;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return res.ok;
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT', // Use PUT for updates
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return res.ok;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobloader} />
        <Route
          path="/edit-job/:id"
          element={<EditJobpage updateJobSubmit={updateJob} />}
          loader={jobloader}
        />
        <Route path="/jobs" element={<Jobspage />} />
        <Route path="/add-job" element={<AddJobpage addJobSubmit={addJob} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
