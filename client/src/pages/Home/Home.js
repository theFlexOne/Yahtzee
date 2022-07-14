import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import CounterInput from "../../components/CounterInput/CounterInput";
import { useUser } from "../../context/UserContext";

const Home = () => {
  const playersQuantityRef = useRef();

  const { user } = useUser();

  const navigate = useNavigate();

  // const handlePlayersQuantityChange = (e) => {
  //   setPlayersQuantity(e.target.value);
  // };

  const handleNewGameClick = (e) => {
    e.preventDefault();
    navigate("/game", {
      state: { playersQuantity: playersQuantityRef.current },
    });
  };

  return (
    <div className="home">
      {user ? (
        <>
          <h1>
            Welcome, {user?.username + "!" || ""} Would you like to start a new
            game?
          </h1>

          <form onSubmit={handleNewGameClick}>
            <p>Players:</p>
            <CounterInput playersQuantityRef={playersQuantityRef} />
            <button className="play-btn" type="submit">
              Play!
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>
            Please <Link to="/signup">signup</Link> or{" "}
            <Link to="/login">login</Link> to play!
          </h1>
        </>
      )}
    </div>
  );
};

export default Home;
