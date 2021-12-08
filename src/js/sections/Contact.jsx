import React from "react";

import { motion } from "framer-motion";
import Form from "../components/Form";
import { useStore } from "../contexts/Store";

const Contact = () => {
	const { content, mouseOutEvent, mouseOverEvent } = useStore();

	const personalDetails = [
		{
			id: 1,
			title: "Contact information",
			links: [
				{
					linkName: "muzammilhasan.business@gmail.com",
					url: "mailto:muzammilhasan.business@gmail.com",
				},
			],
		},
		{
			id: 2,
			title: "Want to call?",
			links: [
				{
					linkName: "+91 9717931398",
					url: "tel:+919717931398",
				},
			],
		},
		{
			id: 3,
			title: "Social",
			links: [
				{
					linkName: "Linkedin",
					url: "https://www.linkedin.com/in/muzammil-hasan-5279b61b8",
				},
				{
					linkName: "Github",
					url: "https://github.com/Muzammil-hasan",
				},
				{
					linkName: "Whatsapp",
					url: "https://wa.me/+919717931398",
				},
				{
					linkName: "Twitter",
					url: "https://twitter.com/Muzammil___syed?s=09",
				},
			],
		},
	];

	return (
		<>
			<section className='contact'>
				<motion.div
					variants={content}
					initial='initial'
					animate='animate'
					exit='exit'
					className='contact__divider'></motion.div>

				<motion.div
					variants={content}
					initial='initial'
					animate='animate'
					exit='exit'
					className='contact__personal'>
					<div>
						{personalDetails.map(({ title, id, links }) => {
							return (
								<div key={id} className='contact__personal-container'>
									<h3 className='contact__personal-container-title'>{title}</h3>
									{links !== undefined &&
										links.map(({ linkName, url }) => {
											return (
												<a
													key={linkName}
													href={url}
													target='_blank'
													rel='noopener noreferrer'
													onMouseOut={mouseOutEvent}
													onMouseOver={mouseOverEvent}>
													{linkName}
												</a>
											);
										})}
								</div>
							);
						})}
					</div>
				</motion.div>
				<Form mouseOutEvent={mouseOutEvent} mouseOverEvent={mouseOverEvent} content={content} />
			</section>
		</>
	);
};

export default Contact;
