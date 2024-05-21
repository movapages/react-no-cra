import React from 'react';
import {Splitter} from '../Splitter/Splitter';

const dbTreeProps = {
  left: 'DB Tree',
  right: 'DB Editor',
}

const DbTree = () => {
  return (<>
    <Splitter props={dbTreeProps} />
  </>)
};

export default DbTree;