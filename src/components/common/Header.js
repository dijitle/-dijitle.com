import React from "react";
import { NavLink } from "react-router-dom";
import Toggle from "./toggle";
import { lightTheme, darkTheme } from "./theme";
import { useDarkMode } from "./useDarkMode";
import { ThemeProvider } from "styled-components";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <div className="sticky-top themeMode">
      <nav className="navbar">
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </nav>
      <div className="text-right">
        <ThemeProvider theme={themeMode}>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
