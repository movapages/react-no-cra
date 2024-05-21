import React from 'react';
import { Splitter } from '../Splitter/Splitter';

const snapshotProps = {
  left: 'SnapShot Tree',
  right: 'SnapShot Editor',
}

const SnapshotSelector = () => {
  return (<>
    <Splitter props={snapshotProps} />
  </>)
};

export default SnapshotSelector;