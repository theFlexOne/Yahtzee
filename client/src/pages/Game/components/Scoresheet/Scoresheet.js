import "./scoresheet.css";
import { DEFAULT_SCORING_OPTIONS } from "../../../../system/constants/defaultScoringOptions";
import { ReactComponent as RightArrow } from "../../../../assets/right-arrow.svg";
import ScoresheetSection from "../ScoresheetSection/ScoresheetSection";
import ScoresheetSectionHeader from "../ScoresheetSectionHeader/ScoresheetSectionHeader";
import ScoresheetScoringOption from "../ScoresheetScoringOption/ScoresheetScoringOption";
import ScoresheetTop from "../ScoresheetTop/ScoresheetTop";

const createUpperAndLowerSectionScoringOptionsObjects = () => {
  return DEFAULT_SCORING_OPTIONS.reduce(
    (acc, cur) => {
      if (cur.section === "upper") acc[0].push(cur);
      else acc[1].push(cur);
      return acc;
    },
    [[], []]
  );
};

const Scoresheet = ({
  player,
  rollCount,
  onScoringOptionClick,
  takenScoringOptionId,
}) => {
  const [upperSectionScoringOptions, lowerSectionScoringOptions] =
    createUpperAndLowerSectionScoringOptionsObjects();

  const addUpUpperSection = () => {
    const total = player.scoresheet.reduce((acc, cur) => {
      if (cur.section === "upper") acc += cur.value || 0;
      return acc;
    }, 0);
    return total;
  };

  const calculateBonusBox = () => (addUpUpperSection() >= 63 ? 35 : 0);

  const addUpUpperSectionWithBonus = () => {
    const total = player.scoresheet.reduce((acc, cur) => {
      if (cur.section === "upper") acc += cur.value || 0;
      return acc;
    }, 0);
    return total >= 63 ? total + 35 : total;
  };

  const addUpLowerSection = () => {
    const total = player.scoresheet.reduce((acc, cur) => {
      if (cur.section === "lower") acc += cur.value || 0;
      return acc;
    }, 0);
    return total;
  };

  return (
    <div className="scoresheet-container">
      {rollCount === 3 && !takenScoringOptionId && (
        <div id="takeScoreMessage">
          <p>←</p>
          <p>Please, take a score to continue.</p>
        </div>
      )}{" "}
      <ScoresheetTop player={player} />
      <table className="scoresheet" data-layout="horizontal">
        <ScoresheetSection>
          <ScoresheetSectionHeader label="upper" />
          {upperSectionScoringOptions.map((opt) => (
            <ScoresheetScoringOption
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
              {addUpUpperSection()}
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
              {calculateBonusBox()}
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
              {addUpUpperSectionWithBonus()}
            </td>
          </tr>
        </ScoresheetSection>
        <ScoresheetSection>
          <ScoresheetSectionHeader label="lower" />
          {lowerSectionScoringOptions.map((opt) => (
            <ScoresheetScoringOption
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
              {addUpLowerSection()}
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
              {addUpUpperSectionWithBonus()}
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
              {addUpLowerSection() + addUpUpperSectionWithBonus()}
            </td>
          </tr>
        </ScoresheetSection>
      </table>
    </div>
  );
};

export default Scoresheet;
