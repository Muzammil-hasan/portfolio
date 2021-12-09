import React, { useState } from "react";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import ToggleTheme from "../components/ToggleTheme";

const Header = ({ switchTheme, theme }) => {
	const [active, setActive] = useState(false);

	return (
		<header className='header'>
			<Logo />
			<ToggleTheme switchTheme={switchTheme} theme={theme} />
		</header>
	);
};

export default Header;
