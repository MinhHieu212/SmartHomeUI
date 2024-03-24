import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // We need to store userToken for step auto login  when user start the app
  const login = (userToken) => {
    setToken(userToken);
    setIsLoading(false);
  };

  // delete userToken in local storage
  const logout = () => {
    setToken(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
