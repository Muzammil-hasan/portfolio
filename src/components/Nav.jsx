import { motion } from "framer-motion";
import { useStore } from "../contexts/Store";

const Nav = ({ active, setActive }) => {
	const pages = ["home", "about", "projects", "contact"];

	const { mouseOutEvent, mouseOverEvent } = useStore();

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={active ? { opacity: 0.6 } : { opacity: 0 }}
				transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
				className="header__overlay"
			></motion.div>

			<motion.nav
				initial={{ x: "100%" }}
				animate={active ? { x: 0 } : { x: "100%" }}
				transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
				className="header__nav"
			>
				<ul className="header__nav__list">
					{pages.map((page) => {
						return (
							<li key={page} className="header__nav__list-item">
								<a
									onClick={() => setActive(!active)}
									onMouseOver={mouseOverEvent}
									onMouseOut={mouseOutEvent}
									href={`/${page !== "home" ? page : ""}`}
								>
									{page}
								</a>
							</li>
						);
					})}

					<li className="header__nav__list-item --social">
						<a
							href="https://www.instagram.com/muzammil______syed/"
							rel="noopener noreferrer"
							onClick={() => setActive(!active)}
							onMouseOver={mouseOverEvent}
							onMouseOut={mouseOutEvent}
						>
							say hi on instagram
						</a>
					</li>
				</ul>
			</motion.nav>
		</>
	);
};

export default Nav;
