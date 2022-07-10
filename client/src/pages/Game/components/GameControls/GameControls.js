import "./gameControls.css";

const GameControls = ({
  isRollable,
  takenScoringOptionId,
  handleRollButtonClick,
  handleTakeScoreButtonClick,
}) => {
  return (
    <div className="game-controls">
      <button
        disabled={!isRollable || takenScoringOptionId}
        onClick={handleRollButtonClick}
      >
        ROLL!
      </button>
      <button
        disabled={!takenScoringOptionId}
        onClick={handleTakeScoreButtonClick}
      >
        TAKE SCORE
      </button>
    </div>
  );
};

export default GameControls;
