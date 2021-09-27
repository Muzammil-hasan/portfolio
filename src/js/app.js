import React, { useRef, useEffect, useState } from "react";
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
import Header from "./layout/Header";
import Cursor from "./components/Cursor";

function App() {
  const dot = useRef(null);
  const [active, setActive] = useState(false);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(4)";
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  return (
    <>
      <Header
        dot={dot}
        active={active}
        setActive={setActive}
        mouseOverEvent={mouseOverEvent}
        mouseOutEvent={mouseOutEvent}
      />
      <Cursor active={active} dot={dot} />
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop>
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About
                dot={dot}
                mouseOverEvent={mouseOverEvent}
                mouseOutEvent={mouseOutEvent}
              />
            </Route>
            <Route exact path='/contact'>
              <Contact
                dot={dot}
                mouseOverEvent={mouseOverEvent}
                mouseOutEvent={mouseOutEvent}
              />
            </Route>
            <Route exact path='/projects'>
              <Projects
                dot={dot}
                mouseOverEvent={mouseOverEvent}
                mouseOutEvent={mouseOutEvent}
              />
            </Route>
            <Route exact path='/projects/:id'>
              <Project />
            </Route>
          </Switch>
        </ScrollToTop>
      </AnimatePresence>
    </>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

export default App;
