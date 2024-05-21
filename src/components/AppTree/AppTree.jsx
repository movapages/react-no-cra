import React from 'react';
import {Splitter} from '../Splitter/Splitter';

const appTreeProps = {
  left: 'App Tree',
  right: 'App Editor',
}
const AppTree = () => {
  return (<>
    <Splitter props={appTreeProps} />
  </>)
};

export default AppTree;