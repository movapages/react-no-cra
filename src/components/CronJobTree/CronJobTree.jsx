import React from 'react';
import {Splitter} from '../Splitter/Splitter';

const cronJobProps = {
  left: 'Cron Job Tree',
  right: 'Cron Job Editor',
}
const CronJobTree = () => {
  return (<>
    <Splitter props={cronJobProps} />
  </>)
};

export default CronJobTree;