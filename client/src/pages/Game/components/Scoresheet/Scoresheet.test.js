import { render, screen } from "@testing-library/react";
import { DEFAULT_SCORING_OPTIONS } from "../../system/constants/defaultScoringOptions";
import Scoresheet from "./Scoresheet";

const player = { name: "Player 1", id: 1, scoresheet: [] };

const generateScoresheetState = () => {
  return DEFAULT_SCORING_OPTIONS.map((opt) => ({
    id: opt.id,
    value: undefined,
    section: opt.section,
  }));
};

test("should have correct number of scoring rows", () => {
  const { container } = render(<Scoresheet player={player} />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const scoringRows = container.querySelectorAll(".scoring-option");
  expect(scoringRows.length).toBe(DEFAULT_SCORING_OPTIONS.length);
});
