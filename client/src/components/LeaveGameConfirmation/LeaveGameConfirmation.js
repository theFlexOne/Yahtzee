import "./leaveGameConfirmation.css";

const LeaveGameConfirmation = ({ isLeavingGame, confirm, cancel }) => {
  return (
    isLeavingGame && (
      <div className="modal confirmation leave-game">
        <h2>Are you sure you want to leave this game?</h2>
        <div className="buttons">
          <button onClick={confirm}>Yes</button>
          <button onClick={cancel}>Cancel</button>
        </div>
      </div>
    )
  );
};

export default LeaveGameConfirmation;
