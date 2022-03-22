import React, { useRef, useEffect, createContext, useContext } from "react";

export const Store = createContext();

export function useStore() {
	return useContext(Store);
}

function StoreProvider({ children }) {
	const cursorEnlarged = useRef(false);

	const dot = useRef(null);

	const cursorVisible = useRef(true);

	const endX = useRef(window.innerWidth / 2);
	const endY = useRef(window.innerHeight / 2);

	useEffect(() => {
		document.addEventListener("mousemove", mouseMoveEvent);
		document.addEventListener("mouseenter", mouseEnterEvent);
		document.addEventListener("mouseleave", mouseLeaveEvent);

		return () => {
			document.removeEventListener("mousemove", mouseMoveEvent);
			document.removeEventListener("mouseenter", mouseEnterEvent);
			document.removeEventListener("mouseleave", mouseLeaveEvent);
		};
	}, []);

	const toggleCursorVisibility = () => {
		if (cursorVisible.current) {
			dot.current.style.visibility = "visible";
		} else {
			dot.current.style.visibility = "hidden";
		}
	};

	const toggleCursorSize = () => {
		if (cursorEnlarged.current) {
			dot.current.style.transform = "translate(-50%, -50%) scale(6)";
			// dot.current.style.opacity = 0.2;
		} else {
			dot.current.style.transform = "translate(-50%, -50%) scale(1)";
			// dot.current.style.opacity = 1;
		}
	};

	const mouseOverEvent = () => {
		cursorEnlarged.current = true;
		toggleCursorSize();
	};

	const mouseOutEvent = () => {
		cursorEnlarged.current = false;
		toggleCursorSize();
	};

	const mouseEnterEvent = () => {
		cursorVisible.current = true;
		toggleCursorVisibility();
	};

	const mouseLeaveEvent = () => {
		cursorVisible.current = false;
		toggleCursorVisibility();
	};

	const mouseMoveEvent = (e) => {
		cursorVisible.current = true;
		toggleCursorVisibility();

		endX.current = e.pageX;
		endY.current = e.pageY;

		dot.current.style.top = endY.current + "px";
		dot.current.style.left = endX.current + "px";
	};

	const content = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 0.7,
				delay: 1.5,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				ease: "easeInOut",
				duration: 0.7,
			},
		},
	};

	const values = { dot, mouseOverEvent, mouseOutEvent, content };

	return <Store.Provider value={values}>{children}</Store.Provider>;
}

export default StoreProvider;
