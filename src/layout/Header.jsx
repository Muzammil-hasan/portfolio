import Logo from "../components/Logo";
import ToggleTheme from "../components/ToggleTheme";

const Header = ({ switchTheme, theme }) => {
	return (
		<header className="header">
			<Logo />
			<ToggleTheme switchTheme={switchTheme} theme={theme} />
		</header>
	);
};

export default Header;
