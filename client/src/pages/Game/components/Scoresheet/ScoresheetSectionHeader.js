const ScoresheetSectionHeader = ({ label }) => {
  return (
    <tr className="scoresheet-section-header scoresheet-row header-row">
      <th className="scoring-option-label scoresheet-cell header-cell">
        <p className="uppercase" data-font-size="A">
          {`${label} section`}
        </p>
      </th>
      <th className="how-to-score scoresheet-cell header-cell">
        <p className="uppercase" data-font-size="B">
          how to score
        </p>
      </th>
      <th className="points-scored scoresheet-cell header-cell">
        <p className="uppercase" data-font-size="B">
          points
        </p>
      </th>
    </tr>
  );
};

export default ScoresheetSectionHeader;
