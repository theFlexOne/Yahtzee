import { useReducer } from "react";
import { DEFAULT_SCORING_OPTIONS } from "../system/constants/defaultScoringOptions";

const reducer = (state, action) => {
  const stateCopy = [...state];
  switch (action.type) {
    case "update": {
      const { playerId, scoringOptionId, value } = action.payload;
      const player = stateCopy.find((player) => player.id === playerId);
      const scoringOption = player.scoresheet.find(
        (opt) => opt.id === scoringOptionId
      );
      scoringOption.value = value;
      return stateCopy;
    }
    default: {
      throw new Error("Invalid action type: " + action.type);
    }
  }
};

const generateScoresheetState = () => {
  return DEFAULT_SCORING_OPTIONS.map((opt) => ({
    id: opt.id,
    value: undefined,
    section: opt.section,
  }));
};

const generatePlayers = (players) => {
  if (Array.isArray(players)) {
    const newPlayers = players.map((player, i) => {
      return {
        id: player.id,
        name: player.name,
        scoresheet: generateScoresheetState(),
      };
    });
    return newPlayers;
  }
  const playersState = [];
  for (let i = 0; i < players; i++) {
    playersState.push({
      id: i,
      name: `Player ${i + 1}`,
      scoresheet: generateScoresheetState(),
    });
  }
  return playersState;
};

const usePlayers = (players = 1) => {
  const [playersState, dispatch] = useReducer(
    reducer,
    generatePlayers(players)
  );

  const updateCurrentPlayersScoresheet = (
    scoringOptionId,
    playerId,
    value = undefined
  ) => {
    dispatch({
      type: "update",
      payload: {
        value,
        playerId: playerId,
        scoringOptionId: scoringOptionId,
      },
    });
  };

  const calculateCurrentPlayersScores = () => {
    const scores = playersState.map((player) => {
      const score = player.scoresheet.reduce(
        (acc, cur) => acc + (cur.value || 0),
        0
      );
      return { playerId: player.playerId, score };
    });
    return scores;
  };

  return [
    playersState,
    { updateCurrentPlayersScoresheet, calculateCurrentPlayersScores },
  ];
};

export default usePlayers;
