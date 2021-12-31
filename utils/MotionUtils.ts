export const variants = {
	hidden: {
		scale: 0.8,
		opacity: 0,
	},
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			delay: 0.7,
		},
	},
	pageInitial: {
		opacity: 0,
	},
	pageAnimate: {
		opacity: 1,
		transition: { delay: 0.3 },
	},
	pageExit: {
		backgroundColor: "white",
		filter: `invert()`,
		opacity: 0,
	},
	bounce: {
		scale: 2,
		transition: {
			type: "spring",
			stiffness: 50,
			mass: 0.5,
			damping: 10,
			restDelta: 0.5,
			restSpeed: 10,
			repeat: Infinity,
		},
	},
	shallow: {
		scale: 2,
		transition: {
			type: "spring",
			stiffness: 50,
			mass: 0.5,
			damping: 10,
			restDelta: 0.5,
			restSpeed: 10,
			repeat: Infinity,
		},
	},
};
