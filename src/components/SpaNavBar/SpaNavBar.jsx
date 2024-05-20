import React from 'react';
import {useNavigate} from "react-router-dom";

const SpaNavBar = () => {

  const navigate = useNavigate();

  const goTo = (direction) => {
    navigate(`/${direction}`);
  };

  return (<ul>
    <li onClick={() => goTo('')}>Snapshots</li>
    <li onClick={() => goTo('database')}>Databases</li>
    <li onClick={() => goTo('application')}>Applications</li>
    <li onClick={() => goTo('cronjob')}>Cron Jobs</li>
  </ul>)
};

export default SpaNavBar;