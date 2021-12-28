import { useRouter } from "next/router";
import { useState } from "react";
import { colors } from "../constants/colors";
import { getSelectedColor } from "../utils/ColorUtils";

//colors list

const useColor = () => {
  const router = useRouter();
  const { slug } = router.query;
  const initialColor = slug ? getSelectedColor(parseInt(slug[1])) : colors[0];
  const [currentColor, setCurrentColor] = useState(initialColor);

  const setColor = (id: number) => {
    setCurrentColor(getSelectedColor(id));
  };

  return { colors, setColor, currentColor };
};

export default useColor;
