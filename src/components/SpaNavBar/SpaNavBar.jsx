import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import snapshotPicked from '../../services/PickSnapshot';

import './spa-nav-bar.css';

const SpaNavBar = () => {

  const navigate = useNavigate();
  const [isPicked, setIsPicked] = useState(snapshotPicked.getValue());
  console.log('isPicked', isPicked);

  useEffect(() => {
    snapshotPicked.subscribe(picked => setIsPicked(picked));
  }, []);

  const goTo = (direction) => {
    navigate(`/${direction}`);
  };

  const isPickedEl = <>
                                <li onClick={() => goTo('database')}>DBs</li>
                                <li onClick={() => goTo('application')}>Apps</li>
                                <li onClick={() => goTo('cronjob')}>Crons</li>
                              </>;

  const isNotPickedEl = <>
                                  <li>DBs</li>
                                  <li>Apps</li>
                                  <li>Crons</li>
                                 </>;

  return (
    <ul>
      <li onClick={() => goTo('')}>Snaps</li>
      {isPicked ? isPickedEl : isNotPickedEl}
    </ul>)
};

export default SpaNavBar;