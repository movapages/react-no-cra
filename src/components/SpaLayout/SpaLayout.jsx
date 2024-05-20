import React from 'react';
import { Outlet } from "react-router-dom";

import './spa-layout.css';
import SpaHeader from "../SpaHeader/SpaHeader";
import SpaNavBar from "../SpaNavBar/SpaNavBar";

const SpaLayout = () => {
  return (
    <div className="spa-layout">

      <div className="spa-layout__header">
        <SpaHeader />
      </div>

      <div className="spa-layout__body">

        <div className="spa-layout__navbar">
          <SpaNavBar />
        </div>

        <div className="spa-layout__content">
          <Outlet/>
        </div>

      </div>

    </div>
  )
};

export default SpaLayout;