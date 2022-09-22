import { useRef, useState } from "react";

import "./gameSetup.css";
import YahtzeeButton from "../../../../components/YahtzeeButton/YahtzeeButton";

const DeleteCardButton = ({ className, ...otherProps }) => (
  <button className={`delete ${className}`} {...otherProps}>
    <span className="material-symbols-outlined">close</span>{" "}
  </button>
);

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
          <DeleteCardButton onClick={handlePlayerDelete(playerNumber)} />
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
