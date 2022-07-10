import { useMemo } from "react";
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

const Die = ({ dieState, toggleDieFreedom, ...other }) => {
  const currentPipPattern = useMemo(
    () => dieConfig.pipPatterns[dieState.value],
    [dieState.value]
  );

  return (
    <div id={dieState.id} className={`die-wrapper ${other.className}`}>
      <svg
        id={`die${dieState.id}`}
        className={`die${!dieState.isFree ? " held" : ""}`}
        onClick={toggleDieFreedom}
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
