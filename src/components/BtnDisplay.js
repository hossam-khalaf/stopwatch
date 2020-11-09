import React, { Fragment } from 'react';

function BtnDisplay({ start, status, stop, reset, resume }) {
  return (
    <>
      {status === 0 ? (
        <button className='stopwatch-btn stopwatch-btn-gre' onClick={start}>
          Start{' '}
        </button>
      ) : (
        ''
      )}
      {status === 1 ? (
        <div>
          <button className='stopwatch-btn stopwatch-btn-red' onClick={stop}>
            Stop{' '}
          </button>
          <button className='stopwatch-btn stopwatch-btn-yel' onClick={reset}>
            Reset{' '}
          </button>
        </div>
      ) : (
        ''
      )}

      {status === 2 ? (
        <div>
          <button className='stopwatch-btn stopwatch-btn-gre' onClick={resume}>
            Resume
          </button>
          <button className='stopwatch-btn stopwatch-btn-yel' onClick={reset}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default BtnDisplay;
