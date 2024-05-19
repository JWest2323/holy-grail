import "./css/ProgressBar.css";

const MIN = 0;
const MAX = 100;

const ProgressBar = ({ completionValue }) => {
  completionValue = Math.min(Math.max(completionValue, MIN), MAX);

  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: `${completionValue}%` }}
        role="progressbar"
        ariavaluenow={completionValue}
        ariavaluemin={MIN}
        ariavaluemax={MAX}
      >
        {completionValue}%
      </div>
    </div>
  );
};

export default ProgressBar;
