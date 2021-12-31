import { colors } from "../constants/colors";

export const getSelectedColor = (colorId: number) => {
  const currentColor = colors.find((item) => colorId === item.id);
  return currentColor ?? colors[0];
};
