import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const { pathname } = useLocation();

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const res = await fetch("/auth");
      if (!res.ok) return console.log("No user currently signed in.");
      const user = await res.json();
      setCurrentUser(user);
    };
    checkIfLoggedIn();
  }, []);

  return (
    <UserContext.Provider
      value={{ user: currentUser, actions: { setCurrentUser } }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx)
    return console.error(
      "'useUser' must be called inside the 'UserProvider' component."
    );
  return ctx;
};

export { useUser, UserProvider };
