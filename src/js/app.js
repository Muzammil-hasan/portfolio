import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

/* Components */
import ScrollToTop from "./components/ScrollToTop";
import Header from "./layout/Header";
import Cursor from "./components/Cursor";
import Noise from "./components/Noise";
import ToggleTheme from "./components/ToggleTheme";

/* Context */
import MouseContextProvider from "./contexts/Store";

function App() {
  const routes = [
    { name: "home", path: "/", Component: Home },
    { name: "about", path: "/about", Component: About },
    { name: "projects", path: "/projects", Component: Projects },
    { name: "contact", path: "/contact", Component: Contact },
  ];



  const [toggleTheme, setToggleTheme] = useState(darkTheme);

  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      setToggleTheme(theme);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      localStorage.setItem("theme", "dark");
      setToggleTheme(theme);
      theme = darkTheme;
    }
  };

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  return (
    <main className={`main ${theme == "dark" ? "theme-dark" : "theme-light"}`}>
      <MouseContextProvider>
        <Noise />
        <Cursor />
        <Header />
        <ToggleTheme switchTheme={switchTheme} theme={theme} />

        <AnimatePresence initial='false' exitBeforeEnter>
          <ScrollToTop>
            <Switch>
              {routes.map(({ path, Component, name }) => {
                return (
                  <Route key={name} path={path} exact>
                    <Component />
                  </Route>
                );
              })}
            </Switch>
          </ScrollToTop>
        </AnimatePresence>
      </MouseContextProvider>
    </main>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

export default App;
