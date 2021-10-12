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

/*--------------------------------------------------------------
# Components
--------------------------------------------------------------*/
import ScrollToTop from "./components/ScrollToTop";
import Header from "./layout/Header";
import Cursor from "./components/Cursor";
import Noise from "./components/Noise";

function App() {
  const [toggleTheme, setToggleTheme] = useState(true);

  const routes = [
    { name: "home", path: "/", Component: Home },
    { name: "about", path: "/about", Component: About },
    { name: "projects", path: "/projects", Component: Projects },
    { name: "contact", path: "/contact", Component: Contact },
  ];
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
      dot.current.style.visibility = "visible";
    } else {
      dot.current.style.visibility = "hidden";
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(3.5)";
      dot.current.style.opacity = 0.2;
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)";
      dot.current.style.opacity = 1;
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

  const content = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
        delay: 1.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  };

  return (
    <main className={`main ${toggleTheme ? "theme-light" : "theme-dark"}`}>
      <Noise />
      <Cursor active={active} dot={dot} />
      <Header
        dot={dot}
        active={active}
        setActive={setActive}
        mouseOverEvent={mouseOverEvent}
        mouseOutEvent={mouseOutEvent}
      />
      <AnimatePresence initial='false' exitBeforeEnter>
        <ScrollToTop>
          <Switch>
            {routes.map(({ path, Component, name }) => {
              return (
                <Route key={name} path={path} exact>
                  <Component
                    dot={dot}
                    mouseOverEvent={mouseOverEvent}
                    mouseOutEvent={mouseOutEvent}
                    content={content}
                  />
                </Route>
              );
            })}
          </Switch>
        </ScrollToTop>
      </AnimatePresence>
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
