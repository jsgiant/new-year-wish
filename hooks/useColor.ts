import React, { useState, useEffect } from "react";

//colors list

const useColor = () => {
  const colors = [
    { id: 0, name: "blue", color: "#0070f3" },
    { id: 1, name: "green", color: "#10B981" },
    { id: 2, name: "violet", color: "#8B5CF6" },
    { id: 3, name: "yellow", color: "#FBBF24" },
    { id: 4, name: "red", color: "#E11D48" },
    { id: 5, name: "pink", color: "#D817AD" },
    { id: 6, name: "black", color: "#111010" },
  ];

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const setColor = (id: number) => {
    const requiredTheme = colors.find((item) => id == item.id);
  };

  return { colors, setColor, currentColor };
};

export default useColor;
