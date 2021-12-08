import React, { useState } from "react";
import ReactDOM from "react-dom";

/* Sections */
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

/* Components */
import Cursor from "./components/Cursor";
import Noise from "./components/Noise";
import ToggleTheme from "./components/ToggleTheme";
import Preloader from "./layout/Preloader.jsx";

/* Context */
import MouseContextProvider from "./contexts/Store";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
	const [toggleTheme, setToggleTheme] = useState("");

	const darkTheme = "dark";
	const lightTheme = "light";
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
		<main className={`main ${theme == "light" ? "theme-light" : "theme-dark"}`}>
			<MouseContextProvider>
				<Preloader />
				<Noise />
				<Header />
				<Cursor />
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Footer />
				<ToggleTheme switchTheme={switchTheme} theme={theme} />
			</MouseContextProvider>
		</main>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
