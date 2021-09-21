import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/*--------------------------------------------------------------
# Pages
--------------------------------------------------------------*/
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

/*--------------------------------------------------------------
# Components
--------------------------------------------------------------*/
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/projects/:id'>
            <Project />
          </Route>
        </Switch>
      </ScrollToTop>
    </AnimatePresence>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

export default App;
