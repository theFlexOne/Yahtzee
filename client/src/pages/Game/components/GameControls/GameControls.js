import YahtzeeButton from "../../../../components/YahtzeeButton/YahtzeeButton";
import "./gameControls.css";

const GameControls = ({
  isRollable,
  takenScoringOptionId,
  handleRollButtonClick,
  handleTakeScoreButtonClick,
}) => {
  return (
    <div className="game-controls">
      <YahtzeeButton
        disabled={!isRollable || takenScoringOptionId}
        onClick={handleRollButtonClick}
      >
        ROLL!
      </YahtzeeButton>
      <YahtzeeButton
        disabled={!takenScoringOptionId}
        onClick={handleTakeScoreButtonClick}
      >
        TAKE SCORE
      </YahtzeeButton>
    </div>
  );
};

export default GameControls;
