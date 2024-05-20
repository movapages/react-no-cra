import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SpaLayout from "./components/SpaLayout/SpaLayout";

import './spa.css';
import SnapshotSelector from "./components/SnapshotSelector/SnapshotSelector";
import DbTree from "./components/DbTree/DbTree";
import CronJobTree from "./components/CronJobTree/CronJobTree";
import AppTree from "./components/AppTree/AppTree";

export const routerConfig = [
  {
    path: '/',
    element: <SpaLayout />,
    children: [
      {
        index: true,
        element: <SnapshotSelector />,
        name: "Snapshots",
      },
      {
        path: '/database',
        element: <DbTree />,
        name: "Databases",
      },
      {
        path: '/application',
        element: <AppTree />,
        name: "Applications",
      },
      {
        path: '/cronjob',
        element: <CronJobTree />,
        name: "CronJobs",
      }
    ]
  }
];

const App = () => {
  return (<RouterProvider router={createBrowserRouter(routerConfig)} />)
};

export default App;