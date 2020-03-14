import React, { useState, createContext } from "react";

export const StoreContext = createContext();

export default ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const store = {
    userLoggedIn,
    setUserLoggedIn
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
