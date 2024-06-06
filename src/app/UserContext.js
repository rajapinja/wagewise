// UserContext.js
import React, { createContext, useState, useContext } from 'react';

//Use Context
 const UserContext = createContext();
//Theme Context
const ThemeContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, role, setRole }}>
      <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        {children}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

 export const useUserContext = () => useContext(UserContext);
