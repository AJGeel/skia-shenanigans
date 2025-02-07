import { useEffect, useState } from "react";

type ColorScheme = {
  name: string;
  colors: [string, string, string];
};

const COLOR_SCHEMES: ColorScheme[] = [
  {
    name: "Tropical Paradise",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"], // Coral red, turquoise, ocean blue
  },
  {
    name: "Royal Mystery",
    colors: ["#9B4DCA", "#6772E5", "#B76EF5"], // Purple, indigo, lavender
  },
  {
    name: "Urban Jungle",
    colors: ["#00BD9D", "#8C4966", "#FF8C42"], // Teal, wine, orange
  },
  {
    name: "Electric Dreams",
    colors: ["#FF61E6", "#5D13E7", "#19B5FE"], // Hot pink, deep purple, electric blue
  },
  {
    name: "Nature's Bold",
    colors: ["#2ECC71", "#E74C3C", "#8E44AD"], // Emerald, crimson, plum
  },
];

export const useColorScheme = (intervalMs: number = 1000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>(
    COLOR_SCHEMES[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % COLOR_SCHEMES.length;
        setCurrentScheme(COLOR_SCHEMES[nextIndex]);
        return nextIndex;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return {
    name: currentScheme.name,
    colors: currentScheme.colors,
    index: currentIndex,
    totalSchemes: COLOR_SCHEMES.length,
  };
};
