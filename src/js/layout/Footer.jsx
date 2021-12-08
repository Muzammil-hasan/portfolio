import React from "react";
import Logo from "../components/Logo";
import { useStore } from "../contexts/Store";

const Footer = () => {
	const { mouseOutEvent, mouseOverEvent } = useStore();

	return (
		<footer id='footer' className='footer'>
			{/* <div className='footer__contact'>
				<h3>Contact Information</h3>
				<div className='email'>
					<p>Email:</p>
					<a href='#'>muzammilsyed270300@gmail.com</a>
				</div>
				<div className='phone'>
					<p>Phone:</p>
					<a href='#'>+91 97179 31398</a>
				</div>
			</div>

			<nav className='footer__nav'>
				<ul className='footer__nav__list'>
					<h3 className='footer__nav__list-title'>On Social</h3>
					<li className='footer__nav__list-item'>
						<a href=''>Twitter</a>
					</li>
					<li className='footer__nav__list-item'>
						<a href=''>Linkedin</a>
					</li>
					<li className='footer__nav__list-item'>
						<a href=''>Github</a>
					</li>
					<li className='footer__nav__list-item'>
						<a href=''>WhatsApp</a>
					</li>
				</ul>
			</nav> */}

			<div className='footer__copyright'>
				<p>
					© 2021 Muzammil - Portfolio. Made with{" "}
					<span>
						<svg
							x='0px'
							y='0px'
							viewBox='0 0 32 32'
							fill='currentColor'
							enableBackground='new 0 0 32 32'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M29.368,17.352l-6.131,6.138l-0.002,0.002l-5.999,6.005
									c-0.682,0.682-1.789,0.682-2.471,0l-6.001-6.005l-0.002-0.002l-6.132-6.138c-3.508-3.513-3.508-9.207,0-12.718
									c3.509-3.512,9.199-3.512,12.708,0l0.177,0.178c0.258,0.253,0.666,0.262,0.939,0.031l0.208-0.209c3.508-3.512,9.196-3.512,12.705,0
									C32.877,8.145,32.877,13.839,29.368,17.352L29.368,17.352z M9.01,6.014c-2.761,0-4.998,2.238-4.998,4.998
									c0,0.553,0.447,1.002,0.999,1.002s0.999-0.449,0.999-1.002h0.015c0-1.504,1.119-2.806,2.649-2.979
									C8.787,8.021,8.898,8.029,9.01,8.029V8.015c0.552,0,0.999-0.449,0.999-1.002C10.009,6.461,9.562,6.014,9.01,6.014L9.01,6.014z'
							/>
						</svg>
					</span>{" "}
					in Delhi, India
				</p>
			</div>
		</footer>
	);
};

export default Footer;
