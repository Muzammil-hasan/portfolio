import React, { useState } from "react";
import { useStore } from "../contexts/Store";
import Nav from "../components/Nav";
import Logo from "../components/Logo";

const Header = () => {
	const { mouseOutEvent, mouseOverEvent } = useStore();
	const [active, setActive] = useState(false);

	return (
		<>
			<Logo />
			<header className='header'>
				{/* <div className='header__hamburger__container'>
					<button
						className={`header__hamburger__container-hamburger ${active ? "active" : ""}`}
						onMouseOver={mouseOverEvent}
						onMouseOut={mouseOutEvent}
						onClick={() => setActive(!active)}>
						<svg viewBox='0 0 200 200'>
							<g strokeWidth='2'>
								<path
									d='M72 82.286h28.75'
									fill='#009100'
									fillRule='evenodd'
									stroke='currentColor'
								/>
								<path
									d='M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554'
									fill='none'
									stroke='currentColor'
								/>
								<path
									d='M72 125.143h28.75'
									fill='#009100'
									fillRule='evenodd'
									stroke='currentColor'
								/>
								<path
									d='M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554'
									fill='none'
									stroke='currentColor'
								/>
								<path
									d='M100.75 82.286h28.75'
									fill='#009100'
									fillRule='evenodd'
									stroke='currentColor'
								/>
								<path
									d='M100.75 125.143h28.75'
									fill='#009100'
									fillRule='evenodd'
									stroke='currentColor'
								/>
							</g>
						</svg>
					</button>
				</div> */}

				<Nav active={active} setActive={setActive} />
			</header>
		</>
	);
};

export default Header;
