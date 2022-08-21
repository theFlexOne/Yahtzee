import { useEffect, useMemo } from "react";
import DIE_CONFIG from "../../../../system/constants/dieSvgConfig.json";
import "./die.css";

const dieConfig = {
  pipPatterns: DIE_CONFIG.DIE_SVG_PIP_PATTERNS,
  pipPaths: DIE_CONFIG.DIE_SVG_PIP_PATHS,
};

const drawPip = (pipId) => (
  <path
    key={pipId}
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
    <div id={dieState.id} className={`die-wrapper ${className}`} {...other}>
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
