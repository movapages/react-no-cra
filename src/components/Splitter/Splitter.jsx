import React, {useCallback, useEffect, useRef, useState} from 'react';
import snapshotPicked from '../../services/PickSnapshot';
import './splitter.css';

export const Splitter = (props) => {
  const containerRef = useRef();
  const firstHalfRef = useRef();
  const secondHalfRef = useRef();
  const resizerRef = useRef();

  console.log('PROPS: ', props);

  const handleMouseDown = useCallback((e) => {
    const startPos = {
      x: e.clientX,
      y: e.clientY,
    };
    const currentLeftWidth = firstHalfRef.current.getBoundingClientRect().width;

    const handleMouseMove = (e) => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      updateWidth(currentLeftWidth, dx);
      updateCursor();
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      resetCursor();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    const startPos = {
      x: touch.clientX,
      y: touch.clientY,
    };
    const currentLeftWidth = firstHalfRef.current.getBoundingClientRect().width;

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const dx = touch.clientX - startPos.x;
      const dy = touch.clientY - startPos.y;
      updateWidth(currentLeftWidth, dx);
      updateCursor();
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      resetCursor();
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  }, []);

  const updateWidth = (currentLeftWidth, dx) => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;

    if (!container || !firstHalfEle) {
      return;
    }

    const containerWidth = container.getBoundingClientRect().width;
    const delta = currentLeftWidth + dx;
    const newFirstHalfWidth = delta * 100 / containerWidth;
    firstHalfEle.style.width = `${newFirstHalfWidth}%`;
  };

  const updateCursor = () => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;
    const resizerEle = resizerRef.current;
    const secondHalfEle = secondHalfRef.current;

    if (!container || !firstHalfEle || !resizerEle || !secondHalfEle) {
      return;
    }

    resizerEle.style.cursor = 'ew-resize';
    document.body.style.cursor = 'ew-resize';
    firstHalfEle.style.userSelect = 'none';
    firstHalfEle.style.pointerEvents = 'none';
    secondHalfEle.style.userSelect = 'none';
    secondHalfEle.style.pointerEvents = 'none';
  };

  const resetCursor = () => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;
    const resizerEle = resizerRef.current;
    const secondHalfEle = secondHalfRef.current;

    if (!container || !firstHalfEle || !resizerEle || !secondHalfEle) {
      return;
    }

    resizerEle.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');
    firstHalfEle.style.removeProperty('user-select');
    firstHalfEle.style.removeProperty('pointer-events');
    secondHalfEle.style.removeProperty('user-select');
    secondHalfEle.style.removeProperty('pointer-events');
  };

  const {left, right} = props.props;

  const [isShotPicked, setShotPicked] = useState(false);

  useEffect(() => {
    snapshotPicked.subscribe(picked => setShotPicked(picked));
  }, []);

  const doClicked = () => {
    console.log('PICKED1-val: ', snapshotPicked.getValue());
    snapshotPicked.next(true);
    setShotPicked(true);
    console.log('PICKED2-val: ', snapshotPicked.getValue());
  };

  const isNotPicked = <button onClick={doClicked}>
    Pick Snapshot
  </button>


  return (
    <div className="splitter" ref={containerRef}>
      <div className="splitter__first" ref={firstHalfRef}>

        <div style={{display: 'flex', flexDirection: 'column'}}>
        {left}

        {
          !isShotPicked &&
          (<p>{isNotPicked}</p>)
        }
        </div>

      </div>
      <div
        className="splitter__resizer"
        ref={resizerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />
      <div className="splitter__second" ref={secondHalfRef}>
        {right}
      </div>
    </div>
  );
};