import "./scoresheet.css";
import DEFAULT_SCORING_OPTIONS from "../../../../constants/defaultScoringOptions";
import { ReactComponent as RightArrow } from "../../../../assets/right-arrow.svg";
import ScoresheetSection from "./ScoresheetSection";
import ScoresheetSectionHeader from "./ScoresheetSectionHeader";
import ScoresheetScoringOption from "./ScoresheetScoringOption";
// import ScoresheetTop from "../ScoresheetTop/ScoresheetTop";

const createUpperAndLowerSectionScoringOptions = () => {
  const options = DEFAULT_SCORING_OPTIONS.reduce(
    (acc, cur) => {
      if (cur.section === "upper") acc[0].push(cur);
      else acc[1].push(cur);
      return acc;
    },
    [[], []]
  );
  return options;
};

const [upperSectionScoringOptions, lowerSectionScoringOptions] =
  createUpperAndLowerSectionScoringOptions();

const Scoresheet = ({
  player,
  rollCount,
  onScoringOptionClick,
  takenScoringOptionId,
}) => {
  return (
    <div className="scoresheet-container">
      {rollCount.current === 3 && !takenScoringOptionId && (
        <div className="take-score-message">
          <p>←</p>
          <p>Please, take a score to continue.</p>
        </div>
      )}
      <div className="player-name-section">
        Name:
        <span className="player-name">{player.name}</span>
      </div>
      <table className="scoresheet" data-layout="horizontal">
        <ScoresheetSection>
          <ScoresheetSectionHeader label="upper" />
          {upperSectionScoringOptions.map((opt) => (
            <ScoresheetScoringOption
              key={opt.id}
              player={player}
              option={opt}
              onScoringOptionClick={onScoringOptionClick}
              takenScoringOptionId={takenScoringOptionId}
            />
          ))}
          <tr className="scoresheet-row total-before-bonus">
            <th className="scoring-option-label row-label header-cell scoresheet-cell">
              <p className="uppercase" data-font-size="A">
                total score
              </p>
            </th>
            <th className="how-to-score scoresheet-cell" data-font-size="B">
              <RightArrow className="right-arrow" />
            </th>
            <td
              className="points-scored scoresheet-cell total"
              data-font-size="B"
            >
              {player.upperTotalBeforeBonus}
            </td>
          </tr>
          <tr className="scoresheet-row bonus">
            <th
              className="scoring-option-label header-cell scoresheet-cell"
              data-font-size="A"
            >
              <p className="uppercase" data-font-size="A">
                bonus
              </p>
              <span data-font-size="D">If total score is 63 or over</span>
            </th>
            <th className="how-to-score scoresheet-cell">
              <p className="uppercase" data-font-size="C">
                score 35
              </p>
            </th>
            <td
              className="points-scored scoresheet-cell total"
              data-font-size="B"
            >
              {player.upperTotalBeforeBonus < 63 ? 0 : 35}
            </td>
          </tr>
          <tr className="scoresheet-row total">
            <th className="scoring-option-label row-label header-cell scoresheet-cell">
              <p className="uppercase" data-font-size="A">
                total
              </p>
              <span data-font-size="D">Of Upper Section</span>
            </th>
            <th className="how-to-score scoresheet-cell" data-font-size="B">
              <RightArrow className="right-arrow" />
            </th>
            <td
              className="points-scored scoresheet-cell total"
              data-font-size="B"
            >
              {player.upperTotal}
            </td>
          </tr>
        </ScoresheetSection>
        <ScoresheetSection>
          <ScoresheetSectionHeader label="lower" />
          {lowerSectionScoringOptions.map((opt) => (
            <ScoresheetScoringOption
              key={opt.id}
              player={player}
              option={opt}
              onScoringOptionClick={onScoringOptionClick}
              takenScoringOptionId={takenScoringOptionId}
            />
          ))}
          <tr className="scoresheet-row lower-total">
            <th className="scoring-option-label row-label header-cell scoresheet-cell">
              <p className="uppercase" data-font-size="A">
                total
              </p>
              <span data-font-size="D">Of Lower Section</span>
            </th>
            <th className="how-to-score scoresheet-cell" data-font-size="B">
              <RightArrow className="right-arrow" />
            </th>
            <td
              className="points-scored scoresheet-cell total"
              data-font-size="B"
            >
              {player.lowerTotal}
            </td>
          </tr>

          <tr className="scoresheet-row upper-total">
            <th className="scoring-option-label row-label header-cell scoresheet-cell">
              <p className="uppercase" data-font-size="A">
                total
              </p>
              <span data-font-size="D">Of Upper Section</span>
            </th>
            <th className="how-to-score scoresheet-cell" data-font-size="B">
              <RightArrow className="right-arrow" />
            </th>
            <td
              className="points-scored scoresheet-cell total"
              data-font-size="B"
            >
              {player.upperTotal}
            </td>
          </tr>
          <tr className="scoresheet-row grand-total">
            <th className="scoring-option-label row-label header-cell scoresheet-cell">
              <p className="uppercase" data-font-size="A">
                grand total
              </p>
            </th>
            <th className="how-to-score scoresheet-cell" data-font-size="B">
              <RightArrow className="right-arrow" />
            </th>
            <td
              className="points-scored scoresheet-cell total"
              data-font-size="B"
            >
              {player.grandTotal}
            </td>
          </tr>
        </ScoresheetSection>
      </table>
    </div>
  );
};

export default Scoresheet;
