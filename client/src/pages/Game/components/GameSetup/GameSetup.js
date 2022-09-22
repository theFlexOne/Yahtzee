import { useRef, useState } from "react";

import "./gameSetup.css";
import YahtzeeButton from "../../../../components/YahtzeeButton/YahtzeeButton";

const UserCard = ({ name, playerNumber }) => {
  return (
    <div className="player-card">
      <h4>{`Player ${playerNumber + 1}`}</h4>
      <svg
        className="divider"
        width="196"
        height="30"
        viewBox="0 0 196 30"
        fill="goldenrod"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-4.80825e-07 15L73.5 5.47372L73.5 24.5263L-4.80825e-07 15Z" />
        <path d="M196 15L122.5 24.5263L122.5 5.47372L196 15Z" />
        <rect
          x="97.9706"
          y="0.911682"
          width="19.8822"
          height="19.8822"
          transform="rotate(45 97.9706 0.911682)"
        />
      </svg>
      <h3 className="name">{name}</h3>
    </div>
  );
};

const GameSetup = ({
  activePlayers,
  setActivePlayers,
  activeUsers,
  setIsSettingUp,
}) => {
  const focusRef = useRef(null);

  const PlayerCard = ({ playerNumber, user }) => {
    return (
      <div className="player-card" data-player-number={playerNumber}>
        {activePlayers.length > 1 && (
          <button className="delete" onClick={handlePlayerDelete(playerNumber)}>
            <span className="material-symbols-outlined">close</span>{" "}
          </button>
        )}
        <h4 className="player-number">{`Player #${playerNumber + 1}`}</h4>
        <div className="player-name">
          {user ? (
            <p className="username">{user}</p>
          ) : (
            <input
              type="text"
              placeholder="name"
              onChange={handleChange(playerNumber)}
              value={activePlayers[playerNumber]}
              onFocus={(e) => (focusRef.current = playerNumber)}
              onBlur={() => (focusRef.current = null)}
              autoFocus={playerNumber === +focusRef.current}
            />
          )}
        </div>
      </div>
    );
  };

  const handleChange = (playerNumber) => (e) => {
    const playersCopy = [...activePlayers];
    playersCopy[playerNumber] = e.target.value;
    setActivePlayers(playersCopy);
  };

  const handlePlayerDelete = (playerNumber) => (e) => {
    const playersCopy = [...activePlayers];
    playersCopy.splice(playerNumber, 1);
    setActivePlayers(playersCopy);
  };

  const handleAddPlayerClick = () => {
    setActivePlayers([...activePlayers, ""]);
  };

  const handlePlayButtonClick = () => {
    activePlayers.every((name) => name.length > 0) && setIsSettingUp(false);
  };

  return (
    <div className="game-setup">
      <div className="players-container">
        {activePlayers.map((p, i) => {
          if (activeUsers.find((u) => u.username === p))
            return <PlayerCard key={i} user={p} playerNumber={i} />;
          return <PlayerCard key={i} playerNumber={i} />;
        })}
      </div>
      <div className="btn-group">
        <YahtzeeButton
          onClick={handleAddPlayerClick}
          disabled={activePlayers.length > 3}
        >
          Add Player
        </YahtzeeButton>
        <YahtzeeButton onClick={handlePlayButtonClick}>PLAY!</YahtzeeButton>
      </div>
    </div>
  );
};

export default GameSetup;
