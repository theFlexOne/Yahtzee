const ScoresheetScoringOption = ({
  option,
  takenScoringOptionId,
  onScoringOptionClick,
  player,
}) => {
  const value = player?.scoresheet.find(
    (score) => score.id === option.id
  )?.value;

  const pointsScoredClassNames = `points-scored${
    takenScoringOptionId === option.id ? " selected" : ""
  }${value && takenScoringOptionId !== option.id ? " locked" : ""}`;

  return (
    <tr className="scoring-option scoresheet-row">
      <th
        className="scoring-option-label header-cell scoresheet-cell"
        data-font-size="A"
      >
        <p className="capitalize">{option.label}</p>
        {/* <img src={dieSvgs[option.id]} alt="small die" /> */}
      </th>
      <th className="how-to-score scoresheet-cell" data-font-size="B">
        {option.howToScore}
      </th>
      <td
        className={pointsScoredClassNames}
        data-font-size="B"
        onClick={(e) => onScoringOptionClick(option.id, e)}
      >
        {value}
      </td>
    </tr>
  );
};

export default ScoresheetScoringOption;
