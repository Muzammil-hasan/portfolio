import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
	return (
		<AnimatePresence initial="false" exitBeforeEnter>
			<motion.div
				className="preloader"
				initial={{ y: "100%" }}
				animate={{ y: ["100%", "0%", "-100%"] }}
				transition={{
					duration: 1.5,
					ease: [0.96, 0.37, 0.25, 1],
				}}
			></motion.div>
		</AnimatePresence>
	);
};

export default Preloader;
