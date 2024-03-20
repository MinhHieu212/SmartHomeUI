import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    setToken("Token Fake");
    setIsLoading(false);
  };

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
