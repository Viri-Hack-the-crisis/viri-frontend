import React, { useState, createContext } from "react";

export const StoreContext = createContext();

export default ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [confirmedInfected, setConfirmedInfected] = useState(0);

  const store = {
    userLoggedIn,
    setUserLoggedIn,
    confirmedInfected,
    setConfirmedInfected
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
