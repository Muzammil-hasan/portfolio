import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useStore } from "../contexts/Store";
import locomotiveScroll from "locomotive-scroll";

const Projects = () => {
	const { content, mouseOutEvent, mouseOverEvent } = useStore();

	// const scrollRef = React.createRef();
	const projects = [
		{
			id: 1,
			name: "Blu South",
			imageMain: "../../../dist/images/blusouth/blusouth-main.jpg",
			siteLink: "https://www.blusouthtownhomes.com/",
		},
		{
			id: 2,
			name: "Spring Field",
			imageMain: "../../../dist/images/springfield/springfield-left.jpg",
			siteLink: "https://www.springfieldal.com/",
		},
		{
			id: 3,
			name: "Stonesfair",
			imageMain: "../../../dist/images/stonesfair/main.jpg",
			siteLink: "https://stonesfairmgmt.com/",
		},
		{
			id: 4,
			name: "Holland Village",
			imageMain: "../../../dist/images/hollandvillage/holland-village-main.jpg",
			siteLink: "https://hollandvillage.net/",
		},
	];

	// useEffect(() => {
	// 	const scroll = new locomotiveScroll({
	// 		el: scrollRef.current,
	// 		smooth: true,
	// 		multiplier: 0.8,
	// 	});
	// }, [scrollRef.current]);

	return (
		<>
			<motion.section className='projects'>
				<motion.div
					variants={content}
					initial='initial'
					animate='animate'
					exit='exit'
					className='projects__content'
					data-scroll
					data-scroll-speed='1'
					data-scroll-position='top'>
					<p>my work</p>
					<h1 className='projects__content-title'>Explore some of my recent projects.</h1>
				</motion.div>

				<motion.ul
					variants={content}
					initial='initial'
					animate='animate'
					exit='exit'
					className='projects__container'>
					{projects.map((project) => {
						const { imageMain, id, name, siteLink } = project;
						return (
							<li
								data-scroll
								data-scroll-speed='3'
								data-scroll-position='top'
								key={id}
								className={`projects__container__item ${name.toLowerCase().split(" ").join("-")}`}>
								<div className='projects__container__item-image'>
									<a href={siteLink}>
										<motion.img
											whileHover={{
												scale: 1.1,
											}}
											transition={{
												ease: "easeInOut",
												duration: 1,
											}}
											src={imageMain}
											alt={name}
											onMouseOver={mouseOverEvent}
											onMouseOut={mouseOutEvent}
										/>
									</a>
								</div>
								<a
									className='projects__container__item-cta'
									href={siteLink}
									target='_blank'
									onMouseOver={mouseOverEvent}
									onMouseOut={mouseOutEvent}>
									{name}
									<span>
										<svg viewBox='0 0 26 26' fill='none'>
											<path
												d='M1.99981 25.9394L24.0151 3.92409V19H25.9998V0.550049L6.99981 0.5V2.5L22.6258 2.53478L0.660738 24.5L1.99981 25.9394Z'
												fill='currentColor'
											/>
										</svg>
									</span>
								</a>
							</li>
						);
					})}
				</motion.ul>
			</motion.section>
		</>
	);
};

export default Projects;
