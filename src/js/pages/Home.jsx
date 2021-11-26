import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../contexts/Store";
import Preloader from "../layout/Preloader";

const Home = () => {
	const { content } = useStore();

	return (
		<>
			<Preloader />
			<section className='home'>
				<motion.div
					className='home__content'
					variants={content}
					initial='initial'
					animate='animate'
					exit='exit'>
					<div className='home__content-stroke'>
						<svg viewBox='0 0 733 203' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<line x1='374.5' y1='203' x2='374.5' y2='2.18557e-08' stroke='currentColor' />
							<line x1='4.37114e-08' y1='202.5' x2='733' y2='202.5' stroke='currentColor' />
						</svg>
					</div>

					<h1 className='home__content-title'>
						Build your <span>ideas</span> into websites.
					</h1>
					<p className='home__content-subtitle'>
						front end developer <span>Based in Delhi</span>
					</p>

					<div className='home__content-stroke second'>
						<svg viewBox='0 0 733 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<line x1='733' y1='0.5' y2='0.5' stroke='currentColor' />
						</svg>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default Home;
