import {
  DIE_SVG_PIP_PATTERNS,
  DIE_SVG_PIP_PATHS,
} from "../../../../constants/dieSvgConfig";
import "./die.css";
import { v4 as uuid } from "uuid";

const dieConfig = {
  pipPatterns: DIE_SVG_PIP_PATTERNS,
  pipPaths: DIE_SVG_PIP_PATHS,
};

const drawPip = (pipId) => (
  <path
    key={uuid()}
    className="pip"
    id={`pip${pipId}`}
    d={dieConfig.pipPaths[pipId]}
  />
);

const Die = ({ dieState, toggleDieFreedom, className, ...other }) => {
  const currentPipPattern = dieConfig.pipPatterns[dieState.value];

  const handleDieClick = (e) => {
    toggleDieFreedom(e);
  };

  return (
    <div
      id={dieState.position}
      className={`die-wrapper ${className}`}
      {...other}
    >
      <svg
        id={`die${dieState.id}`}
        className={`die${!dieState.isFree ? " held" : ""}`}
        onClick={handleDieClick}
        width="100"
        height="110"
        viewBox="0 0 100 110"
        fill="#D9D9D9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="die-background"
          stroke="black"
          x="0"
          y="10"
          width="100"
          height="100"
          rx="5"
        />
        <g id="pips" fill="#111" visibility="visible">
          {currentPipPattern.map(drawPip)}
        </g>
      </svg>
    </div>
  );
};

export default Die;
