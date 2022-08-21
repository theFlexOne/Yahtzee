import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const memoizedValue = useMemo(
    () => ({ user: currentUser, actions: { setCurrentUser } }),
    [currentUser]
  );

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
    <UserContext.Provider value={memoizedValue}>
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
