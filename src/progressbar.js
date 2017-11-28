import React from 'react';

function ProgressBar({completion}) {
  const percentage = completion * 100;
  return(
    <div className="mv2 flex flex-column">
      <label htmlFor="progress" className="mv2">
        ProgressBar
      </label>
      <progress value= {completion} id="progress" className="bn">
      </progress>
      {percentage}%
    </div>
  )
}
export default ProgressBar;
