import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import CounterInput from "../../components/CounterInput/CounterInput";

const Home = () => {
  const [playersQuantity, setPlayersQuantity] = useState(1);

  const navigate = useNavigate();

  const handlePlayersQuantityChange = (e) => {
    setPlayersQuantity(e.target.value);
  };

  const handleNewGameClick = (e) => {
    e.preventDefault();
    navigate("/game", { state: { playersQuantity } });
  };

  return (
    <div className="home">
      <h1>Welcome! Would you like to start a new game?</h1>
      <form onSubmit={handleNewGameClick}>
        <p>Players:</p>
        <CounterInput />
        {/* <label htmlFor="playersQuantity">Number of players:</label>
        <input
          type="number"
          name="playersQuantity"
          id="playersQuantity"
          min="1"
          max="4"
          value={playersQuantity}
          onChange={handlePlayersQuantityChange}
        /> */}
        <button className="play-btn" type="submit">
          Play!
        </button>
      </form>
    </div>
  );
};

export default Home;
