import { useState } from "react";
import "./App.css";
import CommentBubble from "./components/CommentBubble/CommentBubble";
import Header from "./components/Header/Header";
// import Game from "./pages/Game/Game";
// import { DiceProvider } from "./context/DiceContext";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <CommentBubble />
      {/* <DiceProvider>
        <Game />
      </DiceProvider> */}
    </div>
  );
}

export default App;
