import { useState } from "react";
import { colors } from "../constants/colors";

//colors list

const useColor = () => {
	const [currentColor, setCurrentColor] = useState(colors[0]);

	const setColor = (id: number) => {
		const currentColor = colors.find((item) => id == item.id);
		setCurrentColor(currentColor ?? colors[0]);
	};
	return { colors, setColor, currentColor };
};

export default useColor;
