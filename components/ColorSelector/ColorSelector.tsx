import React from "react";
import { colors } from "../../constants/colors";
import useColor from "../../hooks/useColor";

import {
	Color,
	ColorSelectorForm,
	ColorSelectorWrapper,
	SelectColorText,
} from "./styledComponents";

export const ColorSelector = () => {
	const { currentColor, setColor } = useColor();
	return (
		<>
			<SelectColorText>Select the color of your wish</SelectColorText>
			<ColorSelectorWrapper>
				<ColorSelectorForm onChange={(e: any) => setColor(e.target.id)}>
					{colors.map((color, index) => (
						<Color
							key={color.id}
							type='radio'
							color={color.color}
							id={color.id.toString()}
							name='color'
							value={color.color}
							defaultChecked={currentColor.id === color.id}
						/>
					))}
				</ColorSelectorForm>
			</ColorSelectorWrapper>
		</>
	);
};
