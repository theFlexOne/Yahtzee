import { useState } from "react";
import { useNavigate } from "react-router";
import "./App.css";
// import CommentBubble from "./components/CommentBubble/CommentBubble";
import CommentModal from "./components/CommentModal/CommentModal";
import Header from "./components/Header/Header";
import LeaveGameConfirmation from "./components/LeaveGameConfirmation/LeaveGameConfirmation";
// import Modal from "./components/Modal/Modal";
// import Game from "./pages/Game/Game";
// import { DiceProvider } from "./context/DiceContext";
import Routes from "./Routes";

function App() {
  const [isOpenCommentModal, setIsOpenCommentModal] = useState(false);
  // const [isLeavingGame, setIsLeavingGame] = useState(false);

  // const navigate = useNavigate();

  // const confirmLeave = () => {
  //   setIsLeavingGame(false);
  //   navigate("/");
  // };

  // const cancelLeave = () => setIsLeavingGame(false);

  return (
    <div className="App">
      <Header />
      <Routes />
      <CommentModal
        isOpen={isOpenCommentModal}
        closeModal={() => setIsOpenCommentModal(false)}
      />
      {/* <LeaveGameConfirmation
        isLeavingGame={isLeavingGame}
        confirm={confirmLeave}
        cancel={cancelLeave}
      /> */}
    </div>
  );
}

export default App;
