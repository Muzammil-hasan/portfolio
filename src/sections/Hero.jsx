import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../contexts/Store";

const Hero = () => {
	const { content } = useStore();

	return (
		<>
			<section className="hero">
				<motion.div
					className="hero_content"
					variants={content}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<div className="hero_content__stroke">
						<svg viewBox="0 0 733 203" fill="none">
							<line
								x1="374.5"
								y1="203"
								x2="374.5"
								y2="2.18557e-08"
								stroke="currentColor"
							/>
							<line
								x1="4.37114e-08"
								y1="202.5"
								x2="733"
								y2="202.5"
								stroke="currentColor"
							/>
						</svg>
					</div>

					<h1 className="hero_content__title">
						Build your <span>ideas</span> into websites.
					</h1>
					<p className="hero_content__subtitle">
						front end developer <span>Based in Delhi</span>
					</p>

					<div className="hero_content__stroke hero_content__stroke--second">
						<svg viewBox="0 0 733 1" fill="none">
							<line x1="733" y1="0.5" y2="0.5" stroke="currentColor" />
						</svg>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default Hero;
