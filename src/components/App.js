import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./common/theme";
import { GlobalStyles } from "./common/global";
import { useDarkMode } from "./common/useDarkMode";
import Toggle from "./common/toggle";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="container-fluid">
        <Header />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
