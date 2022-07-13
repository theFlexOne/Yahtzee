import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import LeaveGameConfirmation from "../LeaveGameConfirmation/LeaveGameConfirmation";
import DefaultProfileBadge from "../DefaultProfileBadge/DefaultProfileBadge";

const Header = () => {
  const [isLeavingGame, setIsLeavingGame] = useState(false);

  const { user, actions } = useUser();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const confirmLeave = () => {
    setIsLeavingGame(false);
    navigate("/home");
  };

  const cancelLeave = () => setIsLeavingGame(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (pathname === "/game") {
      setIsLeavingGame(true);
      return;
    }
    navigate("/");
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    fetch("/logout", { method: "DELETE" }).then(() => {
      actions.setCurrentUser(null);
      navigate("/");
    });
  };

  return (
    <>
      {isLeavingGame && (
        <LeaveGameConfirmation confirm={confirmLeave} cancel={cancelLeave} />
      )}

      <header>
        <Link to="/" onClick={handleLogoClick}>
          <svg
            viewBox="0 0 823 283"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_1)">
              <path
                d="M405.742 57.276L446.762 57.181L439.488 90.4191L451.778 90.5698L444.731 122.769L432.365 122.963L406.983 238.939L365.963 239.034L391.345 123.058L379.39 122.98L386.513 90.4317L398.468 90.514L405.742 57.276Z"
                fill="white"
              />
              <path
                d="M51.1877 144.029L9.30264 38.7164L63.3065 38.9291L84.3118 92.1357L126.849 38.685L180.854 38.8927L95.1228 143.844L74.3611 238.707L30.4271 238.887L51.1877 144.029Z"
                fill="white"
              />
              <path
                d="M277.586 38.9868L318.815 39.2368L307.605 90.4556L340.631 90.4586C370.487 90.7999 377.656 109.916 372.698 132.57L349.416 238.948L308.08 239.19L329.206 142.662C331.9 130.35 328.377 122.87 316.512 122.854L300.491 122.96L275.054 239.187L233.825 238.937L277.586 38.9868V38.9868Z"
                fill="white"
              />
              <path
                d="M185.288 90.5215L255.988 90.5125L223.652 238.259L182.316 238.502L185.011 226.189C169.85 238.87 160.785 242.563 144.272 242.561C110.261 242.343 96.692 205.312 103.806 172.808C116.309 115.679 152.862 90.1338 185.288 90.5215ZM188.178 122.119C164.94 122.194 153.903 141.969 147.22 172.504C142.154 195.651 151.217 208.472 163.467 209.089C173.64 209.767 185.321 203.55 193.479 189.853L208.246 122.382L187.578 122.503L188.178 122.119Z"
                fill="white"
              />
              <path
                d="M457.315 90.1921L567.166 90.4945C555.31 144.668 489.038 178.675 474.799 206.008L541.837 206.229L534.723 238.734L420.609 239.047C431.387 189.798 485.409 155.174 515.761 122.595L450.201 122.696L457.315 90.1921Z"
                fill="white"
              />
              <path
                d="M621.396 120.942C634.246 121.174 639.585 132.148 638.691 143.306L593.199 143.671C599.819 127.573 609.915 121.526 621.396 120.942ZM633.865 87.5455C600.871 80.3244 561.762 110.471 548.891 155.133C534.712 201.058 551.221 234.087 584.216 241.308C617.702 248.637 649.454 226.17 664.817 191.342L626.266 190.646C620.016 202.697 610.413 208.852 600.24 208.174C589.852 208.481 580.419 199.707 586.024 174.098L670.175 173.936C682.169 128.566 670.415 95.0286 633.973 87.053L633.865 87.5455Z"
                fill="white"
              />
              <path
                d="M746.667 121.523C759.133 121.154 763.979 132.021 763.578 143.287L718.686 143.267C724.813 127.061 735.402 121.122 746.667 121.523V121.523ZM759.352 87.1413C726.358 79.9201 687.249 110.067 673.178 155.498C659.599 201.038 676.492 234.668 709.487 241.889C742.974 249.218 773.848 226.043 790.304 190.938L751.537 191.227C745.011 202.185 735.407 208.34 725.019 208.647C714.739 208.461 705.414 199.195 711.019 173.586L795.061 173.917C807.548 128.654 795.794 95.1169 758.86 87.0335L759.352 87.1413Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1">
                <rect
                  width="797"
                  height="304"
                  fill="white"
                  transform="translate(33.4736 -71.7242) rotate(12.3451)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <span>
          {user ? (
            <>
              <DefaultProfileBadge username={user.username} />
              <Link className="logout" to="/" onClick={handleLogoutClick}>
                Logout
              </Link>
              {/* <p className="welcome-user">Welcome, {user.username}</p> */}
            </>
          ) : (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </span>
      </header>
    </>
  );
};

export default Header;
