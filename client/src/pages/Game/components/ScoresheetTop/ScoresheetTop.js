import yahtzeeLogo from "../../../../assets/Slice 1.svg";
import "./scoresheetTop.css";

const ScoresheetTop = ({ player }) => {
  return (
    <div className="scoresheet-top">
      <img width="40%" src={yahtzeeLogo} alt="yahtzee logo" />
      <div className="player-name">
        <h5>Name</h5>
        <span className="player-name-slot">
          <p>{player?.name || `Player ${player?.id}` || "Anonymous"}</p>
        </span>
      </div>
    </div>
  );
};

export default ScoresheetTop;
