import { Navigate, Route, Routes as AppRoutes } from "react-router";
import { DiceProvider } from "./context/DiceContext";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route
        path="/game"
        element={
          <DiceProvider>
            <Game />
          </DiceProvider>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </AppRoutes>
  );
};

export default Routes;
