import { Navigate, Route, Routes as AppRoutes } from "react-router";
import { DiceProvider } from "./context/DiceContext";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";

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
    </AppRoutes>
  );
};

export default Routes;
